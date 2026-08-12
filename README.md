# 巴塞罗那品牌视觉机会工作台

这是一个长期维护的求职侦察网站，目标不是堆招聘链接，而是把适合居住在 Barcelona 的品牌视觉机会逐条核验后整理成可执行清单。

[打开公开网站](https://soldiersmini-blip.github.io/barcelona-brand-design-opportunities/)

## 当前主表

- 168 个去重后的当前机会。
- 122 个 Barcelona / 周边机会。
- 46 个明确允许 Spain / Europe / worldwide remote 且人在西班牙可申请或可先核验的机会。
- 163 个原始详情页显示可投，5 个需要先确认。
- 5 个中文、华人圈、中国公司或中文远程相关机会。

主表只收录已逐条检查过地点、岗位方向、当前状态和真实入口的机会。默认按“我的匹配分”严格从高到低排列；分数同时考虑 Barcelona/Spain 可行性、品牌视觉相关度、资历、语言门槛、状态可信度和材料投入成本。

## 数据分区

- `我的全部机会`：当前独立、相关、地点可行且有真实入口或可直接联系发布者确认的 168 条主表。
- `华人中文全库`：华人网、中文社区、Casa Asia 和中国公司相关来源的完整线索。
- `页面仍可复核`：详情还在，但状态、地点或申请控制需要再次确认的记录。
- `关闭 / 历史 / 排除`：已过期、错误地点、重复、非设计岗或无法证实的记录。历史不会删除。

## 关键文件

- `AUDIT-2026-08-12-ROUND23.md`：从完整研究库补回 5 个真正独立的当前机会，刷新 Textura、EuroLeague 与 Act Second 三个既有规范记录，并隔离 Voodoo 关闭页、Roman/LCDC 搜索缓存、reboot 错误标题、重复 ID、非设计 Head of Brand 与 Spreadit 低薪帖。主表为 168 条、122 条 Barcelona 与 46 条远程。
- `AUDIT-2026-08-12-ROUND22.md`：新增 THE/STUDIO 全球远程品牌概念岗与 Prime Insights 远程品牌视觉岗，把 Jobgether 匿名合作公司岗位严格放在待核验末位；复查 Casa Asia、华新与西华后不以旧帖或非设计岗虚增中文数量。主表为 163 条、120 条 Barcelona 与 43 条远程。
- `AUDIT-2026-08-12-ROUND21.md`：复核高分岗位与官方 ATS；关闭已从 Kraken 官方职位板移除的 Breakout 岗，隔离 Superside 的 Spain/LATAM 地区误标，用 VML 当前 Barcelona 官方岗位补位，并把 Siemens 本地英语视觉系统岗提升到合理排名；主表保持 160 条、120 条 Barcelona 与 40 条远程。
- `AUDIT-2026-08-12-ROUND20.md`：重新打开高分岗位原始页，关闭 Kilograph、Luppa 与 Europastry 的失效入口，新增 Kraken 的 Spain 远程高级品牌岗并恢复 Supabase 全球远程品牌岗；主表保持 160 条且按 100–1 唯一分数严格降序。
- `AUDIT-2026-08-12-ROUND19.md`：逐条拆穿 MiiN、N26、Airtool、NSN 与 Revolut 的新鲜搜索缓存，把 Europastry 放入待找回原始入口队列；可信主表保持 160 条，不用失效链接虚增数量。
- `AUDIT-2026-08-12-ROUND18.md`：新增 HP 官方 Workday 与 PS21Barna 原始详情两条 Barcelona 备选，确认 DDB、Lateral Thinking 仍可申请，并把 HAAN 的新鲜搜索缓存保留为已关闭历史；主表更新为 160 条。
- `AUDIT-2026-08-12-ROUND17.md`：纠正 D&M 与 Codeway 搜索缓存状态，把新发现的 El Prat 印前生产岗隔离到主排名之外，并确认当轮主表保持 158 条可信机会。
- `AUDIT-2026-08-12-ROUND16.md`：新增 Luppa 与 Newlink、恢复 The Colour Monster 为待确认，并逐条记录本轮关闭/无新增结论后的 158 条现行总账。
- `AUDIT-2026-08-12-ROUND15.md`：纠正 MANGO 与 BRUTALIA 地点、恢复 Grupo RV、新增 Andilana，并隔离非传统 AI 项目池后的 155 条历史总账。
- `AUDIT-2026-08-12-ROUND14.md`：新增 Xapo、Kraken、Omnicom PowerPoint、Finary，恢复 DORTOKA，并关闭 Sanofi 与 Stanley 后的 151 条历史总账。
- `AUDIT-2026-08-12-ROUND13.md`：上一轮新增与原始详情页复核记录。
- `AUDIT-2026-08-12-ROUND12.md`：18 条待核验逐条复查、新增机会、关闭迁移与 142 条历史总账。
- `AUDIT-2026-08-12-RECOVERY.md`：研究库追回、交叉去重后的 148 个机会历史总账、状态修正和统一排序说明。
- `AUDIT-2026-08-12-CONTINUED.md`：上一版 52 个机会的历史快照。
- `AUDIT-2026-08-12.md`：上一版 48 个机会的历史快照，保留用于追踪变化。
- `app.js`：筛选、状态判断、去重、排序和卡片渲染。
- `data.js`：保留的完整公开机会语料。
- `scripts/inspect-qualified-opportunities.js`：输出当前主表或指定机会的审计报告。
- `scripts/validate-site.js`：验证数据、排序、状态、入口与页面结构。

## 本地验证

```powershell
node --check .\app.js
node .\scripts\validate-site.js
node .\scripts\inspect-qualified-opportunities.js mine
```

网站由 GitHub Pages 静态托管，不依赖会休眠的应用服务器。
