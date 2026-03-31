import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  className,
  centered = true,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "pt-28 pb-12 px-4",
        centered && "text-center",
        className
      )}
    >
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gradient">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
