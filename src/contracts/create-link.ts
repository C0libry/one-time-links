import { z } from 'zod';

export const CreateLinkRequestSchema = z.object({
  message: z.string(),
});

export const CreateLinkResponseSchema = z.string().url();

export type CreateLinkRequest = z.infer<typeof CreateLinkRequestSchema>;

export type CreateLinkResponse = z.infer<typeof CreateLinkResponseSchema>;
