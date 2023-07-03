export interface IUser {
  fullname: string;
  email: string;
  password: string;
  phoneNo: string[];
  ClientType: string;
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
}
