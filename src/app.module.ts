import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import AppDataSource from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // when deployed to gcp will need to switch cred lookup to KMS not process.envs
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (): Promise<TypeOrmModuleOptions> =>
        AppDataSource.options,
    }),
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
