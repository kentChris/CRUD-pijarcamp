import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produk } from './produk.entity';

@Injectable()
export class ProdukService {

    constructor(@InjectRepository(Produk) private produkRepository: Repository<Produk>) { }

    async getAllProduk(): Promise<Produk[]> {
        return await this.produkRepository.find();
    }

    async updateProduk(id: number ,produk: Produk) {
        this.produkRepository.update(id, produk);
    }

    async deleteProduk(produk: Produk) {
        this.produkRepository.delete(produk);
    }

    async createProduk(produk: Produk): Promise<Produk> {
        return this.produkRepository.save(produk);
      }
}