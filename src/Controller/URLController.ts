import { Response , Request } from "express";
import { config } from "../Config/Constants";
import shortid from 'shortid';
import { URLModel } from "../Model/URL";

export class URLController {
    public async shorten (req:Request , res:Response):Promise<void>{
        const { originURL } = req.body;
        const url = await URLModel.findOne({originURL});
        if(url){
            res.json(url);
            return;
        }
        const hash = shortid.generate();
        const shortURL = `${config.API_URL}/${hash}`
        const newUrl = URLModel.create({hash , shortURL , originURL});
        res.json(newUrl);
    }

    public async redirect(req:Request , res:Response):Promise<void>{
        const { hash } = req.params;
        const url = URLModel.findOne({hash});
        if(url){
            res.redirect(url.originURL);
            return;
        }
        res.status(200).json({err:"Url Not Found"});
    } 
}