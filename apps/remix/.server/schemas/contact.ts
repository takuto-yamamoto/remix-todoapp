import { z } from 'zod';

export const contactMutationSchema = z.object({
  id: z.string().optional(),
  first: z.string().optional(),
  last: z.string().optional(),
  avatar: z.string().optional(),
  twitter: z.string().optional(),
  notes: z.string().optional(),
  favorite: z.boolean().optional(),
});
export const contactRecordSchema = contactMutationSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});
export const createContactResSchema = z.object({
  contact: contactRecordSchema,
});
export const createContactReqSchema = z.object({
  contact: z.object({}),
});
export const getContactResSchema = z.object({
  contact: contactRecordSchema,
});
export const updateContactResSchema = z.object({
  contact: contactRecordSchema,
});
export const updateContactReqSchema = z.object({
  contact: contactMutationSchema,
});
export const deleteContactResSchema = z.void();
export const listContactsResSchema = z.object({
  contacts: z.array(contactRecordSchema),
});

export type ContactMutation = z.infer<typeof contactMutationSchema>;
export type ContactRecord = z.infer<typeof contactRecordSchema>;
export type CreateContactRes = z.infer<typeof createContactResSchema>;
export type CreateContactReq = z.infer<typeof createContactReqSchema>;
export type GetContactRes = z.infer<typeof getContactResSchema>;
export type UpdateContactRes = z.infer<typeof updateContactResSchema>;
export type UpdateContactReq = z.infer<typeof updateContactReqSchema>;
export type DeleteContactRes = z.infer<typeof deleteContactResSchema>;
export type ListContactsResponse = z.infer<typeof listContactsResSchema>;
