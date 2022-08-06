import { DataSource, Repository } from "typeorm";
import { User } from "../../entities/User";
import { appDataSource } from "../../../../databaseConnection";
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { IUserDTO } from "../../interfaces/IUserDTO";

class UsersRepository implements IUsersRepository{

  private remoteRepository: Repository<User>;

  constructor(){
    this.remoteRepository = appDataSource.getRepository(User);
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
  }: IUserDTO): Promise<void> {
    const user = this.remoteRepository.create({
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
    });

    await this.remoteRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    
    const user = await this.remoteRepository.findOneBy({
      email
    });

    return user;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await this.remoteRepository.findOneBy({
      phone
    });

    return user;
  }

  list(): Promise<User[]> {
    const users = this.remoteRepository.find();
    return users;
  }
  
}

export { UsersRepository }