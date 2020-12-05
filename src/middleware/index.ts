import express, { Router, urlencoded } from 'express';
import dotenv from 'dotenv';

//Init .env
dotenv.config();

const router = Router();

var bodyParser = require('body-parser');

// configure the app to use bodyParser()
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

export default router;