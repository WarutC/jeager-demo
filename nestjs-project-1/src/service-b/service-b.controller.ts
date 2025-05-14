import { Controller, Get } from '@nestjs/common';
import { ServiceBService } from './service-b.service';

@Controller('test')
export class ServiceBController {
    constructor(private readonly serviceBService: ServiceBService) {}

    @Get()
    async findAll(): Promise<any> {
        try {
            return await this.serviceBService.getData();
        } catch (error) {
            console.error('Error fetching data from ServiceB:', error);
            throw error;
        }
    }
}
