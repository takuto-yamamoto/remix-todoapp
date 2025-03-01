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
export const getContactResponseSchema = z.object({
  contact: contactRecordSchema.nullable(),
});
export const createContactResponseSchema = z.object({
  contact: contactRecordSchema,
});
export const updateContactResponseSchema = z.object({
  contact: contactRecordSchema,
});
export const deleteContactResponseSchema = z.void();
export const listContactsResponseSchema = z.object({
  contacts: z.array(contactRecordSchema),
});

export type ContactMutation = z.infer<typeof contactMutationSchema>;
export type ContactRecord = z.infer<typeof contactRecordSchema>;
export type CreateContactResponse = z.infer<typeof createContactResponseSchema>;
export type GetContactResponse = z.infer<typeof getContactResponseSchema>;
export type UpdateContactResponse = z.infer<typeof updateContactResponseSchema>;
export type DeleteContactResponse = z.infer<typeof deleteContactResponseSchema>;
export type ListContactsResponse = z.infer<typeof listContactsResponseSchema>;
