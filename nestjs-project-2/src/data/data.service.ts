import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class DataService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.SERVICE_C_URL ?? 'http://localhost:3002',
    });
  }

  async getData(): Promise<any> {
    try {
      const response = await this.axiosInstance.get('/data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data from ServiceC:', error);
      throw error;
    }
  }
}
