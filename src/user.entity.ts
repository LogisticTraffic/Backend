import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
//Entity User For Authentification
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;
}
