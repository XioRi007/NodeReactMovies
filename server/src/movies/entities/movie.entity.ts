import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;

}