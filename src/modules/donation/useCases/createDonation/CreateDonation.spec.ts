import { inMemoryDevicesRepository } from "../../repositories/inMemory/inMemoryDevicesRepository";
import { inMemoryDontaionsRepository } from "../../repositories/inMemory/inMemoryDonationsRepositpry";
import { inMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";
import { IDonationRepository } from "../../repositories/interfaces/IDonationRepository";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { ListDevicesUseCase } from "../lisDevices/listDevicesUseCase";
import { CreateDonationUseCase } from "./CreateDonationUseCase";
import { AppError } from "../../../../errors/AppError";
import { Device } from "../../entities/Device";
import { User } from "../../entities/User";

//InMemoryRepositories allows testing without making request to the database

describe("Create Donation", ()=>{

  let usersRepository: IUsersRepository;
  let devicesRepository: IDevicesRepository;
  let donationsRepository: IDonationRepository;
  let createDonationUseCase: CreateDonationUseCase;

  beforeEach(()=>{
    usersRepository = new inMemoryUsersRepository();
    donationsRepository = new inMemoryDontaionsRepository();
    devicesRepository = new inMemoryDevicesRepository();
    createDonationUseCase = new CreateDonationUseCase(usersRepository, devicesRepository, donationsRepository);
  });

  test("Should be able to save new users", async ()=>{

    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "João João",
      "email": "teste@gmail.com",
      "phone": "557876776677",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "Pampulha",
      "deviceCount": 2,
      "devices": [
        device1,
        device2
      ]
    }

    await createDonationUseCase.execute(userdata);
    const user = await usersRepository.findByPhone(userdata.phone);

    if(user instanceof User){
      expect(user.phone).toBe(userdata.phone);
    }

  });

  test("Should not be able to accept invalid email", async ()=>{

    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "João João",
      // "email": "teste@gmail",
      // "email": "teste@g",
      //"email": "@gmail.appmasters.io",
      "email": "@gmail.com",
      "phone": "557876776677",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "Pampulha",
      "deviceCount": 2,
      "devices": [
        device1,
        device2
      ]
    }

    expect(async ()=>{
      await createDonationUseCase.execute(userdata);
    }).rejects.toBeInstanceOf(AppError);

  });

  test("should not be able to accept missing fields", async()=>{
    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "",
      "email": "teste@gmail.com",
      "phone": "",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "",
      "deviceCount": 2,
      "devices": [
        device1,
        device2
      ]
    }

    expect(async ()=>{
      await createDonationUseCase.execute(userdata);
    }).rejects.toBeInstanceOf(AppError);
    
  });

  test("should not be able to accept deviceCount invalid", async()=>{
    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "",
      "email": "teste@gmail.com",
      "phone": "",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "",
      "deviceCount": 5,
      "devices": [
        device1,
        device2
      ]
    }

    expect(async ()=>{
      await createDonationUseCase.execute(userdata);
    }).rejects.toBeInstanceOf(AppError);
    
  });

  test("Should be able update an existent user", async ()=>{

    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "João João",
      "email": "teste@gmail.com",
      "phone": "557876776677",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "Pampulha",
      "deviceCount": 2,
      "devices": [
        device1,
        device2
      ]
    }

    await createDonationUseCase.execute(userdata);

    userdata.city = "Salvador";
    userdata.state = "BA";
    userdata.zip = "123456"

    await createDonationUseCase.execute(userdata);

    const user = await usersRepository.findByPhone("557876776677");
    
    if(user instanceof User){
      expect(user.city).toBe("Salvador");
      expect(user.zip).toBe("123456");
      expect(user.state).toBe("BA");
    }

  });

  //This test case is from listDevicesUseCase, but it have only one function
  test("Should be able to list all devices", async ()=>{

    const device1 = new Device();
    const device2 = new Device();
    device1.donationId = "666sgss66ss";
    device2.donationId = "888ssffsfr";

    const userdata = {
      "name": "João João",
      "email": "teste@gmail.com",
      "phone": "557876776677",
      "zip": "12345678",
      "city": "Juazeiro",
      "state": "MG",
      "streetAddress": "Rua uma rua",
      "number": "1233",
      "complement": "Uma rua",
      "neighborhood": "Pampulha",
      "deviceCount": 2,
      "devices": [
        device1,
        device2
      ]
    }

    await createDonationUseCase.execute(userdata);
    const listDevicesUseCase = new ListDevicesUseCase(devicesRepository);

    const devices = await listDevicesUseCase.execute();

    devices.forEach((device)=>{
      expect(device).toBeInstanceOf(Device);
    });

  });
  
});