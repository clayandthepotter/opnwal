import { Icon } from '@iconify/react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Feed',
		path: '/admin/feed',
		icon: <Icon icon='lucide:newspaper' width='24' height='24' />,
	},
	{
		title: 'Dashboard',
		path: '/admin/dashboard',
		icon: <Icon icon='lucide:home' width='24' height='24' />,
	},
	{
		title: 'Products',
		path: '/admin/products',
		icon: <Icon icon='lucide:barcode' width='24' height='24' />,
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
		icon: <Icon icon='lucide:credit-card' width='24' height='24' />,
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
		icon: <Icon icon='lucide:notebook-tabs' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Contacts', path: '/admin/contacts' },
			{ title: 'Artists', path: '/admin/contacts/artists' },
			{ title: 'Venues', path: '/admin/contacts/venues' },
			{ title: 'Collectors', path: '/admin/contacts/collectors' },
			{ title: 'Installers', path: '/admin/contacts/installers' },
		],
	},
	{
		title: 'Messages',
		path: '/admin/messages',
		icon: <Icon icon='lucide:mail' width='24' height='24' />,
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
