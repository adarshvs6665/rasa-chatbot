import express from 'express'
import { chatController } from '../controller/chatController';

// import controllers

// initilizing router
const chatRouter = express.Router();

chatRouter.post("/", chatController);

//exporting router
export default chatRouter;
