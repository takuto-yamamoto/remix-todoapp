import { validate } from '../middlewares/validate';
import {
  createContactReqSchema,
  updateContactReqSchema,
} from '../schemas/contact';
import express from 'express';

const router = express.Router();

router.route('/').get().post(validate(createContactReqSchema));
router
  .route('/:contactId')
  .get()
  .patch(validate(updateContactReqSchema))
  .delete();

export default router;
