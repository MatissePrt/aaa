import express from "express";
import { readAll, readOne, deleteSubscriber} from "../controllers/subscriberController.js"
import { authentication } from "../middlewares/authentication.js";

const subscriberRouter = express.Router();

// Route pour créer un créateur
subscriberRouter.get("/users/:userId/creators/:creatorId/subscribers", authentication, readAll); 
subscriberRouter.get("/users/:userId/creators/:creatorId/subscribers/:subcriberId", authentication, readOne); 
// subscriberRouter.put("/users/:userId/creators/:creatorId/update", authentication, update);
//ROUTE DELETE A FAIRE AVEC LES SUBSCRIPTIONS POUR SUPPRIMER DANS LE BON ORDRE
subscriberRouter.delete("/users/:userId/creators/:creatorId/subscribers/:subcriberId", authentication, deleteSubscriber);

export default subscriberRouter