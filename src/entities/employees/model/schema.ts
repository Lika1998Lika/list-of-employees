import * as z from 'zod';

export const Employees = z.object({
  full_name: z.string(),
  inn: z.string().max(10),
});