import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    category: z.enum(['预算精算榜', '优惠码对比', '旗舰横评', '场景选择', '防坑课']),
    tags: z.array(z.string()),
    readingTime: z.string().default('7 分钟'),
    buyerVerdict: z.string(),
    featuredBrands: z.array(z.string()).default([]),
    stats: z
      .array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() }))
      .optional(),
    bars: z
      .object({
        title: z.string(),
        note: z.string().optional(),
        items: z.array(z.object({ label: z.string(), value: z.number(), text: z.string(), hot: z.boolean().optional() })),
      })
      .optional(),
    faqs: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { guides };
