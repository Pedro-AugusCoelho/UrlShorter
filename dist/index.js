"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
api.get('/status', (res, req) => {
    res.status(200).send({ foo: 'bar' });
});
api.listen(3000, () => {
    console.log('Funcionando...');
});
