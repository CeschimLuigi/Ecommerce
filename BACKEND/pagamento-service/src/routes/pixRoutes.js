import express from 'express';
import { createPix } from '../services/pixService.js';
import { sendToQueue } from '../queues/sendToQueue.js';
import { buildPixPayload } from '../models/pixPayloadSchema.js';

const router = express.Router();

router.post('/create-pix', async (req, res) => {
    try {
        const { amount, description, customer, itens } = req.body;

        const data = await createPix({ amount, description, customer });

        const payload = buildPixPayload({
            pixId: data?.data?.id || null,
            amount,
            expiresIn: 300,
            description,
            customer,
            itens,
            status: data?.data?.status || null

        }); 
            
        

        await sendToQueue(payload);

        console.log(JSON.stringify(payload));
        res.json(data);
    } catch (error) {
        console.error('Erro ao criar PIX:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;