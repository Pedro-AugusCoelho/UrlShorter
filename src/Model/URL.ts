export class URL extends Typegoose{
    @prop({required:true})
    hash:string

    @props({required:true})
    originURL:string

    @props({required:true})
    shortenURL:string
}

export const URLModel = new URL().getModelForClass(URL);

