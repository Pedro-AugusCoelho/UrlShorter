import { URLController } from './Controller/URLController';
import express, {Request , Response} from 'express';
import { MongoConnection } from './Database/MongoConnection';

const app = express();

const urlConroller = new URLController();
const database = new MongoConnection();
database.connect();

app.use(express.json());

app.post('/shorten', urlConroller.shorten);
app.get('/:hash',urlConroller.redirect);

app.listen(3000 , () => {
    console.log('Funcionando...');
});
