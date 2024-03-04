import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// Create Users
	const artist = await prisma.user.create({
		data: {
			firstName: 'Claude',
			lastName: 'Monet',
			phoneNumber: '8814021971',
			email: 'claude@monet.com',
			password: 'monetmonetmonet',
			userType: 'ARTIST',
		},
	});

	const business = await prisma.user.create({
		data: {
			firstName: 'Jeff',
			lastName: 'Howard',
			businessName: "Jeff's Coffee House",
			phoneNumber: '0987654321',
			email: 'business@example.com',
			password: 'securepassword',
			userType: 'BUSINESS',
		},
	});

	const collector = await prisma.user.create({
		data: {
			firstName: 'Colin',
			lastName: 'Lector',
			phoneNumber: '1122334455',
			email: 'col.lector@example.com',
			password: 'securepassword',
			userType: 'COLLECTOR',
		},
	});

	// Create Products for Artist
	const publishedProduct = await prisma.product.create({
		data: {
			title: 'Purple Mountain Majesty',
			description: 'A beautiful landscape',
			dimensions: '20x30',
			buyNowPrice: 300.0,
			imageUrl: 'published_painting.jpg',
			userId: artist.id,
			published: true,
		},
	});

	const stagedProduct = await prisma.product.create({
		data: {
			title: 'Staged Painting',
			description: 'A stunning portrait',
			dimensions: '18x24',
			buyNowPrice: 200.0,
			imageUrl: 'staged_painting.jpg',
			userId: artist.id,
			published: false,
		},
	});

	// Create a Like and a Comment for the Published Product by the Collector
	await prisma.like.create({
		data: {
			productId: publishedProduct.id,
			userId: collector.id,
		},
	});

	await prisma.comment.create({
		data: {
			content: 'This painting is so beautiful!',
			productId: publishedProduct.id,
			userId: collector.id,
		},
	});

	// Create Posts for each User
	const artistPost = await prisma.post.create({
		data: {
			title: "Artist's Insights",
			description: 'Thoughts on my latest creation',
			userId: artist.id,
		},
	});

	const businessPost = await prisma.post.create({
		data: {
			title: 'Business Ventures',
			description: 'Exploring new art',
			userId: business.id,
		},
	});

	const collectorPost = await prisma.post.create({
		data: {
			title: 'Collecting Masterpieces',
			description: 'My journey in art collection',
			userId: collector.id,
		},
	});

	// Add Interactions to Posts (Likes and Comments from other users)
	// This is a simplified approach; adjust according to your schema's capabilities and constraints.

	// Create Following Relationships among Users
	// Assuming UserFollowing model exists and is correctly configured for many-to-many relations

	// Create Conversations (Messages) between Users
	// Messages between artist and collector
	await prisma.message.create({
		data: {
			senderId: artist.id,
			receiverId: collector.id,
			content: 'Thank you for your interest in my painting!',
		},
	});

	await prisma.message.create({
		data: {
			senderId: collector.id,
			receiverId: artist.id,
			content: "I'm thrilled to add it to my collection!",
		},
	});

	// Messages between artist and business
	await prisma.message.create({
		data: {
			senderId: artist.id,
			receiverId: business.id,
			content:
				"I'm interested in consigning my painting. Let's discuss.",
		},
	});

	await prisma.message.create({
		data: {
			senderId: business.id,
			receiverId: artist.id,
			content: "We're excited about the opportunity. Let's plan.",
		},
	});

	console.log('Database has been seeded.');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
