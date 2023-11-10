import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
