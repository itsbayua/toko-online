export interface ProductCardProps {
    id: string;
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

export interface Product {
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    category: string;
    size?: string[];
    badge?: "sale" | "new" | "featured";
    dateAdded: Date;
    description: string;
    stock: number;
}
