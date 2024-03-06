import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produk {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nama_produk:string;

    @Column('numeric') 
    harga:number;

    @Column('numeric') 
    jumlah:number;
}