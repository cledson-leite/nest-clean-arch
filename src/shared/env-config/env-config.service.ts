import { Injectable } from '@nestjs/common';
import { IEnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements IEnvConfig {
  constructor(private readonly configService: ConfigService) {}
  getAppPort(): number {
    return Number(this.configService.get<number>('Port'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}
