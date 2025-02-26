import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <header>
          <h1>Welcome to Remix</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
