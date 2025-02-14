import { Column, DataType, Model } from "sequelize-typescript";


interface IMasterCreationAttr{
    master_id: number | undefined;
    name: string | undefined;
    phone_number: string | undefined;
    workshop_name: string | undefined;
    adress: string | undefined;
    target: string | undefined;
    location: string | undefined;
    work_starting: string | undefined;
    work_ending: string | undefined;
    minuts: string | undefined;
}

export class Master extends Model<Master, IMasterCreationAttr>{
    @Column({
            type:DataType.BIGINT,
            primaryKey: true
    })
    master_id:number | undefined;

    @Column({
        type:DataType.STRING,
    })
    name: string | undefined;

    @Column({
        type:DataType.STRING,
    })
    phone_number: string | undefined;

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