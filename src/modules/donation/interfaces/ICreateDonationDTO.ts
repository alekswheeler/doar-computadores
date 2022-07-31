interface ICreateDonationDTO{
  name: string;
  email?: string,
  phone: string,
  zip: string,
  city: string,
  state: string,
  streetAddress: string,
  number: number,
  complement?: string,
  neighborhood: string,
  deviceCount:number,
  devices:
    {
      type: string,
      condition: string
    }[]
}

export { ICreateDonationDTO }