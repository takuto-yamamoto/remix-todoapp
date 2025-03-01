import { api } from '../utils/api';
import {
  ContactMutation,
  CreateContactRes,
  DeleteContactRes,
  GetContactRes,
  ListContactsResponse,
  UpdateContactRes,
} from '../../.server/schemas/contact';

export const createEmptyContact = async () => {
  const contact: ContactMutation = {};
  const res = await api.post<CreateContactRes>('/contacts', contact);
  return res.data.contact;
};

export const getContact = async (id: string) => {
  const res = await api.get<GetContactRes>(`/contact/${id}`);
  return res.data.contact;
};

export const updateContact = async (id: string, contact: ContactMutation) => {
  const res = await api.patch<UpdateContactRes>(`/contact/${id}`, contact);
  return res.data.contact;
};

export const deleteContact = async (id: string) => {
  const res = await api.delete<DeleteContactRes>(`/contact/${id}`);
  return res.data;
};

export const listContacts = async () => {
  const res = await api.get<ListContactsResponse>('/contacts');
  return res.data.contacts;
};
