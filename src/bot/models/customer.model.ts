import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICustomerCreationAttr {
  user_id: number | undefined;
  name: string | undefined;
  phone_number: string | undefined;
  last_state: string;
}

@Table({})
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey:true
  })
  id: number;
  
  @Column({
    type: DataType.BIGINT,
  })
  user_id: number | undefined;
  @Column({
    type: DataType.STRING,
  })
  name: string | undefined;
  @Column({
    type: DataType.STRING,
  })
  phone_number: string | undefined;
  @Column({
    type: DataType.STRING,
  })
  last_state: string;
}
