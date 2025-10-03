import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { loadGcpSecrets } from './config/secrets-loader';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadGcpSecrets],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
