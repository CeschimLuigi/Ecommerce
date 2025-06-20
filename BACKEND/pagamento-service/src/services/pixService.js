import fetch from 'node-fetch';

export async function createPix({ amount, description, customer }) {
    const response = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount,
            expiresIn: 300,
            description,
            customer
        })
    });

    return await response.json();
}