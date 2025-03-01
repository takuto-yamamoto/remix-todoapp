import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, redirect, useLoaderData, useNavigate } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { getContact, updateContact } from '../services/contact.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');

  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response('Not Found', { status: 404 });
  }

  return { contact };
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await updateContact(params.contactId, updates);

  return redirect(`/contacts/${params.contactId}`);
};

export default function EditContact() {
  const { contact } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <Form id="contact-form" method="post">
      <p>
        <span>Name</span>
        <input
          aria-label="First name"
          defaultValue={contact.first ?? undefined}
          name="first"
          placeholder="First"
          type="text"
        />
        <input
          aria-label="Last name"
          defaultValue={contact.last ?? undefined}
          name="last"
          placeholder="Last"
          type="text"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          defaultValue={contact.twitter ?? undefined}
          name="twitter"
          placeholder="@jack"
          type="text"
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          defaultValue={contact.avatar ?? undefined}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          defaultValue={contact.notes ?? undefined}
          name="notes"
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </p>
    </Form>
  );
}
