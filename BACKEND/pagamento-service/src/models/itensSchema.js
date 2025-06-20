import { z } from 'zod'


export const itemSchema = z.object({
    produtoId: z.string(),
    nome: z.string(),
    quantidade: z.number().int().positive(),
    preco: z.number().nonnegative()
});
