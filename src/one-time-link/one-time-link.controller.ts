import {
  Body,
  Controller,
  Get,
  GoneException,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
} from '@nestjs/common';
import { OneTimeLinkService } from './one-time-link.service';
import { Request } from 'express';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('one-time-link')
export class OneTimeLinkController {
  constructor(private readonly oneTimeLinkService: OneTimeLinkService) {}

  @Post()
  async setLink(
    @Req() request: Request,
    @Body() dto: CreateLinkDto,
  ): Promise<string> {
    const { id } = await this.oneTimeLinkService.create(dto.message);
    const link = `${request.protocol}://${request.headers.host}/one-time-link/${id}`;

    return link;
  }

  @Get(':id')
  async getMessage(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<string> {
    const link = await this.oneTimeLinkService.getById(id);

    if (!link) throw new NotFoundException('Link was not found');
    if (link.isUsed) throw new GoneException('This link has been used!');

    await this.oneTimeLinkService.useLink(id);

    return link.message;
  }
}
