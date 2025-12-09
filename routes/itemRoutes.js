import express from 'express'
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/itemController.js';
import { authenticateToken } from '../middleware/authMiddleWare.js';
import router from './authRoutes.js';

const Router = express.Router();

// Adding item

router.post ("/", authenticateToken, createItem);//protected route
router.get ("/", getAllItems);

router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;