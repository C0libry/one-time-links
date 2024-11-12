import { Module } from '@nestjs/common';
import { OneTimeLinkModule } from './one-time-link/one-time-link.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, OneTimeLinkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
