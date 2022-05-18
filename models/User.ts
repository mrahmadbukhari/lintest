import { Entity,Column,PrimaryGeneratedColumn,} from "typeorm";

@Entity('users')
export class Users{
    @PrimaryGeneratedColumn({ name: 'id' })
    public id!:number;

    @Column({ name: 'name' })
    public name!:string;

    @Column({ name: 'email' })
    public email!:string;

    @Column({ name: 'phone' })
    public phone!:string;

}