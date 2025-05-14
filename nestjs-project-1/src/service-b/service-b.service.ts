import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ServiceBService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.SERVICE_B_URL ?? 'http://localhost:3001',
    });
  }

  async getData(): Promise<any> {
    const response = await this.axiosInstance.get('/data');
    return response.data;
  }
}
