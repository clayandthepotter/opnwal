import { signIn } from 'next-auth/react';

export { default } from 'next-auth/middleware';

export const config = { matcher: '/admin' };
