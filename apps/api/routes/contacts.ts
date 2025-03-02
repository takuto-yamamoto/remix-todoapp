import {
  CreateContactReqSchema,
  UpdateContactReqSchema,
} from '../schemas/contact';
import { validate } from '../middlewares/validate';
import express from 'express';
import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  updateContact,
} from '../controllers/contact';

const router = express.Router();

router
  .route('/')
  .get(listContacts)
  .post(validate(CreateContactReqSchema), createContact);
router
  .route('/:id')
  .get(getContact)
  .patch(validate(UpdateContactReqSchema), updateContact)
  .delete(deleteContact);

export default router;
