import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getSecrets(): string {
    const s1 = <string>this.configService.get<string>('SECRET');
    const s2 = <string>this.configService.get<string>('SECRET2');
    return 'this are the secrets: ' + s1 + ' ' + s2;
  }
}
