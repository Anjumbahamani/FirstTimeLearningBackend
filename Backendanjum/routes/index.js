import expessRouter from "express";
import userRouter from "./userRoutes.js";

const router = expessRouter();

router.use('/user',userRouter);

export default router;