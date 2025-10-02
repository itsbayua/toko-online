import { ProductCardProps } from "@/lib/definitions";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
    id,
    image,
    title,
    price,
    originalPrice,
    badge,
}: ProductCardProps) {
    const badgeColors = {
        sale: "bg-[hsl(var(--badge-sale))] text-white",
        new: "bg-[hsl(var(--badge-new))] text-white",
        featured: "bg-[hsl(var(--badge-featured))] text-white",
    };

    return (
        <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            {badge && (
                <Badge
                    className={`absolute top-4 right-4 z-10 ${badgeColors[badge]}`}
                >
                    {badge.toUpperCase()}
                </Badge>
            )}

            <Link href={`products/${id}`} className="flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <h3 className="font-semibold px-6 pt-6 text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>

                <div className="mt-auto px-6 pb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-primary">
                            ${price.toFixed(2)}
                        </span>
                        {originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                                ${originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                    <Button className="w-full group/btn" size="lg">
                        <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        Add to Cart
                    </Button>
                </div>
            </Link>
        </div>
    );
}
