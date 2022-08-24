import { Injectable } from '@nestjs/common'

import { 
	EmailTemplateListResponse, 
	EmailTemplateGetResponse,
	EmailTemplateCreateResponse,
	EmailTemplateUpdateResponse,
	EmailTemplateDeleteResponse 
} from './emailTemplate.model';

@Injectable()
export class EmailTemplateService {

	private readonly MODULE: string = 'Email Template';

	getList(): EmailTemplateListResponse {
		console.log('LIST - ' + this.MODULE);
		return {
			web3Info: 'test'
		};
	}

	get(id: number): string {
		return 'GET - ' + this.MODULE + ' Params provided: ' + id; 
	}

	create(): string {
		return 'POST - ' + this.MODULE;
	}

	update(): string {
		return 'PUT - ' + this.MODULE;
	}

	delete(): string {
		return 'DELETE - ' + this.MODULE;
	}


}