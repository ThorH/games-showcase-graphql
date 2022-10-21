import { Router } from 'express'
import ProductController from './controllers/ProductController';
import SectionController from './controllers/SectionController';

const router = Router()

router.get('/products', ProductController.getProducts)
router.get('/product/:id', ProductController.findById)
router.post('/product', ProductController.createProduct)
router.delete('/product/:id', ProductController.deleteProduct)

router.get('/sections', SectionController.getSections)
router.post('/section', SectionController.createSection)
router.put('/section/:id', SectionController.updateSection)
router.delete('/section/:id', SectionController.deleteSection)

export default router