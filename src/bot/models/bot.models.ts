import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IBotCreationAtrr{
    user_id: number | undefined;
    user_name: string | undefined;
    first_name:string | undefined;
    last_name:string | undefined;
    language: string | undefined;
    last_state: string | undefined;
    role: string | undefined;
}

@Table({tableName: "bot"})
export class Bot extends Model<Bot, IBotCreationAtrr>{
    @Column({
        type:DataType.BIGINT,
        primaryKey: true
        })
    user_id:number | undefined;
    
    @Column({
        type:DataType.STRING,
    })
    user_name: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    first_name:string | undefined;

    @Column({
        type:DataType.STRING,
    })
    last_name:string | undefined;

    @Column({
        type:DataType.STRING,
    })
    phone_number:string| undefined;

    @Column({
        type:DataType.STRING,
    })
    language:string | undefined;

    @Column({
        type:DataType.STRING,
    })
    last_state:string | undefined;

    @Column({
        type:DataType.STRING,
    })
    role:string | undefined;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false,
    })
    status:boolean;

    @Column({
        type:DataType.STRING,
    })
    workshop_name: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    adress: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    target: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    location: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    work_starting: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    work_ending: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    minuts: string | undefined;
}