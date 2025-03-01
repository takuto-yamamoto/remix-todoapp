import { api } from '../utils/api';
import {
  ContactMutation,
  CreateContactResponse,
  DeleteContactResponse,
  GetContactResponse,
  ListContactsResponse,
  UpdateContactResponse,
} from '../schemas/contact';

export const createEmptyContact = async () => {
  const contact: ContactMutation = {};
  const res = await api.post<CreateContactResponse>('/contacts', contact);
  return res.data.contact;
};

export const getContact = async (id: string) => {
  const res = await api.get<GetContactResponse>(`/contact/${id}`);
  return res.data.contact;
};

export const updateContact = async (id: string, contact: ContactMutation) => {
  const res = await api.patch<UpdateContactResponse>(`/contact/${id}`, contact);
  return res.data.contact;
};

export const deleteContact = async (id: string) => {
  const res = await api.delete<DeleteContactResponse>(`/contact/${id}`);
  return res.data;
};

export const listContacts = async () => {
  const res = await api.get<ListContactsResponse>('/contacts');
  return res.data.contacts;
};
