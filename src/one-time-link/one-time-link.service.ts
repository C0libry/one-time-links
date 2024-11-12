import { Injectable } from '@nestjs/common';
import { Link } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OneTimeLinkService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string): Promise<Link | null> {
    return this.prisma.link.findUnique({ where: { id } });
  }

  async create(message: string): Promise<Link> {
    return this.prisma.link.create({ data: { message } });
  }

  async useLink(id: string): Promise<Link> {
    return this.prisma.link.update({ where: { id }, data: { isUsed: true } });
  }
}
