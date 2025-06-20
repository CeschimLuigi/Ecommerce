import express, { json } from 'express'
import fetch from 'node-fetch';
import 'dotenv/config'
import cors from 'cors'
import amqp from 'amqplib'

const app = express();
const PORT = 3000;
const RABBITMQ_URL = 'amqp://admin:admin@localhost:5672';
amqp.connect(RABBITMQ_URL)



app.use(cors({
    origin: 'http://127.0.0.1:5500', // URL do seu frontend local (exemplo)
    methods: ['GET', 'POST'], // Define quais métodos são aceitos
    allowedHeaders: ['Content-Type'] // Define os headers permitidos

}));
app.use(express.json());


async function sendToQueue(payload) {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        const queue = 'fila_estoque';

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)),{
            contentType: "application/json"

        });

        console.log("✅ Payload enviado para a fila:", payload);

        await channel.close();
        await connection.close();
    } catch (error) {
        console.error("❌ Erro ao enviar para RabbitMQ:", error);
    }
}


app.post('/create-pix', async (req, res) => {
    try {
        const { amount, description, customer, itens } = req.body;

        const options = {
            amount,
            expiresIn: 300,
            description,
            customer
        }

        const response = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        });

        const data = await response.json();

        const pixId = data?.data?.id || null;
        const status = data?.data?.status || null;

        const payload =  {
            pixId,
            amount,
            expiresIn: 300,
            description,
            customer,
            itens,
            status
            
        
        }

        
        
        sendToQueue(payload);

        console.log(JSON.stringify(payload))
        res.json(data);
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});