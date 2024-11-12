import { Controller } from '@nestjs/common';
import { OneTimeLinkService } from './one-time-link.service';

@Controller('one-time-link')
export class OneTimeLinkController {
  constructor(private readonly oneTimeLinkService: OneTimeLinkService) {}
}
