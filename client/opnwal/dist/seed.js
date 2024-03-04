"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var artist, business, collector, publishedProduct, stagedProduct, artistPost, businessPost, collectorPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.create({
                        data: {
                            firstName: 'Claude',
                            lastName: 'Monet',
                            phoneNumber: '8814021971',
                            email: 'claude@monet.com',
                            password: 'monetmonetmonet',
                            userType: 'ARTIST',
                        },
                    })];
                case 1:
                    artist = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                firstName: 'Jeff',
                                lastName: 'Howard',
                                businessName: "Jeff's Coffee House",
                                phoneNumber: '0987654321',
                                email: 'business@example.com',
                                password: 'securepassword',
                                userType: 'BUSINESS',
                            },
                        })];
                case 2:
                    business = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                firstName: 'Colin',
                                lastName: 'Lector',
                                phoneNumber: '1122334455',
                                email: 'col.lector@example.com',
                                password: 'securepassword',
                                userType: 'COLLECTOR',
                            },
                        })];
                case 3:
                    collector = _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: {
                                title: 'Purple Mountain Majesty',
                                description: 'A beautiful landscape',
                                dimensions: '20x30',
                                buyNowPrice: 300.0,
                                imageUrl: 'published_painting.jpg',
                                userId: artist.id,
                                published: true,
                            },
                        })];
                case 4:
                    publishedProduct = _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: {
                                title: 'Staged Painting',
                                description: 'A stunning portrait',
                                dimensions: '18x24',
                                buyNowPrice: 200.0,
                                imageUrl: 'staged_painting.jpg',
                                userId: artist.id,
                                published: false,
                            },
                        })];
                case 5:
                    stagedProduct = _a.sent();
                    // Create a Like and a Comment for the Published Product by the Collector
                    return [4 /*yield*/, prisma.like.create({
                            data: {
                                productId: publishedProduct.id,
                                userId: collector.id,
                            },
                        })];
                case 6:
                    // Create a Like and a Comment for the Published Product by the Collector
                    _a.sent();
                    return [4 /*yield*/, prisma.comment.create({
                            data: {
                                content: 'This painting is so beautiful!',
                                productId: publishedProduct.id,
                                userId: collector.id,
                            },
                        })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.post.create({
                            data: {
                                title: "Artist's Insights",
                                description: 'Thoughts on my latest creation',
                                userId: artist.id,
                            },
                        })];
                case 8:
                    artistPost = _a.sent();
                    return [4 /*yield*/, prisma.post.create({
                            data: {
                                title: 'Business Ventures',
                                description: 'Exploring new art',
                                userId: business.id,
                            },
                        })];
                case 9:
                    businessPost = _a.sent();
                    return [4 /*yield*/, prisma.post.create({
                            data: {
                                title: 'Collecting Masterpieces',
                                description: 'My journey in art collection',
                                userId: collector.id,
                            },
                        })];
                case 10:
                    collectorPost = _a.sent();
                    // Add Interactions to Posts (Likes and Comments from other users)
                    // This is a simplified approach; adjust according to your schema's capabilities and constraints.
                    // Create Following Relationships among Users
                    // Assuming UserFollowing model exists and is correctly configured for many-to-many relations
                    // Create Conversations (Messages) between Users
                    // Messages between artist and collector
                    return [4 /*yield*/, prisma.message.create({
                            data: {
                                senderId: artist.id,
                                receiverId: collector.id,
                                content: 'Thank you for your interest in my painting!',
                            },
                        })];
                case 11:
                    // Add Interactions to Posts (Likes and Comments from other users)
                    // This is a simplified approach; adjust according to your schema's capabilities and constraints.
                    // Create Following Relationships among Users
                    // Assuming UserFollowing model exists and is correctly configured for many-to-many relations
                    // Create Conversations (Messages) between Users
                    // Messages between artist and collector
                    _a.sent();
                    return [4 /*yield*/, prisma.message.create({
                            data: {
                                senderId: collector.id,
                                receiverId: artist.id,
                                content: "I'm thrilled to add it to my collection!",
                            },
                        })];
                case 12:
                    _a.sent();
                    // Messages between artist and business
                    return [4 /*yield*/, prisma.message.create({
                            data: {
                                senderId: artist.id,
                                receiverId: business.id,
                                content: "I'm interested in consigning my painting. Let's discuss.",
                            },
                        })];
                case 13:
                    // Messages between artist and business
                    _a.sent();
                    return [4 /*yield*/, prisma.message.create({
                            data: {
                                senderId: business.id,
                                receiverId: artist.id,
                                content: "We're excited about the opportunity. Let's plan.",
                            },
                        })];
                case 14:
                    _a.sent();
                    console.log('Database has been seeded.');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
