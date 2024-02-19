'use client';
import { TypewriterEffect } from '@/components/global/typewriter-effect';

export function TypewriterText() {
	const words = [
		{
			text: 'Step',
		},
		{
			text: 'Into',
		},
		{
			text: 'Your',
		},
		{
			text: 'Future',
		},
		{
			text: 'With',
		},
		{
			text: 'Opnwal',
			className: 'bg-primaryBlue',
		},
	];

	return <TypewriterEffect words={words} />;
}
