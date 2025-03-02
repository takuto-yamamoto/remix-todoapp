import {
  ContactPartialSchema,
  ContactSchema,
} from '../../prisma/generated/zod/index';
import { z } from 'zod';

export const CreateContactResSchema = z.object({
  contact: ContactSchema,
});
export const CreateContactReqSchema = z.object({
  contact: z.object({}),
});
export const GetContactResSchema = z.object({
  contact: ContactSchema,
});
export const UpdateContactResSchema = z.object({
  contact: ContactSchema,
});
export const UpdateContactReqSchema = z.object({
  contact: ContactPartialSchema,
});
export const DeleteContactResSchema = z.void();
export const ListContactsResSchema = z.object({
  contacts: z.array(ContactSchema),
});

export type CreateContactRes = z.infer<typeof CreateContactResSchema>;
export type CreateContactReq = z.infer<typeof CreateContactReqSchema>;
export type GetContactRes = z.infer<typeof GetContactResSchema>;
export type UpdateContactRes = z.infer<typeof UpdateContactResSchema>;
export type UpdateContactReq = z.infer<typeof UpdateContactReqSchema>;
export type DeleteContactRes = z.infer<typeof DeleteContactResSchema>;
export type ListContactsResponse = z.infer<typeof ListContactsResSchema>;
