import { Icon } from '@iconify/react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Feed',
		path: '/dashboard/feed',
		icon: <Icon icon='lucide:newspaper' width='24' height='24' />,
	},
	{
		title: 'Dashboard',
		path: '/dashboard',
		icon: <Icon icon='lucide:home' width='24' height='24' />,
	},
	{
		title: 'Products',
		path: '/dashboard/products',
		icon: <Icon icon='lucide:barcode' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Products', path: '/dashboard/products' },
			{ title: 'Consigned', path: '/dashboard/products/consigned' },
			{ title: 'Inventory', path: '/dashboard/products/inventory' },
		],
	},
	{
		title: 'Payments',
		path: '/dashboard/payments',
		icon: <Icon icon='lucide:credit-card' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Payment Details', path: '/dashboard/payments/' },
			{ title: 'Invoices', path: '/dashboard/payments/invoices' },
			{ title: 'Orders', path: '/dashboard/payments/orders' },
		],
	},
	{
		title: 'Contacts',
		path: '/dashboard/contacts',
		icon: <Icon icon='lucide:notebook-tabs' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Contacts', path: '/dashboard/contacts' },
			{ title: 'Artists', path: '/dashboard/contacts/artists' },
			{ title: 'Venues', path: '/dashboard/contacts/venues' },
			{ title: 'Collectors', path: '/dashboard/contacts/collectors' },
			{ title: 'Installers', path: '/dashboard/contacts/installers' },
		],
	},
	{
		title: 'Messages',
		path: '/dashboard/messages',
		icon: <Icon icon='lucide:mail' width='24' height='24' />,
	},

	{
		title: 'Settings',
		path: '/dashboard/settings',
		icon: <Icon icon='lucide:settings' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Account', path: '/dashboard/settings/account' },
			{ title: 'Profile', path: '/dashboard/settings/profile' },
			{ title: 'Privacy', path: '/dashboard/settings/privacy' },
		],
	},
	{
		title: 'Help',
		path: '/dashboard/help',
		icon: <Icon icon='lucide:help-circle' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Contact Us', path: '/dashboard/help/contact-us' },
			{ title: 'FAQs', path: '/dashboard/help/faqs' },
			{ title: 'Tutorial', path: '/dashboard/help/tutorial' },
		],
	},
];
