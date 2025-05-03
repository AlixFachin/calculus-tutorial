// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const lessons = defineCollection({ 
    loader: glob({pattern: '**/*.md', base: './content'}),
    schema: z.object({
        title: z.string(),
        slug: z.string().optional()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { lessons };