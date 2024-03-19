'use client';

// import { useState } from 'react';
import { Button } from '@/components/global/button';
import { Input } from '@/components/global/input';
import GoogleSignUpButton from '@/components/ui/signUp/googleSignUpButton';
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
import { PrismaClient } from '@prisma/client';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/global/select';

const prisma = new PrismaClient();

// const formSchema = z
// 	.object({
// 		username: z
// 			.string({
// 				required_error: 'Please choose a username.',
// 			})
// 			.min(6, 'Minimum of 6 characters required')
// 			.max(20),
// 		userType: z.string({
// 			required_error: 'Please choose a User Type.',
// 		}),
// 		firstName: z
// 			.string({
// 				required_error: 'Please enter your first name.',
// 			})
// 			.min(2, 'Minimum of two characters required')
// 			.max(20),
// 		lastName: z
// 			.string({
// 				required_error: 'Please enter your last name.',
// 			})
// 			.min(2, 'Minimum of two characters required')
// 			.max(20),
// 		phoneNumber: z
// 			.string({
// 				required_error: 'Please enter your phone number.',
// 			})
// 			.min(10, 'Minimum of ten characters required')
// 			.max(15),
// 		email: z
// 			.string({
// 				required_error: 'Please enter your email.',
// 			})
// 			.email('Invalid email address'),
// 		password: z
// 			.string()
// 			.min(
// 				8,
// 				'Minimum requirements: 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.'
// 			)
// 			.regex(
// 				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
// 			),
// 		confirmPassword: z.string(),
// 	})
// 	.refine((data) => data.password === data.confirmPassword, {
// 		message: "Passwords don't match",
// 		path: ['confirmPassword'], // This specifies that the error should be associated with the confirmPassword field
// 	});

export default function SignUpForm() {
	// const form = useForm<z.infer<typeof formSchema>>({
	// 	resolver: zodResolver(formSchema),
	// 	defaultValues: {
	// 		username: '',
	// 		userType: '',
	// 		firstName: '',
	// 		lastName: '',
	// 		phoneNumber: '',
	// 		email: '',
	// 		password: '',
	// 		confirmPassword: '',
	// 	},
	// });

	// const onSubmit = async (values: z.infer<typeof formSchema>) => {
	// 	await prisma.user.create({
	// 		data: {
	// 			username: values.username,
	// 			userType: values.userType,
	// 			firstName: values.firstName,
	// 			lastName: values.lastName,
	// 			phoneNumber: values.phoneNumber,
	// 			email: values.email,
	// 			password: values.password,
	// 		},
	// 	});
	// 	console.log(values);
	// };

	// const [isVisible, setIsVisible] = useState(false);

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
			{/* <Form {...form}> */}
			<form
				// onSubmit={form.handleSubmit(onSubmit)}
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
				{/* <h1 className='text-5xl text-black mt-3 mb-5 mx-1'>
						Sign Up
					</h1>
					<p className='text-sm'>With Email</p>
					<div
						className='
                  px-5 mt-2 flex-col 
                  min-w-[350px]'
					>
						<hr className='border border-black w-full mb-5' />
						<div className='flex'>
							<div className='flex-col pr-2'>
								<FormField
									control={form.control}
									name='username'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input
													placeholder='Choose your username'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex-col pl-2'>
								<FormField
									control={form.control}
									name='userType'
									render={({ field }) => (
										<FormItem>
											<FormLabel>User Type</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder='Select your user type' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value='ARTIST'>
														Artist
													</SelectItem>
													<SelectItem value='BUSINESS'>
														Business
													</SelectItem>
													<SelectItem value='COLLECTOR'>
														Collector
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div className='flex'>
							<div className='flex-col pr-2'>
								<FormField
									control={form.control}
									name='firstName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input placeholder='John' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex-col pl-2'>
								<FormField
									control={form.control}
									name='lastName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input placeholder='Smith' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div className='flex-col'>
							<FormField
								control={form.control}
								name='phoneNumber'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<Input placeholder='555-234-6789' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex-col'>
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
						<div className='flex-col'>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type='password'
												placeholder='Choose your password'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex-col'>
							<FormField
								control={form.control}
								name='confirmPassword'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
										<FormControl>
											<Input
												type='password'
												placeholder='Confirm your password'
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
								onClick={form.handleSubmit(onSubmit)}
							>
								Register
							</Button>
						</div> */}
				<div className='flex items-center mt-5'>
					<hr className='border border-black w-full' />
					<p className='text-sm m-2'>Or</p>
					<hr className='border border-black w-full' />
				</div>
				<p className='text-sm mb-7 text-center'>With Social Media</p>
				<GoogleSignUpButton />
				<p className='text-sm mt-5 text-center'>
					Already have an account?{' '}
					<Link
						href={'/sign-in'}
						className='decoration-underline text-primaryBlue hover:underline'
					>
						Sign In
					</Link>
				</p>
				{/* </div> */}
			</form>
			{/* </Form> */}
		</div>
	);
}
