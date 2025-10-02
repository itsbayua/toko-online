import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>

                        <Link
                            href={"/"}
                            className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent"
                        >
                            ShopHub
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            <Link
                                href="/"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href={"/products"}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                All Products
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Sale
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center relative">
                            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-9 w-64"
                            />
                        </div>

                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                                3
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
