import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("devices")
class Device{

  @PrimaryColumn()
  id: string;
  @Column({
    type: "varchar"
  })
  type: string | undefined;

  @Column({
    type: "varchar"
  })
  condition: string | undefined;

  @Column({
    name: "donationid",
    type: "varchar"
  })
  donationId: string;

  constructor(){
    this.id = uuidV4();
  }
}

export { Device }