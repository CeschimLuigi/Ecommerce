import { z } from 'zod';

export const requestDTO = z.object({
    amount:z.number().positive()
});

export function buildRequesDTO(data) {
  return requestDTO.parse(data);
}