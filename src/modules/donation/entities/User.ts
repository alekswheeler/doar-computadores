import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("users")
class User{

  @PrimaryColumn()
  id?: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: true
  })
  email?: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  phone: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  zip: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  city: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  state: string;

  @Column({
    name: "streetaddress",
    type: "varchar",
    nullable: false
  })
  streetAddress: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  number: string;

  @Column({
    nullable: true,
    type: "varchar"
  })
  complement?: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  neighborhood: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { User };