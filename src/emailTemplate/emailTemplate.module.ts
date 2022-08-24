import { Module } from '@nestjs/common';
import { EmailTemplateController } from './emailTemplate.controller';
import { EmailTemplateService } from './emailTemplate.service';

@Module({
	imports: [],
	controllers: [EmailTemplateController],
	providers: [EmailTemplateService]
})
export class EmailTemplateModule {}