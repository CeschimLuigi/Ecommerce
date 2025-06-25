import { z } from "zod";

const pixResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    status: z.string()
  })
});

export function buildPixResponseSchema(data){
    const parsed = pixResponseSchema.parse(data)
    return parsed;
}

