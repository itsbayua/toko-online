"use client";

import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { products } from "@/lib/placeholder-data";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import React, { useMemo, useState } from "react";

export default function ProductsPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
    const [sortBy, setSortBy] = useState<string>("newest");
    const [showFilters, setShowFilters] = useState(true);

    const categories = Array.from(new Set(products.map((p) => p.category)));
    const allSizes = Array.from(new Set(products.flatMap((p) => p.size || [])));

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const toggleSize = (size: string) => {
        setSelectedSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedSizes([]);
        setPriceRange([0, 2000]);
    };

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter((product) => {
            const categoryMatch =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);
            const priceMatch =
                product.price >= priceRange[0] &&
                product.price <= priceRange[1];
            const sizeMatch =
                selectedSizes.length === 0 ||
                (product.size &&
                    product.size.some((s) => selectedSizes.includes(s)));

            return categoryMatch && priceMatch && sizeMatch;
        });

        switch (sortBy) {
            case "price-asc":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                filtered.sort(
                    (a, b) => b.dateAdded.getTime() - a.dateAdded.getTime()
                );
                break;
            default:
                break;
        }

        return filtered;
    }, [selectedCategories, selectedSizes, priceRange, sortBy]);

    const activeFiltersCount = selectedCategories.length + selectedSizes.length;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">
                        All Products
                    </h1>
                    <p className="text-muted-foreground">
                        Showing {filteredAndSortedProducts.length} of{" "}
                        {products.length} products
                    </p>
                </div>

                <div className="flex gap-8">
                    {/* Filters Sidebar */}
                    <aside
                        className={`${
                            showFilters ? "w-72" : "w-0"
                        } flex-shrink-0 transition-all duration-300 overflow-hidden`}
                    >
                        <div className="sticky top-24 space-y-6 bg-card p-6 rounded-lg shadow-card">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                    <Filter className="h-5 w-5" />
                                    Filters
                                </h2>
                                {activeFiltersCount > 0 && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={clearFilters}
                                    >
                                        Clear All
                                    </Button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-foreground">
                                    Category
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <div
                                            key={category}
                                            className="flex items-center gap-2"
                                        >
                                            <Checkbox
                                                id={`category-${category}`}
                                                checked={selectedCategories.includes(
                                                    category
                                                )}
                                                onCheckedChange={() =>
                                                    toggleCategory(category)
                                                }
                                            />
                                            <Label
                                                htmlFor={`category-${category}`}
                                                className="text-sm cursor-pointer"
                                            >
                                                {category}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-foreground">
                                    Price Range
                                </h3>
                                <div className="space-y-4">
                                    <Slider
                                        min={0}
                                        max={2000}
                                        step={50}
                                        value={priceRange}
                                        onValueChange={(value) =>
                                            setPriceRange(
                                                value as [number, number]
                                            )
                                        }
                                        className="w-full"
                                    />
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-foreground">
                                    Size
                                </h3>
                                <div className="space-y-2">
                                    {allSizes.map((size) => (
                                        <div
                                            key={size}
                                            className="flex items-center gap-2"
                                        >
                                            <Checkbox
                                                id={`size-${size}`}
                                                checked={selectedSizes.includes(
                                                    size
                                                )}
                                                onCheckedChange={() =>
                                                    toggleSize(size)
                                                }
                                            />
                                            <Label
                                                htmlFor={`size-${size}`}
                                                className="text-sm cursor-pointer"
                                            >
                                                {size}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2"
                            >
                                {showFilters ? (
                                    <X className="h-4 w-4" />
                                ) : (
                                    <SlidersHorizontal className="h-4 w-4" />
                                )}
                                {showFilters ? "Hide Filters" : "Show Filters"}
                            </Button>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                    Sort by:
                                </span>
                                <Select
                                    value={sortBy}
                                    onValueChange={setSortBy}
                                >
                                    <SelectTrigger className="w-48">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="newest">
                                            Newest First
                                        </SelectItem>
                                        <SelectItem value="price-asc">
                                            Price: Low to High
                                        </SelectItem>
                                        <SelectItem value="price-desc">
                                            Price: High to Low
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {filteredAndSortedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredAndSortedProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl text-muted-foreground mb-4">
                                    No products found
                                </p>
                                <Button onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
