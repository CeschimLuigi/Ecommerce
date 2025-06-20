import amqp from 'amqplib';
import 'dotenv/config'

let connection;
let channel;
const queue = 'fila_estoque';


const RABBITMQ_URL = process.env.RABBITMQ_URL;

export async function initRabbitMQ() {
    try{
        connection = await amqp.connect(RABBITMQ_URL);
        channel = await connection.createChannel();
        await channel.assertQueue(queue, {durable:true})
        console.log('✅ Conectado ao RabbitMQ e fila pronta:', queue);

    }catch (error){
        console.error('❌ Erro ao inicializar o RabbitMQ:', error);
    }
}

    export function getChannel(){
        if(!channel){
            throw new Error('Canal RabbitMQ não foi inicializado. Chame initRabbitMQ primeiro.');
        }

        return channel;


        
    }

    export async function closeRabbitMQ() {
    if (channel) await channel.close();
    if (connection) await connection.close();
    console.log('🔌 Conexão com RabbitMQ encerrada.');
}

