export interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    badge?: "sale" | "new" | "featured";
}

export interface CategoryCardProps {
    title: string;
    itemCount: number;
    icon: React.ReactNode;
}
