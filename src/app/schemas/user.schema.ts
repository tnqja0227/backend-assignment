import mongoose, { Model, Schema } from 'mongoose';

export interface IUser {

}

interface UserModel extends Model<IUser> {}

const UserSchema = new Schema<IUser, UserModel>({

});

export const User = mongoose.model<IUser, UserModel>('User', UserSchema);
