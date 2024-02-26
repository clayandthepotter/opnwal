import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
    <div className='
      w-[100vw]
      h-[100vh]
      bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100
    '>
      {children}
    </div>
  );
};

export default AuthLayout;
