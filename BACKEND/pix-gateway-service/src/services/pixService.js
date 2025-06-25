import axios from "axios";
import { buildPixResponseSchema } from "../schemas/pixSchema.js";
import dotenv from 'dotenv';
dotenv.config();

export async function createPix({amount}) {
    try{
        const { data } = await axios.post(
            'https://api.abacatepay.com/v1/pixQrCode/create',
            {
                amount,
                description:"Apagento gerado pela AbacatePay",
                expiresIn:300

            },
            {
                headers:{
                    Authorization:
                    `Bearer ${process.env.apiKey}`,
                    'Content-Type': 'application/json'

                }
            }

        );

        return buildPixResponseSchema(data.data)
        
        

    }catch(error){
        console.log(error)
        throw new Error("Função createPix com problemas...")
    }
    
}