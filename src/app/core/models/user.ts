export class User {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  id: number;
  fullName: string;
  initials: string = "";
  address: string;
  constructor (
    email: string ="",
    role: string = "",
    firstName: string = "",
    lastName: string = "",
    id: number = 0,
    address: string = ""
  ) {

    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.fullName = `${firstName} ${lastName}`;
    if (firstName && lastName) {
      this.initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    };
    this.address = address;

  }
}

