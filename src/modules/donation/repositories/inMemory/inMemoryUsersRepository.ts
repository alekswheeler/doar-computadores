import { User } from "../../entities/User";
import { IUserDTO } from "../../interfaces/IUserDTO";
import { IUsersRepository } from "../interfaces/IUsersRepository";

class inMemoryUsersRepository implements IUsersRepository{

  users: User[];

  constructor(){
    this.users = []
  }

  async save({
    name,
    email,
    city,
    number,
    phone,
    neighborhood,
    zip,
    state,
    streetAddress,
    complement
  }: IUserDTO): Promise<User> {
    const user = new User();

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.city = city;
    user.number = number;
    user.neighborhood = neighborhood;
    user.zip = zip;
    user.state = state;
    user.streetAddress = streetAddress;
    user.complement = complement;
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user)=>user.email === email);
    if(!user){
      return null;
    }
    return user;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = this.users.find((user)=>user.phone === phone);
    if(!user){
      return null;
    }
    return user;
  }

  async update(user: IUserDTO): Promise<void> {

    const usr = this.users.find((obj)=> obj.phone === user.phone);
    if(usr){
      const index = this.users.indexOf(usr);
      delete this.users[index];
      this.users[index] = user;
    }
  }

  async list(): Promise<User[]> {
    return this.users;
  }

}

export { inMemoryUsersRepository }