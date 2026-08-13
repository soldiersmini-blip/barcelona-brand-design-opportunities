# 2026-08-13 个人条件评分复核

本轮不是按公司名气或职位本身的“专业含金量”评分，而是按当前用户是否真的适合推进来评分。

## 固定优先级

1. 中文能够直接工作、联系或核验的机会。
2. Barcelona 本地；其次是明确允许 Spain / Europe remote 的机会。
3. 品牌视觉、VI、品牌指南、视觉系统与数字品牌延展；其次是 Motion、数字设计、品牌内容和一般市场物料。
4. 有当前原始详情、官方 ATS、明确申请入口或可核验直接联系人。
5. 正式岗位优于实习、低薪、匿名雇主和只剩搜索缓存的线索。

英语和西班牙语都是用户当前的实际门槛，不能再被品牌相关度、公司名气或高薪抵消。基础职业与地点得分计算后，工作语言未证实乘以 40%，明确英语路径乘以 28%，西语高概率路径乘以 24%，西语硬门槛和英语 + 加泰语等复合外语路径乘以 18%。中文和可先中文核验的路径不做外语折损。明确外语要求不再比“语言未写明”的岗位得分更高。

资历是独立可行性门槛：开放经验与初级岗位加 3 分，中级不调整，年限不明减 2 分，高级减 8 分，负责人 / Head / Lead 减 14 分。该调整在语言系数之后执行，避免“10–15 年负责人岗”的资历惩罚被外语系数稀释。真实实习岗另有一次语言系数后的 8 分降权；仅仅写到“也接受实习经历”的正式岗位不再误判为实习。

## 本轮状态纠正

- CrowdStrike 记录 5106 与当前主卡 930836 都指向 Workday requisition `R29235`。保留 930836 为现役主卡；5106 转入重复历史，避免同一岗位占两个名额。
- Heroes / Boba 记录 156 的旧 Graphic Designer 详情仍存在于搜索缓存，但 Heroes 当前官方职位板只列出 5 个其他岗位，已不再列该职位。记录 156 转入关闭历史，保留原职责与旧入口，不再参与当前排名。
- bsport 记录 209 的同一官方 requisition `7207663` 曾在 2026-08-12 返回 410，但 2026-08-13 已恢复完整 JD、`Join us` 和申请表，因此恢复原卡，不制造重复记录。
- Skyscanner 记录 930812 的官方 Design 分类现在显示 0 个岗位，当前职位板也不再列 Senior Visual Designer；转入关闭历史，旧链接和职责继续保留。
- Ogilvy、King、PepsiCo、Linear、Velvet Caviar、devicenow、SLAPS、Stripe Motion、CNT 等页面虽然使用英语，但正文没有明确语言条款。本轮统一改为“工作语言未证实”，不再把页面语言当作英语能力要求的证据。
- Qoria / Qustodio 记录 314 仍在官方 Rippling 职位板，且完整 JD 明确要求 Fluent English；继续保留为英语高级备选，不重复建卡。
- Agilent、Domingo Studio 等 15 张当前或历史卡补齐中文 / 西语岗位标题；Hays 正式岗不再因为正文提到“相关实习经历”而误受实习扣分。
- 第 26–60 名继续使用同一证据规则：LABHOUSE、Ogilvy Social、Revolut、Carati、CBA、Supabase、Xapo、Pocket Worlds、Storisell、Netenders、IKIGAI、Codeway、Molin、Refokus 与 reboot 改为“工作语言未证实”；明确写出英语要求的 Preply、Glovo、Dragons、Omnicom、JUNGLE、Zurich、Lodgify、MANGO、EuroLeague 与 Publicis 保持英语路径。
- 第 61–100 名继续复核：Synthesia、SIERRA、Bakken、THRU、Revolut Motion、turbopuffer、SLAPS、COCUNAT 与 DuckDuckGo 改为“工作语言未证实”；FunPlus Graphic Design Intern 已从官方板移除，bsport `7207663` 再次返回 410 且无同名新编号，两张都转入历史。
- 第 101–140 名继续复核：PriorityChef、The Builder Studios、Designity、DualEntry、ZOE、Codeway、Fantasy、Co-Star 与 Together 的原始正文没有明确英语条款，统一改为“工作语言未证实”；Bending Spoons、Injective、Circle、Hungry Minds 与 GameHouse 因正文或投递步骤明确要求英语，继续按英语路径降权。
- Ametller 包装岗的旧 Workday `JR106376` 已失效，但官方 Workday API 在 2026-08-13 查到 2026-07-24 发布的新 `JR107430`。原卡恢复可投并改用新入口；由于完整 JD 为加泰语、本地供应商协作且要求 5 年以上，只按“西语高概率 + 高级”低分保留。
- 第 141–198 名完成逐原始页语言与状态复核：ALEA、Playson、Jobgether、JustMarkets、Vista 等不再因英文页面被标为英语；Buzz、SALVI、Space Go、Fuego、Raventós、IEBS、JIRADA、Rocket 与 EQUIPO SINGULAR 等从“西语硬门槛”改为“本地西语高概率”；VML、Hamlet 与 McCann 的英语 + 加泰语复合门槛单独标出。
- LinkedIn VML Art Director `4441238571` 与官方 `8634604002` 是同一 requisition，镜像转入历史；Montgat InfoJobs 当前列表已移除原平面设计岗，原卡也转入历史。Gestión Hostelocio 则找回精确详情 `d70f73ce2843f2842d228801f65a9e`，不再使用地区搜索页代替职位入口。

## 数量守恒

- 完整去重来源库：1,254 条。
- 已审核席位：204 条，全部保留。
- 当前可用 / 待核验主表：196 条。
- 历史席位：8 条，包括两个精确重复 / 镜像席位，以及六个已从当前招聘面撤下或无法继续证实开放的旧岗位。
- 当前地点：Barcelona / 周边 147 条，Spain / Europe / worldwide remote 49 条。
- 当前状态：182 条 live，14 条 verify。
- 当前语言：中文核验 2、基础西语 1、英语 64、工作语言未证实 54、西语高概率 21、西语硬门槛 49、其他复合外语 5。

## 排序验证

当前导出和网站主表均使用同一 `personalMatchScore`，并已经通过逐项非递增检查。前三名为中文或中文社区路径；外语岗位仅作为降权后的备选继续保留，不会因职位名气、薪资、视觉相关度或高级头衔越过语言与资历门槛。全部 204 张审核卡也通过了非空岗位标题验证。
