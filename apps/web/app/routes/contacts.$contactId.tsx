import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, useFetcher, useLoaderData } from '@remix-run/react';

import { type Contact } from '@prisma/client';
import { FunctionComponent } from 'react';
import invariant from 'tiny-invariant';

import { getContact, updateContact } from '../services/contact';


export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.contactId, 'Missing Contact Id');

  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response('Not Found', { status: 404 });
  }

  return { contact };
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');

  const formData = await request.formData();

  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
};

export default function Contact() {
  const { contact } = useLoaderData<typeof loader>();

  return (
    <div id="contact">
      <div>
        <img
          alt={`${contact.first} ${contact.last} avatar`}
          key={contact.avatar}
          src={contact.avatar ?? undefined}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                'Please confirm you want to delete this record.'
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Favorite: FunctionComponent<{
  contact: Pick<Contact, 'favorite'>;
}> = ({ contact }) => {
  const fetcher = useFetcher();
  const favorite = fetcher.formData
    ? fetcher.formData.get('favorite') === 'true'
    : contact.favorite;

  return (
    <fetcher.Form method="post">
      <button
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        name="favorite"
        value={favorite ? 'false' : 'true'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
};
