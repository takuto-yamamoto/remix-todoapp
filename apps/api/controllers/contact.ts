import {
  CreateContactReqSchema,
  UpdateContactReqSchema,
} from '../schemas/contact';
import { Request, Response } from 'express';
import * as services from '../services/contact';

export const listContacts = async (req: Request, res: Response) => {
  const contacts = await services.listContacts(req.params.q);
  res.json({ contacts });
};

export const getContact = async (req: Request, res: Response) => {
  const contact = await services.getContact(req.params.id);
  res.json({ contact });
};

export const createContact = async (req: Request, res: Response) => {
  const { contact } = CreateContactReqSchema.parse(req.body);
  const created = await services.createContact(contact);
  res.status(201).json({ contact: created });
};

export const updateContact = async (req: Request, res: Response) => {
  const { contact } = UpdateContactReqSchema.parse(req.body);
  const updated = await services.updateContact(req.params.id, contact);
  res.json({ contact: updated });
};

export const deleteContact = async (req: Request, res: Response) => {
  await services.deleteContact(req.params.id);
  res.status(204).send();
};
