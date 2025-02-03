import { CreateLinkRequestSchema } from '@/contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateLinkDto extends createZodDto(CreateLinkRequestSchema) {}
