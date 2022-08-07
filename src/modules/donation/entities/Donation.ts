import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ICreateDonationDTO } from "../interfaces/ICreateDonationDTO";
import { Device } from "./Device";
import { v4 as uuidv4 } from "uuid";

@Entity("donations")
class Donation{

  @PrimaryColumn({
    type: "varchar"
  })
  id: string;
  
  @Column({
    type: "varchar",
    name: "userid"
  })
  userId: string;

  @Column({
    type: "integer"
  })
  quantity: number;

  @CreateDateColumn({
    type: "date"
  })
  created_at: Date;

  constructor (userId: string){
    this.id = uuidv4();
    this.userId = userId;
    this.created_at = new Date();
  }

}

export { Donation }