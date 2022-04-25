import express  from "express";
import { Router } from "express";
import connection from "./database";
import {ContactController} from '../src/Controllers/ContactController'
const routes=Router();
const contactController=new ContactController();


routes.get('/list',contactController.index)
routes.post('/create',contactController.create)

export {routes}