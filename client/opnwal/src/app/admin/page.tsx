export default function Dashboard() {
	return (
		<>
			<span className='font-bold text-4xl'>My Dashboard</span>
			<div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
		</>
	);
}

// import { sql } from '@vercel/postgres';

// export default async function Cart({
// 	params,
// }: {
// 	params: { user: string };
// }): Promise<JSX.Element> {
// 	const { rows } =
// 		await sql`SELECT * from CARTS where user_id=${params.user}`;

// 	return (
// 		<div>
// 			{rows.map((row) => (
// 				<div key={row.id}>
// 					{row.id} - {row.quantity}
// 				</div>
// 			))}
// 		</div>
// 	);
// }
