import { Router } from 'express';
import { productRouter,userRouter,orderRouter, authRouter} from './';
const router = Router();

router.use('/products', productRouter)
router.use('/users',userRouter)
router.use('/orders',orderRouter)
router.use('/auth', authRouter);

export default router;