// controllers/contactController.ts
import { Request, Response } from 'express';
import * as services from '../services/contact';

export const listContacts = async (_req: Request, res: Response) => {
  const contacts = await services.listContacts();
  res.json({ contacts });
};

export const getContact = async (req: Request, res: Response) => {
  const contact = await services.getContact(req.params.id);
  res.json({ contact });
};

export const createContact = async (req: Request, res: Response) => {
  const contact = await services.createContact(req.body);
  res.status(201).json({ contact });
};

export const updateContact = async (req: Request, res: Response) => {
  const contact = await services.updateContact(req.params.id, req.body);
  res.json({ contact });
};

export const deleteContact = async (req: Request, res: Response) => {
  await services.deleteContact(req.params.id);
  res.status(204).send();
};
