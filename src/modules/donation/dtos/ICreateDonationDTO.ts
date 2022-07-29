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
  devices: [
    {
      type: "notebook" | "desktop" | "netbook" | "screen" | "printer" | "scanner",
      condition: "working" | "notWorking" | "broken"
    }
  ]
}

export { ICreateDonationDTO }