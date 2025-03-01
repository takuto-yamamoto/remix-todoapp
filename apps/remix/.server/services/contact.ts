import _ from 'lodash';
import { Prisma, PrismaClient } from '@prisma/client';
import { matchSorter } from 'match-sorter';

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

export const listContacts = async (query: string | null) => {
  let contacts = await prisma.contact.findMany();

  if (query) {
    contacts = matchSorter(contacts, query, {
      keys: ['first', 'last'],
    });
  }

  return _.sortBy(contacts, ['last', 'createdAt']);
};
