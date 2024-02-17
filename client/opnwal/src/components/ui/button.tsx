import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primaryBlue hover:bg-primary/70',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-black bg-transparent hover:bg-accent hover:text-accent-foreground',
				outlineBgGradient:
					'border border-black bg-gradient-to-br from-pink-200 via-sky-200 to-emerald-200 hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/70',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				nav: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-full px-3',
				lg: 'h-11 rounded-full px-8',
				xl: 'h-14 rounded-full px-12 text-lg',
				jumbo: 'h-24 rounded-full px-14 text-4xl py-9 font-normal',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<motion.div
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ y: -0.5, scale: 1.05 }}
				transition={{
					type: 'spring',
					damping: 7,
					stiffness: 50,
					restDelta: 0.001,
				}}
			>
				<Comp
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					{...props}
				/>
			</motion.div>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
