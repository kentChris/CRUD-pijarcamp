import { Module } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from './produk.entity';
import { ProdukController } from './produk.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produk])],
  exports: [ProdukService],
  providers: [ProdukService],
  controllers: [ProdukController]
})
export class ProdukModule {}
