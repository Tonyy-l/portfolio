type ProjectGalleryProps = {
  images: string[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image) => (
        <img key={image} src={image} alt="" className="h-56 w-full rounded-2xl border border-line object-cover" />
      ))}
    </div>
  );
}
