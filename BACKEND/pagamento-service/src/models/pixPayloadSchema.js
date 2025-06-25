import { z } from 'zod'
import { customerSchema } from './customerSchema.js';
import { itemSchema } from './itensSchema.js';

export const pixPayloadSchema = z.object({
    pixId: z.string(),
    amount: z.number().positive(),
    description: z.string().min(5).nullable(),
    customer: customerSchema,
    itens: z.array(itemSchema),
    expiresIn: z.number().optional().default(300),
    status: z.enum(['PENDING', 'PAID', 'CANCELED']).optional().default('PENDING')
});

export function buildPixPayload(data) {
    const parsed = pixPayloadSchema.parse(data); // lança erro se inválido
    return parsed;
}
