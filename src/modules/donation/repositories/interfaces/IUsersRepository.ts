import { User } from "../../entities/User";
import { IUserDTO } from "../../interfaces/IUserDTO";

interface IUsersRepository{

  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>;
  update(user: IUserDTO): Promise<void>;
  list(): Promise<User[]>;
}


export { IUsersRepository };