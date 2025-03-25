import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        banner: (
          <RootToggle
            options={[
              { title: 'v4', description: 'Current version', url: '/docs' },
              { title: 'v3', description: 'Previous version', url: 'https://reatom.dev' },
              { title: 'v2', description: 'Old version', url: 'https://reatom.dev' },
              { title: 'v1', description: 'Old version', url: 'https://reatom.dev' },
            ]}
          />
        ),
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
