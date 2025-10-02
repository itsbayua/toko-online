import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import {
    categories,
    discountedProducts,
    featuredProducts,
} from "@/lib/placeholder-data";
import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import CategoryCard from "@/components/category-card";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-90" />
                <div className="absolute inset-0">
                    <img
                        src={"/assets/hero-banner.jpg"}
                        alt="Hero"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>

                <div className="relative container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-2xl space-y-6 animate-fade-in">
                        <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
                            Discover Amazing Products
                        </h2>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed">
                            Shop the latest trends with exclusive discounts.
                            Free shipping on orders over $50.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="group"
                            >
                                Shop Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                View Collections
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Featured Products
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Handpicked favorites just for you
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            {/* Discount Banner */}
            <section className="container mx-auto px-4 py-8">
                <div className="relative bg-gradient-hero rounded-2xl overflow-hidden shadow-glow">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

                    <div className="relative px-8 py-16 md:py-20 text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 animate-bounce-slow">
                            <Sparkles className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                            Flash Sale: Up to 50% Off!
                        </h2>
                        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                            Limited time offer on selected items. Don't miss out
                            on incredible savings!
                        </p>
                        <Button size="lg" variant="secondary" className="group">
                            Shop Sale Items
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Discounted Products */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Latest Discounts
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Save big on premium products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {discountedProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="w-full mx-auto p-16 md:py-24 bg-muted/30">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Popular Categories
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Explore our wide range of products
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-muted/20">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                                ShopHub
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Your one-stop destination for premium products
                                at unbeatable prices.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">
                                Shop
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        New Arrivals
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Best Sellers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Sale
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">
                                Support
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Shipping Info
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t text-center text-sm text-muted-foreground">
                        © 2025 ShopHub. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
