import { z } from 'zod'
import { customerSchema } from './customerSchema.js';
import { itemSchema } from './itensSchema.js';

export const requestBodyDTO = z.object({
    amount: z.number().positive(),
    description: z.string().nullable(),
    customer: customerSchema,
    itens: z.array(itemSchema)


});

export function buildRequestBodyDTO(data){
    const parsed = requestBodyDTO.parse(data);
    return parsed;
}

 