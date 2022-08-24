import { Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { Response, SuccessResponse } from '../common/response';

import { EmailTemplateService } from './emailTemplate.service';
import { EmailTemplateListResponse, 
	EmailTemplateGetResponse,
	EmailTemplateCreateResponse,
	EmailTemplateUpdateResponse,
	EmailTemplateDeleteResponse } from './emailTemplate.model';

@Controller('api/emailTemplate')
export class EmailTemplateController {
	constructor(
		private readonly emailTemplateService: EmailTemplateService
	) {}

	@Get('list')
	getList(): Response<EmailTemplateListResponse> {
		const response: EmailTemplateListResponse = this.emailTemplateService.getList();
		return SuccessResponse(response);	
	}

	@Get()
	get(@Query('id') id: number): string {
		return this.emailTemplateService.get(id);
	}

	@Post()
	create(): string {
		return this.emailTemplateService.create();
	}

	@Put() 
	update(): string {
		return this.emailTemplateService.update();
	}

	@Delete()
	delete(): string {
		return this.emailTemplateService.delete();
	}

}