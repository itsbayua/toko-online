"use client";

import { products } from "@/lib/placeholder-data";
import { useState } from "react";
import Header from "@/components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id;
    const product = products.find((p) => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                        Product Not Found
                    </h1>
                    <Link href={"/products"}>
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const badgeColors = {
        sale: "bg-[hsl(var(--badge-sale))] text-white",
        new: "bg-[hsl(var(--badge-new))] text-white",
        featured: "bg-[hsl(var(--badge-featured))] text-white",
    };

    const handleAddToCart = () => {
        if (product.size && product.size.length > 0 && !selectedSize) {
            toast.error("Please select a size");
            return;
        }

        toast.success("Added to cart!", {
            description: `${quantity} x ${product.title}${
                selectedSize ? ` (${selectedSize})` : ""
            }`,
        });
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <Link
                    href={"/products"}
                    className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Link>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted shadow-card">
                            {product.badge && (
                                <Badge
                                    className={`absolute top-4 right-4 z-10 ${
                                        badgeColors[product.badge]
                                    }`}
                                >
                                    {product.badge.toUpperCase()}
                                </Badge>
                            )}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-4xl font-bold text-foreground mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-4xl font-bold text-primary">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <p className="text-foreground/80 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            {product.stock > 0 ? (
                                <>
                                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--badge-new))]" />
                                    <span className="text-foreground font-medium">
                                        In Stock ({product.stock} available)
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className="w-2 h-2 rounded-full bg-destructive" />
                                    <span className="text-destructive font-medium">
                                        Out of Stock
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Size Selection */}
                        {product.size && product.size.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-3">
                                    Select Size
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {product.size.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                            className={`px-4 py-2 rounded-md border-2 transition-all ${
                                                selectedSize === size
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-input bg-background hover:border-primary"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-3">
                                Quantity
                            </label>
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={decrementQuantity}
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="text-xl font-semibold text-foreground w-12 text-center">
                                    {quantity}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={incrementQuantity}
                                    disabled={quantity >= product.stock}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                        >
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
