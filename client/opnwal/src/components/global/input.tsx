import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-10 w-full mb-2 rounded-full border border-black bg-slate-100 px-4 py-2 text-normal font-medium focus-visible:ring-opacity-5 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-primaryBlue/50 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-100/20',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };
