import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 400 400"
          fill="#151134"
          stroke="#fff"
          stroke-width="15px"
        >
          <circle cx="200" cy="200" r="200" fill="#fff" stroke-width="0" />
          <circle cx="200" cy="200" r="175" stroke-width="0" />
          <circle cx="180" cy="180" r="130" />
          <circle cx="215" cy="180" r="70" />
          <circle cx="150" cy="94" r="38" />
          <circle cx="100" cy="195" r="40" />
          <circle cx="165" cy="275" r="30" />
          <circle cx="250" cy="265" r="20" />
          <circle cx="57" cy="270" r="20" />
          <circle cx="215" cy="345" r="36" />
          <circle cx="310" cy="290" r="36" />
          <circle cx="345" cy="195" r="30" />
          <circle cx="321" cy="107" r="25" />
          <circle cx="260" cy="50" r="20" />
          <circle cx="120" cy="330" r="25" />
        </svg>
        Reatom
      </>
    )
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url'
    }
  ]
}
