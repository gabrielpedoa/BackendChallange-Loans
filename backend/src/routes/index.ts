import { Router } from "express";
import post from "../controllers/post";

const router = Router();

export default () => {
  router.post('/customer-loans', post)
  return router;
};
