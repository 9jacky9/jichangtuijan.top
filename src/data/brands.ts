import type { BrandItem, PlanItem, BrandFAQ } from './brands-types';
import { brandsPart1 } from './brands-part1';
import { brandsPart2 } from './brands-part2';

export type { BrandItem, PlanItem, BrandFAQ };

// 固定排名：暮光网络、飞猫云、微风网络、大佬云为前四名，其余品牌的顺序为一次性随机后写死，不再变动。
const RANK_ORDER: string[] = ["twilight", "flycat", "breezenet", "dalaoyun", "wavenet", "v2yun", "kuajie", "jilianyun", "invisible", "1fly", "2maoyun", "firefly", "shenxing", "kosing", "liulianyun", "sujie", "laddercloud", "xingdaomeng", "lingmao", "kuaili", "edgenova", "guangnianti", "shandianshu", "huanqiuti", "guangsuyun", "quanqiuyun", "flyv", "yunjiexian", "u1s1", "lingdong", "shanyue", "worryfree", "sogoyun", "yuzhou"];

const rawBrands: BrandItem[] = [...brandsPart1, ...brandsPart2];

export const allBrands: BrandItem[] = RANK_ORDER.map((id, i) => {
  const b = rawBrands.find((x) => x.id === id)!;
  return { ...b, rank: i + 1, tierBadge: `资料排序 ${i + 1}` };
});

export function getBrandById(id: string): BrandItem | undefined {
  return allBrands.find((b) => b.id === id);
}

// Top 3 Flagship Brands for Hero Podium
export const flagshipTop3: BrandItem[] = ['twilight', 'flycat', 'breezenet']
  .map((id) => getBrandById(id)!)
  .filter(Boolean);

// Six 70% Off Super Coupon Brands
export const seventyOffBrands: BrandItem[] = allBrands.filter(b => b.hasBigCoupon);

// Ranking 1: 综合旗舰主力榜
export const rankingFlagshipList: BrandItem[] = allBrands.slice(0, 10);

// Ranking 2: 7折/8折神券折后性价比榜（按折后月付从低到高排序）
export const rankingCouponValueList: BrandItem[] = allBrands
  .filter((b) => b.couponCode !== null)
  .sort((a, b) => a.lowestMonthlyDiscounted - b.lowestMonthlyDiscounted);

// Ranking 3: 百元内年付小包学生/备用榜（实付年费 <= 100元）
export const rankingUnder100AnnualList: BrandItem[] = allBrands
  .filter((b) => b.lowestAnnualPrice !== null && b.lowestAnnualPrice <= 100)
  .sort((a, b) => (a.lowestAnnualPrice ?? 999) - (b.lowestAnnualPrice ?? 999));

// Ranking 4: 一次性不限时流量包榜
export const rankingPayAsYouGoList: BrandItem[] = ['2maoyun', 'quanqiuyun', 'twilight']
  .map((id) => getBrandById(id)!)
  .filter(Boolean);

// Ranking 5: 大流量/多设备家庭与工作室榜（含 >=350GB 档位品牌）
export const rankingHeavyStudioList: BrandItem[] = [
  'breezenet',
  'shenxing',
  'yunjiexian',
  'twilight',
  'quanqiuyun',
  'flycat',
  '1fly',
  'lingdong',
  'v2yun',
  'worryfree',
  'shanyue',
  'firefly',
  'liulianyun',
  'wavenet',
  'flyv',
  'sogoyun',
]
  .map((id) => getBrandById(id)!)
  .filter(Boolean);
