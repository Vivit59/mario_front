export default class user {
  id: number;
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;

  constructor(
    id: number,
    phone: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string
  ) {
    this.id = id;
    this.phone = phone;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
