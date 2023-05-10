import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Brand} from "./brand";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length: 255})
    name: string;
    @Column()
    price: number;
    @Column()
    description: string;

    @ManyToOne(()=> Brand, (brand)=> brand.car)
    brand : Brand;
}