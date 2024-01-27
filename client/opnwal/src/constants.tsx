import { Icon } from "@iconify/react"
import { SideNavItem } from './types'

export const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Dashboard',
		path: '/',
		icon: <Icon icon='lucide:home' width='24' height='24' />,
	},
	{
		title: 'Products',
		path: '/products',
		icon: <Icon icon='lucide:barcode' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Products', path: '/products' },
			{ title: 'Consigned', path: '/products/consigned' },
			{ title: 'Inventory', path: '/products/inventory' },
		],
	},
	{
		title: 'Payments',
		path: '/payments',
		icon: <Icon icon='lucide:credit-card' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Payment Details', path: 'payments/payment-details' },
			{ title: 'Invoices', path: 'payments/invoices' },
			{ title: 'Orders', path: 'payments/orders' },
		],
	},
	{
		title: 'Contacts',
		path: '/contacts',
		icon: <Icon icon='lucide:notebook-tabs' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'All Contacts', path: '/contacts' },
			{ title: 'Artists', path: '/contacts/artists' },
			{ title: 'Venues', path: '/contacts/venues' },
			{ title: 'Collectors', path: '/contacts/collectors' },
			{ title: 'Product Handlers', path: '/contacts/product-handlers' },
		],
	},
	{
		title: 'Messages',
		path: '/messages',
		icon: <Icon icon='lucide:mail' width='24' height='24' />,
	},
	
	{
		title: 'Settings',
		path: '/settings',
		icon: <Icon icon='lucide:settings' width='24' height='24' />,
		submenu: true,
		subMenuItems: [
			{ title: 'Account', path: 'settings/account' },
			{ title: 'Privacy', path: 'settings/privacy' },
		],
	},
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon='lucide:help-circle' width='24' height='24'/>
  }
]