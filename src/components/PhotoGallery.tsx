"use client";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/NextJsImage";

export default function PhotoGallery(props: any) {
  console.log(props.images)
  const photos = props.images.map((photo: any) => ({
    src: photo.source,
    width: photo.width,
    height: photo.height,
  }))

  return (
    <PhotoAlbum
      photos={photos}
      layout="columns"
      columns={(containerWidth) => {
        if (containerWidth < 400) return 1
        return 2
      }}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{
        size: "calc(100vw - 40px)",
        sizes: [
          { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
          { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
          { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        ],
      }}
    />
  );
}
