import { getChannel } from '../config/rabbitmq.js';


export async function sendToQueue(payload) {
    try {
        const channel = getChannel();

        channel.sendToQueue('fila_estoque', Buffer.from(JSON.stringify(payload)), {
            contentType: 'application/json',
            persistent:true
        });

        

    } catch (error) {
        console.error('❌ Erro ao enviar para RabbitMQ:', error);
    }
}