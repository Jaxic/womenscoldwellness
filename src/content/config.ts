import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    pillar: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    relatedArticles: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const tubs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    originalPrice: z.number().optional(),
    image: z.string(),
    link: z.string(),
    affiliateLink: z.string().optional(),
    features: z.array(z.string()),
    specs: z.object({
      dimensions: z.string(),
      capacity: z.string(),
      cooling: z.string(),
      filtration: z.string().optional(),
      warranty: z.string().optional(),
    }),
    womensBenefit: z.string(),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  'blog': blog,
  'pillars': pillars,
  'tubs': tubs,
  'pages': pages,
};