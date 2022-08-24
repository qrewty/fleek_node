import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailTemplateModule } from './emailTemplate/emailTemplate.module';

@Module({
  imports: [EmailTemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
