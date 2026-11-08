export interface PlanItem {
  name: string;
  cycle: '年付' | '月付' | '一次性';
  originalPrice: number;
  discountedPrice: number;
  monthlyEquivalent: number;
  trafficGB: number;
  costPerGB: number;
  couponApplicable: boolean;
  highlight?: string;
}

export interface BrandFAQ {
  q: string;
  a: string;
}

export interface BrandItem {
  rank: number;
  id: string;
  name: string;
  tagline: string;
  affUrl: string;
  couponCode: string | null;
  couponLabel: string;
  discountRate: number; // e.g. 0.7 for 70% off, 1.0 if no code
  cycleDiscountNote: string;
  lineType: '全 IPLC 专线' | '全 IEPL 专线' | 'IPLC/IEPL 混合专线' | 'BGP+IEPL 专线' | 'BGP+专线级出口';
  peakBandwidth: string;
  multiplier: string;
  protocol: string;
  deviceLimit: string;
  regions: string;
  unlockSupport: string[];
  hasRealSpeedRecord: boolean;
  tierBadge: string;
  budgetGroup: Array<'under10' | '10to20' | '20to35' | 'payg'>;
  useCaseTags: Array<'ai' | 'streaming' | 'family' | 'heavy'>;
  hasBigCoupon: boolean;
  lowestAnnualPrice: number | null;
  lowestAnnualMonthlyEq: number | null;
  lowestMonthlyOriginal: number;
  lowestMonthlyDiscounted: number;
  lowestMonthlyTrafficGB: number;
  bestValueCostPerGB: number;
  plans: PlanItem[];
  bestPlanPick: string;
  pros: string[];
  cons: string[];
  buyerSummary: string;
  faqs: BrandFAQ[];
}
