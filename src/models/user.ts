import { Schema, model } from "mongoose";

export interface IUser {
    userID: string 
    xp_level: number
    xp_points: number
    warnings: number
    inserted_at: Date
    updated_at: Date
}

const userSchema = new Schema<IUser>({
    userID: String,
    xp_level: Number,
    xp_points: Number,
    warnings: Number,
    inserted_at: Date,
    updated_at: Date
});

export default model<IUser>('users', userSchema);