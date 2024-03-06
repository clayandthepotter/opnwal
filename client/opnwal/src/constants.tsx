import { Icon } from '@iconify/react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Home',
		path: '/admin/',
		icon: <Icon icon='lucide:home' width='24' height='24' />,
	},
	{
		title: 'My Feed',
		path: '/admin/feed',
		icon: <Icon icon='lucide:newspaper' width='24' height='24' />,
	},
	{
		title: 'Dashboard',
		path: '/admin/dashboard',
		icon: (
			<Icon icon='lucide:layout-dashboard' width='24' height='24' />
		),
	},
	{
		title: 'Create',
		path: '/admin/create',
		icon: <Icon icon='lucide:pencil-ruler' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'New Post', path: '/admin/create/new-post' },
			{ title: 'New Product', path: '/admin/create/new-product' },
		],
	},

	{
		title: 'Products',
		path: '/admin/products',
		icon: <Icon icon='lucide:box' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Products', path: '/admin/products' },
			{ title: 'Consigned', path: '/admin/products/consigned' },
			{ title: 'Inventory', path: '/admin/products/inventory' },
		],
	},
	{
		title: 'Payments',
		path: '/admin/payments',
		icon: <Icon icon='lucide:wallet' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Payment Details', path: '/admin/payments/' },
			{ title: 'Invoices', path: '/admin/payments/invoices' },
			{ title: 'Orders', path: '/admin/payments/orders' },
		],
	},
	{
		title: 'Contacts',
		path: '/admin/contacts',
		icon: <Icon icon='lucide:contact-2' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Contacts', path: '/admin/contacts' },
			{ title: 'Artists', path: '/admin/contacts/artists' },
			{ title: 'Businesses', path: '/admin/contacts/businesses' },
			{ title: 'Collectors', path: '/admin/contacts/collectors' },
			// { title: 'Installers', path: '/admin/contacts/installers' },
		],
	},
	{
		title: 'Messages',
		path: '/admin/messages',
		icon: <Icon icon='lucide:mail' width='24' height='24' />,
	},
	{
		title: 'Notifications',
		path: '/admin/notifications',
		icon: <Icon icon='lucide:bell' width='24' height='24' />,
	},
	{
		title: 'Settings',
		path: '/admin/settings',
		icon: <Icon icon='lucide:settings' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Account', path: '/admin/settings/account' },
			{ title: 'Profile', path: '/admin/settings/profile' },
			{ title: 'Privacy', path: '/admin/settings/privacy' },
		],
	},
	{
		title: 'Help',
		path: '/admin/help',
		icon: <Icon icon='lucide:help-circle' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Contact Us', path: '/admin/help/contact-us' },
			{ title: 'FAQs', path: '/admin/help/faqs' },
			{ title: 'Tutorial', path: '/admin/help/tutorial' },
		],
	},
];
