import { Module } from '@nestjs/common';
import { OneTimeLinkModule } from './one-time-link/one-time-link.module';

@Module({
  imports: [OneTimeLinkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
