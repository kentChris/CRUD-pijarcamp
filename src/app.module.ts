import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ProdukModule } from './produk/produk.module';
import { config } from 'dotenv';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ProdukModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
