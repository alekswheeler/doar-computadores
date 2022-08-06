import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("users")
class User{

  @PrimaryColumn()
  id: string;

  @Column({
    type: "varchar"
  })
  name: string | undefined;

  @Column({
    type: "varchar",
    nullable: true
  })
  email?: string | undefined;

  @Column({
    type: "varchar"
  })
  phone: string | undefined;

  @Column({
    type: "varchar"
  })
  zip: string| undefined;

  @Column({
    type: "varchar"
  })
  city: string| undefined;

  @Column({
    type: "varchar"
  })
  state: string | undefined;

  @Column({
    name: "streetaddress",
    type: "varchar"
  })
  streetAddress: string| undefined;

  @Column({
    type: "varchar"
  })
  number: string | undefined;

  @Column({
    nullable: true,
    type: "varchar"
  })
  complement?: string;

  @Column({
    type: "varchar"
  })
  neighborhood: string | undefined;

  constructor(){
    this.id = uuidV4();
  }
}


export { User };