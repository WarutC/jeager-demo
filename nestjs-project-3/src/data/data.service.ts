import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  async getRandomUsernames(count: number): Promise<string[]> {
    const usernames: string[] = [];
    for (let i = 0; i < count; i++) {
      usernames.push(`user_${Math.random().toString(36).substring(2, 10)}`);
    }
    return usernames;
  }

  async getData() {
    return { data: await this.getRandomUsernames(10) };
  }
}
