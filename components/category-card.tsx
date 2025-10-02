import { CategoryCardProps } from "@/lib/definitions";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({
    title,
    itemCount,
    icon,
}: CategoryCardProps) {
    return (
        <div className="group relative bg-gradient-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
                    dangerouslySetInnerHTML={
                        icon ? { __html: icon } : undefined
                    }
                />

                <div>
                    <h3 className="font-semibold text-xl text-foreground mb-1">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {itemCount} Products
                    </p>
                </div>

                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Browse</span>
                    <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
}
