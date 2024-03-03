import mongoose from 'mongoose';

import Logger from './logger';

export async function connect() {
    mongoose
        .connect(process.env.MONGODB_URL as string)
        .then(() => Logger.scan('MongoDB connected...'))
        .catch(err => console.error(err));
}