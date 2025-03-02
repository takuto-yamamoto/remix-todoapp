import { PrismaClient } from '@prisma/client';
import { EXIT_CODE_ERROR } from 'utils/constants';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.contact.createMany({
    data: [
      {
        first: 'Alice',
        last: 'Smith',
        avatar: 'https://example.com/avatars/alice.jpg',
        twitter: 'alice_smith',
        notes: 'Alice is a software engineer.',
        favorite: true,
      },
      {
        first: 'Bob',
        last: 'Johnson',
        avatar: 'https://example.com/avatars/bob.jpg',
        twitter: 'bob_johnson',
        notes: 'Bob is a product manager.',
        favorite: false,
      },
      {
        first: 'Carol',
        last: 'Williams',
        avatar: 'https://example.com/avatars/carol.jpg',
        twitter: 'carol_williams',
        notes: 'Carol is a designer.',
        favorite: true,
      },
    ],
  });

  console.log('Seeding finished!');
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(EXIT_CODE_ERROR);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
