import {
  Form,
  Links,
  Meta,
  NavLink,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import appStylesHref from './app.css?url';
import { useEffect } from 'react';
import { createEmptyContact, listContacts } from './services/contact.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
];

// ref: https://remix.run/docs/en/main/guides/envvars
declare global {
  interface Window {
    ENV: {
      API_BASE_URL: string;
    };
  }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await listContacts(q);
  return {
    contacts,
    q,
    ENV: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  };
};

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`contacts/${contact.id}/edit`);
};

export default function App() {
  const { contacts, q, ENV } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    const searchField = document.getElementById('q');
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || '';
    }
  }, [q]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className={
            navigation.state === 'loading' && !searching ? 'loading' : ''
          }
          id="sidebar"
        >
          <h1>Remix Contacts</h1>
          <div>
            <Form
              id="search-form"
              role="search"
              onChange={(e) => {
                const isFirstSearch = q === null;
                submit(e.currentTarget, {
                  replace: !isFirstSearch,
                });
              }}
            >
              <input
                aria-label="Search contacts"
                className={searching ? 'loading' : ''}
                defaultValue={q || ''}
                id="q"
                name="q"
                placeholder="Search"
                type="search"
              />
              <div aria-hidden hidden={!searching} id="search-spinner" />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? 'active' : isPending ? 'pending' : ''
                      }
                      to={`contacts/${contact.id}`}
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{' '}
                      {contact.favorite ? <span>★</span> : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>

        <div
          className={navigation.state === 'loading' ? 'loading' : ''}
          id="detail"
        >
          <Outlet />
        </div>

        {/* ref: https://remix.run/docs/en/main/guides/envvars */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
