import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { ServiceBModule } from './service-b/service-b.module';

@Module({
  imports: [ConfigModule.forRoot(), DataModule, HealthModule, ServiceBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
