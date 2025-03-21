import {
  CreateContactReq,
  CreateContactRes,
  DeleteContactRes,
  GetContactRes,
  ListContactsResponse,
  UpdateContactReq,
  UpdateContactRes,
} from '../../../api/schemas/contact';
import { api } from '../utils/api';

export const createEmptyContact = async () => {
  const data: CreateContactReq = { contact: {} };
  const res = await api.post<CreateContactRes>('/contacts', data);
  return res.data.contact;
};

export const getContact = async (id: string) => {
  const res = await api.get<GetContactRes>(`/contacts/${id}`);
  return res.data.contact;
};

export const updateContact = async (
  id: string,
  contact: UpdateContactReq['contact']
) => {
  const data: UpdateContactReq = { contact };
  const res = await api.patch<UpdateContactRes>(`/contacts/${id}`, data);
  return res.data.contact;
};

export const deleteContact = async (id: string) => {
  const res = await api.delete<DeleteContactRes>(`/contacts/${id}`);
  return res.data;
};

export const listContacts = async (q: string | null) => {
  const endpoint = '/contacts';
  const queryParams = q ? `?q=${q}` : '';

  const res = await api.get<ListContactsResponse>(`${endpoint}${queryParams}`);
  return res.data.contacts;
};
