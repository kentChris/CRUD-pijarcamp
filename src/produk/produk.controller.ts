import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ProdukService } from './produk.service';
import { Produk } from './produk.entity';

@Controller('produk')
export class ProdukController {

    constructor(private service: ProdukService) { }

    @Get()
    get() {
        return this.service.getAllProduk();
    }

    @Post()
    create(@Body() produk: Produk) {
        return this.service.createProduk(produk);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() produk: Produk) {
        return this.service.updateProduk(id, produk);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteProduk(params.id);
    }
}