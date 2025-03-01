import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createContact = async (contact: Prisma.ContactCreateInput) => {
  return await prisma.contact.create({
    data: contact,
  });
};

export const getContact = async (id: string) => {
  return await prisma.contact.findUnique({
    where: {
      id,
    },
  });
};

export const updateContact = async (
  id: string,
  contact: Prisma.ContactUpdateInput
) => {
  return await prisma.contact.update({
    where: {
      id,
    },
    data: contact,
  });
};

export const deleteContact = async (id: string) => {
  return await prisma.contact.delete({
    where: {
      id,
    },
  });
};

export const listContacts = async () => {
  return await prisma.contact.findMany();
};
