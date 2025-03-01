import {
  CreateContactReqSchema,
  UpdateContactReqSchema,
} from '../schemas/contact';
import { validate } from '../middlewares/validate';
import express from 'express';

const router = express.Router();

router.route('/').get().post(validate(CreateContactReqSchema));
router
  .route('/:contactId')
  .get()
  .patch(validate(UpdateContactReqSchema))
  .delete();

export default router;
