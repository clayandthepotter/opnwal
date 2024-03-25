'use client';

import { Button } from '@/components/global/button';
import { Carousel } from '@/components/global/carousel';
import { Checkbox } from '@/components/global/checkbox';
import { Dialog } from '@/components/global/dialog';
import { Form } from '@/components/global/form';
import { Label } from '@/components/global/label';
import { Input } from '@/components/global/input';
import { Textarea } from '@/components/global/textarea';
import { Select } from '@/components/global/select';

const TestPage = () => {
	return (
		<div className='space-y-5 space-x-2 p-5 block'>
			<h1 className='text-[8vmax] '>H1</h1>
			<h2 className='text-[7vmax]'>H2</h2>
			<h3 className='text-[6vmax]'>H3</h3>
			<h4 className='text-[5vmax]'>H4</h4>
			<h5 className='text-[4vmax]'>H5</h5>
			<h6 className='text-[3vmax]'>H6</h6>
			<p className='text-[1.5vmax] '>Paragraph</p>
			<a href='#'>Link</a>
			<Button variant='default'>Default Button</Button>
			<Button variant='secondary'>Seconday Button</Button>
			<Button variant='defaultWidthFull'>Default Full Width</Button>
			<Button variant='destructive'>Destructive Button</Button>
			<Button variant='ghost'>Ghost Button</Button>
			<Button variant='link'>Link Button</Button>
			<Button variant='outline'>Outline Button</Button>
			<Button variant='outlineBgGradient'>
				OutlineBgGradient Button
			</Button>
			<Carousel>Carousel</Carousel>
			<Checkbox>Checkbox</Checkbox>
			<Dialog>Dialog</Dialog>
			<Form>
				Form
				<Label>Label</Label>
				<Input />
				<Textarea>TextArea</Textarea>
				<Select>Select</Select>
				<Button variant='default'>Default Button</Button>
			</Form>
		</div>
	);
};

export default TestPage;
