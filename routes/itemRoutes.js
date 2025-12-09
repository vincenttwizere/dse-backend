import express from 'express'
import { additem } from '../controllers/itemController.js'

const routes = express.Router();

// Adding item

routes.post ("/item");

export default routes;