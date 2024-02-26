'use client';


import GoogleSignInButton from '@/components/ui/signIn/googleSignInButton';
import { useState } from 'react';
import { Button } from '@/components/global/button';
import { Input } from '@/components/global/input';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/global/form';

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().nonempty(),
});

export default function SignInForm() {

  const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

  const onSubmit = (values: z.infer<typeof formSchema>) => {
		// do something with the values
		console.log(values);
	};


	return (
		<div
			id='signupForm'
			className='
					relative
					w-[100vw]
					h-[100vh]
					flex
					flex-col
					justify-center
					items-center
					overflow-auto
				'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					id='signupForm'
					className='
              relative
              p-5
              flex
              flex-col
              justify-center
              items-center
              bg-primaryBlue/10
              rounded-[30px]
              border
              border-black
              overflow-auto
              pb-10
            '
				>
					<h1 className='text-5xl text-black mt-5 mb-3'>Sign In</h1>
					<p className='text-sm mt-3'>With Email</p>
					<div className='p-5 flex-col'>
						<hr className='border border-black w-full mb-5' />
						<div className='flex'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder='email@example.com'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex'>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder='Choose your password'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<Button
								variant='defaultWidthFull'
								type='submit'
								className='mt-5'
							>
								Sign In
							</Button>
						</div>
						<hr className='border border-black w-full mt-5 mb-2' />
						<p className='text-sm mb-3 text-center'>
							With Social Media
						</p>
						<GoogleSignInButton />
						<p className='text-sm mt-5'>
							Dont have an account?{' '}
							<Link
								href={'/sign-up'}
								className='decoration-underline text-primaryBlue hover:underline'
							>
								Sign Up
							</Link>
						</p>
					</div>
				</form>
			</Form>
		</div>
	);
}
