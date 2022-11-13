interface ExternalUrls {
  spotify: string
}

interface Followers {
  href: any
  total: number
}

interface Image {
  height: any
  url: string
  width: any
}

interface User {
  displayName: string
  externalUrls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Array<Image>
  type: string
  uri: string
}

export { User }
