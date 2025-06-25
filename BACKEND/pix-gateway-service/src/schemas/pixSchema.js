import { z } from 'zod';

export const pixResponseSchema = z.object({
  id: z.string(),
  brCodeBase64: z.string(),
  brCode: z.string(),
  status: z.enum(['PENDING', 'PAID', 'CANCELED']),
  createdAt:z.string().datetime({offset:true}),
  expiresAt:z.string().datetime({offset:true}),
  amount:z.number().positive()
});

export function buildPixResponseSchema(data) {
  return pixResponseSchema.parse(data);
}