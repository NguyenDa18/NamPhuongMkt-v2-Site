export interface NavbarLink {
  name: string,
  link: string
}

export interface Review {
  author: string,
  stars: number,
  text: string
}

export interface GalleryImage {
  src: string,
  thumbnail: string,
  thumbnailHeight: number,
  thumbnailWidth: number,
  caption: string
}