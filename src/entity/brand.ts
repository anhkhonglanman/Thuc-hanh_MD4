import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length: 255})
    name: string;

    description: string;
    @OneToMany(() => Car, (car) => car.brand)
    car: Car[];

}