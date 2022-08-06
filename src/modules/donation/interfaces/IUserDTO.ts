interface IUserDTO{
  name: string;
  email?: string,
  phone: string,
  zip: string,
  city: string,
  state: string,
  streetAddress: string,
  number: string,
  complement?: string,
  neighborhood: string,
}

export { IUserDTO }