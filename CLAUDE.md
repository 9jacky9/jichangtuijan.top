# CLAUDE.md — Project Guidelines for jichangtuijan.top

请首先完整阅读根目录下的 `AGENTS.md`。本站点（`https://jichangtuijan.top` · 机场推荐严选榜 · TopPick 买手指南）遵循以下核心准则：

## 1. 常用开发与构建命令
- 安装依赖：`npm install`
- 本地开发预览：`npm run dev`
- 生产环境构建与静态检查：`npm run build`（每次修改后必须确保 0 报错通过）
- 预览生产构建产物：`npm run preview`

## 2. 权威数据源与不可妥协的红线
1. **34家品牌数据唯一来源**：`src/data/brands.ts` 严格映射全部 34 个品牌的推广链接（含 `?code=xxx`）、真实优惠码、折扣系数、各档位套餐价格与流量配额。**严禁修改任何推广链接字符，严禁虚构不存在的套餐或折扣**。
2. **反编造测速原则**：严禁为无测速图的品牌编造具体延迟（ms）或实测跑分数值；所有横向比价与买手建议均基于官方标称带宽（2.5Gbps / 1000Mbps）、线路架构（IPLC / IEPL / BGP）、1.0x 倍率、折后月均价及每 GB 折算单价。
3. **100% 原创买手文风**：杜绝 AI 套话（禁止使用“在当今数字化时代”、“深度解析”、“总而言之”、“摒弃废话”等词）。文章聚焦**真实算账（折后价、每GB单价、首单立省金额）、档位取舍与避坑拆解**。
4. **独立站点指纹**：采用「什么值得买 / Wirecutter 级消费严选 · 皇家紫金 Bento 买手杂志风」（温暖珍珠白 `#FAF9F6` + 皇家紫 `#5B21B6` + 火烈鸟玫红 `#E11D48` + 皇冠香槟金 `#D97706`），严禁添加任何指向其他站点的友情链接。
5. **全量结构化数据 (JSON-LD)**：所有页面均需输出准确的 `WebSite`、`ItemList`、`Product` / `AggregateOffer`、`FAQPage`、`BreadcrumbList` 或 `Article` Schema，确保 Bing 搜索高 CTR 富摘要展现。
