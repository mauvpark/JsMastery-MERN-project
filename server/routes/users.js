import express from "express";
// ? nodejs에서는 react와 달리 말미에 확장자를 붙여줘야 함.
import { signin, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
