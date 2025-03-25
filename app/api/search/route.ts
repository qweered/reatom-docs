import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// For static search
// it should be cached forever
// export const revalidate = false;
 
// export const { staticGET: GET } = createFromSource(source);

// TODO: add debounce, right now it searches on each key stroke
export const { GET } = createFromSource(source);