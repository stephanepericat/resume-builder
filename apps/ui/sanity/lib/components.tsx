import type { PortableTextReactComponents } from '@portabletext/react'

export const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="mb-3">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-3">{children}</ul>,
    number: ({ children }) => <ol className="mb-3">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-1 list-disc ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1 list-decimal ml-4">{children}</li>
    ),
  },
}
