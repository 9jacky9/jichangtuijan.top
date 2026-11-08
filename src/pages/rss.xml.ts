import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = (await getCollection('guides')).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: '机场推荐：价格、优惠码与选购攻略',
    description:
      '机场推荐：34家机场套餐价格、优惠码适用条件、每GB单价对比，以及新手入门、选购清单、客户端导入与自测方法。',
    site: context.site ?? 'https://jichangtuijan.top',
    items: guides.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      categories: [post.data.category, ...post.data.tags],
      link: `/guides/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
