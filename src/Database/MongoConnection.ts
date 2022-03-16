import mongoose from "mongoose";
import { config } from "../Config/Constants";

export class MongoConnection{
    public async connect():Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECT);
            console.log('Banco de Dados Conectado');
        }catch(err){
            console.log(err);
            process.exit(1);
        }
    }
}