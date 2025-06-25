import fetch from 'node-fetch';
import { buildPixResponseSchema } from '../models/pixResponseSchema.js';


export async function createPix({ amount, description, customer }) {
    const response = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.apiKey}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            amount,
            expiresIn: 10,
            description,
            customer
        })
    });

    const json = await response.json();

    try{
        const parsed = buildPixResponseSchema(json);
        return parsed;

    } catch(error){
    console.error("Resposta inválida do gateway abacatePay", error);
    throw new Error("A resposta da API não está no formato esperado.");
    }
}