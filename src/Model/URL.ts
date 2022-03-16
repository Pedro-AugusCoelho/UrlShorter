import { prop, getModelForClass } from '@typegoose/typegoose';
export class URL{
    @prop({ required: true })
    hash!: string;

    @prop({ required: true })
    originURL!: string;

    @prop({ required: true })
    shortenURL!: string;
}

export const URLModel = getModelForClass(URL);

