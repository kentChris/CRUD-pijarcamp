import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ProdukModule } from './produk/produk.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ProdukModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
