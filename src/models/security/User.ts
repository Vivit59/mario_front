export default class User {
  username: string;
  firstname: string;
  lastname: string;
  address: string;
  password: string;

  constructor(
    username: string,
    firstname: string,
    lastname: string,
    address: string,
    password: string
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.password = password;
  }
}
