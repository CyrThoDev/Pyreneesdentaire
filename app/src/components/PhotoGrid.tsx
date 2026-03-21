// components/PhotoGrid.tsx
// Grille masonry 3 colonnes à la CSS pure — aucune lib externe requise
// Usage : <PhotoGrid photos={photos} />

import Image from "next/image";

export interface PhotoItem {
  src: string;
  alt: string;
  // width & height natifs de l'image (en px) — servent au ratio
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: PhotoItem[];
  /** Nombre de colonnes (défaut 3) */
  columns?: number;
  /** Gap entre les photos en px (défaut 8) */
  gap?: number;
}

export default function PhotoGrid({
  photos,
  columns = 3,
  gap = 8,
}: PhotoGridProps) {
  // Répartition des photos dans les colonnes (ordre séquentiel, comme dans ton image)
  const cols: PhotoItem[][] = Array.from({ length: columns }, () => []);
  photos.forEach((photo, i) => {
    cols[i % columns].push(photo);
  });

  return (
    <div
      className="photo-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
        width: "100%",
      }}
    >
      {cols.map((col, colIndex) => (
        <div
          key={colIndex}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${gap}px`,
          }}
        >
          {col.map((photo, photoIndex) => (
            <div
              key={photoIndex}
              style={{
                position: "relative",
                width: "100%",
                // Le ratio de chaque photo est respecté grâce à aspect-ratio
                aspectRatio: `${photo.width} / ${photo.height}`,
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw`}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}