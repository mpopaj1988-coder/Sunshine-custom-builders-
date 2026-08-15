import type { KitchenImage } from "@/assets/kitchen/images";

interface ResponsiveImageProps {
  image: KitchenImage;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
}

export function ResponsiveImage({
  image,
  className,
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "100vw",
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={`${image.webp800} 800w, ${image.webp1600} 1600w`} sizes={sizes} />
      <img
        src={image.jpg1600}
        srcSet={`${image.jpg800} 800w, ${image.jpg1600} 1600w`}
        sizes={sizes}
        alt={image.alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  );
}
