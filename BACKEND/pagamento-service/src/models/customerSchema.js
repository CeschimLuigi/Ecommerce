import { z } from 'zod'

export const customerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    taxId: z.string(), // ou use regex pra formato
    cellphone:z.string().regex(/^\(\d{2}\)\s9\d{4}-\d{4}$/,{
        message:'Formato inválido de celular. Use (XX) 9XXXX-XXXX'

    })
});
