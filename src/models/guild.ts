import { Schema, model } from "mongoose";

export interface IGuild {
    guildID: string,
    welcome_enabled: boolean,
    welcome_channel: string,
    welcome_join_role: string,
    xp_enabled: boolean,
    ignored_xp_channels: string[],
    ignored_xp_roles: string[],
    blacklisted_xp_users: string[],
    inserted_at: Date,
    updated_at: Date
}

const guildSchema = new Schema<IGuild>({
    guildID: String,
    welcome_enabled: Boolean,
    welcome_channel: String,
    welcome_join_role: String,
    xp_enabled: Boolean,
    ignored_xp_channels: [String],
    ignored_xp_roles: [String],
    blacklisted_xp_users: [String],
    inserted_at: Date,
    updated_at: Date
});

export default model<IGuild>('guilds', guildSchema);