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

  constructor(){
    this.id = uuidV4();
  }
}

export { Device }