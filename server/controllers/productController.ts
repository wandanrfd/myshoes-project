import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// GET /api/product/flash-deals
export const getFlashDeals = async (req: Request, res: Response) => {
  try {
    // Diubah: Filter stock dihilangkan
    const products = await prisma.product.findMany({
      orderBy: { originalPrice: "desc" },
    });

    const productsWithDiscount = products.map((p: any) => {
      const discount =
        p.originalPrice && p.price
          ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
          : 0;
      return {
        ...p,
        _id: p._id || p.id,
        id: p.id || p._id,
        discount,
      };
    });

    res.json({ products: productsWithDiscount.slice(0, 8) });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/product
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, search, minPrice, maxPrice, sort } = req.query;

    // Diubah: Filter stock dihilangkan
    const products = await prisma.product.findMany();

    const formattedProducts = products.map((p: any) => ({
      ...p,
      _id: p._id || p.id,
      id: p.id || p._id,
    }));

    res.json({ products: formattedProducts, pages: 1 });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/product/:id
export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || id === "undefined") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const formattedProduct = {
      ...product,
      _id: (product as any)._id || product.id,
      id: product.id || (product as any)._id,
    };

    res.json({ product: formattedProduct });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await prisma.product.create({
      data: productData,
    });

    res.status(201).json({ product: newProduct });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/product/:id
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: productData,
    });

    res.json({ product: updatedProduct });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/product/:id
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: id },
    });

    res.json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
