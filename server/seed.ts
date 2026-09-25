import { prisma } from "./config/prisma.js";
import { Prisma } from "./generated/prisma/client.js";

const seedDB = async () => {
  try {
    // 1. Hapus data produk lama
    await prisma.product.deleteMany({});
    console.log("Cleared existing products");

    // 2. Data produk yang sesuai dengan skema Prisma kamu
    const products: Prisma.ProductCreateManyInput[] = [
      {
        id: "1",
        name: "Stiletto High Heels Elegant",
        description:
          "High heels bahan kulit sintetis premium dengan desain anggun untuk acara formal.",
        price: 520000,
        originalPrice: 650000,
        image:
          "https://i.pinimg.com/1200x/33/b3/41/33b341666cc317bd23f8cda04f45fe6f.jpg",
        category: "high-heels",
        rating: 4.8,
        reviewCount: 34,
      },
      {
        id: "2",
        name: "Classic Low Canvas Sneakers",
        description:
          "Sepatu kanvas bertali gaya retro, sangat ringan dan nyaman untuk pemakaian sehari-hari.",
        price: 299000,
        originalPrice: 380000,
        image:
          "https://i.pinimg.com/1200x/a8/a1/72/a8a172aaf893a6eb3088c4933bf393bd.jpg",
        category: "canvas",
        rating: 4.6,
        reviewCount: 89,
      },
      {
        id: "3",
        name: "Leather Strapped Casual Sandal",
        description:
          "Sandal kulit kasual dengan strap fleksibel dan sol empuk anti slip.",
        price: 199000,
        originalPrice: 250000,
        image:
          "https://i.pinimg.com/1200x/af/b2/91/afb291deb8a880adc41d25886b8bf133.jpg",
        category: "sandal",
        rating: 4.5,
        reviewCount: 52,
      },
      {
        id: "4",
        name: "Urban Streetwear Sneakers",
        description:
          "Sneakers modern dengan sirkulasi udara baik, cocok untuk hang out maupun olahraga ringan.",
        price: 599000,
        originalPrice: 750000,
        image:
          "https://i.pinimg.com/1200x/75/d5/71/75d5716e103eb924624458ff025374ab.jpg",
        category: "sneakers",
        rating: 4.9,
        reviewCount: 120,
      },
      {
        id: "5",
        name: "Tactical Leather Boots",
        description:
          "Sepatu boots bahan kulit tahan lama dengan grip kuat untuk segala medan.",
        price: 712000,
        originalPrice: 890000,
        image:
          "https://i.pinimg.com/1200x/5f/d1/1f/5fd11f37729c7c9bd6513d815b56b7a9.jpg",
        category: "boots",
        rating: 4.7,
        reviewCount: 45,
      },
    ];

    // 3. Masukkan data ke database
    await prisma.product.createMany({ data: products });
    console.log(`Cleared ${products.length} products`);

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDB();
