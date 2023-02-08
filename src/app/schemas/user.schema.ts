import mongoose, { Model, Schema } from 'mongoose';

export interface IUser {
  name: string;
  created_at: Date;
}

interface UserModel extends Model<IUser> {}

const UserSchema = new Schema<IUser, UserModel>({
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

/* Middlewares */
UserSchema.pre('save', function (next) {
  next();
});

export const User = mongoose.model<IUser, UserModel>('User', UserSchema);
