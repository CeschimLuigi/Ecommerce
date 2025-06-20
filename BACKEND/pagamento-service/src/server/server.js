import app from '../app.js';
import { initRabbitMQ, closeRabbitMQ } from '../config/rabbitmq.js';

const PORT = 3000;

async function startServer() {
    await initRabbitMQ();

    const server = app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });

    // Encerra conexão com o RabbitMQ ao fechar o app
    process.on('SIGINT', async () => {
        console.log('\n⏳ Encerrando servidor...');
        await closeRabbitMQ();
        server.close(() => {
            console.log('🛑 Servidor finalizado.');
            process.exit(0);
        });
    });
}

startServer();