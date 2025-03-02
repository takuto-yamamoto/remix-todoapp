import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
