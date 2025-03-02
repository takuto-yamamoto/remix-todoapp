import express from 'express';

import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  updateContact,
} from '../controllers/contact';
import { validate } from '../middlewares/validate';
import {
  CreateContactReqSchema,
  UpdateContactReqSchema,
} from '../schemas/contact';

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
