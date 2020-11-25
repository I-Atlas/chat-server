import { IUser } from "./models/User";
declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}
