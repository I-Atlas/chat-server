import { UserModel } from "../models";

export default (req: any, _: any, next: any): void => {
  if (req.user) {
    UserModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        last_seen: new Date(),
      },
      { new: true }
    );
  }
  next();
};
