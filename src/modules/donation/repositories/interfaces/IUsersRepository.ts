import { User } from "../../entities/User";
import { IUserDTO } from "../../interfaces/IUserDTO";

interface IUsersRepository{

  save(user: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>
  list(): Promise<User[]>
}


export { IUsersRepository };