import { Device } from "../../entities/Device";

interface IDonationRepository{

  save(userId: string, deviceCount: number): Promise<string>
}

export { IDonationRepository }