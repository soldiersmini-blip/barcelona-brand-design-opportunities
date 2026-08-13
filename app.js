const allData = Array.isArray(window.JOB_OPPORTUNITIES) ? window.JOB_OPPORTUNITIES : [];

// The generated snapshot reused id 1310 for two unrelated vacancies. Give the
// Familia Torres record a stable canonical id before any ranking or status
// logic runs, otherwise selecting one vacancy would accidentally select both.
const familiaTorresIdCollision = allData.find(
  (item) => Number(item.id) === 1310 && /familia\s+torres/i.test(`${item.source || ""} ${item.opportunity || ""}`),
);
if (familiaTorresIdCollision) familiaTorresIdCollision.id = 930871;

// Current opportunities discovered after the last generated data snapshot.
// These are deliberately small, hand-audited additions; the historical source
// corpus stays untouched in data.js.
[
  {
    id: 930813,
    section: "2026-08-12 manual official-detail audit",
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Junior Graphic Designer",
    fit: "Barcelona hybrid; permanent full-time; 1–2 years; brand guidelines, visual systems, social and digital assets",
    location: "Barcelona, Spain; permanent; full-time; hybrid",
    status: "Official Factorial detail opened on 2026-08-12. It shows Apply now and a current permanent, full-time, hybrid Barcelona vacancy. English is required; Spanish is preferred rather than mandatory.",
    contact: "Official detail and application: https://dragons-group.factorialhr.com/job_posting/junior-graphic-designer-317499",
    analysis: "Best current junior-level local match. Prioritise portfolio cases showing brand-guideline application, typography, layout, multi-format digital assets and careful production.",
    score: 97,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Junior graphic / brand implementation",
    sourceGroup: "other",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://dragons-group.factorialhr.com/job_posting/junior-graphic-designer-317499"],
  },
  {
    id: 930812,
    section: "2026-08-12 current original-detail discovery",
    source: "Skyscanner / current LinkedIn employer detail",
    opportunity: "Senior Visual Designer",
    fit: "Barcelona full-time visual-design opening; seniority is a stretch and full requirements must be confirmed on the employer application",
    location: "Barcelona, Spain; full-time; work mode and contract terms to confirm",
    status: "Current LinkedIn employer detail opened on 2026-08-12 and visibly shows Senior Visual Designer, Barcelona, full-time and Solicitar. The readable public view did not expose the full description, so language, experience, salary and office rhythm remain verification gates.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4451912620",
    analysis: "Keep as a real but senior Barcelona stretch role. Read the external employer form before investing in a tailored application.",
    score: 83,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Senior visual design",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://www.linkedin.com/jobs/view/4451912620"],
  },
  {
    id: 930815,
    section: "2026-08-12 continued official-detail audit",
    source: "SIDN Digital Thinking / official Factorial ATS",
    opportunity: "Graphic Designer",
    fit: "Spain full remote; Barcelona office; 3–5 years; information design, digital campaigns, social assets and executive decks",
    location: "Spain full remote; Barcelona office available; permanent; full-time",
    status: "Official Factorial detail opened on 2026-08-12. It shows a current indefinite, full-time, remote vacancy and an active application control. The Spanish-language brief requires 3–5 years and a portfolio showing information design and complex visual assets.",
    contact: "Official detail and application: https://sidn.factorialhr.com/job_posting/graphic-designer-285667",
    analysis: "A real Spain-remote graphic-design opportunity with a Barcelona office, but it is Spanish-first and closer to digital marketing, information design and pitch decks than pure VI ownership. Apply only with workable professional Spanish and relevant campaign, infographic and presentation cases.",
    score: 71,
    tier: "C",
    locationTag: "Spain remote / Barcelona office",
    typeTag: "Graphic design / information design / digital marketing",
    sourceGroup: "other",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://sidn.factorialhr.com/job_posting/graphic-designer-285667"],
  },
  {
    id: 930814,
    section: "2026-08-12 current original-detail discovery",
    source: "CNT Management Consulting / current LinkedIn employer detail",
    opportunity: "Senior Brand Designer & Creative Content Manager",
    fit: "Barcelona hybrid full-time brand/content opening; senior scope and unreadable full requirements make it a lower-priority stretch",
    location: "Barcelona, Spain; hybrid; full-time",
    status: "Current LinkedIn employer detail opened on 2026-08-12. It visibly shows Easy Apply and that applications are actively reviewed, but the signed-in readable view did not expose the complete description. Treat language, seniority, salary and exact scope as verification gates.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4445748221",
    analysis: "A real current Barcelona application route, but not enough evidence to rank above fully readable roles. Open the form and verify the complete JD first.",
    score: 50,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Senior brand / creative content",
    sourceGroup: "linkedin",
    postedAt: "2026-07-29",
    freshnessTag: "month",
    freshnessAgeDays: 14,
    links: ["https://www.linkedin.com/jobs/view/4445748221"],
  },
  {
    id: 930816,
    section: "2026-08-12 current original-detail discovery",
    source: "Brownie / current LinkedIn employer detail",
    opportunity: "Junior Graphic Designer",
    fit: "Barcelona onsite full-time; 2+ years; 360 campaigns, retail branding, packaging, web, email, ecommerce and motion",
    location: "Barcelona, Spain; onsite; full-time",
    status: "Current signed-in LinkedIn employer detail opened on 2026-08-12. It shows a verified job, Easy Apply, active application review and a posting one week old. Advanced English is explicit; Spanish is not formally listed but the public brief and local team are Spanish-first.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4445887935",
    analysis: "A strong current local brand-extension role. Use 360 campaign, packaging, store, ecommerce, email and motion cases; confirm daily Spanish, salary and onsite schedule before accepting.",
    score: 96,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Junior graphic / 360 brand extension",
    sourceGroup: "linkedin",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://www.linkedin.com/jobs/view/4445887935"],
  },
  {
    id: 930817,
    section: "2026-08-12 current original-detail discovery",
    source: "Eat Nudes / current LinkedIn employer detail",
    opportunity: "Graphic Designer — packaging, signage and print",
    fit: "Barcelona or nearby; urgent project contract; packaging, menus, signage, labels, stickers and vector artwork",
    location: "Barcelona, Spain; project contract; work mode not published",
    status: "Current original LinkedIn detail opened on 2026-08-12 and still exposes the full brief plus a direct portfolio email. It explicitly asks for a Barcelona-based graphic designer rather than a social-media manager or content creator.",
    contact: "Original detail: https://es.linkedin.com/jobs/view/dise%C3%B1ador-gr%C3%A1fico-at-eat-nudes-4446052477 ; direct portfolio email: pr@eatnudes.com",
    analysis: "A real urgent production-design route, but not a salaried VI-system role. Confirm project length, hours, fee, invoicing, ownership and onsite requirements before doing any test or artwork.",
    score: 82,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Packaging / signage / print production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-07",
    freshnessTag: "week",
    freshnessAgeDays: 5,
    links: [
      "https://es.linkedin.com/jobs/view/dise%C3%B1ador-gr%C3%A1fico-at-eat-nudes-4446052477",
      "mailto:pr@eatnudes.com",
    ],
  },
  {
    id: 930818,
    section: "2026-08-12 current official-detail discovery",
    source: "Infor / official careers",
    opportunity: "Multi-Channel Brand Design Intern",
    fit: "Barcelona hybrid full-time internship; English; brand guidelines, print/PDF, presentations, web-ready assets and light video",
    location: "Barcelona, Spain; hybrid; full-time internship",
    status: "Official Infor careers detail opened on 2026-08-12. It shows Apply Now, Barcelona, Hybrid, Full Time and requisition 49130. Good English is explicit; the role accepts candidates who have or are pursuing a relevant degree.",
    contact: "Official detail/application: https://careers.infor.com/postings/c306345c-2d35-4690-ac99-65d2bb4c7310",
    analysis: "A strong English-friendly entry route for applying brand systems across proposals, presentations, web and video. Confirm internship eligibility, pay, duration and whether a university agreement is required.",
    score: 88,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand design internship / multi-channel production",
    sourceGroup: "other",
    postedAt: "2026-07-29",
    freshnessTag: "month",
    freshnessAgeDays: 14,
    links: [
      "https://careers.infor.com/postings/c306345c-2d35-4690-ac99-65d2bb4c7310",
      "https://www.linkedin.com/jobs/view/4433102453",
    ],
  },
  {
    id: 930819,
    section: "2026-08-12 current original-detail discovery",
    source: "AC Marca / current LinkedIn employer detail",
    opportunity: "Diseñador/a Gráfico — proyecto temporal",
    fit: "Hospitalet de Llobregat onsite; one-year temporary project; brand-book rollout, international packaging, final artwork and mockups",
    location: "Hospitalet de Llobregat, Barcelona; onsite; one-year temporary contract",
    status: "Current signed-in LinkedIn employer detail opened on 2026-08-12. It shows a verified job, Easy Apply, publication six days earlier and a one-year temporary international project. English or Portuguese is valued rather than required.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4448018251",
    analysis: "A concrete packaging and brand-implementation opportunity, but temporary and production-heavy. Apply with packaging systems, final artwork, colour proofing, international adaptation and product mockups; confirm salary and daily language.",
    score: 86,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Packaging / brand-book rollout / final artwork",
    sourceGroup: "linkedin",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 6,
    links: ["https://www.linkedin.com/jobs/view/4448018251"],
  },
  {
    id: 930820,
    section: "2026-08-12 current official-detail discovery",
    source: "Siemens Digital Industries Software / official careers",
    opportunity: "UI / Visual Designer",
    fit: "Barcelona hybrid; product visual systems, 2D/3D icons, pictograms and interface artwork; advanced English",
    location: "Barcelona, Spain; hybrid; full-time; other European locations also listed",
    status: "Official Siemens careers detail 516087 was opened on 2026-08-12 and exposes the current application route. The role creates polished 2D/3D icons, pictograms, glyphs and UI artwork inside an established visual system. Advanced English is required; the Spain salary range is EUR42,100–67,100.",
    contact: "Official detail/application: https://jobs.siemens.com/externaljobs/JobDetail/516087 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4451904764",
    analysis: "A real English-friendly Barcelona visual-design opportunity with transparent pay. It is product UI and technical iconography rather than brand identity ownership, so keep it below direct brand/VI roles and apply only with precise icon-system, Figma, Adobe and 3D work.",
    score: 64,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "UI visual systems / iconography / 2D-3D artwork",
    sourceGroup: "other",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: [
      "https://jobs.siemens.com/externaljobs/JobDetail/516087",
      "https://www.linkedin.com/jobs/view/4451904764",
    ],
  },
  {
    id: 930821,
    section: "2026-08-12 current original-detail discovery",
    source: "Eurostars Hotel Company / Hospitaliti / current LinkedIn employer detail",
    opportunity: "Técnico/a Junior de Señalética y Producción Gráfica",
    fit: "Barcelona onsite junior route; hotel signage, corporate-image standards, final artwork, photomontage and production",
    location: "Barcelona, Spain; onsite; full-time; occasional hotel and construction-site travel",
    status: "Current LinkedIn employer detail 4451125314 was opened on 2026-08-12 and shows an external application control. The full brief covers hotel signage design and adaptation, final artwork, photomontages, signage manuals, technical drawings, suppliers, installation follow-up and corporate-image quality control. The external route currently resolves through an application aggregator rather than a Eurostars ATS.",
    contact: "Current original detail: https://www.linkedin.com/jobs/view/4451125314 ; external application route: https://easyapply.jobs/r/pIQ1T8p27140Zp4flZqN",
    analysis: "A relevant junior physical-VI and signage-extension opportunity, but the Spanish working environment and non-employer application endpoint are material gates. Confirm the employer, contract, salary, language and data recipient before uploading documents.",
    score: 61,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Signage / corporate image / final artwork",
    sourceGroup: "linkedin",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://www.linkedin.com/jobs/view/4451125314",
      "https://easyapply.jobs/r/pIQ1T8p27140Zp4flZqN",
    ],
  },
  {
    id: 930822,
    section: "2026-08-12 current official-detail discovery",
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Junior Art Director",
    fit: "Barcelona hybrid permanent full-time; 1–3 years; English; social-first visual concepts, integrated campaigns and brand guidelines",
    location: "Barcelona, Spain; hybrid; permanent; full-time",
    status: "Official Factorial detail 317709 was opened on 2026-08-12. It shows Apply now, Permanent, Full time and Hybrid Barcelona. The full brief asks for 1–3 years, Adobe Creative Suite, Figma and fluent English; other languages are only a plus.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/junior-art-director-317709 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4450107945",
    analysis: "A strong early-career local English route. Most work is organic social and short-form platform creative, with smaller digital campaigns and support on integrated/experiential pitches, so rank it below direct brand-system roles but above Spanish-gated junior art-direction alternatives.",
    score: 75,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Junior art direction / social-first brand campaigns",
    sourceGroup: "other",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/junior-art-director-317709",
      "https://www.linkedin.com/jobs/view/4450107945",
    ],
  },
  {
    id: 930823,
    section: "2026-08-12 current official-detail discovery",
    source: "Factorial / official Factorial ATS",
    opportunity: "Marketing Paid Motion Designer — Global Markets",
    fit: "Barcelona permanent full-time; fluent English; paid-media motion, brand consistency, AI-native iteration and transparent salary",
    location: "Barcelona, Spain; full-time; permanent; workplace listed as Barcelona",
    status: "Official Factorial detail 316734 was opened on 2026-08-12 and shows Apply now, Permanent, Full time, Barcelona and EUR30,000–35,000. The role produces high-volume motion ads for Meta, TikTok, YouTube and display, translates brand essence into visual assets and uses performance data and AI tools to iterate.",
    contact: "Official detail/application: https://careers.factorialhr.com/job_posting/marketing-paid-motion-designer-global-markets-316734 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4451516366",
    analysis: "This is a new global-markets requisition, not the closed Spanish-market role. It is performance-motion first rather than core VI, but the English-only route, real salary and Barcelona contract make it a credible secondary opportunity.",
    score: 63,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Paid-media motion / performance creative / brand consistency",
    sourceGroup: "other",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://careers.factorialhr.com/job_posting/marketing-paid-motion-designer-global-markets-316734",
      "https://www.linkedin.com/jobs/view/4451516366",
    ],
  },
  {
    id: 930824,
    section: "2026-08-12 current official-detail discovery",
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Mid Graphic Designer",
    fit: "Barcelona hybrid permanent role; premium skincare, wellness and lifestyle brand campaigns; Spanish and English required",
    location: "Barcelona, Spain; hybrid; permanent; full-time",
    status: "Official Factorial detail 301879 was opened on 2026-08-12 and shows Apply now, Permanent, Full time and Hybrid Barcelona. The brief requires 4–8+ years, advanced retouching/compositing, social and digital campaign systems, brand-guideline consistency, AI image tools, fluent Spanish and fluent English.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/mid-graphic-designer-301879 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4451046673",
    analysis: "A real local brand-extension role, but the Spanish requirement and 4–8+ year experience range are material gates. Apply only with premium consumer-brand, campaign toolkit, retouching, compositing and AI-assisted production cases.",
    score: 74,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Mid graphic / premium brand campaigns / social systems",
    sourceGroup: "other",
    postedAt: "2026-08-08",
    freshnessTag: "week",
    freshnessAgeDays: 4,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/mid-graphic-designer-301879",
      "https://dragons-group.factorialhr.com/apply/mid-graphic-designer-301879",
      "https://www.linkedin.com/jobs/view/4451046673",
    ],
  },
  {
    id: 930825,
    section: "2026-08-12 current official-detail discovery",
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Video Editor & Motion Creative",
    fit: "Barcelona hybrid permanent role; branded video, social-first editing and motion for skincare, wellness and lifestyle clients; English required",
    location: "Barcelona, Spain; hybrid; permanent; full-time",
    status: "Official Factorial detail 308034 was opened on 2026-08-12 and shows Apply now, Permanent, Full time and Hybrid Barcelona. The brief requires 3–5 years, Premiere Pro, After Effects and strong English; other languages are only a plus.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/video-editor-motion-creative-308034 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4448084343",
    analysis: "A credible English-friendly local motion route. Video editing is the primary craft and motion is complementary, so keep it below direct VI and graphic-system roles; apply with branded short-form storytelling, campaign edits and restrained motion systems.",
    score: 70,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand video / social motion / campaign storytelling",
    sourceGroup: "other",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 6,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/video-editor-motion-creative-308034",
      "https://dragons-group.factorialhr.com/apply/video-editor-motion-creative-308034",
      "https://www.linkedin.com/jobs/view/4448084343",
    ],
  },
  {
    id: 930826,
    section: "2026-08-12 current original-detail discovery",
    source: "Carati Studio / current LinkedIn employer detail",
    opportunity: "Freelance Graphic / Print Designer — Fashion",
    fit: "Barcelona partly remote freelance collaboration; fashion prints, placement graphics, illustration, typography and production files",
    location: "Barcelona, Spain; partly remote; partly onsite in Sant Antoni; freelance collaboration",
    status: "Current original LinkedIn employer detail 4449873353 was opened on 2026-08-12. It shows an active Barcelona Easy Apply route and a direct portfolio email. Barcelona residence, fashion graphic/print experience, Photoshop and Illustrator are essential; Spanish is a plus rather than a stated requirement.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4449873353 ; direct portfolio email: nita@caratistudio.com",
    analysis: "A genuine local freelance branch rather than a salaried VI role. Confirm the client entity, project frequency, day rate, invoicing, ownership, onsite rhythm and whether the Zara-team workload is ongoing before accepting a test.",
    score: 67,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Freelance fashion graphics / prints / production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://www.linkedin.com/jobs/view/4449873353", "mailto:nita@caratistudio.com"],
  },
  {
    id: 930827,
    section: "2026-08-12 current official-detail discovery",
    source: "Zurich Insurance / official careers",
    opportunity: "Creative Specialist",
    fit: "Barcelona full-time social-content creative role; platform-native concepts, short-form video and branded visual proposals; high English",
    location: "Barcelona, Spain; full-time; work mode not published",
    status: "Official Zurich requisition 136070 was opened on 2026-08-12 and shows Apply now and ES - Barcelona. The role asks for around 3–4 years, high English, TikTok/Instagram/Reddit concepts, storyboards, scripts, copy, visual proposals and short-form execution with CapCut, Canva or Adobe.",
    contact: "Official detail/application: https://www.careers.zurich.com/job/Barcelona-Creative-Specialist/1368923457/ ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4450330907",
    analysis: "A formal English-friendly Barcelona creative route, but social content is the centre of gravity rather than brand identity. Apply only if the portfolio can connect platform-native creative to consistent brand tone and measurable campaign outcomes.",
    score: 62,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Social creative / short-form video / branded content",
    sourceGroup: "other",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: [
      "https://www.careers.zurich.com/job/Barcelona-Creative-Specialist/1368923457/",
      "https://www.linkedin.com/jobs/view/4450330907",
    ],
  },
  {
    id: 930828,
    section: "2026-08-12 current original-detail discovery",
    source: "VOK DAMS worldwide / current LinkedIn employer detail",
    opportunity: "Senior Graphic Designer — Events & Brand Experiences",
    fit: "Barcelona full-time; visual identities, key visuals, environmental branding, signage and event experiences; Spanish and English required",
    location: "Barcelona, Spain; full-time; work mode not published",
    status: "Current original LinkedIn employer detail 4440968410 was opened on 2026-08-12 and shows a new Barcelona vacancy. The full brief requires at least five years, Adobe Creative Suite, After Effects/motion, corporate-identity systems, fluent Spanish and fluent English.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/4440968410",
    analysis: "Strong physical-VI and experiential-brand scope, but seniority and bilingual Spanish/English are hard gates. Apply only with event identity, signage, wayfinding, stage/environment graphics, presentation and production-supervision cases.",
    score: 64,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Event identity / environmental branding / signage",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/4440968410"],
  },
  {
    id: 930829,
    section: "2026-08-12 current original-detail discovery",
    source: "Raventós Codorníu / current LinkedIn employer detail",
    opportunity: "Graphic Packaging Design Trainee",
    fit: "Sant Sadurní d'Anoia hybrid internship; packaging, new brands, offline campaigns, final artwork, prepress and renders",
    location: "Sant Sadurní d'Anoia, Barcelona province; hybrid 3 office / 2 remote; internship",
    status: "Current original LinkedIn employer detail 4440107992 was opened on 2026-08-12 and shows Solicitar, a publication one day earlier and an internship. The full Spanish brief covers packaging, new-brand development, offline campaign pieces, multi-market adaptation, final artwork, prepress and renders.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/graphic-packaging-design-trainee-at-ravent%C3%B3s-codorn%C3%ADu-4440107992",
    analysis: "Directionally strong for packaging and brand identity, but it is a Spanish-first trainee route outside Barcelona city. Confirm internship eligibility, pay, duration, transport, schedule and whether a university agreement is mandatory before applying.",
    score: 60,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Packaging / brand development / prepress internship",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/graphic-packaging-design-trainee-at-ravent%C3%B3s-codorn%C3%ADu-4440107992"],
  },
  {
    id: 930831,
    section: "2026-08-12 current original-detail discovery",
    source: "INCAPTO / current LinkedIn employer detail",
    opportunity: "Graphic Designer — Packaging & Product",
    fit: "Barcelona hybrid full-time; packaging systems, labels, boxes, print production, PDP graphics and brand consistency",
    location: "Barcelona, Spain; hybrid 3 office / 2 remote; full-time",
    status: "Current LinkedIn employer detail 4448984689 was opened and read on 2026-08-12. It shows active review and Easy Apply. The complete brief covers coffee, machine and accessory packaging, bags, labels, sleeves, boxes, inserts, dielines, specifications, printers and suppliers, regulatory iconography, manuals and product-page infographics.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4448984689/",
    analysis: "A solid local packaging and brand-implementation match. The role explicitly requires 2–4 years, a portfolio, Adobe, print/final-art/vendor knowledge, and fluent Spanish plus English. Apply only with packaging systems, final artwork, production handoff and product-communication cases.",
    score: 70,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Packaging system / product graphics / production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://www.linkedin.com/jobs/view/4448984689/"],
  },
  {
    id: 930832,
    section: "2026-08-12 current original-detail discovery",
    source: "Exoticca / current LinkedIn employer detail",
    opportunity: "Visual Designer — Trade Marketing",
    fit: "Barcelona onsite permanent full-time; B2B visual collateral, co-branding, brochures, catalogs, banners, video and brand consistency",
    location: "Barcelona city; onsite; permanent full-time",
    status: "Current LinkedIn employer detail 4448170319 was opened and read on 2026-08-12. It shows an active Barcelona vacancy with Easy Apply. The full brief covers flyers, print advertisements, brochures, rollups, digital catalogs, promotional video, animated banners, presentations, partner co-branding guidelines and brand-quality control.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4448170319/",
    analysis: "One of this round's best immediately relevant Barcelona routes: local, permanent and explicitly fluent-English friendly, with no Spanish requirement surfaced. It is trade-marketing brand extension rather than pure identity creation, so the portfolio should lead with multi-format systems, co-branding and print/digital campaign consistency.",
    score: 90,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Visual design / trade marketing / co-branding",
    sourceGroup: "linkedin",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://www.linkedin.com/jobs/view/4448170319/"],
  },
  {
    id: 930833,
    section: "2026-08-12 current original-detail discovery",
    source: "Wecolors / current LinkedIn employer detail",
    opportunity: "Diseñador/a gráfico/a especializado/a en Producto",
    fit: "Vilassar de Dalt hybrid full-time; cosmetics packaging, displays, final artwork, supplier handoff and visual-brand standards",
    location: "Vilassar de Dalt, Barcelona province; hybrid with one remote day weekly; full-time; own car and nearby residence requested",
    status: "Current LinkedIn employer detail 4448188871 was opened and read on 2026-08-12. It shows active review and Easy Apply. The full Spanish brief covers cosmetics boxes, cards, sleeves, 2D/3D displays, preliminary and final artwork, suppliers and printers, specifications, codes, finishes, visual-brand standards and corporate/digital support.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4448188871/",
    analysis: "A genuine Barcelona-province product and packaging role, but less immediately accessible than a city role. It asks for 3–5 years, Adobe, medium-high English, nearby residence, own transport and a technical design test. The Spanish-language workplace is a practical concern even though Spanish is not listed as a formal level requirement.",
    score: 62,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Cosmetics packaging / final art / visual standards",
    sourceGroup: "linkedin",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://www.linkedin.com/jobs/view/4448188871/"],
  },
  {
    id: 930834,
    section: "2026-08-12 official ATS discovery",
    source: "Linear / official Ashby careers",
    opportunity: "Production Designer (Europe)",
    fit: "Europe remote full-time; web, brand and marketing production across campaigns, launches, decks and landing pages",
    location: "Europe remote; Spain/Barcelona residency compatible subject to local contract confirmation",
    status: "Linear's official Ashby board and Europe-specific requisition were opened on 2026-08-12. The page currently shows Apply for this Job, Full time and Remote / Europe. It asks for 2+ years and covers landing pages, ad campaigns, sales decks, launch materials, visual language, UI, motion and interaction.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/Linear/5b9997fd-7507-4437-8fd7-14178c99ab5d ; official board: https://jobs.ashbyhq.com/Linear",
    analysis: "A strong English-first Europe-remote brand-production route. It is broader production design rather than a pure VI ownership role, but the visual-system, campaign and web overlap is substantial. Confirm Spain payroll or contractor terms, compensation and timezone expectations before interview.",
    score: 88,
    tier: "A",
    locationTag: "Europe remote",
    typeTag: "Brand production / web / campaign systems",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://jobs.ashbyhq.com/Linear/5b9997fd-7507-4437-8fd7-14178c99ab5d",
      "https://jobs.ashbyhq.com/Linear",
    ],
  },
  {
    id: 930835,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "西华论坛 + 华信网 / Barcelona 本地中文招聘",
    opportunity: "广告店全职平面设计师",
    fit: "Barcelona local Chinese-contact lead; advertising-shop graphic production, Illustrator and work permit required",
    location: "Barcelona; full-time; exact shop identity and address not disclosed",
    status: "The same Barcelona advertising-shop recruiter and contact were found in a newer Xihua repost dated 2026-02-05 and again in Huaxin's 2026-07-22 Barcelona listings. The Xihua detail asks for an experienced full-time designer who can use Illustrator, already holds a work permit and will be fully insured; the earlier repost states EUR 1,410-1,600 net. The employer name, exact address, contract and current vacancy still need direct confirmation.",
    contact: "Newest readable Xihua repost: https://xihua.es/forum.php?mod=viewthread&tid=637173 ; Huaxin listing index dated 2026-07-22: https://infohuaxin.com/showclass.asp?Page=1&class1=0&class2=221&dq=12 ; contact 陈: +34 644 055 418 ; WeChat A644055418",
    analysis: "This is a repeated Barcelona Chinese-channel lead rather than a one-off stale post, but the employer remains anonymous and there is no official application form. Keep it in verification: first confirm the shop identity, exact workplace, whether the vacancy is still open, contract, schedule, salary and who receives personal documents.",
    score: 20,
    tier: "D",
    locationTag: "Barcelona area",
    typeTag: "Advertising print / graphic production",
    sourceGroup: "chinese",
    postedAt: "2026-07-22",
    freshnessTag: "month",
    freshnessAgeDays: 21,
    links: [
      "https://xihua.es/forum.php?mod=viewthread&tid=637173",
      "https://infohuaxin.com/showclass.asp?Page=1&class1=0&class2=221&dq=12",
      "tel:+34644055418",
    ],
  },
  {
    id: 930836,
    section: "2026-08-12 official ATS discovery",
    source: "CrowdStrike / official Workday ATS",
    opportunity: "Creative Content Designer (Remote)",
    fit: "Barcelona remote full-time; visual storytelling, presentations, design systems, video, motion and brand consistency",
    location: "Spain - Barcelona; remote; full-time",
    status: "CrowdStrike official Workday requisition R29235 was opened and read in full on 2026-08-12. It shows Apply, Spain - Barcelona, Full time and Posted 6 Days Ago. The role asks for 2+ years, advanced PowerPoint/Google Slides, Adobe/Figma/Canva, video editing, English and global collaboration.",
    contact: "Official detail/application: https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Spain---Barcelona/Content-Developer--Sales-Enablement--Remote-_R29235 ; LinkedIn employer detail: https://www.linkedin.com/jobs/view/4439209874/",
    analysis: "A current, English-friendly Barcelona remote opportunity with a clean official application route. It is sales-enablement and learning content rather than pure identity design, so the portfolio should lead with presentation systems, information design, reusable templates, brand consistency, short video and motion examples.",
    score: 89,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Creative content / presentation system / motion",
    sourceGroup: "official",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 6,
    links: [
      "https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Spain---Barcelona/Content-Developer--Sales-Enablement--Remote-_R29235",
      "https://www.linkedin.com/jobs/view/4439209874/",
    ],
  },
  {
    id: 930837,
    section: "2026-08-12 current original-detail discovery",
    source: "Velvet Caviar / current LinkedIn employer detail",
    opportunity: "Graphic Designer - eCommerce Fashion Brand",
    fit: "Spain remote full-time; email, social, web, Amazon, motion, photography and e-commerce brand production",
    location: "Spain remote; full-time; collaboration with New York team until 18:00 Monday-Friday",
    status: "The current LinkedIn employer detail 4413468201 was surfaced again on 2026-08-12 with an active application route. It states Spain, 100% remote, EUR 30,000-40,000, 2+ years and a full brief covering email, social, web, Amazon, ads, motion, Pantone, photography, retouching and AI-assisted production.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/graphic-designer-ecommerce-fashion-brand-at-velvet-caviar-4413468201",
    analysis: "A practical English-first Spain-remote e-commerce brand role with transparent pay. It is high-volume marketing production rather than VI strategy, and the application is LinkedIn rather than a company ATS. Confirm Spanish hiring entity, employee/contractor status, paid leave and exact New York overlap before accepting interviews.",
    score: 88,
    tier: "A",
    locationTag: "Spain remote",
    typeTag: "E-commerce brand / digital campaign / motion",
    sourceGroup: "linkedin",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://es.linkedin.com/jobs/view/graphic-designer-ecommerce-fashion-brand-at-velvet-caviar-4413468201"],
  },
  {
    id: 930838,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Senior Graphic Designer (Wellness and Healthcare)",
    fit: "Barcelona hybrid permanent full-time; healthcare campaign systems, digital content, presentations and brand production",
    location: "Barcelona, Spain; hybrid; permanent; full-time",
    status: "Dragons Group's official Factorial detail and application form were opened on 2026-08-12. Both are live and identify Barcelona, permanent, full-time and hybrid. The role covers healthcare and pharma digital content, campaigns, presentations, marketing materials, visual systems, production processes and mentoring a mid-level designer.",
    contact: "Official detail: https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-for-pharma-308053 ; official application: https://dragons-group.factorialhr.com/apply/senior-graphic-designer-wellness-and-healthcare-308053",
    analysis: "A strong local graphic and brand-production match with fluent English, but seniority and regulated healthcare/pharma experience are meaningful gates. Apply only with system-level campaigns, information-heavy layouts, presentations and production QA examples.",
    score: 88,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Healthcare brand / campaign / graphic systems",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-for-pharma-308053",
      "https://dragons-group.factorialhr.com/apply/senior-graphic-designer-wellness-and-healthcare-308053",
    ],
  },
  {
    id: 930839,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "CATORCE / DDB Group / official Greenhouse ATS",
    opportunity: "Visual Designer",
    fit: "Barcelona agency role; branding projects, campaign assets, events, digital activations and presentations",
    location: "Barcelona, Spain; office-days policy; full-time route subject to sponsorship confirmation",
    status: "CATORCE's official Greenhouse requisition 4797510008 was opened on 2026-08-12 and currently shows Apply with a complete application form. The brief asks for 1+ year of agency graphic-design experience and covers branding, campaigns, events, digital activations and presentations under the Head of Design.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/catorce/jobs/4797510008",
    analysis: "One of the best exact Barcelona visual-design matches in this round and relatively accessible by experience. Fluent English and Spanish are explicit hard requirements; Adobe Creative Suite, Figma and Sketch are required, while motion is a plus.",
    score: 93,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Visual design / branding / campaign assets",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://job-boards.greenhouse.io/catorce/jobs/4797510008"],
  },
  {
    id: 930840,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "Zurich Insurance / official careers",
    opportunity: "Creative Strategist",
    fit: "Barcelona social-first creative strategy; content territories, narratives, briefs, concept cards and creative-platform guidelines",
    location: "Barcelona, Spain; employment format and office rhythm to confirm",
    status: "Zurich's official Barcelona requisition was opened on 2026-08-12 and currently exposes Apply now. The role asks for around four years of experience and high English, and focuses on social-first strategy, content territories, narratives, creative briefs, concept cards and platform principles.",
    contact: "Official detail/application: https://www.careers.zurich.com/job/Barcelona-Creative-Strategist/1368922057/",
    analysis: "Useful Barcelona brand-adjacent work, but it is strategy and briefing rather than a hands-on VI or graphic-design execution role. Keep below direct visual-design jobs and apply only if the portfolio demonstrates campaign thinking, social concepts and clear creative frameworks.",
    score: 57,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Creative strategy / social brand platform",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://www.careers.zurich.com/job/Barcelona-Creative-Strategist/1368922057/"],
  },
  {
    id: 930841,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "Lenskart.com / current LinkedIn employer detail",
    opportunity: "Head of Visual Merchandising, Europe",
    fit: "Barcelona onsite; European retail visual system, store identity, signage, windows, guidelines and campaign activations",
    location: "Barcelona, Spain; onsite; full-time",
    status: "Lenskart's current employer detail 4452431400 was opened on 2026-08-12 and showed Easy Apply. It builds the European retail visual system from zero across store openings, layouts, fixtures, lighting, signage, windows, guidelines, SOPs, audits and seasonal campaign activations.",
    contact: "Current employer detail/application: https://www.linkedin.com/jobs/view/4452431400/",
    analysis: "Highly relevant to physical brand systems and retail VI, but this is a head-level role requiring 10-15+ years and at least five years of leadership. Keep as a transparent stretch opportunity rather than ranking it above attainable designer roles.",
    score: 49,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Retail VI / visual merchandising / brand system",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://www.linkedin.com/jobs/view/4452431400/"],
  },
  {
    id: 930842,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "Voodoo / official Ashby ATS",
    opportunity: "Senior Technical UI & Motion Designer",
    fit: "CET remote; UI interaction, technical motion systems, Unity implementation and game-interface production",
    location: "Remote within CET ±3 hours; Spain/Barcelona compatible subject to contract confirmation; full-time",
    status: "Voodoo's official Ashby requisition and application form were opened on 2026-08-12. The form is live and accepts applications. The role asks for 4+ years and covers technical UI motion, Unity implementation, interaction design and reusable motion systems using tools such as After Effects, Spine or Rive.",
    contact: "Official detail: https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/ ; official application: https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/application",
    analysis: "A real English-first Europe-compatible motion opportunity, but it is gaming UI and technical implementation rather than brand identity. Keep in the lower adjacent-motion tier; confirm Spain contract, salary and Unity depth before investing in a tailored application.",
    score: 36,
    tier: "C",
    locationTag: "Europe remote",
    typeTag: "Technical UI / motion system / Unity",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/",
      "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/application",
    ],
  },
  {
    id: 930843,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "EQUIPO SINGULAR / official TalentClue ATS",
    opportunity: "Jóvenes Talentos Diseño Gráfico y Vídeo",
    fit: "Barcelona hybrid morning internship; branding, editorial, digital, social, graphic and basic video production",
    location: "Barcelona, Spain; hybrid; morning internship; school or university agreement required",
    status: "EQUIPO SINGULAR's official TalentClue detail was opened on 2026-08-12 and currently exposes Inscribirme a esta oferta. It targets students or final-year candidates and covers graphic, visual-communication and creative work using Illustrator, Photoshop, Slides, Figma, AI tools and basic Premiere, CapCut or After Effects.",
    contact: "Official detail/application: https://equiposingular.talentclue.com/node/127743936/66909823 ; questions: people@equiposingular.com",
    analysis: "A legitimate local entry route for branding, editorial, digital, social and video practice, but only usable if a school or university can sign the internship agreement. It is mornings only and should rank below standard employment roles.",
    score: 20,
    tier: "D",
    locationTag: "Barcelona area",
    typeTag: "Graphic design / video / internship",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://equiposingular.talentclue.com/node/127743936/66909823", "mailto:people@equiposingular.com"],
  },
  {
    id: 930844,
    section: "2026-08-12 Round 13 original-detail audit",
    source: "Synthesia / official Ashby ATS",
    opportunity: "Senior Brand Designer, Experiential",
    fit: "Europe remote; experiential identity, events, physical-digital touchpoints, screen content and scalable production systems",
    location: "Europe remote; London preferred but other European locations considered; full-time; travel required",
    status: "Synthesia's official Ashby requisition and application form were opened on 2026-08-12. Both are live. The role asks for 6+ years and owns experiential brand work across event identities, physical spaces, digital touchpoints, motion and screen content, production systems and European/US travel.",
    contact: "Official detail: https://jobs.ashbyhq.com/synthesia/75c90455-75c8-44e0-ab38-887120dbb1d0/ ; official application: https://jobs.ashbyhq.com/synthesia/75c90455-75c8-44e0-ab38-887120dbb1d0/application",
    analysis: "A strong pure-brand opportunity that is geographically compatible with Europe, but it is senior, travel-heavy and London/hub preference is explicit. Confirm Spain employment or contractor eligibility before tailoring an experiential portfolio.",
    score: 83,
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Experiential brand / events / motion systems",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://jobs.ashbyhq.com/synthesia/75c90455-75c8-44e0-ab38-887120dbb1d0/",
      "https://jobs.ashbyhq.com/synthesia/75c90455-75c8-44e0-ab38-887120dbb1d0/application",
    ],
  },
  {
    id: 930845,
    section: "2026-08-12 Round 14 original-detail audit",
    source: "Omnicom Health / Remedy Edge official Greenhouse ATS",
    opportunity: "Freelance PowerPoint Specialist",
    fit: "Barcelona hybrid freelance presentation-design role; visual storytelling, information hierarchy, templates and visual standards",
    location: "Barcelona, Spain; hybrid three days per week in the office; freelance; Spain work authorisation required without sponsorship",
    status: "Official Greenhouse requisition 5233982008 was opened and read in full on 2026-08-12. It shows Apply for this job, a complete application form and Submit application. The role asks for at least two years of advanced PowerPoint work, a portfolio plus a PowerPoint sample, working English and three office days per week. The page does not expose a publication date.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/omnicomhealth/jobs/5233982008",
    analysis: "A genuine local visual-production route, especially for presentation systems and complex information design, but not a core VI role. Apply only with polished deck systems, visual storytelling and reusable templates; confirm day rate, project duration, payment terms and expected Spanish usage.",
    score: 70,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Presentation design / visual storytelling / freelance",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://job-boards.greenhouse.io/omnicomhealth/jobs/5233982008"],
  },
  {
    id: 930846,
    section: "2026-08-12 Round 14 original-detail audit",
    source: "Kraken / Breakout Prop official Ashby ATS",
    opportunity: "Web and Brand Designer",
    fit: "Spain remote full-time; web, landing pages, campaigns, social and scalable brand guidelines, components and AI design systems",
    location: "Remote; Spain is explicitly included in the official eligible-country list; full-time",
    status: "Kraken's official Europe requisition 3096a5c6-a4fc-4b09-9953-aefd72d423f3 was opened on 2026-08-12. Spain is explicitly listed among the eligible locations and the role is full-time remote. It owns the website, landing pages, conversion flows, campaign and social assets, brand guidelines, component libraries and AI-enabled templates and guardrails. Five or more years are required; the page does not expose a publication date.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/kraken.com/3096a5c6-a4fc-4b09-9953-aefd72d423f3/",
    analysis: "An exact digital-brand-system match with explicit Spain eligibility, but a senior stretch and crypto/AI context. Apply in English with website systems, landing-page conversion work, campaign extension, guidelines, reusable components and responsible AI workflow examples.",
    score: 84,
    tier: "B",
    locationTag: "Spain remote",
    typeTag: "Web / brand systems / campaigns / AI workflow",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://jobs.ashbyhq.com/kraken.com/3096a5c6-a4fc-4b09-9953-aefd72d423f3/"],
  },
  {
    id: 930847,
    section: "2026-08-12 Round 14 original-detail audit",
    source: "Xapo Bank official Greenhouse ATS",
    opportunity: "Visual Designer Graduate",
    fit: "Work-from-anywhere graduate route; brand and marketing assets, campaign visuals, motion, product walkthroughs and visual-identity evolution",
    location: "Gibraltar - Remote; official page says 100% remote and Work from anywhere; Spain contract and tax treatment must be confirmed",
    status: "Official Greenhouse requisition 7800947003 was opened and read in full on 2026-08-12. It shows Apply, a complete application form, full-time remote work and a 12-month graduate programme with a possible full-time conversion. It targets zero to one year of experience and accepts personal, university or freelance portfolios. The page does not expose a publication date.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/xapo61/jobs/7800947003",
    analysis: "An unusually accessible visual-brand and motion opportunity. It covers marketing assets, campaigns, ads, promotional material, animations, product walkthroughs and visual-identity evolution using Figma and tools such as After Effects, Rive or Lottie. Confirm that a Barcelona resident can be contracted and paid compliantly before investing in the application.",
    score: 90,
    tier: "A",
    locationTag: "Global remote; Spain eligibility to confirm",
    typeTag: "Graduate visual / brand / motion",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://job-boards.greenhouse.io/xapo61/jobs/7800947003"],
  },
  {
    id: 930848,
    section: "2026-08-12 Round 14 original-detail audit",
    source: "Finary official Ashby ATS",
    opportunity: "Freelance Senior Brand Designer",
    fit: "EU/UK remote within CET ±2 hours; growth, content and product-adjacent brand work across ads, social, email, landing pages, illustration and motion",
    location: "Remote in EU or UK within CET ±2 hours; freelance about two to three days per week; day rate EUR350-550",
    status: "Finary's official Ashby requisition 7e1f0ca0-b0ee-4a77-a825-62807a8e9645 was opened on 2026-08-12 and exposes an active application route. English is mandatory, Europe eligibility is explicit and the published day rate is EUR350-550. It is a senior part-time freelance role; the page does not expose a publication date.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/finary/7e1f0ca0-b0ee-4a77-a825-62807a8e9645",
    analysis: "A strong brand-system and growth-design brief with unusually transparent compensation, but it is senior, freelance and only two to three days per week. Apply with scalable identity systems, paid/social/email/landing work, iconography or illustration, motion and carefully governed AI production examples.",
    score: 72,
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Senior brand / growth / motion / freelance",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://jobs.ashbyhq.com/finary/7e1f0ca0-b0ee-4a77-a825-62807a8e9645"],
  },
  {
    id: 930849,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "Andilana / current JOB TODAY original detail",
    opportunity: "Diseñador/a Gráfico/a Junior – Comunicación",
    fit: "Barcelona-city junior graphic-design role covering visual identity, digital and print communication, photography retouching and final artwork",
    location: "Plaça Reial, Ciutat Vella, Barcelona; full-time; 40 hours; 100% onsite",
    status: "The original JOB TODAY detail was opened and read on 2026-08-12. It shows Apply now, an active employer profile and an immediate-start full-time role. The hard gates are native Catalan, good Spanish and English, formal graphic-design training with proof, Adobe Illustrator and up to about two years of experience.",
    contact: "Original detail/application: https://jobtoday.com/es/trabajo/disenador-a-grafico-a-junior-comunicacion-sector-hosteleria--p3E2kl",
    analysis: "A real Barcelona junior route with useful identity, print and digital scope, but native Catalan is a material gate and salary is not disclosed. Keep near the bottom of the live board unless the language and qualification requirements are met.",
    score: 62,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Junior graphic / visual identity / print and digital",
    sourceGroup: "official",
    postedAt: "2026-04-14",
    freshnessTag: "older",
    freshnessAgeDays: 120,
    links: ["https://jobtoday.com/es/trabajo/disenador-a-grafico-a-junior-comunicacion-sector-hosteleria--p3E2kl"],
  },
  {
    id: 930850,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "10x Team / official Ashby AI Lab pool",
    opportunity: "Visual Designer - AI Trainer",
    fit: "EU/UK remote freelance pool evaluating AI output for visual design, UI assets, branding concepts and professional design workflows",
    location: "Remote within EU/UK; contract; 8–20 hours per week; EUR61–100 per hour",
    status: "The official Ashby page and indexed application route were checked on 2026-08-12. It was updated on 2026-07-07 and accepts applications, but 10x explicitly states this is not a traditional job opening with a fixed start date. Approved profiles may wait months for a matching AI Lab project.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/10xteam/f855de79-8005-40cb-b954-adaf438b6f7e/",
    analysis: "Retain in the review library only. The compensation and EU eligibility are explicit, but this is a senior expert pool rather than a current design vacancy and must not inflate the live opportunity count.",
    score: 28,
    tier: "D",
    locationTag: "Europe remote",
    typeTag: "AI training / visual-design evaluation / freelance pool",
    sourceGroup: "official",
    postedAt: "2026-07-07",
    freshnessTag: "month",
    freshnessAgeDays: 36,
    links: ["https://jobs.ashbyhq.com/10xteam/f855de79-8005-40cb-b954-adaf438b6f7e/"],
  },
  {
    id: 930851,
    section: "2026-08-12 Round 16 original-detail audit",
    source: "Luppa / current LinkedIn employer detail",
    opportunity: "Diseñador/a Gráfico/a Senior",
    fit: "Barcelona-city senior brand-system role owning visual expression across social, web, email, marketplaces and licensed collections",
    location: "Barcelona city; full-time; office-based with one home-office day per week",
    status: "The current LinkedIn employer detail 4440135299 was opened and read in full on 2026-08-12. It does not show a closed notice and the employer asks candidates to send a CV and portfolio, but the public page does not expose a separate ATS form or email. Treat the publisher-message route as verify-first rather than claiming a confirmed one-click application.",
    contact: "Current original detail and publisher-message route: https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-senior-at-luppa-4440135299",
    analysis: "A strong local brand-system match: the role leads Luppa's visual evolution and consistency across B2B/B2C touchpoints, translates brand storytelling into a solid visual system, uses Adobe/Figma and AI, and values video or animation. The material gates are 5+ years and high English; salary, Spanish requirements, contract entity and the exact CV destination remain unconfirmed.",
    score: 96,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Senior brand / visual system / digital rollout",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: ["https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-senior-at-luppa-4440135299"],
  },
  {
    id: 930852,
    section: "2026-08-12 Round 16 original-detail audit",
    source: "Newlink Spain / current LinkedIn employer detail",
    opportunity: "Diseñador gráfico",
    fit: "Barcelona hybrid permanent role covering brand communication, identity adaptation, campaigns, events, presentations, social, motion and video",
    location: "Barcelona office; full-time; permanent; hybrid with three onsite and two remote days",
    status: "The current LinkedIn employer detail 4401651451 was opened and read in full on 2026-08-12. It visibly shows Solicitar and a complete role description. The hard gates are Catalan C1, English B2, two to four years of agency or consultancy experience and a portfolio with social-content work.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/dise%C3%B1ador-gr%C3%A1fico-at-newlink-spain-4401651451",
    analysis: "A real Barcelona brand-production route with an indefinite contract and useful identity, campaign, event, presentation, print, digital and motion scope. Keep below English-first roles because Catalan C1 is explicit and the environment is locally client-facing; salary and work-authorisation terms are not published.",
    score: 82,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand communication / graphic / motion / campaigns",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: ["https://es.linkedin.com/jobs/view/dise%C3%B1ador-gr%C3%A1fico-at-newlink-spain-4401651451"],
  },
  {
    id: 930853,
    section: "2026-08-12 Round 17 original-detail audit",
    source: "Estudi Gràfic El Prat / current JOIN employer detail",
    opportunity: "Diseñador-preimpresor",
    fit: "El Prat permanent full-time print-production route; digital and large-format printing, prepress, quality control and production supervision rather than brand identity",
    location: "El Prat de Llobregat, Barcelona province; onsite; permanent; full-time",
    status: "The current JOIN employer detail 15718560 was opened directly on 2026-08-12 and returned HTTP 200 with Aplicar ahora, an active application form, an indefinite contract and El Prat de Llobregat. The same page contradicts itself on compensation: the header metadata says EUR14,000-16,000/year while the benefits text says EUR21,000-26,000/year.",
    contact: "Current original detail/application: https://join.com/companies/egp/15718560-disenador-preimpresor",
    analysis: "Keep in the full reviewed library but outside the 158-role brand-visual main ranking. This is print-shop production and machinery/process supervision, not VI ownership. Consider it only as a local fallback after confirming the real salary, hours, Spanish/Catalan workflow, design-versus-production split and whether staff supervision is required.",
    score: 42,
    tier: "D",
    locationTag: "Barcelona area",
    typeTag: "Prepress / digital print / large-format production",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://join.com/companies/egp/15718560-disenador-preimpresor"],
  },
  {
    id: 930854,
    section: "2026-08-12 Round 18 original-detail audit",
    source: "Jungle / PS21Barna / current LinkedIn employer detail",
    opportunity: "Art Director / Video Editor",
    fit: "Barcelona hybrid full-time advertising-agency role; narrative editing, social formats, basic motion graphics, colour and visual finishing",
    location: "Barcelona city, Carrer d'Àlaba; full-time; hybrid; permanent-contract wording shown in the employer's current role family",
    status: "The current LinkedIn employer detail 4443271761 was opened and read in full on 2026-08-12. It shows Solicitar, Barcelona and a complete brief. The work is primarily advertising video editing and post-production rather than brand-identity ownership. It requires three to four years in an agency or production company plus a strong showreel; salary and an explicit language level are not published.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/art-director-video-editor-ps21barna-at-jungle-4443271761",
    analysis: "Keep as a secondary motion/content opportunity, not a top VI card. Apply only with strong Premiere, After Effects, Photoshop/Illustrator and DaVinci work showing narrative editing, social-format adaptation, title/motion, colour and audio finishing. Confirm daily Spanish, salary, contract, office days and work authorisation before proceeding.",
    score: 64,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Advertising video editing / motion / visual finishing",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: ["https://es.linkedin.com/jobs/view/art-director-video-editor-ps21barna-at-jungle-4443271761"],
  },
  {
    id: 930855,
    section: "2026-08-12 Round 18 original-detail audit",
    source: "HAAN / original LinkedIn employer detail",
    opportunity: "Junior Art Director",
    fit: "Excellent Barcelona junior graphic and art-direction brief covering campaigns, social, retail, ecommerce, packaging, presentations and shootings, but no longer accepting applications",
    location: "Barcelona city centre; Monday to Thursday onsite and Friday from home; contract details no longer actionable",
    status: "Closed/history: the original LinkedIn employer detail 4378324658 was opened on 2026-08-12 and explicitly says Ya no se aceptan solicitudes. The role covered roughly 70% graphic design and 30% art direction, but there is no current application route.",
    contact: "Closed original detail: https://es.linkedin.com/jobs/view/junior-art-director-at-haan-4378324658",
    analysis: "Preserve as a useful portfolio benchmark, not a live card. Do not apply through mirrors or infer that the fresh-looking search timestamp reopened the role; restore only after HAAN publishes a new requisition with a working application control.",
    score: 36,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed junior graphic / art direction benchmark",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://es.linkedin.com/jobs/view/junior-art-director-at-haan-4378324658"],
  },
  {
    id: 930856,
    section: "2026-08-12 Round 19 original-detail audit",
    source: "N26 / former official careers detail",
    opportunity: "Brand Designer",
    fit: "Former Barcelona English-language brand-design brief covering campaigns, visual systems and digital/offline touchpoints; no longer has an official application page",
    location: "Barcelona in the former brief; current vacancy no longer available",
    status: "Closed/history: search indexes still expose N26 requisition 6933534 with an Apply label and a complete-looking Brand Designer brief. The official N26 URL was opened directly on 2026-08-12 and returns HTTP 404, so the cached search result is not evidence of a current vacancy.",
    contact: "Closed official detail: https://n26.com/en-eu/careers/positions/6933534",
    analysis: "Preserve the excellent former brief as a portfolio benchmark, but do not count or apply to it. Restore N26 only after a new official requisition opens with its own working application page; the similarly cached Email Marketing and Senior Brand Designer pages are Berlin roles and also no longer current.",
    score: 24,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed brand-system benchmark",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://n26.com/en-eu/careers/positions/6933534"],
  },
  {
    id: 930857,
    section: "2026-08-12 Round 19 original-detail audit",
    source: "Airtool / expired LinkedIn employer detail",
    opportunity: "Graphic Designer (Brand & Digital)",
    fit: "Strong Barcelona branding, visual-identity, design-system, web, campaign and digital-content brief, but the named vacancy is expired",
    location: "Barcelona in the former brief; current application no longer available",
    status: "Closed/history: LinkedIn requisition 4364362492 was opened directly on 2026-08-12 and redirects to an expired job-results page. The preserved brief covers brand identity, logos, presentations, corporate material, social, web, Figma, Adobe, UX/UI and optional motion, but no employer-owned ATS or current application control was recovered.",
    contact: "Expired original detail: https://es.linkedin.com/jobs/view/graphic-designer-brand-digital-at-airtool-4364362492 ; archived brief: https://www.trabajas.es/oferta/graphic-designer-brand--digital-b39cc820abdab06/",
    analysis: "Keep as a future Airtool watchline, not a live card. Do not substitute the aggregator reply form for a confirmed employer application; reactivate only when Airtool or LinkedIn publishes a new independent requisition.",
    score: 28,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed brand / digital benchmark",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: [
      "https://es.linkedin.com/jobs/view/graphic-designer-brand-digital-at-airtool-4364362492",
      "https://www.trabajas.es/oferta/graphic-designer-brand--digital-b39cc820abdab06/",
    ],
  },
  {
    id: 930858,
    section: "2026-08-12 Round 19 original-detail audit",
    source: "NSN Never say never / removed LinkedIn employer detail",
    opportunity: "Graphic Designer",
    fit: "Barcelona sports-and-entertainment brand-activation brief across campaigns, digital, print, social and live events; named requisition removed",
    location: "Barcelona in the former brief; current application no longer available",
    status: "Closed/history: the signed-in LinkedIn employer URL for requisition 4321055301 was opened on 2026-08-12 and explicitly says the ID is invalid or has been removed. A third-party copy preserves the five-plus-year, native-Spanish and English-proficiency brief, but it is not a current original application route.",
    contact: "Removed original detail: https://www.linkedin.com/jobs/view/4321055301 ; archived brief: https://www.recruit.net/job/designer-graphic-designer-jobs/5D7E4B75D337A625",
    analysis: "Keep as a senior Spanish-hard-gate portfolio benchmark only. Do not let a fresh company result-list timestamp override the removed detail; restore only after NSN publishes a new job ID with a visible application control.",
    score: 30,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed brand activation / graphic design",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: [
      "https://www.linkedin.com/jobs/view/4321055301",
      "https://www.recruit.net/job/designer-graphic-designer-jobs/5D7E4B75D337A625",
    ],
  },
  {
    id: 930859,
    section: "2026-08-12 Round 19 original-detail audit",
    source: "Europastry / current LinkedIn listing signal + archived full-detail mirror",
    opportunity: "Graphic Designer",
    fit: "Sant Cugat senior graphic-design brief spanning branding, corporate identity, packaging, print, social, newsletters, motion, photography and campaign shoots",
    location: "Sant Cugat del Vallès, Barcelona province; full-time in the preserved brief",
    status: "Verify first: multiple current LinkedIn result lists on 2026-08-12 show Europastry recruiting a Graphic Designer in Sant Cugat del Vallès. The preserved full brief asks for five years of experience, English B2, advanced Adobe, branding, packaging and print-production knowledge. However, no stable job-detail ID, employer-owned ATS form or direct application control could be recovered in this pass.",
    contact: "Preserved full-detail mirror: https://www.wijobs.es/empleos/europastry/graphic-designer/4ce06967-11df-4fa3-8435-29f08a90b516 ; employer careers: https://europastry.com/en/talent/",
    analysis: "Keep in the review queue rather than the 160-role main board. Before preparing materials, recover the current employer or LinkedIn job detail and confirm that it is a new vacancy rather than a recycled result. If confirmed, this would be a strong local packaging-and-brand-production application with an English B2 path.",
    score: 74,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand / packaging / print / motion",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "week",
    freshnessAgeDays: null,
    links: [
      "https://www.wijobs.es/empleos/europastry/graphic-designer/4ce06967-11df-4fa3-8435-29f08a90b516",
      "https://europastry.com/en/talent/",
    ],
  },
  {
    id: 930862,
    section: "2026-08-12 Round 21 high-rank refresh and current replacement",
    source: "Superside / official careers and Lever ATS",
    opportunity: "AI Creative",
    fit: "Strong branding, campaign and digital-experience brief, but the official application is LATAM-only rather than Spain remote",
    location: "LATAM remote contractor; LinkedIn's Spain-remote search label conflicts with the official ATS",
    status: "Excluded/history: LinkedIn job 4451415435 was opened on 2026-08-12 and labels the role Spain remote, but the employer-owned Superside careers page sends applicants to Lever requisition f3d3064a-6df5-4a65-af08-132eeaf3688c, whose application header explicitly says LATAM, Contractor and Remote. The form accepts Europe as a general profile answer, but that does not override the requisition's LATAM location.",
    contact: "Official role: https://careers.superside.com/jobs/ai-creative ; official LATAM application: https://jobs.lever.co/superside/f3d3064a-6df5-4a65-af08-132eeaf3688c/apply ; conflicting LinkedIn result: https://www.linkedin.com/jobs/view/4451415435",
    analysis: "Preserve this as a search-label warning, not as a Barcelona or Spain opportunity. The work itself is highly relevant—branding, campaigns, digital experiences, Figma, Adobe and generative AI—but a Barcelona resident should not invest in the application unless Superside confirms in writing that this exact requisition accepts Europe-based contractors.",
    score: 18,
    tier: "X",
    locationTag: "Remote / other region",
    typeTag: "Excluded LATAM AI creative / brand",
    sourceGroup: "official",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://careers.superside.com/jobs/ai-creative",
      "https://jobs.lever.co/superside/f3d3064a-6df5-4a65-af08-132eeaf3688c/apply",
      "https://www.linkedin.com/jobs/view/4451415435",
    ],
  },
  {
    id: 930863,
    section: "2026-08-12 Round 22 current-source discovery and Chinese refresh",
    source: "THE/STUDIO / official Teamtailor careers",
    opportunity: "Visual Merchandising & Concept Specialist (AI & Trends focus)",
    fit: "Global-remote early-career brand-concept role covering identity systems, logos, colour, graphic language, patterns, mascots, packaging and AI-assisted product mockups",
    location: "Worldwide remote; full-time independent contractor; CET-friendly collaboration should be confirmed",
    status: "Live/current: THE/STUDIO's official Teamtailor detail was opened and read in full on 2026-08-12. It shows Apply for this role, 100% remote work from anywhere worldwide and a full-time independent-contractor arrangement. The brief asks for 1–3 years or a strong portfolio, written English, Figma Slides and AI-supported concept development.",
    contact: "Official detail/application: https://thestudio.na.teamtailor.com/jobs/682135-visual-merchandising-concept-specialist ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4452733149/",
    analysis: "One of the strongest newly found matches for an early-career Barcelona-based applicant: the work directly covers customer brand identity, moodboards, product concept decks, logos, colour, graphic language, patterns, mascots and packaging systems. Apply in English with concept-to-system cases and AI mockups, but confirm contractor rate, Spain invoicing/tax setup, paid leave, equipment, hours and time-zone overlap before accepting.",
    score: 92,
    tier: "A",
    locationTag: "Worldwide remote",
    typeTag: "Brand identity / concept systems / packaging / AI",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "today",
    freshnessAgeDays: 0,
    links: [
      "https://thestudio.na.teamtailor.com/jobs/682135-visual-merchandising-concept-specialist",
      "https://www.linkedin.com/jobs/view/4452733149/",
    ],
  },
  {
    id: 930864,
    section: "2026-08-12 Round 22 current-source discovery and Chinese refresh",
    source: "Prime Insights / current LinkedIn employer detail",
    opportunity: "Graphic Designer",
    fit: "Remote brand and product-visual role covering identity, vector illustration, mascots, icon systems, onboarding, rewards and localized marketing assets",
    location: "Spain remote according to the current LinkedIn listing; Sweden-based team; CET overlap preferred",
    status: "Live/current with labor-condition caveat: the current LinkedIn employer detail was opened on 2026-08-12. It lists a remote part-time Graphic Designer role and an application route, while the body says the collaboration may be contract or full-time depending on fit. No salary, hours or Spain employment entity is disclosed.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/graphic-designer-at-prime-insights-4432554030",
    analysis: "The visual scope is unusually relevant—identity systems, custom vector illustrations, mascots, icons, web/mobile onboarding, badges, reward visuals, video and localization—but the part-time header conflicts with the body. Apply in English only after confirming weekly hours, contract type, rate, Spain invoicing/payroll, paid test policy, IP terms and CET overlap.",
    score: 72,
    tier: "B",
    locationTag: "Spain remote",
    typeTag: "Brand identity / illustration / product visuals",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "today",
    freshnessAgeDays: 0,
    links: ["https://es.linkedin.com/jobs/view/graphic-designer-at-prime-insights-4432554030"],
  },
  {
    id: 930865,
    section: "2026-08-12 Round 22 current-source discovery and Chinese refresh",
    source: "Jobgether / anonymous partner-company LinkedIn listing",
    opportunity: "UI/UX & Visual Designer (Mid-Level)",
    fit: "Spain-remote visual and digital-design brief spanning responsive content sites, landing pages, conversion assets, Figma systems, logos, infographics, banners and campaign consistency",
    location: "Spain remote according to LinkedIn; actual employer, employment entity and team location are undisclosed",
    status: "Verify first: LinkedIn job 4451696654 was opened on 2026-08-12 and exposes an Easy Apply route, but the description explicitly says Jobgether is recruiting for an anonymous partner company. No employer-owned ATS, company name, salary, contract entity or public hiring-team identity was recovered.",
    contact: "Original intermediary listing: https://www.linkedin.com/jobs/view/4451696654/",
    analysis: "Keep at the bottom of the reviewable board rather than treating it as a high-confidence vacancy. The skills match is real, but do not provide identity documents, banking information, unpaid test work or private source files until the actual employer, company-domain contact, written compensation, Spain contract route and data controller are disclosed.",
    score: 34,
    tier: "D",
    locationTag: "Spain remote",
    typeTag: "Verify-first anonymous UI/UX / visual design",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "today",
    freshnessAgeDays: 0,
    links: ["https://www.linkedin.com/jobs/view/4451696654/"],
  },
  {
    id: 930860,
    section: "2026-08-12 Round 20 high-rank recheck and official ATS discovery",
    source: "Kraken / official Ashby ATS + current LinkedIn employer detail",
    opportunity: "Sr Brand Designer - Krak",
    fit: "Spain-explicit remote full-time senior brand role owning visual identity, art direction, motion, 3D, illustration and scalable campaign systems",
    location: "Spain explicitly eligible; remote; full-time",
    status: "Live/current: Kraken's official Ashby requisition 8ed4c65b-aaac-40d0-9d41-423683b7a1bd was opened and read in full on 2026-08-12. Spain is explicitly listed among eligible countries, the page shows Apply for this Job, and applications are accepted on an ongoing basis unless a deadline is later added.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/kraken.com/8ed4c65b-aaac-40d0-9d41-423683b7a1bd ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4446776467",
    analysis: "A strong exact brand-system opportunity, but a real senior stretch: five-plus years and prior fintech or world-class fintech-agency work are explicit. Apply in English only with identity evolution, art direction, Figma systems, localization-ready campaign kits, motion/3D/illustration and AI-enabled production examples.",
    score: 94,
    tier: "A",
    locationTag: "Spain remote",
    typeTag: "Senior brand / identity / motion / scalable systems",
    sourceGroup: "official",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: [
      "https://jobs.ashbyhq.com/kraken.com/8ed4c65b-aaac-40d0-9d41-423683b7a1bd",
      "https://jobs.ashbyhq.com/kraken.com/8ed4c65b-aaac-40d0-9d41-423683b7a1bd/application",
      "https://www.linkedin.com/jobs/view/4446776467",
    ],
  },
  {
    id: 930861,
    section: "2026-08-12 Round 20 high-rank recheck and official ATS discovery",
    source: "Primer.io / removed official Ashby ATS detail",
    opportunity: "Brand Designer",
    fit: "Former remote-first brand-system role across web, campaigns, product marketing, social, events and sales collateral; official requisition removed",
    location: "Remote-first in the former brief; current application no longer available",
    status: "Closed/history: the indexed Primer Brand Designer requisition 5869d2db-b445-4676-9392-d95a3973500f was opened directly on 2026-08-12. The official Ashby page now says Job not found and provides only the general open-positions link.",
    contact: "Removed official detail: https://jobs.ashbyhq.com/primer.io/5869d2db-b445-4676-9392-d95a3973500f",
    analysis: "Preserve the former visual-identity and multi-channel brand brief as a portfolio benchmark, but do not count it as a current remote opportunity or apply through a mirror. Restore only after Primer publishes a new official requisition.",
    score: 20,
    tier: "X",
    locationTag: "Europe remote",
    typeTag: "Closed senior brand / visual system",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://jobs.ashbyhq.com/primer.io/5869d2db-b445-4676-9392-d95a3973500f"],
  },
  {
    id: 930873,
    section: "2026-08-12 Round 28 Barcelona original-detail discovery and false-positive cleanup",
    source: "Grupo Planeta / official TalentClue ATS",
    opportunity: "Diseñador/a Gráfico/a Senior / Diseñador/a Editorial Senior",
    fit: "Barcelona senior editorial graphic design; book-cover concepts, art direction, launch materials and production",
    location: "Barcelona city; on-site; indefinite full-time; one vacancy",
    status: "Live/current: Grupo Planeta's official TalentClue detail 127111935 was opened and read in full on 2026-08-12. It shows Inscríbete, one Barcelona vacancy, an indefinite full-time contract and on-site work. The Art & Design team creates non-fiction covers for Planeta, Ariel, Crítica and Península and carries concepts through production.",
    contact: "Official detail/application: https://grupoplaneta.talentclue.com/es/node/127111935/4590/modal ; official careers hub: https://jobs.planeta.es/",
    analysis: "A real, high-quality Barcelona graphic-design route, but not a junior VI role. The work is editorial art direction, cover design, typography and launch graphics; it requires at least five years, Adobe Creative Cloud, intermediate-or-higher English and a portfolio. Confirm salary and the daily Spanish working level before applying.",
    score: 82,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Editorial graphic design / art direction / launch graphics",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "week",
    freshnessAgeDays: null,
    links: [
      "https://grupoplaneta.talentclue.com/es/node/127111935/4590/modal",
      "https://jobs.planeta.es/",
    ],
  },
  {
    id: 930874,
    section: "2026-08-12 Round 28 Barcelona original-detail discovery and false-positive cleanup",
    source: "Ogilvy / current employer-origin LinkedIn detail",
    opportunity: "Liquid Designer",
    fit: "Barcelona hybrid full-time digital and motion designer; social video, international adaptation and brand consistency",
    location: "Barcelona city; hybrid 2–3 office days and 2–3 remote days on alternating weeks; full-time",
    status: "Live/current: Ogilvy's employer-origin LinkedIn detail 4434548567 was opened and read in full on 2026-08-12. It shows Solicitar and a complete Barcelona brief. The role creates and adapts digital assets, Reels, TikTok and YouTube Shorts, video, animation and motion graphics while localising work for international markets and protecting brand consistency.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/liquid-designer-at-ogilvy-4434548567 ; employer careers: https://www.ogilvy.com/es/careers",
    analysis: "A solid formal Barcelona role for digital-brand extension rather than core VI ownership. It asks for two to four years, at least two years in an agency, Adobe, After Effects and Figma. The public brief does not state a language requirement, salary or work-authorisation policy, so confirm those before a time-intensive application.",
    score: 74,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Digital / social video / motion / brand adaptation",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: [
      "https://es.linkedin.com/jobs/view/liquid-designer-at-ogilvy-4434548567",
      "https://www.ogilvy.com/es/careers",
    ],
  },
  {
    id: 930875,
    section: "2026-08-12 Round 28 Barcelona original-detail discovery and false-positive cleanup",
    source: "Grupo Bimbo / current employer-origin LinkedIn detail + official careers route",
    opportunity: "Branding & Design Intern",
    fit: "Barcelona Diagonal Mar brand-identity and packaging internship; guidelines, final artwork, assets and visual presentations",
    location: "Barcelona city / Diagonal Mar office; internship conditions, schedule and pay not published",
    status: "Live/current: Grupo Bimbo's employer-origin LinkedIn detail 4405562504 was opened and read in full on 2026-08-12. It shows Solicitar and a complete Barcelona vacancy. The work supports visual identity and packaging, online and offline assets, final artwork, brand guidelines, asset libraries, visual presentations, agencies, suppliers and brand-coherence review.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/branding-design-intern-at-grupo-bimbo-4405562504 ; official careers route: https://www.grupobimbo.com/en/join-our-team",
    analysis: "The direction is exceptionally relevant for an entry-level brand/packaging portfolio, but this is an internship with high Spanish explicitly required. University/current-study status is requested; salary, schedule, duration and internship-agreement conditions are not published. Confirm every labour condition before investing in a tailored application.",
    score: 63,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand identity / packaging / guidelines / final artwork internship",
    sourceGroup: "linkedin",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: [
      "https://es.linkedin.com/jobs/view/branding-design-intern-at-grupo-bimbo-4405562504",
      "https://www.grupobimbo.com/en/join-our-team",
    ],
  },
  {
    id: 930876,
    section: "2026-08-12 Round 29 reopened official roles and Barcelona source-board audit",
    source: "IEBS Business School / official Factorial ATS + current employer-origin LinkedIn detail",
    opportunity: "Prácticas Diseño Gráfico",
    fit: "Viladecans hybrid 20-hour internship; event graphics, social assets, video support and consistent brand adaptation",
    location: "Viladecans, Barcelona province; hybrid with two remote days weekly; 20 hours per week; internship",
    status: "Live/current: IEBS Business School's official Factorial careers board was opened on 2026-08-12 and explicitly lists Prácticas Diseño Gráfico in Viladecans, Diseño, Híbrido and Inscríbete ahora. The current employer-origin LinkedIn detail 4417493275 also shows Solicitar and a complete brief covering event graphics, carousels, posts, stories, multi-format social adaptation and brand-identity consistency.",
    contact: "Official ATS detail/application: https://iebschool.factorialhr.com/job_posting/practicas-diseno-grafico-303264 ; official jobs board: https://iebschool.factorialhr.com/ ; employer-origin detail: https://es.linkedin.com/jobs/view/pr%C3%A1cticas-dise%C3%B1o-gr%C3%A1fico-at-iebs-business-school-4417493275",
    analysis: "A real Barcelona-province entry route, but it is social-first production rather than core VI and the ability to sign an internship agreement is mandatory. The public brief is Spanish and does not publish compensation. Confirm pay, duration, exact office days, daily working language and conversion prospects before applying.",
    score: 58,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Graphic-design internship / social assets / brand adaptation",
    sourceGroup: "official",
    postedAt: "2026-08-07",
    freshnessTag: "week",
    freshnessAgeDays: 5,
    links: [
      "https://iebschool.factorialhr.com/job_posting/practicas-diseno-grafico-303264",
      "https://iebschool.factorialhr.com/",
      "https://es.linkedin.com/jobs/view/pr%C3%A1cticas-dise%C3%B1o-gr%C3%A1fico-at-iebs-business-school-4417493275",
    ],
  },
  {
    id: 930877,
    section: "2026-08-12 Round 29 reopened official roles and Barcelona source-board audit",
    source: "Bravura Barcelona / official employer careers page",
    opportunity: "Diseñador/a Gráfico/a",
    fit: "Barcelona fashion brand; web, social, advertising campaigns and cross-channel visual consistency; remote possibility",
    location: "Barcelona-branded employer; remote possibility and flexible schedule stated; exact office, contract and payroll location not published",
    status: "Verify before applying: Bravura Barcelona's official employer careers page was opened on 2026-08-12 and directly lists a Diseñador/a Gráfico/a vacancy plus the portfolio email info@bravurabarcelona.com. It covers web, social media, advertising campaigns and brand consistency and states remote-work possibility, flexible hours and competitive pay, but exposes no publication date, employment type, salary range, legal entity or precise work location.",
    contact: "Official employer vacancy/contact: https://bravurabarcelona.com/pages/trabaja-con-nosotros ; portfolio email: mailto:info@bravurabarcelona.com",
    analysis: "Directionally relevant and actionable through an employer-owned route, but it must remain verify-first rather than being presented as a confirmed formal job. Ask for the company entity/CIF, contract type, salary range, working location, weekly hours, language, selection process and whether any design test is paid before sending tailored work.",
    score: 56,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Fashion brand / digital graphic design / verify terms",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: [
      "https://bravurabarcelona.com/pages/trabaja-con-nosotros",
      "mailto:info@bravurabarcelona.com",
    ],
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const ROUND35_SECTION = "2026-08-13 Round 35 Barcelona design and Chinese-channel refresh";
[
  {
    id: 930880,
    section: ROUND35_SECTION,
    source: "Dragons Group / current official Factorial ATS",
    opportunity: "Senior Graphic Designer",
    fit: "Barcelona hybrid permanent full-time; premium beauty and skincare visual design, social-first campaigns and brand consistency; 5-7+ year seniority gate",
    location: "Barcelona, Spain; permanent; full-time; hybrid",
    status: "The current official Factorial requisition 302205 was opened and read in full on 2026-08-13. It shows Apply now, Permanent, Full time and Hybrid Barcelona. The role creates premium beauty, skincare, wellness and lifestyle visual assets for Instagram, TikTok, paid social, campaigns, presentations and digital ecosystems while protecting brand consistency. English is mandatory; Spanish is preferred, not required.",
    contact: "Official detail and application: https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-302205 ; current LinkedIn employer mirror: https://www.linkedin.com/jobs/view/4436486942",
    analysis: "A genuine new English-first Barcelona graphic-design route, distinct from the Spanish-mandatory Mid/Senior card. It is still a senior stretch: apply only with 5-7+ years, premium consumer-brand work, strong typography/composition, social campaign systems, retouching and AI-assisted visual development. Use the official ATS as the canonical application route.",
    score: 85,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Senior graphic design / premium brand campaigns",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-302205",
      "https://www.linkedin.com/jobs/view/4436486942",
    ],
    searchText: "Dragons Group current official Factorial 302205 Senior Graphic Designer Barcelona hybrid permanent full-time Apply English mandatory Spanish preferred beauty skincare wellness lifestyle social campaign brand consistency retouching AI 5-7 years",
  },
  {
    id: 930881,
    section: ROUND35_SECTION,
    source: "Dragons Group / current official Factorial ATS",
    opportunity: "Senior Video Editor & Motion Creative",
    fit: "Barcelona hybrid permanent full-time; branded campaign films, social, digital, editing, motion and visual storytelling; 7+ year seniority gate",
    location: "Barcelona, Spain; permanent; full-time; hybrid",
    status: "The current Dragons official jobs board and exact Factorial requisition 308042 were checked on 2026-08-13 and show a current Apply now route for Senior Video Editor & Motion Creative in hybrid Barcelona. The full employer LinkedIn brief covers campaign films, TVCs, social, branded content, motion graphics, animation, moodboards, AI workflows and collaboration with 3D artists. Fluent English is required; other languages are only a plus.",
    contact: "Official detail and application: https://dragons-group.factorialhr.com/job_posting/senior-video-editor-motion-creative-308042 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4436304499",
    analysis: "Keep as a real but secondary motion opportunity: it is editor-first rather than VI-first and requires 7+ years. Apply only with senior campaign-film editing, premium consumer-brand storytelling, Premiere Pro, After Effects and motion-design depth; use the official ATS rather than third-party reposts.",
    score: 68,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Senior video editing / motion / branded content",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-video-editor-motion-creative-308042",
      "https://www.linkedin.com/jobs/view/4436304499",
    ],
    searchText: "Dragons Group current official Factorial 308042 Senior Video Editor Motion Creative Barcelona hybrid permanent full-time Apply fluent English campaign film TVC social branded content animation AI 3D 7 years",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

function applyRound35SourceUpdates() {
  const leadDesigner = allData.find((item) => Number(item.id) === 88);
  if (leadDesigner) {
    Object.assign(leadDesigner, {
      section: ROUND35_SECTION,
      source: "Dragons Group / current official Factorial ATS",
      opportunity: "Lead Graphic Designer",
      fit: "Barcelona hybrid permanent full-time; scalable brand systems, 360 campaigns and design-team leadership; Spanish and English mandatory; 7-8 years",
      location: "Barcelona, Spain; permanent; full-time; hybrid",
      status: "The exact official Factorial requisition 301871 was opened and read in full on 2026-08-13. It shows Apply now, Permanent, Full time and Hybrid Barcelona. The role translates brand strategy into scalable design systems, protects quality across touchpoints, leads designers and owns complex FMCG and 360-campaign delivery. Spanish and English are both mandatory.",
      contact: "Official detail and application: https://dragons-group.factorialhr.com/job_posting/lead-graphic-designer-301871 ; LinkedIn employer mirror: https://www.linkedin.com/jobs/view/4436198704",
      analysis: "Promote from an unverified LinkedIn card to a current official-ATS opportunity, but retain a strong gate penalty. Apply only with 7-8 years, professional Spanish and English, FMCG brand systems, team leadership, client presentations and complex multi-market campaign ownership.",
      score: 76,
      tier: "C",
      locationTag: "Barcelona area",
      typeTag: "Lead graphic design / brand systems / team leadership",
      sourceGroup: "other",
      postedAt: "2026-08-13",
      freshnessTag: "week",
      freshnessAgeDays: 0,
      links: [
        "https://dragons-group.factorialhr.com/job_posting/lead-graphic-designer-301871",
        "https://www.linkedin.com/jobs/view/4436198704",
      ],
      searchText: "Dragons Group current official Factorial 301871 Lead Graphic Designer Barcelona hybrid permanent full-time Apply scalable brand systems 360 campaigns FMCG team leadership Spanish English mandatory 7-8 years",
    });
  }

  const chineseGraphicDesigner = allData.find((item) => Number(item.id) === 778);
  if (chineseGraphicDesigner) {
    Object.assign(chineseGraphicDesigner, {
      section: ROUND35_SECTION,
      source: "Barcelona Chinese advertising company / current ES02 original repost",
      opportunity: "Full-time Graphic Designer",
      fit: "Barcelona local Chinese-contact graphic-design opening; Illustrator and prior experience; work residence and full social insurance stated; employer identity and terms still need verification",
      location: "Barcelona, Spain; full-time; exact address and schedule to confirm",
      status: "Restored after current repost evidence. The same publisher and contact posted the exact Barcelona full-time graphic-designer vacancy again on ES02 on 2026-08-03, 2026-08-05 and 2026-08-06. The latest original detail 184673 is readable and asks for design experience, AI/Illustrator, valid work residence and states full social insurance. It provides Chinese WeChat A644055418 and phone +34 644 055 418, but no employer name, CIF, address, salary, hours, contract type or working-language detail.",
      contact: "Latest current original detail: https://www.es02.com/jobs/Recruitment/barcelona/i184673.html ; previous same-contact reposts: https://www.es02.com/jobs/Recruitment/barcelona/i183850.html and https://www.es02.com/jobs/Recruitment/barcelona/i182243.html ; WeChat A644055418 ; phone +34 644 055 418",
      analysis: "Restore one canonical current card, not three duplicate seats. First ask in Chinese for the company legal name/CIF, exact address, current vacancy confirmation, duties, salary, hours, contract, probation, paid test policy and daily working language. Do not send passport, residence-card scans or editable source files before the employer identity and written terms are verified.",
      score: 64,
      tier: "C",
      locationTag: "Barcelona area",
      typeTag: "Graphic design / advertising print production / Chinese contact",
      sourceGroup: "chinese",
      postedAt: "2026-08-06",
      freshnessTag: "week",
      freshnessAgeDays: 7,
      links: [
        "https://www.es02.com/jobs/Recruitment/barcelona/i184673.html",
      ],
      searchText: "Barcelona Chinese advertising company current ES02 184673 183850 182243 full-time Graphic Designer Chinese contact Illustrator AI experience work residence full social insurance employer salary hours address verify A644055418 644055418",
    });
  }
}

applyRound35SourceUpdates();

const ROUND36_SECTION = "2026-08-13 Round 36 official remote visual-design audit";
[
  {
    id: 930882,
    section: ROUND36_SECTION,
    source: "Duna / official Ashby ATS and employer careers policy",
    opportunity: "Visual Designer",
    fit: "Worldwide remote full-time visual-design role; owns the visual language across GTM, web, presentations, social and information graphics; 3-6 years",
    location: "Worldwide remote; Duna states that staff can work wherever and whenever they want; Barcelona/Spain residence is eligible, but the contract entity should be confirmed",
    status: "Live/current. Duna's official careers page and Ashby job-board API were checked on 2026-08-13. The employer careers page lists Visual Designer as Mid/Senior and Remote. The exact Ashby record is listed, remote and full-time, with a working job detail and application route. The role creates sales decks, one-pagers, comparison charts, LinkedIn visuals, website and landing-page graphics, icons, illustrations, infographics and diagrams while working inside existing brand guidelines.",
    contact: "Official detail: https://jobs.ashbyhq.com/duna/6af4c831-00ee-4d94-93cb-709de9f1ee27 ; official application: https://jobs.ashbyhq.com/duna/6af4c831-00ee-4d94-93cb-709de9f1ee27/application ; employer careers board: https://duna.com/careers ; employer remote policy: https://duna.com/careers/whats-in-it-for-you",
    analysis: "A strong English-first remote route for visual brand extension rather than a new identity-system owner. Apply with concise cases for web and landing pages, sales presentations, social campaign systems, data visualisation, iconography and fast multi-format production. Confirm the Spain employment or contractor entity, salary range and occasional in-person expectations before accepting an interview process.",
    score: 85,
    tier: "B",
    locationTag: "Worldwide remote",
    typeTag: "Visual design / GTM / web / presentations / information graphics",
    sourceGroup: "official",
    postedAt: "2026-07-14",
    freshnessTag: "month",
    freshnessAgeDays: 30,
    links: [
      "https://jobs.ashbyhq.com/duna/6af4c831-00ee-4d94-93cb-709de9f1ee27",
      "https://jobs.ashbyhq.com/duna/6af4c831-00ee-4d94-93cb-709de9f1ee27/application",
      "https://duna.com/careers",
      "https://duna.com/careers/whats-in-it-for-you",
    ],
    searchText: "Duna official Ashby Visual Designer remote worldwide full-time mid senior 3-6 years visual language GTM sales decks one-pagers comparison charts LinkedIn website landing pages icons illustrations infographics diagrams Adobe Figma brand guidelines work wherever Barcelona Spain",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const ROUND37_SECTION = "2026-08-13 Round 37 Barcelona exact-detail consolidation";
[
  {
    id: 930883,
    section: ROUND37_SECTION,
    source: "reboot / closed LinkedIn employer detail retained as history",
    opportunity: "Senior Brand Designer",
    fit: "Barcelona/Poblenou brand-identity role covering end-to-end visual identities, design systems, motion and web; remote with preference for several Barcelona office days",
    location: "Barcelona / remote-hybrid preference / full-time",
    status: "Closed/history after a same-day state change. The exact LinkedIn employer detail 4386330520 initially rendered the complete Barcelona Senior Brand Designer brief and Solicitar on 2026-08-13, but the final direct-route audit later that day redirected to expired_jd_redirect and no longer contained the role. Preserve the unusually relevant identity-system brief, but the cached search result must not override the current final redirect.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/senior-brand-designer-at-reboot-4386330520",
    analysis: "Archive only. This was one of the closest Barcelona VI briefs, but the exact route is now expired. Do not apply through the generic reboot Web Designer form and do not count it as current; use the brief for portfolio targeting and restore it only if reboot publishes a new independent requisition.",
    score: 96,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Brand identity / visual systems / motion / web",
    sourceGroup: "linkedin",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://es.linkedin.com/jobs/view/senior-brand-designer-at-reboot-4386330520"],
    searchText: "reboot current LinkedIn Senior Brand Designer Barcelona Poblenou remote hybrid full-time apply visual identity design systems moodboards brand direction motion web Figma Illustrator After Effects InDesign Photoshop 5+ years English bonus",
  },
  {
    id: 930884,
    section: ROUND37_SECTION,
    source: "Ogilvy / current LinkedIn employer detail",
    opportunity: "Art Director (Social Media)",
    fit: "Barcelona hybrid art-direction role for social visual concepts, platform assets, brand consistency, video and motion; minimum two years in an agency",
    location: "Barcelona / hybrid 2-3 office days alternating / full-time",
    status: "Live/current. The exact LinkedIn employer detail 4434550264 was opened on 2026-08-13 and does not show a closed marker; the current search result exposes Solicitar. The full brief is readable and covers visual concepts and assets for Instagram, TikTok and YouTube, collaboration with copy and strategy, and visual consistency across brand communications. It requires at least two years in an agency, Adobe tools and basic video/motion knowledge. The public brief is in English but does not explicitly state the daily working-language requirement.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/art-director-social-media-at-ogilvy-4434550264",
    analysis: "A credible local social-first art-direction option, secondary to pure VI roles. Use campaign systems, social-native layouts, motion/video and brand-consistency examples; ask whether Spanish is required before spending time on a tailored test.",
    score: 80,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Art direction / social / video / motion",
    sourceGroup: "linkedin",
    freshnessTag: "month",
    links: ["https://es.linkedin.com/jobs/view/art-director-social-media-at-ogilvy-4434550264"],
    searchText: "Ogilvy current LinkedIn Art Director social media Barcelona hybrid full-time apply Instagram TikTok YouTube Adobe After Effects Premiere visual consistency brands minimum 2 years agency English brief Spanish not stated",
  },
  {
    id: 930885,
    section: ROUND37_SECTION,
    source: "Buzz Marketing Networks / current LinkedIn employer detail",
    opportunity: "Director/a de arte",
    fit: "Barcelona hybrid art-direction role for brand campaigns, visual concepts, moodboards, style definition and occasional hands-on design",
    location: "Barcelona / hybrid 2 office days and 3 remote days / full-time",
    status: "Live/current. The exact LinkedIn employer detail 4442207926 and its current search result were opened on 2026-08-13. The role is not marked closed and the current result exposes a LinkedIn application route. The complete Spanish brief asks for five years of art-direction or similar experience and covers brand campaigns, moodboards, visual references, aesthetic universes, copy collaboration and design execution. Salary and an explicit language statement are absent.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/director-a-de-arte-at-buzz-agencia-creativa-digital-4442207926",
    analysis: "Keep as a Spanish-first senior local option rather than a top recommendation. Apply with campaign concept, moodboard, art-direction and final-execution examples; confirm salary and whether professional Spanish is mandatory.",
    score: 74,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Art direction / brand campaigns / visual concepts",
    sourceGroup: "linkedin",
    freshnessTag: "week",
    links: ["https://es.linkedin.com/jobs/view/director-a-de-arte-at-buzz-agencia-creativa-digital-4442207926"],
    searchText: "Buzz Marketing Networks current LinkedIn Director de arte Barcelona hybrid 2 office 3 remote full-time brand campaigns visual concepts moodboards styles design 5 years Spanish brief salary unknown",
  },
  {
    id: 930886,
    section: ROUND37_SECTION,
    source: "Establishment Labs / current LinkedIn employer detail",
    opportunity: "Junior Project Coordinator & Graphic Designer",
    fit: "Barcelona hybrid English-first internship supporting brand assets and guideline consistency, but only about 30% of the role is graphic design",
    location: "Barcelona / hybrid / internship-graduate programme",
    status: "Live/current. The exact LinkedIn employer detail 4449830488 was opened on 2026-08-13. It visibly shows Barcelona, Solicitar, publication one day earlier and no closed marker. The role is approximately 70% project coordination and 30% basic graphic-design adjustment. Design work includes presentations, brochures, templates, social assets, brand-guideline consistency and print-ready files. Only students currently enrolled in a bachelor or postgraduate programme who can sign a formal internship agreement are eligible. Fluent/native English is required; Spanish and other languages are only a plus.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/junior-project-coordinator-graphic-designer-at-establishment-labs-4449830488",
    analysis: "Keep as a transparent lower-priority English-first foothold, not as a core graphic-design job. Apply only if the university convenio requirement is genuinely available and project coordination is acceptable; confirm pay, duration, hours and conversion prospects first.",
    score: 48,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Internship / project coordination / brand production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/junior-project-coordinator-graphic-designer-at-establishment-labs-4449830488"],
    searchText: "Establishment Labs current LinkedIn Junior Project Coordinator Graphic Designer Barcelona hybrid internship graduate programme apply 70% coordination 30% graphic design brand assets presentations brochures templates social print fluent English Spanish plus student enrolled formal internship agreement convenio",
  },
  {
    id: 930887,
    section: ROUND37_SECTION,
    source: "Lateral Thinking / current LinkedIn employer detail",
    opportunity: "Senior Spatial Designer",
    fit: "Barcelona brand-experience and spatial-storytelling role spanning immersive environments, installations, 2D/3D production and brand consistency",
    location: "Barcelona / full-time / office arrangement not stated",
    status: "Live/current with a stale-template caveat. The exact LinkedIn employer detail 4452412973 was opened on 2026-08-13. It visibly shows Barcelona, Solicitar, publication one day earlier and no closed marker. The role creates brand-driven spatial stories, immersive environments and installations and requires 5+ years, 3D rendering, CAD/floorplans, Adobe and fluent Spanish. The brief still says an ideal January 2026 start, so the recruiter should confirm that this refreshed requisition is genuinely active and correct the start-date text.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/we%E2%80%99re-hiring-%E2%80%93-senior-spatial-designer-at-lateral-thinking-4452412973",
    analysis: "A real but off-core brand-experience extension. Keep low because fluent Spanish, five years and specialist spatial/CAD/3D experience are hard gates and the start date is stale. Confirm the opening before tailoring anything.",
    score: 43,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Spatial brand experience / 3D / installations",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/we%E2%80%99re-hiring-%E2%80%93-senior-spatial-designer-at-lateral-thinking-4452412973"],
    searchText: "Lateral Thinking current LinkedIn Senior Spatial Designer Barcelona apply brand-driven spatial stories environments installations 5+ years SketchUp Rhino V-Ray AutoCAD Adobe fluent Spanish English Catalan plus stale January 2026 start verify",
  },
  {
    id: 930888,
    section: ROUND37_SECTION,
    source: "VML / current LinkedIn employer detail",
    opportunity: "Art Director",
    fit: "Barcelona hybrid senior art-direction role covering visual identity, integrated campaigns, AI, social, motion and video",
    location: "Barcelona / hybrid, normally about 4 office days weekly / full-time",
    status: "Live/current. The exact LinkedIn employer detail 4441238571 was opened on 2026-08-13. It visibly shows Barcelona and Solicitar and is not marked closed. The role leads campaign visual direction and brand identity from concept through execution and asks for 5-6+ years in a creative agency, Adobe, AI tools, portfolio and client presentation skills. Medium-high English and Catalan are explicit requirements; Figma, motion and video are valued.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/art-director-at-vml-4441238571",
    analysis: "Relevant work, but Catalan plus 5-6 years of agency art direction are hard gates. Keep below accessible English-first and junior/mid roles; only apply if both requirements are genuinely met.",
    score: 58,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Art direction / visual identity / integrated campaigns",
    sourceGroup: "linkedin",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://es.linkedin.com/jobs/view/art-director-at-vml-4441238571"],
    searchText: "VML current LinkedIn Art Director Barcelona hybrid full-time apply brand identity campaigns Adobe AI Figma motion video 5-6 years agency medium-high English Catalan mandatory",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const ROUND38_SECTION = "2026-08-13 Round 38 profile-first reopening and language audit";
const ROUND39_SECTION = "2026-08-13 Round 39 high-rank language, seniority and status audit";
const ROUND40_SECTION = "2026-08-13 Round 40 ranks 26-60 language and experience audit";
const ROUND41_SECTION = "2026-08-13 Round 41 ranks 61-100 status language and experience audit";
const ROUND42_SECTION = "2026-08-13 Round 42 ranks 101-140 language and official-requisition audit";
const ROUND43_SECTION = "2026-08-13 Round 43 ranks 141-198 language status and duplicate audit";

// Round 20: a visible email or a fresh search-card timestamp cannot override a
// closed original detail. Conversely, employer-owned ATS pages with an active
// form and explicit Spain/global eligibility may be promoted into the board.
const round20Supabase = allData.find((item) => Number(item.id) === 535);
if (round20Supabase) {
  Object.assign(round20Supabase, {
    section: "2026-08-12 Round 20 high-rank recheck and official ATS discovery",
    source: "Supabase / official Ashby ATS",
    opportunity: "Brand Designer",
    fit: "Global remote full-time brand role spanning visual storytelling, presentations, print, events, conferences, social and video",
    location: "Global remote; official page says Supabase hires globally and team members can work from anywhere",
    status: "Live/current: the official Supabase Ashby detail was opened and read in full on 2026-08-12. It shows Brand Designer, Remote, Full time, Apply for this Job and explicitly states 'We hire globally' and 'work from anywhere'. The team is distributed across 60+ countries.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/supabase/4a85c92b-1d0d-43ee-8dbc-0e45a58be208",
    analysis: "A strong English-first remote brand opportunity with unusually clear global eligibility. Lead with visual storytelling for technical audiences, identity consistency, decks, conference/event systems, print, social and video; confirm compensation, Spain contract/payroll arrangement and annual off-site expectations during the first call.",
    score: 92,
    tier: "A",
    locationTag: "Worldwide remote",
    typeTag: "Brand storytelling / events / print / digital",
    sourceGroup: "official",
    links: ["https://jobs.ashbyhq.com/supabase/4a85c92b-1d0d-43ee-8dbc-0e45a58be208"],
    searchText: "Supabase official Ashby Brand Designer global remote full time Apply hires globally work from anywhere English visual storytelling decks print events conferences swag social video Figma Adobe brand consistency",
  });
}

const round20ClosedCorrections = [
  {
    id: 1245,
    source: "Kilograph / closed current LinkedIn employer detail",
    status: "Closed/history: the signed-in original LinkedIn employer detail 4437390159 was opened on 2026-08-12. It explicitly says Ya no se aceptan solicitudes. The direct careers@kilograph.com address remains visible in the former brief, but it does not override the named requisition's closed state.",
    analysis: "Preserve the strong Barcelona brand-system, typography, digital/print and visual-storytelling brief as history. Do not present the direct email as a current job application; restore only after Kilograph confirms a new independent opening.",
    score: 24,
    tier: "X",
  },
  {
    id: 930851,
    source: "Luppa / closed current LinkedIn employer detail",
    status: "Closed/history: the signed-in original LinkedIn employer detail 4440135299 was reopened on 2026-08-12 and explicitly says Ya no se aceptan solicitudes. The publisher-message control and the sentence asking for a CV and portfolio do not override that closed status.",
    analysis: "Retain the visual-system and licensed-collection brief as a portfolio benchmark, but remove it from the current Barcelona ranking. Restore only if Luppa publishes a new job ID or confirms that applications have reopened.",
    score: 24,
    tier: "X",
  },
  {
    id: 930859,
    source: "Europastry / stale indexed listing + current exact-search correction",
    status: "Closed/history: a signed-in exact LinkedIn search for Europastry Graphic Designer in Sant Cugat was run on 2026-08-12 and returned no exact match. Europastry's employer talent page exposes no named Graphic Designer vacancy, while the only complete brief remains an archived third-party copy.",
    analysis: "Move the former packaging, print, branding and motion brief from review into history. A readable archive and an old indexed result are not a current application route; restore only after a new employer or LinkedIn job ID appears.",
    score: 24,
    tier: "X",
  },
];

for (const update of round20ClosedCorrections) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) {
    Object.assign(item, update, {
      section: "2026-08-12 Round 20 high-rank recheck and official ATS discovery",
      searchText: [update.source, update.status, update.analysis].join(" "),
    });
  }
}

const skyscannerCurrent = allData.find((item) => Number(item.id) === 930812);
if (skyscannerCurrent) {
  Object.assign(skyscannerCurrent, {
    fit: "Barcelona hybrid senior brand-studio role; global campaigns, visual systems, art direction and multi-channel execution",
    location: "Barcelona, Spain; hybrid; full-time; expected in the office twice per week",
    status: "Current LinkedIn employer detail 4451912620 and official Skyscanner requisition 8121646 were opened on 2026-08-12. The role is active and covers global digital, social, print, OOH and experiential campaigns plus evolution of the visual-design system. It requires about seven years of experience.",
    contact: "Official detail/application: https://www.skyscanner.net/jobs/job/8121646?gh_jid=8121646 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4451912620",
    analysis: "A high-quality direct visual-brand match, but a real senior stretch. Apply only with system-level identity, campaign art direction, typography, layout and multi-market rollout cases; After Effects is a bonus and English is the working language surfaced by the brief.",
    links: [
      "https://www.skyscanner.net/jobs/job/8121646?gh_jid=8121646",
      "https://www.linkedin.com/jobs/view/4451912620",
    ],
  });
}

const dragonsHealthcareCurrent = allData.find((item) => Number(item.id) === 930708);
if (dragonsHealthcareCurrent) {
  Object.assign(dragonsHealthcareCurrent, {
    section: "2026-08-12 current official-detail refresh",
    source: "Dragons Group / official Factorial detail",
    opportunity: "Senior Art Director — Healthcare & Pharma",
    fit: "Barcelona hybrid permanent full-time; regulated healthcare brand systems, integrated campaigns and art direction",
    location: "Barcelona, Spain; hybrid; permanent full-time",
    status: "Official Factorial detail 315359 and its Apply now route were opened and read in full on 2026-08-12. The role is current, permanent, full-time and hybrid in Barcelona. It requires 6–10 years plus significant healthcare, pharma, OTC, wellness or medical-aesthetics experience.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/senior-art-director-healthcare-pharma-315359",
    analysis: "A real current local brand and art-direction opportunity, but healthcare-domain experience is a hard gate. The work spans visual systems and integrated digital, social, print, retail and CRM campaigns, scientific information, brand guidelines, regulatory compliance and photo/video/motion/CGI/AI direction. Fluent English is explicit; other languages are a plus.",
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-art-director-healthcare-pharma-315359",
      "https://dragons-group.factorialhr.com/apply/senior-art-director-healthcare-pharma-315359",
    ],
    searchText: "Dragons Group current official Senior Art Director Healthcare Pharma Barcelona hybrid permanent full-time Factorial 315359 Apply now 6-10 years healthcare pharma OTC wellness medical aesthetics fluent English regulated brand systems campaigns scientific information compliance photo video motion CGI AI",
  });
}

const pepsicoCurrent = allData.find((item) => Number(item.id) === 920001);
if (pepsicoCurrent) {
  Object.assign(pepsicoCurrent, {
    contact: "Official detail/application: https://www.pepsicojobs.com/jobs/464555?lang=en-us ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4440194840",
    status: "Official PepsiCo requisition 464555 and current LinkedIn employer detail 4440194840 were opened on 2026-08-12 and expose an active application route. The Alvalle role owns global brand-design strategy across product architecture, visual identity, packaging and innovation; 4+ years and up to 15% travel are explicit.",
    links: [
      "https://www.pepsicojobs.com/jobs/464555?lang=en-us",
      "https://www.linkedin.com/jobs/view/4440194840",
    ],
  });
}

const kilographCurrent = allData.find((item) => Number(item.id) === 1245);
if (kilographCurrent) {
  Object.assign(kilographCurrent, {
    section: "2026-08-12 current original-detail reactivation",
    source: "Kilograph / current LinkedIn employer detail and direct portfolio email",
    opportunity: "Senior Graphic Designer / Art Director",
    fit: "Barcelona onsite full-time; brand systems, websites, brochures, presentations and visual storytelling; fluent English",
    location: "Barcelona, Spain; onsite; full-time; new Barcelona studio",
    status: "A new current LinkedIn employer detail 4437390159 was opened on 2026-08-12 and shows Solicitar plus a direct portfolio email. It is not the expired mirror checked earlier. The role asks for 3–5+ years, Adobe Creative Suite, Figma and fluent English; Spanish or Catalan is only a plus.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/4437390159 ; direct portfolio email: careers@kilograph.com",
    analysis: "One of this round's strongest exact Barcelona matches. Apply in English with brand-system, typography, digital/print rollout, presentation and architectural/visual-storytelling cases; confirm salary, work permit, onsite rhythm and the new studio's contract entity.",
    score: 94,
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Brand systems / visual storytelling / art direction",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/4437390159", "mailto:careers@kilograph.com"],
    searchText: "Kilograph current Senior Graphic Designer Art Director Barcelona onsite full-time new studio brand systems visual storytelling websites brochures presentations typography Adobe Figma fluent English Spanish Catalan plus direct portfolio email",
  });
}

const dragonsArtDirectorCurrent = allData.find((item) => Number(item.id) === 890);
if (dragonsArtDirectorCurrent) {
  Object.assign(dragonsArtDirectorCurrent, {
    section: "2026-08-12 current official-detail refresh",
    status: "Official Factorial detail 308022 and its Apply now control were opened again on 2026-08-12. The role is permanent, full-time and hybrid in Barcelona; it requires 3–5 years and fluent English, while other languages are only a plus. A fresh LinkedIn employer detail 4449537273 was also visible two days after publication.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/art-director-wellness-lifestyle-308022 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4449537273",
    analysis: "Current and English-friendly, but it is art direction for social, digital, creator and integrated campaigns rather than pure VI execution. Apply with product storytelling, visual narratives, photography/video/motion/CGI/AI direction and campaign systems; confirm salary and office cadence.",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/art-director-wellness-lifestyle-308022",
      "https://dragons-group.factorialhr.com/apply/art-director-wellness-lifestyle-308022",
      "https://www.linkedin.com/jobs/view/4449537273",
    ],
    searchText: "Dragons Group current Art Director wellness lifestyle Barcelona hybrid permanent full-time Factorial 308022 Apply now 3-5 years fluent English social digital creator integrated campaigns product storytelling photography video motion CGI AI",
  });
}

const circleCurrent = allData.find((item) => Number(item.id) === 928);
if (circleCurrent) {
  Object.assign(circleCurrent, {
    section: "2026-08-12 current official-detail refresh",
    status: "Official Greenhouse requisition 5368490008 was opened again on 2026-08-12 and shows Apply plus a complete application form. Circle describes itself as fully remote with team members in 30+ countries and says it seeks people around the world. The role requires 5+ years, English CEFR C2, Figma, Adobe and technology/SaaS/AI brand experience; cash compensation is USD100,000–120,000 per year.",
    analysis: "An excellent exact brand-system match but a senior stretch. Apply with identity evolution, scalable multi-channel systems, product-launch narratives, campaign art direction and motion storyboards; confirm Spain employment/contractor eligibility, localised compensation, tax, benefits and timezone overlap before interviews.",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    searchText: "Circle.so official Greenhouse 5368490008 current Senior Brand Designer worldwide remote Spain eligibility confirm full-time visual identity scalable brand systems product launches campaigns web events presentations video motion AI English C2 5 years Figma Adobe USD 100000 120000",
  });
}

const round14DirectEvidenceUpdates = [
  {
    id: 279,
    section: "2026-08-12 Round 14 original-detail audit",
    status: "A new LinkedIn employer requisition 4448026093 was opened on 2026-08-12 and shows Diseñador/a gráfico/a - web, Barcelona, posted one week ago, onsite, full-time and Solicitar en el sitio web de la empresa. DORTOKA's official role detail, official CV form and direct email remain available.",
    contact: "Current employer detail: https://www.linkedin.com/jobs/view/4448026093 ; official role: https://www.dortoka.com/es/disenador-grafico-web/ ; official board/form: https://www.dortoka.com/es/trabaja-con-nosotros/ ; email: dortoka@dortoka.com",
    analysis: "Current and local, with two or more years requested. The scope covers logos, campaigns, stationery, brochures, posters, websites, catalogues, branding, web, UX/UI, WordPress, ecommerce, HTML/CSS and motion tools. Apply in Spanish or bilingual form and confirm salary, office location and the design-versus-front-end split.",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: [
      "https://www.linkedin.com/jobs/view/4448026093",
      "https://www.dortoka.com/es/disenador-grafico-web/",
      "https://www.dortoka.com/es/trabaja-con-nosotros/",
      "mailto:dortoka@dortoka.com",
    ],
  },
  {
    id: 160,
    section: "2026-08-12 Round 14 original-detail audit",
    status: "The current LinkedIn employer detail 4443321807 was opened on 2026-08-12 and explicitly says Ya no se aceptan solicitudes. The role is no longer actionable.",
    contact: "Closed employer detail: https://www.linkedin.com/jobs/view/4443321807",
    analysis: "Move to closed history. Do not apply through stale mirrors; only restore if Stanley Black & Decker publishes a new requisition.",
    links: ["https://www.linkedin.com/jobs/view/4443321807"],
  },
  {
    id: 930715,
    section: "2026-08-12 Round 14 original-detail audit",
    status: "Sanofi's official Workday requisition R2834888 was opened on 2026-08-12 and says The page you are looking for doesn't exist. The previous LinkedIn vacancy is not a current application route.",
    contact: "Removed official requisition: https://sanofi.wd3.myworkdayjobs.com/SanofiCareers/job/Barcelona/Graphic-Designer_R2834888 ; historical employer detail: https://www.linkedin.com/jobs/view/4395295373",
    analysis: "Move to closed history. Do not count the readable LinkedIn cache as a live vacancy; restore only after a new official Sanofi requisition is verified.",
    links: [
      "https://sanofi.wd3.myworkdayjobs.com/SanofiCareers/job/Barcelona/Graphic-Designer_R2834888",
      "https://www.linkedin.com/jobs/view/4395295373",
    ],
  },
  {
    id: 958,
    section: "2026-08-12 Round 14 original-detail audit",
    status: "Omnicom Health's official Greenhouse requisition 5207339008 was opened on 2026-08-12 and shows Apply, a complete form and Submit application. It is a paid six-month full-time Barcelona internship covering editorial, landing pages, banners, web, social, logos and brand guidelines. Advanced Adobe and English are required, as is a school or university agreement.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/omnicomhealth/jobs/5207339008",
    links: ["https://job-boards.greenhouse.io/omnicomhealth/jobs/5207339008"],
  },
];

for (const update of round14DirectEvidenceUpdates) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) Object.assign(item, update);
}

const round15DirectEvidenceUpdates = [
  {
    id: 1274,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "BRUTALIA / current JOB TODAY original detail",
    opportunity: "Diseñador/a Gráfico/a",
    fit: "Barcelona-local brand and graphic-design route covering campaigns, content, visual coherence and support for the brand team",
    location: "Passatge de Josep Llovera, Sarrià-Sant Gervasi, Barcelona; full-time listing with freelance collaboration wording",
    status: "The original JOB TODAY detail was opened and read on 2026-08-12. It shows Apply now, Barcelona residence as a requirement, occasional Madrid travel, two or more years, mandatory portfolio, immediate start and EUR20,000–24,000 per year. The body describes freelance collaboration with possible continuity while the platform labels it full-time, so contract form must be confirmed.",
    contact: "Original detail/application: https://jobtoday.com/es/trabajo/disenador-a-grafico-a-EG26MZ",
    analysis: "Correct the old Madrid misclassification: the job is based in Barcelona. It is genuinely relevant to brand-world coherence, campaigns and content, but it is old, modestly paid and contract wording is contradictory. Apply only after confirming employment versus freelance terms, weekly hours, invoice/payment treatment and travel expenses.",
    score: 74,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand / graphic / campaigns / content",
    sourceGroup: "official",
    postedAt: "2026-04-02",
    freshnessTag: "older",
    freshnessAgeDays: 132,
    links: ["https://jobtoday.com/es/trabajo/disenador-a-grafico-a-EG26MZ"],
    searchText: "BRUTALIA current original JOB TODAY EG26MZ Diseñador Gráfico Barcelona Sarrià Sant Gervasi Apply now brand campaigns content visual coherence two years portfolio EUR 20000 24000 freelance full-time contradiction occasional Madrid travel",
  },
  {
    id: 397,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "RESIDENCIAL TIBIDABO / Grupo RV / current JOB TODAY original detail",
    opportunity: "Asistente de Diseño",
    fit: "Fresh Barcelona junior-accessible graphic, branding, digital-content, video and motion production role",
    location: "Gran Via de les Corts Catalanes, Barcelona; full-time; onsite near Metro",
    status: "The current original JOB TODAY detail K12Now was opened and read on 2026-08-12. It shows Apply now, a verified employer active two hours ago and a posting age of about eleven hours. Work covers posters, promotional pieces, branding, digital content, video editing, motion graphics and multi-format adaptation. Fluent Spanish and English are both mandatory; salary and contract type are not disclosed.",
    contact: "Original detail/application: https://jobtoday.com/es/trabajo/asistente-de-diseno-K12Now",
    analysis: "Promote the refreshed current route instead of duplicating it. It is more accessible than a senior brand post and accepts study, freelance or internship project evidence, but Spanish is a hard gate and it remains production-heavy rather than VI ownership. Confirm salary, contract, exact hours and work authorisation before applying.",
    score: 80,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Graphic / branding / motion / design assistant",
    sourceGroup: "official",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://jobtoday.com/es/trabajo/asistente-de-diseno-K12Now"],
    searchText: "Residencial Tibidabo Grupo RV current original JOB TODAY K12Now Asistente de Diseño Barcelona full-time onsite Apply now graphic materials branding digital content video motion Spanish English fluent salary contract confirm",
  },
  {
    id: 396,
    section: "2026-08-12 Round 15 original-detail audit",
    status: "The current original JOB TODAY detail 9wP83M was opened again on 2026-08-12. It shows Apply now, Barcelona, full-time, 100% onsite, a verified employer and publication on 2026-08-06. The role covers social and digital campaigns, motion graphics, short video, screens, posters and brand consistency. Fluent Spanish and English plus valid Spain work permission are mandatory.",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 6,
    searchText: "RV Group Rodriguez Villar current original JOB TODAY 9wP83M Junior Motion Graphics Visual Designer Barcelona Apply now 2026-08-06 verified employer full-time onsite Spain work permission fluent Spanish English campaigns video screens brand consistency",
  },
  {
    id: 930705,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "MANGO / current official Workday ATS",
    opportunity: "FASHION ART DIRECTOR",
    fit: "Barcelona-province fashion art-direction route with visual identity, 360 campaigns, retail/VM, ecommerce, editorial and digital brand touchpoints",
    location: "Palau-solità i Plegamans, Barcelona province; full-time; site rhythm to confirm",
    status: "MANGO's official Workday requisition JR128235 was checked again on 2026-08-12. The official route resolves and the current employer result shows Apply, full-time and a complete brief. It requires four to five years in fashion art direction, Adobe tools and fluent English; fluent Spanish is preferred. Salary, contract details and onsite frequency are not disclosed.",
    contact: "Official detail/application: https://mango.wd3.myworkdayjobs.com/en-US/Mango_Work_Your_Passion/job/SENIOR-ART-DIRECTOR_JR128235",
    analysis: "Correct the old 'other region' classification: Palau-solità i Plegamans is in Barcelona province. This is an excellent identity and 360-brand match but a senior fashion stretch and a real commute. Confirm the application form, contract, salary and office rhythm before tailoring the portfolio.",
    score: 100,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Fashion art direction / identity / 360 campaigns / retail",
    sourceGroup: "official",
    links: ["https://mango.wd3.myworkdayjobs.com/en-US/Mango_Work_Your_Passion/job/SENIOR-ART-DIRECTOR_JR128235"],
    searchText: "MANGO current official Workday JR128235 Fashion Art Director Palau-solità i Plegamans Barcelona province Apply full-time visual identity 360 campaign retail visual merchandising ecommerce editorial digital brand four five years fluent English Spanish preferred",
  },
  {
    id: 884,
    section: "2026-08-12 Round 15 original-detail audit",
    searchText: "Dragons Group current official Factorial 308056 Mid Graphic Designer Wellness Healthcare Barcelona hybrid permanent full-time Apply now fluent English digital campaigns social websites presentations brand consistency regulated pharma",
  },
  {
    id: 238,
    section: "2026-08-12 Round 15 original-detail audit",
    source: "Publicis Production / Prodigious / current official careers",
    status: "Publicis Groupe's official requisition 165712 was checked on 2026-08-12. It remains indexed as Art Director, Barcelona, intermediate, hybrid, posted 2026-07-10 and offers an application route. The work covers integrated online/offline campaigns, graphic and motion design, Adobe, Figma and AI; a relevant degree or four-plus years and advanced English are required.",
    contact: "Official detail/application: https://careers.publicisgroupe.com/jobs/165712?lang=en-us ; current employer detail: https://www.linkedin.com/jobs/view/4438326367",
    postedAt: "2026-07-10",
    freshnessTag: "month",
    freshnessAgeDays: 33,
    links: ["https://careers.publicisgroupe.com/jobs/165712?lang=en-us", "https://www.linkedin.com/jobs/view/4438326367"],
    searchText: "Publicis Production Prodigious current official careers 165712 Art Director Barcelona intermediate hybrid 2026-07-10 integrated online offline campaigns graphic motion Adobe Figma AI advanced English four years",
  },
];

for (const update of round15DirectEvidenceUpdates) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) Object.assign(item, update);
}

const ROUND21_SECTION = "2026-08-12 Round 21 high-rank refresh and current replacement";
const round21SourceUpdates = [
  { id: 930813 },
  { id: 296 },
  { id: 175 },
  { id: 930838 },
  { id: 446 },
  { id: 930820 },
  { id: 930834 },
  { id: 425 },
  { id: 4 },
  { id: 1828 },
  { id: 930844 },
  {
    id: 930836,
    source: "CrowdStrike / official Workday ATS + current LinkedIn employer detail",
    opportunity: "Creative Content Designer (Remote)",
    status: "Live/current: CrowdStrike official Workday requisition R29235 and current employer LinkedIn job 4439209874 were reopened on 2026-08-12. Workday shows Apply, Spain - Barcelona and full-time; LinkedIn shows the current title Creative Content Designer (Remote) and a posting four days earlier. The work covers presentation systems, templates, information design, video, motion and brand consistency.",
    contact: "Official detail/application: https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Spain---Barcelona/Content-Developer--Sales-Enablement--Remote-_R29235 ; current employer detail: https://www.linkedin.com/jobs/view/4439209874",
    postedAt: "2026-08-08",
    freshnessTag: "week",
    freshnessAgeDays: 4,
    links: [
      "https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Spain---Barcelona/Content-Developer--Sales-Enablement--Remote-_R29235",
      "https://www.linkedin.com/jobs/view/4439209874",
    ],
  },
  { id: 930837 },
  { id: 930812 },
  { id: 920001 },
  {
    id: 930712,
    source: "VML / official careers + current LinkedIn employer detail",
    opportunity: "ART DIRECTOR",
    fit: "Barcelona hybrid art-direction role owning visual identity and high-impact campaigns; 5–6 years plus English and Catalan are hard gates",
    location: "Barcelona, Spain; hybrid or onsite; VML says teams average four office days per week",
    status: "Live/current: VML official requisition 17276 was opened and read on 2026-08-12. It lists Barcelona, Spain and a current ART DIRECTOR vacancy covering campaign concepts, visual direction, brand identity, Adobe and AI, with Figma, motion and video valued. The role requires 5–6 years of agency art direction plus medium-high English and Catalan.",
    contact: "Official detail/application: https://www.vml.com/careers/job/8634604002-es-art-director ; current LinkedIn employer detail: https://es.linkedin.com/jobs/view/art-director-at-bav-group-m%C3%A9xico-4443713564",
    analysis: "Add to the reviewed Barcelona board because the employer-owned VML page and requisition are current. Keep it in the lower senior-stretch section: the brand/identity scope is strong, but Catalan, 5–6 years of agency leadership and roughly four office days are meaningful barriers.",
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Art direction / visual identity / integrated campaigns",
    sourceGroup: "official",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://www.vml.com/careers/job/8634604002-es-art-director",
      "https://es.linkedin.com/jobs/view/art-director-at-bav-group-m%C3%A9xico-4443713564",
    ],
  },
  {
    id: 930846,
    source: "Kraken / Breakout Prop removed official Ashby requisition",
    status: "Closed/history: Kraken's current official Ashby job-board API was checked on 2026-08-12 and no longer lists requisition 3096a5c6-a4fc-4b09-9953-aefd72d423f3. The former detail URL is preserved, but it is no longer a current application route.",
    analysis: "Remove this former Spain-remote web-and-brand role from the current ranking while preserving its website, landing-page, campaign, guideline, component-library and AI-workflow brief as history. Restore only if Kraken publishes a new official requisition.",
    score: 22,
    tier: "X",
  },
  { id: 930862 },
];

function applyRound21SourceUpdates() {
  for (const update of round21SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND21_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound21SourceUpdates();

const ROUND22_SECTION = "2026-08-12 Round 22 current-source discovery and Chinese refresh";
const round22SourceUpdates = [
  {
    id: 24,
    source: "Casa Asia / HKU Europe official vacancy index and original PDF",
    status: "Live/current but confirm before preparing a full application: Casa Asia's official employment page was reopened on 2026-08-12 and still lists the 21/07/2026 HKU Europe Marketing & Branding Officer PDF. The page and PDF expose a direct application email but no closing date or employer ATS.",
    contact: "Official Casa Asia employment index: https://www.casaasia.eu/empleo-2/ ; original JD PDF: https://static.casaasia.es/2026/07/Marketing-and-Branding-Officer-HKU-Europe-JD-13072026.pdf ; application email: ssoens@hku.hk",
    analysis: "Keep as the clearest current Barcelona Chinese-branding route, but not as a pure VI role. Chinese, English and Spanish are all essential, and the work mixes brand guidelines, website/social/email, campaigns, events, suppliers, data and operational marketing. Send a short availability check first and ask about salary, contract, start date and the proportion of hands-on visual production.",
    links: [
      "https://static.casaasia.es/2026/07/Marketing-and-Branding-Officer-HKU-Europe-JD-13072026.pdf",
      "https://www.casaasia.eu/empleo-2/",
      "mailto:ssoens@hku.hk",
    ],
  },
  { id: 930863 },
  { id: 930864 },
  { id: 930865 },
];

function applyRound22SourceUpdates() {
  for (const update of round22SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND22_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound22SourceUpdates();

const ROUND23_SECTION = "2026-08-12 Round 23 research-library recovery and source correction";
const round23SourceUpdates = [
  {
    id: 1702,
    source: "Lodgify / current official Lever ATS",
    opportunity: "Creative Designer",
    fit: "Europe remote; freelance; brand evolution, omnichannel marketing, Figma systems, illustration and basic motion",
    location: "Europe remote; freelance contract; annual team week in Barcelona",
    status: "Live/current: the official Lever page was reopened on 2026-08-12 and shows Creative Designer, Europe, Remote, Freelance Contract and Apply for this job. It requires 3+ years and strong English. The rate, duration and Spain contractor conditions are not published.",
    contact: "Official detail/application: https://jobs.lever.co/lodgify/f3ab2d95-5a5c-4a60-8c0c-a0f71127ce04",
    analysis: "Recover into the main board as a strong Europe-remote brand-production route. Apply in English with cross-channel brand systems, product explainers, Figma templates and AI-assisted art-direction cases; confirm rate, hours, duration, Spain invoicing and paid leave first.",
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Brand / visual / digital / motion",
    links: ["https://jobs.lever.co/lodgify/f3ab2d95-5a5c-4a60-8c0c-a0f71127ce04"],
  },
  {
    id: 3518,
    source: "Fail Fast Studio / current official role and SEIDOR application",
    opportunity: "Senior Motion Designer",
    fit: "Barcelona hybrid full-time; 2D/3D/AI motion, campaigns, explainers and brand-guideline execution",
    location: "Barcelona, Spain; full-time; hybrid; 5+ years",
    status: "Live/current: the official role page was reopened on 2026-08-12 and shows Barcelona, Full-time, Hybrid, Senior, 5+ years and Apply now. The application routes to SEIDOR requisition 9272. C1/C2 English is required; salary and Spanish requirements are not published.",
    contact: "Official detail: https://www.failfast.design/jobs/senior-motion-designer ; official application: https://www.seidor.com/es-es/talento/empleos/9272",
    analysis: "Recover as a local senior motion stretch. It is relevant to dynamic brand extension, but the 5+ year threshold and advanced 2D/3D/post-production expectations keep it below stronger general brand/graphic roles.",
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Motion / brand extension",
    links: ["https://www.failfast.design/jobs/senior-motion-designer", "https://www.seidor.com/es-es/talento/empleos/9272"],
  },
  {
    id: 483,
    source: "Act Second / current official Workable ATS",
    opportunity: "Senior Associate Designer",
    fit: "Remote part-time; branding, print/digital marketing, web, ecommerce and Figma design systems",
    location: "Remote from Barcelona; part-time; EST business hours; 6+ years",
    status: "Live/current: the official Workable detail was reopened on 2026-08-12 and shows Remote, Barcelona, Part-time, posted two months ago and Apply now. It requires 6+ years, native/fluent English and EST business-hour availability.",
    contact: "Official detail/application: https://jobs.workable.com/view/7GYR1v43NiHw2zNCx1tPqc/remote-senior-associate-designer-in-barcelona-at-act-second",
    analysis: "Refresh the canonical remote senior/part-time option. The brand and Figma-system scope is useful, but six years, EST hours and unclear pay/contract conditions reduce practical fit.",
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Brand / digital / production",
    links: ["https://jobs.workable.com/view/7GYR1v43NiHw2zNCx1tPqc/remote-senior-associate-designer-in-barcelona-at-act-second"],
  },
  {
    id: 2333,
    source: "reboot / current official Europe-remote application",
    opportunity: "Web Designer",
    fit: "Europe remote full-time; end-to-end visual web design for software companies",
    location: "Europe remote; full-time",
    status: "Live/current: the official application page was reopened on 2026-08-12 and lists one design vacancy only: Web Designer, Full-time, Remote (Europe). The page offers a direct portfolio application; salary, experience threshold, Spain entity and language terms are not stated.",
    contact: "Official detail/application: https://reboot.studio/apply",
    analysis: "Use this as the sole canonical reboot opportunity. Recover the real Web Designer role into the main board; close the three old records that invented Visual, Motion and Senior Brand titles from the same URL.",
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Web / digital brand",
    links: ["https://reboot.studio/apply"],
  },
  {
    id: 100,
    source: "TWOJEYS / current official Personio ATS",
    opportunity: "Apparel Graphic Designer",
    fit: "Barcelona permanent full-time; apparel graphics, visual language and production-ready artwork",
    location: "HQ Barcelona; permanent; full-time",
    status: "Live/current: the official Personio page was reopened on 2026-08-12 and shows Apparel Graphic Designer, HQ Barcelona, Full-time, Permanent and Apply. Native or advanced Spanish is an explicit requirement.",
    contact: "Official detail/application: https://twojeys.jobs.personio.com/job/2686782?language=es",
    analysis: "Recover as a real local graphic-design role, but keep below language-accessible brand opportunities because it is apparel/product graphics rather than general VI and has a hard Spanish gate.",
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Apparel graphic / brand production",
    links: ["https://twojeys.jobs.personio.com/job/2686782?language=es"],
  },
  {
    id: 284,
    source: "EuroLeague Basketball / current official Personio ATS",
    opportunity: "Senior Graphic Designer",
    fit: "Barcelona permanent full-time; static/animated social, live sports, campaigns and visual identity",
    location: "Barcelona; permanent; full-time; game-night/weekend rotation; EU travel",
    status: "Live/current: the official Personio page was reopened on 2026-08-12 and shows Senior Graphic Designer, Barcelona, Full-time, Permanent and Apply. It requires 3+ years in sports design, fluent English and EU nationality or a valid Spanish work/residency permit.",
    contact: "Official detail/application: https://euroleague-entertainment-services-slu.jobs.personio.com/job/2713006?language=en",
    analysis: "Refresh the canonical formal local English-role stretch. The brand-consistency work is relevant, but sports specialisation, live reactive content, travel and evening/weekend work lower its fit versus general brand-system roles.",
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Sports graphic / social / motion",
    links: ["https://euroleague-entertainment-services-slu.jobs.personio.com/job/2713006?language=en"],
  },
  {
    id: 78,
    source: "Textura Interiors / current official employer careers",
    opportunity: "Digital Designer",
    fit: "Barcelona; visual identity across digital and physical touchpoints, campaigns, web, email and POS",
    location: "Barcelona; employer email application; work mode and contract to confirm",
    status: "Live/current: the official Textura employer page was reopened on 2026-08-12 and shows a complete Digital Designer brief plus the application email cv@textura-interiors.com. It requires 3+ years, Adobe, HTML email templates and basic UX/UI; salary, contract and language are not stated.",
    contact: "Official detail: https://www.textura-interiors.com/en/pages/trabaja-con-nosotros-digital-designer ; application email: mailto:cv@textura-interiors.com",
    analysis: "Refresh and rank high because the work directly evolves a brand identity into guidelines, campaigns, social, web, landing pages, banners, email and POS. Send a brief availability/language check before tailoring the full portfolio.",
    tier: "A",
    locationTag: "Barcelona area",
    typeTag: "Digital brand / visual identity",
    links: ["https://www.textura-interiors.com/en/pages/trabaja-con-nosotros-digital-designer", "mailto:cv@textura-interiors.com"],
  },
  {
    id: 443,
    source: "DuckDuckGo / current official Ashby ATS",
    opportunity: "Creative Design Lead (Marketing Campaigns)",
    fit: "Spain remote full-time; marketing campaigns, brand language and reusable visual systems",
    location: "Spain remote; full-time; 9+ years",
    status: "Live/current: the official Ashby detail was reopened on 2026-08-12 and lists Spain among eligible remote locations with an active application. The hands-on lead role requires 9+ years and publishes USD 200,267 plus equity.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/duck-duck-go/2b76bbee-43df-48d4-ba9c-e7e0d6827d6a",
    analysis: "Recover as an excellent exact direction but a major seniority stretch. Keep behind realistic mid-level options while preserving its strong campaign, brand-language, Figma and Adobe-system fit.",
    tier: "C",
    locationTag: "Spain remote",
    typeTag: "Creative lead / brand campaigns",
    links: ["https://jobs.ashbyhq.com/duck-duck-go/2b76bbee-43df-48d4-ba9c-e7e0d6827d6a"],
  },
  {
    id: 264,
    status: "Closed/duplicate identity: this is the same current Act Second Workable vacancy as canonical record 483, not an additional opportunity.",
    analysis: "Preserve the research row but use canonical current record 483 for ranking and application.",
    tier: "X",
  },
  {
    id: 1655,
    status: "Closed/duplicate identity: this is the same EuroLeague Personio requisition 2713006 as canonical record 284, not an additional opportunity.",
    analysis: "Preserve the research row but use canonical current record 284 for ranking and application.",
    tier: "X",
  },
  {
    id: 993020,
    status: "Closed/duplicate identity: this is the same Textura Interiors Digital Designer page as canonical record 78, not an additional opportunity.",
    analysis: "Preserve the research row but use canonical current record 78 for ranking and application.",
    tier: "X",
  },
  {
    id: 1031,
    status: "Closed/history: the official Voodoo Ashby route was reopened on 2026-08-12 and now displays Job not found. The former Hole.io UI/UX description is retained only as history.",
    analysis: "Remove from current opportunities. Restore only if Voodoo publishes a new official requisition.",
    tier: "X",
  },
  {
    id: 1040,
    status: "Closed/history: the old Factorial requisition says the vacancy no longer exists, and Roman's current official board was checked on 2026-08-12. It lists other Barcelona marketing/social roles but no Junior Graphic Designer LCDC.",
    analysis: "Do not treat a stale search result as a reopened design vacancy. Preserve the old detail and current employer board as evidence.",
    tier: "X",
  },
  {
    id: 2269,
    status: "Closed/duplicate title correction: reboot's current official page offers Web Designer only. This former Visual Designer label is not an independent vacancy.",
    analysis: "Preserve as duplicate history and use canonical current record 2333.",
    tier: "X",
  },
  {
    id: 2273,
    status: "Closed/duplicate title correction: reboot's current official page offers Web Designer only. This former 2D/3D Motion Designer label is not an independent vacancy.",
    analysis: "Preserve as duplicate history and use canonical current record 2333.",
    tier: "X",
  },
  {
    id: 2334,
    status: "Closed/duplicate title correction: reboot's current official page offers Web Designer only. This former Senior Brand Designer label is not an independent vacancy.",
    analysis: "Preserve as duplicate history and use canonical current record 2333.",
    tier: "X",
  },
  {
    id: 1311,
    status: "Excluded/research-only: TWOJEYS' current Head of Brand role is live, but it is a 5+ year brand-strategy, marketing, team, budget and activation leadership position rather than a hands-on graphic/VI design vacancy.",
    analysis: "Keep its official route in history but exclude it from the design-opportunity main board. Use the separate Apparel Graphic Designer record 100 for the actual current design vacancy.",
    tier: "X",
  },
  {
    id: 1131,
    status: "Excluded/research-only: only a third-party Publipega listing was recovered. It describes remote part-time work for about USD 200 per month and no stable employer ATS or complete employer identity was found.",
    contact: "Third-party evidence only: https://www.publipega.com/empleos/disenador-grafico-spreadit-marketing/",
    analysis: "Preserve as low-pay history. Do not spend application time or personal documents on it without a verified employer domain, contract and materially different pay.",
    tier: "X",
    links: ["https://www.publipega.com/empleos/disenador-grafico-spreadit-marketing/"],
  },
];

function applyRound23SourceUpdates() {
  for (const update of round23SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND23_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound23SourceUpdates();

const ROUND24_SECTION = "2026-08-12 Round 24 official-board reconciliation and requisition-level location audit";
const round24SourceUpdates = [
  {
    id: 147,
    source: "SplitMetrics / official Ashby job-board API and historical detail",
    opportunity: "Senior Visual Designer — closed",
    status: "Closed/history: SplitMetrics' official Ashby job-board API was checked on 2026-08-12. It currently returns four open roles and does not contain requisition 8e164fd9-aec6-4917-89a7-43cdd2e60116 or any Senior Visual Designer role. The direct detail now shows Job not found in the interactive official page; older search-engine text is cached history, not a current application route.",
    contact: "Historical official detail: https://jobs.ashbyhq.com/splitmetrics/8e164fd9-aec6-4917-89a7-43cdd2e60116/ ; current official board data: https://api.ashbyhq.com/posting-api/job-board/splitmetrics",
    analysis: "Remove this role from the current ranking while preserving its visual-identity, performance-campaign, website and design-system brief as portfolio reference. Restore only when SplitMetrics publishes a new official requisition.",
    score: 18,
    tier: "X",
    links: [
      "https://jobs.ashbyhq.com/splitmetrics/8e164fd9-aec6-4917-89a7-43cdd2e60116/",
      "https://api.ashbyhq.com/posting-api/job-board/splitmetrics",
    ],
  },
  {
    id: 173,
    source: "LONBALI / historical LinkedIn employer detail",
    opportunity: "Diseñador/a gráfica — applications closed",
    status: "Closed/history: the original LinkedIn employer detail 4438899857 was reopened on 2026-08-12 and explicitly says applications are no longer being accepted. Preserve the former Barcelona brand-book, ecommerce, retail, packaging and motion brief, but do not treat page availability as an open application.",
    contact: "Historical original detail: https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fica-at-lonbali-4438899857",
    analysis: "Keep only as portfolio and employer-monitoring history. Restore when LONBALI publishes a fresh requisition with a new application route.",
    score: 18,
    tier: "X",
    links: ["https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fica-at-lonbali-4438899857"],
  },
  {
    id: 957,
    source: "10x Team / official Ashby job-board API and historical detail",
    opportunity: "Lead Visual Designer — AI Trainer — closed",
    status: "Closed/history: 10x Team's official Ashby job-board API was checked on 2026-08-12. The current board contains 133 roles but not requisition 2f9bd626-3df1-43eb-93c1-1899649b9fa5 or the former Lead Visual Designer title. Current visual/graphic AI-trainer listings are Poland-only pools and are not Spain vacancies.",
    contact: "Historical official detail: https://jobs.ashbyhq.com/10xteam/2f9bd626-3df1-43eb-93c1-1899649b9fa5 ; current official board data: https://api.ashbyhq.com/posting-api/job-board/10xteam",
    analysis: "Do not count this former AI-training pool as a current visual-design job. Preserve the old rate and contract notes only as history; restore only with a new Spain-eligible official requisition.",
    score: 12,
    tier: "X",
    links: [
      "https://jobs.ashbyhq.com/10xteam/2f9bd626-3df1-43eb-93c1-1899649b9fa5",
      "https://api.ashbyhq.com/posting-api/job-board/10xteam",
    ],
  },
  {
    id: 992,
    source: "Appspace / official Greenhouse job-board API and historical detail",
    opportunity: "Visual Designer — closed",
    status: "Closed/history: Appspace's official Greenhouse job-board API was checked on 2026-08-12. It currently returns 13 open jobs and contains neither requisition 5813989004 nor a Visual Designer role. The old detail redirects to the current board, so cached search snippets are not application evidence.",
    contact: "Historical official detail: https://job-boards.greenhouse.io/appspace/jobs/5813989004?gh_src=Partners+for+Growth+job+board ; current official board: https://job-boards.greenhouse.io/appspace ; current official board data: https://boards-api.greenhouse.io/v1/boards/appspace/jobs?content=true",
    analysis: "Keep the former product-marketing visual brief in history, but remove it from every current or watchlist count until Appspace publishes a new requisition.",
    score: 12,
    tier: "X",
    links: [
      "https://job-boards.greenhouse.io/appspace/jobs/5813989004?gh_src=Partners+for+Growth+job+board",
      "https://job-boards.greenhouse.io/appspace",
      "https://boards-api.greenhouse.io/v1/boards/appspace/jobs?content=true",
    ],
  },
  {
    id: 604,
    source: "Canonical / current official Greenhouse ATS",
    opportunity: "Visual Designer",
    fit: "Strong EMEA-remote brand-guideline, UI design-system and digital-product visual role; English-first; Barcelona residence is compatible subject to Spain employment confirmation",
    location: "Home based - EMEA; Spain eligibility and payroll terms to confirm; international travel twice yearly",
    status: "Live/current: Canonical's official Greenhouse requisition 5326986 was reopened and read in full on 2026-08-12. It shows Apply for this job, Home based - EMEA and a complete application form. The role evolves brand guidelines and applies them to communications materials, a UI design system and graphics for digital products. Professional written and spoken English is required; the application also has unusually detailed academic questions and explicitly requires applicants to use their own words rather than AI-generated answers.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/canonical/jobs/5326986?source=LinkedIn",
    analysis: "Keep as the single Canonical Visual Designer identity and raise it into the high-fit remote brand-system group. Apply in English with brand guidelines, typography, accessibility, web/UI systems and digital-product cases; write every application answer personally and confirm Spain payroll, compensation and work authorisation.",
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Brand guidelines / UI design systems / digital-product visual",
    links: ["https://job-boards.greenhouse.io/canonical/jobs/5326986?source=LinkedIn"],
  },
  {
    id: 930719,
    source: "Adsmurai / current official Teamtailor ATS — Barcelona requisition 8109023",
    status: "Live/current: official Teamtailor requisition 8109023 was reopened on 2026-08-12 and explicitly shows CREATIV_, Barcelona, Hybrid and ENVÍA TU CV. It is a separate requisition from 7993316, which is the Madrid version and must never be merged into this card.",
    contact: "Current Barcelona official detail/application: https://adsmurai.teamtailor.com/jobs/8109023-digital-graphic-designer-they-he-she ; separate Madrid requisition excluded from this card: https://adsmurai.teamtailor.com/jobs/7993316-digital-graphic-designer-they-he-she",
    analysis: "Retain the Barcelona card only. The work covers 360-degree digital campaigns, brand-guideline adaptation, paid/organic social, video, presentations and brochures; fluent Spanish and English plus at least three years remain hard gates.",
    links: ["https://adsmurai.teamtailor.com/jobs/8109023-digital-graphic-designer-they-he-she"],
  },
  {
    id: 930829,
    source: "Raventós Codorníu / current LinkedIn employer detail",
    status: "Live/current: the original LinkedIn employer detail 4440107992 was reopened on 2026-08-12 and shows an active hybrid internship in Sant Sadurní d'Anoia, Barcelona province. It covers packaging, new-brand concepts, offline campaign pieces, multi-market adaptation, final artwork, prepress and renders.",
    analysis: "Keep one card only. The design direction is relevant, but the internship format, Spanish-first brief and commute outside Barcelona city keep it in the lower-priority local group. Confirm school-agreement eligibility, pay, duration, transport and working language before applying.",
  },
];

function applyRound24SourceUpdates() {
  for (const update of round24SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND24_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound24SourceUpdates();

const ROUND25_SECTION = "2026-08-12 Round 25 current-official discovery and search-cache rejection";

[
  {
    id: 930866,
    section: ROUND25_SECTION,
    source: "Preply / current official Ashby ATS",
    opportunity: "UGC Editor (Brand)",
    fit: "Barcelona hybrid full-time; social-first brand video, paid UGC, organic content and AI-assisted editing",
    location: "Barcelona, Spain; hybrid; full-time; relocation package mentioned",
    status: "Live/current: Preply's official Ashby requisition 3b86049e-f2ac-4d98-ad59-e81e4e7b028c was opened and read in full on 2026-08-12. It is listed, shows a complete application route, and identifies Barcelona, Hybrid and FullTime. The role sits in Brand and asks for 2+ years of video-editing experience, CapCut and/or Premiere Pro, advanced English and social-platform fluency. Spanish, German, French, Italian or Polish is only a plus.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/preply/3b86049e-f2ac-4d98-ad59-e81e4e7b028c ; Preply careers route: https://preply.com/en/careers/apply?ashby_jid=3b86049e-f2ac-4d98-ad59-e81e4e7b028c&job_title=UGC%20Editor&job_team=Brand&job_location=Barcelona",
    analysis: "A genuine accessible Barcelona brand-content option, but it is video editing and paid-social performance rather than VI or general graphic design. Apply in English with short-form editing, hooks, captions, creator footage, platform-native pacing and AI-assisted localization; confirm salary, office cadence, relocation eligibility and the proportion of organic versus paid content.",
    score: 82,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Brand UGC / social video / editing",
    sourceGroup: "official",
    postedAt: "2026-07-29",
    freshnessTag: "month",
    freshnessAgeDays: 14,
    links: [
      "https://jobs.ashbyhq.com/preply/3b86049e-f2ac-4d98-ad59-e81e4e7b028c",
      "https://preply.com/en/careers/apply?ashby_jid=3b86049e-f2ac-4d98-ad59-e81e4e7b028c&job_title=UGC%20Editor&job_team=Brand&job_location=Barcelona",
    ],
  },
  {
    id: 930867,
    section: ROUND25_SECTION,
    source: "Fantasy / current official Lever ATS",
    opportunity: "Senior Creative Designer - Marketing",
    fit: "UK/EU remote; branded systems, case-study art direction, motion, campaigns and marketing collateral",
    location: "UK or EU remote; Permalance; Spain is eligible as an EU location",
    status: "Live/current: Fantasy's official Lever requisition e1833bc1-3366-4ab7-9be4-b55f5bd1c6d7 was opened and read in full on 2026-08-12. It shows apply for this job, Remote and an explicit requirement to be located in the UK or EU. The role requires 5+ years across motion, brand and digital, plus strong After Effects, expert Figma, art direction, typography, layout and familiarity with 3D and generative AI.",
    contact: "Official detail/application: https://jobs.lever.co/fantasy/e1833bc1-3366-4ab7-9be4-b55f5bd1c6d7",
    analysis: "A strong exact EU-remote brand-extension opportunity but a senior motion-heavy stretch. Apply in English only if the portfolio can show all three explicit pillars: polished motion, systematic static brand collateral, and editorial case-study presentation. Confirm rate, Permalance terms, weekly hours, Spain invoicing/payroll, leave and timezone overlap.",
    score: 80,
    tier: "B",
    locationTag: "Europe remote",
    typeTag: "Brand systems / motion / campaign / editorial case studies",
    sourceGroup: "official",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: ["https://jobs.lever.co/fantasy/e1833bc1-3366-4ab7-9be4-b55f5bd1c6d7"],
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const round25SourceUpdates = [
  {
    id: 942,
    source: "Co-Star / current official Greenhouse ATS",
    opportunity: "Brand Designer",
    fit: "Worldwide remote freelance; brand systems, campaigns, editorial, web, social, launch assets and asynchronous collaboration",
    location: "Fully remote anywhere; freelance/contract; part-time to start; no travel",
    status: "Live/current: Co-Star's official Greenhouse requisition 6126693004 was reopened and read in full on 2026-08-12. It shows Apply and a complete application form, and explicitly says fully remote anywhere. The role is a senior individual-contributor freelance engagement requiring 5-8 years across brand identity, campaigns, digital and print; motion, illustration and generative tools are useful additions.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/costar/jobs/6126693004",
    analysis: "Recover into the main board as a real global-remote brand-design route. The scope is exact, but 5-8 years, part-time freelance terms and undisclosed rate lower practical fit. Apply in English with identity systems, campaigns, editorial, web/social and launch work; confirm rate, guaranteed hours, duration, Spain invoicing/tax, IP terms, equipment and payment schedule.",
    score: 72,
    tier: "B",
    locationTag: "Worldwide remote",
    typeTag: "Brand identity / campaign / editorial / digital",
    sourceGroup: "official",
    links: ["https://job-boards.greenhouse.io/costar/jobs/6126693004"],
  },
  {
    id: 421,
    source: "JOIN / removed official detail",
    status: "Closed/history: a fresh search-engine summary displayed Barcelona hybrid, salary and an apparently recent update, but the employer's original JOIN detail 16070787 was opened directly on 2026-08-12 and returned HTTP 410 Gone. Search freshness cannot override a removed official application page.",
    contact: "Removed official detail: https://join.com/companies/join/16070787-senior-brand-designer",
    analysis: "Keep the former brand-system brief and salary only as history. Do not apply through mirrors or restore it until JOIN publishes a new requisition with a working original application form.",
    score: 10,
    tier: "X",
    links: ["https://join.com/companies/join/16070787-senior-brand-designer"],
  },
  {
    id: 651,
    source: "Remote / current official Greenhouse board and removed requisitions",
    status: "Closed/history: search and mirror pages still surfaced Senior Brand Designer EMEA, but Remote's official Greenhouse board and API were rechecked on 2026-08-12. The current board no longer contains Brand Design or Senior Brand Designer, and the old requisition routes return to the board with error=true rather than an application form.",
    contact: "Current official board: https://job-boards.greenhouse.io/remotecom ; removed detail routes: https://job-boards.greenhouse.io/remotecom/jobs/7631149003 and https://job-boards.greenhouse.io/remotecom/jobs/7729943003",
    analysis: "Preserve the former EMEA brand-design brief as a watchlist benchmark, but do not count or apply. Restore only when Remote publishes a new official requisition whose detail page and application form both open.",
    score: 10,
    tier: "X",
    links: [
      "https://job-boards.greenhouse.io/remotecom",
      "https://job-boards.greenhouse.io/remotecom/jobs/7631149003",
      "https://job-boards.greenhouse.io/remotecom/jobs/7729943003",
    ],
  },
  {
    id: 930839,
    status: "Live/current: CATORCE's official Greenhouse requisition 4797510008 was reopened on 2026-08-12 and still shows Apply plus a complete application form. It remains one canonical Barcelona card; no duplicate was added in Round 25.",
  },
  { id: 930866 },
  { id: 930867 },
];

function applyRound25SourceUpdates() {
  for (const update of round25SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND25_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound25SourceUpdates();

const ROUND26_SECTION = "2026-08-12 Round 26 historical-corpus reconciliation and current Barcelona recovery";

[
  {
    id: 930868,
    section: ROUND26_SECTION,
    source: "ZABRISKIE STUDIO / GRUPO NATURA / current InfoJobs detail",
    opportunity: "Diseñador/a Gráfico/a Junior",
    fit: "Barcelona packaging, branding, editorial, illustration, final artwork, mockups and AI-assisted concept development",
    location: "Barcelona city; on-site; indefinite full-time",
    status: "Live/current: the original InfoJobs detail i62ce6602174df08577dee1707bf0be was opened and read in full on 2026-08-12. It says published again two days ago, still shows Inscribirme en esta oferta and has an active application route. The role covers packaging, new collection graphics, branding, labels, catalogues, mockups, final artwork, printing and supplier review.",
    contact: "Original detail/application: https://www.infojobs.net/barcelona/disenador-grafico-junior/of-i62ce6602174df08577dee1707bf0be",
    analysis: "A strong junior Barcelona graphic-design recovery with real packaging and brand-production scope. The practical gates are 2+ years, native/bilingual Spanish, intermediate Catalan and English, full on-site work and a EUR20k-27k range. Apply only with packaging, dielines, print-ready files, branding, editorial and mockup cases.",
    score: 79,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Packaging / branding / editorial / illustration",
    sourceGroup: "aggregator",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://www.infojobs.net/barcelona/disenador-grafico-junior/of-i62ce6602174df08577dee1707bf0be"],
  },
  {
    id: 930869,
    section: ROUND26_SECTION,
    source: "NEWEYES TECH S.L. / current InfoJobs detail",
    opportunity: "Diseñador/a multimedia y creador de contenido",
    fit: "Barcelona digital graphics, social content, video, motion, campaign ideation and AI-assisted production",
    location: "Barcelona city; on-site; indefinite full-time",
    status: "Live/current: the original InfoJobs detail i804585b03e499db184a0d6f14716bf was opened and read in full on 2026-08-12. It says published again ten hours ago, still shows Inscribirme en esta oferta and has an active application route. The role covers social content, video editing, digital graphics, campaign planning, CapCut, Adobe and AI tools.",
    contact: "Original detail/application: https://www.infojobs.net/barcelona/disenador-multimedia-creador-contenido/of-i804585b03e499db184a0d6f14716bf",
    analysis: "A current Barcelona content-design backup rather than a core VI role. It requires 2+ years, advanced English, on-site work, social account experience, Adobe, CapCut and comfort appearing on camera; salary is EUR25k-28k. Apply with short-form video, motion, digital campaign and AI-production examples.",
    score: 68,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Digital graphics / social video / motion / content",
    sourceGroup: "aggregator",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://www.infojobs.net/barcelona/disenador-multimedia-creador-contenido/of-i804585b03e499db184a0d6f14716bf"],
  },
  {
    id: 930870,
    section: ROUND26_SECTION,
    source: "FunPlus / current official Factorial detail",
    opportunity: "Graphic Design Intern",
    fit: "Barcelona paid brand and 2D graphic-design internship; English-first; key art, logos, icons, game/brand assets and optional motion",
    location: "Barcelona 08010; hybrid; paid part-time internship; 20 hours/week",
    status: "Live/current: the official FunPlus Factorial detail 293622 was opened and read in full on 2026-08-12. It shows Apply now and describes a paid 20-hour hybrid internship in the Barcelona office. The role creates FunPlus brand and game marketing content, key art, 2D assets, logos, screenshots and icons.",
    contact: "Official detail/application: https://funplus.factorialhr.com/embed/job_posting/graphic-design-intern-293622",
    analysis: "A strong English-accessible junior Barcelona visual-design route if the applicant can sign a university internship agreement. Rank below normal employment because current student status is a hard gate; apply with brand assets, key art, 2D systems, logos/icons and optional motion work.",
    score: 67,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand / 2D graphic design / key art / motion",
    sourceGroup: "other",
    postedAt: "",
    freshnessTag: "month",
    freshnessAgeDays: null,
    links: ["https://funplus.factorialhr.com/embed/job_posting/graphic-design-intern-293622"],
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const round26SourceUpdates = [
  {
    id: 886,
    source: "JUNGLE / MeMe / current official Factorial board and LinkedIn detail",
    status: "Live/current: the employer's current Factorial board and specific LinkedIn detail 4441503440 were checked on 2026-08-12. The Barcelona role remains open with Solicitar/Inscríbete, an indefinite full-time contract, C/ Álava 111 and a published EUR23k-28k salary band. It combines art direction, graphic design, logos, supers, boards, presentations, short-form video, Adobe, CapCut/Premiere and generative AI.",
    analysis: "Recover as a current secondary Barcelona visual-content role. It is social-first rather than VI ownership, and the Spanish-first workflow must be confirmed, but the hands-on design/video scope, salary and application route are concrete.",
  },
  {
    id: 930711,
    source: "JUNGLE / MeMe / current official Factorial board and LinkedIn detail",
    status: "Live/current: the employer's current Factorial board and specific LinkedIn detail 4441035715 were checked on 2026-08-12. The Barcelona role remains open with Solicitar/Inscríbete, an indefinite full-time contract and C/ Álava 111. It creates trend-led ideas, social formats, presentations, memes, short-form video and brand content; real bilingual English is stated.",
    analysis: "Recover only as a secondary social-creative route. The role is more ideas, copy, community and fast content than graphic/VI design, so it stays below hands-on brand and visual-production jobs.",
  },
  {
    id: 456,
    source: "CBA Design Spain / current official speculative-application form",
    status: "Needs verification / proactive route: CBA Spain's official site currently exposes a working CV and portfolio application form and says it is always looking for new talent. Its office is at Calle Bolivia 68-70, 08018 Barcelona, but no specific open vacancy, salary, contract or language requirement is published.",
    analysis: "Keep as a low-priority Barcelona brand/VI studio route, clearly labelled as a speculative application rather than an active vacancy. The portfolio fit is excellent—visual identity, packaging, digital, motion and brand guidelines—but send a concise availability inquiry before investing in a tailored application.",
  },
  {
    id: 930870,
  },
  {
    id: 313,
    source: "Mapit IoT / current original LinkedIn employer detail",
    status: "Live/current: the original LinkedIn employer detail 4437788118 was opened and read in full on 2026-08-12. It still shows a specific Barcelona full-time Marketing Designer vacancy and an application route. The role owns Mapit's visual identity, cross-market brand assets, email, landing pages, co-branding, campaigns, AI workflows, brand guides and prompts.",
    analysis: "Recover into the main board as a strong Barcelona brand-system role, but keep it below language-accessible jobs: 5+ years, native Spanish and English B2 are hard gates.",
  },
  {
    id: 908,
    source: "Top Doctors Group / current official Teamtailor detail",
    status: "Live/current: the official Teamtailor detail 8050312 was opened and read in full on 2026-08-12. It still shows Enviar solicitud, Barcelona hybrid, full-time and EUR22,000-24,000. The work owns multi-brand visual consistency across campaigns, social, email, landing pages, presentations, events, employer branding and light audiovisual production.",
    analysis: "Recover as a real Barcelona brand/marketing-design route. The scope is exact, but 3+ years, Spanish-first workflow and low published salary reduce priority.",
  },
  {
    id: 930718,
    source: "Capitole / current original LinkedIn employer detail",
    status: "Live/current: LinkedIn employer detail 4438065600 was opened and its JobPosting data read on 2026-08-12. It lists Email Designer, Barcelona area, full-time, posted 2026-07-15 and a current application route. The role builds responsive email assets, evolves an email design system, designs in Figma and maintains visual brand consistency.",
    analysis: "Recover as a specialised digital-brand route. It is more HTML/CSS, AMPscript and Salesforce Marketing Cloud than general graphic design, so rank below broader brand/VI jobs.",
  },
  {
    id: 867,
    status: "Live/current: LinkedIn employer detail 4440457390 was opened and its JobPosting data read on 2026-08-12. It lists Creative Motion Grapher, Sant Cugat del Vallès, hybrid, posted 2026-07-29 and an active application route. The work covers 2D/3D motion, brand campaigns, identity-aligned animation, performance assets and AI workflows.",
  },
  {
    id: 863,
    status: "Live/current: LinkedIn employer detail 4436341060 was opened and its JobPosting data read on 2026-08-12. It lists TÈCNIC/A DISSENY GRÀFIC DIGITAL in Olèrdola, posted 2026-07-24, with an active application route. The role covers paid campaigns, social, newsletters, short video, motion and digital brand consistency; the office requires a car and the six-month contract may extend to one year.",
  },
  {
    id: 856,
    status: "Live/current: LinkedIn employer detail 4442614068 was opened and its JobPosting data read on 2026-08-12. It lists a full-time indefinite on-site Graphic Designer in Castellgalí, posted 2026-07-21, salary EUR23,000 and an active application route. Work covers retail, e-commerce, campaigns, newsletters, banners, landing pages, video and final artwork.",
  },
  {
    id: 1092,
    source: "Codeway / current official Ashby ATS",
    status: "Live/current: Codeway's official Ashby board and requisition d62c23b7-34cc-494a-8d43-38ea8338f01d were read on 2026-08-12. It lists Marketing Artist - Dramapops, Barcelona hybrid, full-time, posted 2026-07-06 and a complete application route. The work is paid-social video, motion, AI video and performance creative for Meta, TikTok and YouTube.",
    analysis: "Recover as a current Barcelona motion/performance-design route. It is social acquisition rather than VI, but needs only 2+ years and offers visa/relocation support.",
  },
  {
    id: 1098,
    source: "Codeway / current official Ashby ATS",
    status: "Live/current: Codeway's official Ashby board and requisition c59cd8a0-9c94-420d-9c0e-7f8ea392d6b3 were read on 2026-08-12. It lists Senior Creative Marketing Manager, Barcelona hybrid, full-time, posted 2026-07-09 and a complete application route. The role owns creative strategy, paid-social concepts, testing systems, AI production and creative-team workflows.",
    analysis: "Keep as a senior stretch only: it requires 4-5+ years and a performance-marketing track record, and is not a pure hands-on graphic/VI role.",
  },
  {
    id: 275,
    source: "Factorial / current original LinkedIn employer detail",
    status: "Live/current: LinkedIn employer detail 4429234870 was opened and its JobPosting data read on 2026-08-12. It lists Creative Lead/Strategy - Paid Acquisition, Barcelona on-site, full-time, posted 2026-07-29 and an active application route. It leads designers, video editors and AI artists and requires 5+ years plus fluent English.",
    analysis: "Recover as an English-accessible Barcelona creative-lead stretch, but rank below individual-contributor design roles because the job is performance strategy and team leadership.",
  },
  {
    id: 352,
    source: "Blank Studio Creative S.L. / current official careers",
    status: "Live/current: the official Junior 3D Designer detail was opened and read in full on 2026-08-12. It still shows Barcelona, full-time, remote-friendly and an application email. The role creates 3D product and packaging visuals, brand worlds, campaign renders, mockups and production handoffs for beauty and lifestyle clients.",
    analysis: "Recover as a junior 3D/brand-visual route. It is not general VI, but packaging, product visualization and brand-world work are relevant; confirm salary, remote cadence and whether the email subject typo affects routing.",
  },
  {
    id: 877,
    status: "Live/current: the original Job Today detail 6g3oVr was opened and read in full on 2026-08-12. It was posted 2026-08-06, still shows Inscríbete and covers packaging artwork, legal text, braille, barcodes, prepress, production coordination and sustainable packaging in Cerdanyola del Vallès.",
    analysis: "Recover as a lower-priority packaging-production option. The EUR12.78/hour temporary contract and final-art focus are major tradeoffs, but the location and application route are real.",
  },
  {
    id: 1253,
    source: "TheBusinessLook BCN / specific LinkedIn detail and direct email",
    status: "Needs verification: the specific LinkedIn detail 4409160871 still exposes the full Barcelona part-time Junior Graphic Designer brief and the direct application email juanca@businesslookbcn.com, but it is about three months old and no longer shows a platform apply button. Current headcount must be confirmed before applying.",
    analysis: "Keep in the main board as a verify-first direct-contact lead, not as confirmed live. The junior scope is useful—catalogues, web banners, social, newsletters, presentations and product support—but send a short availability check before preparing a tailored application.",
  },
  {
    id: 372,
    source: "Molin AI / current original LinkedIn employer detail",
    status: "Live/current: LinkedIn employer detail 4429533464 was opened and its JobPosting data read on 2026-08-12. It lists Social & Creative Content Creator, Barcelona, contractor, posted 2026-06-24 and an active application route. The work is in-person concepting, filming, editing and fast publishing across LinkedIn, X, YouTube, TikTok and Instagram.",
    analysis: "Recover only as a secondary social/video option. It is a contractor creator role, requires frequent founder filming and event travel, and is not a core brand-identity job.",
  },
  {
    id: 868,
    status: "Needs verification: LinkedIn detail 4425688048 still exposes the full Video Maker vacancy, Barcelona, full-time, posted about three weeks ago, with 3+ years and fluent Spanish plus English. However, the public page does not expose a current apply button or employer ATS route, so the submission path must be confirmed before applying.",
    analysis: "Retain as a verify-first healthcare-brand motion lead. The audiovisual scope is real and relevant, but language and application-route friction lower priority.",
  },
  {
    id: 854,
    source: "Netenders / Wordans / current original LinkedIn employer detail",
    status: "Live/current: LinkedIn employer detail 4421389114 was opened and its JobPosting data read on 2026-08-12. It still lists T-shirt Designers for High-Volume E-commerce, Barcelona, posted 2026-05-31 and an application route. The brief asks for print-ready apparel graphics, typography, mockups and commercial iteration.",
    analysis: "Recover as a narrow apparel/e-commerce graphic route. The metadata says full-time while the body says freelance designers, and pay is undisclosed; confirm contract, volume, rate and IP before doing any test.",
  },
  {
    id: 633,
    source: "Puig / Carolina Herrera Makeup / current official careers",
    status: "Live/current: Puig's official requisition 1407487333 was opened and read in full on 2026-08-12. It still shows Apply now, Barcelona and a one-year Image & 360 Makeup Graduate programme. The role supports global image campaigns, visual research, moodboards, toolkits, production and 360 asset rollout across retail, e-commerce, social, CRM and PR.",
    analysis: "Recover as a brand-image graduate opportunity, not a pure designer role. It requires recent graduate/Master status, fluent English and Spanish, and mixes creative support with project coordination.",
  },
  {
    id: 1053,
    source: "DDB Spain / current official Greenhouse ATS",
    status: "Live/current: DDB Spain's official Greenhouse board was checked on 2026-08-12 and requisition 5096089008 remains listed in Barcelona with a direct application route. The role is Social Media Content Creator, so it belongs only in the secondary content group.",
    analysis: "Recover at low priority as a current Barcelona social-content route, not a core graphic/VI opportunity.",
  },
  {
    id: 1094,
    source: "CATORCE / DDB Group / current official Greenhouse ATS",
    status: "Live/current: CATORCE's official Greenhouse board and requisition 5215625008 were opened and read on 2026-08-12. It lists Creative Director - Spain Hub, Barcelona and a direct application route. The role adapts global CUPRA/SEAT campaigns and leads copywriters and art directors.",
    analysis: "Keep only as a very high-bar stretch: it requires at least 10 years in agencies, 3-4 years as Creative Director, and perfect Spanish and English.",
  },
  { id: 930868 },
  { id: 930869 },
  {
    id: 253,
    status: "Closed/history: the specific LinkedIn text is still indexed, but the matching FashionUnited vacancy explicitly says it no longer accepts applications and no current employer ATS route can be validated on 2026-08-12.",
    tier: "X",
  },
  {
    id: 376,
    status: "Excluded/current: the official eDreams ODIGEO role is live in Barcelona, but it is an SEO/editorial/copywriting position requiring native or fully bilingual French. Visual work is limited to simple Canva/CapCut adaptations, so it is outside the target design scope.",
    tier: "X",
  },
  { id: 1088, status: "Excluded/current: Product Design Director is a senior product-leadership role, not brand, graphic or visual communication design.", tier: "X" },
  { id: 613, status: "Excluded/current: the Oasis Roots role is primarily marketing and operations rather than a hands-on design vacancy.", tier: "X" },
  { id: 644, status: "Excluded/current: the Oasis Roots role is primarily marketing and operations rather than a hands-on design vacancy.", tier: "X" },
  { id: 1100, status: "Excluded/current: LABHOUSE UI/UX Artist is a game-interface/product-art role rather than brand or graphic communication design.", tier: "X" },
  { id: 1266, status: "Excluded/current: Coty's internship is e-commerce SEO and product-content operations; graphic design is not the core responsibility.", tier: "X" },
  { id: 6, status: "Excluded/current: the current Nacar vacancy is Senior UX Designer and falls outside the brand/graphic/VI target.", tier: "X" },
  { id: 635, status: "Excluded/current: TOUS exposes only a generic join-us application, with no specific design vacancy to evaluate.", tier: "X" },
  { id: 422, status: "Excluded/current: Construction & Design Manager concerns store construction/project delivery, not graphic or brand design.", tier: "X" },
  { id: 900, status: "Closed/history: the LinkedIn job URL now resolves to generic search rather than the Experis Creative Designer detail, so no current application can be validated.", tier: "X" },
  { id: 1034, status: "Excluded/current: SearchApi's role is frontend engineering plus UI and is limited to Lithuania, not Spain/Europe-wide remote.", tier: "X", location: "Lithuania only" },
  { id: 1089, status: "Excluded/current: Perk Staff Product Designer is a senior product-design role, not brand, graphic or visual communication design.", tier: "X" },
  {
    id: 857,
    status: "Closed/history: LinkedIn job 1215063575 is an old historical requisition and no current employer application route can be validated. Do not count the editorial graphic-designer brief as current.",
    tier: "X",
  },
  {
    id: 961,
    status: "Closed/history: SplitMetrics' official Ashby board was checked through its current posting API on 2026-08-12 and no Senior Visual Designer role is listed. The old detail now opens only a generic Jobs shell rather than a current application.",
    tier: "X",
  },
  { id: 423, status: "Closed/history: the original JOIN detail returned HTTP 410 Gone on 2026-08-12; no application remains.", tier: "X" },
  { id: 930714, status: "Closed/history: the InfoJobs detail was read on 2026-08-12 and explicitly says No se aceptan más candidaturas para esta oferta.", tier: "X" },
  { id: 930713, status: "Closed/history: the InfoJobs detail was read on 2026-08-12 and explicitly says No se aceptan más candidaturas para esta oferta.", tier: "X" },
  { id: 69, status: "Closed/history: the employer careers detail returned HTTP 404 on 2026-08-12; no current application remains.", tier: "X" },
  { id: 70, status: "Closed/history: the original Teamtailor detail returned HTTP 410 Gone on 2026-08-12; no current application remains.", tier: "X" },
  { id: 453, status: "Closed/history: the dated Domestika detail still opens but exposes no application route and is no longer accepting applications.", tier: "X" },
  { id: 834, status: "Closed/history: the Twine detail was read on 2026-08-12 and explicitly says No longer accepting applications.", tier: "X" },
  { id: 995, status: "Closed/history: the original Greenhouse detail returned HTTP 404 on 2026-08-12; no current application remains.", tier: "X" },
  { id: 350, status: "Closed/history: the original JOIN detail returned HTTP 410 Gone on 2026-08-12; no current application remains.", tier: "X" },
  { id: 561, status: "Closed/history: the ACCIÓ vacancy detail returned HTTP 404 on 2026-08-12; no current application remains.", tier: "X" },
  { id: 912, status: "Closed/history: the original Lever detail returned HTTP 404 on 2026-08-12; no current application remains.", tier: "X" },
  { id: 5, status: "Closed/history: the original Recruitee detail returned HTTP 404 on 2026-08-12; no current application remains.", tier: "X" },
  { id: 1095, status: "Closed/history: DDB Spain's current official Greenhouse board no longer lists requisition 5229086008 on 2026-08-12.", tier: "X" },
  { id: 1033, status: "Excluded/current: Ashby's official posting API lists this EU Design Engineer role in Portugal, not Spain or Europe-wide remote. It is also a frontend engineering role rather than brand/visual design.", tier: "X", location: "Portugal only; remote within that location" },
  { id: 907, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the ELADIET vacancy; no current application can be validated.", tier: "X" },
  { id: 904, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the Wall Street English vacancy; no current application can be validated.", tier: "X" },
  { id: 895, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the KOROSHI vacancy; no current application can be validated.", tier: "X" },
  { id: 431, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the Enso vacancy; no current application can be validated.", tier: "X" },
  { id: 262, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the COCUNAT vacancy; no current application can be validated.", tier: "X" },
  { id: 373, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the YouPlanet vacancy; no current application can be validated.", tier: "X" },
  { id: 899, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the Brand & Visual Designer vacancy; no current application can be validated.", tier: "X" },
  { id: 888, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the Mindrift vacancy; no current application can be validated.", tier: "X" },
  { id: 873, status: "Closed/history: the LinkedIn URL now resolves to a generic job search rather than the Talent-R vacancy; no current application can be validated.", tier: "X" },
  { id: 232, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the Fluidra vacancy; no current application can be validated.", tier: "X" },
  { id: 233, status: "Closed/history: the LinkedIn URL now resolves to a generic Spanish job search rather than the LONBALI vacancy; no current application can be validated.", tier: "X" },
];

function applyRound26SourceUpdates() {
  for (const update of round26SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND26_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound26SourceUpdates();

const ROUND27_SECTION = "2026-08-12 Round 27 complete historical-candidate disposition";

// These records have a current employer/original detail or official ATS route
// and are relevant enough to return to the ranked board. `verify` means the
// role is useful but one decisive condition (application route, Spain
// eligibility, contract or freshness) still needs confirmation.
const ROUND27_LIVE_IDS = Object.freeze([
  1287, 142, 454, 996, 1021, 1026, 1257, 1310, 930871, 327, 345, 1264, 105, 330,
  1049, 1299, 141, 649, 654, 979, 1024, 1025, 1248, 579, 1258, 581, 860, 1036,
  1061, 294, 317, 1002, 1093, 1262, 848, 537,
]);
const ROUND27_VERIFY_IDS = Object.freeze([
  382, 1243, 213, 136, 1237, 1249, 1288, 864, 336, 990, 130, 214, 1238,
]);
const ROUND27_REVIEW_LIBRARY_IDS = Object.freeze([
  1252, 843, 1022, 457, 849, 370, 945, 1000, 997, 197, 199, 1261,
]);

const ROUND27_ARCHIVE_REASONS = new Map([
  [355, "Official studio page is only a general portfolio intake; it does not publish a current vacancy, pay, contract or language requirements."],
  [1013, "Duplicate of the same current Finary freelance Senior Brand Designer already represented by canonical card 930848."],
  [1047, "Current role, but it is a TikTok Shop creative-strategy and performance-marketing position rather than a hands-on brand/graphic design vacancy."],
  [1316, "The old LinkedIn detail remains indexed, but the employer's current careers board does not list this Graphic Designer DTP vacancy."],
  [1317, "Remote role requires professional fluency in both Italian and English; it is not an accessible Spain/Europe design route for this search."],
  [574, "Generic chamber CV channel for internationalisation and business programmes; no specific brand, visual or graphic-design vacancy is published."],
  [999, "Game-studio Art Director leadership role; the work is game art and team management, not brand/VI or communication design."],
  [338, "The advertised mid-July 2026 internship start has passed and no fresh employer vacancy or application route was confirmed."],
  [594, "Fashion/apparel product-design role for collection development; outside the target brand, graphic and visual-communication scope."],
  [571, "Old January listing with no fresh employer application evidence; retained only as historical employer research."],
  [44, "Old March Domestika listing with no verified current application route."],
  [98, "Duplicate Hostinger identity; the current official role is already represented by canonical card 305."],
  [121, "Duplicate/stale HAAN internship identity; the previously audited canonical vacancy is already preserved in history."],
  [179, "Duplicate Alea internship identity; the same opportunity is already represented by canonical card 37."],
  [222, "UI/product-design role rather than brand, graphic or visual-communication design."],
  [250, "Older MiiN listing with no current employer application route; do not count it as open."],
  [353, "Official page explicitly says the studio is not hiring full-time and accepts portfolios only for possible future collaborations."],
  [530, "Official Morillas page currently shows zero positions; a generic talent email is not a current vacancy."],
  [941, "Official route excludes this search's geography; preserve only as a US-remote exclusion record."],
  [1052, "Community-management/content role rather than a hands-on design vacancy."],
  [1282, "Senior visual product-design role; product UX is outside the core brand/graphic brief."],
  [1284, "Senior product-design/design-system role; outside the core brand/graphic brief."],
  [1313, "LinkedIn text remains visible, but Natulim's current official Factorial board does not list the Senior Packaging Designer requisition."],
  [198, "Old Domestika senior listing with no fresh employer or ATS application evidence."],
  [366, "Six-month-old Morillas hiring post and the current official site shows no open position."],
  [392, "Brand Content Manager is a fashion content/editorial role, not a hands-on design vacancy."],
  [570, "Old February Behance listing with no verified current application route."],
  [998, "Product Designer role for app/browser-extension flows; outside the brand/graphic target."],
  [17, "Official application requires native Russian, creating a hard language gate outside this search's usable routes."],
  [219, "UI/product-design vacancy rather than brand, VI or graphic communication."],
  [53, "Barcelona studio research route with no current vacancy or recruitment form."],
  [282, "Mobile-game Product Artist role; outside the brand/graphic communication target."],
  [285, "Brand marketing executive role rather than a hands-on designer vacancy; the separate EuroLeague design role is already represented."],
  [1251, "Part-time printing and vinyl-installation assistant role; production labour rather than a graphic-design vacancy."],
  [50, "Official page explicitly states there are no vacancies; portfolio email is retained only as historical outreach research."],
  [967, "Senior marketplace Product Designer role; outside the brand/graphic target despite being current in Barcelona."],
]);

const round27SourceUpdates = [
  {
    id: 930871,
    source: "Familia Torres / current employer-origin LinkedIn detail",
    opportunity: "Diseñador/a gráfico/a / Graphic Designer",
    fit: "Brand creation, logos, wine and spirits labels, illustration, packaging, campaigns and physical/digital brand activation",
    location: "Vilafranca del Penedès, Barcelona province; stable full-time position",
    status: "Live/current: the employer-origin LinkedIn detail 4400269724 was opened and read on 2026-08-12. It still shows Solicitar, a full-time stable position and a complete role brief. The vacancy covers new brands and products, logos, labels, illustration, packaging, campaigns and production coordination.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-at-familia-torres-4400269724",
    analysis: "One of the strongest recovered Barcelona-province brand/packaging roles. It asks for 2-3 years, advanced Photoshop/Illustrator/InDesign and high English; Spanish is not separately stated in the brief, but the working environment should be confirmed. The office is Vilafranca del Penedès, not Barcelona city.",
    score: 83,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Brand identity / packaging / labels / campaigns",
    sourceGroup: "other",
    links: ["https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-at-familia-torres-4400269724"],
  },
  {
    id: 214,
    source: "REDLINE MEDIA / current employer-origin LinkedIn detail",
    status: "Needs verification: the original LinkedIn detail 4385876513 was opened and read on 2026-08-12 and still exposes the full Barcelona vacancy, posted about two weeks earlier. It explicitly requires standard Mandarin and Spanish B1+, but the public page does not expose a stable application button, salary, contract or internship agreement.",
    analysis: "Recover as a Chinese-language secondary opportunity, not as a core VI role. The work is on-camera short-form content, social account support, food promotion and brand interviews near L2 Sant Roc. Confirm application contact, pay, contract, hours and whether on-camera work is mandatory before applying.",
  },
  {
    id: 141,
    source: "Minsk.Barcelona / current employer-origin LinkedIn detail",
    status: "Live/current: the original LinkedIn detail 4436715010 was opened and read on 2026-08-12. It shows a current junior Barcelona vacancy covering branding, campaigns, graphic, web, digital and motion work, 38.5 hours/week, initially on-site with possible hybrid work later.",
    analysis: "Strong junior scope but a hard local-language gate: both Catalan and Spanish are requested, while English is only useful for international clients. Salary is discussed only at interview. Keep it visible but low-ranked unless both local languages are workable.",
  },
  {
    id: 454,
    status: "Live/current professional opportunity: ADG-FAD's employer-origin announcement was read on 2026-08-12 and accepts proposals until 16 September 2026 for the paid Laus 2027 campaign commission. Professional ADG membership is a hard eligibility gate; this is a commission, not employment.",
    analysis: "Keep as a separately labelled paid design opportunity. It is relevant to campaign identity and art direction, but should never be presented as a salaried vacancy.",
  },
];

function applyRound27SourceUpdates() {
  const reviewedIds = new Set([
    ...ROUND27_LIVE_IDS,
    ...ROUND27_VERIFY_IDS,
    ...ROUND27_REVIEW_LIBRARY_IDS,
    ...ROUND27_ARCHIVE_REASONS.keys(),
  ]);
  for (const item of allData) {
    if (reviewedIds.has(Number(item.id))) item.section = ROUND27_SECTION;
  }
  for (const update of round27SourceUpdates) {
    const item = allData.find((record) => Number(record.id) === update.id);
    if (item) Object.assign(item, update, { section: ROUND27_SECTION });
  }
  for (const [id, reason] of ROUND27_ARCHIVE_REASONS) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    Object.assign(item, {
      status: `Closed/history: ${reason}`,
      analysis: "Preserved in the historical library so the lead is not silently deleted or counted as currently usable.",
      tier: "X",
      section: ROUND27_SECTION,
    });
  }
  for (const item of allData) {
    if (!reviewedIds.has(Number(item.id))) continue;
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound27SourceUpdates();

const ROUND28_SECTION = "2026-08-12 Round 28 Barcelona original-detail discovery and false-positive cleanup";

function applyRound28SourceUpdates() {
  const staleJobgetherSeniorBrand = allData.find((item) => Number(item.id) === 955);
  if (staleJobgetherSeniorBrand) {
    Object.assign(staleJobgetherSeniorBrand, {
      section: ROUND28_SECTION,
      status: "Closed/history: the original Jobgether Lever requisition 300a0d90-f55c-464f-9e11-1ad42a44de29 was reopened on 2026-08-12 and returns HTTP 404. A search-result snapshot is not evidence of a current application route.",
      analysis: "Preserve the anonymous-employer lead in history, but do not count or apply to it. Restore only if a new employer or intermediary original page opens with a working application and discloses the Spain contract conditions.",
      tier: "X",
    });
    staleJobgetherSeniorBrand.searchText = [
      staleJobgetherSeniorBrand.source,
      staleJobgetherSeniorBrand.opportunity,
      staleJobgetherSeniorBrand.fit,
      staleJobgetherSeniorBrand.location,
      staleJobgetherSeniorBrand.status,
      staleJobgetherSeniorBrand.contact,
      staleJobgetherSeniorBrand.analysis,
    ].filter(Boolean).join(" ");
  }

  for (const id of [930873, 930874, 930875]) {
    const item = allData.find((record) => Number(record.id) === id);
    if (item) item.section = ROUND28_SECTION;
  }
}

applyRound28SourceUpdates();

const ROUND29_SECTION = "2026-08-12 Round 29 reopened official roles and Barcelona source-board audit";

function applyRound29SourceUpdates() {
  const reopenedPapernest = allData.find((item) => Number(item.id) === 407);
  if (reopenedPapernest) {
    Object.assign(reopenedPapernest, {
      section: ROUND29_SECTION,
      source: "papernest / current official Teamtailor ATS",
      opportunity: "Graphic Designer Internship / Brand Design Intern",
      fit: "Barcelona hybrid six-month internship; visual-identity redesign, guidelines, illustration, iconography and multi-channel brand assets",
      location: "Barcelona city; hybrid with one remote day weekly; six-month internship beginning in October",
      status: "Live/reopened: papernest's official Teamtailor detail 7535382 was reopened on 2026-08-12. It now shows Join us, Barcelona, Hybrid, Internship and a loading application form. This same requisition had explicitly shown filled/expired on 2026-08-09, so the history is preserved as a genuine closed-to-reopened state change rather than silently overwritten.",
      contact: "Current official detail/application: https://careers.papernest.com/jobs/7535382-graphic-designer-internship-barcelona ; official jobs board: https://careers.papernest.com/jobs",
      analysis: "One of the clearest English-friendly junior brand-design routes in Barcelona: the work includes visual-identity evolution, guideline/icon/illustration updates, presentations, brochures, social, print, acquisition, email and corporate assets. It requires current student status and a six-month internship; pay is EUR800/month and the hiring process includes a practical case. Confirm internship-agreement eligibility and test scope before applying.",
      score: 72,
      tier: "B",
      locationTag: "Barcelona area",
      typeTag: "Brand identity / guidelines / visual assets internship",
      sourceGroup: "official",
      postedAt: "",
      freshnessTag: "week",
      freshnessAgeDays: null,
      links: [
        "https://careers.papernest.com/jobs/7535382-graphic-designer-internship-barcelona",
        "https://careers.papernest.com/jobs",
      ],
    });
  }

  for (const id of [407, 930876, 930877]) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    item.section = ROUND29_SECTION;
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound29SourceUpdates();

const ROUND30_SECTION = "2026-08-12 Round 30 direct-route reconciliation and Chinese-source rescan";

function applyRound30SourceUpdates() {
  const updates = new Map([
    [
      1241,
      {
        section: ROUND30_SECTION,
        status: "Closed/history: both known Cal Fruitós LinkedIn requisitions (4404037331 and 4419152038) were requested directly on 2026-08-12 and redirect to a generic LinkedIn search with trk=expired_jd_redirect. The employer-owned Bizneo board is reachable but lists only franchise and shop-assistant vacancies, not the graphic-and-packaging role.",
        analysis: "Keep the excellent brand, packaging, POS and production brief as a portfolio benchmark, but do not count or apply to it. Restore only if Cal Fruitós republishes a named design requisition on its own jobs board or a fresh LinkedIn ID reaches an exact application page.",
        tier: "X",
      },
    ],
    [
      905,
      {
        section: ROUND30_SECTION,
        status: "Closed/history: a cached LinkedIn rendering still shows the former Steneg Graphic Designer description, but a direct request to requisition 4357596568 on 2026-08-12 returns HTTP 404 and no longer contains the job ID or application control. The industrial end-client also remains undisclosed.",
        analysis: "Preserve the detailed brand-governance, packaging and workflow brief in history. Do not send sensitive documents to the anonymous client or recruiter unless a new exact requisition opens and the legal employer, office, contract and salary are disclosed.",
        tier: "X",
      },
    ],
    [
      984,
      {
        section: ROUND30_SECTION,
        status: "Live outside Barcelona priority: the exact Waiis LinkedIn detail 4441945681 was requested directly on 2026-08-12 and remains on the job page with Solicitar. Its body specifies Manresa, four office days plus one remote day, EUR35,000-40,000 and a direct application email.",
        analysis: "This is a legitimate brand/digital design opportunity, but its real commute and onsite requirement make it a manual Manresa fallback rather than a Barcelona default card. Keep one canonical record only and confirm the legal contract, office address and daily language before applying.",
        postedAt: "2026-07-22",
        freshnessTag: "month",
        freshnessAgeDays: 21,
        contact: "Current original detail: https://es.linkedin.com/jobs/view/graphic-designer-and-copywriter-at-waiis-4441945681 ; direct application email: andrea@waiis.com",
        links: [
          "https://es.linkedin.com/jobs/view/graphic-designer-and-copywriter-at-waiis-4441945681",
          "mailto:andrea@waiis.com",
        ],
      },
    ],
    [
      629,
      {
        section: ROUND30_SECTION,
        status: "Closed/history: NEORIS' employer-owned Greenhouse board was opened on 2026-08-12 and currently lists 60 jobs, with no Visual Designer - Internal Communications & Learning vacancy. The former exact route redirects to the board with error=true.",
        analysis: "Do not revive this strong visual-systems and brand-book brief from indexed copies. Restore only when the current NEORIS board exposes a new named Barcelona or Spain-remote design requisition with an application form.",
        tier: "X",
      },
    ],
  ]);

  for (const [id, update] of updates) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    Object.assign(item, update);
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound30SourceUpdates();

const ROUND31_SECTION = "2026-08-12 Round 31 top-rank direct audit and ledger reconciliation";

function applyRound31SourceUpdates() {
  const updates = new Map([
    [
      930839,
      {
        section: ROUND31_SECTION,
        status: "Closed/history: a direct request to CATORCE Greenhouse requisition 4797510008 on 2026-08-12 redirects to the current openings board with error=true. The current board no longer lists Visual Designer; its remaining design opening is the separately tracked Studio Designer & HTML Programmer requisition 5034293008.",
        analysis: "Preserve the former Visual Designer brief as a strong Barcelona portfolio benchmark, but remove it from the current ranked board. Do not revive it from search-engine caches; restore only if CATORCE publishes a new exact Visual Designer requisition with a working application form.",
        tier: "X",
      },
    ],
    [
      1107,
      {
        section: ROUND31_SECTION,
        status: "Verify before investing in the application: THRU's current jobs page still contains the full Graphic Designer with Motion Skills brief, Barcelona onsite/Friday-remote terms, a 2026-09-15 closing date, the motion exercise and jobs@thrumotion.com application instructions. However, the same page footer also says NO JOB OPENINGS, so the studio should confirm by email that applications are still being accepted before the candidate completes the unpaid recreation exercise.",
        analysis: "Keep this high-fit Barcelona motion-brand role in the review queue, not as fully confirmed live. First send a short email asking whether the vacancy and exercise are current; only complete the After Effects task after written confirmation, and ask whether the exercise is used solely for hiring evaluation.",
      },
    ],
    [
      1310,
      {
        section: ROUND31_SECTION,
        source: "Hungry Minds / current LinkedIn employer detail",
        opportunity: "Art Director - Creative Department (eCommerce)",
        fit: "Spain remote art-direction and e-commerce creative lead; exact seniority, language, contract and salary require confirmation",
        location: "Spain / remote; LinkedIn result context also surfaces Barcelona",
        status: "Current but verify-first: the exact LinkedIn employer detail 4429897831 was requested directly on 2026-08-12 and returns the title Art Director - Creative Department (eCommerce), Spain, with an Apply route. The public page does not expose the complete job description, salary, daily language, seniority, employer ATS destination, Spain contract entity or work-authorisation policy.",
        analysis: "Keep as a lower-confidence Spain-remote art-direction lead rather than a top brand-design recommendation. Before tailoring a portfolio or doing any test, obtain the full brief, contract entity, compensation, working hours, language and exact Barcelona/Spain eligibility from the employer application route.",
      },
    ],
  ]);

  for (const [id, update] of updates) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    Object.assign(item, update);
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound31SourceUpdates();

const ROUND32_SECTION = "2026-08-12 Round 32 ranks 26-60 direct audit and remote-brand recovery";
const ROUND32_CLOSED_IDS = Object.freeze([203, 668, 190, 930871, 142, 444, 458, 258, 1278]);

function applyRound32SourceUpdates() {
  const updates = new Map([
    [
      1021,
      {
        section: ROUND32_SECTION,
        source: "ZOE / official Ashby ATS",
        opportunity: "Creative Performance Designer (Mid-Weight)",
        status: "Live/current: ZOE's exact official Ashby requisition was requested directly on 2026-08-12 and returns the current title Creative Performance Designer (Mid-Weight). It remains a full-time UK/EU remote Creative Studio role covering paid-social creative, modular templates, localisation, shoots and a smaller motion component.",
        analysis: "Keep as an English-first EU-remote performance-creative route, but describe it by the employer's current title rather than the superseded Brand Performance Designer label. Confirm Spain employment eligibility, compensation, product-shoot logistics and any practical test before applying.",
      },
    ],
    [
      920001,
      {
        section: ROUND32_SECTION,
        source: "PepsiCo / official careers",
        opportunity: "Senior Designer - Food Ventures",
        status: "Live/current: PepsiCo official requisition 464555 was requested directly on 2026-08-12 and returns HTTP 200, the exact title Senior Designer - Food Ventures and Apply now. The role includes Alvalle brand strategy, product architecture, visual identity, packaging and innovation across multiple listed locations including Barcelona.",
        analysis: "Keep as a strong Barcelona consumer-brand and packaging opportunity. Four-plus years, product/packaging depth and up to 15% travel are material gates; confirm the Barcelona work mode, salary, language and Spain work-authorisation policy before applying.",
      },
    ],
    [
      945,
      {
        section: ROUND32_SECTION,
        source: "OFF+BRAND / official careers",
        opportunity: "Senior Brand Designer",
        fit: "EU remote brand-design ownership; identity systems, visual language, art direction, guidelines, Figma systems and web translation",
        location: "Remote / UK / EU; contract or full-time; UK/EU working hours",
        status: "Live/current: OFF+BRAND's employer-owned careers detail was opened on 2026-08-12 and visibly shows Senior Brand Designer, Contract or Full-time, Remote / UK / EU and Apply Now. The on-page form accepts a portfolio and CV, and the role owns identity systems, visual language, art direction, documented brand guidelines, Figma tokens/components and broader digital-brand collateral.",
        contact: "Official detail/application: https://www.itsoffbrand.com/careers/senior-brand-designer ; fallback careers email: contact@itsoffbrand.com",
        analysis: "One of the closest Europe-remote matches to the requested VI and brand-system direction. It requires 4+ years, strong identity work, client presentation and production-ready Figma systems. Confirm whether Spain is supported as an employee or contractor, the actual rate/salary and project allocation before accepting interviews.",
        score: 96,
        tier: "B",
        locationTag: "Europe remote",
        typeTag: "Brand identity / guidelines / digital brand systems",
        sourceGroup: "official",
        links: ["https://www.itsoffbrand.com/careers/senior-brand-designer", "mailto:contact@itsoffbrand.com"],
      },
    ],
    [
      1000,
      {
        section: ROUND32_SECTION,
        source: "Designity / official careers",
        opportunity: "Motion Designer (AI-Driven)",
        fit: "EMEA remote motion and video role for branding, social and digital campaigns; English-first with US Eastern overlap",
        location: "Fully remote across EMEA and LATAM; Spain eligible; full-time; at least five hours of US Eastern overlap",
        status: "Live/current: Designity's employer-owned careers detail was opened on 2026-08-12 and visibly shows Motion Designer (AI-Driven), Full-time, Remote and Apply Now. The body explicitly says the role is based across EMEA and LATAM, offers a fixed base salary and paid PTO, and covers branded motion systems, campaign video, storyboards, After Effects, Premiere, Lottie and AI-assisted workflows.",
        contact: "Official detail/application: https://www.designity.com/careers/motion-designer",
        analysis: "A valid Spain-accessible remote opportunity, but secondary to static brand/VI roles because it requires 5+ years of motion depth and at least five hours of US Eastern overlap. Apply only with a motion-first reel and confirm the Spain employment/contract structure, salary and exact daily schedule.",
        score: 82,
        tier: "C",
        locationTag: "Europe remote",
        typeTag: "Brand motion / campaign video / AI workflow",
        sourceGroup: "official",
        links: ["https://www.designity.com/careers/motion-designer"],
      },
    ],
    [203, { status: "Closed/history: Amazon job 3126194 was requested directly on 2026-08-12. The official URL now returns HTTP 404 and explicitly says the job is not available; an older cached Apply page is not current application evidence.", analysis: "Preserve the former Barcelona art-direction brief as a portfolio benchmark, but remove it from the current board until Amazon publishes a new exact requisition.", tier: "X" }],
    [668, { status: "Closed/history: COROS's current official careers page was opened and searched on 2026-08-12. It lists current Canada, operations and support roles but no Brand Creative Producer; the generic careers email cannot prove that the former vacancy remains open.", analysis: "Preserve the brand-film and product-storytelling brief in history. Do not apply under the removed title unless COROS republishes a named role on its official careers page.", tier: "X" }],
    [190, { status: "Closed/history: the exact Stark Future LinkedIn job 4424557342 now redirects to a generic search URL containing expired_jd_redirect instead of the employer detail. No current employer ATS requisition for this Graphic Designer role was recovered.", analysis: "Keep the former packaging, retail and premium-brand scope as history; restore only if Stark Future publishes a new exact application route.", tier: "X" }],
    [930871, { status: "Closed/history: the exact Familia Torres LinkedIn job 4400269724 now redirects to a generic search URL containing expired_jd_redirect. The previous readable packaging and label brief is no longer a current application route.", analysis: "Preserve the role as a strong portfolio reference for wine labels and packaging, but remove it from the live ranking until a new employer-origin vacancy appears.", tier: "X" }],
    [142, { status: "Closed/history: the exact IRiS Grupo Tecnológico LinkedIn job 4413436727 now redirects to a generic search URL containing expired_jd_redirect. The company website does not provide a replacement application for this design vacancy.", analysis: "Retain the former B2B graphic and digital-marketing scope in history; do not treat the company homepage as a job application.", tier: "X" }],
    [444, { status: "Closed/history: the exact Locker in the City LinkedIn detail 4438835534 was opened directly on 2026-08-12 and explicitly states Ya no se aceptan solicitudes. The role description remains readable, but applications are closed.", analysis: "Preserve the four-day-week digital-brand brief in history and restore only if the employer publishes a new requisition.", tier: "X" }],
    [458, { status: "Closed/history: the exact Product Madness / Aristocrat LinkedIn job 4372593918 now returns HTTP 404 and no matching current official vacancy was recovered.", analysis: "Preserve the gaming marketing-visual brief as history; do not count a company location page as an application route.", tier: "X" }],
    [258, { status: "Closed/history: the exact Glovo LinkedIn job 4387384420 now redirects to a generic search URL containing expired_jd_redirect, and the former requisition no longer resolves to a current role-specific application.", analysis: "Keep the brand-guardian and PR/social production brief in history; restore only from a new exact Glovo requisition.", tier: "X" }],
    [1278, { status: "Closed/history: the MYLVA InfoJobs detail remains readable, but the current page explicitly says No se aceptan más candidaturas para esta oferta. Readable responsibilities and a historical salary do not make it currently applyable.", analysis: "Preserve the unusually relevant identity, packaging, editorial, web and motion brief in history. Restore only if MYLVA republishes a new application-enabled vacancy.", tier: "X" }],
    [843, { status: "Closed/history: the only tracked FIRMAMENT Sports job detail now returns HTTP 410 with Job unavailable. No employer-owned ATS vacancy was recovered.", analysis: "Keep the sports-brand and motion brief as historical research; the generic company contact is not a current job application.", tier: "X" }],
    [1022, { status: "Closed/history: the exact Kota Ashby URL now returns only a generic Jobs shell with no Brand Designer title, role body or application form.", analysis: "Archive the former brand-system brief and restore only if Kota publishes a new exact requisition.", tier: "X" }],
    [1261, { status: "Closed/history: the tracked By Publications syndicated detail now returns HTTP 410 and explicitly says the offer is unavailable. The employer's general email is not evidence of a current vacancy.", analysis: "Preserve the editorial-design research in history; use the company only for future source monitoring, not as an open job.", tier: "X" }],
    [997, { status: "Closed/history: the exact Restate Ashby URL now returns only a generic Jobs shell with no Founding Brand Designer title, role body or application form.", analysis: "Archive the former AI-infrastructure brand brief and restore only from a new exact official requisition.", tier: "X" }],
  ]);

  for (const [id, update] of updates) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    Object.assign(item, update, { section: ROUND32_SECTION });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound32SourceUpdates();

const ROUND33_SECTION = "2026-08-13 Round 33 full-board direct-link reconciliation";
const ROUND33_CLOSED_EVIDENCE = new Map([
  [979, "the exact Storyblok employer page now returns HTTP 404 / Not found"],
  [1025, "Siena's current official Ashby board no longer lists the tracked Motion Designer & Video Producer requisition"],
  [1049, "Maneuver Marketing's current official Ashby board no longer lists the tracked Performance Designer requisition"],
  [654, "Kraken's current official Ashby board no longer lists the tracked Breakout performance-creative requisition"],
  [649, "The Mind Company's current official Ashby board no longer lists the tracked AI Video Marketing Designer requisition"],
  [930848, "Finary's current official Ashby board no longer lists the tracked Freelance Senior Brand Designer requisition"],
  [214, "the exact REDLINE MEDIA LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [327, "the exact OMODA & JAECOO LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [141, "the exact Minsk.Barcelona LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [930828, "the exact VOK DAMS LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [930875, "the exact Grupo Bimbo LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [407, "the exact papernest Teamtailor detail now returns HTTP 410 Gone"],
  [330, "the exact The Agency Barcelona LinkedIn detail explicitly says applications are no longer accepted"],
  [336, "the exact Solventis LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [130, "the exact mesoestetic LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [1264, "the exact Next'media LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [1288, "the exact Michael Page detail returns HTTP 410 and says no more applications are accepted"],
  [1248, "the exact Alfa Dyser LinkedIn detail now returns HTTP 404"],
  [930864, "the exact Prime Insights LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [930877, "the exact Bravura Barcelona employer route now returns HTTP 402 / Tienda no disponible"],
  [109, "the exact MiiN Korean Cosmetics LinkedIn detail explicitly says applications are no longer accepted"],
  [117, "the exact Lateral Thinking LinkedIn detail explicitly says applications are no longer accepted"],
  [1023, "the exact Adsmurai Digital Art Director detail now returns HTTP 410 Gone"],
  [385, "the exact Nacar Recruitee detail returns HTTP 404 and says the job could not be found"],
  [841, "the exact European Blockchain Convention LinkedIn detail explicitly says applications are no longer accepted"],
  [903, "the exact fhios LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [855, "the exact Yellowcat LinkedIn detail explicitly says applications are no longer accepted"],
  [875, "the exact CoverManager LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [397, "the exact RV Group JOB TODAY route now redirects to the employer profile instead of the vacancy"],
  [1274, "the exact BRUTALIA JOB TODAY route now redirects to the employer profile instead of the vacancy"],
  [217, "the exact Feels Like employer page now returns HTTP 404"],
  [870, "the exact Flummox LinkedIn detail now returns HTTP 404"],
  [308, "the exact DDB Spain Greenhouse requisition redirects to the board with error=true"],
  [1238, "the exact BYPHASSE LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [1262, "the exact Checkin Hotel Group LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [848, "the exact Atomite LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [213, "the exact De'Longhi employer page now returns HTTP 404 / Page not found"],
  [930717, "the exact Establishment Labs LinkedIn detail now returns HTTP 404"],
  [930852, "the exact Newlink Spain LinkedIn detail redirects to a generic search URL containing expired_jd_redirect"],
  [930849, "the exact Andilana JOB TODAY route now redirects to the employer profile instead of the vacancy"],
  [537, "the exact Jobgether Lever requisition now returns HTTP 404 / Not found"],
]);
const ROUND33_CLOSED_IDS = Object.freeze([...ROUND33_CLOSED_EVIDENCE.keys()]);

function applyRound33SourceUpdates() {
  for (const [id, evidence] of ROUND33_CLOSED_EVIDENCE) {
    const item = allData.find((record) => Number(record.id) === id);
    if (!item) continue;
    const isOpenButOffScope = id === 930860;
    Object.assign(item, {
      section: ROUND33_SECTION,
      status: `${isOpenButOffScope ? "Excluded/off-scope" : "Closed/history"}: checked again on 2026-08-13; ${evidence}. ${isOpenButOffScope ? "The vacancy is open, but it is not a verified application route from Barcelona/Spain." : "A readable old description, search cache or generic company page is not a current application route."}`,
      analysis: `Preserve the former brief, location, requirements and source URL in history. Restore it to the ranked board only if the employer publishes ${isOpenButOffScope ? "a Spain/Europe-eligible version" : "a new exact vacancy with a role-specific application path"}.`,
      tier: "X",
    });
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}

applyRound33SourceUpdates();

const ROUND34_SECTION = "2026-08-13 Round 34 current Barcelona replacement vacancies";
[
  {
    id: 930878,
    section: ROUND34_SECTION,
    source: "Lateral Thinking / current original LinkedIn employer detail",
    opportunity: "Art Director — brand experiences and visual identity",
    fit: "Barcelona full-time; highly relevant visual identity, key visual, signage, print and digital brand-experience role; senior Spanish hard gate",
    location: "Barcelona, Catalonia, Spain; full-time; on-site production and installation supervision",
    status: "A new original LinkedIn employer detail with independent job ID 4449819011 was opened and read in full on 2026-08-13. It shows Barcelona, full-time and Apply. The vacancy was posted two days earlier and covers visual identity, brand-experience strategy, key visuals, signage, print, digital and offline assets, production and on-site installation. Five-plus years and fluent Spanish are explicit; English and Catalan are advantages.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4449819011",
    analysis: "This is a genuine new requisition, not a reopening of the closed job ID 4436668875. Keep the old card in history and use only this new route. The subject fit is excellent, but apply only if five-plus years, professional Spanish and hands-on production/installation leadership are credible.",
    score: 72,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand identity / art direction / experiential graphics",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://www.linkedin.com/jobs/view/4449819011"],
    searchText: "Lateral Thinking current new LinkedIn 4449819011 Art Director Barcelona full-time Apply visual identity brand experiences key visual signage print digital offline production installation 5 years fluent Spanish English Catalan plus",
  },
  {
    id: 930879,
    section: ROUND34_SECTION,
    source: "DashBook / current original LinkedIn employer detail",
    opportunity: "Directeur Artistique Junior — editorial design",
    fit: "Barcelona full-time junior art-direction role focused on book covers, editorial layout, typography and production coordination; French-language workflow likely",
    location: "Barcelona, Catalonia, Spain; full-time; work mode and salary not stated",
    status: "A new original LinkedIn employer detail with independent job ID 4450320977 was opened and read in full on 2026-08-13. It shows Barcelona, full-time and Apply. The French-language brief covers book-cover design, editorial layout, InDesign, Illustrator, Photoshop, typography, creative briefings, production schedules and coordination with authors and internal teams. The page does not publish salary, hybrid rhythm or an explicit language level.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4450320977",
    analysis: "This is a real new requisition and must not be merged with the closed former DashBook route. It is useful for an editorial-design portfolio, but the entirely French brief and author-facing coordination make professional French a likely practical gate; confirm working language before tailoring an application.",
    score: 58,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Editorial design / art direction / typography",
    sourceGroup: "linkedin",
    postedAt: "2026-08-08",
    freshnessTag: "week",
    freshnessAgeDays: 5,
    links: ["https://www.linkedin.com/jobs/view/4450320977"],
    searchText: "DashBook current new LinkedIn 4450320977 Directeur Artistique Junior Barcelona full-time Apply French editorial design book covers layout typography InDesign Illustrator Photoshop authors production coordination language confirm",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

for (const item of allData) {
  if (!item.searchText) {
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}
const meta = window.JOB_META || {};

// The homepage is deliberately Chinese-first. English-first roles remain in the
// searchable database, but they must not crowd out opportunities the user can
// actually contact today.
// Homepage priority is location-first: Barcelona local roles come before
// Madrid/unclear remote or stale Chinese-channel leads. Language and contract
// gates remain explicit on each card instead of being hidden by the homepage.
// Keep the homepage shortlist anchored to the user's real language path. These
// are the current Chinese-linked opportunities that the user has already
// reviewed, not a generic list of attractive English-language design jobs.
// Roles with an English/Spanish gate remain visible in the caution column.
const PRIORITY_IDS = [778, 930904, 920, 1300, 24, 25];

// Canonical, evidence-backed opportunities for the user. The generated corpus
// remains searchable, but only these independently reviewed identities enter
// the default board. This prevents old source indexes, Madrid posts, mirrors
// and research notes from inflating the usable count.
const ROUND26_AUDITED_OPPORTUNITY_IDS = Object.freeze([
  930813, 910, 914, 1300, 1107, 866, 94, 930847, 930863, 930816, 78, 930839, 930860, 4, 604, 930867, 296, 535, 84, 175, 930838, 930832, 930836, 930837, 930866, 446, 930820, 930834, 425, 305, 930844, 443,
  930705, 668, 1102, 884, 203, 601, 284, 920001, 930812, 190, 577, 313, 930868, 55,
  1278, 908, 1314, 314, 207, 444, 458, 258, 5106, 960, 238, 156, 928,
  930822, 375, 867, 304, 170, 1038, 930815, 930718, 930824, 930831, 863, 856, 279, 12, 859, 1011, 445, 1029, 188, 922, 483, 958, 930845,
  930823, 275, 162, 930825, 1092, 930869, 886, 930818, 930821, 930828, 930840, 930827, 930829, 921, 228, 178, 2942, 1105, 890, 891, 930841, 930637, 930833, 930819, 930870, 352, 877, 930854, 930826, 930864, 930707, 930708, 930712, 134, 277, 109,
  117, 93, 1296, 210, 930842, 930848, 942, 930719, 89, 1023, 385, 930817, 841, 903, 1108, 855, 874, 875, 876,
  1227, 397, 1274, 396, 1240, 633, 1253, 456, 868, 854, 372, 930711, 1053, 1098, 1094, 217, 985, 977, 989, 870, 990001, 27, 1303, 308, 1020, 351, 1081, 930843,
  1080, 1099, 981, 1097, 1101, 24, 25, 930835, 278, 1293, 1255, 37, 889,
  172, 86, 930717, 224, 930852, 1301, 930849, 930814, 920, 930865,
]);

// Round 27 additions are inserted beside comparable audited roles instead of
// appended at the end. This keeps the ledger reviewable and makes the visible
// score a strict consequence of one global, user-specific rank order.
const ROUND27_RANKED_INSERTIONS = new Map([
  [305, [1021]],
  [930837, [1310]],
  [313, [930871]],
  [930868, [142, 345]],
  [156, [996]],
  [1038, [1026, 979, 1024, 990]],
  [930815, [1036]],
  [930831, [864]],
  [930845, [1025]],
  [930823, [1049, 654, 1002]],
  [930825, [649]],
  [886, [214, 327]],
  [930818, [1287, 105]],
  [930821, [141]],
  [930829, [382]],
  [930870, [330, 336, 1299]],
  [877, [1264, 1237, 1249]],
  [930854, [1257]],
  [930826, [1288, 1248, 579]],
  [930864, [860]],
  [930711, [1061]],
  [1094, [1093]],
  [930819, [130]],
  [456, [454]],
  [930843, [294, 317, 1238, 1262, 581, 1258, 848, 136, 213]],
  [930865, [1243, 537]],
]);
const ROUND27_AUDITED_OPPORTUNITY_IDS = Object.freeze(
  ROUND26_AUDITED_OPPORTUNITY_IDS.flatMap((id) => [id, ...(ROUND27_RANKED_INSERTIONS.get(id) || [])]),
);
const ROUND28_RANKED_INSERTIONS = new Map([
  [930871, [930873]],
  [1024, [930874]],
  [930829, [930875]],
]);
const ROUND28_AUDITED_OPPORTUNITY_IDS = Object.freeze(
  ROUND27_AUDITED_OPPORTUNITY_IDS.flatMap((id) => [id, ...(ROUND28_RANKED_INSERTIONS.get(id) || [])]),
);
const ROUND29_RANKED_INSERTIONS = new Map([
  [930870, [407]],
  [930875, [930876]],
  [930864, [930877]],
]);
const ROUND32_RANKED_INSERTIONS = new Map([
  [305, [945]],
  [5106, [1000]],
]);
const ROUND34_RANKED_INSERTIONS = new Map([
  [277, [930878]],
  [891, [930879]],
]);
const ROUND35_RANKED_INSERTIONS = new Map([
  [284, [930880]],
  [930824, [88]],
  [859, [778, 1107]],
  [930825, [930881]],
]);
const ROUND36_RANKED_INSERTIONS = new Map([
  [1021, [930882]],
]);
const ROUND37_RANKED_INSERTIONS = new Map([
  [296, [930883]],
  [1314, [930884]],
  [238, [930885]],
  [188, [930888]],
  [930818, [930886]],
  [930878, [930887]],
]);
const ROUND38_RANKED_INSERTIONS = new Map([
  [930834, [209]],
]);
// Round 47 adds only independently verified current vacancies. Closed pages
// discovered in the same sweep stay in the historical corpus and never enter
// this list.
const ROUND47_CURRENT_IDS = Object.freeze([930889, 930890, 930891, 930892]);
// Round 50 restores one independently evidenced Revolut requisition and adds
// one new Dragons official vacancy. Both remain subject to the same
// user-specific language and seniority penalties as every older card.
const ROUND50_CURRENT_IDS = Object.freeze([427, 930898]);
// Round 52 adds one newly published, independently verified Sabadell graphic-
// design vacancy. Its exact employer-origin LinkedIn detail is live and the
// employer career page independently confirms both the Barcelona-area office
// and English as the team language. It remains a low-priority English backup.
const ROUND52_CURRENT_IDS = Object.freeze([930899]);
// Round 54 adds three independently opened current roles found in the latest
// Barcelona sweep. They enter the complete board but remain subject to hard
// English/likely-Spanish, internship and seniority penalties.
const ROUND54_CURRENT_IDS = Object.freeze([930900, 930901, 930902]);
// Round 60 adds one current Chinese-language Barcelona lead from the live
// InfoHuaxin recruitment feed. It is retail window/display design rather than
// graphic/VI ownership, so it remains below the canonical full-time graphic
// designer even though the location and communication route are favourable.
const ROUND60_CURRENT_IDS = Object.freeze([930904]);
// Round 63 adds five newly opened Barcelona details. They all stay on the
// complete board, but their displayed score is still controlled by the user's
// real language, seniority and contract constraints: local does not mean easy.
const ROUND63_CURRENT_IDS = Object.freeze([930910, 930911, 930913, 930914]);
// Round 64 adds only four independently current Barcelona secondary routes
// whose exact employer-posted details contain hands-on visual production.
// They are social/video/marketing backups rather than core VI jobs, and their
// Spanish, English, multilingual or internship gates keep them near the bottom.
const ROUND64_CURRENT_IDS = Object.freeze([930917, 930918, 930919, 930920]);
// THRU still exposes the complete role brief and a future closing date, but
// the same official page ends with "NO JOB OPENINGS". Keep the lead visible as
// verify-first evidence without allowing the contradictory page to occupy a
// top-five score or homepage-priority slot.
const ROUND35_DEMOTED_IDS = new Set([1107]);
// Keep the old records in the historical corpus, but do not let exact ATS
// duplicates occupy two seats in the reviewed current board.
const ROUND37_SUPERSEDED_MAIN_IDS = new Set([891, 930707, 930883]);
const ROUND32_EXCLUDED_IDS = new Set([930839, ...ROUND32_CLOSED_IDS, ...ROUND33_CLOSED_IDS]);
// CBA's page is a standing portfolio/open-application route, not a current
// vacancy. Preserve it in the complete research library, but do not count it
// among the user's live/verify job cards.
const ROUND46_RESEARCH_ONLY_MAIN_IDS = new Set([456]);
const MY_OPPORTUNITY_IDS = Object.freeze(
  ROUND28_AUDITED_OPPORTUNITY_IDS
    .flatMap((id) => [id, ...(ROUND29_RANKED_INSERTIONS.get(id) || [])])
    .flatMap((id) => [id, ...(ROUND32_RANKED_INSERTIONS.get(id) || [])])
    .flatMap((id) => [id, ...(ROUND34_RANKED_INSERTIONS.get(id) || [])])
    .filter((id) => !ROUND35_DEMOTED_IDS.has(id))
    .flatMap((id) => [id, ...(ROUND35_RANKED_INSERTIONS.get(id) || [])])
    .flatMap((id) => [id, ...(ROUND36_RANKED_INSERTIONS.get(id) || [])])
    .flatMap((id) => [id, ...(ROUND37_RANKED_INSERTIONS.get(id) || [])])
    .flatMap((id) => [id, ...(ROUND38_RANKED_INSERTIONS.get(id) || [])])
    .concat(
      ROUND47_CURRENT_IDS,
      ROUND50_CURRENT_IDS,
      ROUND52_CURRENT_IDS,
      ROUND54_CURRENT_IDS,
      ROUND60_CURRENT_IDS,
      ROUND63_CURRENT_IDS,
      ROUND64_CURRENT_IDS,
    )
    .filter((id) => !ROUND37_SUPERSEDED_MAIN_IDS.has(id))
    .filter((id) => !ROUND32_EXCLUDED_IDS.has(id))
    .filter((id) => !ROUND46_RESEARCH_ONLY_MAIN_IDS.has(id)),
);
const MY_OPPORTUNITY_SET = new Set(MY_OPPORTUNITY_IDS);

// The audited order is only a deterministic tie-breaker. It must never replace
// the user's personal-fit score: doing so previously made English/Spanish roles
// look artificially strong merely because they had been reviewed earlier.
const AUDITED_ORDER_INDEX = new Map(MY_OPPORTUNITY_IDS.map((id, index) => [id, index]));

const IDENTITY_ALIASES = Object.freeze({
  778: "barcelona-chinese-advertising-company-current-graphic-designer",
  930835: "barcelona-chinese-advertising-company-historical-same-contact-post",
  178: "bending-spoons-media-designer-69d588c142e4c7b7a3dd14ee",
  930900: "bending-spoons-media-designer-69d588c142e4c7b7a3dd14ee",
  95: "qustodio-digital-designer-marketing",
  20: "infiled-emea-graphic-designer",
  23: "top-doctors-marketing-designer",
  184: "ogilvy-liquid-designer-video",
  186: "dm-toys-packaging",
  180: "dragons-senior-graphic-designer-pharma",
  240: "dragons-art-director-wellness-lifestyle",
  320: "intracon-hp-content",
  337: "dragons-mid-graphic-designer-food-beverage",
  35: "steneg-industrial-brand-packaging",
  108: "infiled-emea-graphic-designer",
  167: "top-doctors-marketing-designer",
  169: "wall-street-english-design-lead",
  430: "top-doctors-marketing-designer",
  559: "infiled-emea-graphic-designer",
  852: "steneg-industrial-brand-packaging",
  853: "eladiet-brand-communication-designer",
  884: "dragons-mid-graphic-designer-wellness-healthcare",
  889: "dragons-mid-graphic-designer-food-beverage",
  890: "dragons-art-director-wellness-lifestyle",
  1327: "dragons-mid-graphic-designer-wellness-healthcare",
  1328: "dragons-art-director-wellness-lifestyle",
  1329: "lodgify-creative-designer",
  613: "oasisroots-marketing-operations-specialist",
  644: "oasisroots-marketing-operations-specialist",
  929: "eurofragance-branding-graphic-designer",
  669: "eurofragance-branding-graphic-designer",
  1345: "eurofragance-branding-graphic-designer",
  1347: "eurofragance-branding-graphic-designer",
  866: "devicenow-video-motion-graphics-specialist",
  1115: "devicenow-video-motion-graphics-specialist",
  534: "collegevine-brand-designer",
  1337: "collegevine-brand-designer",
  305: "hostinger-brand-creative-graphic-designer",
  936: "hostinger-brand-creative-graphic-designer",
  910: "labhouse-growth-graphic-designer",
  946: "labhouse-growth-graphic-designer",
  1103: "labhouse-growth-graphic-designer",
  4: "lodgify-creative-designer",
  1596: "lodgify-creative-designer",
  891: "dragons-senior-graphic-designer-pharma",
  892: "qustodio-digital-designer-marketing",
  894: "ogilvy-liquid-designer-video",
  897: "dm-toys-packaging",
  898: "intracon-hp-content",
  904: "wall-street-english-design-lead",
  905: "steneg-industrial-brand-packaging",
  906: "infiled-emea-graphic-designer",
  1319: "dragons-mid-graphic-designer-wellness-healthcare",
  1320: "dragons-art-director-wellness-lifestyle",
  1300: "infiled-emea-graphic-designer",
  907: "eladiet-brand-communication-designer",
  908: "top-doctors-marketing-designer",
  882: "jobgether-marketing-visual-designer",
  912: "jobgether-marketing-visual-designer",
  111: "alohas-asia-marketing-pr-manager",
  497: "alohas-asia-marketing-pr-manager",
  913: "alohas-asia-marketing-pr-manager",
  77: "trivelta-graphic-designer",
  399: "trivelta-graphic-designer",
  914: "trivelta-graphic-designer",
  469: "onekey-brand-visual-designer",
  917: "onekey-brand-visual-designer",
  126: "huqiao-bilingual-graphic-artist",
  468: "huqiao-bilingual-graphic-artist",
  504: "huqiao-bilingual-graphic-artist",
  918: "huqiao-bilingual-graphic-artist",
  1371: "hostinger-brand-creative-graphic-designer",
  188: "eseoese-art-director",
  485: "eseoese-art-director",
  1373: "labhouse-growth-graphic-designer",
  914: "trivelta-graphic-designer",
  952: "trivelta-graphic-designer",
  84: "reboot-current-web-designer",
  450: "reboot-current-web-designer",
  567: "reboot-current-web-designer",
  2090: "reboot-current-web-designer",
  2091: "reboot-current-web-designer",
  2111: "reboot-current-web-designer",
  2115: "reboot-current-web-designer",
  2169: "reboot-current-web-designer",
  2170: "reboot-current-web-designer",
  375: "fail-fast-senior-motion-designer",
  3287: "fail-fast-senior-motion-designer",
  1196: "trivelta-graphic-designer",
  27: "twojeys-head-of-brand",
  101: "twojeys-head-of-brand",
  604: "canonical-visual-designer-brand-design-systems",
  930716: "canonical-visual-designer-brand-design-systems",
  55: "bcome-digital-designer",
  993018: "bcome-digital-designer",
  278: "avidalia-digital-content-designer",
  881: "avidalia-digital-content-designer",
  1276: "avidalia-digital-content-designer",
  100: "twojeys-apparel-graphic-designer",
  433: "twojeys-apparel-graphic-designer",
  990001: "twojeys-apparel-graphic-designer",
  1702: "lodgify-creative-designer",
  1757: "lodgify-creative-designer",
  1828: "hostinger-brand-creative-graphic-designer",
  2333: "reboot-current-web-designer",
  3518: "fail-fast-senior-motion-designer",
  3636: "fail-fast-senior-motion-designer",
  484: "vml-art-director-8634604002",
  930712: "vml-art-director-8634604002",
  352: "blank-studio-junior-3d-designer",
  930: "blank-studio-junior-3d-designer",
  260: "catorce-studio-designer-html-programmer",
  1303: "catorce-studio-designer-html-programmer",
  120: "rocket-digital-graphic-designer-social-media-closed",
  1079: "rocket-digital-graphic-designer-social-media-closed",
});

const CURATED = {
  446: {
    direction: "brand",
    company: "Refokus",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / 西班牙可投 / 全职",
    titleZh: "品牌设计师（VI 系统与数字品牌延展）",
    titleEs: "Brand Designer",
    reason: "官方职位页于 2026-08-12 重新打开，明确写 Remote Worldwide、Full-Time，并提供仍可填写的申请表。职责直接覆盖 Logo、品牌指南与手册、演示系统、社媒资产、AI 品牌资产和数字品牌延展。",
    next: "用英文作品集突出完整 VI 系统、品牌手册、演示系统、数字触点和 AI 辅助流程；提交前确认 Spain 合同主体、薪资、时区和是否为雇员或 contractor。",
    languageKey: "english",
    language: "英文远程岗位；未写西班牙语硬门槛",
    applicationMode: "english",
    changeType: "continued-audit",
  },
  928: {
    direction: "brand",
    company: "Circle",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / Spain 雇佣资格需确认",
    titleZh: "高级品牌设计师（科技品牌系统与 Campaign）",
    titleEs: "Senior Brand Designer",
    reason: "官方 Greenhouse 详情于 2026-08-12 重新打开，显示 Remote、Apply 和完整申请表。公司写明团队分布在 30 多个国家；岗位负责视觉识别、发布、Campaign、活动、广告、社媒、Motion 与可扩展品牌系统，公开薪资为 100,000–120,000 美元。",
    next: "这是 5+ 年高级岗，需 C2 级英文。先确认 Spain 是否在实际可雇国家、合同主体、时区和薪资适用方式，再决定是否投入高级品牌系统作品集。",
    languageKey: "english",
    language: "英文 C2 / ILR 5 为明确硬门槛",
    applicationMode: "english",
    changeType: "continued-audit",
  },
  483: {
    direction: "brand",
    company: "Act Second",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Barcelona / remote / part-time / EST 时段",
    titleZh: "高级品牌设计师（品牌与数字系统，兼职）",
    titleEs: "Senior Associate Designer",
    reason: "官方 Workable 申请页于 2026-08-12 仍可打开。岗位在 Barcelona，远程兼职，覆盖品牌项目、数字与印刷、演示、社媒、网页和电商视觉；要求 6+ 年、Figma/Adobe、流利英文并配合 EST 工作时间。",
    next: "它是真实机会但门槛较高：先确认 Spain 合同和兼职薪资、每周工时及 EST 重叠，再用成熟品牌系统、数字触点和跨媒介案例投递。",
    languageKey: "english",
    language: "流利英文硬门槛；西班牙语未列为必需",
    applicationMode: "english",
    changeType: "continued-audit",
  },
  930815: {
    direction: "digital",
    company: "SIDN Digital Thinking",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 全远程 / Barcelona 有办公室 / 永久全职",
    titleZh: "平面设计师（信息设计与数字营销视觉）",
    titleEs: "Graphic Designer",
    reason: "官方 Factorial 详情于 2026-08-12 直接打开，显示无限期、全职、远程和有效申请入口。职责包括 Paid Media、社媒、企业传播、Pitch Deck、图表与信息可视化；要求 3–5 年及相关作品集。",
    next: "这是西语优先的数字营销与信息设计岗，不是纯 VI。若专业西语可工作，作品集应优先放 Campaign、信息图、复杂内容层级和高质量演示设计。",
    languageKey: "spanish",
    language: "职位正文与流程均为西班牙语；按西语工作硬门槛处理",
    applicationMode: "spanish",
    changeType: "continued-audit",
  },
  313: {
    direction: "brand",
    company: "Mapit IoT",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / indefinite full-time",
    titleZh: "营销与品牌系统设计师（母语西语门槛）",
    titleEs: "Marketing Designer",
    reason: "官方职位是真实的巴塞长期品牌系统岗位，但明确要求母语西语与英语 B2，不能按低语言门槛机会处理。",
    next: "只有达到母语西语水平才投递；作品集突出多市场品牌系统、邮件模板、产品转译与 AI 工作流。",
    languageKey: "spanish",
    language: "母语西语 + 英语 B2 为明确硬门槛",
    changeType: "refresh",
  },
  425: {
    direction: "brand",
    company: "Revolut",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Barcelona office / Spain remote",
    titleZh: "数字品牌设计师（当前官方可投）",
    titleEs: "Digital Designer (Brand)",
    reason: "官方职位页已直接核实：Barcelona 办公室与 Spain remote 均在可选地点中；工作是 app/web 的品牌系统与可扩展设计资源。",
    next: "仅通过官方申请页投递英文作品集；确认 Spain 合同主体、办公频率、薪资与工作许可。",
    languageKey: "english",
    language: "英文工作岗位；正文未列西班牙语硬门槛",
    changeType: "refresh",
  },
  24: {
    direction: "brand",
    company: "HKU Europe / 香港大学欧洲校区",
    chineseFit: true,
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 中文、英文、西语必需",
    titleZh: "市场与品牌传播专员（HKU Europe）",
    titleEs: "Marketing & Branding Officer — HKU Europe",
    reason: "品牌相邻岗位，不是纯平面/VI：负责品牌指南、官网/社媒/邮件、campaign、营销物料、供应商和视觉一致性。",
    next: "先确认西语工作能力、合同、薪资和实际视觉制作比例；卡片第一按钮直达官方 PDF，邮箱入口在后续按钮。",
    language: "中文、英文、西语均为 essential；西语是硬门槛",
    applicationMode: "spanish",
  },
  705: {
    direction: "social",
    company: "Tea Lab Barcelona / 茶饮品牌",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 中文 + 西语",
    titleZh: "社媒与内容创作者（中文-西语）",
    titleEs: "Social Media & Content Creator — Tea Lab Barcelona",
    reason: "内容方向，不是纯品牌/VI：涉及小红书、Instagram、TikTok、短视频和 AI 视频，同时包含门店日常运营。",
    next: "仅在未满 30 岁、中文西语可工作且接受门店运营/兼职可能时联系；卡片第一按钮直达招聘 PDF。",
    language: "中文 + 西语；30 岁以下；工时和合同待确认",
    applicationMode: "chineseCheck",
  },
  35: {
    direction: "brand",
    company: "Steneg / 未公开工业客户",
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 周边",
    statusKey: "live",
    titleZh: "平面设计师（品牌治理、包装与流程）",
    titleEs: "Diseñador/a gráfico/a — marca, packaging y procesos",
    reason: "正式全职、职业英语、未列西语要求，职责比一般物料岗更完整：品牌资产、包装、展会、目录、印刷、影像支持、素材库、版本控制和设计流程数字化。",
    next: "用英文简历和作品集申请；突出 B2B/工业品牌系统、包装、展会延展、印前与文件治理。由于客户匿名，先问雇主全称、地址、薪资、合同和混合办公，再提供敏感资料。",
    language: "高水平职业英语必需；公开说明未列西班牙语要求",
  },
  559: {
    direction: "brand",
    company: "INFiLED / 视爵光旭",
    chineseFit: true,
    statusKey: "live",
    titleZh: "平面设计师（品牌与市场视觉）",
    titleEs: "Diseñador/a gráfico/a — marca y marketing",
    reason: "目前最匹配的巴塞罗那正式设计岗之一。中国深圳品牌、巴塞办公室，工作覆盖品牌一致性、数字与印刷物料、网站、展会和多市场视觉延展。",
    next: "用英文简历和品牌作品集投领英；再给欧洲区招聘人员补一条消息，主动说明中文沟通与中国总部协作能力。",
    language: "英语可投；公开描述未显示西语硬门槛",
    applicationMode: "english",
  },
  759: {
    direction: "brand",
    company: "Insbrand",
    statusKey: "verify",
    titleZh: "兼职品牌设计师",
    titleEs: "Diseñador/a de marca a tiempo parcial",
    reason: "方向最贴近你的目标：Logo、VI、网站、产品视觉与中国企业国际品牌服务；公司同时在北京和巴塞罗那设点，中文沟通价值很高。",
    next: "先用中文邮件或 WhatsApp 确认兼职/自由职业合作是否仍开放，再发送 3–5 个最强的 VI 与数字品牌延展案例。",
    language: "中文环境友好；先确认当前语言要求",
    applicationMode: "chinese",
  },
  758: {
    direction: "social",
    company: "BOHEME 咖啡面包连锁",
    statusKey: "verify",
    titleZh: "宣传策划 / 新媒体运营",
    titleEs: "Planificación promocional y redes sociales",
    reason: "不是纯 VI，但非常接近本地华人品牌的数字延展：摄影、短视频、品牌宣传片、小红书、抖音和 Instagram 都在职责中。",
    next: "直接联系 Jennifer，附社媒视觉、短视频封面、活动海报和剪辑样片；第一句话说明中文熟练、西语正在学习。",
    language: "中文渠道；原帖未显示高西语门槛",
    applicationMode: "chinese",
  },
  761: {
    direction: "ecommerce",
    company: "Oasis Roots",
    titleZh: "独立站与社交媒体运营",
    titleEs: "Operaciones de web propia y redes sociales",
    reason: "中文内容、电商视觉和社媒品牌延展结合度高，涉及 Shopify、WordPress、产品页、小红书欧洲区、图片视频内容和 KOL/KOC。",
    next: "先邮件确认岗位仍开放，再发送电商 Banner、产品故事页、社媒模板和短视频封面案例。",
    language: "中文文案；西语 B1/B2 或英语可作为工作语言",
  },
  704: {
    direction: "ecommerce",
    company: "Yioucloud 易欧云",
    titleZh: "设计 / 网站 / 电商 / 短视频实习",
    titleEs: "Prácticas de diseño, web, e-commerce y vídeo",
    reason: "覆盖美工、海报、短视频、网站、电商和品牌推广，中文沟通友好；适合用实习切入巴塞罗那本地数字品牌工作。",
    next: "只有能提供学校实习协议时优先投；先发中文邮件确认 2026 年是否仍接收实习生。",
    language: "中文友好；需学校实习协议",
    applicationMode: "chinese",
  },
  702: {
    direction: "social",
    company: "SALSAWOK / 华夏调味品",
    titleZh: "短视频内容制作 / 新媒体",
    titleEs: "Creación de vídeo corto y nuevos medios",
    reason: "华人食品品牌的内容视觉岗位，适合从短视频、社媒运营与品牌内容切入；福利信息相对完整，且写明长期招聘。",
    next: "通过邮件或微信询问当前空缺，作品集突出食品拍摄、剪辑、社媒栏目和品牌内容系列。",
    language: "中文环境；需确认合法工作身份与西语要求",
    applicationMode: "chineseCheck",
  },
  309: {
    direction: "social",
    company: "Absolute Internship",
    statusKey: "live",
    titleZh: "创意营销实习（数字品牌视觉 / 短视频）",
    titleEs: "Prácticas de marketing creativo — visual y vídeo",
    reason: "巴塞罗那当前可直接提交的数字品牌岗位：负责 LinkedIn、Instagram、TikTok、YouTube 的视觉资产、封面与短视频，官方申请表已实测可用。",
    next: "用英文简历 + 作品集链接投官方表单；作品集首页先放社媒视觉系统、竖屏短视频和跨平台品牌延展，不要只放 Logo。",
    language: "未写西语硬门槛；国际团队，建议用英文投递",
  },
  807: {
    direction: "social",
    company: "TERTIO（主体待核实）",
    titleZh: "内容创作 / 平面设计专员",
    titleEs: "Especialista de contenido y diseño gráfico",
    reason: "华人渠道里少见的完整视觉内容岗位：产品拍摄、修图、Banner、社媒素材、短视频和品牌视觉统一都在职责中，且原帖未写西语门槛。",
    next: "先中文电话或微信确认仍在招、公司全称和日常工作语言；确认后再发电商视觉、社媒系列和短视频作品集，不先发送证件。",
    language: "中文可先沟通；原帖未写西语要求；需工作居留",
    applicationMode: "chineseCheck",
  },
  812: {
    direction: "social",
    company: "FunPlus",
    titleZh: "社区内容运营实习",
    titleEs: "Prácticas de gestión de comunidad y contenido",
    reason: "巴塞罗那官方当前岗位，中文明确是加分项，申请表可提交。它不是纯设计，但能进入中国背景游戏公司的创意、社区内容和创作者协作链路。",
    next: "用英文投递，突出中文、英文、游戏/科技内容、社媒视觉和短视频案例；只有能满足在读或临近毕业条件时优先。",
    language: "英语必需；中文加分；西语不是硬门槛",
    applicationMode: "english",
  },
  813: {
    direction: "social",
    company: "中文教育 / 华人社群项目（主体待核实）",
    statusKey: "verify",
    titleZh: "兼职新媒体助理（远程 / 灵活）",
    titleEs: "Asistente de redes sociales a tiempo parcial",
    reason: "低语言门槛和数字品牌内容匹配度很高：每月约 4 篇公众号与 8–12 条短视频，包含排版、封面、字幕、发布文案及小红书、TikTok、Instagram；西语仅为加分项。",
    next: "先用中文电话确认机构全称、薪资、合同或项目制、是否仍开放和试做是否有薪；确认后发公众号排版、社媒封面体系与竖屏短视频案例。",
    language: "中文可沟通；西语仅加分；不坐班、时间灵活",
    applicationMode: "chinese",
  },
  778: {
    direction: "production",
    company: "巴塞罗那华人广告公司",
    statusKey: "live",
    titleZh: "全职平面设计师",
    titleEs: "Diseñador/a gráfico/a a jornada completa",
    reason: "华信当前原帖（8 月 3 日发布、8 月 18 日到期）明确是 Barcelona 的一名全职平面设计师，要求经验、AI/Illustrator、工作居留和全保。它偏招牌、菜单、传单、名片等印刷落地，不是高端 VI；公司主体、薪资、工时与工作语言尚未公开。",
    next: "先微信 A644055418 用中文确认岗位仍开放、公司全称/CIF、地址、合同、全保、薪资、工时、试用期和工作语言；确认后再发送 Illustrator、菜单、招牌、海报与印刷落地作品。",
    language: "中文联系方式；工作语言未公开，须先确认",
    applicationMode: "chineseCheck",
  },
  787: {
    direction: "social",
    company: "EXTRATOOLS",
    titleZh: "电商社媒运营 / 短视频剪辑",
    titleEs: "Operaciones de redes y edición de vídeo",
    reason: "7 月 22 日发布的华人数字品牌岗，职责从选题、短视频剪辑一直到 TikTok / Instagram 发布和数据复盘；原帖没有写西语硬门槛。",
    next: "邮件附 3–5 个竖屏短视频、封面或账号案例；先问是否接受巴塞远程、混合或项目合作，并确认薪资区间和工作居留要求。",
    language: "中文渠道；原帖未写西语要求",
    applicationMode: "chinese",
  },
  788: {
    direction: "social",
    company: "巨一公司 / Getafe",
    titleZh: "产品与品牌视频拍摄 / 剪辑",
    titleEs: "Grabación y edición de vídeo de marca",
    reason: "7 月 22 日发布，明确制作产品、品牌、营销与客户案例视频，覆盖小红书、抖音、视频号、TikTok、YouTube，并与品牌设计团队协作。",
    next: "投递视频作品集或 Reel，邮件标题按原帖写“名字+应聘视频剪辑”；同时确认日常语言、驻场与出差频率。",
    language: "中文渠道；原帖写西语良好",
  },
  470: {
    direction: "digital",
    company: "Go Getop / Bygetop",
    titleZh: "平面设计 / 中国市场数字营销",
    titleEs: "Diseño gráfico y marketing digital para China",
    reason: "远程、中文市场和数字品牌延展匹配度高，涵盖社媒、广告、邮件、网站、展会图形及小红书、微信、微博等平台。",
    next: "投递前先确认是带薪实习、兼职雇佣还是项目制自由职业，再决定投入多少时间准备申请。",
    language: "普通话与英语；远程",
  },
  1019: {
    direction: "brand",
    company: "Kings League / Kosmos",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona, Spain",
    titleZh: "平面设计师（Photoshop 合成 / 体育娱乐视觉）",
    titleEs: "Graphic Designer — Photoshop y fotomontaje",
    reason: "官方 Teamtailor 原始详情现在明确写明职位不再有效；保留为 Barcelona 体育娱乐品牌视觉历史参考，不应继续当作可投岗位。",
    next: "不要通过旧 requisition 投递；只监测 Kings League/Kosmos 官方招聘页是否出现新的 Graphic Designer 或 Brand Visual requisition。",
    language: "官方页未明确语言；先用英文并确认西语/赛事沟通要求",
    applicationMode: "english",
    changeType: "round50",
  },
  1020: {
    direction: "motion",
    company: "COCUNAT",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Gervasi",
    titleZh: "Senior Video Ads Designer（品牌 × Performance 视频）",
    titleEs: "Senior Video Ads Designer / Video Editor (Ads)",
    reason: "官方 Personio 当前 requisition 2210442 显示 Apply、Barcelona、全职永久；职责把品牌规范、AI 视频、Premiere/After Effects、UGC、Meta/TikTok/YouTube 广告和多版本性能迭代连在一起，但英文/西语标题不同，需先确认工作语言与办公室条件。",
    next: "先确认西语、办公室出勤、薪资和测试；投递时用 Reel 展示前三秒 hook、UGC/产品片、多平台版本、字幕/声音、AI 辅助与品牌一致性，不要只发静态 VI。",
    languageKey: "english",
    language: "官方英文页未列西语硬门槛；英文材料可直接投递",
    applicationMode: "english",
    changeType: "round51",
  },
  1021: {
    direction: "brand",
    company: "ZOE",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "UK & EU remote",
    titleZh: "品牌性能设计师（Brand Performance）",
    titleEs: "Brand Performance Designer",
    reason: "官方 Ashby 明确 UK & EU、全职、远程、Apply；职责覆盖 Meta/TikTok/YouTube/Pinterest、素材本地化、Figma/Adobe 模板系统、品牌 DNA 和约 10% motion。Spain payroll、时区和高产 performance 要求仍需确认。",
    next: "先问 Spain 是否在实际可雇国家、合同/薪资、产品寄送与 performance test；材料放静态广告系统、native social 变体、hook/迭代、模板和数据反馈。",
    language: "英语远程；先确认团队时区和西班牙雇佣条件",
    applicationMode: "english",
    changeType: "round51",
  },
  1022: {
    direction: "brand",
    company: "Kota",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Europe eligibility to confirm",
    titleZh: "品牌设计师（品牌语言与数字触点）",
    titleEs: "Brand Designer",
    reason: "官方 Ashby 显示 Remote、全职、Apply；岗位是 Brand team 首个全职设计师，覆盖 visual identity、web、launch、campaign、social、sales、guidelines、templates、motion 与 product-brand alignment。可雇国家未公开。",
    next: "先询问 Spain/EU 合同实体、可雇国家、时区、薪资和 offsite；若可投，用 identity rationale、web/landing、campaign rollout、模板/guidelines、motion 和 shipped page 证明系统落地能力。",
    language: "英语远程；国家与时区需先确认",
    applicationMode: "english",
    changeType: "round51",
  },

  1023: {
    direction: "brand",
    company: "Adsmurai",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "数字艺术指导（Middle）",
    titleEs: "Digital Art Director Middle",
    reason: "官方 Teamtailor 详情页显示 Barcelona、Híbrido、indefinite 和 ENVÍA TU CV；职责覆盖 360º digital campaigns、Key Visual、look & feel、paid/organic assets、AI 与跨渠道视觉质量，但 Spanish + English 和页面相关职位列表冲突需先确认。",
    next: "先确认职位仍收件、语言、薪资和每周两天远程；若有效，用西语/英语双语材料突出 campaign concept、KV、视觉叙事、social ads、AI、copy/design collaboration 和客户提案。",
    language: "Spanish + English；先确认流利程度",
    applicationMode: "spanish",
    changeType: "round52",
  },
  1024: {
    direction: "motion",
    company: "DualEntry",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / EU / LATAM / UK",
    titleZh: "高级动效设计师（品牌 / 产品 / Marketing）",
    titleEs: "Senior Motion Designer (Remote)",
    reason: "官方 Ashby 新 requisition 显示 Remote (EMEA, NAMER, EU, LATAM, UK)、全职、Apply 和 USD45k–75k + equity；覆盖 marketing film、social ads、product demo、UI motion 和 motion style system，EST overlap 与 7+ 年是主要门槛。",
    next: "先确认 Spain 合同、实际 EST 重叠、薪资适用区间、股权和试做；用 motion-first Reel 展示 brand motion system、logo/title/transition、marketing film、UI/product demo、Lottie/Rive 和 AI workflow。",
    language: "英语；需覆盖 New York HQ 的 EST 重叠",
    applicationMode: "english",
    changeType: "round52",
  },
  1025: {
    direction: "motion",
    company: "Siena AI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote - Europe / contractor",
    titleZh: "动效设计师与视频制作人（品牌 / 产品发布）",
    titleEs: "Motion Designer & Video Producer (Contractor)",
    reason: "官方 Ashby 索引显示 Remote - Europe、Contract 和 Apply；职责覆盖产品发布视频、brand motion、UI animation、storyboard、sound/music direction 与 AI-native workflow，但直接 ATS 页面本轮只返回 JavaScript 应用壳。",
    next: "先确认 Spain resident 是否可签 contractor、报价/付款币种、税务与时区；若可投，用英文 motion-first Reel 展示 launch film、品牌动效系统、UI motion、storyboard 到 final export 和 AI workflow。",
    language: "英语；Spain 合同与付款资格需先确认",
    applicationMode: "english",
    changeType: "round53",
  },
  1026: {
    direction: "motion",
    company: "Labhouse",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain remote; hybrid rhythm",
    titleZh: "营销视频剪辑师（性能广告 / AI 视频）",
    titleEs: "Marketing Video Editor",
    reason: "官方 Ashby 显示 Barcelona、Spain (Remote)、Full-time、Apply；职责覆盖 TikTok/Instagram/Facebook app ads、hooks、retention、motion graphics、Premiere/After Effects 和 AI creative tools，页面同时写明西语与英语以及 Barcelona 每周至少两天到 Tech City 的混合节奏。",
    next: "先确认西语工作强度、每周到岗、薪资和 technical case；若可投，用 performance-video Reel 展示 15–30 秒广告、brand consistency、motion graphics、AI-assisted production、A/B variants 和结果数据，不要只发静态品牌页。",
    language: "英语 + 西语；Barcelona hybrid 与 technical case 需确认",
    applicationMode: "spanish",
    changeType: "round54",
  },
  1027: {
    direction: "brand",
    company: "Deel",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain listed; senior web-brand scope",
    titleZh: "艺术指导（网站设计 / 品牌数字系统）",
    titleEs: "Art Director / Web Design",
    reason: "官方 Ashby 索引明确 Remote、Spain、Full-time、Apply；职责连接品牌表达与网站 performance，覆盖网站创意方向、Website Design System、responsive UX/UI、CRO/SEO、测试和可扩展 web operations，但 9+ 年与高级 portfolio 是硬门槛。",
    next: "先确认 Spain 雇佣实体、Barcelona resident 资格、级别/薪资、团队时区和 web portfolio 期望；若匹配，用英文高级材料展示从 VI/brand expression 到网站落地、tokens/components、landing/CRO、A/B 迭代、可访问性和性能，不要只展示 logo。",
    language: "英语国际远程；Spain payroll 与 9+ 年需确认",
    applicationMode: "english",
    changeType: "round56",
  },};

Object.assign(CURATED, {
  832: {
    direction: "digital",
    company: "Mind the Bridge",
    statusKey: "live",
    titleZh: "初级视觉设计师（营销 / 社交媒体实习）",
    titleEs: "Diseñador/a visual junior (prácticas de marketing y redes)",
    reason: "方向非常贴近品牌视觉与数字延展：企业视觉、演示文稿、数字活动物料、信息图和跨平台社交资产都在职责内；流利英语是必需项，西班牙语或意大利语仅为加分项。",
    next: "用英文简历和作品集直接申请；首页先放完整品牌系统、数字活动延展、社交模板和信息图，并在求职信中询问实习协议、薪资、合同期限与居留要求。",
    language: "英语必需；西班牙语或意大利语仅为加分项",
  },
  833: {
    direction: "brand",
    company: "Proexpo",
    titleZh: "社交媒体与品牌内容负责人",
    titleEs: "Responsable de redes sociales y contenido de marca",
    reason: "职责从社交内容日历、Reels 和案例延伸到官网、宣传册、演示文稿、艺术指导与 AI 视觉，和数字品牌延展高度吻合；但优秀西班牙语与英语文案是明确硬门槛。",
    next: "作为挑战岗投递。作品集突出高端 B2B 品牌、社交栏目、案例叙事、宣传册和演示文稿；申请时如实说明西语水平，并说明文案校对方案。",
    language: "英语与西班牙语优秀文案能力均为硬要求",
  },
  834: {
    direction: "social",
    company: "SNUZIA SL / Twine",
    titleZh: "短视频内容创作者 / 视频剪辑（自由职业）",
    titleEs: "Creador/a de contenido y editor/a de vídeo freelance",
    reason: "Barcelona 现场拍摄并剪辑 Instagram Reels、TikTok 与 Meta 广告，正文为英文且未写西语要求；它更偏社交短视频，不是 VI，且属于自由职业和尼古丁产品行业。",
    next: "优先从 Twine 投递；若免费账号受限，先用公司官网邮箱询问是否接受直接作品集。沟通前确认预算、交付量、设备、素材版权、付款节点、合同主体和现场地址。",
    language: "英文职位说明；未写西班牙语要求",
  },
  835: {
    direction: "brand",
    company: "Revolut",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌平面设计师（品牌系统 / 动态视觉）",
    titleEs: "Diseñador/a gráfico/a de marca — sistemas y motion",
    reason: "纯品牌方向高度匹配：负责品牌文档、设计系统、指南、视觉资产和动态设计；官方职位仍可申请，并明确接受西班牙远程，公开描述没有西语硬门槛。",
    next: "只从 Revolut 官方职位页投递。英文作品集首页放完整 VI、品牌指南、数字渠道延展和 motion / storyboard 案例，并确认西班牙合同主体与薪资。",
    language: "英文岗位；未写西班牙语要求",
  },
  836: {
    direction: "digital",
    company: "Adsmurai",
    titleZh: "数字平面设计师（广告活动 / 社交媒体）",
    titleEs: "Diseñador/a gráfico/a digital — campañas y redes",
    reason: "工作覆盖品牌规范适配、社交广告、TikTok 视频、演示文稿和宣传册，数字品牌延展很完整；但客户沟通需要流利西班牙语和英语。",
    next: "作为挑战岗投递。作品集突出整套数字活动、多尺寸适配、社交广告和短视频，不要只放 Logo；无法进行西语会议时先降低优先级。",
    language: "流利西班牙语与英语为硬要求",
  },
  837: {
    direction: "social",
    company: "All Yours",
    titleZh: "社交媒体视频内容创作者",
    titleEs: "Creador/a de contenido de vídeo para redes",
    reason: "香水和 clean beauty 品牌的完整视频内容岗：概念、拍摄、CapCut 剪辑、账号增长、达人与 UGC 都在职责中；页面仍可打开且标明年薪。",
    next: "只有能用西语写文案、管理评论并出镜时再投；作品集聚焦美容产品视频、Instagram / TikTok 系列和品牌语气一致性。",
    language: "Castellano 必需；英语 C2",
  },
  838: {
    direction: "brand",
    company: "eMascaró",
    locationKey: "remote",
    locationLabel: "远程 / Barcelona 团队",
    titleZh: "资深品牌设计师（远程自由职业）",
    titleEs: "Diseñador/a senior de marca freelance",
    reason: "职责几乎就是完整 VI 与数字延展：Logo、字体、色彩、网格、图形、品牌手册、数字系统和 motion；但要求 7 年以上经验，且官网当前清单未单列该职位。",
    next: "先通过官方人才表单确认岗位当前是否开放和项目工作语言；获得肯定答复后再发高端品牌、完整指南与数字系统作品集。",
    language: "未公开语言要求；需先确认西语使用场景",
  },
  839: {
    direction: "ecommerce",
    company: "Masderm / KERVLAN LAB SL",
    locationKey: "remote",
    locationLabel: "100% 远程",
    titleZh: "自由职业平面设计师（电商 / 社媒 / 包装）",
    titleEs: "Diseñador/a gráfico/a freelance — e-commerce, redes y packaging",
    reason: "方向很贴美容电商、Amazon、CRM 邮件、社媒和包装，但原 Domestika 职位已跳回列表，不能按当前空缺展示。",
    next: "仅作冷询问：从品牌官方联系页礼貌询问未来是否还需要长期自由职业设计师；不要把客服邮箱写成招聘邮箱，也不要声称职位仍开放。",
    language: "原职位未写语言要求；当前已下线",
  },
});

Object.assign(CURATED, {
  930880: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / permanent / 全职",
    titleZh: "高级平面设计师（美妆护肤品牌视觉）",
    titleEs: "Senior Graphic Designer",
    reason: "2026-08-13 已逐字读取官方 Factorial 职位 302205：页面有 Apply now，明确 Barcelona、混合办公、永久全职；职责覆盖美妆、护肤、健康与生活方式品牌的社媒、付费广告、Campaign、演示和数字视觉，并要求维护品牌一致性。",
    next: "这是 5–7 年以上的高级岗。只有在作品集具备高端消费品牌、社媒 Campaign 系统、修图合成、排版和 AI 辅助视觉开发时优先投；以官方 ATS 为唯一主入口，不重复投 LinkedIn 镜像。",
    language: "英语必需；西班牙语仅为优先项，不是硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5–7 年以上",
    changeType: "round-35-new-official",
  },
  930881: {
    direction: "motion",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / permanent / 全职",
    titleZh: "高级视频剪辑与动态创意（品牌内容）",
    titleEs: "Senior Video Editor & Motion Creative",
    reason: "2026-08-13 官方 Dragons 职位板和精确 Factorial 职位 308042 均显示当前可申请。岗位负责 Campaign 影片、TVC、社媒、品牌内容、Motion、动画、情绪板、AI 工作流以及与 3D 团队协作。",
    next: "这是剪辑优先、Motion 为辅的 7 年以上高级岗，不是纯 VI。只有具备高级品牌影片剪辑、Premiere Pro、After Effects、视觉叙事和高端消费品牌案例时再投入申请时间。",
    language: "流利英语必需；其他语言仅为加分项",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 7 年以上",
    changeType: "round-35-new-official",
  },
  88: {
    ...CURATED[88],
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / permanent / 全职",
    titleZh: "平面设计负责人（品牌系统与团队管理）",
    titleEs: "Lead Graphic Designer",
    reason: "2026-08-13 已把旧 LinkedIn 待核验卡升级为官方 Factorial 职位 301871。页面有 Apply now，明确 Barcelona、混合办公、永久全职；工作包含可扩展品牌系统、360 Campaign、FMCG、多团队工作流、质量标准和设计团队管理。",
    next: "西语和英语均为硬门槛，并要求 7–8 年经验及管理资历。资历或西语不足时不要让它挤占初中级本地岗位的申请时间。",
    language: "西班牙语与英语均为必需",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "负责人 / 7–8 年 / 团队管理",
    changeType: "round-35-promoted-official",
  },
  778: {
    ...CURATED[778],
    direction: "production",
    company: "巴塞罗那华人广告公司（主体待核实）",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 地址与公司主体待核实",
    titleZh: "华人广告公司全职平面设计师（8 月持续重发）",
    titleEs: "Diseñador/a gráfico/a a jornada completa",
    reason: "华人通原始详情显示同一联系人在 2026-08-03、08-05、08-06 连续重发同一 Barcelona 全职平面设计岗位。最新页面 184673 可读，明确要求有经验、会 AI/Illustrator、备工作居留并写明全保，提供中文微信和电话。",
    next: "只恢复为一张当前卡，不把三次重发算成三个岗位。先用中文询问公司全称/CIF、地址、具体职责、薪资、工时、合同、试用期、付费试稿和日常工作语言；未核实主体前不要发送证件扫描件或可编辑源文件。",
    language: "中文可直接联系；日常工作语言未公开；需工作居留",
    languageKey: "chineseCheck",
    applicationMode: "chineseCheck",
    experienceKey: "unknown",
    experienceLabel: "有经验 / 年限未公开",
    changeType: "round-35-restored-current-reposts",
  },
  930882: {
    direction: "digital",
    company: "Duna",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / Barcelona 可居住 / 全职",
    titleZh: "视觉设计师（品牌延展、网页与信息图形）",
    titleEs: "Visual Designer",
    reason: "2026-08-13 已逐字读取 Duna 官方 Ashby 职位数据，并与雇主 careers 页面交叉核对。岗位当前为 listed、Remote、FullTime；负责 GTM 视觉语言、销售演示、单页资料、对比图、LinkedIn、网站与落地页视觉、图标、插画、信息图和复杂概念图示，要求在现有品牌指南内高质量执行。",
    next: "优先提交网页、演示、社媒系统、图表信息可视化和快速多格式延展案例。该岗不是从零搭建 VI 的品牌负责人；进入面试前确认西班牙用工/合同主体、薪资范围以及线下团队周安排。",
    language: "官方职位全文为英语；未列其他语言硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级至高级 / 3–6 年",
    changeType: "round-36-new-official",
  },
});

Object.assign(CURATED, {
  930883: {
    direction: "brand",
    company: "reboot",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / remote-hybrid preference / 全职",
    titleZh: "高级品牌设计师（VI 系统、动态与网页延展）",
    titleEs: "Senior Brand Designer",
    reason: "同日首次打开时页面仍显示完整职位和申请入口，但最终直链复查已跳到 expired_jd_redirect。职责非常匹配，当前状态却必须以最终跳转为准。",
    next: "只保留作 VI 作品集和岗位画像参考；不要借用 reboot 的 Web Designer 通用表单投递，等新的独立 requisition 出现再恢复。",
    language: "职位全文为英语；流利英语写作 bonus，未列西语硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "round-37-same-day-expired",
  },
  930884: {
    direction: "social",
    company: "Ogilvy",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "社交媒体艺术指导（品牌一致性与动效）",
    titleEs: "Art Director (Social Media)",
    reason: "当前原始详情完整列出 Instagram、TikTok、YouTube 视觉概念和素材、品牌一致性、Adobe、视频与基础 motion；要求至少 2 年 agency 经验。",
    next: "优先放社媒 Campaign 系统、动态和品牌延展案例；公开 JD 没写日常语言，投递前先确认西语是否硬性。",
    language: "公开 JD 为英语；未明确日常工作语言或西语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / agency 2 年以上",
    changeType: "round-37-new-current",
  },
  930885: {
    direction: "brand",
    company: "Buzz Marketing Networks",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 每周 2 天办公室 + 3 天远程 / 全职",
    titleZh: "艺术指导（品牌 Campaign 与视觉概念）",
    titleEs: "Director/a de arte",
    reason: "当前原始详情涵盖品牌 Campaign、视觉概念、moodboard、风格定义、与 copy 协作及必要时亲自设计；混合办公条件明确。",
    next: "西语 JD 且要求 5 年经验，按本地西语高级岗处理；先确认语言硬门槛和薪资。",
    language: "职位正文为西班牙语；未单列语言要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年",
    changeType: "round-37-new-current",
  },
  930886: {
    direction: "production",
    company: "Establishment Labs",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 学生实习",
    titleZh: "项目协调与平面设计实习（30% 设计）",
    titleEs: "Junior Project Coordinator & Graphic Designer",
    reason: "职位当前开放，英语为硬门槛，设计工作包括品牌模板、演示、宣传册、社媒素材和印刷文件；但职责明确是约 70% 项目协调、30% 平面设计。",
    next: "只在能签学校 convenio 且接受协调工作时申请；先问薪资、周期、工时和转正可能性。",
    language: "英语流利或母语为必需；西语仅加分",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "internship",
    experienceLabel: "实习 / 必须在读并可签 convenio",
    changeType: "round-37-new-current",
  },
  930887: {
    direction: "other",
    company: "Lateral Thinking",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 开始日期文本待确认",
    titleZh: "高级空间设计师（品牌体验与沉浸式环境）",
    titleEs: "Senior Spatial Designer",
    reason: "当前页面有申请入口并要求品牌驱动的空间叙事、沉浸式环境、装置、3D/CAD 和 Adobe；但模板仍写理想入职时间为 2026 年 1 月。",
    next: "西语流利、5 年和空间/3D/CAD 是硬门槛；先确认岗位及入职日期确实有效，再准备作品。",
    language: "流利西班牙语为必需；英语和加泰语加分",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 / 空间设计",
    changeType: "round-37-new-current-with-stale-date",
  },
  930888: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid（通常每周约 4 天办公室）/ 全职",
    titleZh: "艺术指导（品牌识别、整合 Campaign 与 AI）",
    titleEs: "Art Director",
    reason: "当前原始详情有申请入口，工作包括品牌识别、整合 Campaign、Adobe、AI、社媒，Figma、motion 和视频为加分项。",
    next: "加泰语与中高英语、5–6 年 agency 经验均为硬门槛，因此保留为低优先级高级备选。",
    language: "中高英语与加泰语均为必需",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / agency 5–6 年以上",
    changeType: "round-37-new-current",
  },
});

// Round 31 rechecks the highest-ranked cards against the exact current route.
// Search-engine snapshots may still render a former Apply form, but direct
// redirects and contradictory employer-page controls take precedence.
Object.assign(CURATED, {
  930839: {
    ...CURATED[930839],
    statusKey: "closed",
    reason: "CATORCE 的旧 Visual Designer 编号 4797510008 当前直连会跳到带 error=true 的职位总表；当前职位板已不再列出该岗位。另一个仍开放的 Studio Designer & HTML Programmer 已作为独立卡片保留，不能拿它替代旧岗位状态。",
    next: "保留旧岗位职责用于作品集对照，但不要继续投递搜索缓存中的表单；只有新的具体职位编号重新出现并能直达申请页时才恢复。",
    changeType: "round-31-direct-route-closed",
  },
  1107: {
    ...CURATED[1107],
    statusKey: "verify",
    reason: "THRU 页面正文仍完整列出 Graphic Designer with Motion Skills、Barcelona 办公方式、2026-09-15 截止日、动效测试和 jobs@thrumotion.com；但同页页脚同时写着 NO JOB OPENINGS，状态存在雇主页面内部冲突。",
    next: "先给 jobs@thrumotion.com 发一封简短确认邮件，得到书面确认后再投入时间完成 After Effects 复刻测试；确认前不把它算作完全开放。",
    changeType: "round-31-employer-page-conflict",
  },
  1310: {
    ...CURATED[1310],
    direction: "ecommerce",
    titleZh: "艺术指导（电商创意部门）",
    titleEs: "Art Director - Creative Department (eCommerce)",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona 可居住 / 细节待确认",
    languageKey: "unknown",
    language: "公开详情未说明日常工作语言",
    reason: "LinkedIn 原职位 4429897831 当前能返回准确岗位名 Art Director - Creative Department (eCommerce)、Spain 和申请入口；但完整职责、资历、薪资、合同主体与工作语言尚未公开。",
    next: "先从申请入口索取完整 JD，并确认 Spain 合同、薪资、时区、语言与 Barcelona 居住资格；确认前保持低置信度，不做无薪测试。",
    changeType: "round-31-title-and-route-repair",
  },
});

// Round 18: refresh current Barcelona roles against their original employer
// detail or official ATS. Search-result timestamps never override the actual
// application state, and misleading titles are described by their real scope.
const round18Hp = allData.find((item) => Number(item.id) === 162);
if (round18Hp) {
  Object.assign(round18Hp, {
    section: "2026-08-12 Round 18 original-detail audit",
    source: "HP / official Workday ATS",
    opportunity: "Graphic Designer",
    fit: "Sant Cugat hybrid full-time; marketing collateral and communications-program leadership rather than a pure hands-on VI role",
    location: "Sant Cugat del Vallès, Barcelona province; full-time; hybrid model depending on role and function",
    status: "HP's official Workday requisition 3165191 was opened on 2026-08-12 and shows Apply, Sant Cugat del Valles, Full time, Posted 4 Days Ago and an active application route. The title says Graphic Designer, but the detailed responsibilities are mainly marketing collateral, customer-reference management, awareness and promotional programmes, communications planning, measurement, budgets and agency coordination. Four to seven years in direct marketing, communications or a related field is recommended; no design software, salary, Spanish requirement or sponsorship policy is published.",
    contact: "Official detail/application: https://hp.wd5.myworkdayjobs.com/en-US/externalcareersite/job/Sant-Cugat-del-Valles-Barcelona-Spain/Graphic-Designer_3165191-1",
    analysis: "Add to the reviewed Barcelona board, but keep below genuine brand/VI roles. It may suit a designer with strong marketing-communications and programme-management evidence; do not assume the day-to-day is hands-on graphic design. Confirm portfolio expectations, actual creative-production share, working language, salary, hybrid days and work authorisation before applying.",
    score: 66,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Marketing communications / collateral / programme management",
    sourceGroup: "official",
    postedAt: "2026-08-08",
    freshnessTag: "week",
    freshnessAgeDays: 4,
    links: ["https://hp.wd5.myworkdayjobs.com/en-US/externalcareersite/job/Sant-Cugat-del-Valles-Barcelona-Spain/Graphic-Designer_3165191-1"],
    searchText: "HP official Workday 3165191 Graphic Designer Sant Cugat del Valles Barcelona full-time hybrid Apply posted four days marketing collateral direct mail catalog brochures spec sheets white papers sales tools newsletters email customer references communications programmes measurement budgets 4-7 years not pure VI",
  });
}

const round18Ddb = allData.find((item) => Number(item.id) === 308);
if (round18Ddb) {
  Object.assign(round18Ddb, {
    section: "2026-08-12 Round 18 original-detail audit",
    status: "DDB Spain's official Greenhouse requisition 5137116008 was opened on 2026-08-12 and shows Barcelona, Apply and a complete application form. It leads CRM and email visual design, responsive communications, CMS-based web design, components, styles and digital brand guides. More than four years, Figma, Adobe, UX/UI and responsive-design experience are required; the Spanish-language application asks for portfolio, salary expectation, notice period, office availability and work authorisation.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/uneteaddbspain/jobs/5137116008",
    analysis: "Keep as a current Barcelona digital-brand extension opportunity. It is strong for Figma systems, email, web components and brand-guideline implementation, but senior and Spanish-first; confirm salary and office rhythm before applying.",
    links: ["https://job-boards.greenhouse.io/uneteaddbspain/jobs/5137116008"],
    searchText: "DDB Spain TBWA DDB current official Greenhouse 5137116008 Digital Art Director Barcelona Apply CRM email newsletters responsive CMS web components styles digital brand guides Figma Adobe UX UI HTML CSS Spanish workflow 4 years",
  });
}

const round18Lateral = allData.find((item) => Number(item.id) === 117);
if (round18Lateral) {
  Object.assign(round18Lateral, {
    section: "2026-08-12 Round 18 original-detail audit",
    status: "The current LinkedIn employer detail 4436668875 was opened again on 2026-08-12 and still shows Barcelona and Solicitar. The role owns visual strategy for brand experiences across visual identity, key visuals, signage, print, digital/offline assets, installations and production supervision. Five-plus years and fluent Spanish are explicit; English and Catalan are advantages.",
    contact: "Current original detail/application: https://es.linkedin.com/jobs/view/we%E2%80%99re-hiring-%E2%80%93-art-director-at-lateral-thinking-4436668875",
    analysis: "Keep live but below low-language-barrier roles. The VI and experiential-brand fit is excellent, while fluent Spanish, seniority and hands-on production/installation supervision are hard gates.",
    links: ["https://es.linkedin.com/jobs/view/we%E2%80%99re-hiring-%E2%80%93-art-director-at-lateral-thinking-4436668875"],
    searchText: "Lateral Thinking current original LinkedIn 4436668875 Art Director Barcelona Solicitar brand experiences visual strategy visual identity key visual signage print digital offline assets installations production fluent Spanish 5 years English Catalan plus",
  });
}

Object.assign(CURATED, {
  162: {
    direction: "production",
    company: "HP",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / hybrid / full-time",
    titleZh: "平面设计师（实际偏市场传播与物料统筹）",
    titleEs: "Graphic Designer",
    reason: "官方 Workday 当前有 Apply，地点和全职状态明确；但正文重心是营销物料、客户案例库、传播项目、效果衡量、预算与代理商管理，并未列出设计软件或纯 VI 产出要求。",
    next: "可作为 Barcelona 正式岗位备选，但先确认实际动手设计占比、作品集要求、团队工作语言、薪资、混合办公天数与工签；不要仅凭 Graphic Designer 标题高估匹配度。",
    language: "官方英文职位页；未公开西语硬门槛，实际工作语言需确认",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高阶 / 推荐 4–7 年市场传播或相关经验",
    changeType: "round-18-official-discovery",
  },
  308: {
    ...CURATED[308],
    statusKey: "live",
    changeType: "round-18-official-refresh",
  },
  117: {
    ...CURATED[117],
    statusKey: "live",
    changeType: "round-18-current-refresh",
  },
  930854: {
    direction: "motion",
    company: "Jungle / PS21Barna",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Carrer d'Àlaba / hybrid full-time",
    titleZh: "广告视频剪辑与基础动态视觉",
    titleEs: "Art Director / Video Editor",
    reason: "当前 LinkedIn 雇主详情有 Solicitar 和完整正文；真实工作以广告叙事剪辑、社媒格式、基础 motion、调色、修图、音频与素材管理为主，不是品牌 VI 主导岗。",
    next: "仅作为 motion / 内容方向备选。用 showreel 证明 Premiere、After Effects、DaVinci、节奏叙事和多平台适配；先确认西语、薪资、合同、办公天数与工签。",
    language: "正文和本地代理商流程为西语；未单列等级，按需要工作西语处理",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–4 年 agency 或 production 经验",
    changeType: "round-18-original-discovery",
  },
  930855: {
    direction: "brand",
    company: "HAAN",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / closed history",
    titleZh: "初级艺术指导（已关闭）",
    titleEs: "Junior Art Director (closed)",
    reason: "原始 LinkedIn 详情明确写明 Ya no se aceptan solicitudes；搜索列表的新鲜时间不能覆盖详情页关闭状态。",
    next: "只保留作 70% 平面设计、30% 艺术指导的作品集参考；等待新的独立招聘编号，不通过镜像投递。",
    language: "历史职位；当前无有效申请入口",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初中级 / 已关闭",
    changeType: "round-18-closed-audit",
  },
});

// Round 19: correct fresh-looking search results against the original detail
// or employer-owned careers endpoint. Keep every lead in history, but do not
// let recycled list timestamps or cached Apply labels reopen removed jobs.
const round19Miin = allData.find((item) => Number(item.id) === 9001);
if (round19Miin) {
  Object.assign(round19Miin, {
    section: "2026-08-12 Round 19 original-detail audit",
    source: "MiiN Korean Cosmetics / LinkedIn external apply + official employer page",
    fit: "Excellent Barcelona brand, packaging, ecommerce, retail and multi-channel graphic-design brief; named vacancy is closed",
    location: "Barcelona in the former brief; current application no longer available",
    status: "Closed/history: fresh-looking LinkedIn records 4237943106 and 4367179537 were checked on 2026-08-12. The employer-site Apply flow points to empleos.miin-cosmetics.com/jobs/graphic-designer-barcelona-40h, which returns a Closed job listing notice. The search-list publication time does not reopen the official vacancy.",
    contact: "Closed employer detail: https://empleos.miin-cosmetics.com/jobs/graphic-designer-barcelona-40h ; stale LinkedIn details: https://www.linkedin.com/jobs/view/4237943106 and https://es.linkedin.com/jobs/view/graphic-designer-barcelona-40h-at-miin-korean-cosmetics-4367179537",
    analysis: "Preserve the complete former scope as a portfolio benchmark, but do not apply through LinkedIn or a mirror. The separately tracked Head of Creative and Content requisition is a different, senior and Spanish-hard-gate role and must not be treated as a replacement for this Graphic Designer opening.",
    score: 24,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed graphic / brand / packaging",
    sourceGroup: "official",
    links: [
      "https://empleos.miin-cosmetics.com/jobs/graphic-designer-barcelona-40h",
      "https://www.linkedin.com/jobs/view/4237943106",
      "https://es.linkedin.com/jobs/view/graphic-designer-barcelona-40h-at-miin-korean-cosmetics-4367179537",
    ],
    searchText: "MiiN Korean Cosmetics Graphic Designer Barcelona 40h closed official employer page fresh LinkedIn stale visual identity packaging ecommerce retail digital paid social newsletter web presentations Figma Adobe After Effects",
  });
}

const round19Revolut = allData.find((item) => Number(item.id) === 835);
if (round19Revolut) {
  Object.assign(round19Revolut, {
    section: "2026-08-12 Round 19 original-detail audit",
    status: "Closed/history: a public LinkedIn result list surfaced former Graphic Designer (Brand) requisition 4324505158 as if it had been posted hours ago. The signed-in original detail was opened on 2026-08-12 and explicitly says Ya no se aceptan solicitudes and that it was shared six months ago. The former official Revolut requisition also remains unavailable.",
    contact: "Closed original LinkedIn detail: https://www.linkedin.com/jobs/view/4324505158 ; removed official detail: https://www.revolut.com/en-LV/careers/position/graphic-designer-brand-5b5689c2-5dae-4891-935a-052108c47362/",
    analysis: "Keep this exact Graphic Designer (Brand) requisition closed. The separately tracked current Revolut Digital Designer (Brand) official role remains the only live canonical Revolut brand-design card; do not merge the two titles or count the stale LinkedIn result as another opening.",
    links: [
      "https://www.linkedin.com/jobs/view/4324505158",
      "https://www.revolut.com/en-LV/careers/position/graphic-designer-brand-5b5689c2-5dae-4891-935a-052108c47362/",
    ],
    searchText: "Revolut Graphic Designer Brand 4324505158 six months no longer accepting applications closed stale fresh public result current Digital Designer Brand is separate",
  });
}

Object.assign(CURATED, {
  9001: {
    ...CURATED[9001],
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / official vacancy closed",
    titleZh: "平面设计师（品牌、包装与电商）—官方招聘已关闭",
    titleEs: "Graphic Designer - Barcelona - 40h (closed)",
    reason: "LinkedIn 列表仍把旧岗位显示得很新，但外部申请最终落到 MiiN 官方 Closed job listing；搜索时间不能覆盖官方关闭状态。",
    next: "保留完整 JD 作作品集对标，不从镜像投递；等待新的独立职位编号。MiiN 的 Head of Creative and Content 是另一个高资历且要求英语+西语的岗位。",
    language: "历史职位；当前无有效申请入口",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "原要求 4 年以上 / 当前已关闭",
    changeType: "round-19-closed-correction",
  },
  835: {
    ...CURATED[835],
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "Spain remote / former requisition closed",
    titleZh: "品牌平面设计师—旧职位已停止接收申请",
    titleEs: "Graphic Designer (Brand) (closed)",
    reason: "LinkedIn 搜索列表把编号 4324505158 显示成数小时前发布，但登录后的原始详情明确写着 6 个月前发布且 Ya no se aceptan solicitudes。",
    next: "只使用网站里另一个当前可投的 Revolut Digital Designer (Brand) 官方卡；不要把旧 Graphic Designer (Brand) 当作第二个岗位。",
    language: "历史职位；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "历史职位 / 已关闭",
    changeType: "round-19-closed-correction",
  },
  930856: {
    direction: "brand",
    company: "N26",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / official page 404",
    titleZh: "品牌设计师—搜索缓存仍在，官方页已下线",
    titleEs: "Brand Designer (closed)",
    reason: "搜索索引仍展示 Apply 和完整英文 JD，但 N26 官方职位编号 6933534 直接返回 404，不能算当前机会。",
    next: "把品牌 campaign、视觉系统与多渠道延展要求保留作作品集对标；只有 N26 出现新官方职位编号时才恢复。",
    language: "历史英文职位；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "原要求 2–4 年 / 当前已关闭",
    changeType: "round-19-closed-discovery",
  },
  930857: {
    direction: "brand",
    company: "Airtool",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / LinkedIn detail expired",
    titleZh: "品牌与数字平面设计师—职位链接已失效",
    titleEs: "Graphic Designer (Brand & Digital) (closed)",
    reason: "职责很贴品牌识别、设计系统、web 与 campaign，但 LinkedIn 原始编号已跳到过期列表，也没有找到当前雇主 ATS。",
    next: "保留作 Airtool 监控线；不要用聚合站回复按钮冒充雇主投递。等待新的独立招聘编号。",
    language: "旧 JD 要求良好英语；当前职位已失效",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 当前已关闭",
    changeType: "round-19-closed-discovery",
  },
  930858: {
    direction: "brand",
    company: "NSN Never say never",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / LinkedIn ID removed",
    titleZh: "体育娱乐品牌平面设计师—原始职位已删除",
    titleEs: "Graphic Designer (closed)",
    reason: "登录状态打开 LinkedIn 编号 4321055301，页面明确显示 ID 无效或已删除；第三方保存的 JD 不能替代当前投递入口。",
    next: "仅保留品牌 activation、数字/印刷/社媒/现场活动要求作高阶作品集参考；新编号出现前不投。",
    language: "旧 JD 要求母语西语与熟练英语；当前已关闭",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "原要求 5 年以上 / 当前已关闭",
    changeType: "round-19-closed-discovery",
  },
  930859: {
    direction: "brand",
    company: "Europastry",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / current listing signal",
    titleZh: "平面设计师（品牌、包装、印刷与动态）—需先找回原始投递页",
    titleEs: "Graphic Designer",
    reason: "当前 LinkedIn 列表反复显示 Europastry 在 Sant Cugat 招聘；完整旧 JD 很匹配，但本轮没有找回稳定职位编号、雇主 ATS 或直接申请按钮。",
    next: "先从 Europastry 官方人才页或公司招聘人员确认该岗位是否为新一轮招聘，并索取当前职位链接；确认后再准备品牌、包装、印刷成品、motion 与拍摄案例。",
    language: "保存的 JD 明确英语 B2；实际西语工作要求需确认",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "5 年以上 / 当前入口待找回",
    changeType: "round-19-verify-discovery",
  },
});

Object.assign(CURATED, {
  840: {
    direction: "brand",
    company: "Randstad Professional",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "西班牙 100% 远程",
    titleZh: "初级平面设计师（医药品牌）",
    titleEs: "Diseñador/a gráfico/a junior — sector farmacéutico",
    reason: "很适合当前语言条件的初级入口：西班牙全远程、只明确要求职业英语，工作围绕医药企业的营销与传播视觉；1–2 年经验即可，年薪 €30,000–35,000。",
    next: "从 Randstad 官方页提交英文简历和作品集；首页先放品牌规范执行、跨渠道营销物料、演示文稿与复杂信息可视化，并确认西班牙合同、工作许可和临时合同主体。",
    language: "职业英语必需；公开职位未列西班牙语要求",
  },
  841: {
    direction: "digital",
    company: "European Blockchain Convention",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合 / 兼职自由职业",
    titleZh: "自由职业平面设计师（数字品牌与活动视觉）",
    titleEs: "Diseñador/a gráfico/a freelance — marca digital y eventos",
    reason: "原 LinkedIn 当前可投：Barcelona、hybrid、兼职、freelance。品牌概念、style guide、数字/印刷/社媒与活动 campaign 匹配，但它不是带固定薪资的全职岗位。",
    next: "用英文 Easy Apply 或邮件发 3 个相关案例链接；先问费率、每周工时、autónomo/合同、付款周期和到场频率，不做无薪试稿。",
    language: "英文可投；公开说明未列西班牙语要求",
  },
  842: {
    direction: "brand",
    company: "Bassols 1790",
    titleZh: "初级平面设计与传播支持",
    titleEs: "Diseñador/a gráfico/a junior y apoyo de comunicación",
    reason: "品牌、包装、shooting、社媒、网站与企业物料都在职责内，并有公开 HR 邮箱和 €18,000–20,000 薪资；但文案工作和申请问题均为西语，语言风险真实存在。",
    next: "只作为挑战投递：用工具辅助准备西语邮件并如实说明水平，附品牌/包装/社媒案例，按原帖回答匹配原因、最自豪项目和薪资预期；先确认 prácticas 合同资格与团队工作语言。",
    language: "未列等级，但西语文案与沟通是实际工作门槛",
  },
  843: {
    direction: "digital",
    company: "FIRMAMENT Sports",
    titleZh: "初级平面设计师（体育品牌与动态图形）",
    titleEs: "Diseñador/a gráfico/a junior — deporte y motion",
    reason: "内容很贴：品牌识别、campaign、web/landing、社媒视频、活动与俱乐部视觉；但目前只有第三方可投页，且 Castellano 与 English 均为明确必需。",
    next: "先从聚合页确认原始申请入口和发布时间；若只能使用官网通用邮箱，只询问岗位是否仍开放。没有可用西语沟通和 motion/video reel 时，不把它排在英语岗之前。",
    language: "西班牙语与英语均为硬要求",
  },
});

Object.assign(CURATED, {
  160: {
    direction: "brand",
    company: "Stanley Black & Decker",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌工作室平面设计师",
    titleEs: "Diseñador/a gráfico/a — Brand Studio",
    reason: "这一岗位此前被低估：它是西班牙远程全职合同，负责品牌规范、模板、网站、email、社媒和展示广告；明确要求英文简历、英文作品集与流利英语，公开说明未列西语要求。",
    next: "从 LinkedIn 当前职位页提交英文简历和作品集；首页放完整 VI、品牌规范、跨渠道模板、web/email/social 延展和基础 motion，并确认西班牙合同主体、薪资与远程办公范围。",
    language: "流利英语必需；公开说明未列西班牙语要求",
  },
  845: {
    direction: "brand",
    company: "Fox Racing / Revelyst",
    statusKey: "live",
    titleZh: "平面设计实习生（品牌、数字与活动视觉）",
    titleEs: "Prácticas de diseño gráfico — marca, digital y eventos",
    reason: "很适合英语优先申请：社媒、email、网站 banner、活动、印刷、产品修图和品牌一致性都在职责内；高水平英语是明确要求，未列西语门槛，并公开了作品集邮箱。",
    next: "先点 LinkedIn 申请，再发一封很短的英文邮件到 adelinamanea@foxracing.com；作品集首页放品牌延展、社媒系列、web/email、活动视觉和产品修图，并询问薪资、实习协议与到岗频率。",
    language: "高水平英语必需；公开说明未列西班牙语要求",
  },
  846: {
    direction: "digital",
    company: "MS Media",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "西班牙全远程 / Barcelona 分支",
    titleZh: "赛车运动平面设计实习",
    titleEs: "Prácticas de diseño gráfico para motorsport",
    reason: "带薪、可全远程且明确要求用英语申请。工作包括赛事社媒、活动或车手视觉识别、赞助提案和数字/印刷资产，和数字品牌延展高度吻合。",
    next: "用英文完成申请和短问卷，作品集优先展示高节奏社媒、视觉识别、活动视觉、赞助 deck 与少量 motion；先确认薪资、实习协议、合同主体和赛事出差费用。",
    language: "英语申请；公开说明未列西班牙语要求",
  },
  847: {
    direction: "digital",
    company: "Revelyst",
    titleZh: "网页与平面设计实习（偏 UX/UI）",
    titleEs: "Prácticas de diseño web y gráfico — enfoque UX/UI",
    reason: "这是清晰的数字品牌延展入口：IAB banner、newsletter、首页、landing page、PDP、品牌规范和移动端体验都在职责内，申请人数相对较少。",
    next: "用英文简历和作品集投递；突出电商页面、banner/newsletter 系列、移动适配、设计系统和 Figma 到 HTML/CSS 的案例，并询问工作语言、薪资和混合办公频率。",
    language: "英文职位说明；未公开具体西语等级",
  },
  848: {
    direction: "ecommerce",
    company: "Atomite",
    titleZh: "平面设计实习生（健康消费品牌）",
    titleEs: "Prácticas de diseño gráfico — marcas de salud",
    reason: "内容非常贴近品牌系统与日常视觉生产：社媒、campaign、POS、基础包装、产品修图、AI 图像、品牌规范和 Canva 模板；但职位全文与面试流程均为西语，语言风险真实存在。",
    next: "只作为挑战投递，并如实说明当前西语水平；作品集放多品牌系统、社媒模板、包装/POS、产品修图和 AI 辅助流程，先确认能否用英语工作、实习协议和测试是否付费。",
    language: "未列等级，但实际工作语境明显偏西班牙语",
  },
  849: {
    direction: "social",
    company: "GoodNews",
    titleZh: "设计与创意内容实习",
    titleEs: "Prácticas de diseño y contenido creativo",
    reason: "海报、社媒、banner、拍摄、跨渠道适配和品牌一致性都很贴合，而且是带薪兼职实习；但聚合页显示近期发布时，GoodNews 官方职位板并没有该职位。",
    next: "先查官方职位板或通过官方人才库确认是否重新开放；得到肯定答复后再提交简历和作品集，不要只因聚合页写“2 天前”就在第三方页面上传敏感资料。",
    language: "公开文案未列语言要求；职位状态需先核实",
  },
});

Object.assign(CURATED, {
  859: {
    direction: "digital",
    company: "Stripe / Brand Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 混合办公 / 西班牙远程",
    titleZh: "品牌动态设计师（Identity 动态系统）",
    titleEs: "Diseñador/a de motion para identidad de marca",
    reason: "本轮最强的新机会：不是普通视频剪辑，而是为 Stripe 品牌建立 motion principles、timing tokens、动画规范和可复用组件；官方同时列出 Barcelona 与 Spain remote，公开年薪 €74,800–112,200，正文未列西语要求。",
    next: "用英文从 Stripe 官方页申请；作品集首页放一套完整动态 VI，展示系统原则、组件、品牌性格、产品内动画和 campaign 延展。先确认 Barcelona 办公比例、Spain remote 合同、薪资适用区间与工作许可。",
    language: "英文国际团队；官方正文未列西班牙语要求",
  },
  850: {
    direction: "digital",
    company: "DashBook",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 偶尔远程",
    statusKey: "live",
    titleZh: "初级艺术指导（出版与社媒视觉）",
    titleEs: "Director/a de arte junior — editorial y redes",
    reason: "少见的 Barcelona 初级永久合同创意岗，公开起薪 €24,000+；封面、版式、社媒 campaign、TikTok / Instagram 和竖屏内容都在职责内。标题中的 SP/UK/FR 是否代表语言门槛仍需确认。",
    next: "用英文简历、求职信和作品集直接申请；首页放编辑设计、封面、社媒 campaign 与竖屏短视频，并在求职信第一段询问 SP/UK/FR 是任选市场还是要求三语。",
    language: "正文未列语言等级；SP/UK/FR 的含义需先确认",
  },
  851: {
    direction: "digital",
    company: "Centro (Ortnec)",
    locationKey: "remote",
    locationLabel: "远程 / Barcelona 发布地点",
    statusKey: "live",
    titleZh: "平面设计师—AI 视频生成",
    titleEs: "Diseñador/a gráfico/a — generación de vídeo con IA",
    reason: "全职远程、entry level、流利英语，方向覆盖品牌渠道、视觉系统、Figma 模板、AI 视频、短视频、moodboard 与 storyboard；未列西语要求。",
    next: "用英文材料申请，作品集同时展示传统品牌视觉、Figma 系统和 AI 视频精修流程；先确认是否接受 Spain resident、合同或 contractor 主体、薪资、时区与税务。",
    language: "流利英语必需；公开说明未列西班牙语要求",
  },
});

Object.assign(CURATED, {
  863: {
    direction: "digital",
    company: "Grup Ametller Origen",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Olèrdola / 每周 2 天远程",
    titleZh: "数字平面设计专员（品牌数字延展）",
    titleEs: "Técnico/a de diseño gráfico digital",
    reason: "职责与数字品牌延展高度贴合：PAID campaign、社媒、newsletter、短视频、motion graphics 和跨数字触点的品牌一致性；但全文为加泰语，且需自驾到 Olèrdola。合同为 6 个月，可能延至 1 年。",
    next: "先询问团队日常能否用英语、是否接受 Barcelona 通勤候选人、远程两天如何安排和薪资；得到肯定答复后再发数字 campaign、社媒系统、newsletter、短视频与 motion 作品集。",
    language: "加泰语招聘与本地团队语境；英语能否作为工作语言需先确认",
  },
  864: {
    direction: "brand",
    company: "Grup Ametller Origen",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Olèrdola / Numància，混合办公",
    titleZh: "包装艺术负责人（品牌治理与生产落地）",
    titleEs: "Líder de arte en packaging",
    reason: "非常标准的品牌治理与包装系统岗位：团队协调、视觉手册、包装设计、完稿、刀模、色样、印厂和供应商管理；无限期合同，但要求 5 年以上经验、全文加泰语并需自驾。",
    next: "只有作品集具备成熟包装系统、品牌手册、印前完稿、打样和供应商管理案例时再投；先确认工作语言、薪资、混合办公比例和通勤要求。",
    language: "加泰语招聘与本地供应商语境；西语 / 加泰语门槛较高",
  },
  865: {
    direction: "production",
    company: "FIRMAMENT / 发布主体待核实",
    statusKey: "closed",
    locationKey: "other",
    locationLabel: "地点冲突：LinkedIn 写 Barcelona，旧正文写 Andújar",
    titleZh: "图形制作协调员（地点异常，暂不投）",
    titleEs: "Coordinador/a de producción gráfica — ubicación no verificada",
    reason: "LinkedIn 把它列在 Barcelona，但能恢复的同名正文实际是 Andújar 的订单、供应商和运输协调，并非视觉设计；雇主与地点映射冲突，不能按巴塞设计岗处理。",
    next: "暂不投递。只有发布者补充 Barcelona 雇主全称、办公地址、真实设计职责和独立申请入口后再重新评估。",
    language: "语言不明；职位地点与主体尚未核实",
  },
  866: {
    direction: "digital",
    company: "devicenow",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公 / 永久全职",
    titleZh: "品牌视频与动态视觉专员",
    titleEs: "Especialista de vídeo y motion graphics",
    reason: "本轮最值得优先投的新机会：英语是明确要求，未列西语门槛；工作把品牌延展到产品解说、客户故事、社交短片、活动、数字 campaign、演示、模板和素材系统，既有动态也有静态品牌资产。",
    next: "用英文简历、作品集和 showreel 直接投。首页先放 45–75 秒精选 reel，再放品牌动态系统、产品解释视频、社媒 campaign 与静态视觉；申请时确认合同期限、薪资、到岗频率和工作许可。",
    language: "优秀英语必需；公开职位未写西班牙语要求",
  },
  867: {
    direction: "digital",
    company: "Space Go",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 混合办公",
    titleZh: "创意动态设计师（品牌 campaign / 社交广告）",
    titleEs: "Creative Motion Grapher — campañas y social",
    reason: "品牌动态、2D / 3D、获客与留存内容、短视频、多版本模板和生产系统都很贴数字品牌延展；但要求 5 年以上经验，职位全文与本地团队语境均为西语。",
    next: "只在资历足够时挑战。先用英文询问日常工作语言、临时合同期限与薪资，再提交品牌 motion system、2D / 3D campaign、模板系统和转化迭代案例。",
    language: "西语要求未明示，但职位全文和本地团队工作流为西语",
  },
  868: {
    direction: "digital",
    company: "Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "医疗品牌视频制作与动态视觉",
    titleEs: "Video Maker — comunicación sanitaria y motion",
    reason: "正式全职，覆盖企业、科学、培训、推广视频、活动、网站、数字 campaign、motion 与 AI；但明确要求流利西语和英语，且公开页面已有 200 人以上申请。",
    next: "当前不优先。只有能用西语处理客户会议、科学文案与反馈时再投；材料需要 CV、简短动机说明和最新 reel。",
    language: "西语要求：流利西班牙语与英语均为硬门槛",
  },
  869: {
    direction: "social",
    company: "BLAINE",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Vilassar de Mar / 混合或现场",
    titleZh: "效果营销动态设计与视频剪辑",
    titleEs: "Motion Designer & Video Editor — performance marketing",
    reason: "无限期全职，内容覆盖社交广告、多版本测试、motion、艺术指导和按转化数据迭代；但西语母语与居住在 Maresme 都是明确硬门槛。",
    next: "不进入当前低语言优先队列。未来满足母语级西语与 Maresme 居住条件时，再用社交广告、A/B testing、快速变体和数据迭代案例申请。",
    language: "西语要求：母语级西班牙语；必须居住在 Maresme",
  },
  870: {
    direction: "ecommerce",
    company: "Flummox / Online Brand House",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程优先 / 每周至少 20 小时",
    titleZh: "远程兼职电商品牌平面设计师",
    titleEs: "Diseñador/a gráfico/a de e-commerce — remoto y parcial",
    reason: "新的独立职位编号证明此前关闭的岗位已经重发。流利英语即可，工作横跨品牌识别、Amazon 内容、产品图、3D、网页、广告、包装与拍摄，和电商视觉及数字品牌延展高度匹配。",
    next: "用英文 CV 和电商视觉作品集投递；优先放 Amazon A+ / listing、包装、产品图、网页与广告系列。面试前确认时薪或月薪、保底工时、雇佣还是 autónomo、付款周期和试稿是否有薪。",
    language: "流利英语必需；其他欧洲语言仅为加分，未写西班牙语要求",
  },
  871: {
    direction: "brand",
    company: "Codeway",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 1–4 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "品牌平面设计师（VI 与全触点延展）",
    titleEs: "Brand Graphic Designer — identidad y extensión multicanal",
    reason: "当前最强的英语品牌岗位之一：1–4 年经验即可，负责品牌身份、社媒、活动、网站、周边、演示与印刷；官方申请表开放，并明确提供签证和搬迁支持。",
    next: "用英文材料直接投官方 Ashby。作品集以一套完整 VI 系统开场，再展示社媒、网站、活动、周边、演示和印刷延展；求职信直接回应跨触点一致性、视觉系统和 AI 工作流。",
    language: "英语熟练必需；公开职位未写西班牙语要求",
  },
  872: {
    direction: "brand",
    company: "AQIPA Gear Guru",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Hospitalet / Barcelona 标注，官方地点需确认",
    titleZh: "资深平面设计 / 创意负责人",
    titleEs: "Senior Graphic Designer / Head of Creation & Design",
    reason: "科技品牌、包装、POS、电商、展会、网站与影像职责非常完整，英语条件也友好；但 LinkedIn 写 Barcelona，官方 Personio 主要列 Kundl，地点存在冲突。",
    next: "先邮件问 HR 是否能以 Barcelona/Hospitalet 为真实工作地点，并确认合同、薪资和到岗频率。只有具备 6–10 年资深品牌、包装、数字与摄影作品时再准备完整申请。",
    language: "英语良好必需；德语为明显加分；未写西班牙语要求",
  },
  873: {
    direction: "digital",
    company: "Talent-R / 客户未披露",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "平面设计师（品牌、广告、网页与视频）",
    titleEs: "Graphic Designer — marca, campañas, web y vídeo",
    reason: "工作覆盖数字广告、社媒、网页、品牌身份、Reels 和 motion，内容匹配不错；但法语流利或母语是硬门槛，真实客户和薪资也没有披露。",
    next: "没有工作法语时不优先。若法语可用，先向招聘方确认客户名称、薪资、合同和办公比例，再提交数字 campaign、品牌身份、landing 与视频案例。",
    language: "法语流利或母语为硬要求；同时需要良好英语",
  },
  874: {
    direction: "digital",
    company: "IKIGAI Talent Group / 移动应用客户",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "视频剪辑与动态设计师（获客广告 / 品牌动态）",
    titleEs: "Editor/a de vídeo y Motion Designer",
    reason: "本轮最值得投的新入口：官方登记表仍开放，页面使用英语且未写西语要求；工作覆盖视觉身份延展和 TikTok、Meta、Apple Search Ads、Google 的动态获客素材。",
    next: "用英文申请，首页放 30–60 秒广告剪辑 reel，再放品牌 motion system 和带结果指标的多版本素材。先确认真实客户、薪资、合同主体、每周产量、到岗频率和试稿是否付费。",
    languageKey: "light",
    language: "英语页面；公开职位未写西班牙语要求",
  },
  875: {
    direction: "digital",
    company: "CoverManager / Hospitality Tech Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 办公比例待确认",
    titleZh: "动态设计师（双品牌视频与社交广告）",
    titleEs: "Motion Designer — vídeo de marca y anuncios sociales",
    reason: "CoverManager 与 Zenchef 双品牌的动态、视频和 Instagram / LinkedIn 广告职责明确，工具栈也新；但流利英语之外，还必须具备流利西语或法语。",
    next: "没有工作西语或法语时不优先。若法语可用，作品集突出双品牌区分、社交广告、编辑视频和 AI 后期；先问薪资、合同、语言组合和到岗天数。",
    languageKey: "spanish",
    language: "英语流利，并要求西班牙语或法语至少一种流利",
  },
  876: {
    direction: "digital",
    company: "Buzz Marketing Networks",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 4–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 每周 2 天办公室、3 天远程",
    titleZh: "AI 方向动态设计与视频剪辑",
    titleEs: "Motion Designer & Video Editor con foco en IA",
    reason: "独立于 Buzz 艺术指导岗，覆盖 campaign、社媒、motion、剪辑和 AI 视频；混合办公安排清楚，但要求约 4–5 年经验，职位处在西语工作语境。",
    next: "资历足够时先用英文询问团队能否接受英语工作，再提交 campaign、社媒 motion 和 AI 生成到精修的流程案例；确认薪资、合同和测试范围。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
  },
  877: {
    direction: "production",
    company: "Eurofirms / 未公开包装客户",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 1 年以上",
    locationKey: "barcelona",
    locationLabel: "Cerdanyola del Vallès / 现场早班",
    titleZh: "平面设计与包装完稿专员",
    titleEs: "Diseñador/a gráfico/a — artes finales y packaging",
    reason: "时薪、工时与临时合同都公开，并有转长期可能；职责是真实的包装完稿、法规、盲文、条码、打样和质控，但偏生产而非高概念 VI。",
    next: "具备包装完稿、刀模、条码 / 法规和印前经验时再投；先确认真实雇主、合同期限、转长期条件、日常语言和是否轮班。",
    languageKey: "unknown",
    language: "西语职位与生产语境；没有公开具体语言等级",
  },
  878: {
    direction: "social",
    company: "Hosco",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "实习 / 未要求经验",
    locationKey: "barcelona",
    locationLabel: "Barcelona Eixample / 全职实习",
    titleZh: "社交媒体内容设计与创作实习",
    titleEs: "Prácticas de diseño y creación de contenido social",
    reason: "社媒图形、Reels、内容排程和 campaign 都相关，雇主在平台已验证；但全职实习没有公开薪资、补贴、学校协议或合同期限，回报风险较高。",
    next: "先问是否带薪、税前月薪、是否必须 convenio、合同期限和工作语言；只有条件合理再提交社媒模板、短视频和内容日历案例。",
    languageKey: "unknown",
    language: "公开职位没有说明语言要求",
  },
  879: {
    direction: "social",
    company: "Bisubi",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 未要求经验",
    locationKey: "remote",
    locationLabel: "西班牙远程 / 兼职灵活",
    titleZh: "短视频内容创作者（TikTok / Reels / Shorts）",
    titleEs: "Creador/a de vídeo corto",
    reason: "高级英语、全远程、无经验门槛且按周付款，适合短期补充收入；但公开费率只有 EUR10/小时，职责也不属于 VI 主方向。",
    next: "只作低薪备用。先确认保底工时、合同 / 发票主体、修订次数、素材版权、付款保障和设备要求；不要做无薪样片。",
    languageKey: "light",
    language: "要求高级英语；未写西班牙语要求",
  },
  880: {
    direction: "social",
    company: "Axo Longevity",
    statusKey: "verify",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "Barcelona 标注 / 远程优先",
    titleZh: "双语短视频剪辑与平面设计",
    titleEs: "Editor/a de vídeo corto y diseñador/a gráfico/a bilingüe",
    reason: "付费与自然社媒、静态广告和指标复盘有真实内容，但英语 / 西语双语是硬门槛；聚合页对临时、全职和 contract-to-hire 的标签互相冲突。",
    next: "先索取雇主法定名称、原始职位页、西班牙合同或 autónomo 方式、准确薪资币种 / 税制和付费测试说明；不要先上传证件。",
    languageKey: "spanish",
    language: "英语与西班牙语双语为明确硬门槛",
  },
  881: {
    direction: "digital",
    company: "Avidalia",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年左右",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公，周五远程；20 小时/周",
    titleZh: "数字内容设计师（品牌、社媒与基础动态）",
    titleEs: "Digital Content Designer",
    reason: "官方申请仍开放，兼职无固定期限合同，覆盖品牌一致性、印刷 / 数字 / 社媒 / email 和基础 motion；但西语工作语境及兼职年收入都需先确认。",
    next: "先问税前年薪或时薪、20 小时如何分布、转全职条件和日常语言；作品集放数字 campaign、品牌模板、社媒 / email 系列和基础 motion。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
  },
  882: {
    direction: "brand",
    company: "Jobgether / 客户未披露",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程 / 合同制",
    titleZh: "B2B 平面设计师（报告、电子书与品牌模板）",
    titleEs: "Diseñador/a gráfico/a B2B",
    reason: "LinkedIn 新状态与 Lever 入口均可申请，英语和 Spain remote 友好；但真实客户、薪资、工时和合同地区没有公开，且竞争已经较高。",
    next: "只用公开作品集先申请，突出报告信息层级、电子书、社媒系统和印刷；面试前确认客户名称、预算、每周工时、合同 / 发票主体和付款周期。",
    languageKey: "light",
    language: "英语职位；公开信息未写西班牙语要求",
  },
  883: {
    direction: "digital",
    company: "Preply",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已关闭",
    titleZh: "本地化动态设计师（已停止申请）",
    titleEs: "Motion Designer — Localization (cerrado)",
    reason: "搜索列表的近期活跃属于缓存刷新；当前详情明确写明不再接受申请，不能恢复成新岗位。",
    next: "只保留公司观察。等 Preply 官方招聘页出现独立新职位编号和可提交表单后再恢复，不通过旧缓存或通用人才库投递。",
    languageKey: "light",
    language: "历史职位；当前已关闭",
  },
  884: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 医药经验有优势",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "医药行业中级平面设计师",
    titleEs: "Diseñador/a gráfico/a mid para pharma",
    reason: "本轮最值得优先投的新岗位：英语流利即可，未列西语硬门槛；工作覆盖医药 campaign、社媒、网站、演示和营销资产，核心是把复杂信息转成清晰且符合品牌规范的多触点视觉。",
    next: "用英文简历和作品集直接投。先放信息层级清楚、品牌一致性强的项目，再放 campaign、社媒、网页和演示系统；求职信回应医疗合规、可访问性和 AI 辅助工作流。",
    languageKey: "light",
    language: "流利英语必需；其他语言仅为加分，未写西班牙语要求",
    changeType: "new",
  },
  885: {
    direction: "ecommerce",
    company: "Social Scout",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程 / contractor；约 15:00–23:00",
    titleZh: "电商产品详情页设计师（PDP / 转化设计）",
    titleEs: "PDP Designer — e-commerce y conversión",
    reason: "流利英语、全远程，PDP、landing、移动端、A/B 测试、Figma 与 Shopify 都很贴电商视觉延展；但必须按美国东部时间工作，且合同制与薪资金额都未明确。",
    next: "只有能接受约 15:00–23:00 的西班牙时间再投。先确认时薪或月薪、保底工时、autónomo、付款周期、加班与修改边界；作品集用 PDP、移动端详情页、A/B 变体和转化结果开场。",
    languageKey: "light",
    language: "流利英语必需；未写西班牙语要求",
    changeType: "new",
  },
  886: {
    direction: "social",
    company: "JUNGLE / MeMe",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级或资深均可",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / Calle Álava 111",
    titleZh: "社交媒体剪辑与视觉设计",
    titleEs: "Social Editor — diseño y edición de vídeo",
    reason: "长期全职，混合艺术指导、平面设计、视频剪辑、meme、TikTok、字幕系统和提案板；但职位全文与本地 agency workflow 均为西语语境，不能当成英语友好岗。",
    next: "先用英文或简单西语询问团队工作语言。得到肯定答复后，再发 social-first 视觉、快速剪辑、字幕系统、meme / TikTok 和 presentation board 案例。",
    languageKey: "unknown",
    language: "未公开语言等级；西语职位与本地代理商工作语境",
    changeType: "new",
  },
  887: {
    direction: "digital",
    company: "Kave Home",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "经验要求待确认",
    locationKey: "other",
    locationLabel: "Sils, Girona / 现场办公",
    titleZh: "视频剪辑与动态设计师（品牌 / 电商 / 零售）",
    titleEs: "Video Editor & Motion Designer",
    reason: "家具生活方式品牌的后期、motion、调色与音频岗位，内容覆盖 branding、电商、社媒、paid media 和零售；但要求在 Sils 现场办公，且处于西语工作语境。",
    next: "先确认每周现场天数、Barcelona 通勤可行性、日常语言和薪资。只有地点可接受再投，作品集放品牌影片、产品 / 空间剪辑、电商变体、motion、调色和声音设计。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
    changeType: "new",
  },
  888: {
    direction: "brand",
    company: "Mindrift",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "约 2 年经验优先",
    locationKey: "remote",
    locationLabel: "西班牙远程 / freelance；活跃期约 10–20 小时",
    titleZh: "自由职业演示设计师（信息设计）",
    titleEs: "Presentation Designer freelance",
    reason: "英语 B2、远程、演示和 one-pager 信息设计门槛相对友好，可作为品牌叙事的补充收入；但项目量不保证，不是完整 VI 正职。",
    next: "先确认西班牙 contractor / autónomo 条件、实际费率、最低项目量、付款周期、数据使用和测试是否有薪；作品集突出品牌演示系统、信息层级和复杂内容可视化。",
    languageKey: "light",
    language: "英语 B2；未写西班牙语要求",
    changeType: "new",
  },
  889: {
    direction: "ecommerce",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "食品饮料行业中级平面设计师",
    titleEs: "Diseñador/a gráfico/a mid — alimentación y bebidas",
    reason: "既有 Danone / FMCG 岗位以新编号重新发布，当前入口更可靠；工作聚焦电商、社媒、数字 campaign、多市场 adaptation 和高产量下的品牌一致性。",
    next: "继续优先投当前链接，作品集放 FMCG、电商、社媒模板、多尺寸 adaptation 和可扩展生产系统。网站已把新旧编号合并，本地投递进度不会丢失。",
    languageKey: "spanish",
    language: "明确要求高级西语 + 良好英语；不满足西语门槛不建议投",
    changeType: "refresh",
  },
  890: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公 / 永久全职",
    titleZh: "健康与生活方式艺术指导",
    titleEs: "Art Director — wellness y lifestyle",
    reason: "官方 Factorial 原页当前可申请：Barcelona、hybrid、永久全职。职责横跨 social-first、digital、creator、整合 campaign，以及摄影、视频、motion、CGI 与 AI 视觉方向；英语要求明确。",
    next: "已有概念创意、社媒 campaign、creator 内容、产品叙事和跨渠道视觉方向案例时再投；先确认薪资、工签、到岗节奏和健康/生活方式品类经验是否硬门槛。",
    languageKey: "light",
    language: "流利英语必需；其他语言仅为加分",
    changeType: "refresh",
  },
  891: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 需医疗行业与带教经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "医药行业资深平面设计师",
    titleEs: "Senior Graphic Designer para pharma",
    reason: "既有医药资深岗以新编号重新发布；英语友好，职责覆盖 campaign、数字资产、演示和团队带教，但医疗合规经验是真实门槛。",
    next: "只有具备医疗 / 医药案例和带教经验再投。否则把时间给本轮新出现的 Mid Pharma；新旧编号已合并并保留当前申请入口。",
    languageKey: "light",
    language: "流利英语必需；未写西班牙语要求",
    changeType: "refresh",
  },
  892: {
    direction: "digital",
    company: "Qoria / Qustodio",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那市中心 / 混合办公",
    titleZh: "数字设计师（营销与品牌系统）",
    titleEs: "Digital Designer — marketing y sistemas de marca",
    reason: "既有强匹配岗位以新编号重新发布；职责覆盖网站、landing、CRM / email、社媒、付费 campaign、演示和品牌系统，并公开 EUR30,000–40,000 薪资。",
    next: "用英文作品集投当前入口，突出多渠道数字系统、Figma、campaign、CRM / landing 和可扩展品牌组件。新旧编号已合并，本地进度会沿用。",
    languageKey: "light",
    language: "流利英语必需；西班牙语高度重视但未写为硬门槛",
    changeType: "refresh",
  },
  893: {
    direction: "digital",
    company: "CrowdStrike",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "Barcelona / 西班牙远程",
    titleZh: "创意内容设计师（品牌内容与设计系统）",
    titleEs: "Diseñador/a de contenido creativo — remoto",
    reason: "官方 Workday 当前显示 Apply、Barcelona、全职、3 天前发布。职责把品牌延展到演示、one-pager、信息图、newsletter、视频、动画、模板和无障碍设计系统；要求 2 年以上经验与英语。",
    next: "优先从官方 Workday 用英文申请。作品集放品牌系统、多渠道 adaptation、复杂信息可视化、演示、视频与模板体系；确认 Spain remote、到岗频率、薪资、合同主体和工签。",
    languageKey: "light",
    language: "英语工作；公开正文未列西班牙语要求",
    changeType: "new",
  },
  894: {
    direction: "digital",
    company: "Ogilvy Spain",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "Liquid 设计师（视频剪辑与社交动态）",
    titleEs: "Liquid Designer — edición de vídeo y motion social",
    reason: "当前职位再次开放：数字 campaign、Reels、TikTok、Shorts、motion、本地化和品牌一致性都很贴数字延展；混合办公政策较灵活，但代理公司日常语言与薪资未公开。",
    next: "先用英文询问团队工作语言和薪资，再提交 45–60 秒 reel、社交 campaign、多尺寸本地化和品牌模板案例。网站已与旧记录合并并保留当前入口。",
    language: "未明示语言要求；Barcelona 代理公司工作流可能依赖西语",
    changeType: "refresh",
  },
  895: {
    direction: "digital",
    company: "KOROSHI GROUP",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未明确",
    locationKey: "barcelona",
    locationLabel: "Barberà del Vallès / Barcelona 周边",
    titleZh: "影像创作者（AI 视频与品牌叙事）",
    titleEs: "Film Maker — vídeo y storytelling con IA",
    reason: "时尚、电商和品牌内容的复合岗位，覆盖策划、拍摄、剪辑、商品图、Shopify、banner、newsletter、CRM、社媒、paid ads 与 AI 工具；但本地零售团队语境偏西语。",
    next: "先用英文问工作语言、薪资、合同和办公频率；作品集放时尚 / 商品拍摄、短视频系列、Shopify 视觉、newsletter、paid social 和人工精修后的 AI 流程。",
    language: "英语中高水平为加分；西语未写等级，但本地团队存在语言风险",
    changeType: "new",
  },
  896: {
    direction: "production",
    company: "RB Rotulación Barcelona",
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "经验要求未完整公开",
    locationKey: "barcelona",
    locationLabel: "Badalona / Barcelona 周边",
    titleZh: "广告标识排版与车间制作",
    titleEs: "Maquetista — producción de taller",
    reason: "当前可见的本地制作线索，涉及文件检查、Illustrator / Corel / Photoshop、打印覆膜和标识安装；更偏广告制作落地，不是品牌 VI，且没有恢复出稳定的职位直达页。",
    next: "先从公司页确认是否仍招，并问合同、薪资、全保、语言、设计与车间占比及驾照 / 车辆要求；只有愿意做标识制作时再投。",
    language: "语言未公开；本地车间沟通可能依赖西语",
    changeType: "new",
  },
  897: {
    direction: "brand",
    company: "D&M asesores / 玩具与儿童促销客户",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 每周 3 天远程",
    titleZh: "玩具与儿童促销平面设计师",
    titleEs: "Diseñador/a gráfico/a — juguetes y promociones infantiles",
    reason: "当前可投、无限期合同、每周 3 天远程；包装、产品演示、渲染、矢量插画和印刷完稿高度匹配，并要求高水平英语、未写西语硬门槛，但 5 年以上经验是门槛。",
    next: "用英文材料申请，作品集突出包装系列、结构 / 刀模、产品渲染、插画与印前；面试时确认客户主体、薪资、试用期和远程政策。网站已与旧记录合并。",
    languageKey: "light",
    language: "高水平英语；公开正文未列西班牙语硬门槛",
    changeType: "refresh",
  },
  898: {
    direction: "digital",
    company: "Intracon Consulting / HP Site Print",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 混合办公",
    titleZh: "设计与营销内容支持（HP 品牌内容）",
    titleEs: "Diseño y soporte de contenido de marketing",
    reason: "英语友好、未列西语，当前可申请；12 个月全职合同可续，职责覆盖 HP 品牌资产、产品内容、发布 playbook、演示、模板与 Workfront。此前因“薪资未公开”被误判为关闭，现已纠正。",
    next: "用英文作品集突出 B2B / 科技品牌、产品发布、演示、模板系统、跨团队协作和高产量下的一致性；确认工资、续约概率、办公天数和雇佣主体。",
    languageKey: "light",
    language: "高水平英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  899: {
    direction: "brand",
    company: "Jobgether / 匿名合作公司",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌与视觉设计师",
    titleEs: "Brand & Visual Designer",
    reason: "品牌识别、网页 / landing、campaign、社媒、印刷、活动、系统与模板都很贴目标；但实际雇主匿名，薪资和语言未公开，申请可信度低于直招。",
    next: "可投公开简历与作品集，但在收到可核验公司全称、公司域名邮箱、书面职位说明和薪资范围前，不提供证件、银行资料或免费完整试稿。",
    opaqueEmployer: true,
    language: "语言未公开；需先确认英语能否作为工作语言",
    changeType: "new",
  },
  900: {
    direction: "digital",
    company: "Experis España / 客户未公开",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "创意设计师（数字 campaign）",
    titleEs: "Creative Designer — campañas digitales",
    reason: "Spain remote，职责覆盖 key visual、数字 campaign、社媒、moodboard 与 storyboard；但职位正文为西语，客户、薪资、合同和工作语言都没有公开。",
    next: "先用英文询问项目客户、团队语言、合同期限、薪资和远程雇佣方式；确认后再提交 campaign、key visual、社媒和 storyboard 案例。",
    opaqueEmployer: true,
    language: "未列语言等级；西语职位正文与本地招聘方带来沟通风险",
    changeType: "new",
  },
  901: {
    direction: "brand",
    company: "BYD Europe / DENZA",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "other",
    locationLabel: "Madrid",
    titleZh: "DENZA 创意与设计专员",
    titleEs: "Creative & Design Specialist — DENZA",
    reason: "中国汽车品牌、职责涵盖印刷、数字、社媒、campaign、模板和品牌规范；不要求西语，但德语母语或高级水平是明确硬门槛，地点也在 Madrid。",
    next: "只有德语达到工作水平且能接受 Madrid 时再投；否则保留观察，不因“中国品牌”标签进入高优先级。",
    languageHard: true,
    language: "英语流利，并要求德语母语或高级；西班牙语不是门槛",
    changeType: "new",
  },
  902: {
    direction: "digital",
    company: "GRUP MEDIAPRO / 3Cat",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 数字内容经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "初级平面设计师（3Cat 数字内容）",
    titleEs: "Diseñador/a gráfico junior — contenidos digitales 3Cat",
    reason: "新收录的数字视觉岗，覆盖数字创意、视听内容、Motion Graphics、多格式适配、视觉系统和可扩展模板；但熟练加泰语是明确必需条件。",
    next: "当前加泰语不足时不投。若以后语言达到工作水平，作品集应突出媒体数字视觉、社媒模板、Motion、时效内容快速适配和可扩展生产系统。",
    languageKey: "spanish",
    languageHard: true,
    language: "熟练加泰语必需；属于明确本地语言硬门槛",
    changeType: "new",
  },
  903: {
    direction: "digital",
    company: "fhios / 最终客户未公开",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未明确",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "多渠道视觉设计师（AI 创意流程）",
    titleEs: "Diseñador/a — producción multicanal e IA",
    reason: "多渠道视觉、视频、演示、作品审核和 AI 创意流程都与目标相关；fhios 主体真实，但职位服务的最终客户、薪资、项目期限和工作语言没有公开。",
    next: "先用英文询问实际客户、日常语言、合同期限、薪资、办公比例、作品保密和测试是否付费；得到书面答复后再提交品牌多渠道、视频、演示与 AI 精修案例。",
    opaqueEmployer: true,
    language: "高英语只写加分；西语要求和实际客户语言均未公开",
    changeType: "new",
  },
  904: {
    direction: "brand",
    company: "Wall Street English",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 6 年以上与带教经验",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市中心 / 每周 3 天远程",
    titleZh: "设计负责人（全球品牌系统，约 6 个月替岗）",
    titleEs: "Design Lead — cobertura de maternidad",
    reason: "当前可投的英语品牌系统负责人岗：全球品牌表达、设计系统、模板、campaign、数字平台、performance creative 和带领 2 名初级设计师；但合同约 6 个月且要求 6 年以上经验。",
    next: "只有具备全球品牌治理和带教经验时再投。作品集展示设计系统、campaign、团队 review 与数据驱动创意；确认薪资、试用期、续期可能及替岗结束后的安排。",
    languageKey: "light",
    language: "良好英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  905: {
    direction: "brand",
    company: "Steneg / 未公开工业客户",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 周边",
    titleZh: "平面设计师（品牌治理、包装与流程数字化）",
    titleEs: "Diseñador/a gráfico/a — marca, packaging y procesos",
    reason: "当前可投的全职英语岗，品牌、包装、展会、目录、影像、印前、素材库、审批和设计流程数字化都很完整；但实际工业客户、薪资和办公方式未公开。",
    next: "用英文材料申请，但先问客户全称、Granollers 地址、薪资、合同、办公方式和数据处理主体；只先提交公开 CV 与作品集。",
    opaqueEmployer: true,
    languageKey: "light",
    language: "高水平职业英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  906: {
    direction: "brand",
    company: "INFiLED / 视爵光旭",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 需独立负责与艺术指导",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "平面设计师（EMEA 品牌与多渠道传播）",
    titleEs: "Diseñador/a gráfico/a — marca EMEA y comunicación multicanal",
    reason: "当前仍可投的中国品牌英语岗，负责艺术方向、数字与印刷、网页、活动展台、多市场 adaptation、内部传播和品牌一致性；未列西语要求。",
    next: "优先用英文申请，作品集突出品牌系统、B2B 科技、网页、展会空间、多市场 adaptation 和 art direction，并自然说明中文能力；确认薪资、合同主体、办公频率和工作许可。",
    languageKey: "light",
    language: "流利英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  907: {
    direction: "brand",
    company: "ELADIET S.A.",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "barcelona",
    locationLabel: "El Papiol / Barcelona 周边",
    titleZh: "品牌与传播平面设计师",
    titleEs: "Diseñador/a gráfico/a — marca y comunicación",
    reason: "包装、企业形象、campaign、社媒、网站、3D、Logo、naming 和印前都非常贴合；但招聘全文、文案协作和本地团队工作流为西语，且薪资未公开。",
    next: "当前不进入低语言优先。若要挑战，先用英文询问团队工作语言、薪资和办公方式，再提交健康 / 食品包装、品牌系统、campaign、3D mockup 与印前案例。",
    languageKey: "spanish",
    language: "英语 B2；未写西语等级，但本地品牌与文案工作流构成较高西语风险",
    changeType: "refresh",
  },
  908: {
    direction: "digital",
    company: "Top Doctors Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "营销设计师（多品牌视觉）",
    titleEs: "Marketing Designer — identidad visual multimarca",
    reason: "正式全职、公开年薪 EUR22,000–24,000，覆盖多品牌 identity、campaign、社媒、email、landing、演示、活动和轻量视频；但薪资对 3 年以上经验偏保守，团队工作流为西语。",
    next: "若能接受薪资再投；先确认日常语言、试用期、混合办公天数与调薪机制。作品集放多品牌系统、数字 campaign、landing、演示和轻量 motion。",
    languageKey: "spanish",
    language: "未列等级；招聘全文与 Barcelona 跨部门工作流为西语",
    changeType: "refresh",
  },
  909: {
    direction: "brand",
    company: "Revolt / Anthesis",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "中级品牌设计师",
    titleEs: "Mid-weight Designer — branding y comunicación",
    reason: "branding、digital、social、print、概念、演示与最终交付都很准确，福利也较正式；但明确要求英语和西班牙语都达到专业工作水平。",
    next: "当前西语不足时不投。未来语言提高后，作品集应展示品牌策略转化、概念、数字 / 社媒 / 印刷、演示和完整交付。",
    languageKey: "spanish",
    languageHard: true,
    language: "专业英语和西班牙语均为明确要求",
    changeType: "refresh",
  },
  910: {
    direction: "digital",
    company: "LABHOUSE",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程 / Barcelona 可每周到岗约 2 天",
    titleZh: "ASO 视觉设计师（App 品牌与增长）",
    titleEs: "ASO Artist – Graphic Designer",
    reason: "长期合同、地点清楚，工作覆盖 App 图标、商店截图、推广视觉、视频、Logo、品牌元素、style guide 和 App 内资产，正好连接品牌系统、数字产品与增长设计。",
    next: "这条只放在英语备选。若能借助翻译工具完成英文申请，作品集首页放 App 图标 / 截图系统、品牌规范、performance creative、动效和数据迭代案例；先确认薪资、试用期、办公频率与技术测试是否付费。",
    languageKey: "light",
    language: "流利英语必需；西班牙语只算加分",
    applicationMode: "english",
    changeType: "new",
  },
  911: {
    direction: "social",
    company: "inBeat Agency / Creative Milkshake",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未公开",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "视频编辑与视觉设计师（DTC 社媒广告）",
    titleEs: "Video Editor & Designer",
    reason: "西班牙可远程全职，负责 Reels、TikTok、YouTube、Meta 的短 / 长视频，并制作缩略图、overlay、end card 与字幕资产；更偏社媒广告和转化创意，不是纯 VI。",
    next: "这条只放在英语备选。先确认实际合同主体、工作时区、薪资、休假、设备、版权和测试是否付费；作品集精选 4–6 个 storyboard 到成片、字幕 / 图形系统、多尺寸适配与数据迭代案例。",
    languageKey: "light",
    language: "职位页面与协作流程为英文；未列西班牙语要求",
    applicationMode: "english",
    changeType: "new",
  },
  912: {
    direction: "digital",
    company: "Jobgether / 匿名合作方",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "营销视觉设计师（多品牌数字内容）",
    titleEs: "Marketing Visual Designer",
    reason: "职责很贴数字品牌延展，但最终雇主未公开，页面又同时写 full-time 和约 20 小时 / 周；它是真实可打开的聚合申请入口，不是信息透明的雇主直招。",
    next: "先问最终雇主、全职还是约 20 小时、薪资、合同主体、时区、语言和个人数据接收方；得到书面答复后，再决定是否提交完整材料。",
    opaqueEmployer: true,
    languageKey: "light",
    language: "页面与申请为英文；实际团队语言未公开",
    applicationMode: "english",
    changeType: "refresh",
  },
  913: {
    direction: "social",
    company: "ALOHAS",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3–5 年亚洲市场经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "亚洲市场营销与公关经理（中国 / 韩国）",
    titleEs: "Asia Marketing & PR Manager",
    reason: "官方独立职位页重新出现完整申请表。普通话或韩语母语是核心条件，工作覆盖小红书、抖音、微信、微博、亚洲内容本地化、KOL/KOC、公关和创意团队 brief；不是纯 VI，但中文市场与视觉内容延展高度相关。",
    next: "只放在中文相关的英语备选，不进入“中文即可投”首页。先准备英文简历和 5–7 句面试自我介绍；申请前确认薪资、工作许可、会议语言、每周办公室天数和亚洲出差频率。",
    languageKey: "light",
    language: "普通话或韩语母语；专业英语必需；未列西班牙语要求",
    applicationMode: "english",
    changeType: "refresh",
  },
  914: {
    direction: "brand",
    company: "Trivelta",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 1–3 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "平面设计师（三品牌视觉与数字延展）",
    titleEs: "Graphic Designer",
    reason: "官方 Greenhouse 已恢复完整 Apply。岗位同时维护三套品牌系统，并负责 social、广告、landing、email、销售资料、pitch deck 和展会资产，方向很贴品牌视觉与数字延展。",
    next: "只放在英语备选。作品集突出完整品牌系统、同一 campaign 的多渠道延展、多品牌一致性和轻量 motion；投前确认薪资、合同主体、办公频率、工作许可和测试政策。",
    languageKey: "light",
    language: "强工作英语必需；其他语言仅加分；未列西班牙语要求",
    applicationMode: "english",
    changeType: "refresh",
  },
  915: {
    direction: "ecommerce",
    company: "欧浪中文雇主（主体待核验）",
    chineseFit: true,
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程（帖子地区标马德里）",
    titleZh: "居家电商运营内勤（商品图文与详情页）",
    titleEs: "Operaciones e-commerce remotas — fichas e imágenes",
    reason: "当前欧浪公开记录显示可站内申请、EUR2,000/月，工作包含商品图文、详情页和图片维护；正文没有写西语或英语要求，适合先用中文确认。",
    next: "只先发简历和作品集链接，要求书面确认公司全称、税前/税后、合同或 autónomo、社保、工时、试用期、平台和视觉工作占比；不要先发证件原件或转账。",
    opaqueEmployer: true,
    languageKey: "unknown",
    language: "中文平台可先沟通；正文未写西语或英语要求",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  916: {
    direction: "brand",
    company: "杭州流光溢彩品牌管理有限公司",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "remote",
    locationLabel: "中文远程 Freelancer（需确认可否常驻西班牙）",
    titleZh: "品牌视觉设计师 / AIGC（海外品牌）",
    titleEs: "Diseñador/a visual de marca y AIGC",
    reason: "方向几乎完全命中：VI、包装、UI 组件、电商视觉、独立站、广告、AIGC 图片与短视频；英语只是加分项，可中文申请。",
    next: "薪资 RMB7,000–10,000/月按西班牙成本偏低。先确认是否接受常驻西班牙、工作时区、净到手、工时、合同、付款币种、发票与社保，再决定是否投。",
    languageKey: "unknown",
    language: "中文申请；英语仅为加分项",
    applicationMode: "chinese",
    changeType: "new",
  },
  917: {
    direction: "brand",
    company: "OneKey",
    chineseFit: true,
    statusKey: "verify",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "remote",
    locationLabel: "全球远程 / 西班牙资格未确认",
    titleZh: "品牌视觉设计师（全球远程待确认）",
    titleEs: "Diseñador/a visual de marca",
    reason: "方向很匹配：品牌视觉系统、硬件、App、网站和线上线下延展；但官方只证明全球远程，没有证明西班牙居民可签约，因此不属于 Barcelona/Spain 直接机会。",
    next: "先确认西班牙雇佣实体/contractor、税务社保、薪资币种、核心时区和付费测试/IP 条款；书面确认前不要按 Barcelona 岗位投入定制材料。确认可签后再用中文提交完整 VI、3C/硬件、App/web 与数字延展案例。",
    languageKey: "unknown",
    language: "中文岗位页和申请流程；英语阅读仅为加分项",
    applicationMode: "chinese",
    changeType: "refresh",
  },
  918: {
    direction: "social",
    company: "Huqiao Games",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "other",
    locationLabel: "全球远程；仅欧洲工作时区，西班牙资格未确认",
    titleZh: "中英双语平面设计与视频剪辑",
    titleEs: "Diseñador/a gráfico/a y editor/a de vídeo bilingüe",
    reason: "新职位编号当前显示约 21 小时前发布，负责中国与海外社媒、Campaign、品牌一致性和视频；但中英文流利是硬门槛，USD1,500/月按西班牙成本偏低。",
    next: "只放外语低薪备选。先确认是否接受 Spain resident、合同与付款主体、税务社保、奖金规则和年假；无法完成英文面试或不接受该薪资时直接跳过。",
    languageKey: "light",
    language: "中文和英语口语、书面均须流利；不要求西班牙语",
    applicationMode: "english",
    changeType: "refresh",
  },
  919: {
    direction: "brand",
    company: "Brightest Star（法定主体未披露）",
    chineseFit: true,
    opaqueEmployer: true,
    statusKey: "verify",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年",
    locationKey: "remote",
    locationLabel: "全球远程（西班牙资格待确认）",
    titleZh: "品牌视觉设计师（交易所 VI 与数字延展）",
    titleEs: "Diseñador/a visual de marca — VI y canales digitales",
    reason: "中文职位、USD5,000–8,000/月，职责精确覆盖 Logo、VI、品牌手册、官网、App、KV、H5 和 Campaign；但雇主只写 Brightest Star，法定主体与产品未披露，Web3 风险高。",
    next: "只先投公开简历和作品集链接。必须核实公司全称、产品域名、公司邮箱、合同与付款主体；凡要求入金、买币、缴费、钱包助记词或免费完整方案，立即停止。",
    languageKey: "unknown",
    language: "中文职位；基础英文设计术语仅为加分项",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  920: {
    direction: "brand",
    company: "言灵无界信息咨询（北京）有限公司",
    chineseFit: true,
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "经验未公开",
    locationKey: "remote",
    locationLabel: "中文远程兼职（需确认西班牙资格）",
    titleZh: "兼职品牌视觉设计师（跨境品牌咨询）",
    titleEs: "Diseñador/a visual de marca a tiempo parcial",
    reason: "中文兼职、RMB10,000–15,000/月，工作覆盖社媒、网站、物料、视频和品牌一致性；但发布于 2026-02-24，原始智联详情已不稳定，不能当作当前确定在招。",
    next: "先中文冷询问是否仍招、是否接受 Spain resident、每周工时、时区、合同 / 发票 / 社保和测试是否付费；未取得可核验公司的书面回复前不做定制试稿。",
    languageKey: "unknown",
    language: "中文岗位摘要；未显示西语或英语要求",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  472: {
    direction: "other",
    company: "Tineco Spain / 添可",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "地点与岗位未证实 / 仅观察",
    titleZh: "通用简历池（非已核验岗位）",
    titleEs: "Bolsa genérica — vacante no verificada",
    reason: "西班牙 careers 原页本次返回 502；此前只有通用 Upload Resume 线索，未能证明有 Barcelona/Spain 的设计职位。",
    next: "不作为职位投递。仅在出现可打开的、岗位专属的 ATS 页面后重新评估地点、合同和语言。",
    language: "未公开；当前无职位专属说明",
  },
  470: {
    direction: "digital",
    company: "Go Getop / Bygetop",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "英国团队远程 / 西班牙雇佣待确认",
    titleZh: "平面设计与中国市场数字营销（泛投池）",
    titleEs: "Bolsa remota de diseño y marketing para China",
    reason: "官方 careers 确实可打开，但明确是英国团队的远程兼职/实习池，所有职位共用申请表；没有西班牙雇佣主体、合同、固定工时或薪资。",
    next: "只能作为低优先中文远程线索。先问是否可从西班牙合法合作、雇佣/自由职业/实习形式、每周工时和报酬，再决定是否投。",
    language: "普通话与英语相关；西班牙工作资格与日常语言未确认",
  },
  1247: {
    direction: "motion",
    company: "Impress",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已关闭",
    titleZh: "初级视频与动态设计师（已关闭）",
    titleEs: "Junior Video & Motion Designer (closed)",
    reason: "原 LinkedIn 页已直接显示不再接受申请；不能因职位描述完整而继续排在当前机会前面。",
    next: "保留为历史参考，只等 Impress 出现新的岗位专属申请页。",
    language: "历史岗位要求西语与英语；当前无申请入口",
  },
  421: {
    direction: "brand",
    company: "JOIN",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已归档",
    titleZh: "高级品牌设计师（已归档）",
    titleEs: "Senior Brand Designer (archived)",
    reason: "官方原页直接显示该职位已归档一个月，没有本职位的申请入口。",
    next: "不通过 spontaneous application 冒充投递该职位；只监测新的岗位专属页面。",
    language: "历史职位；当前无申请入口",
  },
  806: {
    direction: "other",
    company: "巴塞广告公司（主体未披露）",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 先确认",
    titleZh: "客服兼基础 CDR/AI 排版（非纯设计岗）",
    titleEs: "Atención al cliente con maquetación básica",
    reason: "ES02 原页确实存在，但本职是客服，仅兼基础 CDR/AI 排版；雇主、合同、工时、薪资和是否仍在招均未公开。",
    next: "先微信确认公司全称、地址、岗位是否还在、客服/设计比例、合同、社保、工时和薪资；不要先发证件或完整作品集。",
    language: "流利西语为明确要求；中文可联系",
    applicationMode: "chineseCheck",
  },
  195: {
    direction: "other",
    company: "BBS.eus 论坛索引",
    statusKey: "closed",
    locationKey: "other",
    locationLabel: "无岗位详情 / 历史来源",
    titleZh: "论坛索引误收录（非职位）",
    titleEs: "Índice de foro — no es una vacante",
    reason: "原链接只是论坛第 86 页索引，未包含所谓“巴塞平面设计”职位的原帖、公司或申请入口。",
    next: "不投递、不推荐；仅在找到独立原帖时重新建卡。",
    language: "无职位内容",
  },
  1319: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已由当前职位替代",
    titleZh: "中级平面设计师（旧镜像）",
    titleEs: "Mid Graphic Designer (superseded duplicate)",
    reason: "该条与当前官方岗位 884 使用同一个 LinkedIn 职位编号，只是旧镜像记录，不是另一份职位。",
    next: "使用 ID 884 的官方 Factorial 详情和申请表；本条只保留重复发现的历史证据。",
    language: "请以当前官方职位页为准",
  },
  1320: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已由当前职位替代",
    titleZh: "艺术指导（旧镜像）",
    titleEs: "Art Director (superseded duplicate)",
    reason: "该条与当前官方岗位 890 使用同一个 LinkedIn 职位编号，只是旧镜像记录，不是另一份职位。",
    next: "使用 ID 890 的官方 Factorial 详情和申请表；本条只保留重复发现的历史证据。",
    language: "请以当前官方职位页为准",
  },
});

Object.assign(CURATED, {
  979: {
    direction: "digital",
    company: "Storyblok",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe 远程（Spain 资格待确认）",
    titleZh: "2D 动态设计师（产品 / 品牌动效）",
    titleEs: "2D Motion Designer — Europe",
    reason: "这不是普通剪辑岗：负责产品演示、feature explainer、UI animation、发布/活动/社媒内容，并建立可复用的视频设计系统、motion principles 和模板。",
    next: "用英文 motion-first 作品集申请；首页放 product demo、品牌动效系统、模板化资产和复杂技术概念的视觉解释。先确认 Spain 合同实体、时区与福利。",
    language: "英文国际团队；官方未列西语要求，但 Spain payroll 需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    changeType: "new",
  },
  980: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite",
    titleZh: "艺术指导（品牌 campaign / AI / motion）",
    titleEs: "Art Director",
    reason: "负责高要求 campaign、品牌身份和跨渠道视觉方向；Adobe、AI、Figma、motion/video 都有价值，方向精确贴近品牌视觉与艺术指导。",
    next: "只有能处理 Catalan/Spanish agency brief 和客户沟通时再投。作品集写清个人 art-direction 贡献、campaign 概念、storyboard、制作和最终多渠道落地。",
    language: "英文与 Catalan 中高要求；本地团队语言需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 5–6 年 agency",
    changeType: "new",
  },
  981: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite",
    titleZh: "资深艺术指导（360 campaign / brand storytelling）",
    titleEs: "Senior Art Director",
    reason: "负责 360 campaign、品牌故事、客户提案和视频/动效延展；英文高水平明确，AI 和 motion 是加分项。",
    next: "只在 senior agency 经验真实匹配时投。准备 campaign concept → art direction → production → final rollout 的完整案例，而不是只发静态 VI。",
    language: "英文高水平必需；西语/加泰语工作场景需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 5–6 年",
    changeType: "new",
  },
  982: {
    direction: "digital",
    company: "VML The Cocktail",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid，平均约 4 天办公室",
    titleZh: "产品设计师（视觉系统 / 数字品牌桥接）",
    titleEs: "Product Designer",
    reason: "邻近数字品牌路线：从 0 到 1 产品、视觉一致性、accessibility、Figma 和 design system；英文要求明确，适合证明品牌如何落到数字产品系统的人。",
    next: "仅在 portfolio 有界面系统、组件、用户流程和产品决策时投；不要只提交 VI 项目。先确认平均办公室天数、薪资和 work permit。",
    language: "英文要求明确；公开正文未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4+ 年",
    changeType: "new",
  },
  983: {
    direction: "brand",
    company: "InfoHuaxin / 华新分类中文渠道",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职；条件待核验",
    titleZh: "广告公司全职平面设计师（中文线索）",
    titleEs: "Diseñador/a gráfico/a — pista de canal chino",
    reason: "中文分类页 7 月 22 日出现的全职平面设计师线索，要求经验、AI、工作居留和全保；但没有公司主体、薪资、地址或正式申请入口。",
    next: "只先用中文问公司全称、地址、薪资、合同/社保、软件、工作内容比例和工作语言；确认主体后再发 CV/portfolio。",
    language: "中文渠道；工作语言未公开",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  984: {
    direction: "digital",
    company: "Waiis",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "Manresa / 4 天办公室 + 1 天远程",
    titleZh: "平面设计与文案（Manresa 版）",
    titleEs: "Graphic Designer and Copywriter — Manresa",
    reason: "新版本职责仍覆盖 web、landing、social、paid、deck、motion 和 AI，并公开 €35,000–40,000；但地点从旧 Barcelona 版本变为 Manresa。",
    next: "先确认是否仍收申请、实际办公地址、工作语言、employment/freelance 形式和 Barcelona 通勤可行性；不要沿用旧 Barcelona 帖作为地点证据。",
    language: "西语职位；语言与合同需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–5 年",
    changeType: "refresh",
  },
  985: {
    direction: "digital",
    company: "The Builder Studios",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Remote EU timezones / freelance（Spain 合同待确认）",
    titleZh: "视觉设计师（品牌视觉 + motion）",
    titleEs: "Visual Designer — Remote EU / Freelance",
    reason: "官方岗位同时要求高质量品牌视觉、motion graphics、GIF/Lottie、pitch deck、品牌一致性和 visual standards/guidelines，工具包括 Figma、Adobe 和 After Effects；与数字品牌延展和动态研究直接相连。",
    next: "用英文 CV + portfolio 申请；首页放 brand systems、motion studies、数字资产和可复用 guidelines。先确认 Spain contractor、费率、项目量、合同期限和税务方式。",
    language: "英文优先；岗位未说明西语，Spain 合同资格待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3+ 年；freelance",
    changeType: "new",
  },
  986: {
    direction: "brand",
    company: "COROS",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote UK / EU（Spain EOR 与出差待确认）",
    titleZh: "品牌创意制作人（产品发布 / 影像 / motion）",
    titleEs: "Brand Creative Producer — Remote UK / EU",
    reason: "官方岗位覆盖产品发布、运动员故事、品牌影片、社媒内容、赛事激活、硬件/软件教育，以及从 brief、拍摄到剪辑交付的完整品牌内容链路；明确写 UK/EU 和 compliant EOR。",
    next: "用英文材料先询问 Spain EOR、欧洲出差频率、美国团队协作时段、薪资和制作/设计比例；作品集放品牌发布、storyboard、剪辑和视觉一致性案例。",
    language: "英文优先；未列西语，Spain 合同资格待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3+ 年；full-time",
    changeType: "new",
  },
  987: {
    direction: "brand",
    company: "Casa Asia / HKU Europe",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona（中英西三语与营销/运营门槛）",
    titleZh: "Marketing & Branding Officer（HKU Europe）",
    titleEs: "Marketing & Branding Officer — HKU Europe",
    reason: "这是 Barcelona 中文生态里少见的清晰品牌岗位：负责品牌指南一致性、网站/社媒/邮件、campaign、活动、供应商与数据分析；JD 明确要求中文、英文和西语。",
    next: "只有西语能实际工作且接受营销/运营比例较高时再投；先问合同、薪资、到岗、启动时间、视觉制作是否内包，以及 WeChat/Xiaohongshu/Weibo 的工作比例。",
    language: "中文、英文、西语均为 essential；西语是硬门槛",
    applicationMode: "chineseCheck",
    experienceKey: "mid",
    experienceLabel: "中级；marketing / branding",
    changeType: "new",
  },  988: {
    direction: "digital",
    company: "PVcase",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona office option",
    titleZh: "品牌动态设计师（Spain remote / €32k–42k）",
    titleEs: "Motion Designer — Remote Spain",
    reason: "目前最完整的 Spain-remote Brand + Motion 入口之一：品牌 campaign、社媒/广告/网站/视频、产品 UI key visual、storyboard、品牌指南、可复用模板和 AI workflow 都在官方职责里，申请表直接确认 Spain/Catalunya。",
    next: "用英文材料直接申请；首屏放 identity → motion、产品解释视觉、storyboard、模板系统和 AI 辅助流程。确认合同实体、Barcelona office 频率、福利和薪资是否按 Spain band。",
    language: "英文必需；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5+ 年",
    changeType: "new",
  },
  989: {
    direction: "digital",
    company: "Storisell",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona hybrid 或 onsite",
    titleZh: "动态设计师（Spain / Barcelona 团队）",
    titleEs: "Motion Designer — Spain",
    reason: "官方 careers 明确写 Spain remote、Barcelona/Valencia in-house 团队，工作覆盖 storyboard、illustration、animation、sound design 和 final proofing，并可直接发 CV/portfolio 到 hr@storisell.com。",
    next: "先邮件确认当前是否仍招、薪资/合同、语言和办公室频率，以及岗位是 explainer/video production 还是包含 brand-system design；材料突出完整制作链路。",
    language: "公开页面未列硬语言门槛；需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级；motion production",
    changeType: "new",
  },
  990: {
    direction: "digital",
    company: "Revolut",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote（官方详情待重新打开）",
    titleZh: "动态设计师（Brand Studio / Spain remote）",
    titleEs: "Motion Designer — Remote Spain",
    reason: "官方搜索结果明确显示 Brand Studio、Spain remote 与 Apply，但本轮直接打开详情页遇到 cache miss；证据等级低于已打开 ATS，不把它当已完全确认的可投岗位。",
    next: "先重新打开 revolut.com 官方详情，确认薪资、seniority、Spain payroll 和 portfolio 要求；页面稳定后再用 motion-first CV 投递，不使用第三方入口。",
    language: "英文国际团队；具体要求待官方详情恢复",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "待确认",
    changeType: "new",
  },  991: {
    direction: "digital",
    company: "Santander España",
    statusKey: "live",
    locationKey: "madrid",
    locationLabel: "Madrid / Spain；hybrid 待确认",
    titleZh: "Creative Tech & Digital Designer（CRM / email / AI）",
    titleEs: "Creative Tech & Digital Designer — Madrid",
    reason: "官方 Workday 明确覆盖 CRM、email、newsletter 与 lifecycle campaign 创意，要求 art direction、Figma components/variants/templates、modular systems、accessibility、email QA，并允许 AI-assisted ideation/versioning/personalization；是品牌系统与数字品牌延展的强邻接机会。",
    next: "先打开 ATS 确认当前 Apply、hybrid/office pattern、Spanish working-language expectations 与薪资；投递时使用 brand-system + digital lifecycle + AI workflow 证据，而不是泛平面作品。",
    language: "professional English preferred；西语工作环境待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / CRM & digital systems",
    changeType: "new",
  },
  995: {
    direction: "brand",
    company: "Amenitiz",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain；需搬迁或在地",
    titleZh: "Senior Brand & Content Manager（品牌内容 / 6个月）",
    titleEs: "Senior Brand & Content Manager — Barcelona",
    reason: "官方 Greenhouse 可直接 Apply，负责四市场品牌内容、全渠道文案、editorial calendar、creative briefing 与 brand positioning；但核心是 copywriting/content strategy，不是纯视觉岗位。",
    next: "只有在英文文案能力和西语/法语/意大利语至少一种母语级条件真实匹配时再投；准备真人写作 cover letter，不用 AI 代写，并把作品集当作品牌思考佐证。",
    language: "英语工作语言；西语/法语/意大利语至少一种 native-level",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高级 / brand content",
    changeType: "new",
  },
  996: {
    direction: "ecommerce",
    company: "PriorityChef",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote；Spain 资格待确认",
    titleZh: "Amazon Creative Designer / 3D（电商视觉）",
    titleEs: "Amazon Creative Designer / 3D — Remote",
    reason: "官方 Workable 申请页真实可用，表单直接核验 Amazon image stacks、A+、作品链接和 Blender/等效 3D；公开职责覆盖 hero images、短视频、brand store 和社媒视觉，是电商品牌延展路线。",
    next: "先确认 Spain resident、合同/payroll、薪资、时区、3D产能和测试是否付费；条件可接受时用 e-commerce/product storytelling 入口投递，不要只发泛 VI。",
    language: "未公开；申请前确认工作语言",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / e-commerce visual",
    changeType: "new",
  },
  997: {
    direction: "brand",
    company: "Restate",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote；Spain 未列",
    titleZh: "Founding Brand Designer（AI infrastructure）",
    titleEs: "Founding Brand Designer — Europe Remote",
    reason: "官方 Ashby 索引显示从 visual language、identity、website 到 motion、design system、HTML/CSS/JS prototype 的完整品牌系统职责；但 50% contractor 起步且官方列出的国家不含 Spain。",
    next: "先问 Spain contract、rate/周期、转正条件和技术协作深度；材料用 identity → website → motion/system 的完整案例，不要只展示静态 logo。",
    language: "英语工作环境待官方确认；西语未列",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / founding brand systems",
    changeType: "new",
  },
  998: {
    direction: "digital",
    company: "Joko",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / remote；模式待确认",
    titleZh: "Product Designer（Brand × Product Systems）",
    titleEs: "Product Designer — Barcelona / Remote",
    reason: "官方 Ashby 索引显示 Barcelona 可选、Remote、€52K–87K + equity，并与 Brand Design 直接协作；职责覆盖 mobile/web/extension、成熟 design system 和品牌一致性，是数字品牌延展邻接而非纯品牌岗。",
    next: "只在愿意投产品视觉/系统方向时考虑；先确认 Barcelona 实际远程、Spain 合同、职级和 UX/研究比重，材料补品牌进入组件和 shipped product 的证据。",
    language: "未见西语硬门槛；官方详情恢复后再确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / product systems",
    changeType: "new",
  },
  999: {
    direction: "production",
    company: "Gameloft",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "Studio Art Director（游戏视觉 / cross-platform）",
    titleEs: "Studio Art Director — Barcelona",
    reason: "官方 Gameloft 职位页明确列出 Barcelona、Hybrid、Permanent contract、Manager Role: Yes、Cross-Platform 和 Director-level；SmartRecruiters ATS 本轮返回 cache miss，完整职责仍需现场复核。",
    next: "先确认具体游戏项目、视觉方向职责、管理比例、工具、语言、办公室频率、薪资和测试；只有游戏/跨平台视觉方向匹配时再投。",
    language: "未公开；先确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / game visual direction",
    changeType: "new",
  },
  1000: {
    direction: "motion",
    company: "Designity",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / LATAM；Spain contract待确认",
    titleZh: "Motion Designer（AI-Driven）",
    titleEs: "Motion Designer (AI-Driven) — Remote EMEA",
    reason: "官方 Designity careers 页显示 Full-time、Remote、EMEA/LATAM，职责覆盖品牌/社媒/数字 campaign、storyboard、AE/Premiere、Lottie 和 AI；需要至少 5 小时与美国东部时间重叠，申请表本轮未加载。",
    next: "先确认 Spain EOR/contract、固定薪资、实际重叠时段、客户行业和测试；投递时使用 motion-first 英文材料，展示品牌一致性、动态系统和 AI 工作流。",
    language: "英语；需 EST overlap",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / AI-driven motion",
    changeType: "new",
  },
  1001: {
    direction: "brand",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International；EU/LATAM含む",
    titleZh: "Senior Graphic Designer（Highrise 数字时尚品牌）",
    titleEs: "Senior Graphic Designer — Highrise / Remote International",
    reason: "官方 Ashby 索引显示 Remote USA/EU/LATAM、Full-time 和约 USD100,000；负责 Highrise visual output、campaign、promotional assets、视觉身份和团队创意标准，但直页是 JavaScript shell，且游戏/数字时尚作品要求极高。",
    next: "先确认 Spain/EU 合同与薪资适用性、character/illustrative 与品牌 campaign 比例、测试和管理职责；只有作品集能证明数字时尚/游戏视觉 craft 时再投。",
    language: "英语；Spain contract待确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / game-fashion visual",
    changeType: "new",
  },
  1002: {
    direction: "motion",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International；European time zone preferred",
    titleZh: "Motion Designer（Marketing / Highrise）",
    titleEs: "Motion Designer (Marketing) — Highrise",
    reason: "官方 Ashby 索引显示国际远程、欧洲时区优先，负责 Meta/TikTok/Google/App Store 的静态与动效 performance creatives，从 concept 到 animation/editing/sound 全流程；直页本轮是 JavaScript shell。",
    next: "先确认 Spain payroll、团队时区、薪资、游戏经验和 KPI；投递时用 performance-motion 版本，展示 hook、前 3 秒、静态/动态变体和 A/B 迭代。",
    language: "英语；欧洲时区优先",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / performance motion",
    changeType: "new",
  1003: {
    direction: "brand",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Graphic Designer（兼职）",
    titleEs: "Graphic Designer (Part-time) — Remote",
    reason: "官方招聘页仍列出 Graphic Designer；Barcelona-born agency、全远程、专业英语，但仅兼职、无薪资且只能邮件申请。",
    next: "先用英文邮件确认 Spain contractor、每周时长、时薪、版权和工作语言；通过后再发送社媒品牌系统和多尺寸视觉案例。",
    language: "专业英语必需；西语未说明",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / part-time visual",
    changeType: "new",
  },
  1004: {
    direction: "motion",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Motion Designer（兼职）",
    titleEs: "Motion Designer (Part-time) — Remote",
    reason: "官方招聘页当前列出 Motion Designer；全远程、英语工作，但兼职、时区、薪资与合同均未公开。",
    next: "先确认每周时长、固定时段、视频版权和交付流程；用 4–6 个 storyboard 到 final 的短 Reel 作为首轮材料。",
    language: "专业英语必需；西语未说明",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / social motion",
    changeType: "new",
  },
  1005: {
    direction: "brand",
    company: "Free Practice",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "Málaga / onsite + Friday WFH",
    titleZh: "Senior Graphic Designer（Málaga）",
    titleEs: "Senior Graphic Designer — Málaga",
    reason: "原始详情页明确品牌 identity、campaign、motion、spatial/experiential design、7+ years 和 2026-08-19 截止日；但必须在 Málaga 工作。",
    next: "只有愿意搬迁且资历匹配时申请；先确认薪资、合同、搬迁成本和表单状态，作品集突出 identity、campaign、motion 与空间品牌。",
    language: "英语明确；本地工作语言需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / identity + experience",
    changeType: "new",
  },
  1006: {
    direction: "digital",
    company: "Social Scout Email Marketing",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Worldwide remote / EST hours",
    titleZh: "PDP Designer / Landing Page Designer",
    titleEs: "PDP Designer — Remote Contractor",
    reason: "雇主详情页给出全远程、英文、DTC PDP、landing、Figma system 和 CRO；但 contractor 与 9:00–17:00 EST 是主要投递阻力，未暴露 ATS。",
    next: "先确认 Spain contractor、税务付款、实际重叠时段和测试是否付费；材料放 responsive e-commerce brand system、A/B 迭代与转化视觉。",
    language: "流利英语必需；EST 工作时段",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / e-commerce conversion",
    changeType: "new",
  },  1007: {
    direction: "brand",
    company: "ORBIDI",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Cugat / hybrid",
    titleZh: "Senior Graphic Designer / Brand Visual Lead",
    titleEs: "Senior Graphic Designer — Brand Visual Lead",
    reason: "官方 Teamtailor 页面显示 Barcelona、Híbrido、Full-time 和 Enviar solicitud；职责直指 Key Visual、brand book、guidelines、campaign、PR、paid media 与全触点一致性，但要求流利西语。",
    next: "只有能处理西语 brief、会议和反馈时再投；作品集突出 identity system、brand governance、campaign rollout、motion microinteractions 和团队指导。",
    language: "流利西语硬门槛；英语为 functional",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / brand visual lead",
    changeType: "new",
  },
  1008: {
    direction: "motion",
    company: "1000heads",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote Spain-eligible / freelance",
    titleZh: "Motion Designer（Freelance Remote）",
    titleEs: "Motion Designer, Freelance — Remote Spain",
    reason: "官方 Careers 页列出 Madrid Motion Designer，并链接 Workable；Spain 可申请、3+ 年、Figma/After Effects、storyboard、campaign look & feel 和多地区模板均明确。",
    next: "先确认 freelance 费率、项目连续性、版权和 UK/CET 重叠；投递 motion-first Reel，展示 storyboard、look & feel、2D/3D 和多地区变体。",
    language: "英语良好至优秀；西语未列为硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / social motion",
    changeType: "new",
  },
  1009: {
    direction: "motion",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid",
    titleZh: "Senior AI Creative Designer",
    titleEs: "Senior AI Creative Designer — Madrid",
    reason: "官方 Fever Careers 显示 Indefinite、Full-time、Apply；职责覆盖 AI creative workflow、key visual、motion、video、paid/organic、landing assets 与 performance iteration，但要求 6+ 年和西英双语。",
    next: "若西语未达流利，不进入首投；若满足，展示 AI 辅助但由人工把控 craft 的 campaign system、模板、localisation 和数据迭代。",
    language: "西语 + 英语流利硬门槛",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / AI creative systems",
    changeType: "new",
  },
  1010: {
    direction: "digital",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid / temporary",
    titleZh: "Creative Graduate — AI Video & Design",
    titleEs: "Graduate Program — Creative Next Gen AI Video & Design",
    reason: "官方职位页显示 Temporary、Full-time、Madrid、Apply；约 1 年经验即可，覆盖短视频、key visual、thumbnail、A/B 变体和 GenAI，但要求西语+英语双语。",
    next: "只在符合早期经历/实习条件并能在 Madrid 工作时考虑；材料放前三秒 hook、短视频变体、AI workflow 和 performance creative，不与高级岗混投。",
    language: "西语 + 双语英语硬门槛",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / graduate creative",
    changeType: "new",
  },
  1011: {
    direction: "brand",
    company: "JustMarkets",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote / Spain contract to confirm",
    titleZh: "Head of Design",
    titleEs: "Head of Design — Europe Remote",
    reason: "官方 Greenhouse 显示 Europe、Apply 和 remote work；职责把 visual identity、brand-level art direction、UX/UI、brand guidelines、DesignOps、AI transformation 与 Product/Graphic/Web/Motion 团队领导合并在一岗。",
    next: "先确认 Spain payroll/contract、是否接受 Barcelona、出差和管理范围；若匹配，作品集首屏放 VI governance、跨触点品牌系统、AI workflow、团队 critique 与产品视觉系统。",
    language: "英语为主；其他语言与 Spain 交付条件需确认",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "设计负责人 / brand + product",
    changeType: "new",
  },
  1016: {
    direction: "brand",
    company: "Paradox",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / Barcelona remote list",
    titleZh: "Creative Director — EdTech",
    titleEs: "Creative Director — EdTech",
    reason: "官方 Ashby 将 Barcelona Remote、Remote Spain 和多个欧洲地点列为可选；职责覆盖双品牌架构、内容格式、脚本/分镜、视觉质量 gate、内容团队领导和 performance creative，但法语 Native/Bilingual 是硬门槛。",
    next: "只有具备法语、百万级内容/媒体品牌经验、脚本与团队管理时再投；材料首屏放 brand architecture、content format system、视觉叙事、跨平台 rollout 与数据迭代。",
    language: "法语母语/双语硬门槛；英语流利",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "创意负责人 / brand + content",
    changeType: "new",
  },
  1017: {
    direction: "motion",
    company: "The Flex / Base360",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / global location list",
    titleZh: "AI Video Creator",
    titleEs: "AI Video Creator — Remote Spain",
    reason: "官方 Ashby 显示 Spain、Full time、Remote；工作覆盖产品发布视频、广告、社媒短片、brand film、kinetic typography、product demo 与 AI 视频/图像/声音工作流。",
    next: "先核实 Spain 合同实体、主体、时区和项目；Reel 突出前三秒 hook、短视频变体、AI workflow、motion system 和品牌一致性。",
    language: "英语工作沟通；西语未列为硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / AI video + motion",
    changeType: "new",
  },
  1028: {
    direction: "brand",
    company: "Zak Group",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "全球 Remote freelance；Spain contractor 条件需确认",
    titleZh: "高级品牌设计师（自由职业 / 品牌身份）",
    titleEs: "Senior Brand Designer (Freelance)",
    reason: "官方工作页明确 Remote、Freelance、Rolling，并接受全球申请；职责直接覆盖 symbols、logos、logotypes、lettering、type design、illustration 与品牌身份项目，2D motion/3D 为加分。",
    next: "先确认项目制、日费/付款币种、项目量、Spain contractor 税务和作品集 PDF 要求；投递以品牌身份系统、字体/标志推导、应用延展和少量 motion 为主。",
    language: "英语申请；全球 remote 资格清楚，Spain contractor 条件需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / brand identity",
    changeType: "round57",
  },
  1029: {
    direction: "brand",
    company: "Together",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Remote UK & Europe；Spain payroll 待确认",
    titleZh: "高级品牌设计师（B2B 科技 / 品牌系统）",
    titleEs: "Senior Brand Designer",
    reason: "官方 careers 页明确 Remote, UK & Europe、£40,000–£65,000 和申请表；职责连接品牌身份、可扩展系统、web/product experience，要求 8+ 年、Figma、Adobe CC 与 creative AI。",
    next: "优先确认 Spain 合同主体、团队集合/出差、级别和 portfolio 期望；若匹配，用英文 case study 展示 strategy→identity→guidelines→web/product rollout、Figma tokens/components 与客户呈现。",
    language: "英语国际团队；Spain payroll 与出差安排需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 8+ 年品牌项目",
    changeType: "round57",
  },
  1030: {
    direction: "brand",
    company: "HelloKindred",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote-first；UK shift；Spain 合法工作资格未公布",
    titleZh: "高级平面设计师（B2B 品牌 / 营销）",
    titleEs: "Senior Graphic Designer (fixed-term 1 year)",
    reason: "官方 SmartRecruiters 详情显示 Remote、Full-time、40 小时和 UK shift；职责覆盖品牌 campaign、sales deck、event materials、infographics 与客户交付，要求 6–7+ 年 B2B、Adobe、PowerPoint、Figma/AI。",
    next: "先确认 Spain 是否可雇、fixed-term 期限、Barcelona 时区对应的 16:00–01:00 工作段、薪资和 assessment 是否付费；材料优先放 B2B deck、品牌 campaign、event/white-paper 系统。",
    language: "英语；UK shift；Spain 合法工作资格需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6–7+ 年 B2B",
    changeType: "round57",
  },
  1031: {
    direction: "digital",
    company: "Voodoo",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / remote; Spain employment to confirm",
    titleZh: "UI/UX Designer - Hole.io",
    titleEs: "UI/UX Designer - Hole.io",
    reason: "Official Ashby content shows Barcelona, Remote, Full-time and Apply. The role supports the Art Director and owns scalable game UI, a UI Style Bible, reusable components and 2D visual assets in Figma. This is a game-visual adjacency rather than commercial VI, and the direct ATS is JavaScript-only in this pass.",
    next: "Confirm Spain employment, current freshness and the expected game/UI portfolio. Apply only with shipped-game UI or a strong digital visual-system case showing hierarchy, components, visual language documentation and asset consistency.",
    language: "English; Spain employment to confirm",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "4+ years / shipped mobile games",
    changeType: "round59",
  },
  1032: {
    direction: "motion",
    company: "Ultralytics",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid 3 days onsite + 2 remote",
    titleZh: "Video Editor - AI product and motion",
    titleEs: "Video Editor",
    reason: "Official Ashby content states Madrid, Spain, full-time hybrid 3/2, EU work authorization and no visa sponsorship. The scope covers editorial, light After Effects motion, AI/product visualisation, interviews, events, case studies, YOLO overlays and multi-platform packaging; it is not a static brand-designer role.",
    next: "Confirm salary, working language, office cadence and test-task terms. If acceptable, submit a motion reel with product explanation, clean overlay/title systems, social cutdowns and brand-consistent technical storytelling.",
    language: "English or Spanish working language to confirm; EU work authorization required",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Video editing + light motion / AI visualization",
    changeType: "round59",
  },
  1033: {
    direction: "digital",
    company: "Ashby",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / Spain / EU remote",
    titleZh: "高级设计工程师（EU / 设计系统）",
    titleEs: "Staff Design Engineer - EU",
    reason: "Official Ashby content lists Barcelona and Spain, Remote, Full-time and €154k–€188k L4 / €208k–€250k L5 plus equity. The role combines visual quality, design-system expansion, UI/UX, wireframing and production TypeScript/React/CSS implementation; it is a design-engineering adjacency rather than a commercial VI role.",
    next: "先确认 staff-level engineering depth, Spain payroll/entity, current live application and remote policy. Only use a portfolio that pairs shipped UI with design-system specs, tokens/components and design-to-code decisions; static brand identity work alone is insufficient.",
    language: "English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "Staff / design engineering",
    changeType: "round61",
  },
  1034: {
    direction: "digital",
    company: "SearchApi",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain explicitly listed",
    titleZh: "前端工程与 UI 设计师（开发者工具）",
    titleEs: "Frontend Engineer & UI Designer (Developer Tooling)",
    reason: "Official Ashby content lists Remote - Spain and Full-time. The hybrid role owns the dashboard, API playground, docs, marketing site, data visualisation and component system from Figma through production; it is a technical digital-product adjacency, not a pure graphic-design role.",
    next: "先确认 Spain hiring entity, compensation and take-home task. Apply only with two live UI cases that were designed and built by the candidate, showing responsive states, data-dense dashboards, component discipline and a real marketing or docs surface; application asks for the phrase ‘Octopus Tentacle’.",
    language: "Fluent English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Design + production frontend",
    changeType: "round61",
  },
  1035: {
    direction: "digital",
    company: "Kyndryl Vital",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / partially remote",
    titleZh: "视觉设计师（AI 产品体验 / 设计系统）",
    titleEs: "Lead, Visual Designer",
    reason: "Official Kyndryl Workday content shows Madrid, Partially Remote, Full-time, Apply and requisition R-57022. The Kyndryl Vital role combines AI/agentic experience design, visual/UI design, branding, key visuals, interactive prototypes and scalable design systems; fluent English and Spanish are explicit.",
    next: "先确认西语实际工作强度、薪资、办公室节奏和创新实验室/产品团队归属。若可投，用西语或双语材料展示把 AI 复杂度转成清晰视觉语言、Figma components, prototypes, design-system rules and brand/motion/presentation extensions; 不要只发静态 logo case.",
    language: "Fluent English + Spanish required",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "2–5 years visual/UI/digital product",
    changeType: "round62",
  },
  1036: {
    direction: "brand",
    company: "Algofy",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / hybrid; remote-first policy to confirm",
    titleZh: "Brand & Web Designer（数字营销 / 包装延展）",
    titleEs: "Graphic & Web Designer",
    reason: "The official Algofy careers page lists a full-time Graphic & Web Designer for Spain with graphic/video content for digital marketing, websites, traditional branding, print and packaging. It is relevant brand extension work but broader and more performance-creative-heavy than pure VI; the official Apply Here route currently points to LinkedIn.",
    next: "Use the official careers page and employer-linked application to confirm current receipt, Spain payroll/entity, exact hybrid or remote cadence, salary and whether this is the same vacancy advertised as We Are Stellar/Algofy. If confirmed, apply in English with a brand system plus paid-social static/motion, web/email and packaging cases.",
    language: "English-first; high-level English/C2 shown in the employer listing; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Graphic/web production + branding versatility",
    changeType: "round63",
  },
  1038: {
    direction: "motion",
    company: "Lodgify",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "EMEA remote / Barcelona HQ / Spain contract to confirm",
    titleZh: "Motion Designer（Lodgify，EMEA 远程）",
    titleEs: "Motion Designer",
    reason: "The official Lever detail lists EMEA, Marketing, Freelance Contract and Remote, and says Lodgify is headquartered in Barcelona. The role connects motion to brand campaigns, performance marketing, product storytelling and social, while evolving motion principles, reusable templates and AI-enabled workflows with After Effects and Premiere Pro.",
    next: "Confirm Spain contractor eligibility, rate, invoicing/tax setup, timezone, availability and the split between system ownership and production. If eligible, apply in English with a concise motion reel, one brand-motion system, campaign/product/social cutdowns, sound-aware editing and an AI workflow example; do not rely on a static VI-only case.",
    language: "English application; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Motion design + brand/marketing storytelling",
    changeType: "round65",
  },
  1039: {
    direction: "motion",
    company: "Tripledot Studios",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / permanent full-time / hybrid",
    titleZh: "Motion Designer（Tripledot，巴塞罗那）",
    titleEs: "Motion Designer",
    reason: "The official Pinpoint detail is live with Apply Now and states Marketing, Permanent - Full Time, Barcelona, ES and Hybrid. The accessible ATS output leaves the responsibilities and required-skills sections empty, so this is a real opening but not yet a fully evidenced brief.",
    next: "Open the live application form and confirm the actual marketing/game-versus-brand scope, software, salary, language, hybrid days and portfolio/test-task requirements. If it is acquisition motion, lead with short-form game/social performance work; if it includes brand systems, add a compact visual-language and template case.",
    language: "Not exposed in the accessible ATS shell; confirm before tailoring",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Marketing motion / games visual adjacency",
    changeType: "round65",
  },
  1037: {
    direction: "motion",
    company: "JustMarkets",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe / remote work offered; Spain entity to confirm",
    titleZh: "Motion Designer / Video Editor（欧洲远程）",
    titleEs: "Motion Designer/ Video Editor",
    reason: "The official JustMarkets careers detail lists Europe, Full-time and Apply, with short-form social video, event animations, localization, master-video variations, After Effects templates, AI tools and brand-guideline adherence. It is a useful motion-to-digital-brand route, but the country of employment and Spain payroll are not stated.",
    next: "Before tailoring, confirm whether Spain residents can be employed or contracted, the legal entity, compensation, timezone, language and the ratio of social production to brand-system work. If eligible, use a motion reel showing localization, format cutdowns, event loops, brand-safe templates and AI-assisted production.",
    language: "English intermediate or higher; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2+ years motion design and video editing",
    changeType: "round64",
  },
  1018: {
    direction: "motion",
    company: "EverAI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / B2B or freelance to confirm",
    titleZh: "Senior AI Vertical Mini-Series Director",
    titleEs: "Senior AI Vertical Mini-Series Director — Spain",
    reason: "官方 Ashby 显示 Spain、Full time、Remote 和 Europe EUR47k–107k；职责覆盖 9:16 短剧、脚本、导演、剪辑、AI 角色一致性和 trailer，但标题 Freelance 与 full-time listing 存在合同矛盾。",
    next: "只在具备短视频导演/剪辑和 AI video 实作时考虑；先确认 B2B/雇佣、税务、产量、内容边界和测试是否付费，不先做完整无偿剧集。",
    language: "英语流利",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / AI narrative video",
    changeType: "new",
  },  },});
Object.assign(CURATED, {
  1300: {
    direction: "brand",
    company: "INFiLED / 中国品牌巴塞罗那团队",
    chineseFit: true,
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / full-time",
    titleZh: "平面设计师（品牌与市场视觉）",
    titleEs: "Graphic Designer — brand and marketing visual",
    reason: "当前 LinkedIn 雇主详情可直接申请：负责艺术方向、数字与印刷营销资产、网页/内容更新、展会/展台、多市场适配和品牌一致性。中国深圳品牌在 Barcelona 有实体体验中心。",
    next: "用英文简历和作品集通过当前入口投递；作品集突出品牌系统、数字与印刷、网页、展会和多市场延展。投后再问 EMEA 招聘方中文/总部协作、薪资和 hybrid 节奏。",
    language: "流利英语；页面显示需具备西班牙工作许可；中文/总部协作是额外价值",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级以上 / 品牌、市场与制作统筹",
    // This is the current replacement for the three closed INFiLED LinkedIn
    // requisitions. Mark it as the refresh winner so de-duplication never
    // surfaces an expired application page ahead of the live one.
    changeType: "refresh",
  },
  1303: {
    direction: "digital",
    company: "CATORCE / DDB Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / agency studio / office days to confirm",
    titleZh: "工作室视觉设计师与 HTML 程序员",
    titleEs: "Studio Designer & HTML Programmer",
    reason: "官方 Greenhouse 当前可投。将平面与数字品牌制作结合：印刷、OOH、零售、社媒、展示广告、banner、邮件和落地页组件，需严格按品牌规范交付。",
    next: "这是英语+西语双硬门槛的本地广告公司岗位。确认薪资、签证/居留、每周到岗天数后，再用印刷/OOH、零售、社媒、HTML banner/email 和品牌规范落地案例投递。",
    language: "英语与西语口笔头流利为硬门槛；3+ 年广告公司 Graphic + HTML 经验",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 3+ 年广告公司视觉与 HTML 制作",
    changeType: "new",
  },
  1040: {
    direction: "brand",
    company: "Roman / La Casa de Carlota",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / indefinite full-time",
    titleZh: "初级平面设计师（LCDC 品牌、编辑与数字）",
    titleEs: "Junior Graphic Designer LCDC",
    reason: "官方 Roman board 与 Factorial 详情已重新显示当前 Apply：Barcelona、无限期、全职、混合办公、9 月入职。职责直接覆盖 branding、editorial、campaign、digital content、art direction、各类格式适配与视觉一致性，是本轮最贴品牌核心的重开岗位。",
    next: "这是西语挑战岗，不进入中文首投。只有能处理中高加泰语与西语工作环境时再投；材料突出品牌概念、编辑系统、数字 campaign、Adobe 执行、少量 motion/AI，并先确认 2026 年 9 月入职、薪资与每周到岗节奏。",
    language: "加泰语 + 西语中高水平为硬门槛；英语中等为加分",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–3 年",
    changeType: "round66",
  },
});

// Round 524: ID 915 is retained as closed/history after the source review;
// keep this invariant aligned with the data-generation boundary.
if (CURATED[915]) CURATED[915].statusKey = "closed";
if (CURATED[559]) CURATED[559].statusKey = "closed";
// Round 689 direct original-detail evidence overrides the older generic
// LinkedIn verification state for these two still-applyable roles.
Object.assign(CURATED, {
  232: {
    direction: "digital",
    company: "Fluidra",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / Barcelona metro",
    titleEs: "Design System Designer",
    language: "English B2+ shown; Spanish, contract and office cadence to confirm",
    changeType: "round689",
  },
  1234: {
    direction: "brand",
    company: "LearnWise AI",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Europe remote possibility",
    titleEs: "Senior Brand & Marketing Designer",
    language: "Fluent English required; additional languages plus; Spain contract to confirm",
    changeType: "round689",
  },
  241: {
    direction: "brand",
    company: "King / Microsoft",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / King - PG",
    titleEs: "Creative Director — Catalog Games",
    language: "Application is in English; exact language and seniority details to confirm",
    changeType: "round690",
  },
});
Object.assign(CURATED, {
  871: {
    direction: "brand",
    company: "Codeway",
    statusKey: "closed",
    experienceKey: "mid",
    experienceLabel: "初中级 / 1–4 年（历史）",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已关闭",
    titleZh: "品牌平面设计师（已关闭）",
    titleEs: "Brand Graphic Designer (closed)",
    reason: "官方 Ashby 原始详情已直接核验为 “Job not found”，不存在可提交的申请表。此前职责和福利只保留作历史证据。",
    next: "不要通过通用人才库冒充投递该旧职位；只在 Codeway 出现新的独立职位编号与可申请表单时重新评估。",
    language: "历史职位；当前无有效申请入口",
  },
  884: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 医疗、健康或受监管行业经验加分",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公 / 永久全职",
    titleZh: "中级平面设计师（健康与医疗）",
    titleEs: "Mid Graphic Designer (Wellness and Healthcare)",
    reason: "官方 Factorial 原页与 LinkedIn 同时显示当前可申请：Bar​​celona、hybrid、permanent、full-time。内容是医疗/健康 campaign、社媒、网站、演示和营销物料，强调复杂信息的清晰表达与品牌一致性。",
    next: "用英文简历和作品集投官方表单；优先展示信息层级、campaign、社媒、网页、演示与多格式品牌一致性。面试前确认薪资、工签政策、到岗节奏和医疗行业经验要求。",
    languageKey: "light",
    language: "英语流利为硬要求；其他语言仅为加分，未写西语硬门槛",
    changeType: "refresh",
  },
});

// Round 615: Together is a direct, current official application.  This late
// assignment is deliberately outside the older nested curation payload so the
// live status and Europe-remote location survive legacy metadata collisions.
Object.assign(CURATED, {
  1029: {
    direction: "brand",
    company: "Together",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Remote UK & Europe; Spain employment terms to confirm",
    titleZh: "高级品牌设计师（B2B 科技 / 品牌系统）",
    titleEs: "Senior Brand Designer",
    reason: "Official Together careers page shows an open application form, Remote UK & Europe, GBP40,000-65,000, and ownership of scalable B2B-tech brand identity systems across brand, web and product.",
    next: "Apply in English with senior brand-system, B2B-tech, web/product rollout and leadership case studies. Confirm Spain payroll, travel and employment entity during screening.",
    language: "English working environment; Spain payroll and travel arrangements need confirmation",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "Senior / 8+ years brand systems",
    changeType: "round615",
  },
});

// 2026-08-12 canonical audit. Status overrides here are based on opening the
// original detail/application pages, not on search-result snippets or a page
// merely returning HTTP 200.
Object.assign(CURATED, {
  175: {
    direction: "brand",
    company: "Frekuent",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid（每周 3 天办公室、2 天远程）/ 永久全职",
    titleZh: "品牌与 Campaign 设计师",
    titleEs: "Brand & Campaign Designer",
    reason: "官方 Factorial 详情显示当前可申请。工作覆盖付费广告、landing page、email、社媒、活动与销售物料，并负责品牌一致性、设计标准和模板；要求 4 年以上，英语或西语其中一门流利、另一门达到中级。",
    next: "先按真实语言能力判断：如果英语流利且西语已到中级，可以用品牌 campaign、landing/email、模板系统与数字延展案例投递；否则先不投入定制作业。",
    language: "英语或西语一门流利，另一门至少中级",
    languageKey: "basicSpanish",
    experienceKey: "mid",
    experienceLabel: "中高级 / 4 年以上",
    changeType: "refresh",
  },
  284: {
    direction: "brand",
    company: "EuroLeague Basketball",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 现场 / 永久全职",
    titleZh: "高级平面设计师（体育品牌与赛事视觉）",
    titleEs: "Senior Graphic Designer",
    reason: "官方 Personio 原页显示 Apply。岗位负责静态与动态社媒、实时比赛内容、赛季/季后赛/Final Four campaign、商业合作物料和 EuroLeague 高端视觉识别；要求 3 年以上体育设计经验、流利英语及西班牙合法工作资格。",
    next: "适合有体育、活动或高频社媒系统经验时挑战；作品集展示品牌一致性、实时内容、多格式 campaign 与基础 motion。先确认轮班晚间/周末、10–15% 欧洲出差和薪资。",
    language: "流利英语；西语仅为加分项，需有欧盟身份或有效西班牙工作/居留许可",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 3 年以上体育设计经验",
    changeType: "refresh",
  },
  930719: {
    direction: "digital",
    company: "Adsmurai",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid（每周 2 天远程）/ 无限期全职",
    titleZh: "数字平面设计师（360° Campaign）",
    titleEs: "Digital Graphic Designer (They/He/She)",
    reason: "官方 Teamtailor 页面显示当前可投，负责 360° 数字 campaign、品牌规范适配、付费与自然社媒、短视频、演示和宣传册；但明确要求至少 3 年经验，并同时流利使用西班牙语和英语。",
    next: "因双语硬门槛降到后排。只有能够用西语和英语完成 brief、沟通与反馈时再投；否则保留为作品集方向参考。",
    language: "流利西班牙语和英语均为硬门槛",
    languageKey: "spanish",
    languageHard: true,
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    changeType: "refresh",
  },
  910: {
    ...CURATED[910],
    next: "用英文简历和作品集直接申请。首页放 App 图标 / 商店截图系统、Logo 与品牌元素、style guide、performance creative、动效和数据迭代案例；面试前确认薪资、试用期、Barcelona 到岗频率与测试是否付费。",
  },
  866: {
    ...CURATED[866],
    reason: "英语门槛清楚、未列西语硬要求。工作把品牌延展到产品解说、客户故事、社交短片、活动、数字 campaign、演示、模板和素材系统，既有动态也有静态品牌资产，是当前较强的 Barcelona 数字品牌机会。",
  },
  203: {
    direction: "ecommerce",
    company: "Amazon / Elevated Shopping",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / Amazon Spain / 全职",
    titleZh: "艺术指导（品牌合作与电商视觉）",
    titleEs: "Art Director, Elevated Shopping",
    reason: "Amazon.jobs 官方原页显示 Apply now。岗位负责品牌合作、视觉研究、mockup、故事表达、摄影/视频拍摄指导、大型活动与电商体验；要求 3 年以上及在线作品集。",
    next: "用品牌合作、campaign、拍摄指导、平面/motion 与电商叙事案例投递；面试前确认工作语言、办公节奏、薪资和工签政策。",
    language: "原始可读正文未公开西语或其他语言硬门槛",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    changeType: "refresh",
  },
  920001: {
    direction: "brand",
    company: "PepsiCo / Alvalle",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 现场节奏待确认 / 全职",
    titleZh: "高级设计师（品牌识别、包装与产品架构）",
    titleEs: "Senior Designer — Food Ventures (Alvalle)",
    reason: "原始 LinkedIn 雇主页显示 Solicitar。岗位定义 Alvalle 全球品牌设计策略，覆盖产品架构、视觉识别、包装与创新流程；要求 4 年以上，并有约 15% 出差。",
    next: "用英文提交品牌识别、包装、消费品架构与端到端上市案例；先确认工作语言、薪资、办公节奏、工签和实际 PepsiCo ATS 入口。",
    language: "公开可读正文未写西语要求；申请工作语言需确认",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上",
    changeType: "refresh",
  },
  190: {
    direction: "brand",
    company: "Stark Future",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Boi de Llobregat / 现场全职",
    titleZh: "平面设计师（产品品牌、包装与零售）",
    titleEs: "Graphic Designer",
    reason: "当前原始雇主页显示 Solicitar。职责覆盖高端营销 campaign、门店与经销商网络、包装、手册、企业传播、newsletter 和演示模板，强调统一视觉识别。",
    next: "提交高端品牌系统、零售/经销商物料、包装、文档与演示模板案例；先确认语言、薪资和实际到岗频率。",
    language: "原始正文未公开西语或英语等级",
    changeType: "refresh",
  },
  930715: {
    direction: "digital",
    company: "Sanofi",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 全职；办公节奏待确认",
    titleZh: "平面设计师（品牌规范、信息设计与 Motion）",
    titleEs: "Graphic Designer",
    reason: "当前原始雇主页显示 Solicitar。工作覆盖解释/教育/推广视频、信息图动画、海报、演示、newsletter、e-mailer、手册、e-learning 与品牌模板；要求 2–6 年及优秀英语。",
    next: "英文申请；作品集重点放品牌规范、信息层级、演示模板、motion 与复杂内容可视化。确认薪资、混合办公和西语日常要求。",
    language: "优秀英语为明确要求；未公开西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–6 年",
    changeType: "refresh",
  },
  930716: {
    direction: "brand",
    company: "Canonical",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EMEA 远程 / Barcelona 可居住 / 每年国际出行约 2 次",
    titleZh: "视觉设计师（品牌指南与数字产品系统）",
    titleEs: "Visual Designer",
    reason: "原始雇主页显示 Solicitar。中央设计团队负责演进品牌指南、传播物料、UI 设计系统和数字产品视觉；英语读写口语优秀为明确要求。",
    next: "英文申请；提交品牌系统、字体版式、可访问性、Web/UI system 和数字产品案例。先确认 Spain 雇佣主体、薪资与工签。",
    language: "优秀书面与口语英语为硬要求",
    languageKey: "light",
    applicationMode: "english",
    changeType: "refresh",
  },
  1301: {
    direction: "brand",
    company: "The Colour Monster",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 现场全职；投递入口待确认",
    titleZh: "平面设计师（品牌识别与视觉系统）",
    titleEs: "Graphic Designer — Brand Identity and Visual Systems",
    reason: "职责非常贴 VI：视觉识别演进、品牌手册、guidelines、模板、网格、字体、包装、授权、编辑、数字与展览；但要求加泰语和西语达到母语/双语、英语专业水平，且本轮未确认正式投递按钮。",
    next: "因三语与入口门槛降到后排。只有语言真实满足时，先联系发布者索要有效投递入口，再提交品牌手册、授权/包装治理和第三方审核案例。",
    language: "加泰语与西语须母语或双语，英语须专业工作水平",
    languageKey: "spanish",
    languageHard: true,
    changeType: "refresh",
  },
  55: {
    direction: "digital",
    company: "BCome",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / semi-presential / 灵活工时",
    titleZh: "数字设计师（企业识别、SaaS 与 Motion）",
    titleEs: "Digital Designer",
    reason: "官方 careers 页面当前列出职位并提供直接邮箱。工作结合 SaaS UX/UI、企业识别、广告、演示、mockup、Figma、Adobe、After Effects 与多媒体资产。",
    next: "向 alba@bcome.biz 发送品牌到数字产品的完整案例；确认语言、固定薪资、合同主体和办公室节奏。",
    language: "公开职位未写具体工作语言等级",
    changeType: "refresh",
  },
  960: {
    direction: "social",
    company: "DDB Spain",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 初级全职",
    titleZh: "初级艺术指导（社媒与 Campaign）",
    titleEs: "Art Director Junior",
    reason: "官方 Greenhouse 原页有 Apply 和完整表单。职责包括社媒概念、campaign 资产、版式、拍摄与视频剪辑；要求 1–2 年 agency/studio 经验。正文为西语，但没有单列语言等级。",
    next: "先确认团队日常能否用英语；若可行，提交社媒概念、campaign、layout、拍摄和短视频案例。",
    language: "招聘正文为西语；未单列语言等级，需先确认",
    languageKey: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–2 年",
    changeType: "refresh",
  },
  238: {
    direction: "brand",
    company: "Publicis Production / Publicis Groupe España",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 全职",
    titleZh: "艺术指导（整合 Campaign）",
    titleEs: "Art Director",
    reason: "原始雇主页和外部申请入口当前可用。工作覆盖线上/线下 campaign、客户演示、平面、motion、Adobe/Figma 与 AI；要求 4 年以上或相当学历，并在面试中评估高级英语。",
    next: "提交整合 campaign、概念到完稿、motion 和客户演示案例；确认西语、合同、薪资与 hybrid 节奏。",
    language: "高级英语会在面试评估；西语要求未公开",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上",
    changeType: "refresh",
  },
  156: {
    direction: "brand",
    company: "Heroes / Boba",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 每周至少 2 天办公室 / 全职",
    titleZh: "平面设计师（品牌、包装与电商）",
    titleEs: "Graphic Designer",
    reason: "官方 Teamtailor 原页显示 Apply。负责 rebrand、包装、Amazon 品牌店、电商、社媒、email、印刷、产品上市和五个消费品牌的一致性；要求 4 年以上。",
    next: "提交包装、Amazon/e-commerce、品牌指南、社媒/email 与轻量视频案例；确认语言、薪资和合同主体。",
    language: "公开职位未列语言等级",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上",
    changeType: "refresh",
  },
  147: {
    direction: "brand",
    company: "SplitMetrics",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲时区远程 / Spain eligible / 全职",
    titleZh: "高级视觉设计师（品牌识别与增长 Campaign）",
    titleEs: "Senior Visual Designer",
    reason: "官方 Ashby 原页显示 Apply。负责提升公司视觉识别并延展到营销触点、performance campaign、网站、AI 产品信息和社媒；要求高级视觉工艺与英语沟通。",
    next: "英文申请；提交品牌系统、performance campaign、网站和社媒案例。确认 Spain payroll、薪资与工签。",
    language: "英语协作为明确要求；西语未列",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 年限未量化",
    changeType: "refresh",
  },
  216: {
    direction: "brand",
    company: "Linear",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "欧洲时区远程 / Spain 合同需确认",
    titleZh: "Web 与品牌设计师",
    titleEs: "Designer, Web & Brand",
    reason: "官方 careers 与 Ashby 仍列出 Europe remote，职责横跨网站/landing、品牌营销、跨渠道概念、UI、motion 与 interactive；但需再确认当前 requisition 和 Spain 雇佣资格。",
    next: "先验证 Ashby 表单仍接收并询问 Spain payroll；确认后提交 Web 品牌系统、UI、motion 与跨渠道 campaign 案例。",
    language: "官方页面为英语；具体等级未列",
    applicationMode: "english",
    changeType: "refresh",
  },
  84: {
    direction: "digital",
    company: "reboot",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 全职",
    titleZh: "网页设计师（端到端视觉落地）",
    titleEs: "Web Designer",
    reason: "当前官方申请页只公开 Web Designer，要求强视觉品味、独立完成端到端网站并提交 3 个作品；品牌、motion 和 senior 等旧标题没有独立职位编号。",
    next: "只提交 3 个最强的 Web/视觉项目；先确认 Spain 合同、薪资和工作语言。",
    language: "公开申请页未列语言要求",
    changeType: "refresh",
  },
  12: {
    direction: "brand",
    company: "turbopuffer",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 全职；Spain 合同需确认",
    titleZh: "综合设计师（产品、品牌、Web 与营销）",
    titleEs: "Designer",
    reason: "官方 Ashby 原页显示 Apply。作为首位设计师横跨产品、品牌、Web、blog、线下和 campaign，并要求能用 Tailwind、Claude Code 或 Cursor 推动设计直接上线。",
    next: "只在作品集同时具备品牌系统、Web/产品视觉与实际落地能力时申请；确认 Spain 雇佣、薪资和工作语言。",
    language: "官方页面为英语；未公开语言等级",
    applicationMode: "english",
    changeType: "refresh",
  },
  305: {
    direction: "brand",
    company: "Hostinger",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程 / 全职",
    titleZh: "高级平面设计师（品牌与创意）",
    titleEs: "Senior Graphic Designer — Brand & Creative",
    reason: "官方 Ashby 原页显示 Spain remote 与 Apply。工作覆盖品牌、广告与雇主品牌 campaign、多渠道数字/印刷资产、品牌演进、指导协作和 AI 工作流；流利英语必需。",
    next: "英文申请；提交 campaign、视觉识别演进、多渠道执行、Figma/Adobe 与 AI workflow。确认薪资和工签。",
    language: "流利英语为明确要求；西语未列",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级",
    changeType: "refresh",
  },
  188: {
    direction: "brand",
    company: "eseOese",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 22@ / 现场全职",
    titleZh: "艺术指导（时尚品牌与 360° Campaign）",
    titleEs: "Art Director",
    reason: "官方职位页显示申请入口。负责 campaign、editorial、上市、活动、拍摄、品牌故事、digital、landing、newsletter、retail 和视觉陈列；要求 4 年以上及中高英语。",
    next: "提交时尚/lifestyle campaign、editorial、品牌、retail/VM 与完整拍摄流程；确认西语、薪资、工签和现场节奏。",
    language: "中高英语为要求；西语未写成硬门槛",
    languageKey: "light",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上",
    changeType: "refresh",
  },
  922: {
    direction: "brand",
    company: "Solidgate",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程 / Spain payroll 需确认",
    titleZh: "高级平面设计师（品牌与营销）",
    titleEs: "Senior Graphic Designer",
    reason: "官方 careers 原页显示 Apply。负责品牌原则、campaign、email、社媒、销售演示、活动及 motion/video/3D/生成式 AI；要求 3 年以上和英语 B1+。",
    next: "英文申请；先确认 Spain resident 合同、税务和薪资，再提交品牌指南、多渠道 campaign、演示/活动与 motion/AI 案例。",
    language: "英语 B1+；西语未列",
    languageKey: "light",
    experienceKey: "senior",
    experienceLabel: "高级 / 3 年以上",
    changeType: "refresh",
  },
  930637: {
    direction: "production",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 全职",
    titleZh: "高级包装与 POS 设计师",
    titleEs: "Senior Packaging & Point of Sale Designer",
    reason: "当前 LinkedIn 与官方 Factorial 板均显示可申请。职责覆盖品牌一致性的包装、零售 POS、印刷、OOH、视觉方向和指导；要求成熟印前、色彩、刀模与材料知识，英语流利。",
    next: "提交包装系统、品牌指南落地、零售/POS、印前与量产案例；确认西语、薪资、工签和 hybrid 节奏。",
    language: "流利英语为硬要求；其他语言仅加分",
    languageKey: "light",
    experienceKey: "senior",
    experienceLabel: "高级包装/印刷制作",
    changeType: "refresh",
  },
  930707: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 永久全职",
    titleZh: "平面设计负责人（品牌系统与团队管理）",
    titleEs: "Lead Graphic Designer",
    reason: "官方 Factorial 原页显示 Apply。负责团队、品牌策略到可扩展设计系统、流程和质量、360° campaign 与 AI 工作流；要求 7–8 年、管理经验、FMCG，以及西语和英语均必需。",
    next: "因资历和双语硬门槛放在后排。只有具备团队管理、FMCG、多市场品牌系统和 360° campaign 经验时再投。",
    language: "西班牙语和英语均为硬要求",
    languageKey: "spanish",
    languageHard: true,
    experienceKey: "lead",
    experienceLabel: "负责人 / 7–8 年及管理经验",
    changeType: "refresh",
  },
  930708: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 永久全职",
    titleZh: "高级艺术指导（医疗与制药）",
    titleEs: "Senior Art Director — Healthcare & Pharma",
    reason: "官方 Factorial 原始详情已逐段核验，当前显示 Apply now、永久、全职和 Barcelona hybrid。职责覆盖医疗/制药视觉系统与 digital、social、print、retail、CRM 整合 campaign，并要求遵守品牌指南、科学信息与监管规范。",
    next: "医疗/制药/OTC/健康或医美经验和 6–10 年资历是硬门槛。满足时用英文提交受监管品牌系统、整合 campaign、科学信息可视化及影像/动态指导案例。",
    language: "流利英语为明确要求；其他语言仅加分",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6–10 年且需医疗领域经验",
    changeType: "refresh",
  },
  206: {
    direction: "digital",
    company: "Semrush",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 全职；官方职位已发布 30+ 天",
    titleZh: "数字艺术指导（Web 设计系统）",
    titleEs: "Digital Art Director — Web Design",
    reason: "官方 Workday 仍显示 Apply，但职位已标记发布 30+ 天，LinkedIn 镜像过期。职责非常贴数字品牌：网站、landing、email、Figma tokens/components、UX/accessibility、A/B test、治理和团队领导；要求 5 年以上。",
    next: "先测试 Workday 表单能否完整提交；确认后提交 Web 品牌系统、Figma 组件/tokens、治理、A/B test 和领导案例。",
    language: "完整工作语言要求需在 Workday 表单中确认",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "refresh",
  },
  375: {
    direction: "motion",
    company: "Fail Fast Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 全职",
    titleZh: "高级动态设计师（2D / 3D / AI）",
    titleEs: "Senior Motion Designer",
    reason: "官方职位页显示 Apply now。工作覆盖 2D/3D/AI motion、广告、解释视频、promo、动态演示、storyboard/styleframe 和品牌规范执行；要求 5 年以上及 C1/C2 英语。",
    next: "英文申请；提交高质量 2D/3D motion、styleframe、解释视频与品牌一致性案例。确认薪资和 hybrid 节奏。",
    language: "C1/C2 英语为硬门槛；西语未列",
    languageKey: "light",
    languageHard: true,
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "refresh",
  },
  990001: {
    direction: "production",
    company: "TWOJEYS",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 全职",
    titleZh: "服装平面设计师（图案、印花与产品 Artwork）",
    titleEs: "Apparel Graphic Designer",
    reason: "当前原始雇主页显示 Apply。负责服装和配饰的品牌图形、印花、placement 与生产文件，并参与品牌视觉语言演进；要求母语或高级西语。",
    next: "因西语与服装制作门槛放在后排；只有能用西语工作且作品集具备 apparel graphics、印花与 production-ready artwork 时再投。",
    language: "母语或高级西班牙语为硬要求",
    languageKey: "spanish",
    languageHard: true,
    changeType: "refresh",
  },
  27: {
    direction: "brand",
    company: "TWOJEYS",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona HQ / 永久全职",
    titleZh: "品牌负责人（策略、Campaign 与团队统筹）",
    titleEs: "Head of Brand",
    reason: "官方 Personio 原页显示 Solicitar。负责全球品牌策略、campaign、拍摄、drop、合作、活动、品牌日历、预算、agency 与视觉/叙事一致性；要求 5 年以上及高级西语和英语。",
    next: "不是纯执行设计岗，且双语和管理门槛高。只有具备 360° 品牌领导、预算/agency 和时尚 lifestyle 经验时再投。",
    language: "高级西班牙语和英语均为硬要求",
    languageKey: "spanish",
    languageHard: true,
    experienceKey: "lead",
    experienceLabel: "负责人 / 5 年以上管理经验",
    changeType: "refresh",
  },
  25: {
    direction: "social",
    company: "Tea Lab Barcelona",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 灵活工时 / 可能兼职",
    titleZh: "社媒与内容创作者（中文 / 西语）",
    titleEs: "Social Media & Content Creator",
    reason: "Casa Asia 当前就业索引仍列出原始 PDF 与直接邮箱。岗位运营小红书、Instagram、TikTok，拍摄剪辑短视频并使用 AI 视频工具，但还要支持门店日常，要求中文、西语和 30 岁以下，薪资面议。",
    next: "先邮件确认仍收申请、工时、薪资和门店运营占比；能接受后再发 CV、社媒账号、短视频和品牌内容作品。",
    language: "中文与西班牙语均为要求；年龄须 30 岁以下",
    languageKey: "chineseCheck",
    applicationMode: "spanish",
    changeType: "refresh",
  },
  806: {
    ...CURATED[806],
    statusKey: "closed",
    direction: "other",
    titleZh: "客服兼基础排版（排除：非目标设计岗）",
    reason: "原帖的主体工作是客服，只附带基础 CDR/AI 排版；雇主、合同、工时、薪资和在招状态均未公开，不应占用当前设计岗位列表。",
    next: "保留在关闭 / 历史 / 排除区，不投递。",
  },
  1158: {
    direction: "other",
    company: "InfoHuaxin / 华信索引",
    statusKey: "closed",
    locationKey: "other",
    locationLabel: "西班牙装修项目 / 非目标岗位",
    titleZh: "装修项目招聘附带效果图工作（排除）",
    titleEs: "Oferta de obra con visualización 3D — excluida",
    reason: "原始标题招聘的是装修师傅和项目经理，仅附带“效果图设计师”字样，没有独立品牌、平面或 VI 职位详情，也没有可核验深链接。",
    next: "保留在排除区作为误收录证据，不投递。",
    language: "非目标职位",
    changeType: "refresh",
  },
  930813: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 永久全职",
    titleZh: "初级平面设计师（品牌规范与多格式延展）",
    titleEs: "Junior Graphic Designer",
    reason: "官方 Factorial 详情在 2026-08-12 显示 Apply now。岗位只要求 1–2 年经验，核心是按品牌指南制作社媒、Key Visual、演示和数字资产；英语必需，西语仅写 preferably。",
    next: "优先投递。英文作品集首页放品牌指南落地、版式与字体、同一视觉跨社媒/数字/演示格式延展的案例。",
    language: "英语为工作语言；西语优先但不是明确硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–2 年",
    changeType: "new",
  },
  930812: {
    direction: "brand",
    company: "Skyscanner",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 全职；办公节奏待确认",
    titleZh: "高级视觉设计师（完整 JD 待从雇主表单确认）",
    titleEs: "Senior Visual Designer",
    reason: "2026-08-12 打开的原始 LinkedIn 雇主页仍显示 Barcelona、Full-time 与 Solicitar，但公开可读视图没有展开完整职责和门槛，因此是可投的高级延展机会，不是已完成条件核验的强匹配。",
    next: "先打开外部投递页核对完整 JD、年限、语言、薪资和办公节奏；确认后再决定是否定制作品集。",
    language: "完整工作语言要求尚未在可读原始页中公开",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 年限待确认",
    changeType: "new",
  },
  930814: {
    direction: "brand",
    company: "CNT Management Consulting",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / hybrid / 全职",
    titleZh: "高级品牌设计与创意内容经理（完整 JD 待确认）",
    titleEs: "Senior Brand Designer & Creative Content Manager",
    reason: "原始 LinkedIn 雇主页显示 Easy Apply、Barcelona hybrid、full-time 且正在审核申请；但完整正文没有在当前可读视图展开，所以只能作为低位高级延展机会。",
    next: "先展开投递表单并核对完整职责、年限、语言和薪资；没有完整 JD 前不投入定制作业。",
    language: "工作语言与西语门槛尚未在可读原始页中公开",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 年限待确认",
    changeType: "new",
  },
  1107: {
    direction: "brand",
    company: "THRU",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那市 / 现场为主 / 周五部分远程 / 全职",
    titleZh: "平面设计师（品牌动态与 Motion）",
    titleEs: "Graphic Designer with Motion Skills",
    reason: "岗位正文、截止日期 2026-09-15 和投递邮箱都仍可读，要求 2 年以上并覆盖品牌动态系统、guidelines、AE、Adobe 与 Figma；但同页页脚同时写着 NO JOB OPENINGS，状态存在冲突。",
    next: "先给 jobs@thrumotion.com 发一封简短英文邮件确认仍收申请；确认后再提交 CV、作品集、motion exercise 和岗位问题。",
    language: "岗位正文未列西语硬门槛；用英文确认与投递",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中初级 / 2 年以上",
    changeType: "refresh",
  },
  914: {
    direction: "brand",
    company: "Trivelta",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "正文写 Barcelona hybrid；页面元数据写 remote，需确认",
    titleZh: "平面设计师（品牌、数字、活动与社媒）",
    titleEs: "Graphic Designer",
    reason: "Greenhouse 原始页仍有 Apply，要求 1–3 年、英语工作，内容覆盖品牌、数字、印刷、landing、活动和社媒；但页面 location 与正文的 Barcelona hybrid 存在冲突。",
    next: "可以投，但在表单或首轮沟通中明确询问 Barcelona 到岗频率和西班牙雇佣主体。",
    language: "英语工作；公开正文未列西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "初中级 / 1–3 年",
    changeType: "refresh",
  },
  892: {
    statusKey: "closed",
    direction: "digital",
    company: "Qustodio / Qoria",
    titleZh: "数字设计师（营销）— 原始招聘已失效",
    titleEs: "Digital Designer (Marketing) — closed",
    reason: "2026-08-12 复核时原始 LinkedIn 职位编号已重定向到过期职位搜索，不再有该岗位的申请控制。",
    next: "保留在历史区；只有 Qoria/Qustodio 官方招聘板出现新的独立职位编号时才重新加入。",
    changeType: "refresh",
  },
  9001: {
    statusKey: "closed",
    direction: "production",
    company: "MiiN Korean Cosmetics",
    titleZh: "平面设计师（Barcelona 40h）— 原始招聘已失效",
    titleEs: "Graphic Designer Barcelona 40h — closed",
    reason: "2026-08-12 复核时原始 LinkedIn 职位已重定向到过期搜索页。",
    next: "保留历史，不再计入可投机会。",
    changeType: "refresh",
  },
  1245: {
    statusKey: "closed",
    direction: "brand",
    company: "Kilograph",
    titleZh: "高级平面设计师 / 艺术指导—原始招聘已失效",
    titleEs: "Senior Graphic Designer / Art Director — closed",
    reason: "2026-08-12 复核时原始 LinkedIn 职位编号已进入过期搜索，工作室通用联系页不能证明该具体岗位仍开放。",
    next: "保留历史；不要用通用公司页冒充该岗位的申请入口。",
    changeType: "refresh",
  },
  209: {
    statusKey: "closed",
    direction: "digital",
    company: "bsport",
    titleZh: "Lead UI / Visual Designer—官方页已返回 410",
    titleEs: "Lead UI / Visual Designer — closed",
    reason: "官方职位 URL 在 2026-08-12 返回 410 Gone，岗位不再接受申请。",
    next: "保留历史；等待新的独立 requisition。",
    changeType: "refresh",
  },
  1234: {
    statusKey: "closed",
    direction: "brand",
    company: "LearnWise AI",
    titleZh: "高级品牌与营销设计师—已停止接收申请",
    titleEs: "Senior Brand & Marketing Designer — closed",
    reason: "2026-08-12 打开的原始 LinkedIn 雇主页明确显示“Ya no se aceptan solicitudes”。",
    next: "保留完整 JD 作为作品集对标材料，不再计入当前可投。",
    changeType: "refresh",
  },
  669: {
    statusKey: "closed",
    direction: "brand",
    company: "Eurofragance",
    titleZh: "品牌平面设计师—官方页已关闭",
    titleEs: "Branding Graphic Designer — closed",
    reason: "2026-08-12 官方 Teamtailor 页面明确显示 This position is no longer active。",
    next: "保留历史；不要因公司招聘主页仍在线而视作在招。",
    changeType: "refresh",
  },
  1057: {
    statusKey: "closed",
    direction: "brand",
    company: "Eurofragance",
    titleZh: "品牌平面设计师—重复历史记录",
    titleEs: "Branding Graphic Designer — duplicate history",
    reason: "与已关闭的 Eurofragance 官方 requisition 属于同一岗位，没有独立在招入口。",
    next: "保留历史，不计入当前机会。",
    changeType: "refresh",
  },
  1374: {
    statusKey: "closed",
    direction: "social",
    company: "inBeat Agency / Creative Milkshake",
    titleZh: "视频编辑与视觉设计师—官方 ATS 找不到岗位",
    titleEs: "Video Editor & Designer — job not found",
    reason: "2026-08-12 打开的官方 Ashby 原始页明确显示 Job not found。",
    next: "保留历史；不要通过通用人才库冒充该具体岗位。",
    changeType: "refresh",
  },
  1371: {
    statusKey: "closed",
    direction: "production",
    company: "Hostinger",
    titleZh: "高级平面设计师—重复卡片",
    titleEs: "Senior Graphic Designer — duplicate",
    reason: "与主记录 305 使用相同 Ashby requisition，只保留一张当前卡。",
    next: "从主记录 305 投递。",
    changeType: "refresh",
  },
  485: {
    statusKey: "closed",
    direction: "brand",
    company: "eseOese",
    titleZh: "艺术指导—重复卡片",
    titleEs: "Art Director — duplicate",
    reason: "与主记录 188 是同一个官方职位，只保留一张当前卡。",
    next: "从主记录 188 投递。",
    changeType: "refresh",
  },
  1373: {
    statusKey: "closed",
    direction: "digital",
    company: "LABHOUSE",
    titleZh: "ASO 视觉设计师—重复卡片",
    titleEs: "ASO Artist / Graphic Designer — duplicate",
    reason: "与主记录 910 使用同一个 Ashby requisition，只保留一张当前卡。",
    next: "从主记录 910 投递。",
    changeType: "refresh",
  },
  952: {
    statusKey: "closed",
    direction: "brand",
    company: "Trivelta",
    titleZh: "平面设计师—重复卡片",
    titleEs: "Graphic Designer — duplicate",
    reason: "与主记录 914 使用同一个 Greenhouse requisition，只保留一张待确认卡。",
    next: "从主记录 914 核验和投递。",
    changeType: "refresh",
  },
  450: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "视觉设计师—旧标题镜像", titleEs: "Visual Designer — historical mirror", reason: "当前官方页面只公开 Web Designer；该旧标题没有独立职位编号。", next: "使用主记录 84。", changeType: "refresh" },
  567: { statusKey: "closed", direction: "motion", company: "reboot", titleZh: "2D/3D Motion Designer—旧标题镜像", titleEs: "2D/3D Motion Designer — historical mirror", reason: "当前官方页面只公开 Web Designer；该旧标题没有独立职位编号。", next: "使用主记录 84。", changeType: "refresh" },
  2090: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "Web / Visual Designer—重复镜像", titleEs: "Web / Visual Designer — duplicate", reason: "与主记录 84 指向同一通用申请页，只保留当前公开标题 Web Designer。", next: "使用主记录 84。", changeType: "refresh" },
  2091: { statusKey: "closed", direction: "brand", company: "reboot", titleZh: "高级品牌设计师—旧标题镜像", titleEs: "Senior Brand Designer — historical mirror", reason: "当前官方页面只公开 Web Designer；该旧标题没有独立职位编号。", next: "使用主记录 84。", changeType: "refresh" },
});

// 2026-08-12 research-library recovery pass. Every live entry below was
// reopened on its original employer/ATS page before being promoted. Closed
// and duplicate rows remain in the historical corpus but cannot inflate the
// current board.
Object.assign(CURATED, {
  296: {
    direction: "brand",
    company: "Bakken & Bæck",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 需到办公室 / 支持搬迁与签证协助",
    titleZh: "高级品牌设计师（VI、视觉语言与品牌系统）",
    titleEs: "Senior Brand Designer",
    reason: "官方职位页和 Teamtailor 申请表当前均可打开，并明确可在 Barcelona 任职。职责直接覆盖品牌识别、视觉叙事、设计系统与指南、数字和实体延展及艺术指导，是本轮追回的高相关机会。",
    next: "用英文品牌系统作品集申请；重点展示完整 VI、guideline、数字/实体触点和艺术指导。岗位要求 5 年以上且不接受纯远程，先确认 Barcelona 到岗频率、薪资和签证支持细节。",
    language: "英文国际团队；公开正文未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit",
  },
  4: {
    direction: "brand",
    company: "Lodgify",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe 远程 / 自由职业合同 / 总部 Barcelona",
    titleZh: "创意设计师（品牌、营销与 Figma 系统）",
    titleEs: "Creative Designer",
    reason: "官方 Lever 当前显示 Europe、Remote、Freelance Contract 和有效申请按钮。工作覆盖全渠道品牌资产、品牌演进、产品视觉、Figma 设计系统、基础动效与生成式 AI 工作流。",
    next: "用英文申请，作品集突出品牌演进、campaign、产品解释图、设计系统和 AI 辅助流程；先确认人在 Spain 是否可签、欧元费率、发票/税务、工时和合同期限。",
    language: "英语书面与口语沟通能力为明确要求",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    changeType: "recovered-audit",
  },
  1102: {
    direction: "brand",
    company: "AtomiQ Tech",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 全远程 / €50,000–60,000",
    titleZh: "视觉设计负责人（沉浸式视觉、动效与系统）",
    titleEs: "Lead Visual Designer",
    reason: "官方职位页当前显示 Remote (Spain)、€50–60k 和可填写的 Apply Online 表单。职责包括视觉识别、styleframes、motion studies、look-dev、视觉指南、工具包和跨团队质量把控。",
    next: "先确认实际终端客户、Spain 雇佣主体、项目类型和薪资口径；作品集需有成熟视觉方向、3D/动效和可扩展视觉系统，不适合只做基础平面执行的材料。",
    language: "官方页面为英文；未公开西语要求",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "负责人 / 强 3D、动效与视觉系统",
    changeType: "recovered-audit",
  },
  601: {
    direction: "brand",
    company: "SIERRA Production House",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 每周 3 天办公室、2 天灵活 / 全职",
    titleZh: "艺术指导（视觉语言与品牌识别）",
    titleEs: "Art Director",
    reason: "SIERRA 官方 jobs 页明确写当前只有 1 个开放岗位，即 Art Director，并列出 Barcelona office、40 小时全职、三天办公室和直接邮件申请。职责覆盖视觉语言、pitch、品牌识别、字体、色彩、动效与 AI。",
    next: "向 tw@sierraproductionhouse.com 发送作品集、CV 和不超过一页的求职信；突出 campaign 概念、品牌方向、影像/动效制作和提案能力，并确认资历、薪资及语言要求。",
    language: "职位全文为英文；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "艺术指导 / 资历年限未公开",
    changeType: "recovered-audit",
  },
  577: {
    direction: "brand",
    company: "SALVI Lighting",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场办公 / 永久全职 / €27,000+",
    titleZh: "高级平面设计师（品牌识别与数字延展）",
    titleEs: "Diseñador/a gráfico/a",
    reason: "当前 InfoJobs 原始详情显示可报名、Barcelona、现场办公、永久全职和 €27,000 以上。职责覆盖跨渠道视觉识别、目录和产品资料、邮件、社媒、展会、销售物料、Webflow、基础动效与 AI。",
    next: "用西语材料申请并突出 VI、编辑/产品物料、印前、Webflow 和基础动效；岗位要求 5 年以上，先确认日常西语、具体工作地点、薪资上限和工作时间。",
    language: "招聘流程为西语；英语和加泰语列为加分项",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit",
  },
  1038: {
    direction: "motion",
    company: "Lodgify",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EMEA 远程 / 自由职业合同 / 总部 Barcelona",
    titleZh: "动态设计师（品牌动效与可扩展模板）",
    titleEs: "Motion Designer",
    reason: "官方 Lever 当前显示 EMEA、Remote、Freelance Contract 和有效申请按钮。工作从概念到交付覆盖品牌 campaign、产品叙事、社媒、motion principles、模板系统、视频编辑和 AI 视频流程。",
    next: "用英文动效作品集申请；突出品牌动效原则、可复用模板、产品故事和完整制作流程。先确认 Spain 自由职业资格、欧元费率、工时、期限与税务安排。",
    language: "申请材料和团队沟通使用英文",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 独立负责完整动效项目",
    changeType: "recovered-audit",
  },
  1011: {
    direction: "brand",
    company: "JustMarkets",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe 远程 / Spain 雇佣资格需确认",
    titleZh: "设计负责人（品牌识别 × 产品设计系统）",
    titleEs: "Head of Design",
    reason: "官方 Greenhouse 当前显示 Europe、Apply 和完整申请表。岗位统一品牌视觉、品牌级艺术指导与产品设计，管理 Product、Graphic、Web、Motion，并建立品牌指南、设计系统和 AI 规模化流程。",
    next: "这是高资历备选，不是普通执行岗。只有具备 5 年以上跨学科设计领导、团队管理和品牌/产品双线作品时投递；先确认 Spain payroll、薪资和工作许可。",
    language: "英文国际团队；未列西语要求",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "负责人 / 5 年以上设计领导",
    changeType: "recovered-audit",
  },
  1105: {
    direction: "brand",
    company: "Bakken & Bæck",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "可先全远程 / 50–100% 自由职业 / Barcelona 可转长期",
    titleZh: "自由职业高级艺术指导（影像叙事与品牌世界）",
    titleEs: "Freelance Senior Art Director",
    reason: "官方职位与申请表当前开放。工作持续数月、50–100% 容量，可先完全远程，并可能转为长期；职责覆盖摄影、电影、插画、CGI、动效、数字系统和完整品牌世界的艺术指导。",
    next: "仅以高级艺术指导材料申请，突出影像系统、campaign、motion/CGI、拍摄和外部制作统筹；先问费率、autónomo/发票、持续时间、Barcelona 到岗和转长期条件。",
    language: "英文国际团队；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级自由职业 / 5 年以上",
    changeType: "recovered-audit",
  },
  1240: {
    direction: "brand",
    company: "MANGO",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Palau-solità i Plegamans / Barcelona 省 / 全职",
    titleZh: "橱窗创意设计师（零售品牌空间与 3D）",
    titleEs: "Shop Window Creative Designer",
    reason: "MANGO 当前雇主详情仍显示申请按钮、全职和 Barcelona 省 Palau-solità i Plegamans。岗位把品牌视觉延伸到橱窗与零售空间，要求创意概念、技术落地、Rhino/3D 和渲染能力。",
    next: "这是实体零售品牌方向，不是纯平面 VI。仅在愿意做橱窗/空间且具备 3D 案例时投递；先确认到岗交通、5 年门槛、薪资以及高水平西语和英语要求。",
    language: "高水平西班牙语与英语为明确门槛",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上零售与 3D",
    changeType: "recovered-audit",
  },
  351: {
    direction: "social",
    company: "Rocket Digital / Jungle",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "付费媒体艺术指导（Key Visual 与效果广告）",
    titleEs: "Art Director Paid Media",
    reason: "官方 Factorial 当前仍明确显示 Apply now、Permanent、Full time、Hybrid (Barcelona)。岗位负责 campaign 概念、Key Visual、Meta/TikTok/YouTube/Display 多格式延展、A/B 变体和基于数据的视觉优化。",
    next: "它是效果广告艺术指导，不是 VI 主导岗。用西语材料展示 campaign key visual、跨格式系统、转化导向设计和 AI 工作流；先确认薪资、资历和每周到岗节奏。",
    language: "官方详情与流程为西语；按西语工作门槛处理",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "艺术指导 / 资历年限未公开",
    changeType: "recovered-audit",
  },
  484: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 平均每周 4 天办公室",
    titleZh: "艺术指导（Campaign 与品牌识别）",
    titleEs: "Art Director",
    reason: "VML 官方 Careers 当前显示 Barcelona、2026-08-07 更新、requisition 17276 和可提交申请。职责覆盖 campaign、品牌识别、AI、社媒与客户提案。",
    next: "相关性真实，但 5–6 年广告公司经验、中高英语和加泰语是硬门槛。只有语言与资历均满足时，才用战略 campaign、identity、AI/social/motion 和客户提案案例投递。",
    language: "中高水平英语与加泰语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5–6 年以上广告公司经验",
    changeType: "recovered-audit",
  },
  278: {
    direction: "digital",
    company: "Avidalia",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 20 小时兼职 / 周五远程 / €10,500–13,000",
    titleZh: "数字内容设计师（品牌视觉与基础动效，兼职）",
    titleEs: "Digital Content Designer",
    reason: "Indeed 原始详情当前显示可申请、Barcelona、20 小时兼职和 €10,500–13,000。工作覆盖品牌一致性、线上线下物料、演示、数字 campaign、社媒、邮件和基础 motion graphics。",
    next: "这是工资和工时都明确的低优先级兼职，不要按全职薪资理解。若接受 20 小时与西语环境，可用 2 年以上的品牌、演示、数字广告和基础视频案例申请，并确认是否能扩为全职。",
    language: "西语本地机构和西语职位正文；按西语工作门槛处理",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上 / 20 小时兼职",
    changeType: "recovered-audit",
  },
  224: {
    direction: "brand",
    company: "King / Microsoft",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 在可选办公地点中 / 全职",
    titleZh: "新游戏艺术指导（视觉风格与品牌指南）",
    titleEs: "Art Director | New Games",
    reason: "King 官方 Workday 当前列出 Apply、full-time、R027791 和 Barcelona - King - PG。岗位领导新手游艺术愿景、style guides、brand guidelines 和跨职能艺术团队。",
    next: "这是游戏艺术指导而非商业 VI，显著要求已上线游戏、团队领导和完整游戏美术方向经验。只有这些证据充分时投递，并先确认 Barcelona 具体办公安排、薪资和语言。",
    language: "英文申请与国际游戏团队；未列西语要求",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "高级负责人 / 已上线游戏与团队领导",
    changeType: "recovered-audit",
  },
  120: {
    statusKey: "closed",
    direction: "social",
    company: "Rocket Digital",
    titleZh: "社交媒体平面设计师—已关闭重复记录",
    titleEs: "Graphic Designer Social Media — closed",
    reason: "2026-08-12 重新打开官方 Factorial 306705，页面明确显示该职位已不存在。",
    next: "保留历史，不要投递。仍开放的是另一个独立岗位 Art Director Paid Media（记录 351）。",
    changeType: "recovered-audit",
  },
  1079: {
    statusKey: "closed",
    direction: "social",
    company: "Rocket Digital",
    titleZh: "社交媒体平面设计师—已关闭重复记录",
    titleEs: "Graphic Designer Social Media — closed duplicate",
    reason: "与记录 120 指向同一已关闭的 Factorial 306705；官方明确显示职位不存在。",
    next: "保留历史，不要投递。",
    changeType: "recovered-audit",
  },
  1217: {
    statusKey: "closed",
    direction: "digital",
    company: "Fhios",
    titleZh: "UX/UI 设计师（含视频）—已关闭",
    titleEs: "Diseñador UX/UI — closed",
    reason: "2026-08-12 重新打开官方 Factorial 309175，页面明确写该职位已不存在且不可申请。",
    next: "移入历史；只有出现新的独立职位编号时才重新评估。",
    changeType: "recovered-audit",
  },
  1596: { statusKey: "closed", direction: "brand", company: "Lodgify", titleZh: "创意设计师—重复记录", titleEs: "Creative Designer — duplicate", reason: "与主记录 4 使用同一个 Lever requisition。", next: "从主记录 4 投递。", changeType: "recovered-audit" },
  3287: { statusKey: "closed", direction: "motion", company: "Fail Fast Studio", titleZh: "高级动态设计师—重复记录", titleEs: "Senior Motion Designer — duplicate", reason: "与主记录 375 使用同一个官方职位。", next: "从主记录 375 投递。", changeType: "recovered-audit" },
  2111: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "视觉设计师—旧标题镜像", titleEs: "Visual Designer — historical mirror", reason: "当前官方页只列 Web Designer，与主记录 84 共用同一申请页。", next: "从主记录 84 投递。", changeType: "recovered-audit" },
  2115: { statusKey: "closed", direction: "motion", company: "reboot", titleZh: "2D/3D 动态设计师—旧标题镜像", titleEs: "2D/3D Motion Designer — historical mirror", reason: "当前官方页只列 Web Designer，与主记录 84 共用同一申请页。", next: "从主记录 84 投递。", changeType: "recovered-audit" },
  2169: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "网页/视觉设计师—重复镜像", titleEs: "Web / Visual Designer — duplicate", reason: "与主记录 84 共用同一申请页。", next: "从主记录 84 投递。", changeType: "recovered-audit" },
  2170: { statusKey: "closed", direction: "brand", company: "reboot", titleZh: "高级品牌设计师—旧标题镜像", titleEs: "Senior Brand Designer — historical mirror", reason: "当前官方页只列 Web Designer，与主记录 84 共用同一申请页。", next: "从主记录 84 投递。", changeType: "recovered-audit" },
  1196: { statusKey: "closed", direction: "brand", company: "Trivelta", titleZh: "平面设计师—重复记录", titleEs: "Graphic Designer — duplicate", reason: "与主记录 914 使用同一个 Greenhouse requisition。", next: "从主记录 914 核验和投递。", changeType: "recovered-audit" },
});

// Second recovery batch: live official pages promoted, stale application
// mirrors demoted immediately when the original ATS no longer accepts them.
Object.assign(CURATED, {
  94: {
    direction: "brand",
    company: "Savills Spain",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / Marketing & Communications",
    titleZh: "品牌设计师（企业视觉、编辑与空间导视）",
    titleEs: "Brand Designer - Barcelona",
    reason: "Savills 官方 Teamtailor 当前显示 Enviar solicitud、Barcelona 和 Hybrid。工作覆盖企业与业务视觉、演示、dossier、branding、导视、广告、banner 和编辑出版物，是明确的本地 Brand Designer 岗。",
    next: "用英文或西语材料展示企业品牌系统、编辑、导视、广告和高质量演示设计；先确认日常西语、薪资、工作许可与每周办公室节奏。",
    language: "要求良好英语；西语职位流程和本地团队使用程度需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级以上 / 需有 Brand Designer 经验",
    changeType: "recovered-audit-2",
  },
  1828: {
    direction: "brand",
    company: "Hostinger",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 全远程 / 全职",
    titleZh: "高级平面设计师（品牌与创意）",
    titleEs: "Senior Graphic Designer | Brand & Creative focus",
    reason: "官方 Ashby 当前明确显示 Spain、Remote、Full time 和申请表。岗位推动品牌视觉演进，制作数字/印刷广告、YouTube、Meta、邮件与博客资产，并包含 AI 工作流和设计师指导。",
    next: "用英文申请，重点展示品牌演进、多渠道 campaign、创意策略和生成式 AI 的真实流程；确认 Spain 雇佣主体、薪资、工作许可和团队时区。",
    language: "流利书面与口语英语为明确要求；未列西语门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 品牌创意与指导能力",
    changeType: "recovered-audit-2",
  },
  604: {
    direction: "brand",
    company: "Canonical",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EMEA 全远程 / 每年两次国际团队活动",
    titleZh: "视觉设计师（品牌指南与 UI 设计系统）",
    titleEs: "Visual Designer — Brand and Design Systems",
    reason: "官方 Greenhouse 当前显示 Home based - EMEA 和 Submit application。职责直接覆盖品牌指南演进、传播物料、UI design system 与数字产品图形，并强调可用性、无障碍和 web standards。",
    next: "用英文品牌指南、UI 系统、数字产品和可访问性案例申请；表单重视完整教育记录和技术兴趣，且每年需两次最多两周的国际出差，先确认 Spain 雇佣与薪资。",
    language: "专业书面与口语英语为明确要求；未列西语门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级以上 / 学术与技术背景门槛较高",
    changeType: "recovered-audit-2",
  },
  981: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite / 平均每周约 4 天办公室",
    titleZh: "高级艺术指导（360 Campaign 与品牌叙事）",
    titleEs: "Senior Art Director",
    reason: "VML 官方 Careers 当前显示 Barcelona、2026-08-07 更新、requisition 13798 和申请入口。岗位领导高要求品牌 campaign，结合 storytelling、设计、技术、视频、motion 和 AI。",
    next: "这是 5–6 年高级广告公司岗位，英语水平和国际客户提案是硬门槛。仅在资历匹配时用 360 campaign、品牌叙事、视频/动效和创意领导案例申请，并确认日常西语与薪资。",
    language: "高水平英语为明确要求；职位正文与本地流程为西语",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5–6 年以上",
    changeType: "recovered-audit-2",
  },
  1101: {
    direction: "brand",
    company: "Remedy Edge Spain / Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 自由职业 / 每周 3 天办公室",
    titleZh: "自由职业高级平面设计师（跨媒体 Campaign）",
    titleEs: "Freelance Senior Graphic Designer",
    reason: "官方 Greenhouse 当前显示 Barcelona、Apply 和完整申请表。岗位领导印刷与数字 campaign、客户沟通、项目流程、品牌完整性和初级设计师指导。表单明确询问 Spain 自由职业资格、每周三天到岗和无需签证担保。",
    next: "只有可在 Spain 合法自由职业、能每周三天到岗且具备 5 年以上广告设计经验时投递；作品集突出跨媒体 campaign、客户呈现与创意领导，并先确认费率、期限和发票条件。",
    language: "英文国际医疗广告环境；Spain 自由职业和到岗是硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级自由职业 / 5 年以上",
    changeType: "recovered-audit-2",
  },
  153: {
    statusKey: "closed",
    direction: "production",
    company: "UNIQLO / Fast Retailing",
    titleZh: "店内平面设计师—官方职位已不存在",
    titleEs: "In-Store Graphic Designer — closed",
    reason: "2026-08-12 重新打开两个官方 Workday locale 路由，均明确显示所请求页面不存在。",
    next: "移入历史；只在 Fast Retailing 出现新的 requisition 时重新评估。",
    changeType: "recovered-audit-2",
  },
  220: {
    statusKey: "closed",
    direction: "brand",
    company: "Desigual",
    titleZh: "创意文案与品牌叙事—停止接收申请",
    titleEs: "Creative Copywriting & Storytelling — closed",
    reason: "2026-08-12 原始 LinkedIn 详情显示已发布约 5 个月并明确写不再接受申请；当前可见标题也不是旧记录中的 Art Director。",
    next: "移入历史，不用旧的四天工作制和 Art Director 摘要继续计为当前机会。",
    changeType: "recovered-audit-2",
  },
  322: {
    statusKey: "closed",
    direction: "brand",
    company: "Desigual",
    titleZh: "品牌叙事岗位—已关闭重复记录",
    titleEs: "Creative Copywriting & Storytelling — closed duplicate",
    reason: "与记录 220 指向同一个已停止接收申请的 LinkedIn 职位 4363154181。",
    next: "保留历史，不要投递。",
    changeType: "recovered-audit-2",
  },
  894: {
    statusKey: "closed",
    direction: "digital",
    company: "Ogilvy Spain",
    titleZh: "Liquid 设计师（视频剪辑）—停止接收申请",
    titleEs: "Liquid Designer (Video Editor) — closed",
    reason: "2026-08-12 原始 LinkedIn 详情明确显示 Ya no se aceptan solicitudes。",
    next: "保留职责与福利作历史，不再当作可投岗位。",
    changeType: "recovered-audit-2",
  },
  184: {
    statusKey: "closed",
    direction: "digital",
    company: "Ogilvy Spain",
    titleZh: "Liquid 设计师—已关闭重复记录",
    titleEs: "Liquid Designer — closed duplicate",
    reason: "与记录 894 指向同一已停止接收申请的职位。",
    next: "保留历史，不要投递。",
    changeType: "recovered-audit-2",
  },
});

// Tenth audit batch: new Barcelona and Barcelona-province opportunities were
// opened at their original employer detail or official ATS on 2026-08-12.
// These cards explicitly expose language, seniority and contract gates instead
// of using a Barcelona search-result label as proof of suitability.
Object.assign(CURATED, {
  1245: {
    direction: "brand",
    company: "Kilograph",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场全职 / 新工作室",
    titleZh: "高级平面设计师 / 艺术指导（品牌系统与视觉叙事）",
    titleEs: "Senior Graphic Designer / Art Director",
    reason: "2026-08-12 打开的新 LinkedIn 招聘编号 4437390159 显示仍可申请，并在完整正文中提供 careers@kilograph.com 作品集邮箱。工作覆盖品牌系统、网站、画册、演示和数字/印刷延展；要求 3–5 年以上、Adobe、Figma 和流利英语，西语或加泰语仅为加分。",
    next: "用英文投递品牌系统、字体排版、数字/印刷延展、演示与建筑视觉叙事案例；先确认薪资、合同主体、现场办公节奏和工作许可。",
    language: "流利英语为明确要求；西语或加泰语仅为加分",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3–5+ 年",
    changeType: "recovered-audit-10",
  },
  930824: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "中级平面设计师（高端护肤与生活方式品牌）",
    titleEs: "Mid Graphic Designer",
    reason: "官方 Factorial 职位 301879 显示 Apply now、永久全职与 Barcelona 混合办公。职责覆盖高端护肤/健康/生活方式品牌的社媒、Campaign、工具包、演示、修图合成、AI 图像和品牌规范一致性；要求 4–8+ 年。",
    next: "西语和英语都是明确硬门槛；只有语言与年限满足，并且有高端消费品牌、Campaign 系统、修图合成和 AI 生产案例时再投。",
    language: "流利西语与流利英语均为明确要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4–8+ 年",
    changeType: "recovered-audit-10",
  },
  930825: {
    direction: "motion",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "视频剪辑与动态创意（品牌内容）",
    titleEs: "Video Editor & Motion Creative",
    reason: "官方 Factorial 职位 308034 显示 Apply now、永久全职与 Barcelona 混合办公。岗位以品牌视频剪辑为主、Motion 为辅，服务护肤、健康与生活方式客户；要求 3–5 年、Premiere Pro、After Effects 和流利英语。",
    next: "用英文提交品牌短视频、Campaign 剪辑、节奏叙事和克制的 Motion 系统案例；它不是纯 VI 岗，因此排在直接品牌系统机会之后。",
    language: "流利英语为明确要求；其他语言仅为加分",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    changeType: "recovered-audit-10",
  },
  930826: {
    direction: "production",
    company: "Carati Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 部分远程 + Sant Antoni 现场 / 自由职业",
    titleZh: "自由职业平面与印花设计师（时尚）",
    titleEs: "Freelance Graphic / Print Designer — Fashion",
    reason: "当前 LinkedIn 原始详情 4449873353 提供 Easy Apply 和 nita@caratistudio.com 作品集邮箱。岗位为 Zara 团队制作满版印花、定位图案、插画、字体图形及生产文件；必须常住 Barcelona 并有时尚图案经验。",
    next: "西语仅为加分，但这是项目型自由职业而非固定 VI 正职。先确认客户实体、工作量、日薪、开票、版权、测试是否付费及现场频率。",
    language: "西语未列为硬门槛，仅为加分；沟通语言需在初次联系时确认",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "需已有时尚平面 / 印花作品",
    changeType: "recovered-audit-10",
  },
  930827: {
    direction: "social",
    company: "Zurich Insurance",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 办公模式待确认",
    titleZh: "创意专员（社媒与短视频内容）",
    titleEs: "Creative Specialist",
    reason: "Zurich 官方招聘 requisition 136070 显示 Apply now 和 ES - Barcelona。职责包括 TikTok、Instagram、Reddit 的平台原生概念、脚本、分镜、文案、视觉提案和短视频执行；要求约 3–4 年与较高英语。",
    next: "这是正式英文友好路线，但核心是社媒内容而非 VI。只有作品集能把平台创意与品牌语调、视觉一致性和 Campaign 结果连接起来时再投。",
    language: "较高英语为明确要求；未列西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 约 3–4 年",
    changeType: "recovered-audit-10",
  },
  930828: {
    direction: "brand",
    company: "VOK DAMS worldwide",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 办公模式待确认",
    titleZh: "高级平面设计师（活动品牌与环境视觉）",
    titleEs: "Senior Graphic Designer — Events & Brand Experiences",
    reason: "当前 LinkedIn 原始详情 4440968410 公开完整 JD，覆盖国际活动的视觉识别、Key Visual、演示、品牌物料、舞台视觉、标识、导视和环境品牌落地；要求至少 5 年、Adobe、After Effects、流利西语与英语。",
    next: "方向与实体 VI 延展高度相关，但双语和资历是硬门槛。投递时必须有活动识别、导视、环境图形、现场制作及供应商落地案例。",
    language: "流利西语与流利英语均为明确要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 至少 5 年",
    changeType: "recovered-audit-10",
  },
  930829: {
    direction: "production",
    company: "Raventós Codorníu",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Sadurní d'Anoia / hybrid 3-2 / 实习",
    titleZh: "包装平面设计实习（新品牌与印前制作）",
    titleEs: "Graphic Packaging Design Trainee",
    reason: "当前 LinkedIn 原始详情 4440107992 显示 Solicitar 和实习岗位。完整西语 JD 覆盖包装、新品牌开发、线下 Campaign、多市场适配、完稿、印前和渲染，方向与品牌实物延展直接相关。",
    next: "这是 Barcelona 省内通勤与西语工作环境下的实习路线。申请前确认学校协议、报酬、期限、交通、3-2 节奏和实际工作语言。",
    language: "完整 JD 为西语；未单列语言等级，按西语工作环境处理",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "实习 / 需确认学校协议",
    changeType: "recovered-audit-10",
  },
});

Object.assign(CURATED, {
  930831: {
    direction: "production",
    company: "INCAPTO",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 3-2 / 全职",
    titleZh: "平面设计师（包装与产品视觉）",
    titleEs: "Graphic Designer — Packaging & Product",
    reason: "当前 LinkedIn 雇主原始详情显示正在积极审核和 Easy Apply。工作覆盖咖啡、机器与配件的包装系统、标签、盒型、插页、刀模、完稿、供应商、法规图标、说明书与商品页视觉，属于真实的品牌实物延展。",
    next: "西语和英语流利均为明确门槛，并要求 2–4 年和作品集。用包装系统、印前完稿、供应商交接、法规信息和电商产品视觉案例投递。",
    language: "流利西语与英语均为明确要求",
    languageKey: "spanish",
    languageHard: true,
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    changeType: "new-audit-11",
  },
  930832: {
    direction: "brand",
    company: "Exoticca",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市区 / onsite / 永久全职",
    titleZh: "视觉设计师（渠道营销与联合品牌）",
    titleEs: "Visual Designer — Trade Marketing",
    reason: "当前 LinkedIn 雇主原始详情显示 Barcelona 在招和 Easy Apply。职责包括宣传单、印刷广告、手册、Roll-up、数字目录、宣传视频、动态横幅、演示以及合作伙伴联合品牌规范与视觉质检。流利英语明确，未发现西语硬门槛。",
    next: "这是本轮最值得优先看的本地机会之一。用英文提交多格式品牌系统、联合品牌、印刷/数字 campaign、演示和动态素材案例；面试确认薪资与 onsite 节奏。",
    language: "流利英语为明确要求；正文未列西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 多格式视觉设计经验",
    changeType: "new-audit-11",
  },
  930833: {
    direction: "production",
    company: "Wecolors",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Vilassar de Dalt / 每周 1 天远程 / 需自驾与住在附近",
    titleZh: "产品平面设计师（美妆包装与完稿）",
    titleEs: "Diseñador/a gráfico/a especializado/a en Producto",
    reason: "当前 LinkedIn 雇主原始详情显示积极审核和 Easy Apply。职责覆盖美妆盒卡、Sleeve、2D/3D 展示、完稿、供应商与印厂交接、规格文字编码、工艺以及品牌视觉标准，方向真实但偏包装生产。",
    next: "岗位要求 3–5 年、中高英语、住在附近、自备车辆并完成设计测试；JD 与实际团队环境为西语。先评估 Vilassar 通勤和工作语言，再用包装量产、展示与完稿案例申请。",
    language: "中高英语明确；西语未列等级，但 JD 与团队环境为西语",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年 / 含设计测试",
    changeType: "new-audit-11",
  },
});

// Third recovery batch: current digital-brand, motion and performance roles.
Object.assign(CURATED, {
  170: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "高级 UX/UI 与网页设计师（品牌数字延展）",
    titleEs: "Senior UX/UI and Web Designer",
    reason: "Dragons 官方职位页当前显示 Apply now、Barcelona、Full Time 和 Hybrid。岗位把品牌识别与指南转化为响应式网站、CMS 体验、数字设计系统、组件和完整数字视觉方向。",
    next: "它是网页/UX 主导的品牌延展，不是纯 VI。用英文网站、品牌数字化、响应式系统和 Figma 组件案例申请；岗位要求 5 年以上、HTML/CSS 基础，西语为加分项。",
    language: "英语为明确要求；西语为加分项",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上网页与数字设计",
    changeType: "recovered-audit-3",
  },
  445: {
    direction: "digital",
    company: "Playson",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "European Union 全远程 / 全职",
    titleZh: "高级营销设计师（品牌书、Campaign 与数字延展）",
    titleEs: "Marketing Designer",
    reason: "官方 Ashby 当前显示 European Union、Remote、Full time 和申请表。职责覆盖 Key Visual、campaign、web/social/print/email、landing page、展会、销售演示、品牌书、动效和 AI 资产。",
    next: "方向很贴但属于 iGaming 且要求 5 年以上。用英文品牌书、campaign、landing、展会和 motion/AI 案例投递；先确认 Spain payroll、薪资、行业接受度和岗位实际职级。",
    language: "官方流程为英文；未列西语门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上营销与品牌设计",
    changeType: "recovered-audit-3",
  },
  1108: {
    direction: "motion",
    company: "Glovo",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / Brand Design 团队",
    titleZh: "动态设计师（品牌 × Performance Marketing）",
    titleEs: "Motion Designer",
    reason: "Glovo 官方 Careers 当前显示 Barcelona、Full-time 和 APPLY。岗位在 Brand Design 团队，负责品牌一致性、paid social、display、TV、可扩展 motion 模板和数据驱动优化。",
    next: "约 80% 工作是高产量适配与优化，不是品牌动效系统主导岗。用英文付费社媒、模板系统、A/B 迭代和品牌一致性案例申请；要求 3 年以上和专业英语。",
    language: "Professional English 为明确要求；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上 Performance Motion",
    changeType: "recovered-audit-3",
  },
  1081: {
    direction: "digital",
    company: "Eximia Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Castelldefels / hybrid 或现场",
    titleZh: "效果创意设计师（广告、数字内容与少量 VI）",
    titleEs: "Performance Creative Designer",
    reason: "官方雇主页面当前有完整职位和申请表。工作约 55% Ads、30% 数字内容、10% brandbook/logo/视觉系统、5% 短文案，并使用 AI 进行创意测试与变体。",
    next: "这是效果广告岗，VI 只占少量。若接受西语增长团队，可用品牌系统转成广告变体、A/B 测试、视觉 hook 和 AI 流程案例申请；先确认全职雇佣还是月度 retainer、薪资和到岗。",
    language: "职位与申请流程为西语；按西语工作门槛处理",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级以上 / Performance Creative",
    changeType: "recovered-audit-3",
  },
  359: {
    statusKey: "closed",
    direction: "brand",
    company: "SD Worx",
    titleZh: "高级品牌设计师—职位已停止",
    titleEs: "Senior Brand Designer — inactive",
    reason: "2026-08-12 官方 Teamtailor 页面明确显示 This position is no longer active。",
    next: "移入历史；只有出现新的独立职位编号时重新评估。",
    changeType: "recovered-audit-3",
  },
  101: {
    statusKey: "closed",
    direction: "brand",
    company: "TWOJEYS",
    titleZh: "品牌负责人—重复记录",
    titleEs: "Head of Brand — duplicate",
    reason: "与主记录 27 使用同一个 Personio requisition 2692766。",
    next: "从主记录 27 查看和投递。",
    changeType: "recovered-audit-3",
  },
  930716: {
    statusKey: "closed",
    direction: "brand",
    company: "Canonical",
    titleZh: "视觉设计师—重复来源记录",
    titleEs: "Visual Designer — duplicate source",
    reason: "与主记录 604 是同一个 Canonical Brand and Design Systems 岗位；主记录提供当前 Greenhouse 5326986 直接申请表。",
    next: "从主记录 604 查看和投递。",
    changeType: "recovered-audit-3",
  },
  993018: {
    statusKey: "closed",
    direction: "digital",
    company: "BCome",
    titleZh: "数字设计师—重复来源记录",
    titleEs: "Digital Designer — duplicate source",
    reason: "与主记录 55 使用同一个 BCome 官方 careers 页面和邮箱入口。",
    next: "从主记录 55 查看和投递。",
    changeType: "recovered-audit-3",
  },
  881: {
    statusKey: "closed",
    direction: "digital",
    company: "Avidalia",
    titleZh: "数字内容设计师—重复来源记录",
    titleEs: "Digital Content Designer — duplicate source",
    reason: "与主记录 278 是同一个 20 小时 Digital Content Designer 岗位；只保留一张卡。",
    next: "从主记录 278 查看和投递。",
    changeType: "recovered-audit-3",
  },
});

// Fourth recovery batch: previously verified opportunities that were still
// stranded in the research corpus. Brand/graphic roles rank above product-UX
// adjacencies, and every material contract or language gate stays visible.
Object.assign(CURATED, {
  1314: {
    direction: "production",
    company: "CM Creative International",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市中心 / 长期岗位 / 资深可混合办公",
    titleZh: "平面设计师与活动制作（品牌延展、印刷与展会）",
    titleEs: "Graphic Designer & Event Producer",
    reason: "2026-08-12 逐字重开官方 careers 详情：岗位仍显示 Barcelona office，并公开 administrator@cm-creative.net 直投。职责覆盖品牌规范、campaign、landing page、邮件、数字广告、网页 banner、印刷、周边、社媒、展会与项目制作。",
    next: "用英文作品集投递，重点放品牌延展、campaign、多规格数字物料、印刷完稿和活动/展会案例。邮件先确认应聘 junior 还是 senior 轨道、所谓 result-oriented payment 的计算方式、固定薪资与到岗节奏。",
    language: "Excellent English 是明确硬门槛；其他语言仅为加分项",
    applicationMode: "english",
    experienceKey: "unknown",
    experienceLabel: "Junior / trainee 与 senior 均可；轨道需邮件确认",
    changeType: "recovered-audit-4",
  },
  1239: {
    direction: "brand",
    company: "ESTUDIFERRER",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Terrassa / Barcelona 省 / hybrid 全职",
    titleZh: "平面设计师（Logo、品牌识别与视觉沟通）",
    titleEs: "Graphic Designer",
    reason: "原始 LinkedIn 雇主详情在 2026-08-10 逐条核验时显示 Terrassa 的当前 Graphic Designer：工作包含 graphics、logo、branding materials、typography 和一致的视觉沟通，并要求英语、设计学历、UX/UI、AI 与包装基础。",
    next: "它很贴 VI，但当前可读页面未暴露独立雇主申请表，所以保留为先确认。打开原始详情后先确认申请按钮、Terrassa 每周到岗、西语/加泰语日常使用和作品集格式，再决定是否定制材料。",
    language: "英语为明确要求；西语或加泰语工作程度未公开，需先确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 设计学历与品牌视觉作品集",
    changeType: "recovered-audit-4",
  },
  958: {
    direction: "brand",
    company: "Remedy Edge Spain / Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 现场 / 6 个月全职带薪实习",
    titleZh: "平面设计实习生（Logo、品牌指南与数字物料）",
    titleEs: "Graphic Designer Trainee",
    reason: "2026-08-12 重开官方 Greenhouse：页面仍显示 Barcelona、Apply 和完整申请表。职责包括 editorial layouts、landing/banner/web/social、logotype 与 brand guidelines，要求高级 Adobe、英语和作品集。",
    next: "只有能签学校/大学实习协议、连续 6 个月全职并到 Barcelona 办公室时才投；否则直接跳过。若满足，作品集优先放 Logo、品牌指南、版式与多格式数字延展。",
    language: "Advanced English 明确要求；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "带薪实习 / 必须有学校或大学协议",
    changeType: "recovered-audit-4",
  },
  277: {
    direction: "brand",
    company: "Hamlet Strategic Makers",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "中高级艺术指导（品牌系统、指南与 Campaign）",
    titleEs: "Mid/Senior Art Director",
    reason: "Candee 招聘详情与原始 LinkedIn 在 2026-08-10 均显示当前 Barcelona 岗位。职责覆盖 branding、视觉系统与指南、campaign concept、key visual 和数字内容，并提供申请流程。",
    next: "相关性高，但 5 年以上、较高英语与 Catalan 是真实硬门槛。只有这些条件可满足时，才用品牌指南、视觉世界、campaign 概念和数字延展案例投递，并确认薪资与混合办公安排。",
    language: "高英语与 Catalan 明确要求；本地语言门槛较高",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "中高级 / 5 年以上",
    changeType: "recovered-audit-4",
  },
  109: {
    direction: "brand",
    company: "MiiN Korean Cosmetics",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职 40h",
    titleZh: "创意与内容负责人（VI、包装、零售与 Campaign）",
    titleEs: "Head of Creative and Content",
    reason: "2026-08-09 原始雇主详情显示 Barcelona 当前可申请。岗位拥有视觉识别、品牌原则与指南、campaign、包装、零售/POS、视觉陈列、电商、CRM、社媒和代理商管理职责，并提供永久合同与混合办公。",
    next: "这是 Head 岗而不是普通平面设计师。只有具备 4–5 年品牌/增长经验、团队与代理商管理、活动和零售驱动能力，并能用高水平英语和西语工作时才投；不要把韩妆品牌误当作中文岗位。",
    language: "高水平英语和西语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "lead",
    experienceLabel: "负责人 / 4–5 年品牌、增长与团队管理",
    changeType: "recovered-audit-4",
  },
  385: {
    direction: "digital",
    company: "Nacar Strategic Design Agency",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 正式设计机构岗位",
    titleZh: "产品设计师（高视觉完成度与设计系统）",
    titleEs: "Product Designer",
    reason: "官方 Recruitee 详情在最近一次逐条核验时显示 Apply、3 年以上、流利英语、competitive salary、健康保险和 26 天带薪假。工作涵盖高视觉完成度数字产品、Figma、可扩展设计系统、客户提案与 AI 工具。",
    next: "这是产品/UX 主导的品牌数字延展备选，不是纯 VI。只有作品集能展示品牌语言进入数字产品、组件系统和高精度界面时再投，并确认当前申请表、办公室节奏和工作许可。",
    language: "流利英语明确要求；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上产品设计",
    changeType: "recovered-audit-4",
  },
  217: {
    direction: "digital",
    company: "Feels Like",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "产品设计师（数字视觉系统与高端品牌项目）",
    titleEs: "Product Designer",
    reason: "2026-08-10 官方工作室页面显示 Barcelona、Hybrid 与提交申请入口。职责覆盖端到端数字产品、UX flow、可扩展 design systems、components、typography、视觉工艺和客户/开发协作。",
    next: "产品 UX 是主方向，放在品牌视觉岗之后。若投递，必须展示视觉识别如何转成可扩展数字系统，同时先确认薪资、合同、每周到岗和 Spain 工作许可。",
    language: "Confident English 明确要求；未列西语门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4 年以上产品与 UX",
    changeType: "recovered-audit-4",
  },
  1080: {
    direction: "digital",
    company: "GameHouse Europe",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain / Europe remote；Barcelona 到岗要求需确认",
    titleZh: "高级 UX/UI 设计师（设计系统与品牌一致性）",
    titleEs: "Senior UX/UI Designer",
    reason: "官方 Factorial 详情在最近一次逐条核验时显示 Apply now。工作包含移动端 UX/UI、landing page、in-app web、订阅流程、实验，以及跨触点维护 design system 和 brand guidelines。",
    next: "这是产品 UX/UI 备选，只在你有移动端、响应式网页、交互/动效和设计系统案例时投。打开表单后确认当前状态、Spain 雇佣主体、Barcelona 到岗、薪资和实际品牌延展占比。",
    language: "国际产品团队；具体语言等级需从当前申请表确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级产品 UX/UI",
    changeType: "recovered-audit-4",
  },
  1099: {
    direction: "digital",
    company: "LABHOUSE",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 全远程 / Barcelona / 永久全职",
    titleZh: "UI/UX 视觉负责人（移动产品与设计系统）",
    titleEs: "Lead UI/UX Artist",
    reason: "2026-08-09 官方 Ashby 详情显示 Barcelona、Spain Remote、Full time 与 Apply。岗位负责移动 App 的端到端 UI/UX、研究、原型、production UI、design systems、商店素材和 Lottie，并提供永久合同。",
    next: "它是 Lead 产品 UI/UX，不是品牌 VI 主岗，因此保持低位备选。只在有 iOS/Android、Figma、Adobe、设计系统、App Store 视觉和 Lottie 证据时投，并确认薪资与签证/工作许可。",
    language: "Good English 明确要求；未列西语门槛",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "Lead / 移动端 UI/UX",
    changeType: "recovered-audit-4",
  },
  10: {
    direction: "brand",
    company: "Binance",
    statusKey: "closed",
    titleZh: "品牌视觉岗位—官方 Southern Europe 列表已无结果",
    titleEs: "Brand / Visual Designer — closed search result",
    reason: "2026-08-12 打开 Binance 官方 Lever Southern Europe 招聘板，页面明确显示 No job postings match these filters；旧搜索摘要不能继续当作当前职位。",
    next: "保留在历史区，不进入 Barcelona 或远程主表；只有出现新的独立 Lever requisition 才重新评估。",
    changeType: "recovered-audit-4",
  },
});

// Fifth recovery batch: current visual, digital-brand and motion roles that
// already had original-detail evidence but had not entered the canonical board.
Object.assign(CURATED, {
  314: {
    direction: "digital",
    company: "Qoria / Qustodio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 正式全职 / €30,000–40,000",
    titleZh: "数字设计师（品牌指南、网页、CRM 与 Campaign）",
    titleEs: "Digital Designer (Marketing)",
    reason: "Qoria 官方 Rippling 招聘板与详情页均显示 Apply now。岗位覆盖网站、landing page、CRM/email、社媒、付费 campaign、演示和品牌项目，并参与 brand guidelines、design systems 与组件化生态。",
    next: "这是英语可工作的 Barcelona 强备选，但要求 5 年以上。用数字品牌系统、响应式网页、邮件/CRM、campaign 和可访问性案例申请；确认混合办公、工作许可和薪资区间对应级别。",
    language: "流利英语明确要求；西语是 highly valued 而非公开硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit-5",
  },
  78: {
    direction: "digital",
    company: "Textura Interiors",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 合同与办公节奏待确认",
    titleZh: "数字设计师（视觉识别与线上线下品牌延展）",
    titleEs: "Digital Designer",
    reason: "2026-08-10 官方 careers 详情显示完整职位和 cv@textura-interiors.com 直投。工作把视觉识别延展到 campaign、社媒、web、landing、banner、POS、email、CMS 与 360° 营销。",
    next: "用一套视觉识别向网页、邮件、POS 和 campaign 延展的完整案例投递；先确认西语/加泰语日常程度、薪资、合同和每周办公室安排。",
    language: "公开详情未写语言等级；本地室内品牌团队的西语使用需先确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    changeType: "recovered-audit-5",
  },
  458: {
    direction: "digital",
    company: "Product Madness / Aristocrat",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 每周 3 天办公室",
    titleZh: "视觉设计师（游戏品牌营销与社媒视觉）",
    titleEs: "Visual Designer",
    reason: "2026-08-09 原始雇主详情显示 Barcelona、Solicitar 和当前招聘。岗位在 Creative Lead 与平面/动态团队协作下，为多个游戏品牌从概念到交付制作营销和社媒视觉。",
    next: "它偏游戏营销内容而非 VI 所有权。若接受每周 3 天到岗，用 campaign、社媒、motion、AI 辅助制作和多品牌一致性案例申请，并确认薪资、合同和工作语言。",
    language: "语言未在公开详情中说明，需在申请前确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级视觉 / 游戏营销经验加分",
    changeType: "recovered-audit-5",
  },
  258: {
    direction: "brand",
    company: "Glovo",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Brand 团队 / 办公节奏待确认",
    titleZh: "高级平面设计师（品牌守护、PR 与社媒）",
    titleEs: "Senior Graphic Designer",
    reason: "官方 Glovo / Delivery Hero 招聘详情显示 Apply。职责包括品牌守护，以及端到端制作社媒、PR 和 Global Affairs 视觉资产；Premiere、After Effects 和工作流协调为加分项。",
    next: "用品牌一致性、社媒/PR campaign、快速多方协作和基础 motion 案例申请；先确认 Barcelona 办公比例、英语/西语日常、薪资和工作许可。",
    language: "公开正文未列西语硬门槛；国际品牌团队语言需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级平面设计 / 品牌生产",
    changeType: "recovered-audit-5",
  },
  921: {
    direction: "brand",
    company: "Oh / OhChat",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe 远程 / 全职或自由职业 / Spain 合同待确认",
    titleZh: "平面设计师（Campaign、产品内素材与基础 Motion）",
    titleEs: "Graphic Designer",
    reason: "2026-08-09 官方 Ashby 详情显示 Europe remote、Full time、Apply，并允许 freelance contract。工作覆盖社媒、campaign、产品内素材、活动、营销和基础 motion。",
    next: "这是成人内容/创作者品牌环境，必须主动确认是否接受。若接受，再问 Spain 雇佣或 autónomo、薪资/日费、税务、时区和内容边界；作品集放 Figma/Adobe、多渠道 campaign 与基础动效。",
    language: "欧洲远程国际团队；公开页未列西语要求",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    changeType: "recovered-audit-5",
  },
  117: {
    direction: "brand",
    company: "Lateral Thinking",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 品牌体验与现场制作",
    titleZh: "艺术指导（品牌体验、视觉识别与空间导视）",
    titleEs: "Art Director",
    reason: "2026-08-10 原始详情显示 Barcelona、Solicitar 和当前申请。岗位领导品牌体验视觉策略，定义 visual identity、key visual、signage、印刷、branding assets 与线上线下图形，并监督制作和现场安装。",
    next: "VI 相关性高，但流利西语、5 年以上以及现场制作/安装是硬门槛。条件满足时用品牌体验、导视、印刷、空间和制作落地案例申请；确认薪资与到岗强度。",
    language: "流利西语明确要求；英语和 Catalan 为加分项",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit-5",
  },
  210: {
    direction: "brand",
    company: "Fail Fast Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "视觉设计师（视觉系统、品牌概念与数字/印刷）",
    titleEs: "Visual Designer",
    reason: "2026-08-09 官方雇主详情显示 Barcelona、Full-time、Hybrid 与 Apply now。职责是创建和演进视觉系统、发展遵循品牌规范的图形概念与数字/印刷资产，并支持 storyboard 和视频图形。",
    next: "岗位内容很贴，但 8 年以上与流利西语是极高门槛。只有资历和语言都真实满足时才投，并确认办公室天数、项目语言和薪资。",
    language: "流利西语与良好英语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 8 年以上",
    changeType: "recovered-audit-5",
  },
  308: {
    direction: "digital",
    company: "DDB Spain",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / agency / 办公节奏待确认",
    titleZh: "数字艺术指导（CRM、邮件、Web 与组件指南）",
    titleEs: "Digital Art Director",
    reason: "官方 Greenhouse 详情显示完整申请表。岗位领导 CRM/email 视觉、响应式数字传播、CMS web、组件、styles 与 guides，并与 UX/UI 和开发团队协作。",
    next: "它是西语招聘流程中的 4 年以上数字艺术指导。若工作西语可用，用 Figma、邮件可访问性、响应式 web、组件系统和基础 HTML/CSS 案例申请；确认薪资、工作许可和办公室安排。",
    language: "职位正文与流程为西语；按西语工作门槛处理",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4 年以上",
    changeType: "recovered-audit-5",
  },
  1097: {
    direction: "brand",
    company: "Olixir / Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 自由职业 / 每周 3 天办公室",
    titleZh: "自由职业品牌负责人（Campaign 质量与品牌一致性）",
    titleEs: "Freelance Brand Lead",
    reason: "官方 Greenhouse 详情在最近一次核验时显示 New、Barcelona、Apply 和完整表单。工作协调四个品牌团队与代理商，审核 campaign 资产是否符合规范并衔接内部制作团队。",
    next: "这不是纯手作设计岗，而是 senior brand coordination / quality-control。只有可在 Spain 合法自由职业、能每周 3 天到岗并有品牌审稿与跨团队协调经验时投；先确认项目起止、费率和开票。",
    language: "国际医疗广告团队；具体西语使用需从表单或面试确认",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "品牌负责人 / 自由职业",
    changeType: "recovered-audit-5",
  },
});

// Sixth recovery batch: verified employer details and clearly labelled
// verify-first routes. Generic talent pools and anonymous clients stay outside.
Object.assign(CURATED, {
  668: {
    direction: "brand",
    company: "COROS",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "UK / EU 远程 / 全职永久 / Spain EOR 待确认",
    titleZh: "品牌创意制作人（产品发布、品牌影像与社媒）",
    titleEs: "Brand Creative Producer",
    reason: "2026-08-10 官方 COROS careers 显示岗位专属正文：Remote in UK or EU、English、full-time permanent，并可通过 EU/UK 实体或合规 EOR 雇佣。工作覆盖产品发布、品牌片、运动员故事、社媒内容、赛事激活、拍摄与剪辑。",
    next: "它偏品牌影像和制作，不是静态 VI。用品牌片、产品叙事、motion/video 与品牌一致性案例邮件投递；先确认 Spain EOR、薪资、出差频率和美国团队时段。",
    language: "主要工作语言为英语；未列西语门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上品牌制作与视频",
    changeType: "recovered-audit-6",
  },
  5106: {
    direction: "digital",
    company: "CrowdStrike",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Spain remote / Barcelona / 全职",
    titleZh: "创意内容设计师（信息设计、模板与视频）",
    titleEs: "Creative Content Designer — Remote",
    reason: "2026-08-09 官方 Workday R29235 显示 Apply、Spain - Barcelona、Full time。工作是销售赋能视觉生产：presentation、one-pager、infographic、newsletter、培训材料、video、animation、template 与品牌规范适配。",
    next: "它是信息设计与品牌适配，而非 VI 所有权。用演示系统、信息图、模板、视频和品牌一致性案例申请；确认 Spain 居家办公、薪资与工作许可。",
    language: "专业英语明确要求；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上",
    changeType: "recovered-audit-6",
  },
  134: {
    direction: "brand",
    company: "SLAPS",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / full-time / 申请表状态待确认",
    titleZh: "高级艺术指导（大型 Campaign 与品牌视觉）",
    titleEs: "Senior Art Director",
    reason: "2026-08-10 官方 SLAPS careers 仍列出 Senior Art Director、Full Time、Barcelona。正文覆盖大型 campaign、moodboard、key deliverable、graphic/3D、brand guidelines、广告、社媒、产品发布、摄影、film 与 video。",
    next: "岗位专属表单在核验时受保护，因此先确认是否仍接受提交、语言、薪资与摄影/视频/3D 制作责任；要求 5 年以上和大型品牌作品集。",
    language: "公开 careers 未完整披露语言；Barcelona agency 工作语言需先确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit-6",
  },
  2942: {
    direction: "brand",
    company: "SLAPS",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Junior full-time 或 internship 待确认",
    titleZh: "初级平面设计师（品牌机构路线）",
    titleEs: "Junior Graphic Designer",
    reason: "2026-08-09 官方 SLAPS careers 仍单独列出 Junior Graphic Designer 与 Barcelona；它和 Senior Art Director 是两个不同职位。具体 apply 页没有暴露完整表单和 JD。",
    next: "先发邮件确认这是正式 junior 雇佣还是实习、是否需要 convenio、薪资、日常语言和正确申请链接，再决定是否定制作品集。",
    language: "公开页未说明；需先确认英语/西语工作比例",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "初级 / 合同类型待确认",
    changeType: "recovered-audit-6",
  },
  930720: {
    direction: "digital",
    company: "Ondeuev",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 前 3 个月 40h 自雇试用",
    titleZh: "高级数字与平面设计师（品牌、Web 与 Motion）",
    titleEs: "Senior Digital and Graphic Designer",
    reason: "2026-08-10 当前搜索结果完整捕获原始职位正文与 Solicitar：5 年以上、Adobe、Figma、WordPress/Elementor，并重视 motion 与战略设计。直接重开同一 URL 时出现缓存缺失，所以不能标为确认 live。",
    next: "Catalan、西语、英语和前 3 个月独立承包都是硬门槛。先通过 talent@ondeuev.com 确认职位仍开放、费率、后续合同和 hybrid 节奏，再投入申请。",
    language: "Catalan 与西语口笔语、流利英语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "recovered-audit-6",
  },
  183: {
    direction: "social",
    company: "Ogilvy",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 每周约 2–3 天办公室",
    titleZh: "社媒艺术指导（平台创意与基础 Motion）",
    titleEs: "Art Director (Social Media)",
    reason: "2026-08-10 原始雇主详情仍显示 Barcelona 当前职位。工作为 Instagram、TikTok、YouTube 构思和视觉概念，制作平台适配素材并维持视觉一致性，要求 Adobe、基础视频/motion 与至少 2 年 agency 经验。",
    next: "页面没有暴露普通申请邮箱或明确 ATS 控件，不能使用 accommodations 邮箱投递。先找到真实 CV 路径，再确认语言、薪资与办公节奏。",
    language: "本地 agency 环境；具体英语/西语等级需从真实申请入口确认",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上 agency",
    changeType: "recovered-audit-6",
  },
  239: {
    direction: "brand",
    company: "Havas Play",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 产假替代临时合同 / 立即到岗",
    titleZh: "高级艺术指导（数字与线下 Campaign，产假替代）",
    titleEs: "Senior Art Director — Maternity Leave",
    reason: "2026-08-10 原始详情显示 Havas España、Barcelona 与 Solicitar；招聘方说明为产假替代、立即加入，要求 3–4 年 agency/media 与数字/线下 campaign 经验。",
    next: "短期合同和立即到岗是硬门槛。先确认 LinkedIn 是否仍能提交、合同期限、语言、薪资和办公室节奏，再用整合 campaign 案例投递。",
    language: "公开详情未列等级；按本地西语 agency 环境先确认",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 3–4 年 / 临时替代",
    changeType: "recovered-audit-6",
  },
  977: {
    direction: "digital",
    company: "Injective",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "CET / EET 远程 / Spain 合同资格待确认",
    titleZh: "数字设计师（品牌 Campaign 与视觉一致性）",
    titleEs: "Digital Designer",
    reason: "官方 Ashby 路由显示 Apply；索引正文要求与 Brand & Marketing Designer 协作，制作 digital assets、product launch、brand campaign 并维护 visual identity consistency，要求 3–5 年、Adobe/Figma、英语，motion 加分。",
    next: "先确认是否接受 Spain resident、雇佣或 contractor、薪资与 Web3 经验要求；作品集突出品牌系统在 web/social/email/event 的落地和可扩展模板。",
    language: "英语与 CET/EET 时区明确；未列西语",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3–5 年",
    changeType: "recovered-audit-6",
  },
  1255: {
    direction: "brand",
    company: "Gameloft",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / internship 与 permanent 描述冲突",
    titleZh: "平面设计实习岗位（合同类型待核实）",
    titleEs: "Graphic Design Intern",
    reason: "官方 Gameloft 页面显示 Barcelona、Hybrid 与 Apply Now，但同页同时写 Internship experience 和 Permanent contract，且未公开详细职责、薪资、语言和大学协议。",
    next: "先确认究竟是带薪实习还是永久 junior 合同、是否需要 convenio、薪资和工作语言；未确认前不要把它当正式全职岗位。",
    language: "官方页未公开语言要求",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "实习 / Junior；合同冲突待确认",
    changeType: "recovered-audit-6",
  },
  1241: {
    direction: "production",
    company: "Cal Fruitós",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 100% 现场 / 全职",
    titleZh: "平面与包装设计师（品牌、POS 与完稿）",
    titleEs: "Dissenyador/a Gràfic/a & Packaging",
    reason: "2026-08-01 原始详情显示 Barcelona、Solicitar 和全职现场。职责包括维护整体 look & feel、新品包装、印刷/实体物料、POS、标识、修图和 artes finales，要求 5 年以上和包装经验。",
    next: "当前距离核验已超过一周，先确认 LinkedIn 仍能提交、实际地址、加泰/西语门槛、薪资和测试，再用品牌系统、包装系列、门店/POS 与完稿案例申请。",
    language: "本地食品品牌环境；加泰语/西语程度需确认",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上包装与图形",
    changeType: "recovered-audit-6",
  },
  986: {
    statusKey: "closed",
    direction: "brand",
    company: "COROS",
    titleZh: "品牌创意制作人—重复来源记录",
    titleEs: "Brand Creative Producer — duplicate source",
    reason: "与主记录 668 使用同一个 COROS 官方 careers 职位和 careers@coros.com 邮箱。",
    next: "从主记录 668 查看和投递。",
    changeType: "recovered-audit-6",
  },
  2968: {
    statusKey: "closed",
    direction: "brand",
    company: "SLAPS",
    titleZh: "SLAPS 两岗位合并镜像—重复记录",
    titleEs: "Junior Graphic Designer / Senior Art Director — duplicate summary",
    reason: "该记录把两个独立职位合并为一条摘要；主表已分别保留 Senior Art Director（134）与 Junior Graphic Designer（2942）。",
    next: "分别查看主记录 134 和 2942。",
    changeType: "recovered-audit-6",
  },
});

// Seventh recovery batch: every promoted card below was reopened on the
// original vacancy or an employer-owned careers page on 2026-08-12. A page
// being reachable is not enough: expired roles are explicitly moved to
// history, while generic careers routes remain verify-first.
Object.assign(CURATED, {
  447: {
    direction: "ecommerce",
    company: "Velvet Caviar",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 100% 远程 / 全职 / €30,000–40,000",
    titleZh: "电商品牌平面设计师（邮件、网站、社媒与基础 Motion）",
    titleEs: "Graphic Designer — eCommerce Fashion Brand",
    reason: "2026-08-12 原始 LinkedIn 雇主详情再次显示 Spain、Solicitar、约 1 天前发布。职责覆盖邮件 Campaign、网站和 Amazon banner、静态/动态社媒、付费广告、图案与 Pantone 管理；明确 2 年以上、Adobe/After Effects、品牌与字体能力，并公开 €30k–40k。",
    next: "这是英语电商品牌岗，不是 Barcelona 本地岗。用 email lifecycle、网页 banner 系统、paid/social 静态与 motion、图案和修图案例申请；先确认 Spain 雇佣实体、福利、工作许可和与纽约团队工作到 18:00 的时段。",
    language: "英文职位与纽约团队协作；未列西语门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上",
    changeType: "recovered-audit-7",
  },
  207: {
    direction: "digital",
    company: "Publicis Production / Publicis Groupe España",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 办公节奏待确认",
    titleZh: "设计师（全球品牌 Campaign 与数字制作）",
    titleEs: "Designer",
    reason: "2026-08-12 原始 LinkedIn 雇主详情仍可打开并显示 Barcelona 与申请入口。工作为全球品牌制作 key visual、静态广告、newsletter、landing page、banner、shopper 物料、完稿与修图，并与 content、UX 和开发协作；要求 3–4 年或相关学历及高级英语。",
    next: "它偏 Campaign 与数字制作，不是 VI 策略岗。用完整 key visual、多尺寸数字系统、邮件/landing、零售物料、修图和生产完稿案例申请；先确认西语使用、薪资、合同和 hybrid 节奏。",
    language: "高级英语会在面试中评估；公开正文未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–4 年或相关学历",
    changeType: "recovered-audit-7",
  },
  444: {
    direction: "digital",
    company: "Locker in the City",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 100% 远程 / 每周 4 天、36 小时",
    titleZh: "数字设计师（网页、设计系统、CRM 与门店视觉）",
    titleEs: "Digital Designer",
    reason: "当前原始职位索引显示 Spain 远程、Solicitar 和完整 JD。岗位负责 booking funnel、landing page、多语言市场一致性、Figma 设计系统、CRO、邮件、paid/social 与门店插画和图形；要求 3–5 年及 Figma、Adobe、AI 工作流。",
    next: "方向同时连接品牌视觉与数字产品。用品牌如何落到 funnel、响应式页面、邮件、广告与实体门店的系统案例申请；设计测试前先确认薪资、合同实体、工作语言、测试范围和是否付费。",
    language: "公开职位未明确英语或西语等级；申请前必须确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    changeType: "recovered-audit-7",
  },
  304: {
    direction: "digital",
    company: "Vista / VistaPrint",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 远程 / 官方职位 / 2026-07-22",
    titleZh: "AI LogoMaker UX 设计负责人（Logo、品牌创建与设计系统）",
    titleEs: "Lead UX Designer, AI LogoMaker",
    reason: "2026-08-12 官方 Vista 职位页仍显示 Apply now、Spain Remote 与 2026-07-22。职责是端到端 AI LogoMaker、品牌创建和刷新流程、品牌在印刷物料中的一致应用，以及 Vista 中央设计系统；要求 5 年以上数字产品设计、Figma 和 AI 工具。",
    next: "它是产品 UX 与品牌创建工具交叉岗，不是传统平面 VI。只有作品集能证明研究、端到端产品流程、设计系统和 AI 原型时才投；申请前确认薪资、团队时区和 Spain 福利。",
    language: "官方英文流程；未列西语门槛",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "Lead / 5 年以上数字产品设计",
    changeType: "recovered-audit-7",
  },
  89: {
    direction: "social",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "中高级平面设计师（美妆健康品牌 Campaign 与社媒）",
    titleEs: "Mid/Senior Graphic Designer",
    reason: "2026-08-09 官方 Dragons ATS 显示 Apply、Barcelona、full-time、hybrid。工作为高端护肤与健康品牌制作 paid/organic social、Campaign、toolkit 和演示，并进行高级修图、合成与 AI 辅助生产；要求 4–8 年和品牌规范执行。",
    next: "岗位真实但偏社媒适配，不应高于品牌系统岗。只有西语和英语都能工作时再投，作品集需有美妆/健康视觉、paid 与 organic 变体、修图合成、toolkit 和品牌一致性。",
    language: "西语和英语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4–8 年",
    changeType: "recovered-audit-7",
  },
  855: {
    direction: "production",
    company: "Yellowcat",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 现场 / 自由职业临时项目 / €320 日薪",
    titleZh: "现场艺术指导（时尚影像与广告片）",
    titleEs: "Art Director (On-Set) — Fashion & Imaging Studios",
    reason: "2026-08-12 原始职位仍显示 Solicitar、Barcelona、ongoing projects、ASAP 和 €320/day。职责覆盖广告片 storytelling、film board、shoot board、现场导演，以及与制作、模特和摄影团队协作；要求资深广告片或导演/副导演背景。",
    next: "这是影像制作副线，不是 VI。仅在作品集有品牌广告片、storyboard、摄影艺术指导和现场制作时投；先确认项目天数、工时、发票付款周期、取消条款、版权、交通与设备费用。",
    language: "英文职位正文；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 自由职业现场制作",
    changeType: "recovered-audit-7",
  },
  1227: {
    direction: "motion",
    company: "Natulim",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona hybrid / 永久全职",
    titleZh: "视频剪辑与 Motion Graphics 设计师（品牌社媒）",
    titleEs: "Videógrafo especialista en Edición de Vídeos",
    reason: "2026-08-12 官方 Factorial 仍显示 Inscríbete ahora、Indefinido、Tiempo completo、Híbrido Barcelona。正文要求 2 年以上，完成 Instagram、YouTube、TikTok、Facebook 与 web 视频、2D/3D motion、拍摄、剪辑、storytelling 和品牌视觉一致性。",
    next: "它是 performance 视频与社媒内容岗，不是平面 VI。用高留存短视频、品牌视频、2D/3D motion、拍摄灯光声音和多比例适配案例申请；确认西语面试、薪资与 hybrid 节奏。",
    language: "官方正文为西语；按西语工作环境处理",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上视频与社媒",
    changeType: "recovered-audit-7",
  },
  396: {
    direction: "motion",
    company: "RV Group — Rodriguez Villar",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 100% 现场 / 全职",
    titleZh: "初级 Motion Graphics 与视觉设计师",
    titleEs: "Junior Motion Graphics & Visual Designer",
    reason: "2026-08-12 JobToday 原始详情仍可打开；页面显示 Barcelona 和 Apply now。工作覆盖数字 Campaign、社媒、motion、短视频、数字屏幕、海报、菜单和内部传播，并要求维持品牌一致性。",
    next: "初级且全现场，低于品牌/VI 主线。只有持西班牙工作许可、能用西语与英语并有 motion/短视频和 Campaign 适配案例时投；确认薪资和实际办公地址。",
    language: "流利西语与英语均明确要求",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 现场工作",
    changeType: "recovered-audit-7",
  },
  172: {
    direction: "brand",
    company: "Ogilvy",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 Graduate Program 实习",
    titleZh: "初级艺术指导（数字品牌与多渠道创意实习）",
    titleEs: "Junior Art Director — Graduate Program Barcelona",
    reason: "2026-08-12 原始 LinkedIn 雇主详情仍显示 Solicitar。职责包括多渠道创意、数字社媒内容、数字导向 branding 和客户提案；不要求工作经验，但要求在西班牙完成广告或相近大学学位，并明确西语必需。",
    next: "它是 Graduate Program，不应高于正式设计岗。只有满足西班牙学历和西语硬门槛时投；作品集突出概念、数字 branding、多渠道延展和提案表达。",
    language: "西语必需；高水平英语加分",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "Graduate / 实习 / 无经验可投",
    changeType: "recovered-audit-7",
  },
  86: {
    direction: "social",
    company: "JIRADA Agency / Cosmo5",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职实习 / 必须可签 convenio",
    titleZh: "平面设计实习生（社媒、Campaign 与基础 Web）",
    titleEs: "Beca Graphic Designer (Social Media)",
    reason: "2026-08-12 原始 LinkedIn 雇主详情显示约 2 天前发布，并给出直接邮箱 people@jirada.agency。职责覆盖 Campaign 视觉执行、视频内容拼接、pitch mockup、web wireframe/design、AI、客户演示和社媒协作；明确必须能签实习 convenio。",
    next: "它是西语社媒实习，不是正式品牌设计岗。只有可签 convenio 时再投；邮件主题用 Beca Diseño Gráfico，并先问补贴、工时、期限、转正、办公比例和测试要求。",
    language: "西语职位与本地 agency 环境",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "实习 / 必须有 convenio",
    changeType: "recovered-audit-7",
  },
  1294: {
    direction: "brand",
    company: "IMAGINA Digital Solutions",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官方 careers 通用投递 / 具体合同待确认",
    titleZh: "数字平面设计师（品牌、指南与数字 Campaign）",
    titleEs: "Diseñador Gráfico Digital",
    reason: "2026-08-12 官方 careers 仍把该岗位列为当前招聘：创建品牌和应用指南、数字 Campaign、网页和社媒视觉并向客户提案。官方页有 Envía tu CV，但没有独立 requisition、发布日期、薪资或合同信息。",
    next: "内容很贴品牌延展，但高水平书面加泰语和西语是硬门槛。只有语言满足时才通过官方入口投递，并先确认职位仍开放、合同、薪资、办公地点和选拔流程。",
    language: "高水平书面加泰语与西语均为明确必需",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "经验要求未量化 / 需同类作品",
    changeType: "recovered-audit-7",
  },
  349: {
    statusKey: "closed",
    direction: "brand",
    company: "Visma Software International",
    titleZh: "初级品牌设计师—官方已关闭",
    titleEs: "Junior Brand Designer — closed",
    reason: "2026-08-12 官方 Teamtailor 职位页明确显示 This position is no longer active。",
    next: "保留完整历史 JD 作为作品集对标，不再计入当前可投。",
    changeType: "recovered-audit-7",
  },
  254: {
    statusKey: "closed",
    direction: "digital",
    company: "Kilo™ / Kiloverse",
    titleZh: "平面设计与视频剪辑—原职位已过期",
    titleEs: "Graphic Designer / Video Editor — expired",
    reason: "2026-08-12 打开原始 LinkedIn 职位编号 4379646846 时已重定向到 expired jobs 搜索页。",
    next: "保留历史薪资和 JD，不再把搜索缓存当成可投入口。",
    changeType: "recovered-audit-7",
  },
  3402: { statusKey: "closed", direction: "motion", company: "Fail Fast Studio", titleZh: "动态设计师—重复来源", titleEs: "Motion Designer — duplicate", reason: "与主记录 375 是同一招聘身份。", next: "使用主记录 375。", changeType: "recovered-audit-7" },
  481: { statusKey: "closed", direction: "brand", company: "TWOJEYS", titleZh: "品牌负责人—重复来源", titleEs: "Head of Brand — duplicate", reason: "与主记录 27 指向同一岗位。", next: "使用主记录 27。", changeType: "recovered-audit-7" },
  403: { statusKey: "closed", direction: "digital", company: "Avidalia", titleZh: "数字内容设计师—重复来源", titleEs: "Digital Content Designer — duplicate", reason: "与主记录 278 是同一岗位。", next: "使用主记录 278。", changeType: "recovered-audit-7" },
  1647: { statusKey: "closed", direction: "brand", company: "Lodgify", titleZh: "创意设计师—重复来源", titleEs: "Creative Designer — duplicate", reason: "与主记录 4 指向同一 Lever requisition。", next: "使用主记录 4。", changeType: "recovered-audit-7" },
  1670: { statusKey: "closed", direction: "brand", company: "Canonical", titleZh: "视觉设计师—重复来源", titleEs: "Visual Designer — duplicate", reason: "与主记录 604 是同一当前机会。", next: "使用主记录 604。", changeType: "recovered-audit-7" },
  993066: { statusKey: "closed", direction: "brand", company: "COROS", titleZh: "品牌创意制作人—重复来源", titleEs: "Brand Creative Producer — duplicate", reason: "与主记录 668 是同一官方职位。", next: "使用主记录 668。", changeType: "recovered-audit-7" },
  5261: { statusKey: "closed", direction: "digital", company: "CrowdStrike", titleZh: "创意内容设计师—重复来源", titleEs: "Creative Content Designer — duplicate", reason: "与主记录 5106 是同一 Workday requisition。", next: "使用主记录 5106。", changeType: "recovered-audit-7" },
  2248: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "网页设计师—重复镜像", titleEs: "Web Designer — duplicate", reason: "与主记录 84 共用当前申请身份。", next: "使用主记录 84。", changeType: "recovered-audit-7" },
  2190: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "网页设计师—重复镜像", titleEs: "Web Designer — duplicate", reason: "与主记录 84 共用当前申请身份。", next: "使用主记录 84。", changeType: "recovered-audit-7" },
  2249: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "网页设计师—重复镜像", titleEs: "Web Designer — duplicate", reason: "与主记录 84 共用当前申请身份。", next: "使用主记录 84。", changeType: "recovered-audit-7" },
  2194: { statusKey: "closed", direction: "digital", company: "reboot", titleZh: "网页设计师—重复镜像", titleEs: "Web Designer — duplicate", reason: "与主记录 84 共用当前申请身份。", next: "使用主记录 84。", changeType: "recovered-audit-7" },
  2005: { statusKey: "closed", direction: "digital", company: "LABHOUSE", titleZh: "UI/UX 视觉负责人—重复来源", titleEs: "Lead UI/UX Artist — duplicate", reason: "与主记录 1099 指向同一职位。", next: "使用主记录 1099。", changeType: "recovered-audit-7" },
  937: { statusKey: "closed", direction: "digital", company: "Textura Interiors", titleZh: "数字设计师—重复来源", titleEs: "Digital Designer — duplicate", reason: "与主记录 78 是同一岗位。", next: "使用主记录 78。", changeType: "recovered-audit-7" },
  1503: { statusKey: "closed", direction: "digital", company: "devicenow", titleZh: "视频与动态视觉专员—重复来源", titleEs: "Video & Motion Graphics Specialist — duplicate", reason: "与主记录 866 是同一岗位。", next: "使用主记录 866。", changeType: "recovered-audit-7" },
  1352: { statusKey: "closed", direction: "brand", company: "IKIGAI Talent", titleZh: "设计岗位—重复来源", titleEs: "Design role — duplicate", reason: "与研究库中的规范记录 874 是同一招聘身份。", next: "保留规范记录 874 复核。", changeType: "recovered-audit-7" },
  28: { statusKey: "closed", direction: "production", company: "TWOJEYS", titleZh: "服装平面设计师—重复来源", titleEs: "Apparel Graphic Designer — duplicate", reason: "与主记录 990001 是同一岗位。", next: "使用主记录 990001。", changeType: "recovered-audit-7" },
  948: { statusKey: "closed", direction: "brand", company: "Fail Fast Studio", titleZh: "视觉设计师—重复来源", titleEs: "Visual Designer — duplicate", reason: "与主记录 210 是同一岗位。", next: "使用主记录 210。", changeType: "recovered-audit-7" },
  3048: { statusKey: "closed", direction: "brand", company: "SLAPS", titleZh: "艺术指导—重复来源", titleEs: "Art Director — duplicate", reason: "与主记录 134 是同一职位。", next: "使用主记录 134。", changeType: "recovered-audit-7" },
  491: { statusKey: "closed", direction: "brand", company: "SLAPS", titleZh: "平面设计师—重复来源", titleEs: "Graphic Designer — duplicate", reason: "与主记录 2942 是同一职位。", next: "使用主记录 2942。", changeType: "recovered-audit-7" },
  3076: { statusKey: "closed", direction: "brand", company: "SLAPS", titleZh: "平面设计师—重复来源", titleEs: "Graphic Designer — duplicate", reason: "与主记录 2942 是同一职位。", next: "使用主记录 2942。", changeType: "recovered-audit-7" },
  1603: { statusKey: "closed", direction: "brand", company: "EuroLeague Basketball", titleZh: "高级平面设计师—重复来源", titleEs: "Senior Graphic Designer — duplicate", reason: "与主记录 284 是同一岗位。", next: "使用主记录 284。", changeType: "recovered-audit-7" },
});

// Eighth recovery batch: current details were read again on 2026-08-12 in a
// signed-in browser or on the employer-owned ATS. New requisitions are kept
// separate from expired company/role predecessors; expired, wrong-country and
// duplicate routes stay in history instead of disappearing.
Object.assign(CURATED, {
  930816: {
    direction: "brand",
    company: "Brownie",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场 / 全职 / 正在积极审核",
    titleZh: "初级平面设计师（360° 品牌、包装、门店与电商）",
    titleEs: "Junior Graphic Designer",
    reason: "2026-08-12 登录后打开新的 LinkedIn 招聘编号 4445887935：页面显示已验证职位、Easy Apply、约一周前发布且正在积极审核。职责从 360° Campaign 概念到门店品牌、包装、Web、Newsletter、社媒、视听内容和电商修图，要求至少 2 年时尚/零售经验与高级英语。",
    next: "这是 Brownie 的新招聘编号，不是已过期旧卡的复活。用 360° Campaign、包装、店内、Web/邮件、电商修图与基础 Motion 案例投递；先确认日常西语、薪资和现场办公时间。",
    language: "高级英语明确；公开正文为西语，本地团队的日常西语需确认",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "初中级 / 至少 2 年时尚或零售设计",
    changeType: "recovered-audit-8",
  },
  1278: {
    direction: "brand",
    company: "MYLVA S.A.",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市中心 / hybrid 3+2 / 永久全职 / €26,000",
    titleZh: "平面与 Web 设计师（品牌识别、包装、编辑与数字延展）",
    titleEs: "Diseñador/a Gráfico & Web",
    reason: "InfoJobs 当前详情仍可读并被近期索引：Barcelona、混合办公、永久全职、年薪 €26,000。职责明确覆盖品牌识别、画册与编辑、包装、数字 Campaign、企业社媒、邮件、视频、WordPress/电商和 AI 工作流；要求 4 年以上，正文进一步偏好 5 年以上。",
    next: "这是本地品牌视觉匹配度较高的岗位，但资历和西语环境是主要门槛。作品集优先放品牌系统、包装系列、目录/编辑、Web/电商和 Motion；申请前确认职位仍接收、工作语言及薪资是否固定。",
    language: "西语职位正文；没有单列西语/加泰语等级，按本地西语工作环境处理",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "资深 / 至少 4 年，正文偏好 5 年以上",
    changeType: "recovered-audit-8",
  },
  930818: {
    direction: "brand",
    company: "Infor",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职实习 / requisition 49130",
    titleZh: "多渠道品牌设计实习（指南、提案、Web 与基础视频）",
    titleEs: "Multi-Channel Brand Design Intern",
    reason: "2026-08-12 官方 Infor Careers 详情显示 Apply Now、Barcelona、Hybrid、Full Time 和 requisition 49130。工作按品牌指南制作提案/PDF、演示、Web-ready 视觉、简单信息图和基础视频，并把模板接入 AI 流程；明确要求良好英语。",
    next: "这是英语友好的品牌系统执行入口，但属于实习。用品牌规范、版式层级、提案/PPT、PDF 完稿、数字延展和轻视频案例申请；先确认薪资、期限、学生/毕业资格以及是否必须学校协议。",
    language: "良好英语明确；官方正文未列西语门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "实习 / 在读或已获相关本科或硕士学位",
    changeType: "recovered-audit-8",
  },
  930819: {
    direction: "production",
    company: "AC Marca",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Hospitalet de Llobregat / 现场 / 一年临时项目",
    titleZh: "包装平面设计师（品牌手册国际落地与完稿）",
    titleEs: "Diseñador/a Gráfico — proyecto temporal",
    reason: "2026-08-12 登录后打开 LinkedIn 招聘编号 4448018251：页面显示已验证、Easy Apply、约 6 天前发布。项目为期一年，按封闭 brandbook 将新品牌识别落到国际产品组合，负责多国适配、AAFF、供应商、色样验证、摄影/图标和产品 mockup；英语或葡语为加分。",
    next: "这是真实包装与品牌执行岗，但合同临时且偏生产。作品集放包装系列、国际规格适配、完稿、色彩管理、供应商协作和产品 mockup；先确认薪资、续约可能、现场工时和日常语言。",
    language: "西语职位正文；英语或葡萄牙语为加分项",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初中级 / 包装、标签或修图经验加分",
    changeType: "recovered-audit-8",
  },
  93: {
    direction: "brand",
    company: "McCann",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 临时合同",
    titleZh: "设计师（品牌视觉体系、Campaign 与数字/印刷）",
    titleEs: "Designer (Temporary)",
    reason: "当前原始 LinkedIn 详情显示 Barcelona、Solicitar、近期发布和完整 JD。工作演进大型品牌的视觉宇宙，制作 Campaign、Key Visual、Landing、Microsite、Newsletter、数字与印刷完稿、品牌系统和客户提案；要求 5 年以上、高英语和加泰语。",
    next: "内容匹配，但临时合同、5 年资历和加泰语是实质门槛。只有语言与资历可如实满足时再投，作品集突出品牌宇宙、Campaign、响应式网页、完稿、AI 和中级视频。",
    language: "高英语与加泰语均为明确要求",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上 / 临时合同",
    changeType: "recovered-audit-8",
  },
  1296: {
    direction: "brand",
    company: "Fuego Camina Conmigo",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "艺术指导（数字优先 Campaign、摄影与编辑）",
    titleEs: "Director/a de Arte",
    reason: "官方 Factorial 详情显示 Inscríbete ahora、Barcelona、混合办公、永久全职。岗位负责大型客户项目的数字优先艺术指导，要求至少 5 年，并看重摄影和编辑能力；公开页没有明确列英语或西语等级。",
    next: "它是资深 Agency 艺术指导，不是纯 VI 岗。用数字 Campaign、品牌视觉、摄影、编辑和完整艺术指导案例申请；先确认工作语言、薪资、客户类型和 hybrid 节奏。",
    language: "官方西语职位页；语言等级未单列，按本地 Agency 西语环境处理",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "资深 / 至少 5 年艺术指导",
    changeType: "recovered-audit-8",
  },
  930817: {
    direction: "production",
    company: "Eat Nudes",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 或附近 / 紧急项目合同 / 费用待确认",
    titleZh: "包装与门店平面设计师（菜单、标识、标签与印刷）",
    titleEs: "Diseñador gráfico",
    reason: "2026-08-12 原始 LinkedIn 详情仍完整可读，并给出直接作品集邮箱 pr@eatnudes.com。发布者明确说明不是社媒运营或内容创作者，而是需要擅长版式、印刷精度和矢量设计的平面设计师，工作包括包装、门店菜单与标识、产品标签、贴纸和图形资产。",
    next: "这是紧急的制作型项目机会，不是稳定 VI 正职。先邮件确认项目周期、每周工时、费用、autónomo/发票、版权、现场要求和试稿是否付费，再决定是否投入。",
    language: "原始招聘正文为英语；未公开西语门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "未设经验年限 / 项目合同 / Illustrator 硬要求",
    changeType: "recovered-audit-8",
  },
  903: {
    direction: "digital",
    company: "fhios / 最终客户未公开",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 项目制 / 最终客户与期限待确认",
    titleZh: "多渠道视觉设计师（AI、演示、视频与制作审校）",
    titleEs: "Diseñador/a — producción multicanal e IA",
    reason: "当前 LinkedIn 原始详情仍提供申请入口。工作涵盖多渠道视觉、内部物料、高质量演示、审核他人作品、高级内容制作、视频和 AI 创意流程；合同标为项目制，fhios 主体可核验，但最终客户、薪资、期限和办公方式没有公开。",
    next: "先用英文/西语询问最终客户、工作语言、合同期限、薪资、办公室比例、保密范围和测试是否付费；未得到书面答复前不要投入大规模定制或试稿。",
    language: "西语职位正文；高英语只列为加分，实际客户语言待确认",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中高级 / 项目制 / 客户未公开",
    opaqueEmployer: true,
    changeType: "recovered-audit-8",
  },
  1293: {
    direction: "social",
    company: "Bonita Digital",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona semipresencial / freelance autónomo / 每周约 15 小时",
    titleZh: "自由职业平面与创意设计师（品牌重塑、社媒与 Campaign）",
    titleEs: "Diseñador gráfico y creativo freelance — Social Media",
    reason: "Join 雇主来源页面显示 Apply now、Barcelona semipresencial、自由职业/Autónomo、每周约 15 小时且费用面议。工作包括儿童、健身与健康品牌的视觉品牌/重塑、月度社媒概念、数字 Campaign、广告、Reels，以及包装、线下物料和轻动画。",
    next: "它是兼职自由职业补充，不是稳定主岗。先确认时薪/月费、最低工时、客户数量、现场频率、发票与付款周期、修改轮次、版权和测试是否付费。",
    language: "公开正文为西语；未单列语言等级",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "自由职业 / 每周约 15 小时",
    changeType: "recovered-audit-8",
  },
  37: {
    direction: "production",
    company: "ALEA",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 平面设计实习",
    titleZh: "平面设计实习生（游戏视觉资产与规范执行）",
    titleEs: "Graphic Designer Internship",
    reason: "官方 Teamtailor 当前职位板仍列出 Graphic Designer Internship — Design · Barcelona · Hybrid，并提供申请入口。工作依据现有 Artwork/Template 制作游戏视觉 vignette 与资产组，维护风格指南、一致性、文件组织和交付质量；面向学生或应届生。",
    next: "这不是 VI 系统主导岗，但可作为低资历本地入口。用版式、数字资产组、模板系统、规范执行和细节质量案例申请；先确认薪资、期限、日常语言、学校协议和转正机会。",
    language: "官方招聘与公司环境为英语；职位未单列语言等级",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "实习 / 学生或应届生",
    changeType: "recovered-audit-8",
  },
  279: {
    direction: "digital",
    company: "DORTOKA disseny",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Badalona / Barcelona / 官方通用 CV 表单",
    titleZh: "平面与 Web 设计师（职位是否正在补招待确认）",
    titleEs: "Diseñador/a gráfico/a — diseño web",
    reason: "官方 Trabaja con nosotros 页面仍列 Diseñador gráfico - diseño web，并有可选择该岗位的 CV 表单；职责包括 Web/移动设计、前端排版、平面设计和插画，页面同时列出 Badalona 与 Barcelona 地址。没有发布日期、薪资、合同、语言或明确 requisition。",
    next: "只能作为待确认入口，不把通用表单当成确定空缺。先邮件或表单询问该岗位是否正在招聘、工作地点、合同、薪资、日常语言和作品集要求，再决定是否定制申请。",
    language: "官方页面为西语；实际工作语言未公开",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "经验未量化 / 当前空缺待确认",
    changeType: "recovered-audit-8",
  },
  173: {
    statusKey: "closed", direction: "social", company: "LONBALI", titleZh: "平面设计师—当前招聘已过期", titleEs: "Diseñador/a gráfica — expired",
    reason: "2026-08-12 再次打开原始 LinkedIn 编号 4438899857，页面已重定向到过期职位搜索，不再提供该岗位申请。",
    next: "保留原 JD 作为品牌书、电商、零售、包装和社媒作品集参考；只有出现新的雇主招聘编号时才重新建卡。", changeType: "recovered-audit-8",
  },
  611: {
    statusKey: "closed", direction: "ecommerce", company: "Hasbro", titleZh: "平面设计师—实际地点为香港", titleEs: "Graphic Designer — Hong Kong, not Spain",
    reason: "两个官方 Greenhouse 页面都明确写 Hong Kong、hybrid，并要求在当地拥有无需赞助的合法工作资格；不是 Spain/Europe remote。",
    next: "保留在地区排除历史，不再计入西班牙或欧洲远程机会。", changeType: "recovered-audit-8",
  },
  438: {
    statusKey: "closed", direction: "production", company: "Grupo Planeta", titleZh: "平面设计师—官方申请已关闭", titleEs: "Diseñador/a Gráfico/a — closed",
    reason: "2026-08-12 官方 TalentClue 职位 122815678 明确显示 Posición cerrada；Grupo Planeta 当前职位总表也未再列该设计岗。",
    next: "保留完整编辑设计 JD 作为书封、完稿与营销物料参考，不再计入当前机会。", changeType: "recovered-audit-8",
  },
  185: {
    statusKey: "closed", direction: "production", company: "Grupo Planeta", titleZh: "编辑平面设计师—重复且已关闭", titleEs: "Editorial Graphic Designer — duplicate closed route",
    reason: "与官方已关闭的 TalentClue 职位 122815678 为同一招聘身份。", next: "使用关闭历史记录 438。", changeType: "recovered-audit-8",
  },
  902: {
    statusKey: "closed", direction: "digital", company: "GRUP MEDIAPRO / 3Cat", titleZh: "初级平面设计师—不再接受申请", titleEs: "Diseñador/a gráfico junior — applications closed",
    reason: "2026-08-12 登录后打开 LinkedIn 编号 4432769541，页面明确显示 Ya no se aceptan solicitudes。",
    next: "保留数字内容、Motion、模板系统与加泰语要求的完整 JD；只有新招聘编号出现时再恢复。", changeType: "recovered-audit-8",
  },
  842: {
    statusKey: "closed", direction: "brand", company: "Bassols 1790", titleZh: "初级平面与传播支持—不再接受申请", titleEs: "Junior Graphic Designer & Communication Support — closed",
    reason: "2026-08-12 原始 LinkedIn 编号 4420466341 明确显示 Ya no se aceptan solicitudes。", next: "保留薪资、实习合同和邮件问题作为历史参考，不再计入当前机会。", changeType: "recovered-audit-8",
  },
  129: {
    statusKey: "closed", direction: "production", company: "AC Marca", titleZh: "旧临时平面设计师招聘—由新编号替代", titleEs: "Old temporary designer requisition — superseded",
    reason: "旧 LinkedIn 编号 4378924688 不再作为当前入口；新的独立招聘编号 4448018251 已逐条核验并单独建卡。", next: "使用当前记录 930819。", changeType: "recovered-audit-8",
  },
  82: {
    statusKey: "closed", direction: "brand", company: "Infor", titleZh: "品牌设计实习旧镜像—由官方记录替代", titleEs: "Multi-Channel Brand Design Intern — old mirror",
    reason: "旧 Indeed 镜像由当前官方 Infor requisition 49130 替代，不能重复计数。", next: "使用当前记录 930818。", changeType: "recovered-audit-8",
  },
});

// Ninth audit batch: these cards were opened again on 2026-08-12. Employer
// details and official ATS pages take precedence over search-result location
// labels. Madrid office listings only enter the main board when the employer
// explicitly offers a remote route that can be pursued from Spain.
Object.assign(CURATED, {
  930822: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "初级艺术指导（社媒优先与整合 Campaign）",
    titleEs: "Junior Art Director",
    reason: "官方 Factorial 职位 317709 在 2026-08-12 显示 Apply now、Permanent、Full time 与 Hybrid Barcelona。要求 1–3 年、Adobe、Figma 和流利英语；工作以 organic social 的静态图、轮播、Story、短视频概念为主，也支持整合 Campaign、体验活动提案、情绪板与品牌指南执行。",
    next: "用英文作品集申请，重点展示艺术指导思维、平台原生社媒、视觉概念、摄影/短视频方向和一套整合 Campaign。它不是纯 VI 岗，因此排在品牌系统岗位之后。",
    language: "流利英语为明确要求；其他语言仅为加分项",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–3 年",
    changeType: "recovered-audit-9",
  },
  930823: {
    direction: "motion",
    company: "Factorial",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 永久全职 / €30,000–35,000",
    titleZh: "付费广告动态设计师（全球市场）",
    titleEs: "Marketing Paid Motion Designer — Global Markets",
    reason: "官方 Factorial 招聘编号 316734 在 2026-08-12 显示 Apply now、Permanent、Full time、Barcelona 和 €30,000–35,000。职责是为 Meta、TikTok、YouTube 和 Display 高量制作并迭代 Motion 广告，把品牌特质转成视觉资产，并依据 CTR、ROAS 等数据优化；英语流利为明确要求。",
    next: "这是新的 Global Markets 招聘编号，不是已经关闭的 Spanish Market 旧岗 1116。用英文提交付费广告 Motion、短视频剪辑、品牌一致性、版本化和 AI 工作流案例；确认现场办公天数与绩效目标。",
    language: "流利英语为明确要求；其他语言加分",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / Paid Media Motion 经验",
    changeType: "recovered-audit-9",
  },
  930820: {
    direction: "digital",
    company: "Siemens Digital Industries Software",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职 / €42,100–67,100",
    titleZh: "UI / 视觉设计师（图标系统与 2D/3D 视觉）",
    titleEs: "UI / Visual Designer",
    reason: "Siemens 官方职位 516087 在 2026-08-12 提供当前申请入口，Barcelona 为主要地点之一并采用 hybrid。工作为工程软件制作 2D/3D icon、pictogram、glyph 与 UI artwork，遵循既有视觉系统和艺术方向；要求 Photoshop、Illustrator、Figma、Blender 与高级英语，西班牙薪资公开为 €42,100–67,100。",
    next: "这是产品 UI 与技术图标岗位，不是品牌识别主导岗。只在作品集中有严谨图标家族、视觉规则、Figma、Adobe 或 3D 资产时申请，并确认 Barcelona 团队、到岗节奏与西班牙合同。",
    language: "高级英语为明确要求；未列西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / UI visual 与 2D/3D 图形",
    changeType: "recovered-audit-9",
  },
  930821: {
    direction: "production",
    company: "Eurostars Hotel Company / Hospitaliti",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场全职 / 偶尔出差到酒店与工地",
    titleZh: "初级标识与图形制作专员（空间 VI）",
    titleEs: "Técnico/a Junior de Señalética y Producción Gráfica",
    reason: "当前 LinkedIn 雇主详情 4451125314 在 2026-08-12 仍有外部申请控制并公开完整 JD。职责包括酒店标识设计与适配、完稿、效果合成、标识手册和企业标准维护、技术图纸、供应商/安装方协调及企业形象质量检查；但外部入口经过 easyapply.jobs，并非 Eurostars 自有 ATS。",
    next: "内容与空间 VI 延展高度相关，且经验门槛较低；但先确认接收简历的真实雇主、合同、薪资、西语要求、出差频率和数据接收方，再上传材料。作品集放导视、空间图形、完稿、材料与供应商落地。",
    language: "西语职位正文；未单列语言等级，按本地西语工作环境处理",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 相关实习或标识、零售、空间经验加分",
    changeType: "recovered-audit-9",
  },
  228: {
    direction: "digital",
    company: "Bending Spoons",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程候选 / Spain 资格需确认 / 前数月可能需常驻 Milan",
    titleZh: "应届媒体设计师（品牌资产、社媒与产品视觉）",
    titleEs: "Graduate Media Designer",
    reason: "Bending Spoons 官方职位列表与三步申请表当前都列出 Graduate Media Designer，地点为 Milan、London、Madrid、Warsaw 或符合资格国家全远程，合同可为永久或固定期限。官方要求英语，并把社媒、产品视觉、品牌资产、演示与 AI 工作流列为媒体设计范围。",
    next: "它不是 Barcelona 固定岗，也不能因为 LinkedIn 显示 Barcelona 就当成本地 hybrid。申请前确认 Spain 是否在 remote eligible countries、雇佣实体、前几个月 Milan 到岗安排、差旅住宿支持及合同类型。",
    language: "英语熟练为明确要求；未列西语",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "应届 / Graduate route",
    changeType: "recovered-audit-9",
  },
  178: {
    direction: "digital",
    company: "Bending Spoons",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程候选 / Spain 资格需确认 / 前数月可能需常驻 Milan",
    titleZh: "媒体设计师（品牌资产、社媒、产品视觉与 AI）",
    titleEs: "Media Designer",
    reason: "官方职位页 69d588c142e4c7b7a3dd14ee 与申请表当前开放，地点明确写 Milan、London、Madrid、Warsaw 或符合资格国家全远程；职责覆盖 paid/organic social、产品视觉、品牌资产、演示与 AI 生产。英语熟练为要求，公开欧洲薪资从约 €54,346 起，相关经验高者可更高。",
    next: "这是一条可从西班牙核验的远程路线，不是 Barcelona 本地岗位。申请前必须确认 Spain remote 资格、雇佣实体、前数月 Milan 办公安排、合同类型与实际薪资；招聘测试可能耗时数小时。",
    language: "英语熟练为明确要求；未列西语",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "不限固定年限 / 高强度筛选",
    changeType: "recovered-audit-9",
  },
  930717: {
    direction: "brand",
    company: "Establishment Labs",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职实习 / 必须可签学校协议",
    titleZh: "初级项目协调与平面设计（70% 协调 / 30% 设计）",
    titleEs: "Junior Project Coordinator & Graphic Designer",
    reason: "当前 LinkedIn 雇主详情仍显示 Barcelona、hybrid 和申请入口。岗位约 70% 为 Jira 项目协调、跟进和运营，约 30% 为社媒图、画册、Banner、演示、模板、品牌资产和印刷文件，并要求一致执行品牌指南；流利英语明确，西语等为加分项。",
    next: "只有能够签正式实习协议、并接受以项目协调为主时才投。作品集与简历同时展示 Jira/流程组织、品牌指南执行、演示、画册与社媒适配，不要把它误当成纯平面正职。",
    language: "流利英语为明确要求；西语、法语、德语等为加分项",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "实习 / 必须可签 formal internship agreement",
    changeType: "recovered-audit-9",
  },
  930812: {
    direction: "brand",
    company: "Skyscanner",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 每周办公室约 2 天 / 全职",
    titleZh: "高级视觉设计师（全球品牌系统与 Campaign）",
    titleEs: "Senior Visual Designer",
    reason: "当前 LinkedIn 招聘编号 4451912620 与 Skyscanner 官方 requisition 8121646 均提供申请入口。完整 JD 已核验：Brand Studio 覆盖数字、社媒、印刷、OOH 与体验 Campaign，演进视觉设计系统，并负责艺术指导、字体和版式；要求约 7 年、Photoshop、Illustrator、Figma，After Effects 加分。",
    next: "方向非常匹配，但 7 年是实质资历门槛。只有作品集有系统级品牌识别、全球 Campaign、艺术指导与跨市场延展时才重点定制；英文申请并确认 Barcelona 办公节奏、薪资与工作许可。",
    language: "完整英文 JD；未列西语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 约 7 年",
    changeType: "recovered-audit-9",
  },
  920001: {
    direction: "brand",
    company: "PepsiCo / Alvalle",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场节奏待确认 / 全职",
    titleZh: "高级设计师（品牌识别、包装与产品架构）",
    titleEs: "Senior Designer — Food Ventures (Alvalle)",
    reason: "PepsiCo 官方职位 464555 与当前 LinkedIn 编号 4440194840 均提供申请入口。完整 JD 已核验：负责 Alvalle 全球品牌设计策略、产品架构、视觉识别、包装、创新流程和端到端上市执行；要求 4+ 年、多学科品牌经验、Adobe 与 Firefly，并有约 15% 出差。",
    next: "用英文提交品牌识别、包装、快消产品架构和端到端上市案例；确认西语、薪资、现场办公、出差地点、工作许可及该官方招聘编号在西班牙的合同主体。",
    language: "公开英文 JD 未列西语硬门槛；实际团队语言需确认",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 4+ 年 / 约 15% 出差",
    changeType: "recovered-audit-9",
  },
});

const round12DirectEvidenceUpdates = [
  {
    id: 914,
    status: "Official Greenhouse requisition 4235534009 was opened on 2026-08-12. It shows Apply for this job, a complete application form and Submit application. The page metadata says remote while the body says a Barcelona-based hybrid role, so the office cadence still needs confirmation.",
    contact: "Official detail/application: https://job-boards.greenhouse.io/trivelta/jobs/4235534009",
    links: ["https://job-boards.greenhouse.io/trivelta/jobs/4235534009"],
  },
  {
    id: 1107,
    status: "THRU's current jobs page was read in full on 2026-08-12. It lists Graphic Designer with Motion Skills, Barcelona onsite with partial Friday remote, full-time 40 hours, a three-month probation period, a 2026-09-15 closing date and direct email application.",
    contact: "Official detail: https://thrumotion.com/jobs/ ; application email: jobs@thrumotion.com",
    links: ["https://thrumotion.com/jobs/", "mailto:jobs@thrumotion.com"],
  },
  {
    id: 2942,
    status: "SLAPS' official careers board was opened on 2026-08-12 and says Open roles below. It lists Junior Graphic Designer in Barcelona as Full Time / Internship, and the role-specific application page currently exposes a Start control.",
    contact: "Official role board: https://brandingthatslaps.com/careers/ ; official application: https://brandingthatslaps.com/apply/?job=1679",
    links: ["https://brandingthatslaps.com/apply/?job=1679", "https://brandingthatslaps.com/careers/"],
  },
  {
    id: 134,
    status: "SLAPS' official careers board was opened on 2026-08-12 and lists Senior Art Director, Full Time, Barcelona under Open roles below. The role-specific application page currently exposes a Start control.",
    contact: "Official role board: https://brandingthatslaps.com/careers/ ; official application: https://brandingthatslaps.com/apply/?job=3525",
    links: ["https://brandingthatslaps.com/apply/?job=3525", "https://brandingthatslaps.com/careers/"],
  },
  {
    id: 977,
    status: "Injective's official Ashby requisition 01f72c59-0387-48db-b456-952f30bd0aa1 was opened on 2026-08-12. It shows Apply for this Job, Full time and Remote; Europe is an explicit eligible region. The brief asks for 3-5 years, fluent English and Europe timezone collaboration.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/injective/01f72c59-0387-48db-b456-952f30bd0aa1",
    links: ["https://jobs.ashbyhq.com/injective/01f72c59-0387-48db-b456-952f30bd0aa1"],
  },
  {
    id: 1255,
    opportunity: "Graphic Design Intern",
    status: "Gameloft's official SmartRecruiters form was opened on 2026-08-12. It shows Graphic Design Intern, Barcelona, Spain, a complete application form and Submit. The permanent/internship wording conflict is a contract caveat; the application form itself is open.",
    contact: "Official application: https://jobs.smartrecruiters.com/oneclick-ui/company/Gameloft/publication/d1350cc7-6efb-487c-8e05-0b0872679bd6?dcr_ci=Gameloft",
    links: ["https://jobs.smartrecruiters.com/oneclick-ui/company/Gameloft/publication/d1350cc7-6efb-487c-8e05-0b0872679bd6?dcr_ci=Gameloft"],
  },
  {
    id: 279,
    status: "DORTOKA's official jobs board and Graphic Design - Web detail were opened on 2026-08-12. The board lists DISEÑADOR GRÁFICO - DISEÑO WEB and provides a CV form; the detail also gives a direct email and Barcelona/Badalona office addresses.",
    contact: "Official detail: https://www.dortoka.com/es/disenador-grafico-web/ ; official board/form: https://www.dortoka.com/es/trabaja-con-nosotros/ ; email: dortoka@dortoka.com",
    links: ["https://www.dortoka.com/es/disenador-grafico-web/", "https://www.dortoka.com/es/trabaja-con-nosotros/", "mailto:dortoka@dortoka.com"],
  },
  {
    id: 25,
    status: "The original three-page Casa Asia PDF was downloaded, rendered and read in full on 2026-08-12. It is a Tea Lab Barcelona Chinese-Spanish Social Media & Content Creator / operations-partner brief with flexible hours, possible part-time work, negotiable pay and a direct email, but no closing date or live ATS.",
    contact: "Original PDF: https://static.casaasia.es/2026/06/Social-Media-Content-Creator-Chino-Espanol-Tea-Lab-Barcelona.pdf ; application email: han980813@gmail.com",
    links: ["https://static.casaasia.es/2026/06/Social-Media-Content-Creator-Chino-Espanol-Tea-Lab-Barcelona.pdf", "mailto:han980813@gmail.com"],
  },
  {
    id: 920,
    status: "The original Zhaopin detail was opened on 2026-08-12 and remains readable with an active direct-chat control. It is a Chengdu/Jinjiang part-time remote Brand Visual Designer role recruiting ten people, but it does not state Spain residency, overseas hiring or international payment eligibility.",
    contact: "Original Zhaopin detail: https://www.zhaopin.com/jobdetail/CC481983130J40920987415.htm",
    links: ["https://www.zhaopin.com/jobdetail/CC481983130J40920987415.htm"],
  },
];

for (const update of round12DirectEvidenceUpdates) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) Object.assign(item, update);
}

// Round 12's direct-evidence bundle still contains the pre-refresh
// DORTOKA/Remedy links. Reapply the newer Round 14 evidence after it so the
// final card buttons always point to the current requisitions.
for (const update of round14DirectEvidenceUpdates) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) Object.assign(item, update);
}

Object.assign(CURATED, {
  930834: {
    direction: "brand",
    company: "Linear",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe remote / Barcelona 可居住 / 全职",
    titleZh: "制作设计师（品牌、Web 与 Campaign 系统）",
    titleEs: "Production Designer (Europe)",
    reason: "Linear 官方 Ashby 的欧洲专用职位当前显示 Apply、Full time 和 Remote / Europe。岗位覆盖 landing page、广告 campaign、销售演示、产品发布物料、视觉语言延展、UI、motion 与 interaction；要求 2 年以上。",
    next: "用英文提交品牌系统、Web/landing、campaign、演示模板和 motion 案例；首轮确认 Spain payroll 或 contractor、薪资、税务福利和欧洲时区重叠。",
    language: "官方职位为英文，未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中初级 / 2 年以上",
    changeType: "round-12-new",
  },
  930835: {
    direction: "production",
    company: "西华论坛未公开雇主 / Barcelona 广告店",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职 / 店名与地址待核验",
    titleZh: "广告店全职平面设计师（7 月重复发布，待联系核验）",
    titleEs: "Diseñador/a gráfico/a para tienda de publicidad",
    reason: "同一联系人在西华论坛 2026-02-05 重发，并于华信网 2026-07-22 的 Barcelona 列表再次出现。内容为有经验、会 Illustrator、已有工作居留的全职平面设计师，旧帖写净薪 €1,410-1,600、上全保。它不是单次陈旧线索，但雇主名、地址、合同与当前空缺仍未公开。",
    next: "只先电话或微信核验店名、地址、当前是否仍招、合同、工时、薪资与材料接收人；未核验前不要发送证件或完整个人资料。",
    language: "中文联系人；要求基础西班牙语，并明确需要工作居留",
    languageKey: "chineseCheck",
    applicationMode: "basicSpanish",
    experienceKey: "mid",
    experienceLabel: "有经验 / 年限未公开 / 需电话确认",
    changeType: "refresh",
  },
  930836: {
    direction: "digital",
    company: "CrowdStrike",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Spain - Barcelona / remote / 全职",
    titleZh: "创意内容设计师（演示系统、视频与 Motion）",
    titleEs: "Creative Content Designer (Remote)",
    reason: "CrowdStrike 官方 Workday 职位 R29235 当前显示 Apply、Spain - Barcelona、Full time 和 Posted 6 Days Ago。职责覆盖演示模板、信息设计、视觉叙事、视频、动画、可复用设计系统和品牌一致性；要求 2 年以上与英语。",
    next: "优先用英文申请。作品集首页放演示系统、复杂信息可视化、品牌模板、短视频/motion 和多方协作案例；确认薪资、远程合同、福利与设备。",
    language: "英语熟练为明确要求；未列西班牙语门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中初级 / 2 年以上",
    changeType: "round-12-new",
  },
  930837: {
    direction: "digital",
    company: "Velvet Caviar",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / 全职 / €30k-40k",
    titleZh: "电商品牌平面设计师（社媒、Web 与 Motion）",
    titleEs: "Graphic Designer - eCommerce Fashion Brand",
    reason: "当前 LinkedIn 雇主详情明确写 Spain、100% remote、€30,000-40,000、2 年以上，并覆盖 email、社媒、网站、Amazon、广告、motion、Pantone、摄影修图和 AI 辅助生产；申请入口当前可用。",
    next: "用英文提交电商 campaign、社媒动静态、Web/Amazon、品牌版式、摄影修图和快速生产案例；确认西班牙雇佣主体、雇员/承包方式、带薪假和纽约团队时差。",
    language: "英文跨国协作；未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中初级 / 2 年以上",
    changeType: "round-12-new",
  },
  930838: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / permanent / 全职",
    titleZh: "高级平面设计师（健康与医疗品牌）",
    titleEs: "Senior Graphic Designer (Wellness and Healthcare)",
    reason: "Dragons Group 官方 Factorial 详情与申请表当前均可用，明确 Barcelona、hybrid、permanent、full-time。工作覆盖医疗健康数字内容、campaign、演示、营销物料、视觉系统与生产流程，并指导一名中级设计师。",
    next: "仅在具备高级平面和医疗、制药、健康或受监管行业案例时优先投递；用英文展示信息密集型版式、campaign 系统、演示、品牌一致性和生产质检。",
    language: "流利英语为明确要求；未列西班牙语硬门槛",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 医疗健康行业经验",
    changeType: "new",
  },
  930839: {
    direction: "brand",
    company: "CATORCE / DDB Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 办公室工作制 / 全职",
    titleZh: "视觉设计师（品牌与 Campaign）",
    titleEs: "Visual Designer",
    reason: "CATORCE 官方 Greenhouse 职位 4797510008 当前有 Apply、完整表单和可提交入口。岗位要求 1 年以上代理公司平面经验，负责 branding、campaign、活动、数字 activation 与演示，是本轮最贴近目标的 Barcelona 视觉设计岗之一。",
    next: "若英语和西班牙语都能工作，立即用双语或英文申请；作品集突出品牌识别、campaign 延展、活动物料、数字内容、版式与 Figma，首轮确认办公室天数和签证支持。",
    language: "流利英语和西班牙语均为明确硬要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 1 年以上代理公司经验",
    changeType: "new",
  },
  930840: {
    direction: "digital",
    company: "Zurich Insurance",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 工作制待确认",
    titleZh: "创意策略师（社交内容与品牌平台）",
    titleEs: "Creative Strategist",
    reason: "Zurich 官方 Barcelona 职位当前显示 Apply now，要求约 4 年经验和高水平英语；工作是社交优先的内容领域、叙事、创意 brief、概念卡和平台原则。它与品牌思考相关，但正文明确偏策略，不是主要执行 VI 的设计岗。",
    next: "只在作品集中有 campaign 策略、社交概念、内容框架和清晰 brief 时投递；不要把它排在可直接发挥平面/VI 能力的岗位之前。",
    language: "高水平英语为明确要求；西班牙语要求未公开",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 约 4 年",
    changeType: "new",
  },
  930841: {
    direction: "brand",
    company: "Lenskart.com",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / onsite / 全职",
    titleZh: "欧洲视觉陈列负责人（零售 VI 系统）",
    titleEs: "Head of Visual Merchandising, Europe",
    reason: "当前雇主详情有 Easy Apply，岗位从零搭建欧洲零售视觉系统，覆盖门店开业、布局、设施、灯光、标识、橱窗、指南、SOP、审核与季节性 campaign，品牌系统相关性很高。",
    next: "这是 10-15 年以上且至少 5 年领导经验的负责人岗位，只作为资深跨度机会保留；若资历不够，不要挤占可达设计师岗位的申请时间。",
    language: "语言能力只写为加分项；实际团队工作语言待确认",
    languageKey: "unknown",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "负责人 / 10-15 年以上 / 5 年领导经验",
    changeType: "new",
  },
  930842: {
    direction: "motion",
    company: "Voodoo",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe remote / CET ±3h / Spain 合同待确认",
    titleZh: "高级技术 UI 与动态设计师",
    titleEs: "Senior Technical UI & Motion Designer",
    reason: "Voodoo 官方 Ashby 详情与申请表当前可提交，覆盖 technical UI motion、Unity 实现、交互设计与可复用动态系统，要求 4 年以上并可在 CET ±3 小时远程工作。它是游戏 UI 技术动效，不是品牌识别岗。",
    next: "只有具备 Unity、UI 动效系统、交互和 After Effects/Spine/Rive 深度时投递；先确认 Spain 合同、薪资和技术测试，避免把它误当成品牌 motion。",
    language: "英语工作；未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上 / Unity 技术门槛",
    changeType: "new",
  },
  930843: {
    direction: "digital",
    company: "EQUIPO SINGULAR",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 上午实习",
    titleZh: "平面设计与视频青年人才实习",
    titleEs: "Jóvenes Talentos Diseño Gráfico y Vídeo",
    reason: "EQUIPO SINGULAR 官方 TalentClue 页面当前可报名，面向学生或毕业年级，涉及 Illustrator、Photoshop、Slides、Figma、AI 工具和基础 Premiere/CapCut/After Effects，以及品牌、编辑、数字和社交内容。",
    next: "仅在学校或大学可以签实习协议时申请；先确认补贴、时长、每周天数、转正可能和主要工作语言，避免把实习协议岗当作正常全职。",
    language: "西班牙语页面；具体语言等级未公开",
    languageKey: "unknown",
    applicationMode: "spanish",
    experienceKey: "intern",
    experienceLabel: "学生/毕业年级 / 必须签实习协议",
    changeType: "new",
  },
  930844: {
    direction: "brand",
    company: "Synthesia",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Europe remote / London 优先 / 全职 / 需出差",
    titleZh: "高级体验式品牌设计师",
    titleEs: "Senior Brand Designer, Experiential",
    reason: "Synthesia 官方 Ashby 详情与表单当前可提交，负责活动身份、实体空间、数字触点、motion/screen 内容和可扩展生产系统；地点接受欧洲远程，但 London 或 hub 优先，并需欧洲、美国等地出差。",
    next: "用英文提交体验式身份、展会/活动、空间图形、屏幕动效和跨供应商落地案例；投递前确认 Spain 雇佣或 contractor 可行性、出差频率与预算。",
    language: "英文国际团队；西班牙语未列为要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6 年以上 / 出差要求",
    changeType: "new",
  },
  914: {
    ...CURATED[914],
    statusKey: "live",
    reason: "Trivelta 官方 Greenhouse 职位 4235534009 当前有 Apply、完整表单和 Submit application。岗位要求 1-3 年，覆盖品牌、数字、社媒、印刷、活动与 landing page，英语工作；正文明确 Barcelona-based hybrid，但页面元数据写 remote。",
    next: "可以立即投递。用英文提交品牌系统与跨数字/印刷/社媒的延展案例，并在表单或首轮确认 Barcelona 到岗频率、合同主体与薪资。",
    changeType: "round-12-promoted",
  },
  1107: {
    ...CURATED[1107],
    statusKey: "live",
    reason: "THRU 当前 jobs 页完整列出 Graphic Designer with Motion Skills，Barcelona 现场为主、周五部分远程、40 小时全职、3 个月试用，截止 2026-09-15，并提供 jobs@thrumotion.com。",
    next: "在截止日前用英文发送 CV、品牌/motion 作品集和简短求职信；重点展示动态 VI、guidelines、After Effects、Adobe 与 Figma，并确认试用期后的永久合同和薪资。",
    changeType: "round-12-promoted",
  },
  2942: {
    ...CURATED[2942],
    statusKey: "live",
    reason: "SLAPS 官方 careers 页当前写 Open roles below，并列出 Barcelona 的 Junior Graphic Designer；职位标注 Full Time / Internship，专属申请页 ?job=1679 当前有 Start。",
    next: "可从官方表单投递，但先在申请中确认究竟是正式全职、实习还是两条路径。作品集突出品牌识别、字体、版式、概念和跨媒介延展。",
    changeType: "round-12-promoted",
  },
  134: {
    ...CURATED[134],
    statusKey: "live",
    reason: "SLAPS 官方 careers 页当前在 Open roles below 中列出 Senior Art Director、Full Time、Barcelona；专属申请页 ?job=3525 当前有 Start。",
    next: "只有资历确实达到 senior art direction 时投递；用完整品牌策略、视觉系统、campaign 概念和团队指导案例申请，并确认薪资与到岗节奏。",
    changeType: "round-12-promoted",
  },
  977: {
    ...CURATED[977],
    statusKey: "live",
    reason: "Injective 官方 Ashby 职位当前显示 Apply for this Job、Full time、Remote，并明确 Europe eligible。职责覆盖品牌识别、网站/landing、campaign、设计系统和 Figma；要求 3-5 年、流利英语与欧洲时区协作。",
    next: "用英文提交身份系统、Web/landing、campaign 和可扩展组件案例；先确认 Spain 雇佣或 contractor、薪资币种、税务和时区。",
    changeType: "round-12-promoted",
  },
  1255: {
    ...CURATED[1255],
    statusKey: "live",
    reason: "Gameloft 官方 SmartRecruiters 当前打开 Barcelona 的 Graphic Design Intern 完整申请表并可 Submit，说明岗位仍接收申请；职位正文中 permanent 与 internship 的措辞冲突仍需确认。",
    next: "如果具备实习协议资格，可以从官方表单投递；在首轮确认合同究竟是实习还是长期岗位、补贴/薪资、工时与学校协议要求。",
    changeType: "round-12-promoted",
  },
  279: {
    ...CURATED[279],
    statusKey: "live",
    reason: "DORTOKA 官方招聘板当前列出 DISEÑADOR GRÁFICO - DISEÑO WEB，并提供 CV 表单；职位详情覆盖 Web/mobile、平面、插画、Adobe、AE/Premiere、CSS/HTML 与 WordPress，并列出 Barcelona/Badalona 地址和邮箱。",
    next: "用西语或双语提交 Web、平面、插画、motion 和 WordPress 案例；确认实际办公点、薪资、合同、工作语言与设计/前端职责比例。",
    changeType: "round-12-promoted",
  },
  25: {
    ...CURATED[25],
    statusKey: "verify",
    reason: "原始 3 页 PDF 已完整下载、渲染并逐页核验：这是 Tea Lab Barcelona 的中文/西语社媒内容与运营合伙人机会，含门店运营、小红书/Instagram/TikTok、短视频、campaign、活动和 AI 视频；要求 30 岁以下，薪资面议。PDF 无截止日、无 ATS，且已超过两个月。",
    next: "只先发简短邮件确认仍招、实际雇佣关系、工时、薪资、门店运营占比和年龄条件；确认后再发送 CV、社媒账号和短视频/品牌内容作品。",
    changeType: "round-12-reverified",
  },
  920: {
    ...CURATED[920],
    statusKey: "verify",
    reason: "智联招聘原始详情当前仍可读并有立即沟通：成都锦江、兼职、招 10 人，职责覆盖社媒、网站、营销物料、品牌 VI 一致性与 PS/AI/InDesign/Canva。但正文未说明西班牙常住者、海外签约或跨境付款可行。",
    next: "只先在智联直接询问是否接受西班牙常住者、合同主体、跨境付款、税务、时区和数据处理；得到书面确认前不要按欧洲远程正式机会投递。",
    changeType: "round-12-reverified",
  },
  1239: {
    ...CURATED[1239],
    statusKey: "closed",
    reason: "原始 LinkedIn 职位 4377161837 已明确显示 Ya no se aceptan solicitudes；页面约 6 个月前发布。",
    next: "移入关闭/历史区，不再投递；仅在雇主发布新招聘编号时重新建卡。",
    changeType: "round-12-closed",
  },
  216: {
    ...CURATED[216],
    statusKey: "closed",
    reason: "旧 Linear Web & Brand 的 Ashby 职位 4f10… 已显示 Job not found，官方职位板也不再列出该岗位。当前新的 Production Designer (Europe) 已用独立卡片 930834 收录。",
    next: "旧卡保留历史，不再投递；使用新的欧洲专用官方职位卡。",
    changeType: "round-12-closed",
  },
  930720: {
    ...CURATED[930720],
    statusKey: "closed",
    reason: "原始 LinkedIn 职位 4403400813 已明确显示 Ya no se aceptan solicitudes。",
    next: "移入关闭/历史区；不再按当前机会显示。",
    changeType: "round-12-closed",
  },
  206: {
    ...CURATED[206],
    statusKey: "closed",
    reason: "Semrush 官方 Workday 路由当前明确显示 The page you are looking for doesn't exist，无法再进入申请流程。",
    next: "移入关闭/历史区；只在 Semrush 官方发布新招聘编号时重建卡片。",
    changeType: "round-12-closed",
  },
  183: {
    ...CURATED[183],
    statusKey: "closed",
    reason: "Ogilvy 原始 LinkedIn 职位当前明确显示 Ya no se aceptan solicitudes。",
    next: "移入关闭/历史区，不再投递。",
    changeType: "round-12-closed",
  },
  239: {
    ...CURATED[239],
    statusKey: "closed",
    reason: "Havas 原始 LinkedIn 职位当前明确显示 Ya no se aceptan solicitudes。",
    next: "移入关闭/历史区，不再投递。",
    changeType: "round-12-closed",
  },
  1301: {
    ...CURATED[1301],
    statusKey: "closed",
    reason: "The Colour Monster 页面虽然仍显示 actively reviewing 的模板文案，但原始职位同时明确写 Ya no se aceptan solicitudes；直接关闭状态优先。",
    next: "移入关闭/历史区，不再投递；如出现新的招聘编号再重新核验。",
    changeType: "round-12-closed",
  },
  1294: {
    ...CURATED[1294],
    statusKey: "closed",
    reason: "IMAGINA 官方 careers 页当前只提供没有合适职位时发送通用 CV 的入口，不存在可核验的 Graphic Designer 具体 vacancy。",
    next: "移入历史/通用人才库，不计作当前岗位；如愿意可单独发送 speculative application。",
    changeType: "round-12-closed",
  },
  1241: {
    ...CURATED[1241],
    statusKey: "closed",
    reason: "Cal Fruitós 原始 LinkedIn 职位当前明确显示 Ya no se aceptan solicitudes，且约 4 个月前发布。",
    next: "移入关闭/历史区，不再投递。",
    changeType: "round-12-closed",
  },
});

Object.assign(CURATED, {
  930845: {
    direction: "digital",
    company: "Omnicom Health / Remedy Edge",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 每周到岗 3 天 / freelance",
    titleZh: "自由职业 PowerPoint 视觉设计师",
    titleEs: "Freelance PowerPoint Specialist",
    reason: "官方 Greenhouse 5233982008 当前有 Apply、完整申请表和 Submit。岗位负责复杂医学、科学与商业内容的视觉叙事、信息层级、模板和视觉标准，要求 2 年以上、PowerPoint 高阶样稿、作品集与工作英语。",
    next: "用英文提交演示系统、复杂信息可视化和模板案例；先确认日薪、项目时长、付款周期、每周三天到岗的具体日期以及西语使用比例。",
    language: "工作英语为明确要求；西班牙语要求未公开",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上 / freelance",
    changeType: "round-14-new",
  },
  930846: {
    direction: "brand",
    company: "Kraken / Breakout Prop",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 明确可申请 / remote / 全职",
    titleZh: "网页与品牌设计师",
    titleEs: "Web and Brand Designer",
    reason: "Kraken 官方欧洲 Ashby 职位 3096… 的 eligible locations 明确包含 Spain。职责覆盖官网、landing、转化流程、campaign、社媒、品牌指南、组件库、资产工具包及 AI 模板/提示/guardrails，匹配度很高；要求 5 年以上。",
    next: "用英文提交网站系统、landing 转化、campaign 延展、品牌 guidelines、组件库和 AI 辅助生产案例；确认 Spain 雇佣主体、薪资、加密行业合规要求与工作时区。",
    language: "英文国际远程岗位；未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "round-14-new",
  },
  930847: {
    direction: "brand",
    company: "Xapo Bank",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "100% remote / Work from anywhere / Spain 合同需确认",
    titleZh: "毕业生视觉设计师（品牌与 Motion）",
    titleEs: "Visual Designer Graduate",
    reason: "Xapo 官方 Greenhouse 7800947003 当前可提交，12 个月毕业生项目面向 0-1 年经验，个人、学校或自由职业作品集都接受。工作包括品牌/营销资产、campaign、广告、宣传物、motion、产品 walkthrough 与视觉识别维护。",
    next: "这是本轮最值得尝试的初级远程岗之一。英文作品集放品牌延展、campaign、短动效和产品演示；投递前先确认 Barcelona 常住者能否合规签约、付款、报税和享受福利。",
    language: "英文远程团队；未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "毕业生 / 0-1 年 / 12 个月项目",
    changeType: "round-14-new",
  },
  930848: {
    direction: "brand",
    company: "Finary",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EU/UK remote / CET ±2h / 每周约 2-3 天 freelance",
    titleZh: "自由职业高级品牌设计师",
    titleEs: "Freelance Senior Brand Designer",
    reason: "Finary 官方 Ashby 当前可申请，明确接受 EU/UK、要求英语，公开日薪 EUR350-550。工作覆盖 paid ads、社媒、YouTube、email、landing、图标/插画、motion、品牌系统和 AI 工具，但属于高级兼职自由职业。",
    next: "用英文提交可扩展身份系统、增长素材、社媒/email/landing、插画或 motion 与 AI workflow；确认项目周期、每周排期、Spain 税务/发票、付款周期和知识产权条款。",
    language: "英语为明确要求；未列西班牙语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / freelance / 每周 2-3 天",
    changeType: "round-14-new",
  },
  279: {
    ...CURATED[279],
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Badalona / 现场全职",
    titleZh: "平面与 Web 设计师",
    titleEs: "Diseñador/a gráfico/a - diseño web",
    reason: "新 LinkedIn 雇主招聘编号 4448026093 当前显示 Barcelona、1 周前发布、现场全职，并可跳转公司网站申请；DORTOKA 官方详情、招聘板/CV 表单和邮箱也都可用。职责含 logo、branding、campaign、网站、目录、UX/UI、WordPress、电商及基础前端。",
    next: "用西语或双语提交平面、品牌、Web、插画与 motion 案例；确认具体办公点、薪资、合同、工作语言，以及设计与 HTML/CSS/WordPress 的实际占比。",
    language: "西语招聘页；未公开语言等级，现场沟通能力需确认",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上",
    changeType: "round-14-promoted",
  },
  160: {
    ...CURATED[160],
    statusKey: "closed",
    reason: "当前 LinkedIn 雇主职位 4443321807 已明确显示 Ya no se aceptan solicitudes。",
    next: "移入关闭/历史区；不要再通过旧镜像投递，只有出现新招聘编号时重新建卡。",
    changeType: "round-14-closed",
  },
  930715: {
    ...CURATED[930715],
    statusKey: "closed",
    reason: "Sanofi 官方 Workday 招聘编号 R2834888 当前明确显示 The page you are looking for doesn't exist；旧 LinkedIn 页面不再构成有效投递入口。",
    next: "移入关闭/历史区；只有 Sanofi 官方 ATS 出现新招聘编号时重新建卡。",
    changeType: "round-14-closed",
  },
  958: {
    ...CURATED[958],
    statusKey: "live",
    reason: "Omnicom Health 官方 Greenhouse 5207339008 当前有 Apply、完整申请表和 Submit。Barcelona 带薪 6 个月全职实习覆盖编辑、landing/banner、Web、社媒、logo 与品牌指南；必须能签学校/大学实习协议，并要求 Adobe 与英语。",
    next: "只有能签实习协议时投递；英文作品集放品牌指南、logo、编辑、Web 和社媒延展，并确认补贴、到岗节奏与转正可能。",
    changeType: "round-14-reverified",
  },
});

Object.assign(CURATED, {
  930705: {
    direction: "brand",
    company: "MANGO",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Palau-solità i Plegamans / Barcelona 省 / 全职",
    titleZh: "时尚艺术指导（品牌识别与 360 Campaign）",
    titleEs: "FASHION ART DIRECTOR",
    reason: "MANGO 官方 Workday JR128235 当前仍有 Apply 路由。职责直接覆盖品牌视觉识别、360 概念、橱窗与 VM、电商、编辑 Campaign、数字与社媒触点；要求 4–5 年时尚 Art Direction、流利英语，西语流利为优先项。",
    next: "作为中高位冲刺岗保留，不伪装成初级岗。先确认 Palau 到岗频率、合同、薪资和申请表状态；作品集突出时尚品牌系统、Campaign、零售空间/橱窗、电商和后期制作。",
    language: "流利英语为明确要求；流利西语优先但未写成硬性要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 4–5 年时尚 Art Direction",
    changeType: "round-15-promoted",
  },
  1327: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职",
    titleZh: "医药与健康品牌中级平面设计师",
    titleEs: "Mid Graphic Designer – Wellness & Healthcare",
    reason: "官方 Factorial 308056 当前有 Apply now。岗位负责数字 Campaign、社媒、网站、演示与医药营销物料，重点是信息清晰、品牌一致性和受监管内容的准确执行；英语流利是明确要求，其他语言只是加分。",
    next: "补回此前漏掉的正式本地岗位。英文作品集突出排版、信息层级、品牌 guideline 执行、跨渠道适配和复杂信息可视化；投递前确认薪资、hybrid 节奏和工作许可。",
    language: "流利英语必需；其他语言为加分项",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 健康医药方向",
    changeType: "round-15-promoted",
  },
  397: {
    direction: "motion",
    company: "RESIDENCIAL TIBIDABO / Grupo RV",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Gran Via / 现场全职",
    titleZh: "设计助理（平面、Branding 与 Motion）",
    titleEs: "Asistente de Diseño",
    reason: "2026-08-12 当前 JOB TODAY 原始页 K12Now 显示 Apply now、雇主已验证且两小时前活跃。工作含海报、宣传物、branding、数字内容、视频、motion 和多格式适配；项目经验可来自学习、自由职业或实习。",
    next: "这是新鲜且相对初级友好的本地路线，但西语和英语流利均为硬门槛。用平面、品牌延展、短视频和 motion 小案例申请，并先问清薪资、合同、工时和工作许可。",
    language: "流利西班牙语和英语均为明确要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 学习、实习或 freelance 项目可证明",
    changeType: "round-15-reactivated",
  },
  1274: {
    direction: "brand",
    company: "BRUTALIA",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sarrià-Sant Gervasi / 偶尔去 Madrid",
    titleZh: "平面与品牌视觉设计师",
    titleEs: "Diseñador/a Gráfico/a",
    reason: "原始 JOB TODAY EG26MZ 当前显示 Apply，工作地明确在 Barcelona，并要求 Barcelona 居住。职责是提升品牌视觉世界、Campaign、内容和整体一致性；要求 2 年以上与作品集，公开年薪 EUR20,000–24,000。",
    next: "已纠正旧数据把它错放 Madrid 的问题。正文写 freelance collaboration、平台却写 full-time，且岗位较旧；投递前必须确认合同/开票形式、工时、付款、差旅和 Madrid 出行费用。",
    language: "西语招聘页与本地团队环境；未公开语言等级",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上 / 合同形式待确认",
    changeType: "round-15-corrected",
  },
  930849: {
    direction: "brand",
    company: "Andilana",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Plaça Reial / 现场 40 小时全职",
    titleZh: "初级平面与视觉传播设计师",
    titleEs: "Diseñador/a Gráfico/a Junior – Comunicación",
    reason: "JOB TODAY 原始页当前有 Apply now。岗位参与视觉识别、数字/印刷物料、修图和完稿，面向约 0–2 年初级设计师；但母语级加泰语、良好西语和英语、正规设计学历证明都是明确要求。",
    next: "只有满足加泰语与学历硬门槛时才投。作品集放视觉识别、印刷/数字适配、修图和完稿；先确认薪资、合同与实际日常工作语言。",
    language: "母语级加泰语；良好西语和英语均要求",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 约 0–2 年 / 正规学历硬门槛",
    changeType: "round-15-new",
  },
  930850: {
    direction: "brand",
    company: "10x Team / AI Lab pool",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "EU/UK remote / 每周 8–20 小时 / 非传统 vacancy",
    titleZh: "视觉设计 AI 训练专家池（非固定岗位）",
    titleEs: "Visual Designer - AI Trainer",
    reason: "官方 Ashby 页面可申请，EU/UK remote、EUR61–100/小时和 8–20 小时均公开；但官方明确说明 AI Lab roles 不是有固定开始日期的传统招聘，审核通过后可能等待数月才匹配项目。",
    next: "只保留在待复核/项目池，不计入当前可投主列表。若申请，先确认 Spain 税务与付款、最低工时、身份核验、评估是否付费、数据保密和实际项目是否已存在。",
    language: "英语远程评估流程",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级专家 / freelance pool / 非固定开工",
    changeType: "round-15-review-only",
  },
});

// Round 16: preserve the exact current employer pages and distinguish a
// readable opportunity from a confirmed application route. This supersedes
// the older Colour Monster closure snapshot without promoting it to live.
const colourMonsterCurrent = allData.find((item) => Number(item.id) === 1301);
if (colourMonsterCurrent) {
  Object.assign(colourMonsterCurrent, {
    section: "2026-08-12 Round 16 original-detail audit",
    source: "The Colour Monster / current LinkedIn employer detail",
    opportunity: "Diseñador/a gráfico/a de marca y sistemas visuales",
    fit: "Exact Barcelona identity-system role covering brand manuals, guidelines, templates, grids, typography, packaging, licensing, editorial, digital and exhibitions",
    location: "Barcelona city; onsite; full-time; Spain work authorisation required and no visa support",
    status: "Current LinkedIn employer detail 4446592473 was opened again on 2026-08-12. The complete role text is readable and the current page no longer contains the prior 'Ya no se aceptan solicitudes' marker. It provides a direct-message route to the publisher and asks for a CV plus portfolio, but the public page does not expose a separate application form, so the role remains verify-first.",
    contact: "Current original detail and publisher-message route: https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-de-marca-y-sistemas-visuales-at-the-colour-monster-4446592473",
    analysis: "The work itself is one of the closest VI matches in the library, but native or bilingual Catalan and Spanish, professional English, at least three years of identity-system experience and existing Spain work authorisation are explicit hard gates. Confirm that applications are still being accepted before tailoring a portfolio.",
    links: ["https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fico-a-de-marca-y-sistemas-visuales-at-the-colour-monster-4446592473"],
  });
}

Object.assign(CURATED, {
  930851: {
    direction: "brand",
    company: "Luppa",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市区 / 全职 / 每周 1 天居家",
    titleZh: "高级平面与品牌视觉设计师",
    titleEs: "Diseñador/a Gráfico/a Senior",
    reason: "当前 LinkedIn 雇主原页完整可读且没有关闭提示。岗位直接负责 Luppa 视觉表达的演进与一致性，把品牌叙事转成可扩展的视觉系统，并覆盖社媒、官网、邮件、marketplace、B2B/B2C 和授权系列；要求 5 年以上、高水平英语、Adobe/Figma 与 AI 工作流。公开页只提供联系发布者及“发送 CV 和作品集”的说明，未暴露独立 ATS 或邮箱，因此先标待确认。",
    next: "先通过原页联系发布者 Angie Besoain，确认仍收件及 CV/作品集的准确入口；再用英文提交品牌系统、数字触点统一、授权/零售、数据迭代和 motion 案例。确认薪资、合同、办公节奏、西语要求与工作许可。",
    language: "高水平英语为明确要求；西班牙语或加泰语要求未公开",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "round-16-new-verify",
  },
  930852: {
    direction: "brand",
    company: "Newlink Spain",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 永久全职 / 每周 3 天现场 + 2 天远程",
    titleZh: "品牌传播与平面设计师",
    titleEs: "Diseñador gráfico",
    reason: "当前 LinkedIn 雇主原页显示 Solicitar，并完整公开永久合同和 3+2 hybrid。职责含品牌传播、identity adaptation、campaign、活动、海报与横幅、演示、newsletter、社媒、motion 和视频；要求 2–4 年、加泰语 C1、英语 B2 及社媒作品集。",
    next: "只有加泰语 C1 真实满足时再投。作品集突出品牌识别延展、活动与多格式 campaign、PowerPoint 信息层级、社媒动静态和完稿；提交前确认薪资、西语日常比例、工作许可与试用期。",
    language: "加泰语 C1 和英语 B2 为明确硬门槛；本地沟通环境",
    languageKey: "spanish",
    languageHard: true,
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    changeType: "round-16-new-live",
  },
  1301: {
    ...CURATED[1301],
    direction: "brand",
    company: "The Colour Monster",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场全职 / 当前投递入口待确认",
    titleZh: "品牌识别与视觉系统设计师",
    titleEs: "Diseñador/a gráfico/a de marca y sistemas visuales",
    reason: "2026-08-12 再次打开当前招聘编号 4446592473：完整 JD 可读，且页面已不再出现此前的停止接收申请提示。工作内容高度匹配 VI，包括视觉识别、brand manual、guidelines、模板、网格、字体、包装、授权、编辑、数字和展览；但公开页只给发布者私信与 CV/portfolio 说明，没有独立申请表，故恢复为待确认而不是直接可投。",
    next: "先私信发布者 Anna Llenas 确认仍接收申请和准确入口。只有加泰语/西语达到母语或双语、英语达到专业水平且已有西班牙工作许可时再投入定制作业；作品集必须有真实视觉系统和品牌手册。",
    language: "加泰语与西语须母语或双语；英语须专业工作水平",
    languageKey: "spanish",
    languageHard: true,
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上 / 三语硬门槛",
    changeType: "round-16-reactivated-verify",
  },
});

// Round 17: current search indexes were checked against the actual employer
// detail or ATS state. Preserve stale search results as history, and keep the
// newly found print-production role outside the brand-visual main ledger.
const round17Dm = allData.find((item) => Number(item.id) === 897);
if (round17Dm) {
  Object.assign(round17Dm, {
    section: "2026-08-12 Round 17 original-detail audit",
    status: "Closed/history: the original LinkedIn detail 4439785435 was opened again on 2026-08-12 and redirects to LinkedIn's expired-job search. A fresh-looking search snippet is not a current application route.",
    analysis: "Keep the former Barcelona toy and children's-promotion packaging brief as history. Do not apply through the expired URL or count its September start date as current; restore only after D&M publishes a new named employer detail with a working application control.",
  });
}

const round17Codeway = allData.find((item) => Number(item.id) === 871);
if (round17Codeway) {
  Object.assign(round17Codeway, {
    section: "2026-08-12 Round 17 original-detail audit",
    status: "Closed/history: the Codeway Brand Graphic Designer search result still exposes the old description, but the official Ashby posting API was queried on 2026-08-12 and no longer lists requisition bed207b4-0e8a-4bc2-a179-b3a6b9a89afe. The original LinkedIn detail also no longer accepts applications.",
    analysis: "Retain the exact English-friendly Barcelona brand-role brief as a high-value history benchmark, but do not reactivate it from search cache. Reconsider only when Codeway publishes a new listed Ashby requisition and application URL.",
  });
}

Object.assign(CURATED, {
  897: {
    ...CURATED[897],
    statusKey: "closed",
    changeType: "round-17-closed-recheck",
  },
  871: {
    ...CURATED[871],
    statusKey: "closed",
    changeType: "round-17-official-api-closed",
  },
  930853: {
    direction: "production",
    company: "Estudi Gràfic El Prat",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "El Prat de Llobregat / onsite / permanent full-time",
    titleZh: "印前与数码印刷生产设计",
    titleEs: "Diseñador-preimpresor",
    reason: "当前 JOIN 雇主详情有 Aplicar ahora、正式申请表、无限期全职合同和 El Prat 地点；职责以印前、数码/大幅面印刷、材料参数、质量控制和生产监督为主，不是品牌 VI。页面同时写出 EUR14,000–16,000 与 EUR21,000–26,000 两组冲突年薪。",
    next: "仅作为本地制作线备选；先书面确认真实薪资、工时、工作语言、设计与机器/生产占比、是否需要带人，再决定是否投递。它不进入品牌视觉主排名。",
    language: "未公开；本地印刷生产环境预计需要可工作的西语或加泰语，必须先确认",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "要求既有印前或数码印刷生产经验",
    changeType: "round-17-review-library-only",
  },
});

// Keep the Round 18 current-detail verdicts after all legacy metadata blocks.
Object.assign(CURATED, {
  117: {
    ...CURATED[117],
    statusKey: "live",
    changeType: "round-18-current-refresh",
  },
  308: {
    ...CURATED[308],
    statusKey: "live",
    changeType: "round-18-official-refresh",
  },
});

// Round 20 final verdicts are intentionally placed after every legacy metadata
// block so stale search snapshots cannot restore the two closed high-rank cards.
Object.assign(CURATED, {
  1245: {
    ...CURATED[1245],
    direction: "brand",
    company: "Kilograph",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 原始职位已关闭",
    titleZh: "高级平面设计师 / 艺术指导—已停止接收申请",
    titleEs: "Senior Graphic Designer / Art Director (closed)",
    reason: "登录后打开原始 LinkedIn 职位 4437390159，页面明确显示 Ya no se aceptan solicitudes。正文保留 careers@kilograph.com 只能证明历史投递方式，不能覆盖职位关闭状态。",
    next: "保留品牌系统、字体、数字/印刷延展与建筑视觉叙事要求作为作品集参考；只有 Kilograph 发布新职位编号或明确确认重新收件时才恢复。",
    language: "历史岗位要求流利英语；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "原要求 3–5+ 年 / 当前已关闭",
    changeType: "round-20-closed-correction",
  },
  930851: {
    ...CURATED[930851],
    direction: "brand",
    company: "Luppa",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市区 / 原始职位已关闭",
    titleZh: "高级平面与品牌视觉设计师—已停止接收申请",
    titleEs: "Diseñador/a Gráfico/a Senior (closed)",
    reason: "重新打开登录后的 LinkedIn 原始职位 4440135299，页面明确显示 Ya no se aceptan solicitudes。联系发布者和正文中的“发送 CV/作品集”不能覆盖关闭标记。",
    next: "保留品牌视觉系统、授权 IP、B2B/B2C、多渠道数字延展和数据迭代要求作为作品集参考；等待新职位编号或雇主重新开放。",
    language: "历史岗位要求高水平英语；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "原要求 5+ 年 / 当前已关闭",
    changeType: "round-20-closed-correction",
  },
  930859: {
    ...CURATED[930859],
    direction: "brand",
    company: "Europastry",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 当前无命名职位",
    titleZh: "平面设计师（品牌、包装、印刷与动态）—旧索引已失效",
    titleEs: "Graphic Designer (stale/closed)",
    reason: "登录后的 LinkedIn 精确搜索已找不到 Europastry Graphic Designer，雇主人才页也没有命名岗位；目前只剩旧索引和第三方存档正文，不能继续列为待投或待确认机会。",
    next: "保留为雇主监测词；只有 Europastry 官方人才页或新的 LinkedIn 职位编号出现后才重新加入复核区。",
    language: "旧 JD 写英语 B2；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "旧要求 5+ 年 / 当前无职位",
    changeType: "round-20-stale-correction",
  },
  535: {
    ...CURATED[535],
    direction: "brand",
    company: "Supabase",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / 官方明确从任何地点招聘",
    titleZh: "品牌设计师（开发者品牌、活动与多渠道视觉）",
    titleEs: "Brand Designer",
    reason: "Supabase 官方 Ashby 当前显示 Brand Designer、Remote、Full time 和 Apply for this Job，并明确写 We hire globally、work from anywhere；职责覆盖视觉叙事、演示、印刷、YouTube、会议活动、社媒与品牌一致性。",
    next: "用英文作品集突出技术内容视觉化、品牌规范、演示系统、会议/活动、印刷与数字资产；首轮确认薪资、西班牙合同/发薪方式、福利适用范围和年度线下聚会。",
    language: "英语异步全球团队；未列西语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "公开 JD 未写固定年限 / 看作品集与全球协作经验",
    changeType: "round-20-promoted-live",
  },
  930860: {
    direction: "brand",
    company: "Kraken / Krak",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 明确可申请 / 远程全职",
    titleZh: "高级品牌设计师（品牌刷新、视觉系统、Motion 与 3D）",
    titleEs: "Sr Brand Designer - Krak",
    reason: "Kraken 官方 Ashby 当前明确列出 Spain、Remote、Full time 和 Apply for this Job，并说明无单独截止日时持续收件。岗位端到端负责视觉识别、艺术指导、网站/发布/CRM/付费与自然社媒、App Store、活动、Motion、3D、插画、Figma 组件库和本地化自动化。",
    next: "仅在能支撑 5+ 年品牌设计与 fintech/高水平代理经验时优先投；英文材料突出身份系统、品牌刷新、Figma 模板、跨市场 campaign、Motion/3D/插画和 AI 生产流程，并确认薪资、Spain 合同和时区。",
    language: "英语远程岗位；未列西语要求",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5+ 年 / fintech 或顶级代理经验",
    changeType: "round-20-new-live",
  },
  930861: {
    direction: "brand",
    company: "Primer.io",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "原为远程 / 官方职位已移除",
    titleZh: "品牌设计师—官方 ATS 已显示 Job not found",
    titleEs: "Brand Designer (closed)",
    reason: "搜索索引仍保留完整品牌系统正文，但 Primer 官方 Ashby requisition 5869d2db-b445-4676-9392-d95a3973500f 当前明确显示 Job not found。",
    next: "只保留 web、campaign、产品营销、社媒、活动与销售物料的历史作品集要求；等待新的官方 requisition。",
    language: "历史英语远程岗位；当前无有效入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "历史高级岗位 / 当前已关闭",
    changeType: "round-20-closed-discovery",
  },
});

// Reapply the Round 20 source-level closure verdicts after every historical
// refresh block. Some older refreshes intentionally sit above this point and
// must never be able to turn a closed original detail back into a live card.
for (const update of round20ClosedCorrections) {
  const item = allData.find((record) => Number(record.id) === update.id);
  if (item) {
    Object.assign(item, update, {
      section: "2026-08-12 Round 20 high-rank recheck and official ATS discovery",
      searchText: [update.source, update.status, update.analysis].join(" "),
    });
  }
}

// Round 21: keep search-engine and LinkedIn location labels subordinate to the
// employer-owned ATS, replace a removed remote role with a current Barcelona
// employer requisition, and move Siemens to the rank warranted by its local,
// English-friendly visual-system scope and transparent salary.
Object.assign(CURATED, {
  930820: {
    ...CURATED[930820],
    statusKey: "live",
    locationKey: "barcelona",
    changeType: "round-21-reranked-current",
  },
  930712: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite / 平均每周约 4 天办公室",
    titleZh: "艺术指导（品牌识别与整合 Campaign）",
    titleEs: "ART DIRECTOR",
    reason: "VML 官方 requisition 17276 当前列出 Barcelona, Spain，并公开完整 ART DIRECTOR 职责：从创意概念到视觉执行，负责 campaign、视觉方向与品牌识别，使用 Adobe 与 AI，Figma、Motion 和视频为加分项。岗位要求 5–6 年创意代理公司经验，以及中高水平英语和加泰罗尼亚语。",
    next: "这是有真实官方入口的 Barcelona 品牌视觉机会，但不是低门槛岗位。仅在资历、Catalan 和高频到岗条件基本成立时投递；作品集应突出 identity、整合 campaign、概念提案、艺术指导与跨团队落地。",
    language: "中高水平英语与加泰罗尼亚语为明确要求；本地客户沟通环境",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5–6 年代理公司艺术指导经验",
    changeType: "round-21-promoted-official",
  },
  930846: {
    ...CURATED[930846],
    direction: "brand",
    company: "Kraken / Breakout Prop",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "原 Spain 远程岗位 / 官方 ATS 已移除",
    titleZh: "网页与品牌设计师—官方职位已移除",
    titleEs: "Web and Brand Designer (closed)",
    reason: "Kraken 当前官方 Ashby 职位板已不再列出 requisition 3096a5c6-a4fc-4b09-9953-aefd72d423f3。旧页面曾明确 Spain remote，并覆盖网站、landing page、campaign、品牌指南、组件库与 AI 工作流，但现在不能继续算作可投岗位。",
    next: "保留旧职责作为作品集对标，不通过聚合页或缓存申请；等待 Kraken 发布新的独立官方 requisition 后再恢复。",
    language: "历史英语远程岗位；当前无有效申请入口",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "历史要求 5+ 年 / 当前已关闭",
    changeType: "round-21-closed-correction",
  },
  930862: {
    direction: "brand",
    company: "Superside",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "LATAM remote contractor / 不按 Spain 远程收录",
    titleZh: "AI 创意设计师—官方申请限定 LATAM",
    titleEs: "AI Creative (LATAM only)",
    reason: "LinkedIn 搜索卡把岗位标成 Spain remote，但 Superside 官方 Careers 最终跳转到 Lever，申请页标题明确写 LATAM、Contractor、Remote。官方 ATS 优先于搜索卡地点标签，因此不能作为 Barcelona 或 Spain 机会进入主表。",
    next: "只保留为误标警示。除非 Superside 书面确认该 requisition 接受 Europe/Spain 常住申请者，否则不投入作品集定制或申请时间。",
    language: "英语工作语言；真正阻断项是 LATAM 地区限制",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "3–5 年 / LATAM contractor",
    changeType: "round-21-location-exclusion",
  },
});

// Round 22: add only roles whose original detail was opened this round, keep
// anonymous recruitment at verify-first status, and record the no-new-result
// Chinese-channel refresh without manufacturing extra cards.
Object.assign(CURATED, {
  24: {
    ...CURATED[24],
    statusKey: "live",
    changeType: "round-22-source-refresh",
  },
  930863: {
    direction: "brand",
    company: "THE/STUDIO",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / 全职 independent contractor",
    titleZh: "视觉商品与品牌概念设计师（AI 与趋势方向）",
    titleEs: "Visual Merchandising & Concept Specialist",
    reason: "官方 Teamtailor 页面当前显示 Apply for this role，并明确 100% 全球远程；1–3 年或强作品集即可。职责直接覆盖品牌识别、logo、色彩、图形语言、pattern、mascot、包装系统、moodboard 与 AI mockup，是本轮最贴近品牌视觉目标的新机会。",
    next: "用英文提交概念到系统的案例，突出品牌识别、包装、产品系列延展、Figma Slides 和 AI 视觉验证；在接受前确认 contractor 报酬、Spain 开票与税务、工时、设备、休假和时区。",
    language: "书面英语为明确要求；未列西班牙语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "初级至初中级 / 1–3 年或强作品集",
    changeType: "round-22-new-official",
  },
  930864: {
    direction: "brand",
    company: "Prime Insights",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / 瑞典团队 / 偏好 CET 重叠",
    titleZh: "平面与品牌视觉设计师（插画 / mascot / 产品视觉）",
    titleEs: "Graphic Designer",
    reason: "当前 LinkedIn 原始招聘页可投，职责覆盖视觉识别、矢量插画、mascot、icon、onboarding、badge、reward visual、网站/移动端/营销/视频与本地化。地点适合西班牙远程，但岗位标题写 part-time，正文又写可为 contract 或 full-time，劳动条件不够透明。",
    next: "先用英文确认周工时、合同形态、报酬、Spain 雇佣或开票、付费测试、IP 条款和 CET 时段，再决定是否投入定制作品集。",
    language: "英语远程协作；未列西班牙语硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "初中级至中级 / 年限未硬性公开",
    changeType: "round-22-new-linkedin",
  },
  930865: {
    direction: "digital",
    company: "Jobgether / 匿名合作公司",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / 实际雇主与合同主体未公开",
    titleZh: "UI/UX 与视觉设计师（匿名雇主，先核验）",
    titleEs: "UI/UX & Visual Designer (Mid-Level)",
    reason: "LinkedIn 页面当前可 Easy Apply，视觉职责包含响应式内容网站、landing、CRO、Figma 系统、logo、infographic、banner 与 campaign；但正文明确由 Jobgether 为匿名合作公司招募，找不到雇主官方 ATS、薪资、合同主体和招聘团队身份。",
    next: "只做最低成本的书面核验；在披露公司全称、公司域名联系人、Spain 合同路径、薪资和数据控制方前，不提交证件、银行资料、源文件或无薪测试。",
    opaqueEmployer: true,
    language: "英语岗位描述；实际团队语言未公开",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 实际雇主要求待核验",
    changeType: "round-22-new-verify",
  },
});

// Round 23: recover current official opportunities that were already present
// in the research corpus but missing from the audited board. At the same time,
// isolate stale pages, invented duplicate titles and live non-design roles.
Object.assign(CURATED, {
  1702: {
    direction: "brand",
    company: "Lodgify",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 自由职业合同 / 每年 Barcelona 团队周",
    titleZh: "创意设计师（品牌、营销与 Figma 系统）",
    titleEs: "Creative Designer",
    reason: "官方 Lever 当前可投，工作覆盖品牌演进、全渠道营销、产品解释视觉、插画、AI art direction、Figma 系统和基础动态；要求 3+ 年与较强英语。",
    next: "英文申请；先确认自由职业费率、周工时、合同期限、Spain 开票/税务、休假和设备，再决定投入多少定制时间。",
    language: "强英语要求；未列西班牙语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "3+ 年 / freelance",
    changeType: "round-23-recovered-official",
  },
  3518: {
    direction: "motion",
    company: "Fail Fast Studio / SEIDOR",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "高级动态设计师（2D、3D、AI 与品牌延展）",
    titleEs: "Senior Motion Designer",
    reason: "官方岗位页与 SEIDOR 申请入口当前可用；负责广告、解释视频、宣传片、动态演示、storyboard/styleframe 与品牌规范落地，明确要求 5+ 年和英语 C1/C2。",
    next: "作为高级 motion 伸展岗申请；作品集要有完整动态品牌系统、2D/3D、剪辑后期和 campaign，不要只放静态 VI。",
    language: "英语 C1/C2；未写西语硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5+ 年",
    changeType: "round-23-recovered-official",
  },
  483: {
    direction: "brand",
    company: "Act Second",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Barcelona 可远程 / 兼职 / EST 工作时段",
    titleZh: "高级品牌与营销设计师（兼职远程）",
    titleEs: "Senior Associate Designer",
    reason: "官方 Workable 当前显示 Remote、Barcelona、Part-time 与 Apply；覆盖品牌、印刷/数字营销、社媒、演示、网页、电商和 Figma 系统，但要求 6+ 年、母语/流利英语及 EST 时段。",
    next: "先确认时区重叠、周工时、报酬、合同主体和是否有付费测试；只在这些条件可接受时再定制申请。",
    language: "母语或流利英语；未列西语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6+ 年 / 兼职",
    changeType: "round-23-refreshed-canonical",
  },
  2333: {
    direction: "digital",
    company: "reboot",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 全职",
    titleZh: "网页设计师（软件公司视觉网站）",
    titleEs: "Web Designer",
    reason: "官方申请页当前只列一个设计岗：Web Designer、Full-time、Remote (Europe)，负责软件公司端到端网页设计，并可直接提交作品集。",
    next: "按真实标题申请；突出网页视觉系统、品牌在数字界面的延展、排版、响应式和上线成果。先确认 Spain 合同主体、薪资与经验要求。",
    language: "页面为英语；未列西语硬门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "年限未公开 / 以作品集为核心",
    changeType: "round-23-recovered-canonical",
  },
  100: {
    direction: "production",
    company: "TWOJEYS",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 总部 / 永久全职",
    titleZh: "服装平面设计师（图案、视觉语言与生产稿）",
    titleEs: "Apparel Graphic Designer",
    reason: "官方 Personio 当前可投；负责服装和配饰的图形、印花、placement、系列视觉语言与生产终稿，但明确要求母语或高级西班牙语。",
    next: "只有西语能胜任工作时再投；作品集突出服装图形、系列一致性、Illustrator/Photoshop/InDesign 与生产落地。",
    language: "母语或高级西班牙语为硬门槛",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "年限未明确 / 西语硬门槛",
    changeType: "round-23-recovered-official",
  },
  284: {
    direction: "social",
    company: "EuroLeague Basketball",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 永久全职 / 比赛夜与周末轮班",
    titleZh: "高级平面设计师（体育品牌、社媒与动态）",
    titleEs: "Senior Graphic Designer",
    reason: "官方 Personio 当前可投；工作涵盖静态/动态社媒、实时比赛内容、campaign、合作伙伴与视觉识别一致性。要求 3+ 年体育设计、流利英语及 EU 国籍或有效 Spain 工作/居留许可。",
    next: "用英文体育/事件传播作品申请；提前确认薪资、现场节奏、10–15% 出差、夜间周末轮班和加班补偿。",
    language: "流利英语；需 EU 国籍或有效 Spain 工作/居留许可",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "3+ 年体育设计",
    changeType: "round-23-refreshed-canonical",
  },
  78: {
    direction: "brand",
    company: "Textura Interiors",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官网邮箱投递 / 合同与办公模式待确认",
    titleZh: "数字设计师（视觉识别与全渠道品牌延展）",
    titleEs: "Digital Designer",
    reason: "雇主官网当前有完整 JD 与 cv@textura-interiors.com 投递入口；职责直接覆盖视觉识别演进、brand toolkit/guidelines、campaign、社媒、官网、landing、banner、邮件与 POS。",
    next: "先发简短邮件确认空缺、工作语言、合同、薪资与办公节奏；确认后提交一套 VI→数字/实体触点的完整英文或双语案例。",
    language: "官网未公开工作语言；先邮件确认，不假定中文或英语即可",
    languageKey: "unknown",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "3+ 年",
    changeType: "round-23-refreshed-canonical",
  },
  443: {
    direction: "brand",
    company: "DuckDuckGo",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / 全职 / 全球团队",
    titleZh: "创意设计负责人（营销 Campaign 与品牌系统）",
    titleEs: "Creative Design Lead (Marketing Campaigns)",
    reason: "官方 Ashby 当前将 Spain 列入远程地点；岗位亲自负责营销 campaign、品牌视觉语言与可复用系统，并公开 USD 200,267 加股权，但要求 9+ 年。",
    next: "作为高资历伸展岗保留；只有作品集能证明大型 campaign、跨团队 art direction 和品牌系统领导力时再投入申请。",
    language: "英语国际远程；未列西语要求",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "Lead / 9+ 年",
    changeType: "round-23-recovered-official",
  },
  264: {
    direction: "brand",
    company: "Act Second",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "重复研究记录 / 已并入 483",
    titleZh: "重复记录：高级品牌与营销设计师",
    titleEs: "Senior Associate Designer (duplicate)",
    reason: "与当前规范记录 483 指向同一 Workable 岗位，不是第二个机会。",
    next: "只使用记录 483 排名和申请。",
    language: "重复记录",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "已并入 483",
    changeType: "round-23-duplicate-closed",
  },
  1655: {
    direction: "social",
    company: "EuroLeague Basketball",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "重复研究记录 / 已并入 284",
    titleZh: "重复记录：高级平面设计师",
    titleEs: "Senior Graphic Designer (duplicate)",
    reason: "与当前规范记录 284 指向同一 Personio requisition 2713006，不是第二个机会。",
    next: "只使用记录 284 排名和申请。",
    language: "重复记录",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "已并入 284",
    changeType: "round-23-duplicate-closed",
  },
  993020: {
    direction: "brand",
    company: "Textura Interiors",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "重复研究记录 / 已并入 78",
    titleZh: "重复记录：数字设计师",
    titleEs: "Digital Designer (duplicate)",
    reason: "与当前规范记录 78 指向同一雇主官网岗位，不是第二个机会。",
    next: "只使用记录 78 排名和申请。",
    language: "重复记录",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "已并入 78",
    changeType: "round-23-duplicate-closed",
  },
  1031: {
    ...CURATED[1031],
    statusKey: "closed",
    changeType: "round-23-closed-official",
  },
  1040: {
    ...CURATED[1040],
    statusKey: "closed",
    changeType: "round-23-stale-search-correction",
  },
  2269: {
    direction: "digital",
    company: "reboot",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 重复错误标题",
    titleZh: "错误历史标题：Visual Designer",
    titleEs: "Visual Designer (duplicate / not currently listed)",
    reason: "当前官网只列 Web Designer。这个标题与同一网址不是独立岗位。",
    next: "使用当前唯一规范记录 2333，不重复申请。",
    language: "历史重复记录",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "已并入当前 Web Designer",
    changeType: "round-23-duplicate-closed",
  },
  2273: {
    direction: "motion",
    company: "reboot",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 重复错误标题",
    titleZh: "错误历史标题：2D/3D Motion Designer",
    titleEs: "2D/3D Motion Designer (duplicate / not currently listed)",
    reason: "当前官网只列 Web Designer。这个标题与同一网址不是独立岗位。",
    next: "使用当前唯一规范记录 2333，不重复申请。",
    language: "历史重复记录",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "已并入当前 Web Designer",
    changeType: "round-23-duplicate-closed",
  },
  2334: {
    direction: "brand",
    company: "reboot",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 重复错误标题",
    titleZh: "错误历史标题：Senior Brand Designer",
    titleEs: "Senior Brand Designer (duplicate / not currently listed)",
    reason: "当前官网只列 Web Designer。这个标题与同一网址不是独立岗位。",
    next: "使用当前唯一规范记录 2333，不重复申请。",
    language: "历史重复记录",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "已并入当前 Web Designer",
    changeType: "round-23-duplicate-closed",
  },
  1311: {
    direction: "brand",
    company: "TWOJEYS",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官网仍在招，但不是设计岗",
    titleZh: "品牌负责人（研究库：非设计职位）",
    titleEs: "Head of Brand (live, excluded as non-design role)",
    reason: "职位本身仍在招，但核心是品牌战略、营销、团队、预算、活动与供应商管理，不是 hands-on 平面/VI 设计岗，因此不进入你的设计机会主表。",
    next: "只作为市场职业路径参考；当前真正的 TWOJEYS 设计岗使用记录 100。",
    language: "高水平西班牙语和英语；5+ 年领导经验",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "5+ 年品牌/营销领导；非设计岗",
    changeType: "round-23-nondesign-exclusion",
  },
  1131: {
    direction: "production",
    company: "Spreadit（雇主主体未可靠核实）",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "远程兼职 / 第三方低薪帖",
    titleZh: "平面设计师（低薪、无官方 ATS，排除）",
    titleEs: "Graphic Designer (third-party low-pay listing)",
    reason: "只找到第三方 Publipega 帖，约 200 美元/月，且没有稳定雇主 ATS 或完整主体证据，不值得作为当前机会。",
    next: "不提交证件、源文件或无薪测试；仅在雇主域名、合同和正常薪资得到证明后重新评估。",
    language: "第三方帖；语言与合同均不透明",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "低薪风险 / 排除",
    changeType: "round-23-low-pay-exclusion",
  },
});

// Round 24: an employer job-board API or the exact current requisition wins
// over cached search snippets. Same-title Adsmurai vacancies are separated by
// requisition so the Madrid role can never leak into the Barcelona card.
Object.assign(CURATED, {
  147: {
    direction: "brand",
    company: "SplitMetrics",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "欧洲远程 / 官方职位板已移除 / 历史",
    titleZh: "高级视觉设计师（已关闭）",
    titleEs: "Senior Visual Designer — closed",
    reason: "SplitMetrics 官方 Ashby 职位板 API 当前只有 4 个岗位，已没有原 requisition 8e164fd9-aec6-4917-89a7-43cdd2e60116，也没有 Senior Visual Designer；搜索引擎仍显示的是旧缓存。",
    next: "保留品牌识别、performance campaign、网站和设计系统职责作为作品集参考；只有出现新的官方 requisition 才恢复。",
    language: "历史岗位曾为英语远程；当前已关闭",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "历史 / 5+ 年",
    changeType: "round-24-official-board-closed",
  },
  173: {
    ...CURATED[173],
    statusKey: "closed",
    titleZh: "平面设计师（已停止接收申请）",
    titleEs: "Diseñador/a gráfica — applications closed",
    reason: "原始 LinkedIn 雇主详情 4438899857 明确显示不再接收申请。页面还能打开不等于岗位仍可投。",
    next: "保留旧 JD 和公司监测；只有 LONBALI 发布新的职位编号和投递入口时恢复。",
    changeType: "round-24-original-page-closed",
  },
  957: {
    direction: "brand",
    company: "10x Team / AI Lab",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "旧 EU/UK AI 人才池 / 官方职位板已移除",
    titleZh: "视觉设计负责人 AI 训练项目（已关闭）",
    titleEs: "Lead Visual Designer — AI Trainer — closed",
    reason: "10x Team 官方 Ashby 职位板 133 个当前岗位中没有旧 requisition 2f9bd626-3df1-43eb-93c1-1899649b9fa5；现有 Visual/Graphic Designer AI Trainer 只标 Poland，不是 Spain 机会。",
    next: "不计入当前设计岗；只有新的 Spain-eligible 官方职位编号出现时重新评估。",
    language: "历史英语 AI 项目池；当前已关闭",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "历史 AI 项目池",
    changeType: "round-24-official-board-closed",
  },
  992: {
    direction: "digital",
    company: "Appspace",
    statusKey: "closed",
    locationKey: "remote",
    locationLabel: "Barcelona / Spain remote 旧记录 / 官方职位板已移除",
    titleZh: "视觉设计师（已关闭）",
    titleEs: "Visual Designer — closed",
    reason: "Appspace 官方 Greenhouse 职位板 API 当前有 13 个岗位，但没有 requisition 5813989004 或 Visual Designer；旧详情跳回职位总表，搜索摘要不能当作可投证据。",
    next: "保留旧职责作为研究历史，不进入可投或待核验数量；出现新官方职位编号后再恢复。",
    language: "历史英语岗位；当前已关闭",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "历史记录",
    changeType: "round-24-official-board-closed",
  },
  604: {
    ...CURATED[604],
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EMEA 全远程 / Barcelona 可居住 / 每年两次国际团队活动",
    titleZh: "视觉设计师（品牌指南、UI 系统与数字产品）",
    titleEs: "Visual Designer — Brand and Design Systems",
    reason: "Canonical 官方 Greenhouse 5326986 当前显示 Apply、Home based - EMEA 和完整申请表；职责直接覆盖品牌指南演进、传播物料、UI design system、数字产品视觉、可用性与无障碍。",
    next: "用英文提交品牌指南、字体版式、无障碍、Web/UI 系统和数字产品案例；申请答案必须本人撰写，不得用生成式 AI 代写，并先确认 Spain 雇佣与薪资。",
    language: "专业书面与口语英语为明确要求；未列西语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级以上 / 学术与技术背景门槛较高",
    changeType: "round-24-official-current-rerank",
  },
  930719: {
    ...CURATED[930719],
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 永久全职 / requisition 8109023",
    reason: "当前保留的是 Teamtailor 8109023：页面逐字写 Barcelona、Híbrido 和 ENVÍA TU CV。另一个同名 requisition 7993316 明确是 Madrid，两个职位编号不能合并。",
    next: "只从 8109023 的 Barcelona 页面申请；至少 3 年、流利西语和英语仍是硬门槛。",
    changeType: "round-24-requisition-location-lock",
  },
  930829: {
    ...CURATED[930829],
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Sadurní d'Anoia / Barcelona 省 / hybrid 3-2 / 实习",
    reason: "原始招聘详情当前可投；包装、新品牌概念、线下 campaign、多市场适配、完稿、印前和渲染均与品牌实体延展相关。它已是唯一规范卡，不再重复新增。",
    next: "因西语环境、实习合同和通勤负担保持后排；先确认学校协议、报酬、期限、交通和实际工作语言。",
    changeType: "round-24-current-no-duplicate",
  },
});

Object.assign(CURATED, {
  942: {
    direction: "brand",
    company: "Co-Star",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "全球远程 / freelance / 初期兼职 / 无需出差",
    titleZh: "品牌设计师（全球远程自由职业）",
    titleEs: "Brand Designer — Worldwide Remote Freelance",
    reason: "Co-Star 官方 Greenhouse 6126693004 当前显示 Apply、完整表单和 fully remote anywhere。职责覆盖品牌系统、campaign、editorial、网站、社媒和发布物料；5–8 年与初期兼职自由职业是主要门槛。",
    next: "用英文作品集突出身份系统、campaign、editorial、web/social 与 launch；投递前确认费率、保证工时、项目期限、西班牙开票纳税、付款周期和知识产权。",
    language: "英语异步协作；未写西语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "5–8 年 / 高级 IC",
    changeType: "round-25-official-recovery",
  },
  930866: {
    direction: "social",
    company: "Preply",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职 / Brand 团队",
    titleZh: "UGC 视频编辑（品牌团队）",
    titleEs: "UGC Editor — Brand",
    reason: "Preply 官方 Ashby 当前显示 listed、Barcelona、Hybrid、FullTime 和完整申请入口。岗位负责 TikTok、Instagram、YouTube Shorts 的付费 UGC 与自然内容，要求 2 年以上视频剪辑、CapCut 或 Premiere Pro 和高级英语。",
    next: "用英文提交短视频剪辑、hook、字幕、达人素材和平台原生节奏案例；先确认薪资、每周到岗日、relocation 条件，以及付费投放和自然内容的比例。",
    language: "高级英语必需；西语、德语、法语、意大利语或波兰语仅加分",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2 年以上视频剪辑",
    changeType: "round-25-official-discovery",
  },
  930867: {
    direction: "brand",
    company: "Fantasy",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "UK / EU 远程 / Permalance / 西班牙可居住",
    titleZh: "高级创意设计师—市场品牌与动态",
    titleEs: "Senior Creative Designer — Marketing",
    reason: "Fantasy 官方 Lever 当前显示 Apply、UK/EU Remote，并明确要求候选人位于 UK 或 EU。工作覆盖案例包装、品牌系统、motion、campaign、社媒、演示和活动物料；5 年以上、After Effects 与高级 Figma 是硬门槛。",
    next: "英文作品集必须同时证明动态、系统化静态品牌物料和案例叙事三部分；先确认 Permalance 费率、工时、西班牙雇佣或开票、休假和时区。",
    language: "英语远程协作；未写西语门槛",
    languageKey: "english",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "5 年以上 / motion + brand + digital",
    changeType: "round-25-official-discovery",
  },
});

Object.assign(CURATED, {
  863: {
    ...CURATED[863],
    languageKey: "spanish",
    experienceKey: "mid",
    experienceLabel: "2–4 年",
    changeType: "round-26-current-recovery",
  },
  867: {
    ...CURATED[867],
    languageKey: "spanish",
    experienceKey: "senior",
    experienceLabel: "5 年以上",
    changeType: "round-26-current-recovery",
  },
  930868: {
    direction: "brand",
    company: "ZABRISKIE STUDIO / GRUPO NATURA",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场办公 / 无固定期限全职",
    titleZh: "初级平面设计师（包装、品牌与印刷落地）",
    titleEs: "Diseñador/a Gráfico/a Junior",
    reason: "InfoJobs 原始详情在 2026-08-12 仍显示可报名，且刚于两天前重新发布。职责包含包装、品牌、系列图形、标签、目录、插画、打样、完稿和供应商印刷复核，是本轮最扎实的本地平面设计新增之一。",
    next: "用包装、刀模、印前完稿、品牌系统、编辑设计和 mockup 案例投递；先确认西语、加泰语和英语是否都达到岗位要求，并评估 EUR20k–27k 与全现场办公。",
    languageKey: "spanish",
    language: "西班牙语母语/双语、加泰语中级、英语中级",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "2 年以上",
    changeType: "round-26-official-detail-recovery",
  },
  930869: {
    direction: "social",
    company: "NEWEYES TECH S.L.",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场办公 / 无固定期限全职",
    titleZh: "多媒体设计与内容创作",
    titleEs: "Diseñador/a multimedia y creador de contenido",
    reason: "InfoJobs 原始详情在 2026-08-12 仍可报名，并显示十小时前重新发布。工作覆盖数字平面、社媒、视频、motion、campaign 构思、CapCut、Adobe 与 AI 内容生产；但还要求管理社媒并在需要时出镜。",
    next: "作为视频/内容方向备选投递，作品集放短视频、动态、数字 campaign 和 AI 工作流；确认出镜比例、团队语言与现场办公安排。",
    languageKey: "english",
    language: "岗位列高级英语；正文与申请流程为西班牙语",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "2 年以上",
    changeType: "round-26-official-detail-recovery",
  },
  930718: {
    direction: "digital",
    company: "Capitole",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 及周边 / 全职",
    titleZh: "邮件与数字设计系统设计师",
    titleEs: "Email Designer",
    reason: "当前原始职位页仍有申请入口；核心是响应式邮件、Figma 组件、模板库、品牌一致性和 landing page。它是数字品牌延展岗位，但 HTML/CSS、AMPscript 与 Salesforce Marketing Cloud 的技术比重很高。",
    next: "只有能展示邮件设计系统、响应式模板、Figma handoff 与品牌一致性时优先投递；确认客户、混合办公、语言与薪资。",
    languageKey: "unknown",
    language: "公开正文未给出明确语言等级；职位说明和本地协作以西班牙语呈现",
    experienceKey: "mid",
    experienceLabel: "中级 / 邮件开发技能门槛",
    changeType: "round-26-current-recovery",
  },
  856: {
    direction: "brand",
    company: "SYNERGIE ESPAÑA / 未公开零售客户",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Castellgalí / 现场办公 / 无固定期限全职",
    titleZh: "零售与电商品牌平面设计师",
    titleEs: "Diseñador gráfico",
    reason: "当前原始职位页仍可申请，职责覆盖品牌全渠道、门店、campaign、newsletter、banner、landing、视频与完稿；薪资 EUR23k。地点并非 Barcelona 市区，且要求良好西语、加泰语基础和英语沟通。",
    next: "先评估 Castellgalí 通勤和现场办公，再以零售、电商、全渠道 campaign、视频与印刷完稿案例投递。",
    languageKey: "spanish",
    language: "良好西班牙语；加泰语基础；可用英语沟通",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "零售/电商设计经验",
    changeType: "round-26-current-recovery",
  },
  1092: {
    direction: "social",
    company: "Codeway / Dramapops",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职 / 可提供签证与搬迁支持",
    titleZh: "营销动态设计师（短剧广告）",
    titleEs: "Marketing Artist - Dramapops",
    reason: "Codeway 官方 Ashby 当前列出该岗与完整申请表。职责是 Meta、TikTok、YouTube 的视频广告、motion、AI 视频与高频绩效创意；2 年以上即可，但方向偏获客而非 VI。",
    next: "用付费社媒、前三秒 hook、AE motion、AI 视频和可量化迭代案例申请；确认 Barcelona 到岗节奏、薪资和 relocation 条件。",
    languageKey: "english",
    language: "官方正文为英语；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2 年以上",
    changeType: "round-26-official-ats-recovery",
  },
  1098: {
    direction: "social",
    company: "Codeway / Learna",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职",
    titleZh: "高级创意营销经理（AI 与绩效创意）",
    titleEs: "Senior Creative Marketing Manager",
    reason: "Codeway 官方 Ashby 当前列出该岗与申请表。岗位负责创意策略、广告概念、测试框架、AI 生产与团队流程，要求 4–5 年以上绩效创意经验；更像策略负责人而非纯平面设计。",
    next: "仅在有规模化广告、团队协作和数据结果案例时挑战；作品集必须说明概念如何影响 CTR、CPI 或 ROAS。",
    languageKey: "english",
    language: "官方正文为英语；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "4–5 年以上",
    changeType: "round-26-official-ats-recovery",
  },
  275: {
    direction: "social",
    company: "Factorial",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场 / 全职",
    titleZh: "创意负责人（付费获客与 AI 生产）",
    titleEs: "Creative Lead / Strategy - Paid Acquisition",
    reason: "当前原始职位页仍可申请，要求流利英语和 5 年以上经验，负责带领视频剪辑、设计师与 AI Artist 建立高频广告测试系统。它是创意领导岗位，不是个人 VI 执行岗。",
    next: "只在有团队管理、广告策略、生成式 AI 和转化数据案例时挑战；确认现场办公、薪资与管理范围。",
    languageKey: "english",
    language: "流利英语硬门槛；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "5 年以上",
    changeType: "round-26-current-recovery",
  },
  352: {
    direction: "brand",
    company: "Blank Studio Creative S.L.",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / remote-friendly / 全职",
    titleZh: "初级 3D 设计师（产品、包装与品牌世界）",
    titleEs: "Junior 3D Designer",
    reason: "官方详情当前仍有投递邮箱，负责美妆、生活方式与包装产品的 3D 建模、材质、灯光、campaign render、mockup 和品牌世界视觉。它偏 3D，但和包装及品牌延展直接相关。",
    next: "提交 3D 产品、包装、品牌场景、材质灯光与 campaign render；先问清薪资、远程比例和实际合同地点。",
    languageKey: "unknown",
    language: "公开页面未写语言门槛",
    experienceKey: "junior",
    experienceLabel: "初级",
    changeType: "round-26-official-detail-recovery",
  },
  1253: {
    direction: "digital",
    company: "TheBusinessLook BCN / Museum Merchandising",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 半天制 / 每周 1–2 天远程",
    titleZh: "初级平面设计师（半职，先确认名额）",
    titleEs: "Diseñador/a Gráfico Jr - media jornada",
    reason: "LinkedIn 仍能读到完整职位和直投邮箱，但发布已约三个月且不再显示平台申请按钮。工作包含目录、数字物料、社媒、newsletter、商业演示与产品支持，适合初级作品集，但必须先确认仍招人。",
    next: "先给 juanca@businesslookbcn.com 发一封简短询问信，确认职位、半职工时和薪资仍有效；得到肯定答复后再发定制作品集。",
    languageKey: "spanish",
    language: "岗位与直投说明为西班牙语；未公开等级",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 经验非强制",
    changeType: "round-26-verify-first-recovery",
  },
  372: {
    direction: "social",
    company: "Molin AI",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / contractor / 每周多次现场拍摄",
    titleZh: "社媒与创意内容创作者",
    titleEs: "Social & Creative Content Creator",
    reason: "当前原始职位页仍可申请，负责概念、拍摄、剪辑与快速发布，并跟随创始人参加活动。它是现场内容创作和短视频岗位，不是品牌系统设计。",
    next: "作为内容方向备选；先确认 contractor 费率、保证工时、拍摄设备、差旅与付款周期。",
    languageKey: "english",
    language: "公开正文为英语；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "内容创作经验",
    changeType: "round-26-current-recovery",
  },
  930711: {
    direction: "social",
    company: "JUNGLE / MeMe",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Calle Álava 111 / 全职无固定期限",
    titleZh: "社交创意（品牌内容与短视频）",
    titleEs: "Social Creative MeMe Barcelona",
    reason: "雇主当前职位板和原始职位页均可申请，工作包括品牌社交创意、趋势研究、presentation、短视频拍摄与剪辑、meme 和多平台内容。它偏社交创意与文案，不是纯平面或 VI 岗，因此只放在次级机会区。",
    next: "先确认团队日常西语比例、薪资与混合办公安排；作品集使用社交创意、短视频、快速视觉表达和品牌语调案例，不要用纯 Logo 项目冒充匹配。",
    languageKey: "english",
    language: "明确要求真实双语英语；职位全文及本地团队语境为西班牙语，西语工作能力需确认",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "至少 1 年社交创意经验",
    changeType: "round-26-current-recovery",
  },
  456: {
    direction: "brand",
    company: "CBA Design Spain",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Poblenou / 主动投递人才库",
    titleZh: "品牌与视觉设计开放投递（非具体空缺）",
    titleEs: "Open application — Brand / Visual Design",
    reason: "CBA Spain 位于 Barcelona，业务高度匹配视觉识别、包装、数字设计、动效和品牌指南；官网当前可提交 CV 与作品集，但没有发布具体岗位、合同、薪资或语言要求，必须明确标成主动投递而不是现行招聘。",
    next: "先发送一句简短询问，确认近期是否有 junior/mid Brand Designer 或 Visual Designer 名额；得到肯定答复后，再提交精简品牌系统与包装/数字延展作品集。",
    languageKey: "unknown",
    language: "官网未公开团队工作语言或岗位语言门槛",
    applicationMode: "english",
    experienceKey: "open",
    experienceLabel: "开放投递 / 资历待确认",
    changeType: "round-26-proactive-route",
  },
  930870: {
    direction: "brand",
    company: "FunPlus",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 08010 / hybrid / 带薪 20 小时实习",
    titleZh: "品牌与 2D 平面设计实习生",
    titleEs: "Graphic Design Intern",
    reason: "FunPlus 官方 Factorial 当前显示 Apply now；工作为全球传播团队制作品牌与游戏营销视觉、key art、2D assets、Logo、截图和图标，英语流利为明确要求，motion 是加分项。",
    next: "只有能签学校或大学实习协议时再投；作品集优先放品牌营销视觉、key art、2D 系统、Logo/图标和可选动效，并在申请前确认薪资金额与每周到岗天数。",
    languageKey: "english",
    language: "英语流利为明确要求；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "在读设计学生 / 实习协议",
    changeType: "round-26-current-recovery",
  },
  376: { ...CURATED[376], statusKey: "closed", changeType: "round-26-off-scope" },
  1088: { ...CURATED[1088], statusKey: "closed", changeType: "round-26-off-scope" },
  613: { ...CURATED[613], statusKey: "closed", changeType: "round-26-off-scope" },
  644: { ...CURATED[644], statusKey: "closed", changeType: "round-26-off-scope" },
  1100: { ...CURATED[1100], statusKey: "closed", changeType: "round-26-off-scope" },
  1266: { ...CURATED[1266], statusKey: "closed", changeType: "round-26-off-scope" },
  6: { ...CURATED[6], statusKey: "closed", changeType: "round-26-off-scope" },
  635: { ...CURATED[635], statusKey: "closed", changeType: "round-26-off-scope" },
  422: { ...CURATED[422], statusKey: "closed", changeType: "round-26-off-scope" },
  1034: { ...CURATED[1034], statusKey: "closed", changeType: "round-26-off-scope" },
  1089: { ...CURATED[1089], statusKey: "closed", changeType: "round-26-off-scope" },
  868: {
    ...CURATED[868],
    statusKey: "verify",
    reason: "公开 LinkedIn 详情仍能完整读取近期 Barcelona Video Maker 职责，但页面没有可验证的申请按钮或雇主 ATS。岗位本身覆盖医疗品牌视频、motion、数字 campaign 与 AI，且要求流利西语和英语；先确认投递入口。",
    next: "先通过 Omnicom Health 招聘团队确认 requisition 和申请入口；确认仍开放后再提交 CV、动机说明和最新 reel。",
    changeType: "round-26-verify-first",
  },
  854: {
    direction: "ecommerce",
    company: "Netenders / Wordans",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 合同形态冲突：元数据全职、正文写 freelance",
    titleZh: "高产量电商服装图形设计师",
    titleEs: "T-shirt Designer for High-Volume E-commerce",
    reason: "当前职位页仍有申请入口，工作是商业 T-shirt 图形、排版、print-ready 文件与 mockup；但职位元数据写全职，正文却招 freelance designers，薪资和知识产权条款也未公开。",
    next: "先问清全职还是自由职业、每批数量、单价/薪资、修改次数、付款周期和版权，再决定是否做测试。",
    languageKey: "english",
    language: "公开正文为英语",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "POD / apparel 经验",
    changeType: "round-26-current-recovery",
  },
  633: {
    direction: "brand",
    company: "Puig / Carolina Herrera Makeup",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 1 年 Graduate Program",
    titleZh: "品牌形象与 360 Campaign 管培项目",
    titleEs: "Image & 360 Makeup Graduate",
    reason: "Puig 官方岗位当前仍可申请，涉及全球 image campaign、moodboard、creative toolkit、拍摄制作和零售、电商、社媒、CRM、PR 的 360 延展。它偏创意项目支持，但与奢侈美妆品牌视觉高度相关。",
    next: "仅适合近期毕业或硕士背景；用品牌形象、moodboard、campaign rollout 和 Adobe 案例申请，并确认项目薪资。",
    languageKey: "spanish",
    language: "流利英语与西班牙语均为硬门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "近期毕业 / 硕士 / 1 年项目",
    changeType: "round-26-official-current-recovery",
  },
  1053: {
    direction: "social",
    company: "DDB Spain",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官方 Greenhouse",
    titleZh: "社交媒体内容创作者",
    titleEs: "Social Media Content Creator",
    reason: "DDB Spain 官方 Greenhouse 当前仍列出 Barcelona requisition 5096089008 与申请入口。它属于社媒内容方向，和核心 VI 的距离较远。",
    next: "只在希望扩展到内容创作时投递；先读清视频、出镜、文案和语言比例。",
    languageKey: "spanish",
    language: "西班牙本地代理商语境；详细等级需在原页确认",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "社媒内容经验",
    changeType: "round-26-official-ats-recovery",
  },
  1094: {
    direction: "brand",
    company: "CATORCE / DDB Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官方 Greenhouse / Spain Hub",
    titleZh: "创意总监（西班牙市场，超高门槛）",
    titleEs: "Creative Director - Spain Hub",
    reason: "CATORCE 官方 requisition 当前仍可申请，负责 CUPRA/SEAT 全球 campaign 的西班牙市场适配并管理文案和艺术指导团队；要求至少 10 年代理商经验、3–4 年创意总监经历以及完美西语和英语。",
    next: "仅作高级职业路径和极限挑战，不应挤占当前实际投递时间。",
    languageKey: "spanish",
    language: "完美西班牙语与英语硬门槛",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "10 年以上 / 3–4 年创意总监",
    changeType: "round-26-official-ats-recovery",
  },
});

for (const id of ROUND27_LIVE_IDS) {
  CURATED[id] = {
    ...CURATED[id],
    statusKey: "live",
    changeType: "round-27-current-recovery",
  };
}
for (const id of [...ROUND27_VERIFY_IDS, ...ROUND27_REVIEW_LIBRARY_IDS]) {
  CURATED[id] = {
    ...CURATED[id],
    statusKey: "verify",
    changeType: ROUND27_REVIEW_LIBRARY_IDS.includes(id)
      ? "round-27-reviewed-library"
      : "round-27-verify-recovery",
  };
}
for (const [id, reason] of ROUND27_ARCHIVE_REASONS) {
  CURATED[id] = {
    ...CURATED[id],
    statusKey: "closed",
    reason,
    next: "保留在历史库；只有出现新的雇主原始详情或官方 ATS 后才重新进入待核验。",
    changeType: "round-27-audited-history",
  };
}

Object.assign(CURATED, {
  930871: {
    ...CURATED[930871],
    direction: "brand",
    company: "Familia Torres",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Vilafranca del Penedès / Barcelona 省 / 稳定全职",
    titleZh: "平面设计师（品牌、酒标与包装）",
    titleEs: "Diseñador/a gráfico/a",
    reason: "当前雇主原始职位页仍显示申请入口。工作覆盖新品牌与产品、Logo、酒标、插画、包装、线上线下 campaign 和最终生产协调，是本轮恢复中最贴近品牌视觉与 VI 的本地岗位之一。",
    next: "先确认办公室到岗频率、固定薪资、日常西语要求和通勤安排；作品集优先放品牌系统、包装/标签、印刷交付与 campaign 延展。",
    languageKey: "english",
    language: "明确要求高水平英语；职位正文未单列西语等级，实际本地团队语言仍需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2–3 年相关经验",
    changeType: "round-27-current-recovery",
  },
  214: {
    ...CURATED[214],
    direction: "social",
    company: "REDLINE MEDIA",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / L2 Sant Roc / 联系入口待确认",
    titleZh: "中文短视频内容创作者 / 视频制作实习",
    titleEs: "Video Content Creator / Video Production Intern",
    reason: "原始职位正文明确写标准普通话和西语 B1+，工作包括合作品牌代运营、美食宣传、品牌访谈、短视频拍摄与出镜。它是中文可用的本地内容机会，但不是平面或 VI 岗。",
    next: "先确认联系人、薪资、合同、工时、实习协议以及是否必须出镜；没有这些信息前不提交证件或做长时间无薪测试。",
    languageKey: "chinese",
    language: "标准普通话 + 西班牙语 B1 以上",
    applicationMode: "chinese",
    experienceKey: "junior",
    experienceLabel: "无需经验 / 出镜与网感为主要门槛",
    changeType: "round-27-chinese-verify-recovery",
  },
  141: {
    ...CURATED[141],
    direction: "brand",
    company: "Minsk.Barcelona",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 初期现场 / 后续可能混合办公",
    titleZh: "初级综合设计师（品牌、平面、数字与动效）",
    titleEs: "Diseñador/a júnior",
    reason: "当前原始职位覆盖 branding、campaign、平面、web、Figma、数字物料和 motion，且不要求既往经验；但加泰语和西班牙语均为明确门槛，因此不应因职责匹配而获得过高排名。",
    next: "只有能够用加泰语和西语完成面试及日常协作时再投；先问薪资，再提交 CV 和综合视觉作品集。",
    languageKey: "spanish",
    language: "加泰语和西班牙语为硬门槛；英语仅为加分项",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "应届 / 无经验可申请",
    changeType: "round-27-current-hard-language-gate",
  },
  454: {
    ...CURATED[454],
    direction: "brand",
    company: "ADG-FAD",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 付费委托 / 2026-09-16 截止",
    titleZh: "Laus 2027 视觉活动付费委托（非雇佣）",
    titleEs: "Paid campaign design commission — Laus 2027",
    reason: "这是有明确截止日期的付费视觉活动委托，不是劳动合同职位。适合 campaign identity 与艺术指导，但必须是 ADG Professional 或 Club de Empresa 会员。",
    next: "先核对会员资格和完整 brief，再决定是否投入提案时间；卡片必须保持“付费委托/非雇佣”标签。",
    languageKey: "spanish",
    language: "公开说明为西语/加泰语；会员资格是首要硬门槛",
    applicationMode: "spanish",
    experienceKey: "open",
    experienceLabel: "专业会员限定",
    changeType: "round-27-paid-commission",
  },
});

Object.assign(CURATED, {
  955: {
    ...CURATED[955],
    direction: "brand",
    company: "Jobgether / 匿名合作公司",
    statusKey: "closed",
    titleZh: "高级品牌设计师（原始 Lever 已失效）",
    titleEs: "Senior Brand Designer — closed Lever requisition",
    reason: "原始 Lever requisition 当前返回 404；搜索结果缓存不能证明岗位仍可投。",
    next: "保留在历史库；只有出现新的雇主或中介原始详情、有效申请入口和 Spain 合同条件后才恢复。",
    changeType: "round-28-official-page-404",
  },
  930873: {
    direction: "brand",
    company: "Grupo Planeta",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场 / 无固定期限全职",
    titleZh: "高级平面与编辑设计师（书籍封面 / 艺术指导）",
    titleEs: "Diseñador/a Gráfico/a Senior / Editorial Senior",
    reason: "官方 TalentClue 当前显示 Inscríbete。工作从封面概念、字体与视觉方案延伸到插画师/摄影师协作、艺术指导、上市物料和最终生产，属于真实而专业的本地平面设计岗位。",
    next: "属于 5 年以上高级岗；先确认薪资和日常西语要求，作品集优先放编辑系统、封面、字体、艺术指导与印刷生产。",
    languageKey: "spanish",
    language: "明确要求中级以上英语；西语图书与本地团队的实际工作语言需确认",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "5 年以上 / 编辑或文化项目优先",
    changeType: "round-28-new-official-ats",
  },
  930874: {
    direction: "motion",
    company: "Ogilvy",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 混合办公 / 全职",
    titleZh: "数字与动态设计师（社媒视频 / 国际品牌延展）",
    titleEs: "Liquid Designer",
    reason: "当前雇主原始页显示 Solicitar。工作覆盖数字资产、Reels/TikTok/Shorts、视频、动画、motion、多市场本地化和品牌一致性；是数字品牌延展岗位，不是纯 VI 所有权岗位。",
    next: "用数字 campaign、短视频、motion 和多市场品牌适配案例申请；先确认薪资、团队工作语言、合同主体和工作许可。",
    languageKey: "unknown",
    language: "公开正文未列语言要求；Barcelona 代理商团队的日常西语要求需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2–4 年 / 至少 2 年代理商经验",
    changeType: "round-28-new-employer-detail",
  },
  930875: {
    direction: "brand",
    company: "Grupo Bimbo",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Diagonal Mar / 实习条件待确认",
    titleZh: "品牌与包装设计实习生",
    titleEs: "Branding & Design Intern",
    reason: "当前雇主原始页显示 Solicitar。职责直接涉及视觉识别、包装、品牌指南、线上线下物料、完稿、资产库、视觉演示和第三方品牌一致性审核，方向非常贴近目标。",
    next: "高西语是硬门槛；申请前确认是否必须在读/可签 convenio、薪资、周工时、期限和转正可能，避免把方向匹配误当成劳动条件合适。",
    languageKey: "spanish",
    language: "高水平西班牙语为明确要求；英语仅为加分",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "在读或大学背景 / 实习或学术项目经验可加分",
    changeType: "round-28-new-employer-detail",
  },
});

Object.assign(CURATED, {
  407: {
    ...CURATED[407],
    direction: "brand",
    company: "papernest",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 6 个月实习 / €800 月薪",
    titleZh: "品牌设计实习生（视觉识别重塑与品牌指南）",
    titleEs: "Graphic Designer Internship / Brand Design Intern",
    reason: "官方 Teamtailor 同一 requisition 曾在 8 月 9 日明确关闭，但 8 月 12 日已经重新显示 Join us、Barcelona、Hybrid、Internship 和申请表。职责直接涉及视觉识别演进、品牌指南、插画、图标、模板及数字/印刷资产。",
    next: "英语是明确工作语言；必须是设计相关在读学生并能完成 6 个月实习。先确认 convenio 条件和 practical case 是否限定范围，再用英文品牌系统与多渠道延展案例申请。",
    languageKey: "english",
    language: "流利英语为明确要求；未列西班牙语硬门槛",
    applicationMode: "english",
    experienceKey: "junior",
    experienceLabel: "在读设计学生 / 6 个月实习",
    changeType: "round-29-official-reopened",
  },
  930876: {
    direction: "social",
    company: "IEBS Business School",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Viladecans / hybrid / 每周 20 小时实习",
    titleZh: "平面设计实习生（活动与社媒品牌适配）",
    titleEs: "Prácticas Diseño Gráfico",
    reason: "官方 Factorial 当前明确列出 Viladecans、Diseño、Híbrido 和 Inscríbete ahora；职责为活动创意、carousel/post/story、多平台适配及品牌识别一致性，另有基础视频加分。",
    next: "必须能签学校实习协议，且公开说明为西语；薪资未公布。先确认补贴、期限、办公室天数、日常语言和转正可能，再决定是否投递。",
    languageKey: "spanish",
    language: "公开职位说明与本地团队流程为西班牙语",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "在读 / 必须可签 convenio / 20 小时每周",
    changeType: "round-29-new-official-ats",
  },
  930877: {
    direction: "brand",
    company: "Bravura Barcelona",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona 品牌 / 可远程 / 合同与地点待确认",
    titleZh: "平面设计师（时尚品牌数字视觉）",
    titleEs: "Diseñador/a Gráfico/a",
    reason: "雇主官网直接列出岗位和作品集邮箱，职责包含 web、社媒、广告 campaign 与品牌一致性；但没有发布日期、合同类型、法律雇主、薪资区间或精确办公地点，因此不能当作完全确认的正式职位。",
    next: "先邮件询问公司实体/CIF、合同、薪资、工时、工作地点、语言和测试是否付费；得到书面答复后再升级状态并发送定制作品集。",
    languageKey: "unknown",
    language: "官网西语说明；实际团队语言未公开",
    applicationMode: "spanish",
    experienceKey: "open",
    experienceLabel: "经验年限未量化 / 条件待确认",
    changeType: "round-29-new-official-verify",
  },
});

// Round 30 resolves cached-search contradictions against direct current routes.
// These verdicts are intentionally late so older generated snapshots cannot
// promote expired jobs or demote the current Manresa fallback again.
Object.assign(CURATED, {
  35: {
    ...CURATED[35],
    statusKey: "closed",
    reason: "Steneg 的缓存详情仍能显示完整职责，但原始职位编号 4357596568 在 2026-08-12 直连返回 404，且页面已不含该职位编号或申请按钮。",
    next: "保留为历史岗位样本；只有新职位编号可直达、并确认真实雇主、合同、薪资与办公地址后才恢复。",
    changeType: "round-30-direct-route-closed",
  },
  905: {
    ...CURATED[905],
    statusKey: "closed",
    reason: "Steneg 的缓存详情仍能显示完整职责，但原始职位编号 4357596568 在 2026-08-12 直连返回 404，且页面已不含该职位编号或申请按钮；工业客户身份仍未公开。",
    next: "不再投递，也不向匿名客户发送敏感资料；等新编号开放并书面确认雇主、地址、合同和薪资后再恢复。",
    changeType: "round-30-direct-route-closed",
  },
  984: {
    ...CURATED[984],
    statusKey: "live",
    locationKey: "other",
    locationLabel: "Manresa / 每周 4 天办公室 + 1 天远程 / €35,000–40,000",
    reason: "原始 LinkedIn 职位 4441945681 在 2026-08-12 直连仍停留在准确详情页并显示 Solicitar；正文明确是 Manresa、每周四天到岗、一天远程，薪资 €35,000–40,000。",
    next: "作为 Manresa 通勤备选单独保留，不进入 Barcelona 默认结果。先确认实际地址、合同主体、每日工作语言和是否能提高远程比例，再用品牌、数字、社媒与 motion 案例申请。",
    changeType: "round-30-current-other-location",
  },
  1241: {
    ...CURATED[1241],
    statusKey: "closed",
    reason: "Cal Fruitós 已知的两个 LinkedIn 职位编号在 2026-08-12 直连都会跳到带 expired_jd_redirect 的通用搜索页；雇主官网当前招聘列表也没有平面与包装设计岗。",
    next: "保留为品牌、包装、POS 与完稿方向的历史参考，不再投递；只有雇主官网或新职位编号重新出现准确申请页时才恢复。",
    changeType: "round-30-direct-route-closed",
  },
});

// Reapply the Round 31 card-level verdicts here, after all older CURATED
// snapshots have been declared. This late assignment is the authoritative
// display state for the three directly rechecked records.
Object.assign(CURATED, {
  930839: {
    ...CURATED[930839],
    statusKey: "closed",
    reason: "CATORCE 旧 Visual Designer 编号 4797510008 当前直连跳到带 error=true 的职位总表，当前职位板已不再列出该岗位。另一个仍开放的 Studio Designer & HTML Programmer 已作为独立卡片保留，不能替代旧岗位的状态。",
    next: "保留旧岗位职责用于作品集对照，但不要继续投递搜索缓存中的表单；只有新的具体职位编号重新出现并能直达申请页时才恢复。",
    changeType: "round-31-direct-route-closed",
  },
  1107: {
    ...CURATED[1107],
    statusKey: "verify",
    reason: "THRU 页面正文仍完整列出 Graphic Designer with Motion Skills、Barcelona 办公方式、2026-09-15 截止日、动效测试和 jobs@thrumotion.com；但同页页脚同时写着 NO JOB OPENINGS，状态存在雇主页面内部冲突。",
    next: "先给 jobs@thrumotion.com 发一封简短确认邮件，得到书面确认后再投入时间完成 After Effects 复刻测试；确认前不把它算作完全开放。",
    changeType: "round-31-employer-page-conflict",
  },
  1310: {
    ...CURATED[1310],
    direction: "ecommerce",
    titleZh: "艺术指导（电商创意部门）",
    titleEs: "Art Director - Creative Department (eCommerce)",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona 可居住 / 细节待确认",
    languageKey: "unknown",
    language: "公开详情未说明日常工作语言",
    reason: "LinkedIn 原职位 4429897831 当前返回准确岗位名 Art Director - Creative Department (eCommerce)、Spain 和申请入口；但完整职责、资历、薪资、合同主体与工作语言尚未公开。",
    next: "先从申请入口索取完整 JD，并确认 Spain 合同、薪资、时区、语言与 Barcelona 居住资格；确认前保持低置信度，不做无薪测试。",
    changeType: "round-31-title-and-route-repair",
  },
});

// Round 32 is the authoritative verdict for ranks 26-60 and the remaining
// review-library routes. Direct current URLs outrank cached search pages.
Object.assign(CURATED, {
  1021: {
    ...CURATED[1021],
    direction: "ecommerce",
    company: "ZOE",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "UK / EU remote / Spain 合同待确认",
    titleZh: "创意效果设计师（中级）",
    titleEs: "Creative Performance Designer (Mid-Weight)",
    reason: "ZOE 官方 Ashby 当前准确岗位名为 Creative Performance Designer (Mid-Weight)，并非旧卡上的 Brand Performance Designer。工作覆盖付费社媒素材、模块化模板、本地化、拍摄与少量 motion。",
    next: "用英文 performance-creative 作品集申请；先确认 Spain 雇佣资格、薪资、产品拍摄安排和测试范围。",
    languageKey: "english",
    language: "英语工作；西班牙语未列为要求",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / performance creative",
    changeType: "round-32-title-repair",
  },
  920001: {
    ...CURATED[920001],
    direction: "brand",
    company: "PepsiCo / Alvalle",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 多地点岗位 / 办公节奏待确认",
    titleZh: "高级设计师（食品品牌、包装与产品架构）",
    titleEs: "Senior Designer - Food Ventures",
    reason: "PepsiCo 官方 requisition 464555 当前返回准确岗位名 Senior Designer - Food Ventures，并有 Apply now；职责包含 Alvalle 品牌策略、产品架构、视觉识别、包装与创新。",
    next: "用英文提交身份、包装与消费品牌全流程案例；确认 Barcelona 办公方式、薪资、语言和 15% 出差安排。",
    languageKey: "english",
    language: "国际品牌团队英语申请；本地工作语言待确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上 / 包装与产品架构",
    changeType: "round-32-title-repair",
  },
  945: {
    ...CURATED[945],
    direction: "brand",
    company: "OFF+BRAND",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EU remote / contract 或全职 / UK-EU 时区",
    titleZh: "高级品牌设计师（VI、指南与数字品牌系统）",
    titleEs: "Senior Brand Designer",
    reason: "雇主官方页面当前明确显示 Remote / UK / EU、Contract or Full-time、Apply Now 和可提交的 CV/作品集表单。职责直接覆盖视觉识别、品牌指南、艺术指导、Figma tokens/components、Web 延展和多触点一致性。",
    next: "这是高匹配欧洲远程 VI 机会；用英文完整品牌系统案例申请，并先确认 Spain 雇员或 contractor 形式、£ rate/年薪和项目分配。",
    languageKey: "english",
    language: "英语客户与团队沟通；UK/EU 工作时区",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上品牌设计",
    changeType: "round-32-promoted-official",
  },
  1000: {
    ...CURATED[1000],
    direction: "motion",
    company: "Designity",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "EMEA / LATAM 全远程 / Spain 可投 / 全职",
    titleZh: "动态设计师（AI 驱动的品牌与 Campaign）",
    titleEs: "Motion Designer (AI-Driven)",
    reason: "雇主官方页面当前显示 Full-time、Remote 和 Apply Now，并明确覆盖 EMEA/LATAM。工作包括品牌、社媒与数字 campaign 的 motion/video、storyboard、After Effects、Premiere、Lottie 和 AI 工作流；提供固定 base salary 与 paid PTO。",
    next: "仅在具备 5 年以上 motion 深度并可与美国东部时间重叠至少 5 小时时申请；先确认 Spain 合同、薪资和每日排班。",
    languageKey: "english",
    language: "英语工作；至少 5 小时美国东部时区重叠",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 motion",
    changeType: "round-32-promoted-official",
  },
});

const ROUND32_ARCHIVED_CURATED = new Map([
  [203, ["Amazon 官方职位 3126194 当前返回 HTTP 404，并明确提示岗位不可用；三周前的缓存页不能覆盖当前直连状态。", "保留旧 JD 作 Art Direction 作品集参考，等待新的 Amazon requisition。"]],
  [668, ["COROS 当前官方 careers 页已不再列出 Brand Creative Producer，只保留加拿大、运营与客服等岗位；通用邮箱不是当前 vacancy。", "保留品牌影像职责作历史参考，不再按该职位名投递。"]],
  [190, ["Stark Future 原 LinkedIn 职位已跳转到带 expired_jd_redirect 的通用搜索页。", "等待雇主官网或新职位编号重新发布。"]],
  [930871, ["Familia Torres 原 LinkedIn 职位已跳转到带 expired_jd_redirect 的通用搜索页。", "保留酒标与包装职责作参考，等待新职位。"]],
  [142, ["IRiS 原 LinkedIn 职位已跳转到带 expired_jd_redirect 的通用搜索页，官网没有替代申请。", "不把公司主页当作招聘入口；等待新 requisition。"]],
  [444, ["Locker in the City 原始详情明确写着 Ya no se aceptan solicitudes。", "保留四天工作制的数字品牌案例要求，等待重新发布。"]],
  [458, ["Product Madness / Aristocrat 原 LinkedIn 职位当前返回 HTTP 404，未找到当前同岗官方申请。", "公司地点页只作雇主研究，不作投递入口。"]],
  [258, ["Glovo 原 LinkedIn 职位已跳转到带 expired_jd_redirect 的通用搜索页，原 requisition 不再可申请。", "等待新的 Glovo 品牌设计编号。"]],
  [1278, ["MYLVA InfoJobs 页面虽然仍可阅读，但明确写着 No se aceptan más candidaturas para esta oferta。", "保留高相关 JD 作作品集对照，等待重新发布。"]],
  [843, ["FIRMAMENT Sports 唯一跟踪详情当前返回 HTTP 410 / Job unavailable。", "保留体育品牌与动效方向研究，不向通用邮箱冒充职位投递。"]],
  [1022, ["Kota 精确 Ashby URL 当前只有通用 Jobs 空壳，没有岗位名、正文或申请表。", "等待新的官方 Brand Designer requisition。"]],
  [1261, ["By Publications 跟踪详情当前返回 HTTP 410，并明确写招聘信息不可用。", "保留出版社研究；通用邮箱不算当前职位。"]],
  [997, ["Restate 精确 Ashby URL 当前只有通用 Jobs 空壳，没有岗位名、正文或申请表。", "等待新的官方 Founding Brand Designer requisition。"]],
]);
for (const [id, [reason, next]] of ROUND32_ARCHIVED_CURATED) {
  CURATED[id] = {
    ...CURATED[id],
    statusKey: "closed",
    reason,
    next,
    changeType: "round-32-direct-route-closed",
  };
}

for (const id of ROUND33_CLOSED_IDS) {
  const item = allData.find((record) => Number(record.id) === id);
  CURATED[id] = {
    ...CURATED[id],
    statusKey: "closed",
    reason: item?.status || "本轮直连复核确认原始职位已经失效。",
    next: item?.analysis || "保留历史证据；只有出现新的精确招聘详情和投递入口时才恢复。",
    changeType: "round-33-full-board-closed",
  };
}

Object.assign(CURATED, {
  930878: {
    direction: "brand",
    company: "Lateral Thinking",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / full-time / 现场制作",
    titleZh: "艺术指导（品牌体验、视觉识别与空间导视）",
    titleEs: "Art Director — Brand Experiences",
    reason: "2026-08-13 逐字读取了新的独立 LinkedIn 职位编号 4449819011：页面当前有 Apply，明确 Barcelona、全职，并负责 visual identity、key visual、signage、印刷、线上/线下品牌资产及现场制作监督。",
    next: "不要再投已关闭的旧编号 4436668875。只有具备 5 年以上品牌视觉经验、流利西语和现场制作/安装管理案例时，再通过新编号投递，并确认薪资与到岗节奏。",
    language: "流利西班牙语为明确硬门槛；英语和加泰罗尼亚语为加分项",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "round-34-new-requisition",
  },
  930879: {
    direction: "production",
    company: "DashBook",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / full-time",
    titleZh: "初级艺术指导（书籍封面、编辑设计与排版）",
    titleEs: "Directeur Artistique Junior",
    reason: "2026-08-13 逐字读取了新的独立 LinkedIn 职位编号 4450320977：页面当前有 Apply，明确 Barcelona、全职；职责包括书籍封面、编辑排版、字体规范、InDesign、Illustrator、Photoshop、制作排期与作者沟通。",
    next: "不要与已经关闭的旧 DashBook 卡片合并。整份 JD 为法语且需要直接协调作者与多团队，先用简短邮件确认日常工作语言；法语不可工作时不投入定制作品集时间。",
    language: "职位正文完全使用法语；未写明等级，但作者沟通和项目协调使法语很可能是实际工作门槛",
    languageKey: "unknown",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初级 / 编辑设计经验",
    changeType: "round-34-new-requisition",
  },
});

// Reapply the latest source verdicts after every historical refresh block so
// a stale generated record cannot turn an excluded role back into live.
applyRound21SourceUpdates();
applyRound22SourceUpdates();
applyRound23SourceUpdates();
applyRound24SourceUpdates();
applyRound25SourceUpdates();
applyRound26SourceUpdates();
applyRound27SourceUpdates();
applyRound28SourceUpdates();
applyRound29SourceUpdates();
applyRound30SourceUpdates();
applyRound31SourceUpdates();
applyRound32SourceUpdates();
applyRound33SourceUpdates();
applyRound35SourceUpdates();

// Profile-language audit: these overrides are based on the full current job
// text, not merely the language of a search result. They intentionally run
// after the historical source refreshes so an older "unknown" snapshot cannot
// promote a foreign-language role above Chinese-first opportunities.
Object.assign(CURATED, {
  105: {
    ...CURATED[105],
    direction: "digital",
    company: "Runroom",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 100% remote、hybrid 或本地办公",
    titleZh: "数字营销设计师（学生支持岗）",
    titleEs: "Digital Marketing Designer (Runroom)",
    reason: "当前原始详情仍可读，工作覆盖社媒、newsletter、landing page、案例网页、设计系统、动态 banner 和企业模板；但整份公开 JD 与本地团队说明均为西班牙语，且没有公开英语替代路径。",
    next: "先用简短消息确认是否可以主要用英语或中文沟通，以及非在读申请人是否符合；未确认前按西语工作环境处理，不投入定制材料。",
    languageKey: "spanishLikely",
    language: "公开 JD 完全使用西班牙语；未明写等级，但本地西语工作环境很可能",
    applicationMode: "spanishLikely",
    experienceKey: "junior",
    experienceLabel: "学生 / 无经验要求",
    changeType: "profile-language-audit",
  },
  876: {
    ...CURATED[876],
    languageKey: "spanishLikely",
    language: "职位全文与团队语境为西班牙语；未列等级，但日常西语很可能",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit",
  },
  877: {
    ...CURATED[877],
    languageKey: "spanishLikely",
    language: "招聘与现场生产说明为西班牙语；未列等级，但现场西语很可能",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit",
  },
  930718: {
    ...CURATED[930718],
    reason: "当前原始职位仍可申请；核心是响应式邮件、Figma 组件、模板库、品牌一致性与 landing page。职位明确要求专业西班牙语和英语，不能再归为语言未知。",
    next: "只有西语和英语都能用于工作，并能展示 HTML/CSS、AMPscript、Salesforce Marketing Cloud、邮件设计系统与 Figma handoff 时再投。",
    languageKey: "spanish",
    language: "专业西班牙语和英语均为明确要求",
    applicationMode: "spanish",
    changeType: "profile-language-audit",
  },
  352: {
    ...CURATED[352],
    languageKey: "english",
    language: "官网职位、申请说明和跨国客户协作均为英语；未列西语要求",
    applicationMode: "english",
    changeType: "profile-language-audit",
  },
  1093: {
    ...CURATED[1093],
    direction: "brand",
    company: "CATORCE / DDB Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 需按公司政策到岗",
    titleZh: "创意总监（西班牙市场 Campaign）",
    titleEs: "Creative Director",
    reason: "官方 Greenhouse 当前显示 Apply 与完整申请表，但明确要求完美的西班牙语口头和书面沟通、至少 10 年广告公司经验及 3–4 年创意总监经验。",
    next: "这是西语与资历双重硬门槛，不作为当前主攻；只在条件完全满足时再准备 360 Campaign、团队领导与汽车品牌案例。",
    languageKey: "spanish",
    language: "完美西班牙语为硬门槛；英语仅加分",
    applicationMode: "spanish",
    experienceKey: "lead",
    experienceLabel: "创意总监 / 10 年以上",
    changeType: "profile-language-audit",
  },
  1310: {
    ...CURATED[1310],
    reason: "当前职位全文已恢复：负责电商品牌 Campaign、产品发布、社媒、广告、网站与邮件的创意方向，并管理设计团队；要求 5 年以上。申请说明明确要求提交英文 CV。",
    next: "仅作为英文高级备选。若具备 5 年以上电商艺术指导与团队管理经验，用英文 CV 和品牌 Campaign 案例申请，并确认 Spain 合同、薪资与办公安排。",
    languageKey: "english",
    language: "申请明确要求英文 CV；国际协作按英文路径处理",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 / 团队管理",
    changeType: "profile-language-audit",
  },
  930879: {
    ...CURATED[930879],
    languageKey: "foreign",
    language: "整份 JD 为法语，且需直接协调作者与多团队；法语很可能是工作门槛",
    applicationMode: "foreign",
    changeType: "profile-language-audit",
  },
  930814: {
    ...CURATED[930814],
    direction: "brand",
    company: "CNT Management Consulting",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 全职 / 可安排 home office",
    titleZh: "高级品牌设计与创意内容经理",
    titleEs: "Senior Brand Designer & Creative Content Manager",
    reason: "当前 LinkedIn 雇主详情仍显示 Easy Apply、Barcelona、hybrid 与全职。完整 JD 已复核：负责企业与品牌识别、品牌指南、设计系统、数字与印刷物料、motion、视频和销售演示；但明确要求优秀的书面及口语英语，德语为强加分项，并要求 5 年以上经验。",
    next: "专业方向很匹配，但语言和资历门槛不匹配当前条件；仅放入英文高级备选，不再凭品牌匹配度进入主攻前列。",
    languageKey: "english",
    language: "优秀书面及口语英语为明确硬门槛；德语为强加分项",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    changeType: "profile-language-audit",
  },
  1061: {
    ...CURATED[1061],
    statusKey: "live",
    languageKey: "spanish",
    language: "英语与西班牙语均为明确必需条件",
    applicationMode: "spanish",
    reason: "原始职位要求已复核：Barcelona 创意制作岗位，要求 4–6 年经验，并明确把英语和西班牙语都列为 mandatory。专业内容不能抵消双语硬门槛。",
    next: "不作为当前主攻；只有英语和西语都达到工作水平并满足 4–6 年制作经验时再投。",
    changeType: "profile-language-audit",
  },
  345: {
    ...CURATED[345],
    statusKey: "live",
    languageKey: "english",
    language: "官方职位页、工作说明与申请邮箱均使用英语；未公开中文或低语言门槛路径",
    applicationMode: "english",
    reason: "Domingo 官网当前仍列出 Mid-Senior Graphic Design 与 Graphic Design Intern，并提供 talent@thisisdomingo.com；但公开招聘路径为英语。",
    next: "仅作 Barcelona 英文备选；先确认具体级别、合同、薪资与日常语言，再决定是否发送作品集。",
    changeType: "profile-language-audit",
  },
  886: {
    ...CURATED[886],
    languageKey: "spanishLikely",
    language: "Barcelona 本地社媒团队与公开职位语境为西班牙语；未公开英语或中文替代路径",
    applicationMode: "spanishLikely",
    reason: "JUNGLE 当前职位板仍有 MeMe Barcelona 的社媒艺术指导/图像与视频编辑相关岗位，但旧卡片标题与现行岗位名称可能已变化，且本地团队工作语言很可能为西班牙语。",
    next: "先核对旧 LinkedIn 职位是否仍对应当前岗位，并用简短消息确认能否主要用英语工作；未确认前只放西语备选层。",
    changeType: "profile-language-audit",
  },
  581: {
    ...CURATED[581],
    statusKey: "verify",
    languageKey: "spanish",
    language: "西班牙语与加泰罗尼亚语母语级为明确要求；另需中级英语",
    applicationMode: "spanish",
    reason: "可读职位要求明确写出母语级西班牙语和加泰罗尼亚语，并要求中级英语；现有按钮仅到 Montgat 通用搜索结果，尚未恢复可直接申请的独立详情页。",
    next: "语言门槛与投递入口均不适合当前主攻；保留复核记录，找到精确当前详情前不投。",
    changeType: "profile-language-audit",
  },
  1249: {
    ...CURATED[1249],
    statusKey: "closed",
    reason: "Henna Morena 的原始 LinkedIn 职位已跳转到带 expired_jd_redirect 的通用搜索页，不能再作为当前可投岗位。",
    next: "保留在关闭/历史区，不再投递；等待雇主官网或新的具体职位编号重新开放。",
    changeType: "profile-language-audit-closed",
  },
  1036: {
    ...CURATED[1036],
    statusKey: "live",
    languageKey: "english",
    language: "完整官网 JD 与申请流程均为英语；未列中文路径",
    applicationMode: "english",
    reason: "Algofy 官网当前仍开放 Graphic & Web Designer，覆盖 España/México/Argentina，完整 JD 为英语并有申请入口；属于英文数字设计备选。",
    next: "仅在能用英语完成面试与跨国协作，并确认 Spain 合同、办公安排和薪资后申请。",
    changeType: "profile-language-audit",
  },
  136: {
    ...CURATED[136],
    statusKey: "verify",
    languageKey: "english",
    language: "工作室官网、联系页与实习申请页均使用英语；未列中文路径",
    applicationMode: "english",
    reason: "Yellow Studio 联系页当前有明确的 LOOKING FOR AN INTERNSHIP? 入口，但不是公开全职职位；应按英语实习意向入口处理，不能当作已确认的正式设计岗。",
    next: "仅在符合实习/学校协议条件时打开实习表单；先确认期限、补贴、日常语言和具体设计职责。",
    links: ["https://yellowlab.eu/internship-application/"],
    changeType: "profile-language-audit",
  },
  382: {
    ...CURATED[382],
    statusKey: "live",
    languageKey: "spanishLikely",
    language: "完整招聘说明为西班牙语；未明列等级，但本地西语工作环境很可能",
    applicationMode: "spanishLikely",
    reason: "SIMORRA 的 FashionJobs 页面当前仍显示可发送 CV，Barcelona、6 个月全职实习、SMI 薪资，并要求在读且可签学校协议；公开 JD 为西班牙语。",
    next: "西语、在读身份和 convenio 都是当前主要门槛；只有三项均可满足时再投。",
    changeType: "profile-language-audit",
  },
  175: {
    ...CURATED[175],
    languageKey: "spanish",
    language: "英语或西班牙语须有一门流利，另一门至少中级；两门都构成实际工作门槛",
    applicationMode: "spanish",
    reason: "官方 Factorial 当前仍可申请，品牌与 Campaign 职责高度相关；但原文明确要求英语或西班牙语一门流利、另一门至少中级，不能再按单一英文路径处理。",
    next: "语言条件不符合当前主攻。只有一门达到流利、另一门达到中级，并满足 4 年以上 Campaign 经验时再投。",
    changeType: "profile-language-audit",
  },
  188: {
    ...CURATED[188],
    languageKey: "spanishLikely",
    language: "西语官网 JD 与 Barcelona 现场品牌团队表明日常西语很可能；另明确要求中高英语",
    applicationMode: "spanishLikely",
    reason: "官方职位仍显示 ¡Aplica ahora!、Barcelona 现场全职和 4 年以上要求。职责很贴近品牌宇宙、Campaign、零售与视觉一致性，但整份 JD 和本地团队语境为西班牙语，同时明确要求中高英语。",
    next: "先确认团队能否主要用英语协作；未得到书面确认前按西语工作环境处理，不投入定制作品集。",
    changeType: "profile-language-audit",
  },
  78: {
    ...CURATED[78],
    languageKey: "unknown",
    language: "官方详情提供英文版本，但没有公开日常工作语言或西语 / 加泰语要求；本地团队语言不可由网页语言替代",
    applicationMode: "unknown",
    reason: "Textura 官方详情与 cv@textura-interiors.com 入口仍然有效，工作精确覆盖视觉识别、brand toolkit、Campaign、社媒、Web、邮件和 POS；但英文网页只证明可阅读英文 JD，不证明岗位可以只用英语工作。",
    next: "先用简短邮件确认工作语言、合同、薪资和办公室节奏；只有明确接受当前语言水平后再投入定制 VI→全渠道案例。",
    auditSection: ROUND38_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  55: {
    ...CURATED[55],
    languageKey: "unknown",
    language: "Digital Designer 正文为英文但没有列语言等级；同页其他岗位的英语 / 西语要求不能自动套用到本岗",
    applicationMode: "unknown",
    reason: "BCome 官方 careers 仍列出 Barcelona Digital Designer 和直投邮箱，职责包含企业识别、SaaS、广告、演示、Figma 与 Motion；本岗没有自己的明确语言条款，不能继续标成已确认英语路径。",
    next: "先向 alba@bcome.biz 询问团队日常语言、是否需要西语、薪资、合同主体和办公室节奏；得到答复后再决定是否定制作品集。",
    auditSection: ROUND38_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  930823: {
    ...CURATED[930823],
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 永久全职 / €29,900–34,500",
    titleZh: "付费广告动态设计师（全球市场）",
    titleEs: "Paid Motion Designer",
    reason: "Factorial 当前官方职位 306539 显示 Apply now、Barcelona、永久全职与 €29,900–34,500；职责覆盖付费渠道 Motion 变体、品牌一致性、CTR / ROAS 迭代和 AI 工作流，并明确要求书面及口语英语流利。",
    next: "仅作为英语 Motion 备选。用 Paid Media Motion、短视频剪辑、品牌一致性和 AI 版本化案例申请；不要再使用无法确认的 316734 旧路径。",
    languageKey: "english",
    language: "书面及口语英语流利为明确硬门槛；其他语言仅加分",
    applicationMode: "english",
    links: ["https://careers.factorialhr.com/job_posting/paid-motion-designer-306539"],
    preferCuratedLinks: true,
    suppressLinkFragments: ["316734"],
    auditSection: ROUND38_SECTION,
    changeType: "profile-language-audit-current-route",
  },
  209: {
    ...CURATED[209],
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona Tasso / hybrid / Senior IC4",
    titleZh: "高级 UI / 视觉设计负责人（品牌语言与设计系统）",
    titleEs: "Lead UI - Visual Designer",
    reason: "同一官方 Teamtailor requisition 7207663 在 2026-08-12 曾返回 410，但 2026-08-13 已重新显示完整 JD、Join us 和申请表。岗位负责产品与营销的视觉品牌、视觉指南、设计系统、Campaign、UI、图标、插画和 Motion。",
    next: "恢复原卡，不新建重复席位；仅作为英语高级备选。申请前确认薪资、办公室天数、Spain 工作许可和是否接受当前英语水平。",
    languageKey: "english",
    language: "强英语沟通为明确要求；西语未列为硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / Senior IC4 / 视觉负责人",
    links: [
      "https://careers.bsport.io/jobs/7207663-lead-ui-visual-designer",
      "https://es.linkedin.com/jobs/view/lead-ui-visual-designer-at-bsport-4435255506",
    ],
    suppressLinkFragments: ["4382873380"],
    auditSection: ROUND38_SECTION,
    changeType: "profile-language-audit-reopened",
  },
  5106: {
    ...CURATED[5106],
    statusKey: "closed",
    reason: "与当前主卡 930836 是同一 CrowdStrike Workday requisition R29235；两个 URL 只是语言和路径形式不同，不是第二个岗位。",
    next: "保留为重复历史证据；统一使用 930836 的当前官方 Workday 与 LinkedIn 入口，不重复投递。",
    changeType: "profile-language-audit-duplicate",
  },
  156: {
    ...CURATED[156],
    statusKey: "closed",
    reason: "旧 Graphic Designer 详情仍可从搜索缓存找到，但 Heroes 当前官方职位板只列出 5 个其他岗位，已不再列该职位；缓存不能作为仍开放的证据。",
    next: "保留原职责与旧入口作为历史；只有 Heroes 官方职位板重新出现同一或新的 Graphic Designer requisition 时才恢复为可投。",
    changeType: "profile-language-audit-closed",
  },
});

// Round 39 applies one evidence rule consistently across the high-ranked
// backup set: an English-language page is not proof that English is the
// working language. Explicit requirements remain `english`; roles whose
// public brief does not name a working language become `unknown` and must be
// confirmed before a tailored application. Seniority is recorded separately
// so a prestigious lead role cannot outrank an attainable designer role.
Object.assign(CURATED, {
  930812: {
    ...CURATED[930812],
    statusKey: "closed",
    languageKey: "unknown",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 约 7 年",
    statusEvidence: "2026-08-13 复核：Skyscanner 官方 Design 分类当前显示 0 jobs，官方当前职位列表也不再列 Senior Visual Designer；原独立链接只进入验证码页，旧 LinkedIn 结果不能单独证明仍开放。",
    reason: "这曾是很贴近全球品牌系统与 Campaign 的 Barcelona 岗，但当前官方职位板已撤下该具体职位。",
    next: "完整保留为历史和作品集对标；只有 Skyscanner 官方职位板出现新的独立 requisition 与申请入口时再恢复。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-status-audit-closed",
  },
  930834: {
    ...CURATED[930834],
    languageKey: "unknown",
    language: "官方 Ashby 正文为英文，但没有明确列出工作语言等级",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    statusEvidence: "2026-08-13 复核：Linear 官方 Ashby requisition 仍返回完整 Production Designer 正文、Europe remote、全职与申请入口；要求约 2 年经验，但没有单列工作语言。",
    reason: "Europe remote 与品牌、Web、Campaign 制作方向有效，但不能把英文 JD 自动标成已确认英语路径。",
    next: "先确认西班牙雇佣资格、团队工作语言、时区和薪资；得到明确答复后再投入定制材料。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  930841: {
    ...CURATED[930841],
    languageKey: "unknown",
    language: "公开详情未明确工作语言；英文职位正文不能替代语言要求",
    applicationMode: "unknown",
    experienceKey: "lead",
    experienceLabel: "负责人 / 10–15 年及 5 年以上领导经验",
    statusEvidence: "2026-08-13 复核：当前详情仍指向 Barcelona 的欧洲视觉陈列负责人岗位；公开职责要求 10–15+ 年视觉陈列经验及至少 5 年领导经验，但未列明确工作语言。",
    reason: "零售 VI 系统方向相关，但这是欧洲负责人级别，不是当前可优先推进的设计师岗位。",
    next: "作为高阶行业画像保留；除非资历与领导经验完全匹配，否则不要占用主申请时间。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-seniority-audit",
  },
  920001: {
    ...CURATED[920001],
    languageKey: "unknown",
    language: "官方职位正文为英文，但没有公开工作语言或英语等级要求",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上品牌与包装经验",
    statusEvidence: "2026-08-13 复核：PepsiCo 官方 requisition 464555 的 JobPosting 结构、完整职位正文、Cornellà de Llobregat / Barcelona 地点与 Apply Now 仍存在；页面通用错误文案不是本岗关闭提示。职位本身未列语言等级。",
    reason: "品牌战略、产品架构、视觉识别与包装方向很贴合，但资历偏高且工作语言没有被官方正文证实。",
    next: "先确认团队工作语言、Barcelona 办公节奏、薪资和四年以上包装深度；确认可行后再准备食品品牌与包装系统案例。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  930837: {
    ...CURATED[930837],
    languageKey: "unknown",
    language: "公开正文未列英语或西语等级；需要与纽约团队协作不等于语言要求已证实",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    statusEvidence: "2026-08-13 复核：当前 LinkedIn 原始详情仍显示 Spain、申请按钮、100% remote、€30,000–40,000 与完整职责；要求 2+ 年并覆盖纽约团队到 18:00，但没有明确语言条款。",
    reason: "Spain remote 与电商品牌延展有效，薪资透明；工作语言仍须先确认。",
    next: "先确认工作语言、西班牙雇佣主体、合同类型和纽约时区重叠，再决定是否投递。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  866: {
    ...CURATED[866],
    languageKey: "unknown",
    language: "官方详情只有英文网页版本，没有列出英语、西语或德语工作门槛",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 视频与 Motion 经验",
    statusEvidence: "2026-08-13 复核：devicenow 官方职位板与 job 19847 仍显示 Barcelona hybrid、Video & Motion Graphics Specialist、Apply now 和表单；页面语言切换器不能作为英语工作要求证据。",
    reason: "岗位当前有效且地点合适，但偏视频与 Motion，工作语言未公开。",
    next: "先确认团队工作语言、薪资、合同与混合办公天数；可行后再用品牌视频和 Motion showreel 申请。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  224: {
    ...CURATED[224],
    languageKey: "unknown",
    language: "官方完整 JD 未列工作语言；英文职位正文不能视为英语要求已确认",
    applicationMode: "unknown",
    experienceKey: "lead",
    experienceLabel: "艺术负责人 / 需已上线游戏与团队领导经验",
    statusEvidence: "2026-08-13 复核：King 官方 Workday requisition R027791 仍显示 Apply、Barcelona 可选地点、全职和完整正文；硬门槛是已上线游戏的艺术指导与团队领导，语言未列。",
    reason: "包含 style guide 和 brand guideline，但核心是新手游艺术方向与团队领导，不是常规商业 VI 岗。",
    next: "除非具备已上线游戏和团队领导案例，否则仅作高阶参考；申请前先确认工作语言与 Barcelona 办公安排。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-seniority-audit",
  },
  134: {
    ...CURATED[134],
    languageKey: "unknown",
    language: "官方 careers 与申请页没有公开工作语言要求",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级艺术指导 / 年限待确认",
    statusEvidence: "2026-08-13 复核：SLAPS 官方 careers 仍列 Senior Art Director、Barcelona、Full Time，岗位申请页仍有 Start；语言、薪资和完整表单条件未公开。",
    reason: "品牌 Campaign 方向相关，但高级资历与工作语言都需要先确认。",
    next: "先确认语言、资历、薪资和表单可提交性；未确认前不投入大型定制提案。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  930874: {
    ...CURATED[930874],
    languageKey: "unknown",
    language: "Ogilvy 原始正文未列英语、西语或加泰语要求；英文文案本身不是工作语言证据",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年且至少 2 年 agency",
    statusEvidence: "2026-08-13 复核：Ogilvy 雇主原始 LinkedIn 详情仍显示 Barcelona、Solicitar 和完整 JD；要求 2–4 年及至少 2 年 agency，正文没有语言条款。",
    reason: "数字资产、短视频、Motion 与国际品牌延展有效，但工作语言必须先确认。",
    next: "先询问团队日常语言、客户会议语言与薪资；确认可行后再准备社媒视频和动态品牌延展案例。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  859: {
    ...CURATED[859],
    languageKey: "unknown",
    language: "Stripe 官方详情未单列工作语言；优秀书面与口头沟通不等于明确英语等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 Motion 与 3D",
    statusEvidence: "2026-08-13 复核：Stripe 官方 Motion Designer, Identity 详情仍显示 Apply now、Barcelona、Remote in Spain、全职及 €74,800–112,200；要求 5+ 年、After Effects 与 C4D/Houdini，但未列语言。",
    reason: "动态 VI 系统极度相关，但资历、3D 工具和未知工作语言都是实质门槛。",
    next: "先确认工作语言和 Barcelona/Spain remote 条件；只有 Motion 系统、3D 与五年以上资历匹配时再重点投递。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-seniority-audit",
  },
  930814: {
    ...CURATED[930814],
    languageKey: "unknown",
    language: "当前可读页面没有完整语言要求；国际公司环境不能替代本岗语言证据",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级品牌设计与内容管理 / 完整门槛待确认",
    statusEvidence: "2026-08-13 复核：CNT 当前 LinkedIn 原始入口仍显示 Barcelona 与 Easy Apply，但完整岗位正文仍无法读取；因此语言、资历、实际设计占比与薪资都不能视为已核定。",
    reason: "职位标题相关，但证据完整度不足，不能继续作为已确认英语高分卡。",
    next: "先打开申请表或向 recruiting@cnt-online.com 索取完整 JD；确认工作语言和动手设计占比后再评估。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  314: {
    ...CURATED[314],
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上",
    statusEvidence: "2026-08-13 复核：Qoria 官方 Rippling 职位板当前仍列 Digital Designer (Marketing)、Qustodio、Barcelona，并提供 exact job ce85988a-73a6-4314-a820-8d403dc527c9；完整 JD 明确要求 Fluent English，Spanish 仅 highly valued。",
    auditSection: ROUND39_SECTION,
    changeType: "profile-current-board-recheck",
  },
  1299: {
    ...CURATED[1299],
    titleZh: "EMEA 营销传播与内容实习生（12 个月）",
    titleEs: "Prácticas de comunicación de marketing y contenidos EMEA (12 meses)",
    internshipKey: true,
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  345: {
    ...CURATED[345],
    titleZh: "品牌平面设计师 / 平面设计实习生",
    titleEs: "Diseño gráfico de marca / Prácticas de diseño gráfico",
    languageKey: "unknown",
    language: "官方页面和申请材料使用英语，但没有公开规定日常工作语言",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "中高级正式岗或实习岗两个入口",
    internshipKey: false,
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1257: {
    ...CURATED[1257],
    titleZh: "Instagram 社媒与平面设计师",
    titleEs: "Community Manager de Instagram y Diseñador Gráfico",
    languageKey: "spanishLikely",
    language: "西语招聘页和 Barcelona 本地餐饮团队；未列等级，但日常西语沟通风险高",
    applicationMode: "spanishLikely",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1258: {
    ...CURATED[1258],
    titleZh: "平面设计师（社媒方向）",
    titleEs: "Diseñador/a Gráfico/a",
    languageKey: "spanishLikely",
    language: "西语招聘页和 Viladecans 本地岗位；未列等级，需先确认能否主要用英语工作",
    applicationMode: "spanishLikely",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  317: {
    ...CURATED[317],
    titleZh: "包装制稿与图稿经理",
    titleEs: "Artwork Manager",
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  579: {
    ...CURATED[579],
    titleZh: "高级平面设计师（餐饮品牌）",
    titleEs: "Diseñador/a Gráfico/a Senior",
    languageKey: "spanishLikely",
    language: "Castelldefels 线下餐饮品牌团队，招聘与协作语境为西语；未列正式等级",
    applicationMode: "spanishLikely",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  294: {
    ...CURATED[294],
    titleZh: "品牌激活与营销设计实习生",
    titleEs: "Prácticas de Marketing y Activación de Marca",
    languageKey: "spanish",
    language: "加泰罗尼亚语与西班牙语母语级、英语高级均为明确硬门槛",
    applicationMode: "spanish",
    internshipKey: true,
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1237: {
    ...CURATED[1237],
    titleZh: "平面与多媒体内容设计师",
    titleEs: "Diseñador/a Gráfico/a y Multimedia",
    languageKey: "spanishLikely",
    language: "Barcelona 本地西语招聘路径；公开详情未列语言等级，需先确认英语能否工作",
    applicationMode: "spanishLikely",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1036: {
    ...CURATED[1036],
    titleZh: "平面与网页设计师",
    titleEs: "Diseñador/a Gráfico/a y Web",
    languageKey: "unknown",
    language: "官网和申请页使用英语，但公开 JD 没有单列工作语言要求",
    applicationMode: "unknown",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1061: {
    ...CURATED[1061],
    titleZh: "创意制作人（护肤与时尚）",
    titleEs: "Creative Producer (Skincare & Fashion)",
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  1287: {
    ...CURATED[1287],
    titleZh: "平面设计与品牌策略实习生",
    titleEs: "Prácticas de Diseño Gráfico y Estrategia de Marca",
    languageKey: "unknown",
    language: "公开招聘页没有证明中文、西语或英语的工作等级",
    applicationMode: "unknown",
    internshipKey: true,
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  136: {
    ...CURATED[136],
    titleZh: "平面设计实习生",
    titleEs: "Prácticas de Diseño Gráfico",
    languageKey: "unknown",
    language: "官网使用英语，但岗位语言、学生协议和薪资仍需确认",
    applicationMode: "unknown",
    internshipKey: true,
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  382: {
    ...CURATED[382],
    titleZh: "平面设计实习生（时尚品牌）",
    titleEs: "Becaria/o de Diseño Gráfico",
    internshipKey: true,
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  860: {
    ...CURATED[860],
    titleZh: "营销协调员（平面设计方向）",
    titleEs: "Coordinador/a de Marketing con Diseño Gráfico",
    internshipKey: false,
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  581: {
    ...CURATED[581],
    titleZh: "平面设计师（品牌与包装执行）",
    titleEs: "Diseñador/a Gráfico/a",
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
  1243: {
    ...CURATED[1243],
    titleZh: "高级自由职业平面设计师（落地页与 Web）",
    titleEs: "Senior Graphic Designer Freelance (Landing Pages y Web)",
    languageKey: "unknown",
    language: "国际远程申请页未公开团队工作语言；需先确认英语或西语沟通要求",
    applicationMode: "unknown",
    auditSection: ROUND39_SECTION,
    changeType: "profile-language-label-repair",
  },
  1249: {
    ...CURATED[1249],
    titleZh: "平面与数字设计师（用户体验与 AI）",
    titleEs: "Diseñador/a Gráfico/a y Digital (UX e IA)",
    auditSection: ROUND39_SECTION,
    changeType: "profile-card-label-repair",
  },
});

// Round 40 continues the same evidence rule through ranks 26-60. An
// English-language careers page, application form or distributed team is not
// proof of a stated English requirement. Where the current original detail is
// live but does not name a work language, keep the opportunity and mark the
// language as unknown instead of silently promoting it as English-friendly.
Object.assign(CURATED, {
  910: {
    ...CURATED[910],
    languageKey: "unknown",
    language: "官方 Ashby 详情未列工作语言要求；英文职位页本身不算英语门槛证据",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    statusEvidence: "2026-08-13 复核：LABHOUSE 官方 Ashby 原始详情仍返回 Graphic Designer - Growth Team、Spain Remote、Full time 与申请页；当前正文未出现英语或西语要求。",
    auditSection: ROUND40_SECTION,
    changeType: "new",
  },
  930884: {
    ...CURATED[930884],
    languageKey: "unknown",
    language: "Ogilvy 当前完整正文未列英语、西语或加泰语要求",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / agency 2 年以上",
    statusEvidence: "2026-08-13 复核：Ogilvy 雇主 LinkedIn 原始详情 4434550264 仍返回 200、Barcelona 与 Art Director (Social Media)；正文要求至少 2 年 agency，但检出的 English/Spanish 只来自相关推荐和 LinkedIn 语言菜单。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  425: {
    ...CURATED[425],
    languageKey: "unknown",
    language: "当前官方详情受安全检查保护；此前完整 JD 未列明确工作语言等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "年限未公开",
    statusEvidence: "2026-08-13 复核：Revolut 当前官方 URL 返回安全检查而非关闭提示；此前已读取的 exact requisition 与申请入口仍作为当前证据保留，但没有抓到明确英语或西语条款。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  930826: {
    ...CURATED[930826],
    languageKey: "unknown",
    language: "正文明确 Spanish is not required, but a plus；没有另列英语等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "需已有时尚平面 / 印花经验，年限未写",
    statusEvidence: "2026-08-13 复核：Carati Studio 原始 LinkedIn 详情 4449873353 仍返回 200、Barcelona 和当前职责；正文明确西语不是必须、只是加分项，但没有写英语要求。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  456: {
    ...CURATED[456],
    languageKey: "unknown",
    language: "CBA Spain 页面只有英语 / 西语切换器，没有公开团队工作语言要求",
    applicationMode: "unknown",
    experienceKey: "open",
    experienceLabel: "开放投递 / 资历待确认",
    statusEvidence: "2026-08-13 复核：CBA Design Spain 官方开放投递页返回 200，仍有申请文本和表单；它不是具体 vacancy，且没有薪资、合同、资历或语言条款。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  535: {
    ...CURATED[535],
    languageKey: "unknown",
    language: "全球分布式团队与英文 JD 不等于正文已明确英语等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "公开 JD 未写固定年限 / 看作品集与全球协作经验",
    statusEvidence: "2026-08-13 复核：Supabase 官方 Ashby requisition 仍返回 200、Brand Designer、Remote、Full time 与全球招聘说明；正文未出现明确语言条款或固定年限。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  930847: {
    ...CURATED[930847],
    languageKey: "unknown",
    language: "官方 Greenhouse 页面没有单列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "毕业生 / 0–1 年 / 12 个月项目",
    statusEvidence: "2026-08-13 复核：Xapo 官方 Greenhouse 7800947003 仍返回 200、完整申请表、全球远程和 12 个月 graduate programme；明确 0–1 年，但未列语言要求。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1002: {
    ...CURATED[1002],
    languageKey: "unknown",
    language: "官方 Ashby 完整职位页没有明确工作语言要求",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "performance motion 经验需要，但年限未写",
    statusEvidence: "2026-08-13 复核：Pocket Worlds 官方 Ashby requisition 仍返回 200、Motion Designer (Marketing)、Remote International 与完整职责；正文未出现语言条款或明确年限。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  989: {
    ...CURATED[989],
    languageKey: "unknown",
    language: "Storisell 官方 careers 有多语种网站切换，但没有发布工作语言等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "Motion 制作经验需要，年限未写",
    statusEvidence: "2026-08-13 复核：Storisell 官方 careers 返回 200，页面仍出现 Motion Designer 六次、申请相关文本及表单；英语/西语只作为网站语言切换，不能证明岗位语言。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  854: {
    ...CURATED[854],
    languageKey: "unknown",
    language: "原始职位正文未列英语或西语等级；LinkedIn 菜单与推荐岗位不算证据",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "需 POD / apparel 专业经验，年限未写",
    statusEvidence: "2026-08-13 复核：Netenders 原始 LinkedIn 4421389114 仍返回 200、Barcelona 和完整 T-shirt Designer 正文；没有明确语言条款，且全职元数据与 freelance 正文仍存在冲突。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  874: {
    ...CURATED[874],
    languageKey: "unknown",
    language: "IKIGAI 当前官方详情未列英语或西语工作门槛",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "移动应用广告 Motion 经验需要，年限未写",
    statusEvidence: "2026-08-13 复核：IKIGAI 官方 Video Editor / Motion Designer 详情仍返回 200、Barcelona、混合办公与报名入口；页面未公开工作语言、固定年限或合同类型。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1092: {
    ...CURATED[1092],
    languageKey: "unknown",
    language: "Codeway 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    statusEvidence: "2026-08-13 复核：Codeway 官方 Ashby requisition 仍返回 200、Marketing Artist - Dramapops、Barcelona hybrid 与完整申请入口；要求 2+ 年，但页面没有明确语言条款。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  372: {
    ...CURATED[372],
    languageKey: "unknown",
    language: "原始 LinkedIn 正文未列英语或西语要求",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "未要求固定经验 / contractor",
    statusEvidence: "2026-08-13 复核：Molin AI 原始 LinkedIn 4429533464 仍返回 200、Barcelona contractor、€30,000 + equity 与当前内容创作职责；页面标注 Sin experiencia，未列语言等级。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
  446: {
    ...CURATED[446],
    languageKey: "unknown",
    language: "Refokus 官方 Brand Designer 页面未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    statusEvidence: "2026-08-13 复核：Refokus 官方页面仍返回 Brand Designer、Remote Worldwide、Full-Time 与完整职位正文；没有英语、西语或其他语言条款。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  84: {
    ...CURATED[84],
    languageKey: "unknown",
    language: "reboot 官方页面未列工作语言要求",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "年限未公开",
    statusEvidence: "2026-08-13 复核：reboot 官方申请页仍返回 Web Designer (Europe)、Full-time、Remote (Europe) 和职位正文；没有公开语言、固定年限、国家雇佣清单或合同主体。",
    auditSection: ROUND40_SECTION,
    changeType: "profile-language-experience-audit",
  },
});

// Round 41 extends the audit through ranks 61-100. Two current cards lost
// their employer-owned requisitions and move to history; the remaining
// language corrections preserve the roles while removing inferred English.
Object.assign(CURATED, {
  930844: {
    ...CURATED[930844],
    languageKey: "unknown",
    language: "Synthesia 官方 Ashby 正文没有单列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 6 年以上 / 出差要求",
    statusEvidence: "2026-08-13 复核：Synthesia 官方 Ashby 75c90455 仍返回 200、Senior Brand Designer, Experiential 与申请入口；6+ 年和欧美出差为硬门槛，但正文未列语言要求。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  601: {
    ...CURATED[601],
    languageKey: "unknown",
    language: "官方职位页使用英语，但未公开英语或西语等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "艺术指导 / 年限未公开",
    statusEvidence: "2026-08-13 复核：SIERRA 官方 jobs 页当前限制自动访问；最近一次完整官方页仍列 1 open position、Art Director、Barcelona 40 小时和直接申请邮箱，但没有语言条款。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1105: {
    ...CURATED[1105],
    languageKey: "unknown",
    language: "Bakken & Bæck 当前官方正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级自由职业 / 5 年以上",
    statusEvidence: "2026-08-13 复核：Bakken & Bæck 官方 Freelance Senior Art Director 页面仍返回 200、申请入口与 5+ 年要求；正文没有英语、西语或其他语言条款。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  1107: {
    ...CURATED[1107],
    languageKey: "unknown",
    language: "THRU 正文仅写 Spanish is a plus，没有另列英语等级",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    statusEvidence: "2026-08-13 复核：THRU 官方 jobs 页仍返回 200、完整 Graphic Designer with Motion Skills 正文、2 年门槛与申请邮箱；同页仍同时出现 NO JOB OPENINGS，继续保持 verify-first。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  990: {
    ...CURATED[990],
    languageKey: "unknown",
    language: "Revolut 搜索结果与受保护详情未提供明确工作语言等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "年限与完整门槛待确认",
    statusEvidence: "2026-08-13 复核：Revolut 官方搜索仍保留 Motion Designer 的 Spain remote 线索，但独立详情受安全检查 / cache miss 影响；继续 verify-first，不把英文职位名当作英语证据。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  930870: {
    ...CURATED[930870],
    statusKey: "closed",
    languageKey: "unknown",
    applicationMode: "unknown",
    statusEvidence: "2026-08-13 复核：FunPlus 原 job 293622 现在只落到通用职位板，正文不再出现 Graphic Design Intern；当前官方板只列 Senior Brand Manager，已没有该设计实习。",
    reason: "原来可投的 Barcelona Graphic Design Intern 已从雇主当前职位板撤下。",
    next: "完整保留为历史；只有 FunPlus 官方板出现新的 Graphic Design / Brand Design requisition 时再恢复。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-status-audit-closed",
  },
  12: {
    ...CURATED[12],
    languageKey: "unknown",
    language: "turbopuffer 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "年限未公开 / 首位综合设计师",
    statusEvidence: "2026-08-13 复核：turbopuffer 官方 Ashby f3d9a49d 仍返回 200、Designer、Europe remote 与当前申请入口；岗位覆盖产品、品牌、Web 和 Campaign，但未列语言或固定年限。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  2942: {
    ...CURATED[2942],
    languageKey: "unknown",
    language: "SLAPS 当前 careers 与申请页未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "junior",
    experienceLabel: "初级 / Full Time 或 Internship 条款待确认",
    statusEvidence: "2026-08-13 复核：SLAPS 官方 careers 仍返回 200 并列 Junior Graphic Designer、Barcelona、Full Time / Internship；申请页仍可启动，但没有语言、薪资或最终合同类型。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1020: {
    ...CURATED[1020],
    languageKey: "unknown",
    language: "COCUNAT 官方英文职位页未列英语或西语等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 4 年以上",
    statusEvidence: "2026-08-13 复核：COCUNAT 官方 Personio 2210442 仍返回 200、Senior Video Ads Designer、Barcelona、全职长期与申请入口；明确 4+ 年，但正文未列语言要求。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  443: {
    ...CURATED[443],
    languageKey: "unknown",
    language: "DuckDuckGo 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "lead",
    experienceLabel: "负责人 / 9 年以上",
    statusEvidence: "2026-08-13 复核：DuckDuckGo 官方 Ashby 2b76bbee 仍返回 200、Spain remote 与当前申请入口；9+ 年和 hands-on lead 为硬门槛，正文未列语言等级。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-language-experience-audit",
  },
  209: {
    ...CURATED[209],
    statusKey: "closed",
    statusEvidence: "2026-08-13 再复核：bsport 官方 7207663 当前再次返回 HTTP 410；官方职位板返回 200，但没有 Lead UI 或 Visual Designer，也没有同名新 requisition。",
    reason: "该职位曾短暂恢复，但当前雇主详情和职位板都已撤下这一具体岗位。",
    next: "保留在历史并监控 bsport 官方板；不要用现有 Senior Product Designer 代替品牌 / 视觉岗。",
    auditSection: ROUND41_SECTION,
    changeType: "profile-status-audit-closed",
  },
});

// Round 42 audits ranks 101-140 and replaces Ametller's dead Workday number
// with the employer's newly indexed requisition. International or English-page
// roles remain available, but only explicit language requirements count as
// confirmed English paths.
Object.assign(CURATED, {
  996: {
    ...CURATED[996],
    languageKey: "unknown",
    language: "PriorityChef 官方 Workable 申请页未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "Amazon / 电商视觉能力需要，固定年限未写",
    statusEvidence: "2026-08-13 复核：PriorityChef 官方 Workable 666D4E893E 当前返回 200、Amazon Creative Designer 与完整申请表；未发现英语或西语要求，也没有固定年限。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-experience-audit",
  },
  985: {
    ...CURATED[985],
    languageKey: "unknown",
    language: "The Builder Studios 官方页面未公开工作语言等级",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上 / freelance",
    statusEvidence: "2026-08-13 复核：The Builder Studios 官方 Visual Designer 页面当前限制自动访问；最近完整官方页仍列 EU timezones remote、freelance、3+ 年与嵌入申请表，但没有语言条款。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  864: {
    ...CURATED[864],
    statusKey: "live",
    languageKey: "spanishLikely",
    language: "完整官方 JD 为加泰语且在 Olèrdola 本地包装 / 供应商语境工作；未列语言等级，但加泰语 / 西语风险高",
    applicationMode: "spanishLikely",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上包装与完稿经验",
    links: [
      "https://ametllerorigen.wd3.myworkdayjobs.com/es/CareerSite/job/OLERDOLA/LIDER-D-ART-EN-PACKAGING_JR107430",
      "https://corp.ametllerorigen.com/es/trabaja-con-nosotros/",
    ],
    preferCuratedLinks: true,
    suppressLinkFragments: ["JR106376", "3eb6ced14f3dc5cf"],
    statusEvidence: "2026-08-13 复核：Ametller 官方 Workday API 当前以 packaging 搜到新 requisition JR107430，标题 LIDER D'ART EN PACKAGING，2026-07-24 发布且无结束日期；正文要求 5 年以上，旧 JR106376 已被新编号替代。",
    reason: "当前是新的官方包装艺术负责人 requisition，不再使用失效旧编号；方向高度贴包装品牌治理，但地点、5 年资历及加泰语本地语境都是高门槛。",
    next: "先确认团队是否接受主要用英语 / 基础西语协作、两处办公地点、混合节奏、薪资与驾车要求；语言不可行时不投入重型包装提案。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-current-requisition-replacement",
  },
  1000: {
    ...CURATED[1000],
    languageKey: "unknown",
    language: "Designity 当前官方职位正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 Motion",
    statusEvidence: "2026-08-13 复核：Designity 官方 Motion Designer (AI-Driven) 页面当前限制自动访问；最近完整官方页仍列 EMEA/LATAM remote、全职和申请入口，但没有明确语言条款。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  1024: {
    ...CURATED[1024],
    languageKey: "unknown",
    language: "DualEntry 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 7 年以上",
    statusEvidence: "2026-08-13 复核：DualEntry 官方 Ashby 564fa354 当前返回 200、Senior Motion Designer、Remote 与完整申请入口；7+ 年及纽约时区重叠是硬门槛，正文未列语言。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1021: {
    ...CURATED[1021],
    languageKey: "unknown",
    language: "ZOE 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / Mid-Weight performance creative",
    statusEvidence: "2026-08-13 复核：ZOE 官方 Ashby 0387dca9 当前返回 200、Creative Performance Designer (Mid-Weight)、UK/EU remote 与申请入口；正文未列语言等级。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  1098: {
    ...CURATED[1098],
    languageKey: "unknown",
    language: "Codeway 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 4–5 年以上",
    statusEvidence: "2026-08-13 复核：Codeway 官方 Ashby c59cd8a0 当前返回 200、Senior Creative Marketing Manager、Barcelona hybrid 与申请入口；正文没有明确语言条款。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-audit-unknown",
  },
  930867: {
    ...CURATED[930867],
    languageKey: "unknown",
    language: "Fantasy 官方 Lever 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 Motion、Brand 与 Digital",
    statusEvidence: "2026-08-13 复核：Fantasy 官方 Lever e1833bc1 当前返回 200、Senior Creative Designer - Marketing、UK/EU remote 与申请入口；明确 5+ 年，但未列语言等级。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-experience-audit",
  },
  942: {
    ...CURATED[942],
    languageKey: "unknown",
    language: "Co-Star 官方 Greenhouse 正文未列工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 IC / 5–8 年",
    statusEvidence: "2026-08-13 复核：Co-Star 官方 Greenhouse 6126693004 当前返回 200、Brand Designer、Remote 与申请表；明确 5–8 年，正文中的 language 只描述占星与设计语言，不是英语要求。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-experience-audit",
  },
  1029: {
    ...CURATED[1029],
    languageKey: "unknown",
    language: "Together 官方职位页未列明确工作语言等级",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "高级 / 8 年以上品牌系统经验",
    statusEvidence: "2026-08-13 复核：Together 官方 Senior Brand Designer 页面当前返回 200、Remote UK & Europe、申请表和 £40k–65k；明确 8+ 年，但未出现英语等级要求。",
    auditSection: ROUND42_SECTION,
    changeType: "profile-language-experience-audit",
  },
});

// Round 43 finishes the current-board language and feasibility pass. A page's
// language only counts when the vacancy text states a requirement; a local
// Spanish/Catalan working context without a written level remains a risk label,
// not a fabricated hard gate. Exact duplicate and removed-listing cards move to
// history while their original evidence remains preserved.
Object.assign(CURATED, {
  1000: {
    ...CURATED[1000],
    languageKey: "english",
    language: "官方正文明确要求扎实的英语口头与书面沟通能力",
    applicationMode: "english",
    statusEvidence: "2026-08-13 再复核：Designity 官方 Motion Designer 页面当前返回 200、显示 Apply now；正文明确写出 solid verbal and written English communication skills，并要求 5+ 年 Motion。",
    changeType: "profile-language-audit-explicit-english",
  },
  930873: {
    ...CURATED[930873],
    languageKey: "spanishLikely",
    language: "英语中等以上明确；现场西语编辑团队语境高概率，但未列西语等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  930885: {
    ...CURATED[930885],
    languageKey: "spanishLikely",
    language: "完整公开 brief 为西语且本地客户协作；未列明确语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  37: {
    ...CURATED[37],
    languageKey: "unknown",
    language: "英语课是公司福利，不是招聘条件；正文未列工作语言等级",
    applicationMode: "unknown",
    changeType: "profile-language-audit-unknown",
  },
  88: {
    ...CURATED[88],
    experienceKey: "lead",
    experienceLabel: "负责人 / 7–8 年 / 团队带领与复杂品牌系统",
    changeType: "profile-experience-audit-lead",
  },
  930888: {
    ...CURATED[930888],
    statusKey: "closed",
    languageKey: "foreign",
    language: "中高英语与加泰语明确要求",
    applicationMode: "foreign",
    statusEvidence: "2026-08-13 去重复核：LinkedIn 4441238571 的正文、语言、年限和隐藏官方编号均与当前 VML requisition 8634604002 相同；保留 930712 为官方主卡，本镜像转入历史。",
    reason: "同一个 VML Art Director requisition 的 LinkedIn 镜像，不应占第二个当前岗位名额。",
    changeType: "profile-duplicate-archive",
  },
  577: {
    ...CURATED[577],
    languageKey: "spanishLikely",
    language: "英语与加泰语仅列为加分项；现场本地协作的西语风险高，但未列硬等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  930712: {
    ...CURATED[930712],
    languageKey: "foreign",
    language: "中高英语与加泰语为明确要求",
    applicationMode: "foreign",
    links: ["https://www.vml.com/careers/job/8634604002-es-art-director"],
    preferCuratedLinks: true,
    suppressLinkFragments: ["4443713564"],
    changeType: "profile-language-and-canonical-link-audit",
  },
  981: {
    ...CURATED[981],
    languageKey: "foreign",
    language: "高水平英语与加泰语为明确要求",
    applicationMode: "foreign",
    changeType: "profile-language-audit-foreign",
  },
  277: {
    ...CURATED[277],
    languageKey: "foreign",
    language: "高水平英语与加泰语为明确要求；未列西语等级",
    applicationMode: "foreign",
    changeType: "profile-language-audit-foreign",
  },
  375: {
    ...CURATED[375],
    languageKey: "english",
    language: "官方正文明确要求非常高或母语级英语 C1+/C2；未列西语要求",
    applicationMode: "english",
    changeType: "profile-language-audit-explicit-english",
  },
  867: {
    ...CURATED[867],
    languageKey: "spanishLikely",
    language: "Sant Cugat 本地团队与西语公开 brief；未列明确语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  445: {
    ...CURATED[445],
    languageKey: "unknown",
    language: "Playson 官方 Ashby 正文未列工作语言等级",
    applicationMode: "unknown",
    changeType: "profile-language-audit-unknown",
  },
  1296: {
    ...CURATED[1296],
    languageKey: "spanishLikely",
    language: "西语本地 agency 语境高概率；官方正文未列西语或英语等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  930829: {
    ...CURATED[930829],
    languageKey: "spanishLikely",
    language: "酒业总部与西语公开 brief 的本地语境高概率；未列语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  93: {
    ...CURATED[93],
    languageKey: "foreign",
    language: "高水平英语与加泰语为明确要求",
    applicationMode: "foreign",
    changeType: "profile-language-audit-foreign",
  },
  1094: {
    ...CURATED[1094],
    experienceKey: "lead",
    experienceLabel: "创意总监 / 10+ 年代理公司 / 3–4 年总监经验",
    changeType: "profile-experience-audit-lead",
  },
  581: {
    ...CURATED[581],
    statusKey: "closed",
    statusEvidence: "2026-08-13 复核：当前 InfoJobs Montgat 列表返回 200，但已不再出现原平面设计职位或对应详情，只剩其他职位；原线索转入历史，列表入口继续保留作证据。",
    reason: "当前来源页已移除该设计岗位，不能继续作为可投或待确认名额。",
    changeType: "profile-removed-listing-archive",
  },
  930876: {
    ...CURATED[930876],
    languageKey: "spanishLikely",
    language: "Viladecans 本地实习与西语公开 brief；正文未列明确语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  86: {
    ...CURATED[86],
    languageKey: "spanishLikely",
    language: "Barcelona agency 实习与西语公开 brief；正文未列明确语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  930865: {
    ...CURATED[930865],
    languageKey: "unknown",
    language: "匿名合作公司正文未列工作语言等级",
    applicationMode: "unknown",
    changeType: "profile-language-audit-unknown",
  },
  351: {
    ...CURATED[351],
    languageKey: "spanishLikely",
    language: "Barcelona paid-media agency 本地语境高概率；正文未列语言硬门槛",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  1011: {
    ...CURATED[1011],
    languageKey: "unknown",
    language: "JustMarkets 官方正文未列英语或其他语言等级",
    applicationMode: "unknown",
    changeType: "profile-language-audit-unknown",
  },
  930843: {
    ...CURATED[930843],
    languageKey: "spanishLikely",
    language: "Barcelona 本地实习与西语公开 brief；正文未列明确语言等级",
    applicationMode: "spanishLikely",
    changeType: "profile-language-audit-local-risk",
  },
  304: {
    ...CURATED[304],
    languageKey: "unknown",
    language: "Vista 官方职位正文未列英语或西语能力要求",
    applicationMode: "unknown",
    statusEvidence: "2026-08-13 复核：Vista 官方 Spain-remote Lead UX Designer, AI LogoMaker 页面返回 200、显示 Apply now 和完整正文；5+ 年及 Lead 资历明确，但未列工作语言等级。",
    changeType: "profile-language-audit-unknown",
  },
  579: {
    ...CURATED[579],
    links: [
      "https://www.infojobs.net/castelldefels/disenador-grafico/of-id70f73ce2843f2842d228801f65a9e",
      "https://www.infojobs.net/gestion-hostelocio/em-i98545453515257711011152016245053502781",
    ],
    preferCuratedLinks: true,
    suppressLinkFragments: ["/ofertas-trabajo/barcelona/castelldefels/"],
    statusEvidence: "2026-08-13 复核：从 InfoJobs Castelldefels 列表找回精确详情 d70f73ce2843f2842d228801f65a9e；详情返回 200、未显示关闭，正文仍列 Gestión Hostelocio、现场全职、餐饮品牌视觉与高级作品集要求。",
    changeType: "profile-canonical-link-recovery",
  },
});

const ROUND43_AUDITED_IDS = Object.freeze([
  930842, 1000, 930873, 1024, 930885, 37, 224, 483, 996, 1036, 1098, 930867, 1097, 1240, 88,
  930824, 930878, 930888, 577, 942, 1029, 1237, 313, 930712, 172, 981, 277, 1287, 375, 382, 867, 445,
  579, 25, 210, 1296, 1314, 443, 136, 930829, 93, 1094, 581, 930876, 294, 86, 930865, 351, 89, 1011,
  27, 930887, 930886, 1093, 1099, 930843, 1243, 304,
]);
for (const id of ROUND43_AUDITED_IDS) {
  if (CURATED[id]) CURATED[id] = { ...CURATED[id], auditSection: ROUND43_SECTION };
}
for (const id of [930888, 581]) {
  const item = allData.find((entry) => Number(entry.id) === id);
  if (item) item.tier = "X";
}

const ROUND44_SECTION = "2026-08-13 Round 44 official-board duplicate reconciliation";
const ROUND44_REMEDY_LINKS = Object.freeze([
  "https://job-boards.greenhouse.io/omnicomhealth/jobs/5207339008",
  "https://job-boards.greenhouse.io/remedyedgespain/jobs/5207341008",
]);

// Greenhouse exposes this one Remedy Edge trainee opening through two current
// Omnicom boards. Their normalized 1,806-character bodies, location and
// updated_at values are identical, so keep one opportunity with two resilient
// official application routes instead of inflating the vacancy count.
const round44RemedyCurrent = allData.find((entry) => Number(entry.id) === 958);
if (round44RemedyCurrent) {
  Object.assign(round44RemedyCurrent, {
    section: ROUND44_SECTION,
    status: "2026-08-13 official-board reconciliation: Omnicom Health requisition 5207339008 and Remedy Edge Spain requisition 5207341008 are both open and show complete application forms. Their normalized 1,806-character vacancy bodies, Barcelona location and 2026-07-14 update timestamp are identical, so they are one paid Graphic Designer Trainee opening, not two vacancies. The role covers editorial, landing pages, banners, web, social, logos and brand guidelines; advanced English and a university internship agreement are mandatory.",
    contact: `Canonical Omnicom application: ${ROUND44_REMEDY_LINKS[0]} ; alternate Remedy Edge Spain application: ${ROUND44_REMEDY_LINKS[1]}`,
    links: [...ROUND44_REMEDY_LINKS],
  });
}

Object.assign(CURATED, {
  958: {
    ...CURATED[958],
    statusKey: "live",
    links: [...ROUND44_REMEDY_LINKS],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：Omnicom 5207339008 与 Remedy Edge Spain 5207341008 均有完整申请表；两页的 1,806 字规范化正文、Barcelona 地点和更新时间完全一致，因此合并为一个现行实习岗位、保留两个官方投递入口，不重复计数。",
    reason: "同一 Remedy Edge 带薪平面设计实习经两个 Omnicom Greenhouse 招聘板发布。职责包含编辑、数字物料、logo 与品牌指南，但明确要求高级英语和大学实习协议，因此仍是低分备选，不因出现两个入口而加分。",
    next: "只有能签大学实习协议且能承担高级英语工作时再投；优先使用 Omnicom 主入口，若提交异常再使用 Remedy Edge Spain 备用入口。",
    auditSection: ROUND44_SECTION,
    changeType: "round-44-canonical-two-route-merge",
  },
  930638: {
    ...CURATED[930638],
    statusKey: "closed",
    reason: "旧 Omnicom Greenhouse requisition 4542432008 于 2026-08-13 返回 404；其职责与现行 Remedy Edge 实习相同，不再作为独立可投岗位。",
    next: "保留在关闭/历史区作旧入口证据；现行投递只使用合并后的 5207339008 / 5207341008 卡片。",
    auditSection: ROUND44_SECTION,
    changeType: "round-44-closed-duplicate-route",
  },
});

const round44RemedyHistorical = allData.find((entry) => Number(entry.id) === 930638);
if (round44RemedyHistorical) {
  Object.assign(round44RemedyHistorical, {
    section: ROUND44_SECTION,
    status: "Closed/duplicate history: the former Omnicom Greenhouse requisition 4542432008 now returns 404. Its Graphic Designer Internship brief is represented by the current canonical Remedy Edge opening 5207339008 / 5207341008, so this old route must not count as a separate live vacancy.",
    analysis: "Keep only as historical evidence. Do not apply through the removed 4542432008 route; use the single current Remedy Edge trainee card and its two verified official application links.",
    tier: "X",
  });
}

const ROUND45_SECTION = "2026-08-13 Round 45 Chinese-source identity and remote-eligibility audit";
const ROUND45_CHINESE_AD_LINKS = Object.freeze([
  "https://www.es02.com/jobs/Recruitment/barcelona/i184673.html",
  "https://xihua.es/forum.php?mod=viewthread&tid=637173",
]);

// The August ES02 repost and the older Xihua/Huaxin record are the same
// Barcelona vacancy: role, requirements, publisher identity, phone and WeChat
// all match exactly. Keep the fresh ES02 record as canonical and preserve the
// older salary evidence as history instead of counting two opportunities.
Object.assign(CURATED, {
  778: {
    ...CURATED[778],
    statusKey: "verify",
    links: [...ROUND45_CHINESE_AD_LINKS],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：ES02 184673 仍可直接读取，发布于 2026-08-06，岗位是 Barcelona 全职平面设计师，要求有经验、会 AI/Illustrator、备工作居留并写明全保；联系人小陈、电话 644055418、微信 A644055418。其岗位、要求、地点和联系方式与西华 637173 完全一致，因此只计一个现行机会。",
    reason: "这是同一华人广告店岗位的最新规范卡。ES02 8 月重发负责证明近期需求，旧西华帖补充了 €1,410–1,600 税后薪资栏；两者不能重复计数。公司全称、CIF、地址、工时、合同和日常工作语言仍需中文确认。",
    next: "先通过微信或电话确认公司全称/CIF、地址、岗位仍开放、实际薪资、工时、合同、试用期和工作语言；主体和书面条件明确前，不发居留证扫描件、护照或可编辑源文件。",
    auditSection: ROUND45_SECTION,
    changeType: "round-45-canonical-chinese-repost-merge",
  },
  930835: {
    ...CURATED[930835],
    statusKey: "closed",
    reason: "西华 637173 与当前规范卡 778 使用完全相同的 Barcelona 全职设计岗位、要求、联系人陈、电话 644055418 和微信 A644055418；它是同一岗位的旧帖，不是第二个机会。",
    next: "保留旧帖及 €1,410–1,600 税后薪资栏作为历史证据；当前核验和联系统一从卡片 778 进行。",
    auditSection: ROUND45_SECTION,
    changeType: "round-45-closed-same-contact-duplicate",
  },
  920: {
    ...CURATED[920],
    statusKey: "verify",
    statusEvidence: "2026-08-13 复核：智联招聘原始详情仍可完整读取并显示立即沟通。岗位为成都锦江、兼职 / 项目制、招聘 10 人、月薪栏 ¥10,000–15,000，职责精确覆盖社媒、网站、宣传物料、品牌 VI 一致性；但没有说明接受西班牙居民、境外签约或跨境付款。",
    reason: "中文和 VI 方向高度匹配，但‘远程协作’只描述工作方式，不等于 Spain remote。未确认西班牙居住资格、合同与跨境付款前，必须低于 Barcelona 本地机会和明确 Spain / Europe remote 岗位。",
    next: "只先通过智联询问是否接受 Barcelona 常住者、合同主体、人民币区间口径、每周工时、时区重叠、跨境付款与税务；得到书面确认后再按正式远程机会准备材料。",
    auditSection: ROUND45_SECTION,
    changeType: "round-45-china-remote-eligibility-penalty",
  },
});

const round45ChineseAdCurrent = allData.find((entry) => Number(entry.id) === 778);
if (round45ChineseAdCurrent) {
  Object.assign(round45ChineseAdCurrent, {
    section: ROUND45_SECTION,
    status: "Verify first, canonical current repost: ES02 detail 184673 remains readable and was posted 2026-08-06 for one full-time Barcelona graphic designer with experience, Illustrator/AI, valid work residence and full social insurance. Publisher Xiao Chen, phone 644055418 and WeChat A644055418 exactly match Xihua 637173, so the two source pages represent one vacancy.",
    contact: `Current ES02 detail: ${ROUND45_CHINESE_AD_LINKS[0]} ; historical same-contact Xihua evidence: ${ROUND45_CHINESE_AD_LINKS[1]} ; WeChat A644055418 ; phone +34 644 055 418`,
    links: [...ROUND45_CHINESE_AD_LINKS],
    analysis: "Keep one canonical current card. The August ES02 repost proves recent demand and the older Xihua page preserves its EUR1,410-1,600 net salary field, but identical contact and vacancy details mean they are not separate jobs. Confirm employer identity and written terms in Chinese before sending sensitive documents or editable source files.",
  });
}

const round45ChineseAdHistorical = allData.find((entry) => Number(entry.id) === 930835);
if (round45ChineseAdHistorical) {
  Object.assign(round45ChineseAdHistorical, {
    section: ROUND45_SECTION,
    status: "Closed/duplicate history: Xihua 637173 is the older same-contact version of canonical current ES02 card 778. Both name a Barcelona full-time designer, experience plus Illustrator/AI, work residence, full social insurance, contact Chen, phone 644055418 and WeChat A644055418.",
    analysis: "Preserve the old Xihua page and its EUR1,410-1,600 net salary field as historical evidence, but do not count or rank it as a second vacancy. Verify the current need through canonical card 778.",
    tier: "X",
  });
}

const round45ChinaRemote = allData.find((entry) => Number(entry.id) === 920);
if (round45ChinaRemote) {
  Object.assign(round45ChinaRemote, {
    section: ROUND45_SECTION,
    status: "2026-08-13 recheck: the original Zhaopin page remains readable and shows immediate chat. It is a Chengdu/Jinjiang part-time or project-based Brand Visual Designer opening for ten people with a CNY10,000-15,000 salary field, but it does not state Spain residency, overseas contracting or international payment eligibility.",
    analysis: "Keep in the Chinese manual queue because the VI and Chinese-language fit are strong. Do not treat the word remote as Spain eligibility: ask about Barcelona residency, contract entity, weekly hours, timezone, cross-border payment and tax before preparing a full application.",
  });
}

const ROUND46_SECTION = "2026-08-13 Round 46 user-fit score recalibration";
const ROUND46_PLANETA_LINKS = Object.freeze([
  "https://grupoplaneta.talentclue.com/es/node/127111935/4590/modal",
  "https://www.linkedin.com/jobs/view/4440282206/",
  "https://jobs.planeta.es/",
]);

// The exact current LinkedIn employer page independently confirms that the
// official Grupo Planeta requisition is still accepting applications. Keep
// the TalentClue form canonical and retain LinkedIn only as current evidence.
const round46Planeta = allData.find((entry) => Number(entry.id) === 930873);
if (round46Planeta) {
  Object.assign(round46Planeta, {
    section: ROUND46_SECTION,
    status: "2026-08-13 current-source refresh: official TalentClue requisition 127111935 still exposes the Barcelona application form, and exact LinkedIn employer detail 4440282206 visibly shows Solicitar and no closed marker. The role designs non-fiction book covers and launch graphics, leads selected art-direction projects and requires at least five years plus intermediate-or-higher English.",
    contact: `Official application: ${ROUND46_PLANETA_LINKS[0]} ; current employer detail: ${ROUND46_PLANETA_LINKS[1]} ; careers hub: ${ROUND46_PLANETA_LINKS[2]}`,
    links: [...ROUND46_PLANETA_LINKS],
  });
}

Object.assign(CURATED, {
  930873: {
    ...CURATED[930873],
    links: [...ROUND46_PLANETA_LINKS],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：Grupo Planeta 官方 TalentClue 127111935 仍提供 Barcelona 申请表；雇主 LinkedIn 精确页 4440282206 同时显示 Solicitar，未显示关闭。正文明确 5 年以上与中级以上英语；现场西语编辑团队语境仍按高概率门槛处理。",
    reason: "这是真实开放的 Barcelona 平面与编辑设计岗，覆盖封面概念、字体、艺术指导、上市物料和生产；但 5 年以上、英语中级以上与现场西语环境都是真实门槛，因此保留但不能高排。",
    latestAuditSection: ROUND46_SECTION,
    changeType: "round-46-current-source-and-score-refresh",
  },
  456: {
    ...CURATED[456],
    statusKey: "verify",
    statusEvidence: "2026-08-13 计分复核：CBA Spain 页面是长期开放的作品集 / 自荐入口，没有当前职位名、独立 requisition、发布日期或岗位申请表；它不是一个现行招聘名额。",
    reason: "保留 CBA Barcelona 品牌机构联系入口作为研究与冷联系资源，但不再计入当前岗位数量，也不参与现役卡片排名。",
    next: "只有 CBA 发布带职位名、职责、地点与独立申请入口的具体空缺后，再恢复为当前岗位卡。",
    latestAuditSection: ROUND46_SECTION,
    changeType: "round-46-non-vacancy-research-route",
  },
});

// This round applies one user-specific formula to every reviewed identity, so
// the "latest round" view intentionally exposes the full audited set instead
// of cherry-picking only the cards whose numeric position changed most.
for (const id of [...MY_OPPORTUNITY_IDS, 456]) {
  if (CURATED[id]) CURATED[id] = { ...CURATED[id], latestAuditSection: ROUND46_SECTION };
}

const ROUND47_SECTION = "2026-08-13 Round 47 current-source and user-fit recheck";
const ROUND48_SECTION = "2026-08-13 Round 48 complete unknown-language source audit";

// Fresh current vacancies found through exact employer pages or official ATS
// routes. Every role remains subject to the same user-specific score formula;
// an English requirement, seniority or an opaque recruiter can therefore keep
// a professionally relevant job near the bottom of the board.
[
  {
    id: 930889,
    section: ROUND47_SECTION,
    source: "HEREU / current LinkedIn employer detail",
    opportunity: "Social Media Manager",
    fit: "Barcelona fashion-brand social role with brand consistency, digital storytelling and basic graphic assets",
    location: "Barcelona, Spain; full-time; onsite studio",
    status: "Live/current: exact LinkedIn employer detail 4450072468 was opened and read in full on 2026-08-13. It shows Easy Apply, Barcelona and no closed marker. The role owns social planning, visual-asset coordination, brand consistency, image/video adaptation and basic digital-campaign graphics. Fluent written and spoken English plus 2-3 years are explicit.",
    contact: "Current original detail/application: https://www.linkedin.com/jobs/view/4450072468/",
    analysis: "Keep only as a lower-ranked brand-content backup. It is primarily social strategy, community management, copy and performance reporting rather than a graphic/VI position, and fluent English is a real gate. Salary is EUR30,000-35,000 gross/year.",
    score: 64,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Fashion brand social / basic graphic production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-07",
    freshnessTag: "week",
    freshnessAgeDays: 6,
    links: ["https://www.linkedin.com/jobs/view/4450072468/"],
    searchText: "HEREU current LinkedIn 4450072468 Social Media Manager Barcelona full-time onsite fashion brand identity visual assets basic graphic assets digital campaigns fluent English 2-3 years salary EUR 30000 35000",
  },
  {
    id: 930890,
    section: ROUND47_SECTION,
    source: "Double Tap / current LinkedIn employer detail and direct careers email",
    opportunity: "Social Media Manager",
    fit: "Barcelona football-brand social role spanning strategy, content concepts, filming and publishing",
    location: "Barcelona, Spain; full-time; onsite; September/October 2026 start",
    status: "Live/current: exact LinkedIn employer detail 4449105116 was opened and read in full on 2026-08-13. It shows Apply, Barcelona and no closed marker. The employer states an August 5 posting date and a direct careers email. Fluent English is mandatory; Spanish is only a bonus.",
    contact: "Current original detail: https://www.linkedin.com/jobs/view/4449105116/ ; direct application email: careers@doubletapcontent.com",
    analysis: "Keep as a secondary content route, not a graphic-design card. The job owns strategy and the content calendar, films and posts social content, and treats editing as a bonus. It is relevant only if football content and English communication are realistic.",
    score: 58,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Social strategy / filming / branded content",
    sourceGroup: "linkedin",
    postedAt: "2026-08-05",
    freshnessTag: "week",
    freshnessAgeDays: 8,
    links: ["https://www.linkedin.com/jobs/view/4449105116/", "mailto:careers@doubletapcontent.com"],
    searchText: "Double Tap current LinkedIn 4449105116 Social Media Manager Barcelona onsite full-time football creator brand strategy content calendar filming Instagram TikTok YouTube LinkedIn fluent English Spanish bonus careers@doubletapcontent.com 5 Aug 2026",
  },
  {
    id: 930891,
    section: ROUND47_SECTION,
    source: "BJAK / official Ashby ATS and current LinkedIn employer detail",
    opportunity: "Senior Graphic Designer",
    fit: "Spain-remote digital graphic role covering campaigns, brand touchpoints, social, web, ads and short-form motion",
    location: "Spain remote; full-time; candidate must already be based in Spain",
    status: "Live/current: LinkedIn employer detail 4452792075 and the linked official Ashby requisition aca9464d-8ba4-4aa4-b0bc-a26d6c159fdc were opened on 2026-08-13. The exact role accepts Spain-based remote applicants and covers campaign assets, brand consistency, web, ads and motion. Strong English and 5-8 years are explicit.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/bjakcareer/aca9464d-8ba4-4aa4-b0bc-a26d6c159fdc ; current employer detail: https://www.linkedin.com/jobs/view/4452792075/",
    analysis: "A real Spain-remote design opening but a low-feasibility stretch for this user: senior level, required English, fast performance-marketing output and a practical assessment. Keep far below Chinese and language-unconfirmed junior/mid roles.",
    score: 74,
    tier: "B",
    locationTag: "Spain remote",
    typeTag: "Senior digital graphic / brand systems / motion",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://jobs.ashbyhq.com/bjakcareer/aca9464d-8ba4-4aa4-b0bc-a26d6c159fdc",
      "https://www.linkedin.com/jobs/view/4452792075/",
    ],
    searchText: "BJAK official Ashby Senior Graphic Designer Spain remote full-time Spain based English main working language strong communication 5-8 years Adobe Figma After Effects Premiere brand systems campaigns social web ads motion practical assessment",
  },
  {
    id: 930892,
    section: ROUND47_SECTION,
    source: "OnHires / official Ashby recruitment ATS",
    opportunity: "AI Graphic Designer - Performance Ads",
    fit: "Europe-remote production role for static DTC and ecommerce advertising with AI-assisted imagery",
    location: "Europe remote; full-time; employer/client identity and Spain contract terms not disclosed",
    status: "Verify first: official Ashby requisition c7f7a6d4-96e4-4ac9-9f47-04d6d0c5af91 was opened and read in full on 2026-08-13 and contains an application form. It asks for paid-social ad production, Figma/Adobe and commercial AI-image workflows, but does not identify the end employer, publish compensation, state an experience range or name a work-language requirement.",
    contact: "Official recruiter ATS detail/application: https://jobs.ashbyhq.com/onhires/c7f7a6d4-96e4-4ac9-9f47-04d6d0c5af91",
    analysis: "Keep as a low-confidence Europe-remote backup. It is high-volume performance production rather than VI ownership, and the end client is hidden. Confirm the legal employer, Spain eligibility, pay, working language, weekly volume, test policy and ownership before sharing a portfolio or doing any task.",
    score: 46,
    tier: "C",
    locationTag: "Europe remote",
    typeTag: "AI graphic production / performance ads / ecommerce",
    sourceGroup: "other",
    freshnessTag: "unknown",
    links: ["https://jobs.ashbyhq.com/onhires/c7f7a6d4-96e4-4ac9-9f47-04d6d0c5af91"],
    searchText: "OnHires official Ashby AI Graphic Designer Performance Ads Europe remote full-time opaque client DTC ecommerce static ads Meta Figma Photoshop Illustrator AI image generation salary language experience unknown verify",
  },
  {
    id: 930893,
    section: ROUND47_SECTION,
    source: "Ogilvy / closed official Greenhouse requisition and conflicting LinkedIn detail",
    opportunity: "Senior Art Director (pharma)",
    fit: "Historical Barcelona healthcare art-direction brief covering integrated campaigns, print, digital, audiovisual and promotional work",
    location: "Barcelona, Spain; historical hybrid role",
    status: "Closed/history: LinkedIn detail 4446679878 still showed Solicitar on 2026-08-13, but its exact employer Greenhouse requisition 4719420005 redirects to the official Ogilvy Spain board with the explicit message that the vacancy is no longer open. The current official board lists six Madrid jobs and no Barcelona design vacancy.",
    contact: "Closed official requisition: https://job-boards.greenhouse.io/ogilvyspain/jobs/4719420005 ; historical LinkedIn detail: https://www.linkedin.com/jobs/view/4446679878/",
    analysis: "Do not apply through the stale LinkedIn button. Preserve the five-plus-year healthcare art-direction brief as history and restore only if Ogilvy publishes a new independent live requisition.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed senior healthcare art direction",
    sourceGroup: "other",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    links: ["https://job-boards.greenhouse.io/ogilvyspain/jobs/4719420005", "https://www.linkedin.com/jobs/view/4446679878/"],
    searchText: "Ogilvy closed official Greenhouse 4719420005 Senior Art Director pharma Barcelona LinkedIn 4446679878 no longer open",
  },
  {
    id: 930894,
    section: ROUND47_SECTION,
    source: "Babel Profiles / closed LinkedIn employer detail",
    opportunity: "Fashion Graphic Designer with Spanish and English",
    fit: "Historical Barcelona fashion-graphic role for prints, artworks, collections and production-ready files",
    location: "Barcelona / Poblenou / onsite / historical",
    status: "Closed/history: exact LinkedIn detail 4448769440 was opened on 2026-08-13 and explicitly says applications are no longer accepted. The former role required bilingual-equivalent Spanish and functional English.",
    contact: "Closed original detail: https://www.linkedin.com/jobs/view/4448769440/",
    analysis: "Keep only as a fashion-portfolio benchmark. The Spanish gate and current closed state mean it must not enter the active ranking.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed fashion graphics / prints",
    sourceGroup: "linkedin",
    postedAt: "2026-08-07",
    freshnessTag: "week",
    links: ["https://www.linkedin.com/jobs/view/4448769440/"],
    searchText: "Babel Profiles closed LinkedIn 4448769440 Fashion Graphic Designer Barcelona Spanish bilingual English functional no longer accepting applications",
  },
  {
    id: 930895,
    section: ROUND47_SECTION,
    source: "CasinoBarcelona.es / closed LinkedIn employer detail",
    opportunity: "Especialista de Diseño Gráfico",
    fit: "Historical Barcelona digital-graphic role for brand identity, display, social, CRM, web and physical assets",
    location: "Barcelona or Ceuta / historical hybrid role",
    status: "Closed/history: exact LinkedIn detail 4450269182 was opened on 2026-08-13 and explicitly says applications are no longer accepted. The former role required native Spanish, basic English and at least two years; salary was EUR22,000-24,000 gross/year.",
    contact: "Closed original detail: https://www.linkedin.com/jobs/view/4450269182/",
    analysis: "Preserve the relevant digital-brand brief and public salary as history. Do not count the readable page as a current application route.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed digital graphic / brand consistency",
    sourceGroup: "linkedin",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    links: ["https://www.linkedin.com/jobs/view/4450269182/"],
    searchText: "CasinoBarcelona closed LinkedIn 4450269182 Especialista Diseño Gráfico Barcelona native Spanish basic English 2 years salary EUR 22000 24000 no longer accepting applications",
  },
  {
    id: 930896,
    section: ROUND47_SECTION,
    source: "Savant Network / closed LinkedIn recruiter detail",
    opportunity: "Senior Graphic Designer - Illustration & Storytelling",
    fit: "Historical Barcelona premium fashion and lifestyle role spanning illustration, editorial design and brand storytelling",
    location: "Barcelona / onsite / historical",
    status: "Closed/history: exact LinkedIn detail 4451348796 was opened on 2026-08-13 and explicitly says applications are no longer accepted. The former role covered original illustration, seasonal graphics, catalogues, lookbooks, typography and brand-identity development.",
    contact: "Closed original detail: https://www.linkedin.com/jobs/view/4451348796/",
    analysis: "Keep only as a strong portfolio benchmark. It is senior, recruiter-mediated and closed, so it must not inflate the current Barcelona count.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed senior illustration / editorial / brand storytelling",
    sourceGroup: "linkedin",
    postedAt: "2026-08-09",
    freshnessTag: "week",
    links: ["https://www.linkedin.com/jobs/view/4451348796/"],
    searchText: "Savant Network closed LinkedIn 4451348796 Senior Graphic Designer Illustration Storytelling Barcelona onsite fashion lifestyle editorial brand identity no longer accepting applications",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

const round47ClosedOgilvySocial = allData.find((entry) => Number(entry.id) === 930884);
if (round47ClosedOgilvySocial) {
  Object.assign(round47ClosedOgilvySocial, {
    section: ROUND47_SECTION,
    status: "Closed/history: exact LinkedIn employer detail 4434550264 was reopened on 2026-08-13 and now explicitly says applications are no longer accepted. It contains no current Apply control. The readable social-art-direction brief remains historical evidence only.",
    analysis: "Move out of the current board. Do not confuse a readable LinkedIn description with an open requisition; restore only if Ogilvy posts a new job ID or an official current application form.",
    tier: "X",
  });
}

const round47JuniorDragons = allData.find((entry) => Number(entry.id) === 930813);
if (round47JuniorDragons) {
  Object.assign(round47JuniorDragons, {
    section: ROUND47_SECTION,
    status: "2026-08-13 recheck: official Factorial requisition 317499 still shows Apply now, Permanent, Full time and Hybrid Barcelona. Current LinkedIn employer detail 4452419452 independently shows Solicitar. The full role covers global-asset localisation, brand guidelines, visual-identity systems, key visuals, digital and social assets; English is required and Spanish is preferred.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/junior-graphic-designer-317499 ; current employer detail: https://www.linkedin.com/jobs/view/4452419452/",
    links: ["https://dragons-group.factorialhr.com/job_posting/junior-graphic-designer-317499", "https://www.linkedin.com/jobs/view/4452419452/"],
  });
}

const round47SeniorDragons = allData.find((entry) => Number(entry.id) === 930838);
if (round47SeniorDragons) {
  Object.assign(round47SeniorDragons, {
    section: ROUND47_SECTION,
    status: "2026-08-13 recheck: official Factorial requisition 308053 still shows Apply now, Permanent, Full time and Hybrid Barcelona. Current LinkedIn employer detail 4437156739 independently shows Solicitar. Fluent English, regulated healthcare/pharma experience, client presentation and team mentoring are explicit.",
    contact: "Official detail/application: https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-wellness-and-healthcare-308053 ; current employer detail: https://www.linkedin.com/jobs/view/4437156739/",
    links: ["https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-wellness-and-healthcare-308053", "https://www.linkedin.com/jobs/view/4437156739/"],
  });
}

Object.assign(CURATED, {
  930884: {
    ...CURATED[930884],
    statusKey: "closed",
    statusEvidence: "2026-08-13 复核：Ogilvy 雇主 LinkedIn 详情 4434550264 现在明确显示“Ya no se aceptan solicitudes”，且没有申请按钮。",
    reason: "页面还能读到职责不代表岗位仍开放；当前已停止接收申请，必须移入历史。",
    next: "仅保留社媒艺术指导与品牌一致性的岗位画像；等待新职位编号后再恢复。",
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-closed-after-final-link-recheck",
  },
  930813: {
    ...CURATED[930813],
    links: ["https://dragons-group.factorialhr.com/job_posting/junior-graphic-designer-317499", "https://www.linkedin.com/jobs/view/4452419452/"],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 317499 仍有 Apply now，当前 LinkedIn 雇主详情 4452419452 也有 Solicitar；Barcelona 混合办公、永久全职、1–2 年、品牌规范与视觉系统延展均已逐条确认。英语为明确工作语言，西语仅 preferred。",
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-current-two-source-recheck",
  },
  930838: {
    ...CURATED[930838],
    links: ["https://dragons-group.factorialhr.com/job_posting/senior-graphic-designer-wellness-and-healthcare-308053", "https://www.linkedin.com/jobs/view/4437156739/"],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 308053 与 LinkedIn 雇主详情 4437156739 均仍可申请；Barcelona 混合、永久全职、流利英语、医疗健康行业经验、客户提案与带教均为真实门槛。",
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-current-two-source-recheck",
  },
  930874: {
    ...CURATED[930874],
    statusKey: "live",
    links: ["https://www.ogilvy.com/careers/4712450005?gh_jid=4712450005", "https://www.linkedin.com/jobs/view/4434548567/"],
    preferCuratedLinks: true,
    languageKey: "english",
    applicationMode: "english",
    language: "官方嵌入式申请表把“Do you have a good level of English?”设为必答筛选问题；英语门槛已证实",
    statusEvidence: "2026-08-13 最终落点复核：Ogilvy 官方职位页 4712450005 仍显示 Barcelona、Liquid Designer 和 Apply；点击后 Greenhouse 嵌入表单完整出现，并把良好英语设为必答问题。",
    reason: "岗位仍真实可投，数字品牌延展与 motion 相关；但英语不是推测，而是申请表硬筛问题，因此按英语上限重新降分。",
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-official-form-language-evidence",
  },
  172: {
    ...CURATED[172],
    statusKey: "live",
    links: ["https://www.ogilvy.com/careers/4708130005?gh_jid=4708130005", "https://www.linkedin.com/jobs/view/4429417187/"],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 最终落点复核：Ogilvy 官方职位页 4708130005 的标题内容不完整，但点击 Apply 后 Greenhouse 嵌入申请表仍完整出现并可提交；LinkedIn 详情 4429417187 同时仍显示 Solicitar。西语必需与西班牙学历/Graduate 条件保持硬门槛。",
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-official-form-current-confirmation",
  },
  930889: {
    statusKey: "live",
    direction: "social",
    company: "HEREU",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场工作室 / 全职 / €30k–35k",
    titleZh: "社交媒体经理（时尚品牌一致性与基础平面）",
    titleEs: "Social Media Manager",
    languageKey: "english",
    applicationMode: "english",
    language: "流利书面与口语英语明确要求；未列西语硬门槛",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年社媒经验",
    reason: "当前可投且在 Barcelona，包含品牌形象一致性、视觉素材协调、图片/视频适配和基础数字平面；但主体是社媒策略、文案、社群与数据，而不是 VI 设计。",
    next: "仅作为英语内容方向备选；若投递，作品集应放时尚品牌社媒系统、短视频、多尺寸视觉延展和品牌一致性，先评估英语面试与日常沟通。",
    statusEvidence: "2026-08-13 已逐条读取 LinkedIn 雇主详情 4450072468：Easy Apply、Barcelona、全职现场，未显示关闭；2–3 年、英语流利及 €30,000–35,000 均明确。",
    links: ["https://www.linkedin.com/jobs/view/4450072468/"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-new-current",
  },
  930890: {
    statusKey: "live",
    direction: "social",
    company: "Double Tap",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 现场 / 全职 / 2026 年 9–10 月入职",
    titleZh: "社交媒体经理（足球品牌内容、拍摄与发布）",
    titleEs: "Social Media Manager",
    languageKey: "english",
    applicationMode: "english",
    language: "流利英语明确要求；西语仅为加分项",
    experienceKey: "unknown",
    experienceLabel: "需有端到端社媒管理经验；年限未写",
    reason: "Barcelona 当前岗位且可直接邮件申请，但工作重心是策略、排期、拍摄与发布；剪辑只是加分，并非品牌平面或 VI 主岗。",
    next: "只在足球内容方向可接受且英语可用时考虑；先问薪资、合同与内容拍摄频率，再决定是否投。",
    statusEvidence: "2026-08-13 已逐条读取 LinkedIn 雇主详情 4449105116：页面有 Solicitar，正文注明 2026-08-05、Barcelona 现场全职，并给出 careers@doubletapcontent.com。",
    links: ["https://www.linkedin.com/jobs/view/4449105116/", "mailto:careers@doubletapcontent.com"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-new-current",
  },
  930891: {
    statusKey: "live",
    direction: "digital",
    company: "BJAK",
    locationKey: "remote",
    locationLabel: "Spain 全远程 / 全职 / 需已居住西班牙",
    titleZh: "高级平面设计师（数字 Campaign、品牌系统与 Motion）",
    titleEs: "Senior Graphic Designer",
    languageKey: "english",
    applicationMode: "english",
    language: "英语为全球团队主要工作语言，强沟通能力明确要求",
    experienceKey: "senior",
    experienceLabel: "高级 / 5–8 年",
    reason: "Spain remote 资格清楚，职责也覆盖品牌触点、Campaign、Web、社媒和 Motion；但英语、5–8 年与高节奏绩效创意都是重门槛。",
    next: "保留为低分高级备选，不与中文或语言未证实的初中级岗位竞争；只有英语和资历真实满足时再做测试。",
    statusEvidence: "2026-08-13 已核验 LinkedIn 4452792075 与官方 Ashby aca9464d-8ba4-4aa4-b0bc-a26d6c159fdc：Spain remote、全职、当前申请表、强英语与 5–8 年均明确。",
    links: ["https://jobs.ashbyhq.com/bjakcareer/aca9464d-8ba4-4aa4-b0bc-a26d6c159fdc", "https://www.linkedin.com/jobs/view/4452792075/"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-new-current",
  },
  930892: {
    statusKey: "verify",
    direction: "digital",
    company: "OnHires / 未公开最终雇主",
    locationKey: "remote",
    locationLabel: "Europe remote / 全职 / Spain 合同条款待确认",
    titleZh: "AI 平面设计师（DTC / 电商效果广告）",
    titleEs: "AI Graphic Designer - Performance Ads",
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "官方正文未列工作语言；英文页面本身不作为英语硬门槛证据",
    experienceKey: "unknown",
    experienceLabel: "需有付费社媒广告经验；年限未写",
    opaqueEmployer: true,
    reason: "官方 Ashby 表单存在，但招聘方没有公开最终雇主、薪资、语言和 Spain 合同主体；工作是高量效果广告制作，不是 VI 所有权。",
    next: "先书面确认实际雇主、Spain 合规签约、薪资、语言、每周产量、测试是否付费及源文件归属，再决定是否发作品集。",
    statusEvidence: "2026-08-13 已逐条读取 OnHires 官方 Ashby c7f7a6d4-96e4-4ac9-9f47-04d6d0c5af91：Europe remote、Full time 与申请表明确；最终客户和关键劳动条件未公开。",
    links: ["https://jobs.ashbyhq.com/onhires/c7f7a6d4-96e4-4ac9-9f47-04d6d0c5af91"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND47_SECTION,
    changeType: "round-47-new-verify-first",
  },
});

for (const id of [930884, 930813, 930838, 930874, 172, ...ROUND47_CURRENT_IDS, 930893, 930894, 930895, 930896]) {
  if (CURATED[id]) CURATED[id] = { ...CURATED[id], latestAuditSection: ROUND47_SECTION };
}

// Round 48 reopens every current card whose work language was still marked as
// unknown. Only explicit wording in the vacancy itself changes the language
// path; page chrome, translated menus, company benefits and adjacent jobs are
// not language evidence. Three of the 52 cards contain a previously missed
// English requirement and must be rescored below the unknown-language group.
for (const id of [910, 866, 930814]) {
  const item = allData.find((entry) => Number(entry.id) === id);
  if (item) item.section = ROUND48_SECTION;
}

Object.assign(CURATED, {
  910: {
    ...CURATED[910],
    languageKey: "english",
    applicationMode: "english",
    language: "官方 Ashby 正文明确要求 Fluent in English；Spanish is a plus，不是硬门槛",
    statusEvidence: "2026-08-13 Round 48 逐字复核：LABHOUSE 官方 Ashby 62d820a0-f2b6-4a8f-a909-a964d867438d 仍显示 Spain Remote、Full time 与申请入口；Communication 段明确写“Fluent in English; Spanish is a plus”。",
    reason: "Spain remote、App 品牌与增长视觉方向有效，但流利英语是明确要求，不能继续按语言未证实获得 22.7 分。",
    next: "仅在英语面试和日常跨团队沟通可承受时投递；作品集突出 App Store、品牌元素、Logo、动效与绩效视觉。",
    latestAuditSection: ROUND48_SECTION,
    changeType: "round-48-explicit-english-correction",
  },
  866: {
    ...CURATED[866],
    languageKey: "english",
    applicationMode: "english",
    language: "官方详情明确要求 Excellent communication skills in English；未列西语或德语硬门槛",
    statusEvidence: "2026-08-13 Round 48 逐字复核：devicenow 官方 job 19847 仍显示 Barcelona hybrid、永久全职和申请入口；What we expect from you 段明确要求“Excellent communication skills in English”。",
    reason: "Barcelona 地点和品牌 Motion 方向仍有效，但英语沟通是明确硬门槛，必须从语言未证实组降到英语备选组。",
    next: "仅在英语沟通可用且 Motion showreel 匹配时申请；先确认薪资、团队语言和每周到岗天数。",
    latestAuditSection: ROUND48_SECTION,
    changeType: "round-48-explicit-english-correction",
  },
  930814: {
    ...CURATED[930814],
    languageKey: "english",
    applicationMode: "english",
    language: "LinkedIn 完整正文明确要求优秀书面与口语英语；德语只是 strong advantage",
    statusEvidence: "2026-08-13 Round 48 逐字复核：CNT LinkedIn 雇主详情 4445748221 当前可完整读取并显示 Easy Apply、Barcelona；要求段明确写“Excellent written and spoken English is required. Very good German skills are a strong advantage.”",
    experienceKey: "senior",
    experienceLabel: "高级品牌设计与创意内容管理",
    reason: "企业识别与品牌系统职责真实相关，但英语明确必需、岗位资历偏高，德语虽非硬门槛也增加竞争成本，因此只保留为后排英语备选。",
    next: "仅在英语书面和口头沟通可承担时投递；作品集需突出 Corporate Identity、Brand Identity、跨媒介系统与 Motion。",
    latestAuditSection: ROUND48_SECTION,
    changeType: "round-48-explicit-english-correction",
  },
});

const ROUND49_SECTION = "2026-08-13 Round 49 complete likely-Spanish source audit";
const ROUND49_SPANISH_LIKELY_IDS = Object.freeze([
  877, 105, 886, 930829, 1257, 1258, 382, 1237, 930876, 86, 930873, 930885, 188, 577, 864, 1296, 579,
  876, 867, 930843, 351,
]);

const round49Eurofirms = allData.find((entry) => Number(entry.id) === 877);
if (round49Eurofirms) {
  Object.assign(round49Eurofirms, {
    postedAt: "2026-06-25",
    freshnessTag: "quarter",
    status: "2026-08-13 Round 49 recheck: JOB TODAY detail 6g3oVr still returns the exact Eurofirms Cerdanyola packaging-artwork vacancy and structured JobPosting data. datePosted is 2026-06-25, not the previously inferred August date; it is full-time temporary work at EUR12.78/hour with possible employer incorporation. The vacancy itself contains no explicit language clause.",
  });
}

const round49Iconico = allData.find((entry) => Number(entry.id) === 1237);
if (round49Iconico) {
  Object.assign(round49Iconico, {
    status: "Verify-first/current lead: the exact LinkedIn detail 4440947485 now redirects with expired_jd_redirect. The exact Indeed key ae95a5929ce854cb remains indexed with the complete Barcelona onsite, indefinite full-time, EUR22,000 multimedia/content-designer brief, but direct automated access currently stops at Indeed's security check and the employer site exposes no job section. Confirm availability by email before preparing an application.",
  });
}

const round49SpaceGo = allData.find((entry) => Number(entry.id) === 867);
if (round49SpaceGo) {
  Object.assign(round49SpaceGo, {
    status: "2026-08-13 Round 49 recheck: LinkedIn employer detail 4440457390 still returns the exact Creative Motion Grapher JobPosting, Sant Cugat hybrid, posted 2026-07-29, valid through 2026-09-19 and TEMPORARY. The complete Spanish brief covers 2D/3D motion, brand campaigns, identity-aligned animation, performance assets and AI workflows, but does not state a language level.",
  });
}

if (!allData.some((entry) => Number(entry.id) === 930897)) {
  allData.push({
    id: 930897,
    section: ROUND49_SECTION,
    source: "ICÓNICO Design for Architecture / expired LinkedIn employer detail",
    opportunity: "Diseñador/a Gráfico/a en prácticas",
    fit: "Historical Cardedeu design internship for social content, catalogues, flyers, dossiers, exhibition materials and multi-format adaptation",
    location: "Cardedeu, Barcelona province / historical internship",
    status: "Closed/history: exact LinkedIn employer detail 4402687906 was reopened on 2026-08-13 and redirects to expired_jd_redirect with no current application control. The former brief offered flexible hours, EUR8/hour and direct email application to marketing@iconico.com.",
    contact: "Expired original detail: https://es.linkedin.com/jobs/view/4402687906 ; historical application email: marketing@iconico.com",
    analysis: "Preserve as evidence of a local junior design route, but do not count it as current. Restore only if ICÓNICO publishes a new independent requisition or confirms the internship is open again.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Closed graphic-design internship",
    sourceGroup: "linkedin",
    freshnessTag: "unknown",
    links: ["https://es.linkedin.com/jobs/view/4402687906", "mailto:marketing@iconico.com"],
    searchText: "ICÓNICO Design for Architecture closed expired LinkedIn 4402687906 Cardedeu Barcelona graphic design internship EUR 8 hour marketing iconico",
  });
}

Object.assign(CURATED, {
  877: {
    ...CURATED[877],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "现场包装生产岗位与完整正文均为西语；未列等级，按本地西语高概率而非硬门槛处理",
    statusEvidence: "2026-08-13 Round 49：JOB TODAY 结构化正文确认发布日期为 2026-06-25、全职临时合同、€12.78/小时和当前原始详情；此前写成 8 月发布已修正。岗位正文没有明确语言条款。",
    reason: "包装完稿方向和地点真实，但发布日期较早、临时合同、时薪和现场西语环境均降低可行性。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-date-and-language-evidence-correction",
  },
  1237: {
    ...CURATED[1237],
    statusKey: "verify",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "Barcelona 现场传播团队与完整职位正文均为西语；未列明确语言等级",
    statusEvidence: "2026-08-13 Round 49：LinkedIn 4440947485 已重定向至 expired_jd_redirect；Indeed 精确 key ae95a5929ce854cb 仍被索引并保留完整的 Barcelona 现场、无固定期限、€22,000 正文，但直接访问受安全检查限制，公司官网没有职位区。",
    reason: "职责与品牌内容相关，但当前只剩仍被索引的 Indeed 详情和通用联系邮箱；必须先确认岗位仍开放，不能当作页面已确认可投。",
    next: "先邮件询问职位是否仍开放以及工作语言；得到明确回复后再投作品集。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-final-route-verify-first",
  },
  867: {
    ...CURATED[867],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "Sant Cugat 本地团队与完整西语正文；未列语言等级，按西语工作环境高概率处理",
    statusEvidence: "2026-08-13 Round 49：LinkedIn 4440457390 的 JobPosting 仍显示 Sant Cugat hybrid、2026-07-29 发布、2026-09-19 截止及 TEMPORARY；正文未写语言等级。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-current-structured-detail-recheck",
  },
  930873: {
    ...CURATED[930873],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "中级以上英语为明确要求；西语出版与现场编辑协作环境高概率，但未列西语等级",
    statusEvidence: "2026-08-13 Round 49：Grupo Planeta 官方 TalentClue 127111935 仍显示 Barcelona 现场、无固定期限全职和申请表；完整正文明确要求中级以上英语，并说明为西班牙语出版品牌制作封面。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-explicit-english-plus-local-spanish-risk",
  },
  188: {
    ...CURATED[188],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "官方正文明确要求中高英语；Barcelona 现场时尚品牌团队的西语环境高概率",
    statusEvidence: "2026-08-13 Round 49：eseOese 官方 ATS 48acdfae-9231-4ff0-b658-cd6af24b41f5 仍显示 Barcelona 现场全职和申请入口；要求段明确写 Inglés nivel medio-alto。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-explicit-english-plus-local-spanish-risk",
  },
  864: {
    ...CURATED[864],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "完整官方 JD 全部为加泰语，岗位需密切协调内部团队、供应商、采购和质量；未列等级但本地语言风险很高",
    statusEvidence: "2026-08-13 Round 49：Ametller 官方 Workday JR107430 仍返回完整 JobPosting；正文全为加泰语，并明确 5 年以上、Olèrdola/Numància、驾照和自有车辆要求。",
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-catalan-context-confirmation",
  },
  930897: {
    statusKey: "closed",
    direction: "production",
    company: "ICÓNICO Design for Architecture",
    locationKey: "barcelona",
    locationLabel: "Cardedeu / Barcelona 省 / 历史实习",
    titleZh: "平面设计实习（已关闭）",
    titleEs: "Diseñador/a Gráfico/a en prácticas",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "历史职位全文为西语；未列语言等级",
    experienceKey: "internship",
    experienceLabel: "学生实习 / €8 每小时",
    statusEvidence: "2026-08-13：LinkedIn 精确详情 4402687906 已重定向至 expired_jd_redirect，没有当前申请按钮。",
    reason: "曾是 Barcelona 省内真实初级设计入口，但当前已关闭，只保留为历史和未来复发监控。",
    next: "不要按旧帖直接申请；等待新职位编号或公司书面确认重新开放。",
    links: ["https://es.linkedin.com/jobs/view/4402687906", "mailto:marketing@iconico.com"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND49_SECTION,
    changeType: "round-49-new-closed-history",
  },
});

for (const id of ROUND49_SPANISH_LIKELY_IDS) {
  if (CURATED[id]) CURATED[id] = { ...CURATED[id], latestAuditSection: ROUND49_SECTION };
}

const ROUND50_SECTION = "2026-08-13 Round 50 user-profile rescore and current-source recovery";

// The same exact Revolut requisition that returned a 404 on 2026-08-09 is now
// present again on Revolut's official careers index and localized official
// detail, with Barcelona and Spain remote listed and an active application
// control. Restore the identity instead of creating a duplicate, while keeping
// its unknown work-language path visible and capped below Chinese routes.
const round50RevolutEmployerBranding = allData.find((entry) => Number(entry.id) === 427);
if (round50RevolutEmployerBranding) {
  Object.assign(round50RevolutEmployerBranding, {
    section: ROUND50_SECTION,
    source: "Revolut / current official careers",
    opportunity: "Graphic Designer (Employer Branding)",
    fit: "Barcelona office or Spain remote; employer-brand static and motion design; 2+ years; work language not stated",
    location: "Barcelona office / Spain remote; full-time",
    status: "Current again: on 2026-08-13 Revolut's official careers index and localized official detail both list this exact requisition d47d1c9b-3e07-4878-84d7-5841dd3930d8, Barcelona among the offices, Spain among the remote locations and Apply for this role. A fresh Revolut design-recruiting post also links the same exact official URL. The role covers static and motion assets, employer-brand campaigns, internal communications and brand-aligned content. The page asks for 2+ years but does not publish a Chinese, English or Spanish language requirement, Spain salary or sponsorship terms.",
    contact: "Current official detail/application: https://www.revolut.com/en-HU/careers/position/graphic-designer-employer-branding-d47d1c9b-3e07-4878-84d7-5841dd3930d8/ ; current employer LinkedIn detail: https://es.linkedin.com/jobs/view/4436834624",
    analysis: "Restore the previously recognised opportunity because the exact employer requisition is independently current again. It is a strong Barcelona brand-communications match and the 2+ year threshold is relatively attainable, but it is not a Chinese-language route. Keep the application-language field unknown, cap its score below Chinese/contact-first opportunities and ask about working language before investing in tailored materials.",
    score: 28,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Employer brand / graphic / motion",
    sourceGroup: "other",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: [
      "https://www.revolut.com/en-HU/careers/position/graphic-designer-employer-branding-d47d1c9b-3e07-4878-84d7-5841dd3930d8/",
      "https://es.linkedin.com/jobs/view/4436834624",
    ],
    searchText: "Revolut current official Graphic Designer Employer Branding d47d1c9b Barcelona office Spain remote full time Apply static motion employer brand campaigns internal communications 2+ years work language not stated salary sponsorship confirm",
  });
}

if (!allData.some((entry) => Number(entry.id) === 930898)) {
  allData.push({
    id: 930898,
    section: ROUND50_SECTION,
    source: "Dragons Group / official Factorial ATS",
    opportunity: "Senior Art Director (Beauty, Skincare, Wellness & Lifestyle)",
    fit: "Barcelona hybrid permanent role with strong brand-building, visual-system and integrated-campaign scope; fluent English and 5–8 years are explicit",
    location: "Barcelona, Spain; hybrid; permanent; full-time",
    status: "Current official vacancy: Dragons' Factorial board and exact detail 308025 both show Barcelona hybrid, permanent, full-time and Apply now. The role develops visual systems and brand-building work across social, digital and integrated campaigns, then art-directs photography, video, motion, CGI and creator content. Five to eight years and fluent written/spoken English are explicit; other languages are only a plus.",
    contact: "Current official detail: https://dragons-group.factorialhr.com/job_posting/senior-art-director-beauty-skincare-wellness-lifestyle-308025 ; official application: https://dragons-group.factorialhr.com/apply/senior-art-director-beauty-skincare-wellness-lifestyle-308025",
    analysis: "Keep as a real but low-priority Barcelona backup. The brand/visual-system fit is strong, yet explicit fluent English, seniority, client presentation and art-direction leadership make it substantially less feasible for this user than Chinese/contact-first, junior or no-stated-language opportunities.",
    score: 3,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand systems / art direction / integrated campaigns",
    sourceGroup: "other",
    postedAt: "",
    freshnessTag: "unknown",
    freshnessAgeDays: null,
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-art-director-beauty-skincare-wellness-lifestyle-308025",
      "https://dragons-group.factorialhr.com/apply/senior-art-director-beauty-skincare-wellness-lifestyle-308025",
    ],
    searchText: "Dragons Group official Factorial current Senior Art Director Beauty Skincare Wellness Lifestyle Barcelona hybrid permanent full time Apply visual systems brand building social digital integrated campaigns photography video motion CGI creator content 5-8 years fluent English written spoken",
  });
}

Object.assign(CURATED, {
  427: {
    statusKey: "live",
    direction: "brand",
    company: "Revolut",
    locationKey: "barcelona",
    locationLabel: "Barcelona 办公室 / Spain remote",
    titleZh: "雇主品牌平面设计师（静态 / 动效）",
    titleEs: "Graphic Designer (Employer Branding)",
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "官方完整职位正文未写中文、英语或西语等级；申请前先确认日常工作语言",
    experienceKey: "junior",
    experienceLabel: "2 年以上视觉 / 品牌 / 平面设计",
    internshipKey: false,
    statusEvidence: "2026-08-13 Round 50：Revolut 官方职位总表和本地化官方详情重新列出同一 requisition，地点明确含 Barcelona 与 Spain remote，页面显示 Apply for this role；招聘方最新设计岗位帖也链接同一官方 URL。",
    reason: "岗位与品牌视觉、企业传播、静态和动态延展高度相关，且 2 年门槛比多数高级岗现实；但没有中文工作证据，语言仍需先问，所以得分受“语言未说明”上限约束，不能超过中文机会。",
    next: "先通过官方页面确认仍可提交，再用简短英文询问 Barcelona 团队的实际工作语言、办公室频率、Spain 合同与薪资；确认沟通可承受后再定制雇主品牌 / campaign / motion 案例。",
    links: [
      "https://www.revolut.com/en-HU/careers/position/graphic-designer-employer-branding-d47d1c9b-3e07-4878-84d7-5841dd3930d8/",
      "https://es.linkedin.com/jobs/view/4436834624",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND50_SECTION,
    changeType: "round-50-exact-requisition-reopened",
  },
  930898: {
    statusKey: "live",
    direction: "brand",
    company: "Dragons Group",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / permanent full-time",
    titleZh: "高级艺术指导（美妆、护肤与生活方式品牌）",
    titleEs: "Senior Art Director (Beauty, Skincare, Wellness & Lifestyle)",
    languageKey: "english",
    applicationMode: "english",
    language: "官方正文明确要求流利书面与口语英语，并需能用英语自信提案；其他语言仅为加分项",
    experienceKey: "senior",
    experienceLabel: "5–8 年创意机构或品牌经验",
    internshipKey: false,
    statusEvidence: "2026-08-13 Round 50：Dragons 官方 Factorial 总表与精确职位 308025 均显示 Barcelona hybrid、permanent、full-time 和 Apply now。",
    reason: "品牌系统、campaign、摄影、视频、motion 与 CGI 方向很贴，但流利英语、5–8 年资历及客户提案都是现实硬门槛，因此只保留为后排挑战岗。",
    next: "不要优先投入；只有在英语提案和高级艺术指导案例已足够时再投。作品集应突出美妆 / 生活方式品牌系统、整合 campaign、社媒内容体系和跨制作团队落地。",
    links: [
      "https://dragons-group.factorialhr.com/job_posting/senior-art-director-beauty-skincare-wellness-lifestyle-308025",
      "https://dragons-group.factorialhr.com/apply/senior-art-director-beauty-skincare-wellness-lifestyle-308025",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND50_SECTION,
    changeType: "round-50-new-current-official",
  },
});

const ROUND52_SECTION = "2026-08-13 Round 52 Chinese-source and current-employer refresh";

if (!allData.some((entry) => Number(entry.id) === 930899)) {
  allData.push({
    id: 930899,
    section: ROUND52_SECTION,
    source: "CRAZE GmbH / current LinkedIn employer detail + official careers",
    opportunity: "Editorial Graphic Designer – Toys & Kids Products",
    fit: "Sabadell full-time; brand identities, logos, style guides, packaging, editorial, POS, digital content and final artwork; English mandatory",
    location: "Sabadell, Barcelona province, Spain; full-time",
    status: "Live/current: exact LinkedIn employer detail 4454009307 was opened and read in full on 2026-08-13. It shows Sabadell, full-time and an application control. The complete brief covers magazines, catalogues, brochures, presentations, POS, packaging, digital content, brand identities, logos, style guides, print-ready artwork and licensed-brand adaptation. It requires 2–3 years, advanced Illustrator/Photoshop/InDesign, a portfolio and spoken/written English; German is only desirable. CRAZE's official careers page independently confirms a Barcelona-area location and states English is the team language, but it exposes only a general application route rather than this exact requisition.",
    contact: "Current exact employer detail/application: https://www.linkedin.com/jobs/view/4454009307 ; official employer careers and general application: https://craze-group.com/karriere",
    analysis: "Add as a genuine new Barcelona-province brand/graphic-design backup, not as a Chinese-language opportunity. The 2–3 year threshold and hands-on VI/packaging/editorial scope are relevant, but mandatory spoken and written English is a material gate for this user, so the personal score must remain within the explicit-English ceiling. Apply only if the portfolio and interview can be handled in English; confirm salary, contract entity, onsite rhythm and commute before investing in a tailored application.",
    score: 12,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Brand identity / editorial / packaging / graphic production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://www.linkedin.com/jobs/view/4454009307", "https://craze-group.com/karriere"],
    searchText: "CRAZE GmbH current LinkedIn employer detail 4454009307 Editorial Graphic Designer Toys Kids Products Sabadell Barcelona full time apply 2-3 years brand identities logos style guides packaging editorial catalogues brochures POS digital content final artwork English mandatory German desirable official careers Barcelona team language English",
  });
}

Object.assign(CURATED, {
  930812: {
    ...CURATED[930812],
    statusKey: "live",
    direction: "brand",
    company: "Skyscanner",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 每周约 2 天办公室 / 全职",
    titleZh: "高级视觉设计师（全球品牌系统与 Campaign）",
    titleEs: "Senior Visual Designer",
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "完整招聘正文为英语且属于全球 Brand Studio；未列正式语言等级，评分按英语环境大概率处理",
    experienceKey: "senior",
    experienceLabel: "资深 / 约 7 年",
    statusEvidence: "2026-08-13 Round 52：同一 LinkedIn 雇主招聘编号 4451912620 再次公开，完整正文可读取并显示 Barcelona、hybrid、每周办公室两天和 Apply now；没有关闭提示。Skyscanner 官方 requisition 8121646 仍存在，但自动访问进入验证码页，因此以当前雇主详情作为开放证据。",
    reason: "Brand Studio 职责高度贴近品牌系统、全球 Campaign、数字、社媒、印刷、OOH 与体验触点；但约 7 年经验和全英语国际团队环境都是重大现实门槛，只恢复为后排挑战岗。",
    next: "仅在作品集已有系统级品牌识别、全球 Campaign、艺术指导、字体与版式案例，并能用英语讲解时投递；申请前确认薪资、Barcelona 合同、办公室节奏和面试语言。",
    links: [
      "https://www.linkedin.com/jobs/view/4451912620",
      "https://www.skyscanner.net/jobs/job/8121646?gh_jid=8121646",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND52_SECTION,
    changeType: "round-52-same-requisition-reopened",
  },
  930899: {
    statusKey: "live",
    direction: "brand",
    company: "CRAZE GmbH",
    locationKey: "barcelona",
    locationLabel: "Sabadell / Barcelona 省 / 全职",
    titleZh: "编辑与品牌平面设计师（玩具及儿童产品）",
    titleEs: "Editorial Graphic Designer – Toys & Kids Products",
    languageKey: "english",
    applicationMode: "english",
    language: "招聘正文明确要求书面和口语英语；CRAZE 官方招聘页也写明团队语言为英语；德语仅为加分项",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年专业平面设计经验",
    internshipKey: false,
    statusEvidence: "2026-08-13 Round 52：LinkedIn 雇主原始详情 4454009307 可完整读取，显示 Sabadell、Full-time 与申请控制；职责、2–3 年经验和英语必需条款均来自完整正文。CRAZE 官方 Karriere 页面独立确认 Barcelona 地点与英语团队语言，但只提供通用申请入口。",
    reason: "品牌识别、Logo、风格指南、包装、目录、POS、数字内容与印前落地高度贴合；但英语书面和口语是明确硬门槛，所以只作为后排外语备选，不能因方向强而冲到中文机会前面。",
    next: "先判断自己能否用英语完成作品集说明和面试；若可以，再从 LinkedIn 精确岗位页申请，并确认 Sabadell 到岗频率、合同主体、薪资和工时。作品集重点放品牌系统、包装、目录版式、POS 与印前文件。",
    links: ["https://www.linkedin.com/jobs/view/4454009307", "https://craze-group.com/karriere"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND52_SECTION,
    changeType: "round-52-new-current-employer-detail",
  },
});

const ROUND60_SECTION = "2026-08-13 Round 60 Chinese-source current-feed audit";

if (!allData.some((entry) => Number(entry.id) === 930904)) {
  allData.push({
    id: 930904,
    section: ROUND60_SECTION,
    source: "ELIMHOME / InfoHuaxin current Chinese recruitment feed",
    opportunity: "Window Display & Visual Merchandising — ELIMHOME",
    fit: "Barcelona Chinese-language contact route; retail window concepts, seasonal display and merchandise presentation; not a graphic/VI ownership role",
    location: "Barcelona, Spain; chain-store locations and office base not published",
    status: "Verify-first/current lead: the InfoHuaxin Barcelona recruitment feed was opened on 2026-08-13 and visibly lists this ELIMHOME advertisement with a publication date of 2026-08-12, the full three-role text and telephone 656 656 158. The first role is window display and merchandise presentation for a nine-store chain. The exact detail route exists, but automated access to it returned a Cloudflare 403, and the legal employer entity, contract, hours, salary and application process are not published.",
    contact: "Current original detail: https://infohuaxin.com/showinfo.asp?id=4281407 ; current recruitment index carrying the complete advertisement: https://infohuaxin.com/showclass.asp?Page=3&class1=13&class2=221&dq=12 ; direct telephone: +34 656 656 158",
    analysis: "Keep as a current Barcelona Chinese-language adjacent design lead, but do not rank it above the canonical full-time graphic-designer vacancy. The work is physical retail window/display execution rather than brand identity, graphic systems or digital VI. Call in Chinese first and confirm the exact design duties, store locations, contract, social security, schedule, salary, language used with store teams and whether hands-on installation or lifting is required before sending documents.",
    score: 64,
    tier: "C",
    locationTag: "Barcelona; Chinese direct contact; employer and employment terms to confirm",
    typeTag: "Retail window display / visual merchandising / non-VI adjacent design",
    sourceGroup: "chinese",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: [
      "https://infohuaxin.com/showinfo.asp?id=4281407",
      "https://infohuaxin.com/showclass.asp?Page=3&class1=13&class2=221&dq=12",
      "tel:+34656656158",
    ],
    searchText: "ELIMHOME InfoHuaxin 4281407 current Chinese recruitment Barcelona 2026-08-12 nine-store chain window display visual merchandising seasonal display merchandise presentation retail design relevant experience preferred salary negotiable direct telephone 656656158 legal employer contract hours social insurance language confirm non graphic non VI",
  });
}

CURATED[930904] = {
  statusKey: "verify",
  direction: "other",
  company: "ELIMHOME 连锁百货（法律主体待核实）",
  locationKey: "barcelona",
  locationLabel: "Barcelona / 9 家连锁门店 / 具体门店与工时待确认",
  titleZh: "橱窗设计与商品陈列（零售视觉；非平面 / VI）",
  titleEs: "Window Display & Visual Merchandising",
  languageKey: "unknown",
  applicationMode: "chineseCheck",
  language: "华新中文招聘正文和直联电话均存在，可先用中文沟通；日常与门店团队使用中文还是西语没有公开",
  chineseFit: true,
  allowTraditionalHuaxinDetail: true,
  experienceKey: "unknown",
  experienceLabel: "要求有审美和独立布置能力；零售陈列经验优先，未写固定年限",
  internshipKey: false,
  statusEvidence: "2026-08-13 打开华新 Barcelona 当前招聘索引：8 月 12 日 ELIMHOME 完整招聘正文、9 家门店、橱窗/节日布置/商品陈列职责和 656 656 158 均可读；精确详情 4281407 对自动访问返回 Cloudflare 403，因此先确认而不冒充官方 ATS 可投。",
  reason: "它是当天可追踪的 Barcelona 中文直联机会，设计职责和零售视觉相关；但核心是实体橱窗、节日布置和商品陈列，不是 Logo、VI、品牌指南或数字品牌延展，所以排在华人全职平面设计师之后。",
  next: "先用中文电话询问：现在是否仍招橱窗设计岗、具体门店、是否全职、合同与全保、薪资、工时、日常工作语言、安装搬运比例，以及是否需要现场试做。确认后只发送 PDF 作品集，优先放零售空间、橱窗、导视、活动布置和品牌陈列案例。",
  links: [
    "https://infohuaxin.com/showinfo.asp?id=4281407",
    "https://infohuaxin.com/showclass.asp?Page=3&class1=13&class2=221&dq=12",
    "tel:+34656656158",
  ],
  preferCuratedLinks: true,
  latestAuditSection: ROUND60_SECTION,
  changeType: "round-60-new-current-chinese-retail-visual-lead",
};

const els = {
  totalCount: document.querySelector("#totalCount"),
  priorityCount: document.querySelector("#priorityCount"),
  chineseTotal: document.querySelector("#chineseTotal"),
  recentChineseTotal: document.querySelector("#recentChineseTotal"),
  chineseStatsNote: document.querySelector("#chineseStatsNote"),
  liveCount: document.querySelector("#liveCount"),
  verifyCount: document.querySelector("#verifyCount"),
  closedCount: document.querySelector("#closedCount"),

  updatedAt: document.querySelector("#updatedAt"),
  priorityGrid: document.querySelector("#priorityGrid"),
  languageCautionGrid: document.querySelector("#languageCautionGrid"),
  priorityTemplate: document.querySelector("#priorityTemplate"),
  resultTemplate: document.querySelector("#resultTemplate"),
  resultsList: document.querySelector("#resultsList"),
  visibleCount: document.querySelector("#visibleCount"),
  allSourceCount: document.querySelector("#allSourceCount"),
  chineseCount: document.querySelector("#chineseCount"),
  linkedinCount: document.querySelector("#linkedinCount"),
  otherCount: document.querySelector("#otherCount"),
  sourceTabsNote: document.querySelector("#sourceTabsNote"),
  chineseLibraryViews: document.querySelector("#chineseLibraryViews"),
  chineseActiveCount: document.querySelector("#chineseActiveCount"),
  chineseReviewCount: document.querySelector("#chineseReviewCount"),
  chineseClosedCount: document.querySelector("#chineseClosedCount"),
  searchInput: document.querySelector("#searchInput"),
  directionFilter: document.querySelector("#directionFilter"),
  locationFilter: document.querySelector("#locationFilter"),
  languageFilter: document.querySelector("#languageFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  freshnessFilter: document.querySelector("#freshnessFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  laborFilter: document.querySelector("#laborFilter"),
  experienceFilter: document.querySelector("#experienceFilter"),
  riskFilter: document.querySelector("#riskFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  validRouteOnly: document.querySelector("#validRouteOnly"),
  excludeLowPay: document.querySelector("#excludeLowPay"),
  excludeInternships: document.querySelector("#excludeInternships"),
  presetNote: document.querySelector("#presetNote"),
  loadMore: document.querySelector("#loadMore"),
  scopeButtons: [...document.querySelectorAll(".scope-button")],
  presetButtons: [...document.querySelectorAll(".preset-button")],
  sourceTabs: [...document.querySelectorAll(".source-tab")],
  chineseLibraryViewButtons: [...document.querySelectorAll(".source-library-view")],
  chineseLibraryLocationButtons: [...document.querySelectorAll("[data-library-location]")],
  progressFilterButtons: [...document.querySelectorAll(".progress-filter-button")],
  statusSummaryButtons: [...document.querySelectorAll(".status-summary__item")],

};

const state = {
  scope: "all",
  source: "all",
  sourceLibrary: false,
  sourceLibraryView: "active",
  sourceLibraryLocation: "priority",
  // The default keeps the complete audited current ledger, but the visible
  // score/order follows the user's Chinese-first feasibility model.
  preset: "mine",
  progressFilter: "all",
  limit: 18,
};

const PROGRESS_STORAGE_KEY = "barcelona-opportunity-progress-v1";

let autoLoadObserver = null;
let autoLoading = false;
const PROGRESS_LABELS = {
  untracked: "未标记",
  shortlist: "待投",
  applied: "已投递",
  skipped: "跳过",
};

function loadProgressState() {
  try {
    const stored = window.localStorage?.getItem(PROGRESS_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

const savedProgress = loadProgressState();

const SOURCE_LABELS = {
  chinese: "华人网 / 中文社区",
  linkedin: "领英",
  other: "公司官网 / 其他",
};

const PRESET_NOTES = {
  mine: "默认保留全部已核验当前机会，但按你的实际可行性排序：中文路径先行，Barcelona / 明确 Spain remote 次优先，品牌视觉、VI 与平面执行再加分。明确英语最高 8 分，英语大概率最高 10 分；明确西语最高 5 分，西语大概率最高 7 分；工作语言未证实最高 12 分。非平面 / 非 VI 的邻接岗位另行降权。",
  profile: "只显示可以直接用中文投递的 Barcelona / 西班牙远程机会；需要完整英文材料或西语工作的岗位不会混进来。",
  actionable: "只看现在值得马上处理的机会：Barcelona / 西班牙远程、中文可先联系、有具体入口、近期发布或页面明确开放，并排除低薪风险与实习。",
  chinese: "单独查看 Barcelona / Spain remote 的中文相关机会；中文来源并不自动等于岗位真实或适合，关闭、外地和研究线索仍留在独立历史库。",
  english: "单独查看英语工作路径；需要英文简历、作品集说明或英文面试时，卡片会明确提示。",
  brand: "聚焦品牌视觉、VI、设计系统、数字 campaign、网页与跨渠道品牌延展。",
  stable: "优先全职、正式合同或明确长期岗位；排除实习、兼职、自由职业、匿名客户入口，以及已识别的低薪或无薪风险。",
  core: "只看品牌系统、VI、数字品牌和 motion 交叉的硬核岗位；排除实习、低薪、匿名客户、研究线索与已关闭记录，不受语言筛选限制。",
  none: "不套用个人画像；仅按下方范围、来源和手动条件筛选。",
};

const DIRECTION_LABELS = {
  brand: {
    zh: "品牌视觉 / VI",
    es: "Identidad visual / branding",
  },
  digital: {
    zh: "数字品牌延展",
    es: "Extensión digital de marca",
  },
  social: {
    zh: "新媒体 / 短视频",
    es: "Redes sociales / vídeo corto",
  },
  ecommerce: {
    zh: "电商视觉",
    es: "Diseño visual para e-commerce",
  },
  production: {
    zh: "广告印刷 / 平面制作",
    es: "Imprenta / producción gráfica",
  },
  motion: {
    zh: "动态品牌 / Motion",
    es: "Motion design / vídeo de marca",
  },
  other: {
    zh: "其他设计相关",
    es: "Otras funciones relacionadas",
  },
};

const ROLE_RULES = [
  [/文员 with Photoshop\/Adobe Illustrator|产品拍摄与修图文员/i, ["产品拍摄与修图文员（旧岗核验）", "Auxiliar de fotografía y retoque de producto (vacante antigua)"]],
  [/广告平面设计师.*视频剪辑.*摄影师/i, ["广告平面设计 / 视频剪辑 / 摄影（旧岗核验）", "Diseño gráfico publicitario, vídeo y fotografía (vacante antigua)"]],
  [/电脑修图工作人员|商品图片处理/i, ["电脑修图 / 商品图片处理（旧岗确认）", "Retoque digital y tratamiento de imágenes (vacante antigua)"]],
  [/线上营销.*拍照.*修图|拍照、修图与网页基础/i, ["线上营销 / 拍照与修图（旧岗确认）", "Marketing digital, fotografía y retoque (vacante antigua)"]],
  [/鞋业电商运营|产品图、详情页与广告投放/i, ["鞋业电商运营 / 产品视觉（旧岗确认）", "Operaciones de e-commerce y diseño visual de producto (vacante antigua)"]],
  [/视频拍摄和剪辑师|巴塞罗那视频拍摄和剪辑师/i, ["视频拍摄与剪辑（旧岗确认）", "Grabación y edición de vídeo (vacante antigua)"]],
  [/短视频内容运营\s*\/\s*出镜博主/i, ["短视频内容运营 / 出镜博主（旧岗确认）", "Presentadora y creadora de contenido para vídeo corto"]],
  [/市场营销.*出镜拍摄.*后期剪辑/i, ["市场营销 / 出镜拍摄与后期剪辑（旧岗确认）", "Marketing, grabación en cámara y edición de vídeo"]],
  [/网销运营.*品牌视觉.*Amazon/i, ["网销运营 / 品牌与电商视觉（旧岗确认）", "Operaciones digitales y diseño visual para e-commerce"]],
  [/兼职新媒体助理.*公众号排版/i, ["兼职新媒体助理（远程 / 灵活）", "Asistente de redes sociales a tiempo parcial"]],
  [/文化艺术空间.*运营助理|运营助理.*Canva 海报/i, ["文化艺术空间运营助理 / 学分实习", "Asistente de operaciones culturales / prácticas"]],
  [/初级短视频剪辑.*TikTok|Junior Video Clip Editor/i, ["初级短视频剪辑（TikTok / Reels）", "Editor/a júnior de vídeo para TikTok / Reels"]],
  [/欧斯迪.*新媒体运营|新媒体运营.*产品摄影.*小红书/i, ["新媒体运营（产品视觉 / 短视频）", "Operaciones de nuevos medios — producto y vídeo"]],
  [/A1广告.*平面设计师|平面设计师.*海报.*展架.*包装/i, ["平面设计师（广告印刷 / 包装）", "Diseñador/a gráfico/a — publicidad y packaging"]],
  [/VIA.*品牌拓展|品牌拓展.*影视剪辑/i, ["品牌拓展 / 设计与影视剪辑", "Desarrollo de marca, diseño y edición audiovisual"]],
  [/Pepa Deal.*跨境电商|跨境电商.*TikTok.*MCN/i, ["跨境电商 / TikTok 与 MCN 运营", "Operaciones de e-commerce, TikTok y MCN"]],
  [/Community Manager Intern/i, ["社区内容运营实习", "Prácticas de gestión de comunidad y contenido"]],
  [/内容创作\s*\/\s*平面设计专员/i, ["内容创作 / 平面设计专员", "Especialista de contenido y diseño gráfico"]],
  [/社交媒体运营\s*&\s*视频剪辑/i, ["社交媒体运营 / 视频剪辑", "Operaciones de redes sociales y edición de vídeo"]],
  [/新媒体运营：视频剪辑/i, ["新媒体运营（视频 / 图像 / 广告）", "Operaciones de nuevos medios — vídeo, imagen y publicidad"]],
  [/平面设计\s*\+\s*视频剪辑/i, ["平面设计 + 视频剪辑", "Diseño gráfico y edición de vídeo"]],
  [/^新媒体运营$/i, ["新媒体运营", "Operaciones de nuevos medios"]],
  [/行政助理.*简单视频剪辑|EXTRA SOLUCION 2077/i, ["行政助理 / 简单视频剪辑", "Asistente administrativo/a con edición básica de vídeo"]],
  [/空间设计师|餐饮空间.*室内设计师/i, ["餐饮空间 / 室内设计师", "Diseñador/a de interiores para espacios de restauración"]],
  [/99876.*广告公司|广告公司.*CDR.*AI.*排版|客服.*基础排版设计/i, ["广告公司客服 / 基础排版设计", "Atención al cliente y maquetación básica en agencia de publicidad"]],
  [/女装导购.*线上销售拍摄|线上销售.*拍摄/i, ["女装导购 / 电商拍摄", "Dependienta de moda y fotografía para e-commerce"]],
  [/电商订单处理.*线上代理|线上代理.*高风险排除/i, ["电商订单处理 / 线上代理（风险排除）", "Gestión de pedidos / agente online (descartado por riesgo)"]],
  [/Badalona warehouse office clerk requiring simple PS/i, ["仓库办公室文员 / 简单 PS", "Auxiliar de oficina de almacén con Photoshop básico"]],
  [/SMILE JOYAS.*时尚运营师|时尚运营师.*产品搭配/i, ["时尚运营师（陈列 / 社媒视觉）", "Especialista de operaciones de moda (visual / social)"]],
  [/SMILE JOYAS.*社交媒体平台运营专员|社交媒体平台运营专员.*图文/i, ["社交媒体运营专员（图文 / 短视频）", "Especialista de redes sociales (gráfica / vídeo)"]],
  [/SMILE JOYAS.*自建网站运营专员|自建网站运营专员.*网站维护/i, ["网站运营专员（推广 / 品牌内容）", "Especialista de operaciones web (promoción / marca)"]],
  [/Global Community Intern/i, ["全球社区实习生（创作者 / 社区活动）", "Prácticas de comunidad global (creadores / activaciones)"]],
  [/Humanes.*电商运营助理|产品上架与维护/i, ["电商运营助理 / 产品上架维护", "Asistente de e-commerce y gestión de catálogo"]],
  [/Fuenlabrada.*电商运营|电商运营.*美工基础优先/i, ["电商运营 / 运营助理", "Operaciones y asistencia de e-commerce"]],
  [/商业空间设计师助理|室内.*设计师助理/i, ["商业空间设计师助理", "Asistente de diseño de espacios comerciales"]],
  [/礼品批发仓.*平面设计|电脑与平面设计人员/i, ["电脑与平面设计人员", "Diseñador/a gráfico/a para mayorista de regalos"]],
  [/电商视频拍摄剪辑.*脚本文案|TK.*Instagram.*运营合作者/i, ["电商视频与社媒内容合作者", "Colaborador/a de vídeo y contenido para e-commerce"]],
  [/平面美工设计/i, ["平面美工设计", "Diseñador/a gráfico/a"]],
  [/Ciempozuelos.*电商视觉|电商视觉与社媒运营/i, ["电商视觉与社媒运营", "Operaciones visuales de e-commerce y redes sociales"]],
  [/电脑产品短视频内容策划|抖音账号运营/i, ["3C 短视频内容与账号运营", "Contenido de vídeo y gestión de redes para productos 3C"]],
  [/玩具电商运营/i, ["玩具电商运营", "Operaciones de e-commerce de juguetes"]],
  [/产品文案.*图片.*多平台运营/i, ["电商内容与多平台运营", "Contenido y operaciones de e-commerce multicanal"]],
  [/市场宣传策划|新媒体市场专员|市场宣传.*新媒体/i, ["市场宣传 / 新媒体专员", "Especialista de comunicación y redes sociales"]],
  [/D2C.*独立站|独立站.*电商运营助理|独立站运营/i, ["独立站 / 电商运营助理", "Asistente de operaciones de e-commerce"]],
  [/产品上架.*图片处理|图片处理.*网站维护|3C.*产品上架/i, ["电商内容与网站维护", "Contenido de e-commerce y mantenimiento web"]],
  [/marketing\s*&\s*branding officer|marketing and branding officer/i, ["市场与品牌专员", "Especialista de marketing y marca"]],
  [/digital e-?commerce designer/i, ["电商数字视觉设计师", "Diseñador/a digital de e-commerce"]],
  [/senior motion designer/i, ["高级动态设计师", "Diseñador/a sénior de motion graphics"]],
  [/motion designer/i, ["动态设计师", "Diseñador/a de motion graphics"]],
  [/senior graphic designer/i, ["高级平面设计师", "Diseñador/a gráfico/a sénior"]],
  [/lead graphic designer/i, ["平面设计负责人", "Responsable de diseño gráfico"]],
  [/brand graphic designer/i, ["品牌平面设计师", "Diseñador/a gráfico/a de marca"]],
  [/graphic designer/i, ["平面设计师", "Diseñador/a gráfico/a"]],
  [/senior brand designer/i, ["高级品牌设计师", "Diseñador/a sénior de marca"]],
  [/brand designer/i, ["品牌设计师", "Diseñador/a de marca"]],
  [/visual designer/i, ["视觉设计师", "Diseñador/a visual"]],
  [/creative designer/i, ["创意设计师", "Diseñador/a creativo/a"]],
  [/art director/i, ["艺术指导", "Director/a de arte"]],
  [/web graphic designer/i, ["网页视觉设计师", "Diseñador/a gráfico/a web"]],
  [/web designer/i, ["网页设计师", "Diseñador/a web"]],
  [/digital designer/i, ["数字视觉设计师", "Diseñador/a digital"]],
  [/ui\/ux designer|ux\/ui designer/i, ["UI / UX 设计师", "Diseñador/a UI / UX"]],
  [/product designer/i, ["产品设计师", "Diseñador/a de producto"]],
  [/content creator/i, ["内容创作者", "Creador/a de contenido"]],
  [/social media/i, ["社交媒体岗位", "Puesto de redes sociales"]],
  [/new media/i, ["新媒体岗位", "Puesto de nuevos medios"]],
  [/marketing specialist/i, ["市场营销专员", "Especialista de marketing"]],
  [/marketing manager/i, ["市场经理", "Responsable de marketing"]],
  [/operations assistant/i, ["运营助理", "Asistente de operaciones"]],
  [/e-?commerce operations/i, ["电商运营", "Operaciones de e-commerce"]],
  [/intern|internship|trainee/i, ["设计相关实习", "Prácticas relacionadas con diseño"]],
  [/part[\s-]?time designer/i, ["兼职设计师", "Diseñador/a a tiempo parcial"]],
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isActionableLink(value, item = null) {
  if (/^mailto:/i.test(value)) return true;
  if (/^tel:\+?\d[\d\s().-]{6,}$/i.test(value)) return true;
  if (!/^https?:\/\//i.test(value)) return false;

  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const host = url.hostname.toLowerCase();
  const path = url.pathname.toLowerCase();
  const query = url.search.toLowerCase();

  // Research/listing pages are useful as evidence, but they are not direct
  // vacancy or application routes and must not be shown as action buttons.
  if (host === "infohuaxin.com" || host === "www.infohuaxin.com") {
    return Boolean(
      CURATED[item?.id]?.allowTraditionalHuaxinDetail &&
        path === "/showinfo.asp" &&
        /^\?id=\d+$/.test(query),
    );
  }
  if (host === "eulam.infohuaxin.com") return /^\/info\/\d+\/?$/.test(path);
  if (/xihua\.es$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  if (/spaincn\.com$/.test(host)) {
    return /mod=viewthread/.test(query) || /\/thread-\d+-\d+-\d+\.html$/.test(path);
  }
  if (/huarenjiewang\.com$/.test(host)) {
    return /\/info-\d+\.html$/.test(path) || /\/information-id-\d+\.html$/.test(path);
  }
  if (/es02\.com$/.test(host)) return /\/jobs\/recruitment\/.*\/i\d+\.html$/.test(path);
  if (/bbs\.eus$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  return true;
}

function toLinks(item) {
  const raw = Array.isArray(item.links) ? item.links : item.links ? [item.links] : [];
  const curatedRaw = Array.isArray(CURATED[item.id]?.links)
    ? CURATED[item.id].links
    : CURATED[item.id]?.links
      ? [CURATED[item.id].links]
      : [];
  const contact = String(item.contact || "");
  const emails = [...contact.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
    (match) => `mailto:${match[0]}`,
  );
  const suppressedFragments = Array.isArray(CURATED[item.id]?.suppressLinkFragments)
    ? CURATED[item.id].suppressLinkFragments
    : [];
  const orderedLinks = CURATED[item.id]?.preferCuratedLinks
    ? [...curatedRaw, ...raw, ...emails]
    : [...raw, ...curatedRaw, ...emails];
  return [...new Set(orderedLinks)].filter(
    (url) => isActionableLink(url, item) && !suppressedFragments.some((fragment) => String(url).includes(fragment)),
  );
}

function isInternshipRole(item) {
  if (typeof CURATED[item.id]?.internshipKey === "boolean") {
    return CURATED[item.id].internshipKey;
  }
  return /internship|intern\b|trainee|prácticas|practicas|beca\b|working student|实习|学生协议|学校协议/i.test(
    String(item.searchText || ""),
  );
}

function hasLowPayRisk(item) {
  const text = String(item.searchText || "")
    .replace(/不(?:接受|做|提供).{0,12}无薪.{0,16}(?:测试|试稿|作业|样片)/gi, "")
    .replace(/(?:do not|don't|avoid|refuse).{0,20}unpaid.{0,16}(?:test|trial|assignment|sample)/gi, "");
  if (/unpaid|无薪|项目分成|project share|明确低薪|低薪风险|low[-\s]?pay risk/i.test(text)) {
    return true;
  }

  const hourly = text.match(/(?:€|EUR)\s?(\d+(?:[.,]\d+)?)\s*(?:\/|per\s*)?(?:hour|hora|小时)/i);
  if (hourly && Number(hourly[1].replace(",", ".")) < 12) return true;

  const monthly = text.match(/(?:€|EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:month|mes|月)/i);
  if (monthly && Number(monthly[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 900) {
    return true;
  }

  const annual = text.match(/(?:€|EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:year|año|年)/i);
  if (annual && Number(annual[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 18000) {
    return true;
  }
  return false;
}

function riskFlags(item) {
  const flags = [];
  const applicationLanguage = scoreLanguageRisk(item);
  if (
    ["spanish", "spanishLikely", "chineseForeign", "englishSpanish", "englishSpanishLikely"].includes(
      applicationLanguage,
    )
  ) {
    flags.push("spanish");
  }
  if (["english", "englishLikely", "englishSpanish", "englishSpanishLikely"].includes(applicationLanguage)) {
    flags.push("english");
  }
  if (applicationLanguage === "foreign") flags.push("foreign");
  if (hasLowPayRisk(item)) flags.push("lowpay");
  if (isInternshipRole(item)) flags.push("internship");
  if (applicationStatus(item).key === "verify") flags.push("verify");
  if (hasOpaqueEmployerRisk(item)) flags.push("opaque");
  return flags;
}

function hasOpaqueEmployerRisk(item) {
  if (CURATED[item.id]?.opaqueEmployer) return true;
  const text = `${item.source || ""} ${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""}`;
  return /anonymous employer|employer hidden|client (?:is )?(?:anonymous|undisclosed|hidden)|actual (?:client|employer).{0,12}(?:not disclosed|unknown)|匿名(?:客户|雇主|合作公司)|客户未公开|雇主未公开|实际(?:客户|雇主|合作公司)未公开|招聘方未公开实际/i.test(
    text,
  );
}

function isFreelanceRole(item) {
  return /freelance|freelancer|autónom|autonom|contractor|project[-\s]?based|daily rate|day rate|自由职业|项目制|项目合作|按项目|日薪/i.test(
    String(item.searchText || ""),
  );
}

function hasKnownCompensation(item) {
  const text = String(item.searchText || "");
  const currencyAmount =
    /(?:€|EUR|USD|\$|GBP|£)\s?[\d,.]+(?:\s?[-–]\s?(?:€|EUR|USD|\$|GBP|£)?\s?[\d,.]+)?|[\d,.]+\s?(?:€|EUR|euros?|USD|GBP)(?:\s?[-–]\s?[\d,.]+\s?(?:€|EUR|euros?|USD|GBP)?)?/i;
  const labeledAmount =
    /(?:税前|税后)?(?:月薪|年薪|日薪|时薪|工资|薪资|salary|pay|rate)\D{0,16}[\d,.]+/i;
  return currencyAmount.test(text) || labeledAmount.test(text);
}

function laborConditionInfo(item) {
  if (isInternshipRole(item)) return { key: "internship", label: "实习 / 协议" };
  if (isFreelanceRole(item)) return { key: "freelance", label: "自由职业 / 项目制" };
  if (isFormalRole(item)) return { key: "formal", label: "正式 / 全职" };
  return { key: "unknown", label: "合同待确认" };
}

function experienceInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.experienceKey) {
    return {
      key: curated.experienceKey,
      label: curated.experienceLabel || "经验要求已人工核验",
    };
  }

  const title = `${item.opportunity || ""} ${CURATED[item.id]?.titleZh || ""} ${CURATED[item.id]?.titleEs || ""}`;
  const text = `${title} ${item.searchText || ""}`;

  if (
    /internship|intern\b|trainee|prácticas|practicas|working student|graduate program|junior|júnior|初级|实习|应届/i.test(
      title,
    ) ||
    isInternshipRole(item)
  ) {
    return { key: "junior", label: "初级 / 实习" };
  }
  if (
    /senior|sénior|lead\b|leader|líder|head of|director|responsable|资深|高级|负责人|总监|主管/i.test(
      title,
    )
  ) {
    return { key: "senior", label: "资深 / 5 年以上" };
  }

  const range = text.match(
    /(?<!\d)(\d{1,2})\s*(?:[-–]|to|a)\s*(\d{1,2})\s*(?:years?|yrs?|años?|anys?|年)/i,
  );
  if (range) {
    const minimum = Number(range[1]);
    const maximum = Number(range[2]);
    if (minimum >= 5) return { key: "senior", label: `资深 / ${minimum}–${maximum} 年` };
    if (maximum <= 2) return { key: "junior", label: `初级 / ${minimum}–${maximum} 年` };
    return { key: "mid", label: `中级 / ${minimum}–${maximum} 年` };
  }

  const minimum = text.match(
    /(?:more than|over|at least|minimum(?: of)?|más de|més de|mínimo|al menos|至少|超过)?\s*(?<!\d)(\d{1,2})\s*(?:\+)?\s*(?:years?|yrs?|años?|anys?|年)/i,
  );
  if (minimum) {
    const years = Number(minimum[1]);
    if (years >= 5) return { key: "senior", label: `资深 / ${years} 年以上` };
    if (years >= 3) return { key: "mid", label: `中级 / ${years} 年以上` };
    return { key: "junior", label: `初级 / ${years} 年左右` };
  }

  return { key: "unknown", label: "经验要求未说明" };
}

function isChineseRelevant(item) {
  if (sourceGroup(item) === "chinese") return true;
  if (CURATED[item.id]?.chineseFit) return true;

  const requirementText = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const companyText = `${item.source || ""} ${item.opportunity || ""}`;
  // Internal fit notes often say that Chinese is *not* required (or that a
  // role should not enter the Chinese homepage). Those editorial exclusions
  // must never become positive evidence merely because they contain 中文.
  const explicitChineseExclusion =
    /(?:非中文|中文(?:未要求|不是|并非|不要求)|不进入[^。；;]{0,24}中文|not\s+(?:a\s+)?chinese|chinese\s+(?:is\s+)?not\s+required|no\s+chinese)/i.test(
      requirementText,
    );
  const explicitChineseRequirement =
    /(?:mandarin|chinese\s+speaker|requires?\s+chinese|普通话(?:母语|流利|必需|要求)|中文(?:母语|流利|必需|要求|可投|沟通)|小红书|xiaohongshu|wechat|微信|中国总部|中国品牌|中国市场)/i.test(
      requirementText,
    );
  const strongerChineseExclusion =
    /(?:(?:\u975e|\u4e0d\u662f|\u5e76\u975e|\u4e0d\u5f53\u4f5c|\u4e0d\u8ba1\u5165|\u4e0d\u653e\u5165|\u4e0d\u5f52\u5165|\u4e0d\u8fdb\u5165|\u4e0d\u7b97|\u4e0d\u5c5e\u4e8e|\u4e0d\u4f5c\u4e3a|\u6ca1\u6709|\u672a\u5217|\u4e0d\u542b)[^\u3002\uff1b;]{0,24}\u4e2d\u6587|\u4e2d\u6587[^\u3002\uff1b;]{0,16}(?:\u672a\u8981\u6c42|\u4e0d\u8981\u6c42|\u4e0d\u662f|\u5e76\u975e|\u4e0d\u9700\u8981|\u8981\u6c42\u672a\u5217))/i.test(
      requirementText,
    );
  const directChineseSignal =
    /mandarin|chinese(?:[-\s](?:speaker|language|market|digital|communication|writing|required|preferred|beneficial))|requires?\s+chinese|普通话|中文(?:母语|流利|必需|可投|沟通|申请)|中国(?:品牌|市场|总部)|中国\s*[\/／]\s*(?:国际|海外)?品牌|小红书|xiaohongshu|wechat|微信|rednote/i.test(
      requirementText,
    );
  if ((explicitChineseExclusion || strongerChineseExclusion) && !directChineseSignal) return false;
  const explicitLanguageOrMarket =
    /mandarin|chinese speaker|chinese[-\s](?:market|digital|communication|writing|required|preferred|beneficial)|requires? chinese|中文|普通话|华语|中国总部|中国品牌|中国市场|微信|wechat|weixin|小红书|xiaohongshu|rednote/i.test(
      requirementText,
    );
  const knownChineseBrand =
    /\b(?:infiled|tineco|byd|huawei|honor|xiaomi|alibaba|aliexpress|trip\.com|ctrip|pop mart|shein|tcl|oppo|vivo|anker|ecovacs|haier|hisense|lenovo|jd\.com)\b/i.test(
      companyText,
    );
  return explicitLanguageOrMarket || knownChineseBrand;
}

function isResearchOnly(item) {
  const opportunity = String(item.opportunity || "");
  const text = `${item.source || ""} ${opportunity} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const metaOnlyOpportunity =
    /^(?:current board|current .* recheck|27\/07 .*\+ HKU|existing .* route|existing .* identity|refresh existing|chinese-community channel recheck|high institutional chinese\/asia route|marketing & branding officer（本轮新增）|巴塞罗那广告公司 .*最新发布日期复核|existing `|现有|本轮新增)/i.test(
      opportunity,
    );
  const opportunityIsRoute =
    /(?:job[- ]?board|jobs?) (?:channel|route|recheck)|channel (?:recheck|status|monitor)|(?:monitor|watchlist|watch route|research route)|no (?:new|current).{0,35}(?:job|vacancy|opening)|no confirmed|not (?:a |an )?(?:current |confirmed )?(?:job|vacancy|opening)|(?:open|speculative|spontaneous) (?:creative\/brand\/packaging )?application|self[- ]application|status correction|historical lead|current .{0,35}(?:employer|ecosystem)$|(?:company|platform|classifieds) (?:target|route|monitor)|institutional.{0,35}route|service category|招聘频道|招聘渠道|监控|观察入口|研究线索|开放投递|非具体空缺|自荐(?:申请|投递|岗位)|当前无.{0,20}(?:岗位|职位)/i.test(
      opportunity,
    );
  const detailsOnlyResearch =
    /0 confirmed|0 current|not a confirmed (?:job|vacancy|opening)|not a (?:job|vacancy)|not verified open|no confirmed|no active vacancy|not a live job|not an open (?:design )?job|watchlist|monitor(?:ing)? (?:only|route|entry|source)|channel update|cold outreach channel|generic cv submission|talent application|talent pool only|research route|public search (?:route|surface)|benchmark only|historical lead|china-based openings|only (?:china|shanghai|beijing)[-\s]based|仅(?:中国|上海|北京).{0,12}(?:岗位|职位)|监控入口|观察入口|研究线索/i.test(
      text,
    );
  const directResearchSignal =
    /research[- ]only|cold outreach|micro-agency collaboration|no public (?:job|vacancy|opening)|no careers or hiring page/i.test(
      text,
    );
  return metaOnlyOpportunity || opportunityIsRoute || detailsOnlyResearch || directResearchSignal;
}

function isTargetOpportunity(item) {
  const title = String(item.opportunity || "");
  if (
    /design|designer|creative|art director|brand|visual|graphic|content|social|community|marketing|e-?commerce|website|web\b|video|photo|motion|editor|retouch|设计|创意|品牌|视觉|平面|美工|内容|社媒|新媒体|运营|电商|网站|网页|视频|拍摄|剪辑|修图|海报|宣传/i.test(
      title,
    )
  ) {
    return true;
  }
  if (
    /sales advisor|fashion advisor|store manager|dependient|retail assistant|merchandiser|business developer|account manager|customer service|shop assistant|cashier|warehouse|导购|店长|营业员|店员|销售|客服|仓库|收银|财务|行政|采购|司机/i.test(
      title,
    )
  ) {
    return false;
  }
  return directionKey(item) !== "other";
}

function isFormalRole(item) {
  const text = String(item.searchText || "");
  return (
    /full[\s-]?time|jornada completa|permanent contract|contrato (?:indefinido|laboral|temporal)|payroll|正式合同|全职|永久合同|无固定期限|劳动合同/i.test(
      text,
    ) &&
    !/part[\s-]?time|media jornada|freelance|autónom|兼职|自由职业|项目制/i.test(text)
  );
}

function locationFitPoints(item) {
  const location = locationBucket(item);
  if (location === "barcelona") return 24;
  if (location !== "remote") return location === "madrid" ? -12 : -4;

  const text = `${locationLabel(item)} ${item.status || ""} ${item.analysis || ""}`.toLowerCase();
  const spainUnconfirmed =
    /spain (?:eligibility|residen|contract|payroll|hiring|employment).{0,28}(?:confirm|unclear|unknown|not stated|待确认|需确认)|(?:西班牙|spain).{0,24}(?:资格|合同|雇佣|开票|付款).{0,14}(?:待确认|需确认|未确认)|(?:待确认|需确认|未确认).{0,16}(?:西班牙|spain).{0,16}(?:资格|合同|雇佣|开票|付款)|不(?:说明|明确).{0,18}(?:西班牙|spain)|does not state.{0,18}spain/i.test(text);
  // A China/other-country remote label is not practically Barcelona-accessible
  // until the employer confirms Spain residency, contracting and payment.
  // Give it a real penalty instead of the small positive score used before.
  if (spainUnconfirmed) return -8;
  if (/spain remote|remote.{0,16}spain|españa.{0,12}remot|西班牙远程|barcelona 可居住/i.test(text)) return 20;
  if (/europe remote|remote.{0,16}europe|emea|欧洲远程|欧盟远程/i.test(text)) return 14;
  if (/worldwide|work from anywhere|global remote|全球远程/i.test(text)) return 6;
  return 4;
}

function personalMatchScore(item) {
  // This is a feasibility score for this user, not a generic measure of how
  // prestigious or professionally attractive a vacancy looks. Language is the
  // dominant constraint because the user has explicitly said that both English
  // and Spanish are currently weak.
  const tierPoints = { A: 10, B: 8, C: 4, D: 0, X: -30 };
  const applicationLanguagePoints = {
    chinese: 40,
    chineseCheck: 30,
    chineseForeign: 10,
    basicSpanish: 8,
    unknown: 0,
    english: 0,
    englishLikely: 0,
    englishSpanish: 0,
    englishSpanishLikely: 0,
    spanishLikely: 0,
    foreign: 0,
    spanish: 0,
  };
  const languageCaps = {
    chinese: 100,
    chineseCheck: 84,
    chineseForeign: 38,
    basicSpanish: 35,
    unknown: 12,
    english: 8,
    englishLikely: 10,
    englishSpanish: 3,
    englishSpanishLikely: 4,
    spanishLikely: 7,
    foreign: 4,
    spanish: 5,
  };
  const languageScales = {
    chineseForeign: 0.45,
    unknown: 0.16,
    english: 0.12,
    englishLikely: 0.14,
    englishSpanish: 0.04,
    englishSpanishLikely: 0.06,
    spanishLikely: 0.1,
    foreign: 0.06,
    spanish: 0.08,
  };
  // The user is looking for brand/VI and hands-on graphic design first.
  // Generic motion, growth and social content are useful backups, but they
  // must not outrank an otherwise comparable identity/graphic-production job.
  const directionPoints = { brand: 24, production: 22, digital: 14, motion: 12, ecommerce: 10, social: 6, other: -16 };
  const experienceAdjustments = {
    open: 4,
    junior: 4,
    mid: 0,
    unknown: -3,
    senior: -10,
    lead: -18,
    intern: -12,
    internship: -12,
  };
  const freshnessPoints = { week: 5, month: 3, quarter: 1, older: 0, old: -4, unknown: 0 };
  const applicationLanguage = scoreLanguageRisk(item);
  const status = applicationStatus(item).key;

  let score =
    (tierPoints[item.tier] || 0) +
    locationFitPoints(item) +
    (applicationLanguagePoints[applicationLanguage] || 0) +
    (directionPoints[directionKey(item)] || 0) +
    (freshnessPoints[item.freshnessTag] || 0);

  if (isChineseRelevant(item)) {
    score += ["chinese", "chineseCheck", "chineseForeign", "basicSpanish"].includes(applicationLanguage) ? 8 : 3;
  }
  if (toLinks(item).length) score += 4;
  if (isFormalRole(item)) score += 3;
  if (hasKnownCompensation(item)) score += 2;
  if (hasLowPayRisk(item)) score -= 12;
  if (hasOpaqueEmployerRisk(item)) score -= 12;
  if (isResearchOnly(item)) score -= 45;
  if (status === "live") score += 6;
  if (status === "verify") score -= 8;
  if (status === "closed") score -= 45;

  // Foreign-language routes are scaled after the professional/location score
  // is calculated. This preserves meaningful ordering within each backup
  // language group while preventing a strong portfolio match from erasing the
  // user's actual communication barrier.
  if (languageScales[applicationLanguage]) {
    score = Math.max(0, Math.min(100, score)) * languageScales[applicationLanguage];
  } else {
    score = Math.min(score, languageCaps[applicationLanguage] ?? 55);
  }
  // Seniority is an independent feasibility gate. Apply it after the language
  // scale so a 10–15 year lead role still receives a meaningful penalty rather
  // than having that penalty diluted to a few points by the language factor.
  score += experienceAdjustments[experienceInfo(item).key] ?? experienceAdjustments.unknown;
  // Preserve the real university-agreement and temporary-role constraint after
  // foreign-language scaling; otherwise an internship penalty nearly vanishes.
  if (isInternshipRole(item)) score -= 10;

  // Apply the language ceiling last. A junior bonus or a fresh posting must
  // never lift a foreign-language role above the user's actual communication
  // ceiling. This is the number shown on every card and used for all ordering.
  score = Math.min(score, languageCaps[applicationLanguage] ?? 50);
  return Math.max(0, Math.min(100, Number(score.toFixed(1))));
}

function postedTimestamp(item) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return 0;
  return Date.parse(`${item.postedAt}T00:00:00Z`) || 0;
}

function rankingScore(item) {
  let score = personalMatchScore(item);
  const status = applicationStatus(item).key;
  const hasDate = postedTimestamp(item) > 0;
  const freshDateBonus = { week: 12, month: 7, quarter: 3, older: 0, old: -6 };

  if (hasDate) {
    score += freshDateBonus[item.freshnessTag] || 0;
  } else {
    score -= status === "verify" ? 9 : 3;
  }

  if (status === "live") score += 5;
  if (status === "closed") score -= 30;
  if (state.preset === "chinese" && sourceGroup(item) === "chinese" && hasDate) score += 3;
  return score;
}

function confidenceScore(item) {
  const statusPoints = { live: 30, verify: 12, closed: -30 };
  const routePoints = toLinks(item).length ? 12 : 0;
  const datePoints = postedTimestamp(item) ? 8 : -4;
  return (statusPoints[applicationStatus(item).key] || 0) + routePoints + datePoints + personalMatchScore(item);
}

function displayedScore(item) {
  return Number(personalMatchScore(item)) || 0;
}

function sortRecords(records) {
  const mode = els.sortFilter?.value || "smart";
  const compareScore = (a, b) => displayedScore(b) - displayedScore(a);
  // The composite score is always the primary order. The other sort choices
  // are tie-breakers only, so no lower-scoring card can appear before a
  // higher-scoring card after the user changes the selector or reloads the
  // page with a persisted selector value.
  const locationOrder = { barcelona: 4, remote: 3, madrid: 2, other: 1 };
  const compareLocation = (a, b) =>
    (locationOrder[locationBucket(b)] || 0) - (locationOrder[locationBucket(a)] || 0);
  const compareDefault = (a, b) =>
    compareScore(a, b) || compareLocation(a, b) || postedTimestamp(b) - postedTimestamp(a);
  const compareLatest = (a, b) =>
    postedTimestamp(b) - postedTimestamp(a) || compareLocation(a, b) || rankingScore(b) - rankingScore(a);
  const compareMatch = (a, b) =>
    personalMatchScore(b) - personalMatchScore(a) || compareLocation(a, b) || postedTimestamp(b) - postedTimestamp(a);
  const compareConfidence = (a, b) =>
    confidenceScore(b) - confidenceScore(a) || compareLocation(a, b) || postedTimestamp(b) - postedTimestamp(a);
  const compareWeight = (a, b) =>
    (Number(b.weight) || Number(b.score) || 0) - (Number(a.weight) || Number(a.score) || 0) || compareDefault(a, b);

  const tieBreaker =
    mode === "latest"
      ? compareLatest
      : mode === "match"
        ? compareMatch
        : mode === "confidence"
          ? compareConfidence
          : mode === "weight"
            ? compareWeight
            : compareDefault;

  const compareAuditedOrder = (a, b) =>
    (AUDITED_ORDER_INDEX.get(Number(a.id)) ?? Number.MAX_SAFE_INTEGER) -
    (AUDITED_ORDER_INDEX.get(Number(b.id)) ?? Number.MAX_SAFE_INTEGER);
  records.sort((a, b) => compareScore(a, b) || tieBreaker(a, b) || compareAuditedOrder(a, b));
}

function matchesPreset(item) {
  const location = locationBucket(item);
  const language = languageInfo(item).key;
  const direction = directionKey(item);
  const hasRoute = toLinks(item).length > 0;

  if (state.preset === "mine") {
    return (
      MY_OPPORTUNITY_SET.has(Number(item.id)) &&
      ["barcelona", "remote"].includes(location) &&
      hasRoute &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }

  if (state.preset === "profile") {
    const applicationLanguage = applicationLanguagePath(item).key;
    return (
      ["barcelona", "remote"].includes(location) &&
      applicationLanguage === "chinese" &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "actionable") {
    const applicationLanguage = applicationLanguagePath(item).key;
    const status = applicationStatus(item).key;
    const currentEnough =
      status === "live" || ["week", "month", "quarter"].includes(item.freshnessTag);
    return (
      ["barcelona", "remote"].includes(location) &&
      ["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage) &&
      (applicationLanguage !== "basicSpanish" || sourceGroup(item) === "chinese") &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      hasRoute &&
      currentEnough &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item) &&
      status !== "closed"
    );
  }
  if (state.preset === "chinese") {
    return (
      ["barcelona", "remote"].includes(location) &&
      isChineseRelevant(item) &&
      isTargetOpportunity(item) &&
      direction !== "other" &&
      ["A", "B", "C"].includes(item.tier) &&
      !isInternshipRole(item) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "english") {
    return (
      ["barcelona", "remote"].includes(location) &&
      ["english", "englishLikely", "englishSpanish", "englishSpanishLikely"].includes(
        scoreLanguageRisk(item),
      ) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "brand") {
    return (
      ["barcelona", "remote"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "core") {
    const status = applicationStatus(item).key;
    const text = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""} ${item.searchText || ""}`;
    const motionOrSystem = /brand system|visual identity|brand guideline|design system|motion|motion graphics|art direction|品牌系统|视觉识别|品牌指南|设计系统|动效|动态|艺术指导/i.test(text);
    return (
      ["barcelona", "remote"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      motionOrSystem &&
      ["A", "B", "C"].includes(item.tier) &&
      ["live", "verify"].includes(status) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item)
    );
  }
  if (state.preset === "stable") {
    return (
      ["barcelona", "remote"].includes(location) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      isFormalRole(item) &&
      !["spanish", "englishSpanish", "englishSpanishLikely"].includes(language) &&
      direction !== "other" &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  return true;
}

function sourceGroup(item) {
  if (["chinese", "linkedin", "other"].includes(item.sourceGroup)) return item.sourceGroup;
  const text = `${item.source} ${item.contact} ${item.searchText}`.toLowerCase();
  if (/linkedin/.test(text)) return "linkedin";
  if (/xihua|huaren|eulam|oulang|infohuaxin|leeeu|casa asia|西华|华人|欧浪|乐在欧洲|中文社区/.test(text)) {
    return "chinese";
  }
  return "other";
}

function directionKey(item) {
  if (CURATED[item.id]?.direction) return CURATED[item.id].direction;
  const role = String(item.opportunity || "");
  if (/行政助理.*简单视频剪辑/i.test(role)) return "social";
  if (/空间设计师|餐饮空间.*室内设计师/i.test(role)) return "other";
  if (/广告公司客服.*基础排版|CDR.*AI.*排版/i.test(role)) return "production";
  if (/女装导购.*线上销售拍摄|线上销售.*拍摄|warehouse office clerk requiring simple PS/i.test(role)) return "ecommerce";
  if (/电商订单处理.*线上代理/i.test(role)) return "ecommerce";
  if (/广告平面设计师.*视频剪辑.*摄影师/i.test(role)) return "production";
  if (/鞋业电商运营|电脑修图工作人员|商品图片处理/i.test(role)) return "ecommerce";
  if (/线上营销.*拍照.*修图|视频拍摄和剪辑师/i.test(role)) return "social";
  if (/网销运营.*品牌视觉.*Amazon/i.test(role)) return "ecommerce";
  if (/短视频内容运营|市场营销.*出镜拍摄/i.test(role)) return "social";
  const text = String(item.searchText || "").toLowerCase();
  if (/xiaohongshu|tiktok|instagram|social media|short video|video editing|content creator|new media|wechat|小红书|抖音|新媒体|短视频|剪辑|公众号|社媒|拍摄/.test(text)) {
    return "social";
  }
  if (/print|printing|signage|r[oó]tulos|flyer|menu|poster|coreldraw|imprenta|印刷|广告公司|招牌|菜单|传单|喷印|广告制作|平面制作|物料制作/.test(text)) {
    return "production";
  }
  if (/ecommerce|e-commerce|shopify|amazon|product image|listing|marketplace|product page|电商|独立站|产品图|商品|上架|亚马逊/.test(text)) {
    return "ecommerce";
  }
  if (/website|web designer|landing|digital campaign|banner|newsletter|email marketing|digital designer|wordpress|网站|网页|官网|页面|数字/.test(text)) {
    return "digital";
  }
  if (/brand|branding|visual identity|identity|logo|guidelines|brand system|graphic designer|visual designer|art director|品牌|视觉|平面设计|设计师|美工/.test(text)) {
    return "brand";
  }
  return "other";
}

function locationBucket(item) {
  // Round 657: a China-based remote card has no explicit Spain eligibility;
  // keep it manual-only even though the curated legacy row used `remote`.
  if (Number(item?.id) === 916) return "other";
  // Round 15: Palau-solità i Plegamans is in Barcelona province. The card
  // remains explicit about the commute, but it belongs to the local/nearby
  // opportunity set instead of being mislabelled as another region.
  if (Number(item?.id) === 930705) return "barcelona";
  if (/^Other\s*\//i.test(String(item.locationTag || "")) || item.locationTag === "Other / unclear") return "other";
  const curated = CURATED[item.id];
  if (curated?.locationKey) return curated.locationKey;
  const text = `${item.location || ""} ${item.rawColumns?.Location || ""}`;
  // Spanish cities outside Barcelona are manual-only, even when a legacy
  // record happened to carry an old "Barcelona area" location tag.
  if (/\bsils\b|\bgirona\b|\barcore\b/i.test(text)) return "other";
  if (/madrid|马德里|getafe|alcobendas|seseña|pinto|parla|fuenlabrada|humanes/i.test(text)) {
    return "madrid";
  }
  // Multi-office postings can enumerate Barcelona alongside London, Amsterdam
  // or other cities.  When Barcelona is explicitly one of the eligible
  // locations, it is a Barcelona opportunity—not an "other city" role.
  if (
    item.locationTag === "Barcelona area" &&
    /barcelona|barcelon|巴塞|badalona|cornell|hospitalet|sant cugat|gl[oò]ries/i.test(text) &&
    !/not barcelona|rather than barcelona|非巴塞|不在巴塞/i.test(text)
  ) {
    return "barcelona";
  }
  const hasRemoteSignal = /remote|remoto|远程/i.test(text);
  const hasSpainEuropeEligibility = /spain|espa[nñ]a|europe|european|\beu\b|eu[- ]based|europe[- ]wide|eea|iberia/i.test(text);
  const isGlobalOnlyRemote = /global(?:ly)?\s+remote|worldwide|work\s+from\s+anywhere|remote\s+anywhere|anywhere\s+in\s+the\s+world/i.test(text);
  const hasOnsiteOnlySignal = /on[- ]?site|onsite|office[- ]?only|现场办公|办公室办公/i.test(text);
  if (
    /not barcelona|rather than barcelona|非巴塞|不在巴塞|valencia|warsaw|shanghai|上海|london|paris|lisbon|milano|milan|berlin|amsterdam|hoofddorp|schiedam|courbevoie|uxbridge|budapest/i.test(
      text,
    )
  ) {
    return "other";
  }
  // “Remote” by itself is not Spain/Europe eligibility. Global contractor
  // pages remain manual-only unless their original detail names an EU/Spain
  // scope or this record was already explicitly curated as Europe remote.
  if (isGlobalOnlyRemote && !hasSpainEuropeEligibility) return "other";
  // An explicit location tag is stronger than a generic word such as
  // "remote" in a global listing. Do not turn worldwide/unclear jobs into
  // Spain-eligible remote roles merely because the description says remote.
  if (/^Other\s*\//i.test(String(item.locationTag || "")) || item.locationTag === "Other / unclear") return "other";
  if (item.locationTag === "Barcelona area") return "barcelona";
  if (item.locationTag === "Madrid area") return "madrid";
  if (item.locationTag === "Remote / Europe" && !hasOnsiteOnlySignal) return "remote";
  if (hasRemoteSignal && hasSpainEuropeEligibility && !hasOnsiteOnlySignal) return "remote";
  if (/barcelona|barcelon|巴塞|badalona|cornell|hospitalet|sant cugat|gl[oò]ries/i.test(text)) {
    return "barcelona";
  }
  if (hasRemoteSignal && hasSpainEuropeEligibility && !hasOnsiteOnlySignal) return "remote";
  if (item.locationTag === "Barcelona area") return "barcelona";
  if (item.locationTag === "Remote / Europe") return "remote";
  if (item.locationTag === "Madrid area") return "madrid";
  return "other";
}

function locationLabel(item) {
  if (Number(item?.id) === 916) return "中国远程 / 西班牙资格未确认（手动查看）";
  const curated = CURATED[item.id];
  if (curated?.locationLabel) return curated.locationLabel;
  if (curated) {
    const location = String(item.location || "");
    const explicit = location.match(/Barcelona(?:\s*\/\s*[^;,]+)?|Badalona(?:\s*\/\s*[^;,]+)?/i);
    if (explicit) return explicit[0].replace("Barcelona", "巴塞罗那");
  }
  const labels = {
    barcelona: "巴塞罗那及周边",
    remote: "远程 / 欧洲",
    madrid: "马德里及周边",
    other: "其他地区或未说明",
  };
  return labels[locationBucket(item)];
}

function languageInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.language) {
    const key =
      curated.languageKey ||
      (/西语 B|需要基础西语|西语要求/.test(curated.language)
        ? /基础/.test(curated.language)
          ? "basic"
          : "spanish"
        : "light");
    return { key, label: curated.language };
  }

  const text = String(item.searchText || "");
  if (
    /english.{0,30}chinese.{0,30}spanish.{0,16}(?:all\s+)?essential|spanish\s+(?:is\s+|all\s+)?(?:essential|required|mandatory)|requires?\s+(?:fluent\s+)?spanish|fluent\s+spanish|spanish\s+[bc][12]|西班牙语.{0,8}(?:必须|要求|流利|工作沟通)|西语.{0,12}(?:必须|要求|流利|工作沟通|达到|[bc][12])|熟练.{0,6}西语|用西语沟通/i.test(
      text,
    )
  ) {
    return { key: "spanish", label: "西语有明确要求，投递前先判断是否能应付" };
  }
  if (
    /没有.{0,24}西语要求|未(?:公开|说明|写明).{0,24}西语要求|西语要求.{0,12}(?:未公开|未说明|未知)|no spanish (?:requirement|gate)|spanish (?:was )?not (?:specified|surfaced)/i.test(
      text,
    )
  ) {
    return { key: "light", label: "公开信息未写西语要求；可先用中文确认" };
  }
  if (/basic spanish|spanish basics|基础西语|西语基础|西语.{0,5}基础/i.test(text)) {
    return { key: "basic", label: "只需基础西语，属于相对可尝试的门槛" };
  }
  if (
    /mandarin|chinese|中文|普通话|english as (?:a )?work language|fluent english|spanish not surfaced|英语.{0,8}(?:工作|要求)|英文.{0,8}(?:工作|要求)/i.test(
      text,
    )
  ) {
    if (sourceGroup(item) === "chinese") {
      return { key: "light", label: "来自中文渠道；先确认日常是否可以主要用中文沟通" };
    }
    return { key: "light", label: "中文或英语可发挥优势；仍需核对完整要求" };
  }
  return { key: "unknown", label: "公开信息未明确说明语言要求" };
}

const APPLICATION_LANGUAGE_PATHS = {
  chinese: {
    key: "chinese",
    label: "中文可直接联系",
    short: "中文可投",
    tone: "good",
  },
  chineseCheck: {
    key: "chineseCheck",
    label: "先用中文确认工作语言",
    short: "中文先问",
    tone: "check",
  },
  chineseForeign: {
    key: "chineseForeign",
    label: "中文是优势，但英语 / 西语仍是明确工作门槛",
    short: "中文优势 + 外语门槛",
    tone: "hard",
  },
  basicSpanish: {
    key: "basicSpanish",
    label: "可中文联系，但工作需基础西语",
    short: "基础西语",
    tone: "check",
  },
  english: {
    key: "english",
    label: "需要英文简历 / 沟通",
    short: "英文材料",
    tone: "hard",
  },
  englishLikely: {
    key: "englishLikely",
    label: "招聘正文与团队环境显示英语大概率是工作语言，但未明写等级",
    short: "英语环境大概率",
    tone: "hard",
  },
  englishSpanish: {
    key: "englishSpanish",
    label: "英语和西语都构成明确工作门槛，当前语言条件不适合优先投递",
    short: "英语 + 西语双门槛",
    tone: "hard",
  },
  englishSpanishLikely: {
    key: "englishSpanishLikely",
    label: "英语有明确要求，同时西语本地工作环境也很可能构成沟通门槛",
    short: "英语硬门槛 + 西语环境",
    tone: "hard",
  },
  spanishLikely: {
    key: "spanishLikely",
    label: "西语工作环境很可能，需先确认",
    short: "西语很可能",
    tone: "hard",
  },
  foreign: {
    key: "foreign",
    label: "其他外语工作门槛，需先确认",
    short: "其他外语门槛",
    tone: "hard",
  },
  spanish: {
    key: "spanish",
    label: "西语或本地语言是硬门槛",
    short: "西语门槛",
    tone: "hard",
  },
  unknown: {
    key: "unknown",
    label: "投递语言未说明，先确认工作语言",
    short: "语言待问",
    tone: "check",
  },
};

const APPLICATION_MODE_OVERRIDES = Object.freeze({
  760: "spanish",
  762: "english",
  815: "spanish",
});

// Round 51 scoring-risk audit. These vacancies do not state a formal language
// level, so their evidence classification remains "unknown". However, their
// complete original briefs, application flow and team context make a foreign
// working environment probable. Treating them as neutral previously pushed
// them above jobs that are materially more feasible for this user.
const SCORE_LANGUAGE_RISK_OVERRIDES = new Map([
  [930812, "englishLikely"],
  [930834, "englishLikely"],
  [427, "englishLikely"],
  [930837, "englishLikely"],
  [78, "spanishLikely"],
  [1092, "englishLikely"],
  [372, "englishLikely"],
  [930826, "englishLikely"],
  [425, "englishLikely"],
  [345, "englishLikely"],
  [1107, "englishLikely"],
  [55, "englishLikely"],
  [446, "englishLikely"],
  [930847, "englishLikely"],
  [2942, "englishLikely"],
  [535, "englishLikely"],
  [874, "englishLikely"],
  [37, "englishLikely"],
  [920001, "englishLikely"],
  [134, "englishLikely"],
  [84, "englishLikely"],
  [989, "englishLikely"],
  [854, "englishLikely"],
  [601, "englishLikely"],
  [1105, "englishLikely"],
  [1036, "englishLikely"],
  [930844, "englishLikely"],
  [1002, "englishLikely"],
  [859, "englishLikely"],
  [990, "englishLikely"],
  [12, "englishLikely"],
  [1287, "englishLikely"],
  [1020, "spanishLikely"],
  [136, "englishLikely"],
  [930867, "englishLikely"],
  [942, "englishLikely"],
  [985, "englishLikely"],
  [1098, "englishLikely"],
  [930841, "englishLikely"],
  [1021, "englishLikely"],
  [224, "englishLikely"],
  [1024, "englishLikely"],
  [996, "englishLikely"],
  [443, "englishLikely"],
  [1029, "englishLikely"],
  [930865, "englishLikely"],
  [445, "englishLikely"],
  [1011, "englishLikely"],
  [1243, "englishLikely"],
  [304, "englishLikely"],
  [930892, "englishLikely"],
]);

const ROUND51_SECTION = "2026-08-13 Round 51 user-language feasibility recalibration";
for (const [id, scoringLanguageRisk] of SCORE_LANGUAGE_RISK_OVERRIDES) {
  if (!CURATED[id]) continue;
  CURATED[id] = {
    ...CURATED[id],
    latestAuditSection: ROUND51_SECTION,
    scoringLanguageRisk,
    scoringLanguageRiskReason:
      scoringLanguageRisk === "spanishLikely"
        ? "The exact brief and local team context are predominantly Spanish even though no formal level is stated."
        : "The exact brief, application flow and team context are predominantly English even though no formal level is stated.",
  };
}

// 930812 was re-opened in Round 52 after the Round 51 language-risk model was
// introduced. Keep its new status provenance while still applying the same
// English-likely feasibility rule as comparable global Brand Studio roles.
if (CURATED[930812]) {
  CURATED[930812] = { ...CURATED[930812], latestAuditSection: ROUND52_SECTION };
}

const ROUND53_SECTION = "2026-08-13 Round 53 Chinese-advantage and foreign-language feasibility rescore";
const ROUND53_CHINESE_FOREIGN_ROLES = new Map([
  [
    24,
    "Chinese is an explicit job requirement and a real candidate advantage, but English and Spanish are also essential. Score it above pure foreign-language roles while retaining a hard feasibility penalty.",
  ],
  [
    25,
    "Chinese is an explicit job requirement and the employer provides a direct contact route, but Spanish is required for the content and shop-operations scope. Keep it visible as a Chinese-advantage fallback, not a language-easy role.",
  ],
]);
for (const [id, scoringLanguageRiskReason] of ROUND53_CHINESE_FOREIGN_ROLES) {
  SCORE_LANGUAGE_RISK_OVERRIDES.set(id, "chineseForeign");
  if (!CURATED[id]) continue;
  CURATED[id] = {
    ...CURATED[id],
    latestAuditSection: ROUND53_SECTION,
    scoringLanguageRisk: "chineseForeign",
    scoringLanguageRiskReason,
  };
}

const round53DragonsJuniorArtDirector = allData.find((item) => Number(item.id) === 930822);
if (round53DragonsJuniorArtDirector) {
  Object.assign(round53DragonsJuniorArtDirector, {
    section: ROUND53_SECTION,
    status:
      "Closed/history after direct recheck on 2026-08-13: the exact official Factorial URL now renders only the generic Dragons jobs board, the current board source contains neither requisition 317709 nor Junior Art Director, and LinkedIn explicitly says applications are no longer accepted.",
    analysis:
      "Preserve the social-first art-direction brief and original links in history, but do not count or rank it as a current opportunity. Restore only if Dragons publishes a new independent requisition.",
    tier: "X",
  });
  round53DragonsJuniorArtDirector.searchText = [
    round53DragonsJuniorArtDirector.source,
    round53DragonsJuniorArtDirector.opportunity,
    round53DragonsJuniorArtDirector.fit,
    round53DragonsJuniorArtDirector.location,
    round53DragonsJuniorArtDirector.status,
    round53DragonsJuniorArtDirector.contact,
    round53DragonsJuniorArtDirector.analysis,
  ]
    .filter(Boolean)
    .join(" ");
  CURATED[930822] = {
    ...CURATED[930822],
    statusKey: "closed",
    latestAuditSection: ROUND53_SECTION,
    reason:
      "The exact Factorial requisition has disappeared from the employer board and LinkedIn now says applications are no longer accepted.",
    next: "历史保留；等待 Dragons 发布新的独立招聘编号后再恢复。",
    changeType: "profile-status-audit-closed",
  };
}

const round53FactorialPaidMotion = allData.find((item) => Number(item.id) === 930823);
if (round53FactorialPaidMotion) {
  Object.assign(round53FactorialPaidMotion, {
    section: ROUND53_SECTION,
    status:
      "Live/current after canonical-link repair on 2026-08-13: official requisition 316734 returns the complete Marketing Paid Motion Designer Global Markets brief and application page; the old 306539 Spanish-market URL now renders only the generic Factorial jobs board.",
    contact:
      "Official detail/application: https://careers.factorialhr.com/job_posting/marketing-paid-motion-designer-global-markets-316734 ; current LinkedIn employer detail: https://www.linkedin.com/jobs/view/4451516366",
    links: [
      "https://careers.factorialhr.com/job_posting/marketing-paid-motion-designer-global-markets-316734",
      "https://www.linkedin.com/jobs/view/4451516366",
    ],
  });
  round53FactorialPaidMotion.searchText = [
    round53FactorialPaidMotion.source,
    round53FactorialPaidMotion.opportunity,
    round53FactorialPaidMotion.fit,
    round53FactorialPaidMotion.location,
    round53FactorialPaidMotion.status,
    round53FactorialPaidMotion.contact,
    round53FactorialPaidMotion.analysis,
  ]
    .filter(Boolean)
    .join(" ");
  CURATED[930823] = {
    ...CURATED[930823],
    latestAuditSection: ROUND53_SECTION,
    links: [
      "https://careers.factorialhr.com/job_posting/marketing-paid-motion-designer-global-markets-316734",
      "https://www.linkedin.com/jobs/view/4451516366",
    ],
    preferCuratedLinks: true,
    suppressLinkFragments: ["306539"],
    reason:
      "Official Factorial requisition 316734 is the current Global Markets vacancy; the older 306539 Spanish-market route is removed.",
    changeType: "profile-current-requisition-repair",
  };
}

const ROUND54_SECTION = "2026-08-13 Round 54 ranked 31-60 original-page and application-path recheck";

[
  {
    id: 930900,
    section: ROUND54_SECTION,
    source: "Bending Spoons / official careers and current LinkedIn employer detail",
    opportunity: "Media Designer",
    fit: "Europe-remote visual-production role spanning brand assets, paid and organic social, product visuals, decks, motion, graphic design and AI-assisted creative workflows",
    location: "Eligible-country remote / Spain eligibility requires application confirmation / first months mostly Milan",
    status:
      "Live/current: Bending Spoons' official careers detail and application 69d588c142e4c7b7a3dd14ee were opened on 2026-08-13 and list Media Designer, permanent or fixed-term full-time, Apply, Madrid or fully remote from eligible countries. The current LinkedIn employer detail 4450907880 independently exposes the complete brief and a 2026-09-07 valid-through date.",
    contact:
      "Official detail: https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee ; official application: https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply ; employer LinkedIn: https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
    analysis:
      "The visual scope is strong and no fixed experience minimum is stated, but proficient spoken/written English, several hours of selection tests and spending most days in Milan during the first months are material barriers. Keep only as an English-first remote backup and confirm Spain eligibility before applying.",
    score: 82,
    tier: "B",
    locationTag: "Remote Europe",
    typeTag: "Graphic / motion / brand production",
    sourceGroup: "official",
    postedAt: "2026-08-08",
    freshnessTag: "week",
    freshnessAgeDays: 5,
    links: [
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee",
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply",
      "https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
    ],
    searchText:
      "Bending Spoons current official Media Designer Europe eligible countries remote Madrid permanent fixed-term full-time brand assets paid organic social product visuals decks motion graphic design AI proficient English selection tests several hours first months mostly Milan 2026-09-07",
  },
  {
    id: 930901,
    section: ROUND54_SECTION,
    source: "Equipo Singular / current LinkedIn employer detail",
    opportunity: "Jóvenes Talentos Diseño Gráfico y Vídeo (Barcelona)",
    fit: "Barcelona morning internship supporting campaign graphics, visual consistency, moodboards, newsletters, web, events, social, basic video and branding",
    location: "Barcelona / hybrid mornings / internship agreement required / €271 gross monthly grant",
    status:
      "Live/current: LinkedIn employer detail 4452389902 was opened and read in full on 2026-08-13. Its JobPosting data gives 2026-08-12 publication, 2026-09-11 valid-through and INTERN employment. The role requires a school or university convenio and offers a €271 gross monthly grant for 09:00-14:00 hybrid work.",
    contact:
      "Current employer detail/application: https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902 ; questions: mailto:people@equiposingular.com",
    analysis:
      "The actual design scope is useful, but the mandatory convenio and very low €271/month grant make it impractical unless the user is currently eligible and intentionally wants a short training route. The complete brief is Spanish and no Chinese path exists.",
    score: 38,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Internship / graphic / video / brand production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: [
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
      "mailto:people@equiposingular.com",
    ],
    searchText:
      "Equipo Singular current Barcelona Jovenes Talentos Diseno Grafico Video internship hybrid mornings mandatory school university convenio €271 gross month campaigns graphics branding visual consistency moodboards social web newsletters events Premiere CapCut After Effects Spanish brief 2026-09-11",
  },
  {
    id: 930902,
    section: ROUND54_SECTION,
    source: "Ogilvy / official Greenhouse API and employer careers",
    opportunity: "Senior Art Director",
    fit: "Barcelona integrated-campaign art direction from concept through final visual execution for regulated healthcare and pharmaceutical brands",
    location: "Barcelona / official Ogilvy application / office model and compensation not stated",
    status:
      "Live/current: Ogilvy's official Greenhouse API and employer careers route 4721164005 were opened on 2026-08-13 and return Senior Art Director, Barcelona, a complete brief and current application route. The official record was updated on 2026-08-05.",
    contact:
      "Official detail/application: https://www.ogilvy.com/careers/4721164005?gh_jid=4721164005 ; official API evidence: https://boards-api.greenhouse.io/v1/boards/ogilvy/jobs/4721164005",
    analysis:
      "This is a true current Barcelona art-direction opening, but it requires more than five years as an agency Art Director and the complete public brief is Spanish. Keep as a zero-score senior Spanish backup, not a realistic current priority.",
    score: 76,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Senior art direction / integrated campaigns",
    sourceGroup: "official",
    postedAt: "2026-08-05",
    freshnessTag: "month",
    freshnessAgeDays: 8,
    links: [
      "https://www.ogilvy.com/careers/4721164005?gh_jid=4721164005",
      "https://boards-api.greenhouse.io/v1/boards/ogilvy/jobs/4721164005",
    ],
    searchText:
      "Ogilvy current official Greenhouse Senior Art Director Barcelona healthcare pharma integrated campaigns concept visual execution Spanish brief more than 5 years agency portfolio 2026-08-05",
  },
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

Object.assign(CURATED, {
  930900: {
    statusKey: "live",
    direction: "brand",
    company: "Bending Spoons",
    locationKey: "remote",
    locationLabel: "欧洲合资格国家远程 / 前几个月需大部分时间在 Milan",
    titleZh: "媒体设计师（品牌、平面与动效制作）",
    titleEs: "Media Designer",
    languageKey: "english",
    applicationMode: "english",
    language: "明确要求熟练阅读、写作和口语英语",
    experienceKey: "open",
    experienceLabel: "未写固定年限 / 以能力测试为主",
    reason:
      "品牌资产、平面、动效、社媒和 AI 制作方向匹配，官方职位和申请表均开放；但熟练英语、数小时测试与前期 Milan 到岗要求使其只能作为外语备选。",
    next:
      "先确认 Spain 是否属于可远程雇佣国家，以及前几个月 Milan 到岗的具体频率和费用；只有可接受英语筛选与测试投入时再申请。",
    statusEvidence:
      "2026-08-13 复核：官方职位与申请表 69d588c142e4c7b7a3dd14ee 均开放；LinkedIn JobPosting 同时给出 2026-09-07 有效期。",
    links: [
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee",
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply",
      "https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND54_SECTION,
    changeType: "round-54-current-official-discovery",
  },
  930901: {
    statusKey: "live",
    direction: "brand",
    company: "Equipo Singular",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 早班混合实习 / €271 税前/月",
    titleZh: "平面与视频青年人才实习",
    titleEs: "Jóvenes Talentos Diseño Gráfico y Vídeo",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "完整招聘正文为西语，未列等级；Barcelona 本地代理团队很可能以西语工作",
    experienceKey: "intern",
    experienceLabel: "实习 / 必须可签学校或大学 convenio",
    reason:
      "品牌、平面、视频与多渠道视觉职责真实且本地，但学校协议和 €271/月低补助是实质硬门槛，不能因方向贴合而高分。",
    next:
      "只有目前确实可签 convenio 且愿意接受低补助时才考虑；先邮件确认实习期限、每日工作语言和转正可能。",
    statusEvidence:
      "2026-08-13 复核：LinkedIn JobPosting 明确 2026-08-12 发布、2026-09-11 截止、INTERN、学校协议与 €271/月。",
    links: [
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
      "mailto:people@equiposingular.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND54_SECTION,
    changeType: "round-54-current-internship-discovery",
  },
  930902: {
    statusKey: "live",
    direction: "brand",
    company: "Ogilvy",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 官方职位 / 办公节奏待确认",
    titleZh: "高级艺术指导（医药整合 Campaign）",
    titleEs: "Senior Art Director",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "完整官方招聘正文为西语，未列正式等级；本地创意与客户环境很可能要求西语",
    experienceKey: "senior",
    experienceLabel: "高级 / 5 年以上 agency Art Director",
    reason:
      "Barcelona 官方岗位真实开放且方向相关，但 5 年以上艺术指导资历、医药监管环境和西语团队语境均远高于当前可行门槛。",
    next:
      "仅作为高级行业画像保留；除非资历和工作西语均满足，否则不投入申请时间。",
    statusEvidence:
      "2026-08-13 复核：Ogilvy 官方 Greenhouse API 4721164005 返回 Barcelona、完整职位正文和当前申请入口，更新时间 2026-08-05。",
    links: [
      "https://www.ogilvy.com/careers/4721164005?gh_jid=4721164005",
      "https://boards-api.greenhouse.io/v1/boards/ogilvy/jobs/4721164005",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND54_SECTION,
    changeType: "round-54-current-official-discovery",
  },
});

// A readable description is not enough to remain in the current queue. These
// three records now have direct closure evidence from the real submission
// path: LinkedIn stopped accepting applications, Greenhouse redirects the
// exact requisition to error=true, or SmartRecruiters marks the job expired.
const ROUND54_CLOSED = new Map([
  [
    105,
    {
      status:
        "Closed/history: the exact LinkedIn detail 4442768685 still preserves the Digital Marketing Designer description but explicitly says applications are no longer accepted.",
      analysis:
        "Preserve the Runroom student-support brief in history, but do not count or rank it as a current opportunity. Restore only after a new independent employer requisition appears.",
      reason:
        "The readable LinkedIn description is historical evidence only; the page explicitly says applications are no longer accepted.",
      next: "历史保留；等待 Runroom 或其招聘伙伴发布新的独立职位编号。",
    },
  ],
  [
    960,
    {
      status:
        "Closed/history: the exact DDB Spain Greenhouse requisition 5229098008 now redirects to the employer job board with error=true and no Art Director Junior application form.",
      analysis:
        "Preserve the junior art-direction brief in history. A generic employer board is not an open vacancy; restore only if DDB publishes a new exact requisition.",
      reason:
        "The exact Greenhouse job ID has disappeared and redirects to the generic DDB Spain board with error=true.",
      next: "历史保留；仅在 DDB Spain 出现新的 Barcelona 初级艺术指导独立申请页时恢复。",
    },
  ],
  [
    1108,
    {
      status:
        "Closed/history: Glovo's branded job page still renders the old description, but its Apply link redirects to SmartRecruiters /expired and the structured validThrough date is 2026-03-26.",
      analysis:
        "Preserve the Brand Design motion brief in history, but do not treat the stale Glovo shell as an open application. Restore only after a new SmartRecruiters publication or employer requisition appears.",
      reason:
        "The real SmartRecruiters submission route says This job ad has expired, overriding the stale employer-page Apply shell.",
      next: "历史保留；等待 Glovo 发布新的 Motion Designer 职位编号。",
    },
  ],
]);

for (const [id, correction] of ROUND54_CLOSED) {
  const item = allData.find((entry) => Number(entry.id) === id);
  if (item) {
    Object.assign(item, {
      section: ROUND54_SECTION,
      status: correction.status,
      analysis: correction.analysis,
      tier: "X",
    });
    item.searchText = [
      item.source,
      item.opportunity,
      item.fit,
      item.location,
      item.status,
      item.contact,
      item.analysis,
    ]
      .filter(Boolean)
      .join(" ");
  }
  if (CURATED[id]) {
    CURATED[id] = {
      ...CURATED[id],
      statusKey: "closed",
      latestAuditSection: ROUND54_SECTION,
      reason: correction.reason,
      next: correction.next,
      changeType: "round-54-original-application-closed",
    };
  }
}

// JUNGLE did not close this opportunity: the old generic-board link concealed
// a current renamed requisition. Point the card at the exact official job so
// the user lands on the real description and Inscríbete ahora control.
const round54Jungle = allData.find((item) => Number(item.id) === 886);
if (round54Jungle) {
  Object.assign(round54Jungle, {
    section: ROUND54_SECTION,
    opportunity: "Social Art Director (edición de imagen y video) | MeMe Barcelona",
    status:
      "Live/current after exact-route repair on 2026-08-13: JUNGLE's official Factorial board lists requisition 314341, Social Art Director (edición de imagen y video) | MeMe Barcelona, hybrid, indefinite and Inscríbete ahora. The brief accepts both junior and senior profiles and does not state a formal language level; its Spanish brief and local-team context remain a likely Spanish working-language risk.",
    contact:
      "Official detail/application: https://wejungle.factorial.es/job_posting/social-art-director-edicion-de-imagen-y-video-meme-barcelona-314341 ; employer LinkedIn detail: https://es.linkedin.com/jobs/view/video-social-editor-meme-barcelona-at-jungle-4441503440",
    links: [
      "https://wejungle.factorial.es/job_posting/social-art-director-edicion-de-imagen-y-video-meme-barcelona-314341",
      "https://es.linkedin.com/jobs/view/video-social-editor-meme-barcelona-at-jungle-4441503440",
    ],
  });
  round54Jungle.searchText = [
    round54Jungle.source,
    round54Jungle.opportunity,
    round54Jungle.fit,
    round54Jungle.location,
    round54Jungle.status,
    round54Jungle.contact,
    round54Jungle.analysis,
  ]
    .filter(Boolean)
    .join(" ");
}
if (CURATED[886]) {
  CURATED[886] = {
    ...CURATED[886],
    statusKey: "live",
    titleZh: "社交艺术指导（图像与视频编辑）",
    titleEs: "Social Art Director — edición de imagen y video",
    experienceKey: "open",
    experienceLabel: "初级或资深均可 / 未写固定年限",
    links: [
      "https://wejungle.factorial.es/job_posting/social-art-director-edicion-de-imagen-y-video-meme-barcelona-314341",
      "https://es.linkedin.com/jobs/view/video-social-editor-meme-barcelona-at-jungle-4441503440",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND54_SECTION,
    statusEvidence:
      "2026-08-13 复核：JUNGLE 官方 Factorial 职位板仍列出精确职位 314341、Barcelona hybrid、无固定期限合同和“Inscríbete ahora”；旧卡名已按当前官方名称修正。",
    reason:
      "当前岗位包含社媒图像/视频编辑、TikTok/Reels、基础动效、Logo 与品牌视觉延展，但公开正文为西语且没有中文路径，因此仅保留为低分西语备选。",
    next:
      "先用简短消息确认日常工作语言以及 junior 档位的薪资和职责；未确认可接受当前语言水平前，不投入定制申请材料。",
    changeType: "round-54-current-requisition-repair",
  };
}

const ROUND55_SECTION = "2026-08-13 Round 55 ranked 61-90 original-page and source-deduplication recheck";
const ROUND55_AUDITED_IDS = Object.freeze([
  175, 454, 1253, 317, 863, 930718, 930719, 908, 279, 930854,
  889, 535, 278, 1081, 860, 930869, 874, 1301, 1303, 1227,
  930879, 84, 868, 989, 854, 921, 1293, 1053, 1036, 930815,
]);

for (const id of ROUND55_AUDITED_IDS) {
  if (CURATED[id]) {
    CURATED[id] = {
      ...CURATED[id],
      latestAuditSection: ROUND55_SECTION,
      changeType: "round-55-ranked-61-90-original-page-recheck",
    };
  }
}

function updateRound55Item(id, patch) {
  const item = allData.find((entry) => Number(entry.id) === id);
  if (!item) return;
  Object.assign(item, { section: ROUND55_SECTION, ...patch });
  item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
    .filter(Boolean)
    .join(" ");
}

// A readable shell or a generic company feed is not proof that an exact
// vacancy remains open. Preserve both records in history after checking the
// employer sources, and keep the genuine current Equipo Singular job under
// its original employer ATS identity rather than counting a LinkedIn mirror.
const ROUND55_CLOSED = new Map([
  [
    317,
    {
      status:
        "Closed/history: AB-BIOTICS' official Factorial board was reopened on 2026-08-13 and lists only Auxiliar de mantenimiento, Operari de producción and Operario de almacén. The old Artwork Manager URL returns a generic company shell without the title, description or application control.",
      analysis:
        "Preserve the former packaging-artwork brief and exact 241907 URL in history. Do not restore it until AB-BIOTICS publishes a new independent Artwork Manager requisition.",
      reason:
        "官方 Factorial 当前职位板不再列出 Artwork Manager；旧 241907 只剩通用公司壳，没有岗位正文或申请按钮。",
      next: "历史保留；只在 AB-BIOTICS 发布新的独立 Artwork Manager 职位编号时恢复。",
      changeType: "round-55-official-board-removed",
    },
  ],
  [
    454,
    {
      status:
        "Closed/history pending a new exact call: the linked ADG-FAD brief is Campaña de los Premios ADG Laus 2026 and its body sets the portfolio deadline at 17 September 2025, with selection and delivery milestones in 2025-2026. The generic LinkedIn company page is not an individual current application route.",
      analysis:
        "Preserve the EUR8,000 design-commission brief as historical professional-opportunity evidence. A conflicting future date in indexed metadata does not override the dated 2025 body; restore only from a new exact ADG-FAD call with a coherent 2026 deadline.",
      reason:
        "原始委托正文写明 2025-09-17 截止，后续日程也从 2025 年开始；通用公司主页不能证明存在新的 Laus 2027 委托。",
      next: "历史保留；等待 ADG-FAD 发布年份与截止日一致的新独立征集页。",
      changeType: "round-55-stale-commission-body",
    },
  ],
  [
    930901,
    {
      status:
        "Closed/history duplicate: LinkedIn 4452389902 is the same Equipo Singular morning internship as canonical employer ATS record 930843. Company, duties, hybrid schedule, mandatory school convenio, EUR271 gross monthly grant and people@equiposingular.com all match.",
      analysis:
        "Keep this LinkedIn route as duplicate-source evidence, but count one vacancy only. The current canonical card is 930843 and now exposes both the official TalentClue application and the employer LinkedIn detail.",
      reason:
        "与官方 TalentClue 记录 930843 是同一个 Equipo Singular 实习：职责、时间、convenio、€271 补助和联系人完全一致。",
      next: "使用保留的 930843 官方卡片；该 LinkedIn 镜像不再单独计数。",
      changeType: "round-55-duplicate-source-merged",
    },
  ],
]);

for (const [id, correction] of ROUND55_CLOSED) {
  updateRound55Item(id, {
    status: correction.status,
    analysis: correction.analysis,
    tier: "X",
  });
  if (CURATED[id]) {
    CURATED[id] = {
      ...CURATED[id],
      statusKey: "closed",
      latestAuditSection: ROUND55_SECTION,
      reason: correction.reason,
      next: correction.next,
      changeType: correction.changeType,
    };
  }
}

updateRound55Item(1227, {
  opportunity: "Videógrafo especialista en Edición de Vídeos",
  status:
    "Live/current: Natulim's former Motion Graphics URL redirects to the same requisition 290359 under its current official title, Videógrafo especialista en Edición de Vídeos. The exact page shows Barcelona hybrid, indefinite full-time work and Inscríbete ahora; motion graphics remains part of the required production toolkit.",
  contact:
    "Current official detail/application: https://natulim.factorial.es/job_posting/videografo-especialista-en-edicion-de-videos-290359",
  links: ["https://natulim.factorial.es/job_posting/videografo-especialista-en-edicion-de-videos-290359"],
});

updateRound55Item(1293, {
  status:
    "Live/current after canonical-route refresh: Bonita Digital's former Join requisition redirects to current job 16563075, which shows the complete Barcelona hybrid freelance Social Media graphic/creative brief and Aplicar ahora.",
  contact:
    "Current employer-origin detail/application: https://join.com/companies/bonita/16563075-disenador-grafico-y-creativo-freelance-social-media ; employer site: https://www.bonita.digital/",
  links: [
    "https://join.com/companies/bonita/16563075-disenador-grafico-y-creativo-freelance-social-media",
    "https://www.bonita.digital/",
  ],
});

updateRound55Item(930842, {
  status:
    "Live/current: Voodoo's official Ashby requisition 7ceb7481 and application remain open. Current employer LinkedIn mirror 4452453717 independently shows publication on 2026-08-11, valid-through 2026-09-10, CET +/-3h remote, 4+ years, hands-on Unity UI motion and fluent English.",
  contact:
    "Official detail: https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/ ; official application: https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/application ; employer LinkedIn mirror: https://es.linkedin.com/jobs/view/senior-technical-ui-motion-designer-at-voodoo-4452453717",
  links: [
    "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/",
    "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/application",
    "https://es.linkedin.com/jobs/view/senior-technical-ui-motion-designer-at-voodoo-4452453717",
  ],
});

updateRound55Item(930843, {
  status:
    "Live/current canonical vacancy: Equipo Singular's official TalentClue application and employer LinkedIn detail describe the same Barcelona hybrid morning internship. Both require a school or university convenio and list a EUR271 gross monthly grant; the LinkedIn mirror 930901 is preserved only as duplicate history.",
  contact:
    "Official TalentClue detail/application: https://equiposingular.talentclue.com/node/127743936/66909823 ; employer LinkedIn detail: https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902 ; questions: people@equiposingular.com",
  analysis:
    "Keep one canonical card. The design scope is real, but the mandatory convenio, Spanish-local environment and EUR271/month grant make it a zero-score training route rather than a practical current job priority.",
  links: [
    "https://equiposingular.talentclue.com/node/127743936/66909823",
    "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
    "mailto:people@equiposingular.com",
  ],
});

Object.assign(CURATED, {
  175: {
    ...CURATED[175],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "西语或英语其中一门需流利，另一门至少中级（书面与口语）",
    statusEvidence: "2026-08-13 复核：Frekuent 官方 Factorial 296730 仍有 Apply now；正文明确一门西语/英语流利，另一门至少中级，并要求 4 年以上。",
  },
  930718: {
    ...CURATED[930718],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "职业级西语与英语均为明确要求",
    statusEvidence: "2026-08-13 复核：LinkedIn 4438065600 仍显示 Solicitar；正文明确 Español e inglés profesionales。",
  },
  889: {
    ...CURATED[889],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "高级西语与流利英语均为明确要求",
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 308047 仍有 Apply now；正文语言栏明确 Advanced Spanish 与 Fluent English。",
  },
  860: {
    ...CURATED[860],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "流利或母语西语，加中级英语",
    statusEvidence: "2026-08-13 复核：Hays 1125336 当前正文和申请入口仍在；要求 Español fluido o nativo 与 Inglés nivel intermedio。",
  },
  930869: {
    ...CURATED[930869],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "InfoJobs 结构化要求为高级英语；Barcelona 现场西语工作环境亦是现实门槛",
    statusEvidence: "2026-08-13 复核：InfoJobs 当前仍有 Inscribirme、无固定期限全职并标明 Inglés - Avanzado；不是无语言要求岗位。",
  },
  1301: {
    ...CURATED[1301],
    languageKey: "foreign",
    applicationMode: "foreign",
    language: "加泰语母语/双语、西语母语/双语，并要求职业级英语",
    statusEvidence: "2026-08-13 复核：原始 LinkedIn 4446592473 正文明确三重语言门槛；页面仍无独立申请表，因此保持先确认并按其他外语硬门槛计分。",
  },
  1303: {
    ...CURATED[1303],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "英语与西语口语、书面均需流利",
    statusEvidence: "2026-08-13 复核：CATORCE 官方 Greenhouse 5034293008 仍有完整申请表；正文明确 Fluency in English and Spanish (oral and written)。",
  },
  868: {
    ...CURATED[868],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "国际项目要求流利西语与英语",
    statusEvidence: "2026-08-13 复核：LinkedIn 4425688048 仍保留完整正文但无当前申请按钮；正文明确 Fluent in Spanish and English，继续保持先确认。",
  },
  1227: {
    ...CURATED[1227],
    titleZh: "视频剪辑专家（含 Motion Graphics）",
    titleEs: "Videógrafo especialista en Edición de Vídeos",
    links: ["https://natulim.factorial.es/job_posting/videografo-especialista-en-edicion-de-videos-290359"],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：旧 slug 自动迁移到同一 290359 当前官方页；页面显示 Barcelona hybrid、无固定期限全职与 Inscríbete ahora。",
  },
  1293: {
    ...CURATED[1293],
    links: [
      "https://join.com/companies/bonita/16563075-disenador-grafico-y-creativo-freelance-social-media",
      "https://www.bonita.digital/",
    ],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：旧 Join 编号自动跳转到当前 16563075，完整职位与 Aplicar ahora 均存在。",
  },
  930842: {
    ...CURATED[930842],
    languageKey: "light",
    applicationMode: "english",
    language: "明确要求流利英语；不要求西语",
    links: [
      "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/",
      "https://jobs.ashbyhq.com/voodoo/7ceb7481-56e0-4db7-94fb-494e132908c7/application",
      "https://es.linkedin.com/jobs/view/senior-technical-ui-motion-designer-at-voodoo-4452453717",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND55_SECTION,
    statusEvidence: "2026-08-13 复核：官方 Ashby 仍可申请；雇主 LinkedIn 4452453717 给出 2026-09-10 有效期、CET ±3h、4 年以上与 fluent English。",
    changeType: "round-55-current-mirror-merged",
  },
  930843: {
    ...CURATED[930843],
    statusKey: "live",
    titleZh: "平面与视频青年人才实习",
    titleEs: "Jóvenes Talentos Diseño Gráfico y Vídeo",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "intern",
    experienceLabel: "实习 / 必须可签学校或大学 convenio / €271 税前每月",
    reason: "官方 TalentClue 与雇主 LinkedIn 是同一个 Barcelona 上午实习，只保留一张卡；方向相关，但 convenio、低补助与西语环境使其为零分训练路线。",
    next: "只有可签 convenio 且接受 €271/月时再考虑；使用官方 TalentClue 入口申请。",
    links: [
      "https://equiposingular.talentclue.com/node/127743936/66909823",
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
      "mailto:people@equiposingular.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND55_SECTION,
    statusEvidence: "2026-08-13 复核合并：TalentClue 与 LinkedIn 4452389902 的职责、9–14 时段、convenio、€271/月和联系人完全相同。",
    // `refresh` gives the live employer ATS record precedence over the newer
    // LinkedIn duplicate when the complete source ledger is deduplicated.
    changeType: "refresh",
  },
});

const ROUND56_SECTION = "2026-08-13 Round 56 ranked 91-120 original-page, language-gate and duplicate recheck";
const ROUND56_AUDITED_IDS = Object.freeze([
  1002, 985, 178, 930900, 977, 1021, 990001, 990, 930818, 37, 12,
  1299, 1255, 958, 1257, 1258, 1026, 1061, 930865, 930829, 382,
  1237, 930812, 1287, 930637, 238, 930843, 305, 27, 930708, 922,
]);

for (const id of ROUND56_AUDITED_IDS) {
  if (CURATED[id]) {
    CURATED[id] = {
      ...CURATED[id],
      latestAuditSection: ROUND56_SECTION,
      changeType: "round-56-ranked-91-120-original-page-recheck",
    };
  }
}

function updateRound56Item(id, patch) {
  const item = allData.find((entry) => Number(entry.id) === id);
  if (!item) return;
  Object.assign(item, { section: ROUND56_SECTION, ...patch });
  item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
    .filter(Boolean)
    .join(" ");
}

// Two tracker rows pointed to the exact same Bending Spoons requisition.
// Preserve the older audit row as duplicate history and keep the newer row as
// the sole current card exposing the official detail, application and employer
// LinkedIn evidence.
updateRound56Item(178, {
  status:
    "Closed/history duplicate: this row and current canonical record 930900 resolve to Bending Spoons requisition 69d588c142e4c7b7a3dd14ee. The title, scope, locations, proficient-English requirement, application form and first-months-in-Milan condition are identical.",
  analysis:
    "Preserve this older row as duplicate-source history only. Use current card 930900 for the official detail, application and LinkedIn employer evidence; do not count or rank this as a second vacancy.",
  tier: "X",
});

updateRound56Item(930900, {
  status:
    "Live/current canonical vacancy: the official Bending Spoons detail and application for requisition 69d588c142e4c7b7a3dd14ee were reopened on 2026-08-13 and still expose Media Designer and Apply. Employer LinkedIn 4450907880 is the same vacancy and gives a 2026-09-07 valid-through date.",
  contact:
    "Official detail: https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee ; official application: https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply ; employer LinkedIn: https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
  analysis:
    "Keep one canonical card. The visual scope is relevant, but proficient English, several hours of tests, uncertain Spain eligibility and spending most days in Milan during the first months make it an English-first remote backup, not a Barcelona priority.",
  links: [
    "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee",
    "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply",
    "https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
  ],
});

Object.assign(CURATED, {
  178: {
    ...CURATED[178],
    statusKey: "closed",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "open",
    experienceLabel: "未写固定年限 / 以能力测试为主",
    links: [
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee",
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply",
      "https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
    ],
    preferCuratedLinks: true,
    reason: "与 930900 是同一个 Bending Spoons requisition，不再作为第二个当前机会计数。",
    next: "只使用当前规范卡 930900；本条仅保留为重复来源历史。",
    statusEvidence: "2026-08-13 复核合并：官方编号、职位名、职责、地点、语言要求及申请表完全相同。",
    latestAuditSection: ROUND56_SECTION,
    changeType: "round-56-duplicate-source-merged",
  },
  930900: {
    ...CURATED[930900],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "open",
    experienceLabel: "未写固定年限 / 以能力测试为主",
    links: [
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee",
      "https://jobs.bendingspoons.com/positions/69d588c142e4c7b7a3dd14ee/apply",
      "https://es.linkedin.com/jobs/view/media-designer-at-bending-spoons-4450907880",
    ],
    preferCuratedLinks: true,
    statusEvidence: "2026-08-13 复核：官方详情与申请表仍开放；LinkedIn 4450907880 是同一职位并标注 2026-09-07 有效期。",
    latestAuditSection: ROUND56_SECTION,
    changeType: "refresh",
  },
  1002: {
    ...CURATED[1002],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "需要 performance motion 经验，但未写固定年限",
    statusEvidence: "2026-08-13 复核：官方 Ashby 当前可申请，Remote International，偏好欧洲时区；未写语言等级或固定年限。",
  },
  985: {
    ...CURATED[985],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上 / freelance",
    statusEvidence: "2026-08-13 复核：官方 Visual Designer 页面保留 EU timezones remote、freelance、3+ 年及申请表；未列语言条款。",
  },
  977: {
    ...CURATED[977],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    statusEvidence: "2026-08-13 复核：官方 Ashby 当前可申请，Europe remote，明确要求 3–5 年及 fluent English。",
  },
  1021: {
    ...CURATED[1021],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–5 年 performance creative",
    statusEvidence: "2026-08-13 复核：官方 Ashby 当前可申请，UK/EU remote，要求约 2–5 年；未单列语言等级。",
  },
  990001: {
    ...CURATED[990001],
    statusKey: "live",
    languageKey: "spanish",
    applicationMode: "spanish",
    statusEvidence: "2026-08-13 复核：LinkedIn 雇主详情仍可申请并标注 2026-08-27 有效期；native/advanced Castilian 是明确硬门槛。",
  },
  990: {
    ...CURATED[990],
    statusKey: "verify",
    languageKey: "light",
    applicationMode: "unknown",
    statusEvidence: "2026-08-13 复核：官方独立详情触发安全检查，无法重新读取完整正文；保留 Spain-remote 线索并继续先确认。",
  },
  930818: {
    ...CURATED[930818],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "intern",
    experienceLabel: "实习 / 在读或已获相关学位",
    statusEvidence: "2026-08-13 复核：Infor 官方职位当前可申请，Barcelona hybrid 全职实习，并明确要求 good command of English。",
  },
  37: {
    ...CURATED[37],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "intern",
    experienceLabel: "实习 / 学生或应届生",
    statusEvidence: "2026-08-13 复核：ALEA 官方 Teamtailor 仍有 Apply；学生/应届和作品集为条件，语言等级未明写。",
  },
  12: {
    ...CURATED[12],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "unknown",
    experienceLabel: "未写固定年限",
    statusEvidence: "2026-08-13 复核：turbopuffer 当前申请页仍开放；未写语言等级或固定年限，按国际远程团队记英语高概率。",
  },
  1299: {
    ...CURATED[1299],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "intern",
    experienceLabel: "12 个月实习 / 必须在读并可签全程大学协议",
    statusEvidence: "2026-08-13 复核：Agilent 官方 Workday 当前可申请；fluent English、在读身份和全程 university agreement 均为硬条件。",
  },
  1255: {
    ...CURATED[1255],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "intern",
    experienceLabel: "实习 / 合同措辞冲突需先确认",
    statusEvidence: "2026-08-13 复核：Gameloft 官方申请表仍可提交；Graphic Design Intern 与 permanent 字段冲突，合同和语言需先问清。",
  },
  958: {
    ...CURATED[958],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "intern",
    experienceLabel: "实习 / 必须可签大学协议",
    statusEvidence: "2026-08-13 复核：Remedy Entertainment 官方 Greenhouse 申请仍开放；advanced English 与 university internship agreement 明确。",
  },
  1257: {
    ...CURATED[1257],
    statusKey: "live",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "open",
    experienceLabel: "未要求工作经验",
    statusEvidence: "2026-08-13 复核：JOB TODAY 原始详情仍显示全职、无需经验及 2026-09-05 有效期；本地西语环境很可能。",
  },
  1258: {
    ...CURATED[1258],
    statusKey: "live",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    statusEvidence: "2026-08-13 复核：JOB TODAY 原始详情仍可读且为 Barcelona 全职；正文未写语言等级，按本地西语环境处理。",
  },
  1026: {
    ...CURATED[1026],
    statusKey: "live",
    languageKey: "spanish",
    applicationMode: "spanish",
    statusEvidence: "2026-08-13 复核：Labhouse 官方 Ashby 当前可申请，并明确要求 good spoken and written English and Spanish。",
  },
  1061: {
    ...CURATED[1061],
    statusKey: "live",
    languageKey: "spanish",
    applicationMode: "spanish",
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 当前可申请；English mandatory 与 Spanish mandatory 均为明确硬门槛。",
  },
  930865: {
    ...CURATED[930865],
    statusKey: "verify",
    languageKey: "light",
    applicationMode: "unknown",
    opaqueEmployer: true,
    statusEvidence: "2026-08-13 复核：Jobgether/LinkedIn 详情仍暴露远程 UI/visual brief，但实际客户未公开；必须先确认雇主和 Spain 合同。",
  },
  930829: {
    ...CURATED[930829],
    statusKey: "live",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "intern",
    experienceLabel: "实习 / trainee",
    statusEvidence: "2026-08-13 复核：Raventós Codorníu 雇主详情仍可申请并标注 2026-08-19 有效期；未写语言等级，按本地西语实习环境处理。",
  },
  382: {
    ...CURATED[382],
    statusKey: "live",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "intern",
    experienceLabel: "6 个月实习 / 需学生或大学协议",
    statusEvidence: "2026-08-13 复核：精确 FashionJobs 详情本轮受 Cloudflare 限制；最近完整正文仍为 6 个月、SMI 补助和 convenio，未见关闭证据。",
  },
  1237: {
    ...CURATED[1237],
    statusKey: "verify",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    statusEvidence: "2026-08-13 复核：Indeed 精确详情受安全检查限制，LinkedIn 镜像已过期；保留邮箱确认路线，不标成已验证开放。",
  },
  930812: {
    ...CURATED[930812],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "senior",
    experienceLabel: "资深 / 约 7 年",
    statusEvidence: "2026-08-13 复核：Skyscanner 当前雇主详情与官方 requisition 仍存在；约 7 年经验，正文未列语言等级，按国际英语团队处理。",
  },
  1287: {
    ...CURATED[1287],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "unknown",
    experienceKey: "intern",
    experienceLabel: "实习 / €800–1,000",
    statusEvidence: "2026-08-13 复核：Welcome to the Jungle 明确显示 Open for applications；Barcelona 实习、€800–1,000，语言未明写。",
  },
  930637: {
    ...CURATED[930637],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 与雇主 LinkedIn 仍有当前 Senior Packaging/POS 职位；fluent English 明确。",
  },
  238: {
    ...CURATED[238],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / 4 年以上",
    statusEvidence: "2026-08-13 复核：Publicis 官方 requisition 165712 当前可申请且标注 2027-07-10 有效期；4+ 年与 advanced English 明确。",
  },
  930843: {
    ...CURATED[930843],
    statusKey: "live",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "intern",
    experienceLabel: "实习 / 必须可签 convenio / €271 税前每月",
    statusEvidence: "2026-08-13 复核：TalentClue 与 LinkedIn 是同一当前实习；convenio 和 €271/月为明确硬门槛。",
    changeType: "refresh",
  },
  305: {
    ...CURATED[305],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    statusEvidence: "2026-08-13 复核：Hostinger 官方 Ashby 当前可申请、Spain remote；Senior 与 fluent English 明确。",
  },
  27: {
    ...CURATED[27],
    statusKey: "live",
    languageKey: "spanish",
    applicationMode: "spanish",
    experienceKey: "lead",
    experienceLabel: "负责人 / 5 年以上管理经验",
    statusEvidence: "2026-08-13 复核：TWOJEYS 官方 Personio 当前可申请；5+ 年品牌领导经验及高水平 Spanish/English 均明确。",
  },
  930708: {
    ...CURATED[930708],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6–10 年且需医疗领域经验",
    statusEvidence: "2026-08-13 复核：Dragons 官方 Factorial 当前可申请；6–10 年、医疗/制药背景和 fluent English 明确。",
  },
  922: {
    ...CURATED[922],
    statusKey: "live",
    languageKey: "light",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 3 年以上",
    statusEvidence: "2026-08-13 复核：Solidgate 官方职位当前可申请、Europe remote；3+ 年与 English B1+ 明确。",
  },
});

const ROUND57_SECTION = "2026-08-13 Round 57 highest-score unaudited original-page and profile-fit recheck";
const ROUND57_AUDITED_IDS = Object.freeze([
  778, 920, 24, 25, 930834, 930837, 1107, 1092, 372, 427,
  930847, 890, 1300, 930813, 930863, 930832, 930711, 930817,
  930899, 910, 604, 914, 352, 633, 930836, 94, 866, 884,
  930820, 207,
]);

const ROUND57_STATUS_EVIDENCE = new Map([
  [778, "2026-08-13 再次打开 ES02 184673：仍可读取 8 月 6 日 Barcelona 全职平面设计原帖、微信和电话；与西华 637173 为同一联系人和同一岗位，只计一张，主体和书面合同仍需先核实。"],
  [920, "2026-08-13 再次打开智联原始详情：品牌视觉兼职仍显示立即沟通，但地点字段为成都，未说明接受西班牙居民、境外签约或跨境付款，继续列为中文远程待确认。"],
  [24, "2026-08-13 重新读取 Casa Asia 索引与 HKU Europe 原始 PDF：Barcelona 直接邮箱仍存在，无截止日期或 ATS；中文、英语和西语均为明确要求。"],
  [25, "2026-08-13 重新读取 Tea Lab 原始 PDF：Barcelona、中文/西语、社媒视频与店务混合、灵活或兼职和直接邮箱均确认；无截止日期或 ATS，继续先问是否仍招。"],
  [930834, "2026-08-13 重新打开 Linear 官方 Ashby：Production Designer、Europe remote、全职、约 2 年及申请入口仍完整；正文未写语言等级。"],
  [930837, "2026-08-13 重新打开 Velvet Caviar 原始详情：Spain 100% remote、全职、€30k–40k、2+ 年和申请入口仍在；正文未写语言等级。"],
  [1107, "2026-08-13 重新打开 THRU 官方 jobs 页：Graphic Designer with Motion Skills 正文、2 年及邮箱仍在，但同页同时写 NO JOB OPENINGS，不能升级为确认可投。"],
  [1092, "2026-08-13 重新打开 Codeway 官方 Ashby：Marketing Artist - Dramapops、Barcelona hybrid、2+ 年及完整申请入口仍在；正文未写语言等级。"],
  [372, "2026-08-13 重新打开 Molin AI 原始详情：Barcelona contractor、€30,000 + equity、Sin experiencia 和当前职责仍可读；正文未写语言等级。"],
  [427, "2026-08-13 复核 Revolut：本轮精确详情触发安全检查；保留同日较早的官方职位总表、Barcelona/Spain remote 和 Apply 证据，不把受阻页面误判为关闭。"],
  [930847, "2026-08-13 重新打开 Xapo 官方 Greenhouse：全球远程、12 个月 graduate programme、0–1 年和完整申请表仍在；正文未写语言等级。"],
  [890, "2026-08-13 重新打开 Dragons 官方 Factorial：Barcelona 永久全职混合办公、3–5 年、fluent English 和 Apply 均确认。"],
  [1300, "2026-08-13 重新打开 INFiLED 原始 LinkedIn：Barcelona hybrid、全职、当前申请入口、品牌/市场视觉职责、mid-level or senior 与 Fluent in English 均可从完整正文读取。"],
  [930813, "2026-08-13 重新打开 Dragons 官方 Factorial：Barcelona 永久全职、1–2 年、品牌规范延展和 Apply 均在；English 明列，Spanish 仅 preferably。"],
  [930863, "2026-08-13 重新打开 THE/STUDIO 官方 Teamtailor：全球 100% remote、全职独立承包、1–3 年或强作品集、书面英语和 Apply 均确认。"],
  [930832, "2026-08-13 重新打开 Exoticca 原始详情：Barcelona onsite、永久全职、渠道营销/联合品牌职责、fluent English 和申请入口均在；正文只写 proven experience，没有具体年限。"],
  [930711, "2026-08-13 重新打开 JUNGLE/MeMe 原始 JobPosting：Barcelona 永久全职、至少 1 年、社交创意职责和申请入口仍在；正文没有英语条款，完整工作说明为西语，法语仅加分。"],
  [930817, "2026-08-13 重新打开 Eat Nudes 原始详情：Barcelona、包装/菜单/标识/标签、Illustrator、Sin experiencia、项目合同和作品集邮箱仍在；英文正文没有列工作语言或等级。"],
  [930899, "2026-08-13 重新打开 CRAZE 原始详情：Sabadell 全职、2–3 年、编辑/版式/品牌/包装职责、spoken and written English mandatory 和申请控制仍在。"],
  [910, "2026-08-13 重新打开 LABHOUSE 官方 Ashby：Spain remote、全职、2+ 年、Fluent in English（Spanish only a plus）和申请入口仍在。"],
  [604, "2026-08-13 重新打开 Canonical 官方 Greenhouse：EMEA home-based、品牌指南/UI 系统/数字产品职责、Professional written and spoken English 和完整申请表仍在；只要求有设计经历，未写固定年限。"],
  [914, "2026-08-13 重新打开 Trivelta 官方 Greenhouse：正文为 Barcelona hybrid，元数据写 remote；1–3 年、Strong working English、三品牌多渠道职责和完整申请表均确认。"],
  [352, "2026-08-13 重新打开 Blank Studio 官方详情：Barcelona、full-time、remote-friendly、初级 3D/包装/品牌世界职责和申请邮箱仍在；正文没有列工作语言或等级。"],
  [633, "2026-08-13 重新打开 Puig 官方职位：Barcelona 一年 graduate programme、360 品牌形象职责和 Apply 仍在；Fluent in English and Spanish 为明确双语硬条件。"],
  [930836, "2026-08-13 重新打开 CrowdStrike 官方 Workday：Spain - Barcelona、Remote、全职、2026-08-06 发布、2+ 年、Proficiency in English 和 Apply 均确认。"],
  [94, "2026-08-13 重新打开 Savills 官方 Teamtailor：Barcelona hybrid、品牌/编辑/导视职责、Buen nivel de inglés 和申请入口仍在；只写需有 Brand Designer 经历，没有具体年限。"],
  [866, "2026-08-13 重新打开 devicenow 官方 job 19847：Barcelona hybrid、永久全职、品牌视频/动态职责、Excellent communication skills in English 和申请入口均在；未写固定经验年限。"],
  [884, "2026-08-13 重新打开 Dragons 官方 Factorial：Barcelona 永久全职混合办公、Mid Graphic Designer、医疗/健康视觉职责、fluent English 和 Apply 均确认。"],
  [930820, "2026-08-13 重新打开 Siemens 官方职位 516087：Barcelona、当前申请入口、2D/3D 图标与 UI 视觉系统职责、advanced English 和 €42,100–67,100 薪资仍在。"],
  [207, "2026-08-13 重新打开 Publicis 原始雇主详情：Barcelona 全职、全球品牌 campaign/数字制作、3–4+ 年、advanced English 面试考核和申请入口仍在。"],
]);

for (const id of ROUND57_AUDITED_IDS) {
  if (!CURATED[id]) continue;
  CURATED[id] = {
    ...CURATED[id],
    latestAuditSection: ROUND57_SECTION,
    statusEvidence: ROUND57_STATUS_EVIDENCE.get(id) || CURATED[id].statusEvidence,
    changeType: CURATED[id].changeType || "round-57-highest-score-unaudited-original-page-recheck",
  };
}

// Correct evidence, rather than the language used to render a page, controls
// the hard-language label. A probable team language remains a scoring risk,
// but is never presented as an explicit requirement without a written clause.
SCORE_LANGUAGE_RISK_OVERRIDES.set(930711, "spanishLikely");
SCORE_LANGUAGE_RISK_OVERRIDES.set(930817, "englishLikely");
SCORE_LANGUAGE_RISK_OVERRIDES.set(352, "englishLikely");

Object.assign(CURATED, {
  372: {
    ...CURATED[372],
    experienceKey: "open",
    experienceLabel: "明确标注 Sin experiencia / 未要求经验",
  },
  930832: {
    ...CURATED[930832],
    experienceKey: "unknown",
    experienceLabel: "要求有平面设计经历，但未写固定年限",
  },
  930711: {
    ...CURATED[930711],
    languageKey: "light",
    applicationMode: "unknown",
    language: "未写正式语言等级；完整本地社交创意正文为西语，法语仅加分，按西语工作环境高概率降权",
    scoringLanguageRisk: "spanishLikely",
    scoringLanguageRiskReason: "The exact brief contains no English requirement; it is a Spanish-language local social role, so Spanish is probable rather than formally proven.",
    reason: "Barcelona 正式全职且品牌社交内容相关，但不是平面/VI 核心岗；正文没有此前误写的双语英语要求，真实障碍是本地西语社交语境。",
  },
  930817: {
    ...CURATED[930817],
    languageKey: "light",
    applicationMode: "unknown",
    language: "英文正文未列正式工作语言或等级；按英语沟通环境高概率降权",
    scoringLanguageRisk: "englishLikely",
    scoringLanguageRiskReason: "The exact English brief lists no language requirement, but the publisher communication and application route make English probable.",
    experienceKey: "open",
    experienceLabel: "明确标注 Sin experiencia / 无固定年限",
  },
  604: {
    ...CURATED[604],
    experienceKey: "unknown",
    experienceLabel: "需有 agency/company/freelance 设计经历，但未写固定年限",
  },
  352: {
    ...CURATED[352],
    languageKey: "light",
    applicationMode: "unknown",
    language: "官方正文未列工作语言或等级；按国际工作室英语环境高概率降权",
    scoringLanguageRisk: "englishLikely",
    scoringLanguageRiskReason: "The official role text contains no formal language clause; English remains probable in the studio context.",
  },
  633: {
    ...CURATED[633],
    languageKey: "spanish",
    applicationMode: "spanish",
    language: "官方正文明确要求 Fluent in English and Spanish",
  },
  930836: {
    ...CURATED[930836],
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
  },
  94: {
    ...CURATED[94],
    experienceKey: "unknown",
    experienceLabel: "需有 Brand Designer 经历，但未写固定年限",
  },
  866: {
    ...CURATED[866],
    experienceKey: "unknown",
    experienceLabel: "需相关视频与 Motion 能力，但未写固定年限",
  },
});

const ROUND58_SECTION = "2026-08-13 Round 58 next-highest original-page, dual-language and current-source audit";
const ROUND58_AUDITED_IDS = Object.freeze([
  930823, 930874, 930840, 930882, 930825, 877, 78, 228, 446, 930866,
  930889, 930845, 930826, 930827, 425, 345, 4, 284, 55, 1038,
  930816, 396, 930819, 856, 930868, 930831, 930833, 930821, 930890, 2942,
]);

const ROUND58_STATUS_EVIDENCE = new Map([
  [930823, "2026-08-13 重新打开 Factorial 官方职位 316734：Barcelona 永久全职、€30k–35k、Apply 和 Fluent in English 均明确；要求 Paid Media/UA 背景但没有固定经验年限。"],
  [930874, "2026-08-13 重新读取 Ogilvy 官方 Greenhouse API 4712450005：Barcelona、全职、2–4 年、至少 2 年 agency、混合办公和完整申请均确认；正文没有英语等级，申请表只询问英语水平。"],
  [930840, "2026-08-13 重新打开 Zurich 官方职位 1368922057：Barcelona 全职、约 4 年、High level of English、社交创意策略职责和 Apply now 仍在。"],
  [930882, "2026-08-13 重新打开 Duna 官方 Ashby：Visual Designer、Remote、全职、3–6 年和完整申请仍在；正文没有正式语言条款，也没有明确 Spain 雇佣或承包资格。"],
  [930825, "2026-08-13 重新打开 Dragons 官方 Factorial 308034：Barcelona hybrid 永久全职、3–5 年、Fluent English、视频剪辑主职与 Apply 均确认。"],
  [877, "2026-08-13 重新打开 JOB TODAY 6g3oVr：Cerdanyola 全职早班、1 年以上、€12.78/小时、临时合同和 Apply still live；正文没有语言等级，完整工作说明为西语。"],
  [78, "2026-08-13 重新打开 Textura 官方 Digital Designer 页面：Barcelona 邮箱投递、品牌视觉/数字延展、3+ 年和 HTML 邮件要求仍在；没有语言、薪资或合同条款。"],
  [228, "2026-08-13 重新打开 Bending Spoons Graduate Media Designer 申请页：申请仍可填写并要求英文 CV；可选 Remote，但 Spain 资格和前期 Milan 节奏仍需确认。"],
  [446, "2026-08-13 重新打开 Refokus 官方 Brand Designer：Remote Worldwide、Full-Time、Logo/品牌指南/手册/数字品牌和 3+ 年仍在；正文未写语言等级。"],
  [930866, "2026-08-13 重新打开 Preply 官方 Ashby：Barcelona hybrid 全职、Brand 团队、2+ 年视频剪辑、Advanced English 与当前申请入口均确认；其他欧洲语言仅加分。"],
  [930889, "2026-08-13 重新打开 HEREU 原始 LinkedIn：Barcelona 现场全职、€30k–35k、2–3 年、Fluent English 和申请入口均在；岗位核心仍是社媒管理而非平面/VI。"],
  [930845, "2026-08-13 重新打开 Omnicom Health 官方 Greenhouse：Barcelona 每周 3 天到岗、freelance、2+ 年、working English、作品集和 PPT 样稿要求均确认。"],
  [930826, "2026-08-13 重新打开 Carati Studio 原始 LinkedIn：Barcelona/Sant Antoni 部分远程自由职业、时尚平面与印花职责仍在；正文明确 Spanish is not required，只是加分，未写英语等级。"],
  [930827, "2026-08-13 重新打开 Zurich 官方职位 1368923457：Barcelona 全职、约 3–4 年、High level of English、短视频创意执行和 Apply now 均确认。"],
  [425, "2026-08-13 再次请求 Revolut Digital Designer (Brand) 官方链接时触发 403 安全检查；没有关闭证据，继续保留此前精确职位与申请入口，但语言和 Spain 办公节奏仍需确认。"],
  [345, "2026-08-13 重新打开 Domingo Studio 官方团队页：Barcelona、Mid-Senior Graphic Design 与 Graphic Design Intern 两个投递入口、邮箱和作品集要求仍在；未写语言、薪资或正式岗年限。"],
  [4, "2026-08-13 重新打开 Lodgify 官方 Lever：Europe remote freelance Creative Designer、3+ 年、Strong written and spoken English、英文申请和当前 Apply 均确认。"],
  [284, "2026-08-13 重新打开 EuroLeague 官方 Personio：Barcelona 永久全职、3+ 年体育设计、Fluent English、合法西班牙工作身份与轮班/出差要求均确认。"],
  [55, "2026-08-13 重新打开 BCome 官方 careers：Barcelona Digital Designer、企业视觉/广告/演示/UX/UI、邮箱申请、半现场和灵活工时仍在；页面混合多职位，设计岗自身未写语言等级。"],
  [1038, "2026-08-13 重新打开 Lodgify 官方 Lever：EMEA remote freelance Motion Designer、英文申请、品牌动效系统和 Apply 均确认；正文没有固定经验年限。"],
  [930816, "2026-08-13 重新打开 Brownie 原始 LinkedIn：Barcelona 现场全职、至少 2 年、Advanced English 和当前申请入口均在；正文为西语但未列正式西语等级。"],
  [396, "2026-08-13 重新打开 RV Group 原始 JOB TODAY：Barcelona 100% 现场全职、Apply、合法工作许可，以及 Castellano e inglés fluidos—ambos imprescindibles 均确认。"],
  [930819, "2026-08-13 重新打开 AC Marca 原始 LinkedIn：Hospitalet 一年临时项目、包装/标签/修图职责和申请仍在；English/Portuguese 仅为加分项，未列必需语言等级。"],
  [856, "2026-08-13 重新打开 Synergie 原始 LinkedIn JobPosting：Castellgalí 现场无固定期限全职、€23k、有效至 2026-08-20；明确要求良好西语、Catalan 基础和英语沟通能力。"],
  [930868, "2026-08-13 重新打开 Zabriskie 原始 InfoJobs：Barcelona 现场无固定期限全职、€20k–27k、2+ 年和 Inscribirme 均在；西语母语/双语、Catalan 与英语中级均明确。"],
  [930831, "2026-08-13 重新打开 INCAPTO 原始 LinkedIn：Barcelona 3+2 hybrid、2–4 年包装、作品集和申请仍在；Castellano e inglés fluidos oral y escrito 为明确双语门槛。"],
  [930833, "2026-08-13 重新打开 Wecolors 原始 LinkedIn：Vilassar、3–5 年、每周 1 天远程、自驾/附近居住、设计测试与中高英语均明确；正文和供应商工作为本地西语环境。"],
  [930821, "2026-08-13 重新打开 Hospitaliti 原始 LinkedIn：Barcelona 现场全职、标识/完稿/手册/供应商和工地跟进职责仍在；没有正式语言等级，完整职责为西语。"],
  [930890, "2026-08-13 重新打开 Double Tap 原始 LinkedIn：Barcelona 现场全职、Fluent English、Spanish 仅加分、社媒全流程和 careers 邮箱仍在；不是平面/VI 核心岗。"],
  [2942, "2026-08-13 重新打开 SLAPS 官方申请页：Barcelona Junior Graphic Designer 申请入口仍可启动；Full Time / Internship、语言、薪资和最终合同类型仍未分开说明。"],
]);

for (const id of ROUND58_AUDITED_IDS) {
  if (!CURATED[id]) continue;
  CURATED[id] = {
    ...CURATED[id],
    latestAuditSection: ROUND58_SECTION,
    statusEvidence: ROUND58_STATUS_EVIDENCE.get(id) || CURATED[id].statusEvidence,
    changeType: "round-58-next-highest-original-page-dual-language-recheck",
  };
}

Object.assign(CURATED, {
  930823: {
    ...CURATED[930823],
    experienceKey: "unknown",
    experienceLabel: "需 Paid Media / UA Motion 背景，但未写固定年限",
  },
  930874: {
    ...CURATED[930874],
    languageKey: "light",
    applicationMode: "englishLikely",
    language: "完整官方正文未列英语等级；申请表会询问英语水平，国际客户与英文工作环境概率高",
  },
  930882: {
    ...CURATED[930882],
    locationLabel: "Remote / Spain 雇佣或承包资格需确认",
    languageKey: "light",
    applicationMode: "englishLikely",
    language: "完整英文职位正文未列正式语言等级；英语工作环境概率高",
    reason: "视觉品牌延展方向很匹配，但官方只写 Remote，没有证明 Spain 可雇佣；3–6 年和英语工作环境也使它只能保留为低分待确认远程备选。",
  },
  930866: {
    ...CURATED[930866],
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上视频剪辑",
  },
  930827: {
    ...CURATED[930827],
    statusEvidence: ROUND58_STATUS_EVIDENCE.get(930827),
  },
  1038: {
    ...CURATED[1038],
    experienceKey: "unknown",
    experienceLabel: "需独立负责完整动效项目，但未写固定年限",
  },
  930816: {
    ...CURATED[930816],
    languageKey: "englishSpanishLikely",
    applicationMode: "englishSpanishLikely",
    language: "Advanced English 明确；职位正文与 Barcelona 本地团队为西语环境，但未列正式西语等级",
  },
  396: {
    ...CURATED[396],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "Castellano e inglés fluidos，正文明确写两者都必需",
  },
  930819: {
    ...CURATED[930819],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "英语/葡语仅加分；完整 Barcelona 本地工作正文为西语，但没有正式西语等级",
  },
  856: {
    ...CURATED[856],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "明确要求良好西语、Catalan 基础并能用英语沟通",
  },
  930868: {
    ...CURATED[930868],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "西语母语或双语、Catalan 中级与英语中级均为明列要求",
  },
  930831: {
    ...CURATED[930831],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "Castellano e inglés fluidos，口语和书面都明确要求",
  },
  930833: {
    ...CURATED[930833],
    languageKey: "englishSpanishLikely",
    applicationMode: "englishSpanishLikely",
    language: "中高英语明确；完整本地职位、供应商和印刷协作为西语环境，但未列正式西语等级",
  },
  930821: {
    ...CURATED[930821],
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "完整本地标识与供应商协作正文为西语，但没有正式语言等级",
  },
});

const round58EthosRecord = {
  id: 930903,
  section: ROUND58_SECTION,
  source: "Ethos / current LinkedIn employer details",
  opportunity: "Presentation Design Lead / Slide Deck Designer — AI model training",
  fit: "Remote presentation-system and executive-deck evaluation project for an AI lab",
  location: "Fully remote / Spain contractor eligibility and payment route not stated",
  status:
    "Live/current research-library backup: two employer details were opened on 2026-08-13 and show active applications, $80/hour, 5–20 hours/week, remote scheduling and valid-through dates in September 2026. They describe the same expert-network AI-lab project and are consolidated into one record.",
  contact:
    "https://es.linkedin.com/jobs/view/expert-opportunity-presentation-design-lead-%2480-hr-up-to-%241-600-week-at-ethos-4453389730 ; https://es.linkedin.com/jobs/view/expert-opportunity-slide-deck-designer-%2480-hr-up-to-%241-600-week-at-ethos-4442703305",
  analysis:
    "Keep in the complete library, not the user's current main board. It requires 5+ years of professional executive-deck work, ideally consulting or banking, excellent written communication and independent freelance delivery; it is AI-training work rather than brand/VI ownership, and Spain contracting is unconfirmed.",
  score: 42,
  tier: "D",
  locationTag: "Remote / eligibility unconfirmed",
  typeTag: "Presentation design / AI training / freelance",
  sourceGroup: "linkedin",
  postedAt: "2026-08-12",
  freshnessTag: "week",
  freshnessAgeDays: 1,
  links: [
    "https://es.linkedin.com/jobs/view/expert-opportunity-presentation-design-lead-%2480-hr-up-to-%241-600-week-at-ethos-4453389730",
    "https://es.linkedin.com/jobs/view/expert-opportunity-slide-deck-designer-%2480-hr-up-to-%241-600-week-at-ethos-4442703305",
  ],
  searchText:
    "Ethos Presentation Design Lead Slide Deck Designer AI model training current remote freelance $80 hour 5-20 hours week 5+ years consulting banking executive decks English likely Spain eligibility unconfirmed 2026-09",
};
if (!allData.some((item) => Number(item.id) === round58EthosRecord.id)) allData.push(round58EthosRecord);

CURATED[930903] = {
  statusKey: "live",
  direction: "digital",
  company: "Ethos / AI lab project",
  locationKey: "remote",
  locationLabel: "Fully remote / 未明确 Spain 承包与付款资格",
  titleZh: "演示文稿设计负责人（AI 训练项目）",
  titleEs: "Presentation Design Lead / Slide Deck Designer",
  languageKey: "light",
  applicationMode: "englishLikely",
  language: "英文项目说明要求优秀书面沟通，但没有单独列语言等级",
  experienceKey: "senior",
  experienceLabel: "高级 / 5 年以上专业 Deck，咨询或投行背景优先",
  reason: "时薪和远程形式有吸引力，但这是高级演示文稿与 AI 训练承包项目，不是品牌/VI 岗；资历、英文写作和 Spain 承包资格均不适合当前优先投入。",
  next: "只保留在完整资料库。除非已有 5+ 年高管 Deck 作品、可用英语处理故事线且确认 Spain 可签约，否则不申请。",
  statusEvidence: round58EthosRecord.status,
  links: round58EthosRecord.links,
  preferCuratedLinks: true,
  latestAuditSection: ROUND58_SECTION,
  changeType: "round-58-current-duplicate-consolidated-research-backup",
};

const ROUND59_SECTION = "2026-08-13 Round 59 remaining current-card original-page and profile-fit audit";
const ROUND59_AUDITED_IDS = Object.freeze([
  313, 920001, 928, 188, 930712, 170, 224, 1240, 930838, 930880,
  930844, 172, 864, 88, 930824, 930891, 930878, 930881, 162, 876,
  930876, 930814, 930841, 867, 930886, 930887, 859, 1029, 296, 601,
]);

const ROUND59_STATUS_EVIDENCE = new Map([
  [313, "2026-08-13 reopened LinkedIn employer detail 4437788118: the Barcelona full-time application remains live; the exact brief requires native Spanish, English B2 and 5+ years."],
  [920001, "2026-08-13 reopened PepsiCo official requisition 464555: Apply Now, Cornella/Barcelona, full-time, multidisciplinary brand and packaging scope, 4+ years and 15% travel remain current; no formal language level is stated."],
  [928, "2026-08-13 reopened Circle official Greenhouse 5368490008: the full remote application remains live; the exact brief requires 5+ years and English CEFR C2, while Spain contracting still needs confirmation."],
  [188, "2026-08-13 reopened eseOese official ATS: Barcelona onsite, 4+ years, branding/campaign scope and medium-high English remain current; the complete local brief and operation are Spanish-first without a published Spanish level."],
  [930712, "2026-08-13 VML exact page returned an anti-bot 403 rather than a closure. Retain the same-day official requisition evidence for Barcelona, 5-6 years, medium-high English and Catalan, but do not present the blocked response as a fresh full-body verification."],
  [170, "2026-08-13 reopened Dragons official Senior UX/UI and Web Designer page: Apply now, Barcelona hybrid, full-time, 5+ years, English mandatory and Spanish preferred remain visible."],
  [224, "2026-08-13 King Workday shell still returns the exact R027791 route; its CXS endpoint denied automated reading rather than reporting closure. Retain the previously read official Barcelona-option, shipped-game and team-lead evidence."],
  [1240, "2026-08-13 reopened LinkedIn JobPosting 4444421303: MANGO Palau-solita full-time, 5+ years, retail/3D production, high English and high Spanish and the current application route are explicit."],
  [930838, "2026-08-13 reopened Dragons official Factorial 308053: Barcelona hybrid permanent full-time, client communication in English, healthcare experience and the Apply route remain visible."],
  [930880, "2026-08-13 reopened Dragons official Factorial 302205: Barcelona hybrid permanent full-time, 5-7+ years, English mandatory and Spanish preferred remain explicit."],
  [930844, "2026-08-13 reopened Synthesia official Ashby 75c90455: listed Europe remote full-time since 2026-03-26, 6+ years, experiential production and international travel remain explicit; no formal language level is published."],
  [172, "2026-08-13 read Ogilvy official Greenhouse API 4708130005 in full: the Barcelona hybrid graduate internship remains live; a degree completed in Spain and Spanish are mandatory, high English is only valued, and no prior work experience is required."],
  [864, "2026-08-13 read Ametller official Workday CXS for JR107430: canApply=true, posted=true, full-time indefinite hybrid, 5+ years, Olèrdola, licence and own vehicle are explicit; the whole operating brief is Catalan but no language level is listed."],
  [88, "2026-08-13 reopened Dragons official Factorial 301871: Apply now, Barcelona hybrid permanent full-time, 7-8 years, Spanish mandatory and English mandatory remain explicit."],
  [930824, "2026-08-13 reopened Dragons official Factorial 301879: Apply now, Barcelona hybrid permanent full-time, 4-8+ years, Spanish mandatory and English mandatory remain explicit."],
  [930891, "2026-08-13 reopened BJAK official Ashby aca9464d: listed Spain remote full-time since 2026-08-04, 5-8 years and strong English required remain explicit, with an assessment in the interview process."],
  [930878, "2026-08-13 reopened LinkedIn employer detail 4449819011: Barcelona full-time, 5+ years, fluent Spanish and the new independent application route remain current."],
  [930881, "2026-08-13 reopened Dragons official Factorial 308042: Barcelona hybrid permanent full-time, 7+ years, senior video/motion scope and the current Apply route remain visible; fluent English remains the recorded hard gate."],
  [162, "2026-08-13 HP Workday shell still returns exact requisition 3165191 but the CXS endpoint denied automated reading rather than reporting closure. Retain the previously read Sant Cugat full-time and 4-7 year marketing-communications evidence; no formal language level was published."],
  [876, "2026-08-13 reopened LinkedIn employer detail 4442212716: Barcelona 2-office/3-remote full-time, 4-5 years and motion/video/AI scope remain current; the complete local brief is Spanish but no formal language level is stated."],
  [930876, "2026-08-13 reopened IEBS official Factorial 303264: Viladecans hybrid part-time training placement, current application, student/convenio requirement and Spanish operating brief remain visible; compensation is not published."],
  [930814, "2026-08-13 reopened LinkedIn employer detail 4445748221: Barcelona hybrid, corporate identity ownership and the current application remain explicit. Excellent written and spoken English is required; German is only an advantage."],
  [930841, "2026-08-13 reopened LinkedIn employer detail 4452431400: Barcelona onsite head-level visual merchandising, 10-15+ years and 5+ years of leadership remain current; no formal language level is published."],
  [867, "2026-08-13 reopened LinkedIn JobPosting 4440457390: Sant Cugat hybrid, temporary employment, 2026-07-29 publication and 2026-09-19 validity remain current; the full local brief is Spanish without a formal language level."],
  [930886, "2026-08-13 reopened LinkedIn JobPosting 4449830488: Barcelona hybrid internship, 2026-08-11 publication, current application, enrolment/convenio gate and fluent or native English are explicit; only about 30% of the role is design."],
  [930887, "2026-08-13 reopened LinkedIn JobPosting 4452412973: Barcelona full-time, 5+ years, specialist spatial/CAD/3D scope and fluent Spanish remain explicit; the stale January 2026 start sentence still requires recruiter confirmation."],
  [859, "2026-08-13 reopened Stripe official requisition 7769564: Barcelona hybrid or Spain remote, full-time, 5+ years, identity motion systems, salary range and Apply remain current; no formal language level is published."],
  [1029, "2026-08-13 reopened Together official Senior Brand Designer page: Remote UK & Europe, £40k-65k, 8+ years and the application remain live; the page dates to 2025-09-24 and Spain employment terms and formal language level are not stated."],
  [296, "2026-08-13 reopened Bakken & Bæck official Senior Brand Designer page: Barcelona office is eligible, remote applicants are excluded, 5+ years, identity systems and relocation support remain current; no formal English or Spanish level is published."],
  [601, "2026-08-13 reopened SIERRA official jobs page: it still states one open position, Art Director, Barcelona office, full-time hybrid and a direct application route. The exact brief publishes neither a formal language level nor a fixed experience-year threshold."],
]);

for (const id of ROUND59_AUDITED_IDS) {
  if (!CURATED[id]) continue;
  CURATED[id] = {
    ...CURATED[id],
    latestAuditSection: ROUND59_SECTION,
    statusEvidence: ROUND59_STATUS_EVIDENCE.get(id) || CURATED[id].statusEvidence,
    changeType: "round-59-remaining-current-card-original-page-profile-fit-audit",
  };
}

Object.assign(CURATED, {
  313: {
    ...CURATED[313],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "Native Spanish and English B2 are explicit hard requirements.",
  },
  188: {
    ...CURATED[188],
    languageKey: "englishSpanishLikely",
    applicationMode: "englishSpanishLikely",
    language: "Medium-high English is explicit; the complete Barcelona fashion-team brief is Spanish, although no Spanish level is stated.",
  },
  1240: {
    ...CURATED[1240],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "High English and high Spanish are both explicit requirements.",
  },
  864: {
    ...CURATED[864],
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "The complete official packaging and supplier-operation brief is Catalan; no formal language level is stated.",
    analysis: "A real current packaging/brand-governance role, confirmed by Workday canApply=true. Keep it as a low-feasibility local backup because 5+ years, Catalan operations, Olèrdola access, a driving licence and an own vehicle are material gates.",
  },
  88: {
    ...CURATED[88],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "Spanish and English are both mandatory.",
  },
  930824: {
    ...CURATED[930824],
    languageKey: "englishSpanish",
    applicationMode: "englishSpanish",
    language: "Spanish and English are both mandatory.",
  },
  162: {
    ...CURATED[162],
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "The official brief did not publish a formal language level; English remains probable in the international marketing-communications workflow.",
  },
  296: {
    ...CURATED[296],
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "The English official brief requires confident client presentation but does not publish a formal English or Spanish level.",
  },
  601: {
    ...CURATED[601],
    experienceKey: "unknown",
    experienceLabel: "Art Director scope / no fixed experience-year threshold published",
    languageKey: "unknown",
    applicationMode: "unknown",
    language: "The English official brief publishes no formal working-language level; English remains probable.",
    analysis: "A current Barcelona art-direction and visual-language opportunity with a direct email route. Its brand fit is strong, but working language, seniority expectations, salary and work authorisation must be confirmed before tailoring a full application.",
  },
});

// Preserve the distinction between what the vacancy explicitly says and the
// likely working-language risk used for this user's score.
for (const [id, risk] of [[162, "englishLikely"], [296, "englishLikely"], [601, "englishLikely"], [864, "foreign"]]) {
  SCORE_LANGUAGE_RISK_OVERRIDES.set(id, risk);
  if (CURATED[id]) CURATED[id].scoringLanguageRisk = risk;
}

const ROUND59_DATE_CORRECTIONS = new Map([
  [313, ["2026-07-07", "quarter", 37]],
  [920001, ["2026-07-20", "month", 24]],
  [1240, ["2026-07-23", "month", 21]],
  [930844, ["2026-03-26", "older", 140]],
  [172, ["2026-06-22", "quarter", 52]],
  [864, ["2026-07-24", "month", 20]],
  [930891, ["2026-08-04", "month", 9]],
  [867, ["2026-07-29", "month", 15]],
  [930886, ["2026-08-11", "week", 2]],
  [930887, ["2026-08-11", "week", 2]],
  [859, ["2026-07-22", "month", 22]],
  [1029, ["2025-09-24", "old", 323]],
]);
for (const item of allData) {
  const correction = ROUND59_DATE_CORRECTIONS.get(Number(item.id));
  if (!correction) continue;
  [item.postedAt, item.freshnessTag, item.freshnessAgeDays] = correction;
}

const ROUND61_SECTION = "2026-08-13 Round 61 full-board user-fit rescore and stale-search audit";

// Round 61 recalculates every visible card with the same user-specific score.
// Search-result timestamps never override the exact original detail or the
// employer-owned ATS, and Chinese/local adjacency does not erase role fit.
const round61SourceCorrections = [
  {
    id: 1007,
    source: "ORBIDI / closed official Teamtailor ATS",
    status: "Closed/history: the exact ORBIDI Teamtailor requisition 6423148 was requested directly again on 2026-08-13 and returned HTTP 410 Gone. A search-engine rendering that still exposes an Apply label is stale and is not a current application route.",
    analysis: "Preserve the former Barcelona senior graphic and brand-visual brief as history only. Restore it only after ORBIDI publishes a new independent requisition that opens successfully on the employer ATS.",
    tier: "X",
  },
  {
    id: 153,
    source: "UNIQLO / Fast Retailing removed official Workday requisition",
    status: "Closed/history: the Fast Retailing Workday board was queried again on 2026-08-13 for exact requisition R00000004175039 and returned zero matching jobs. The detail shell is access-blocked and an alternate locale route returns 404; stale search cards do not prove reopening.",
    analysis: "Keep the former in-store graphic-production scope as a portfolio reference, not as a current Barcelona application. Restore only if Fast Retailing publishes a new requisition ID on its official Workday board.",
    tier: "X",
  },
  {
    id: 1234,
    source: "LearnWise AI / closed original LinkedIn employer detail",
    status: "Closed/history: recent generic LinkedIn result pages and an aggregator resurfaced the title on 2026-08-13, but an exact seven-day LinkedIn search returned no LearnWise design vacancy. The preserved original employer detail 4446566881 still has the stronger stopped-accepting verdict and no new employer ATS route was found.",
    analysis: "Do not restore this attractive brand-system brief from a fresh-looking search index. Preserve it as history; a new exact LinkedIn job ID or employer-owned application page is required before it can return to the current board.",
    tier: "X",
  },
];

for (const correction of round61SourceCorrections) {
  const item = allData.find((record) => Number(record.id) === correction.id);
  if (!item) continue;
  Object.assign(item, correction, {
    section: ROUND61_SECTION,
    searchText: [correction.source, correction.status, correction.analysis].join(" "),
  });
}

const round61KrakenCurrent = allData.find((record) => Number(record.id) === 930860);
if (round61KrakenCurrent) {
  Object.assign(round61KrakenCurrent, {
    section: ROUND61_SECTION,
    source: "Kraken / current official Ashby job-board API",
    status: "Live/current: Kraken's official Ashby job-board API was queried on 2026-08-13 and returned 81 listed jobs. Exact requisition 8ed4c65b-aaac-40d0-9d41-423683b7a1bd is present, isListed=true, remote and has an active application URL; Spain appears explicitly among its secondary eligible locations. It was published on 2026-07-31.",
    analysis: "Restore the exact role to the current board because the employer-owned API is authoritative. Keep its personal-fit score very low: it requires 5+ years in brand design plus fintech or top-agency experience, and the global remote interview and collaboration path is English-heavy even though the public body does not publish a formal language level.",
    score: 94,
    tier: "B",
    postedAt: "2026-07-31",
    freshnessTag: "month",
    freshnessAgeDays: 13,
    searchText: "Kraken current official Ashby API Sr Brand Designer Krak 8ed4c65b Spain secondary eligible location remote full-time listed apply published 2026-07-31 5+ years brand identity art direction website CRM social app store events motion 3D illustration Figma automation AI English-likely senior low personal fit",
  });
}

const round61TeaLab = allData.find((record) => Number(record.id) === 25);
if (round61TeaLab) {
  round61TeaLab.analysis = "Keep as a 19.9-point Barcelona Chinese-Spanish fallback. The current Casa Asia index, original PDF and direct email make it a real lead, but it must stay below genuine brand/VI work because it combines social/video content with daily bubble-tea shop operations, an under-30 condition, a Spanish gate, flexible or part-time terms and negotiable pay. Send only a short availability check before preparing materials.";
}

Object.assign(CURATED, {
  55: {
    ...CURATED[55],
    statusEvidence: "2026-08-13 reread the BCome employer careers page. The Digital Designer brief remains visible, but the page combines several vacancies; native English and Spanish C1 belong to a separate sales role and are not evidence for the designer role. The designer's formal language requirement remains unstated, while an English-heavy international workflow remains probable for scoring.",
    languageKey: "unknown",
    applicationMode: "unknown",
    scoringLanguageRisk: "englishLikely",
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-company-page-language-clause-separation",
  },
  153: {
    ...CURATED[153],
    statusKey: "closed",
    titleZh: "店内平面设计师—官方 Workday 已无此职位",
    titleEs: "In-Store Graphic Designer — official requisition removed",
    statusEvidence: "2026-08-13 查询 Fast Retailing 官方 Workday：精确 requisition R00000004175039 返回 0 条职位；详情入口受限且备用语言路径返回 404，搜索缓存不能作为重新开放证据。",
    reason: "官方职位板已经找不到这个精确编号，因此继续放在关闭历史区，不算 Barcelona 当前机会。",
    next: "保留门店视觉、印刷落地与零售物料要求作为作品集参考；只有新的 Fast Retailing 官方职位编号出现后才恢复。",
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-official-board-removal-confirmed",
  },
  1007: {
    ...CURATED[1007],
    statusKey: "closed",
    titleZh: "高级平面设计师—官方职位返回 410",
    titleEs: "Senior Graphic Designer — official requisition returns 410",
    statusEvidence: "2026-08-13 直接请求 ORBIDI 官方 Teamtailor requisition 6423148，结果为 HTTP 410 Gone；搜索页残留的 Apply 文案属于过期缓存。",
    reason: "雇主官方 ATS 的 410 状态优先于搜索缓存，因此不能恢复为可投岗位。",
    next: "保留旧职责作为作品集对标；等待 ORBIDI 发布新的独立官方 requisition。",
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-official-410-confirmed",
  },
  1234: {
    ...CURATED[1234],
    statusKey: "closed",
    titleZh: "高级品牌与营销设计师—旧搜索缓存，无新职位",
    titleEs: "Senior Brand & Marketing Designer — stale result, no new requisition",
    statusEvidence: "2026-08-13 的通用 LinkedIn 列表和聚合页重新露出标题，但精确近 7 天 LinkedIn 搜索没有 LearnWise 设计岗；原职位 4446566881 的停止接收状态仍是更强证据。",
    reason: "完整职责非常匹配品牌系统、指南、Webflow、销售物料与轻量 Motion，但没有新的原始职位编号或雇主申请入口，不能因搜索时间变新而重新计分。",
    next: "保留完整 JD 作作品集对标；只在 LearnWise 发布新 LinkedIn 编号或官方申请页时恢复。",
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-stale-search-result-confirmed",
  },
  930860: {
    ...CURATED[930860],
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain 明确在官方 eligible locations / 远程全职",
    titleZh: "高级品牌设计师（品牌刷新、视觉系统、Motion 与 3D）",
    titleEs: "Sr Brand Designer - Krak",
    languageKey: "unknown",
    applicationMode: "unknown",
    scoringLanguageRisk: "englishLikely",
    language: "官方正文没有列英语等级；全球远程、跨团队讲解设计决策的工作环境按英语大概率评分",
    experienceKey: "senior",
    experienceLabel: "高级 / 5+ 年品牌设计 / fintech 或顶级代理经验",
    statusEvidence: "2026-08-13 直接查询 Kraken 官方 Ashby API：81 个当前职位中精确包含 8ed4c65b-aaac-40d0-9d41-423683b7a1bd，isListed=true、Remote、申请链接有效，secondary locations 明确含 Spain；发布于 2026-07-31。",
    reason: "岗位真实开放且品牌 / VI 匹配很强，但 5+ 年、fintech/顶级代理资历、Motion/3D/AI 与英语远程沟通是重大门槛；恢复为当前机会不等于提升为优先投递。",
    next: "只有在资历和英文面试可承受时再投；材料突出完整视觉识别、品牌刷新、Figma 组件、跨市场 Campaign、Motion/3D、插画和 AI 生产流程，并确认 Spain 合同与薪资。",
    links: [
      "https://jobs.ashbyhq.com/kraken.com/8ed4c65b-aaac-40d0-9d41-423683b7a1bd",
      "https://jobs.ashbyhq.com/kraken.com/8ed4c65b-aaac-40d0-9d41-423683b7a1bd/application",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-official-api-current-restoration",
  },
  930904: {
    ...CURATED[930904],
    reason: "这是 Barcelona 中文直联的真实邻接线索，但核心是橱窗布置与商品陈列，不是平面设计、Logo、VI、品牌指南或数字品牌系统。Round 61 的统一评分增加了非目标方向惩罚，因此它必须排在真实平面 / VI 机会之后。",
    latestAuditSection: ROUND61_SECTION,
    changeType: "round-61-non-target-direction-rescore",
  },
});

SCORE_LANGUAGE_RISK_OVERRIDES.set(55, "englishLikely");
SCORE_LANGUAGE_RISK_OVERRIDES.set(930860, "englishLikely");

const ROUND62_SECTION = "2026-08-13 Round 62 current-source discovery and non-main triage";

// Round 62 preserves every newly opened exact page without inflating the
// user's default board.  These five records are searchable in the review or
// excluded libraries, but none meets the Chinese/Barcelona/brand-design and
// language-feasibility combination required for MY_OPPORTUNITY_IDS.
const round62AuditItems = [
  {
    id: 930905,
    section: ROUND62_SECTION,
    source: "Michael Kors / current original LinkedIn employer detail 4450187301",
    opportunity: "District Visual Merchandiser",
    fit: "Barcelona-based retail visual-merchandising management; not graphic design, brand identity or VI systems",
    location: "Barcelona, Catalonia, Spain; full-time; approximately 60% travel",
    status: "Live but excluded from the user's opportunity board: the exact LinkedIn JobPosting detail was opened on 2026-08-13. It was published on 2026-08-12, remains valid through 2026-09-11 and states EUR35,000-49,000. The actual work is district retail visual merchandising, store walkthroughs, product placement, training and installations; fluent English, 3+ years of visual-merchandising experience and about 60% travel are mandatory.",
    contact: "Current original employer-posted LinkedIn detail: https://www.linkedin.com/jobs/view/4450187301",
    analysis: "Do not rank this as a Barcelona graphic/brand-design opportunity. The word Visual refers to retail merchandising and store execution, not Logo, VI, brand guidelines, graphic design or digital brand systems; its English and travel gates also conflict with the user's profile.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Retail visual merchandising / non-target",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://www.linkedin.com/jobs/view/4450187301"],
    searchText: "Michael Kors District Visual Merchandiser Barcelona full-time 60% travel EUR 35000 49000 fluent English mandatory 3+ years retail stores product placement training installations non-target not graphic brand VI design excluded",
  },
  {
    id: 930906,
    section: ROUND62_SECTION,
    source: "Factorial / current original LinkedIn employer detail 4451503690",
    opportunity: "Brand Manager - DACH Market",
    fit: "Barcelona brand-management role for the German-speaking DACH market; hands-on graphic/VI design is not the primary job",
    location: "Barcelona, Catalonia, Spain; full-time",
    status: "Live but excluded from the user's opportunity board: the exact LinkedIn JobPosting detail was opened on 2026-08-13. It was published on 2026-08-10 and remains valid through 2026-09-09. The role owns DACH brand strategy, visual and verbal identity, campaigns and guidelines, but requires expert/proficient German, fluent English and 4-5+ years of brand-management experience.",
    contact: "Current original employer-posted LinkedIn detail: https://www.linkedin.com/jobs/view/4451503690",
    analysis: "Preserve as search history, not as a suitable Barcelona design card. It is a senior German-market brand-management position rather than a hands-on Brand Designer role, and both German and English are material working-language gates.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Brand management / DACH / non-target",
    sourceGroup: "linkedin",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 3,
    links: ["https://www.linkedin.com/jobs/view/4451503690"],
    searchText: "Factorial Brand Manager DACH Market Barcelona full-time expert proficient German fluent English mandatory 4-5+ years brand strategy visual verbal identity campaigns guidelines management not hands-on designer excluded",
  },
  {
    id: 930907,
    section: ROUND62_SECTION,
    source: "Jobgether / current hosted Lever intermediary detail",
    opportunity: "AI Graphic Designer - Performance Ads",
    fit: "Spain remote performance-ad production; visual work is relevant but the employer, contract entity, pay and working language are undisclosed",
    location: "Remote in Spain; full-time; anonymous partner employer",
    status: "Verify-first intermediary lead: the exact hosted Lever page returned HTTP 200 with a visible application form on 2026-08-13. It describes high-volume static Meta ads for DTC/e-commerce using Figma, Adobe and AI image tools. Jobgether does not identify the actual partner employer, compensation, Spain employing entity, experience threshold or working language.",
    contact: "Current exact hosted Lever detail/application: https://jobs.lever.co/jobgether/469def53-f801-49bd-a47b-7ec8fef271a0",
    analysis: "Keep only in the review library. It is closer to paid-ad production than brand identity/VI, and an anonymous intermediary page is not enough evidence to spend application effort before the employer, contract, pay, language and data destination are disclosed.",
    score: 0,
    tier: "D",
    locationTag: "Remote / Europe",
    typeTag: "Performance ads / graphic production",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://jobs.lever.co/jobgether/469def53-f801-49bd-a47b-7ec8fef271a0"],
    searchText: "Jobgether anonymous employer Spain remote full-time AI Graphic Designer Performance Ads Meta DTC ecommerce Figma Adobe Midjourney FLUX Nano Banana employer contract pay language experience undisclosed verify first intermediary",
  },
  {
    id: 930908,
    section: ROUND62_SECTION,
    source: "Jobgether / current hosted Lever intermediary detail",
    opportunity: "Graphic Designer - Global",
    fit: "Spain remote digital campaign and brand-identity production; actual health-tech employer is hidden and English B2/C1 is explicit",
    location: "Remote in Spain; full-time; anonymous partner employer",
    status: "Verify-first intermediary lead: the exact hosted Lever page returned HTTP 200 with a visible application form on 2026-08-13. It covers digital ads, social, email, web, landing pages, campaigns and brand identity, and requires 3+ years plus English B2/C1. The actual health-technology employer, compensation and Spain contract entity are not disclosed.",
    contact: "Current exact hosted Lever detail/application: https://jobs.lever.co/jobgether/cba85b73-fbf7-4240-88bd-0017d06a2b18",
    analysis: "The design scope is relevant, but it must remain in the review library: English is a stated gate and the intermediary withholds the employer, pay and contracting entity. Identify the client and privacy recipient before considering an application.",
    score: 0,
    tier: "D",
    locationTag: "Remote / Europe",
    typeTag: "Digital campaigns / brand implementation",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://jobs.lever.co/jobgether/cba85b73-fbf7-4240-88bd-0017d06a2b18"],
    searchText: "Jobgether anonymous employer Spain remote full-time Graphic Designer Global health technology digital ads social email web landing pages campaigns brand identity 3+ years English B2 C1 explicit Figma Adobe employer pay contract undisclosed verify first",
  },
  {
    id: 930909,
    section: ROUND62_SECTION,
    source: "Jobgether / current hosted Lever intermediary detail",
    opportunity: "UI/UX & Visual Designer (Mid-Level)",
    fit: "Spain remote web/UI and campaign-asset role; more product/CRO than brand identity and the actual employer is hidden",
    location: "Remote in Spain; full-time; anonymous partner employer",
    status: "Verify-first intermediary lead: the exact hosted Lever page returned HTTP 200 with a visible application form on 2026-08-13. It describes mobile-first content websites, landing pages, CRO, Figma systems, logos, banners, icons and campaign assets. Jobgether does not disclose the partner employer, compensation, Spain contract entity or working language; the role is explicitly mid-level.",
    contact: "Current exact hosted Lever detail/application: https://jobs.lever.co/jobgether/4fa8bb95-1eef-4c97-b156-88ce62063bcc",
    analysis: "Keep only as a review-library backup. The work is mainly web/UI/CRO with some visual assets rather than a core VI role, while employer identity, language, contract and pay remain unknown.",
    score: 0,
    tier: "D",
    locationTag: "Remote / Europe",
    typeTag: "UI/UX / web visual / campaign assets",
    sourceGroup: "other",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: ["https://jobs.lever.co/jobgether/4fa8bb95-1eef-4c97-b156-88ce62063bcc"],
    searchText: "Jobgether anonymous employer Spain remote full-time UI UX Visual Designer Mid-Level mobile-first content websites landing pages CRO Figma systems logos banners icons campaign assets employer compensation contract language undisclosed English-likely verify first",
  },
];

allData.push(...round62AuditItems);

Object.assign(CURATED, {
  930905: {
    statusKey: "closed",
    direction: "other",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 全职 / 约 60% 出差",
    titleZh: "区域视觉陈列经理（零售陈列，非平面 / VI 岗）",
    titleEs: "District Visual Merchandiser",
    languageKey: "english",
    applicationMode: "english",
    language: "明确要求流利英语",
    experienceKey: "mid",
    experienceLabel: "3+ 年零售视觉陈列经验",
    statusEvidence: "2026-08-13 已逐字读取 LinkedIn 原始 JobPosting：职位开放，但职责是门店陈列、商品摆放、培训、巡店和安装，不是平面 / 品牌设计；因此按“排除”而不是“关闭”归入历史库。",
    reason: "Visual 在这里指 Visual Merchandising，不代表 Visual Designer；方向、英语和高频出差都不符合用户条件。",
    next: "不投。仅保留精确职位编号，避免后续搜索再次把它误识别为视觉设计岗。",
    links: ["https://www.linkedin.com/jobs/view/4450187301"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND62_SECTION,
    changeType: "round-62-live-but-non-target-retail-vm-exclusion",
  },
  930906: {
    statusKey: "closed",
    direction: "other",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 全职",
    titleZh: "DACH 市场品牌经理（德语市场管理，非设计执行岗）",
    titleEs: "Brand Manager - DACH Market",
    languageKey: "foreign",
    applicationMode: "foreign",
    language: "明确要求专业 / 母语级德语与流利英语",
    experienceKey: "senior",
    experienceLabel: "4–5+ 年品牌管理经验",
    statusEvidence: "2026-08-13 已逐字读取 LinkedIn 原始 JobPosting：职位开放，但它是 DACH 品牌管理岗位，核心不是亲自完成平面 / VI 设计。",
    reason: "German + English 是实质硬门槛，且岗位方向为高级品牌管理；不能因正文出现 visual identity 和 guidelines 就把它排进设计主榜。",
    next: "不投。保留为关键词误命中案例，后续只追踪 Factorial 的 Designer / Art Director 精确岗位。",
    links: ["https://www.linkedin.com/jobs/view/4451503690"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND62_SECTION,
    changeType: "round-62-live-but-language-and-direction-exclusion",
  },
  930907: {
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / 雇主与合同主体未公开",
    titleZh: "AI 广告平面设计师（匿名雇主，先核身份）",
    titleEs: "AI Graphic Designer - Performance Ads",
    languageKey: "unknown",
    applicationMode: "unknown",
    scoringLanguageRisk: "englishLikely",
    language: "正文未写语言等级；匿名全球中介流程按英语环境大概率处理",
    experienceKey: "unknown",
    experienceLabel: "经验年限未公开",
    opaqueEmployer: true,
    statusEvidence: "2026-08-13 精确 Lever 页面可打开并有申请表，但 Jobgether 未公开实际雇主、薪资、Spain 合同主体、工作语言和经验门槛。",
    reason: "真实页面不等于高质量机会；这是效果广告批量生产岗，且关键雇佣信息缺失，只能待复核。",
    next: "先通过公开渠道识别实际雇主与数据接收方；确认合同、薪资和工作语言后再决定是否移入当前板。",
    links: ["https://jobs.lever.co/jobgether/469def53-f801-49bd-a47b-7ec8fef271a0"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND62_SECTION,
    changeType: "round-62-anonymous-intermediary-review-only",
  },
  930908: {
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / 匿名 health-tech 雇主",
    titleZh: "全球平面设计师（匿名雇主，英语 B2/C1）",
    titleEs: "Graphic Designer - Global",
    languageKey: "english",
    applicationMode: "english",
    language: "明确要求英语 B2/C1",
    experienceKey: "mid",
    experienceLabel: "3+ 年平面设计经验",
    opaqueEmployer: true,
    statusEvidence: "2026-08-13 精确 Lever 页面可打开并有申请表；正文有 3+ 年与 English B2/C1，但实际 health-tech 雇主、薪资和 Spain 合同主体未公开。",
    reason: "视觉范围有用，但明确英语门槛和匿名雇主风险都与用户当前条件冲突，不能进入默认机会榜。",
    next: "仅在找到真实雇主、合同与薪资后复核；未核明前不要提交完整个人资料。",
    links: ["https://jobs.lever.co/jobgether/cba85b73-fbf7-4240-88bd-0017d06a2b18"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND62_SECTION,
    changeType: "round-62-anonymous-explicit-english-review-only",
  },
  930909: {
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / 雇主与合同主体未公开",
    titleZh: "中级 UI/UX 与视觉设计师（匿名雇主）",
    titleEs: "UI/UX & Visual Designer (Mid-Level)",
    languageKey: "unknown",
    applicationMode: "unknown",
    scoringLanguageRisk: "englishLikely",
    language: "正文未写语言等级；匿名全球中介流程按英语环境大概率处理",
    experienceKey: "mid",
    experienceLabel: "明确中级",
    opaqueEmployer: true,
    statusEvidence: "2026-08-13 精确 Lever 页面可打开并有申请表；正文以 Web、UI/UX、CRO 与 Figma 系统为主，但雇主、薪资、Spain 合同主体和工作语言均未公开。",
    reason: "方向偏 Web/UI/CRO，只部分覆盖品牌视觉；关键雇佣信息缺失，因此只放待复核库。",
    next: "先识别雇主并确认语言、合同和薪资；只有信息透明且品牌视觉占比足够时才恢复为可投。",
    links: ["https://jobs.lever.co/jobgether/4fa8bb95-1eef-4c97-b156-88ce62063bcc"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND62_SECTION,
    changeType: "round-62-anonymous-web-ui-review-only",
  },
});

SCORE_LANGUAGE_RISK_OVERRIDES.set(930907, "englishLikely");
SCORE_LANGUAGE_RISK_OVERRIDES.set(930909, "englishLikely");

const ROUND63_SECTION = "2026-08-13 Round 63 Barcelona exact-detail discovery and user-fit scoring";

// Round 63 keeps the complete discovery history while separating genuinely
// open Barcelona roles from attractive but expired search results. Every live
// record below was read at the exact job-detail level; none receives a language
// or seniority exemption merely because its design scope is attractive.
const round63AuditItems = [
  {
    id: 930910,
    section: ROUND63_SECTION,
    source: "Mylva S.A. / current JobToday exact detail and InfoJobs mirror",
    opportunity: "Diseñador/a Gráfico & Web",
    fit: "Barcelona hybrid graphic, brand-identity, editorial, packaging and digital-production role",
    location: "48 Via Augusta, Gràcia, Barcelona; hybrid 3 office + 2 home; full-time",
    status: "Live/current: the exact JobToday detail was opened and read on 2026-08-13. It shows Apply now, a 2026-07-27 publication date, a stable contract, hybrid work, EUR26,000 gross/year and a central Barcelona office. The independently indexed InfoJobs detail identifies an indefinite full-time contract and at least four years of experience; JobToday asks for more than five years.",
    contact: "Current exact JobToday application: https://jobtoday.com/es/trabajo/disenador-a-grafico-and-web-PwVnx9 ; independently indexed InfoJobs mirror: https://www.infojobs.net/barcelona/disenador-grafico-web/of-i2261626aa54c9b86b9903cbc8f444e",
    analysis: "The work is highly relevant—identity, editorial, packaging, campaigns, social, email, video, WordPress and brand-guideline consistency—but it is not a high personal-fit card. The local Spanish-language workflow is probable and the four-to-five-plus-year threshold is a substantial seniority gate. Keep it as a low-ranked Barcelona stretch, not a priority application.",
    score: 88,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Brand / graphic / editorial / packaging / web",
    sourceGroup: "other",
    postedAt: "2026-07-27",
    freshnessTag: "month",
    freshnessAgeDays: 17,
    links: [
      "https://jobtoday.com/es/trabajo/disenador-a-grafico-and-web-PwVnx9",
      "https://www.infojobs.net/barcelona/disenador-grafico-web/of-i2261626aa54c9b86b9903cbc8f444e",
    ],
    searchText: "Mylva current exact JobToday Diseñador Gráfico Web Barcelona Gràcia hybrid 3 office 2 home full-time stable indefinite contract EUR 26000 identity brand editorial catalogues leaflets events packaging digital campaigns social email newsletters After Effects Premiere WordPress brand guidelines 4 years 5+ years Spanish local environment likely",
  },
  {
    id: 930911,
    section: ROUND63_SECTION,
    source: "NUDE PROJECT / current original LinkedIn employer detail 4385975298",
    opportunity: "Freelance Graphic Designer",
    fit: "Barcelona junior fashion-brand graphic role across web, newsletters, social, print, merchandise and events",
    location: "Barcelona 22@ office; freelance/part-time contract; 16-20 hours",
    status: "Live/current: the exact employer-posted LinkedIn detail was opened and read on 2026-08-13. It visibly shows Solicitar, Barcelona, one week old and more than 200 applications. The body specifies a 16-20 hour contract and offices in Barcelona's 22@ district.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/freelance-graphic-designer-at-nude-project-4385975298",
    analysis: "This is a genuine junior Barcelona brand-extension opportunity: online and offline pieces, concepts, visual-identity adaptations and event graphics, with only one-to-two years requested. Keep it below Chinese-accessible roles because the public brief is Spanish and no alternative working language is stated; the 16-20 hour freelance arrangement and missing pay are additional practical constraints.",
    score: 82,
    tier: "B",
    locationTag: "Barcelona area",
    typeTag: "Brand implementation / graphic / fashion",
    sourceGroup: "linkedin",
    postedAt: "2026-08-06",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://es.linkedin.com/jobs/view/freelance-graphic-designer-at-nude-project-4385975298"],
    searchText: "NUDE PROJECT current employer LinkedIn 4385975298 Solicitar Barcelona 22@ freelance part-time 16-20 hours junior 1-2 years graphic designer web newsletters social media posters merchandising invitations postcards creative concepts visual identity adaptations events Spanish local environment likely pay undisclosed",
  },
  {
    id: 930913,
    section: ROUND63_SECTION,
    source: "Tenth Revolution Group / current exact LinkedIn employer detail 4398479910",
    opportunity: "Freelance Graphic Designer – Digital Assets",
    fit: "Barcelona-area freelance digital assets, events and brand-guideline implementation",
    location: "Barcelona area; long-term freelance project; exact onsite rhythm and client identity not published",
    status: "Live/current with caution: the exact employer-posted LinkedIn result was read in full on 2026-08-13 and showed a current application, a direct recruiter email and a posting age of about 20 hours. It requests more than one year of experience, autónomo status and English B2 or higher; the end client, fee and contract duration are not disclosed.",
    contact: "Current exact LinkedIn detail/application: https://es.linkedin.com/jobs/view/graphic-designer-%E2%80%93-digital-assets-at-tenth-revolution-group-4398479910 ; recruiter email: a.soffia@tenthrevolution.com",
    analysis: "The scope is useful—email, web, social, landing pages, events, stands, activations and brand guidelines—but this is a recruiter-mediated freelance assignment. Explicit English B2, probable local Spanish coordination, autónomo registration and undisclosed client/pay make it a low personal-fit backup despite the good design match.",
    score: 74,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Digital graphic / events / brand implementation",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://es.linkedin.com/jobs/view/graphic-designer-%E2%80%93-digital-assets-at-tenth-revolution-group-4398479910",
      "mailto:a.soffia@tenthrevolution.com",
    ],
    searchText: "Tenth Revolution current exact LinkedIn 4398479910 Freelance Graphic Designer Digital Assets Barcelona area long-term project +1 year autonomous autónomo mandatory English B2 higher email web social landing pages events stands activations brand guidelines Adobe Photoshop Illustrator basic video Figma AI recruiter client pay undisclosed Spanish local likely",
  },
  {
    id: 930914,
    section: ROUND63_SECTION,
    source: "Tenth Revolution Group / current exact LinkedIn employer detail 4398679901",
    opportunity: "Freelance Graphic Designer with Blender",
    fit: "Barcelona-area freelance UI, visual, 3D, motion and brand-experience production",
    location: "Barcelona area; freelance project; exact onsite rhythm and client identity not published",
    status: "Live/current with caution: the exact employer-posted LinkedIn result was read in full on 2026-08-13 and showed Solicitar, a direct recruiter email and a posting age of about six hours. It requires more than one year of experience, professional Blender work, autónomo status and English B2 or higher; the dermocosmetics client, fee and duration are not disclosed.",
    contact: "Current exact LinkedIn detail/application: https://es.linkedin.com/jobs/view/freelance-graphic-designer-with-blender-at-tenth-revolution-group-4398679901 ; recruiter email: a.soffia@tenthrevolution.com",
    analysis: "This is a specialist 3D/UI/motion assignment rather than the user's core VI role. Keep it as a low-ranked Barcelona backup only: English B2, probable local Spanish coordination, Blender depth, autónomo status and opaque client/pay all reduce practical feasibility.",
    score: 70,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "3D / UI visual / motion",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 0,
    links: [
      "https://es.linkedin.com/jobs/view/freelance-graphic-designer-with-blender-at-tenth-revolution-group-4398679901",
      "mailto:a.soffia@tenthrevolution.com",
    ],
    searchText: "Tenth Revolution current exact LinkedIn 4398679901 Freelance Graphic Designer Blender Barcelona area dermocosmetics UI visual web app 3D modelling materials textures shading lighting rendering animation motion brand identity +1 year autonomous autónomo mandatory English B2 higher Figma Adobe client pay duration undisclosed Spanish local likely",
  },
  {
    id: 930915,
    section: ROUND63_SECTION,
    source: "Liados / expired original LinkedIn employer detail 4437151743",
    opportunity: "Art Director & Graphic Design — expired",
    fit: "Strong Barcelona identity, key-visual, campaign, print and digital brief; no longer a current vacancy",
    location: "Poblenou, Barcelona; former 37.5-hour indefinite full-time role",
    status: "Closed/history: the exact LinkedIn job URL was opened on 2026-08-13 and redirected to a generic Director de Arte search carrying expired_jd_redirect. The indexed original text described one-to-two years of experience, visual identities, key visuals, final artwork, print/digital adaptation and jobs@liadosclab.com, but the expired redirect is stronger current-status evidence.",
    contact: "Expired original LinkedIn detail: https://es.linkedin.com/jobs/view/art-director-graphic-design-at-liados-4437151743 ; historical recruitment email: jobs@liadosclab.com",
    analysis: "Preserve the attractive brief in history so it is not lost again, but do not show it as currently open. Restore only when Liados publishes a new exact requisition or confirms in writing that it is still accepting applications for this role.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Brand / art direction / graphic — closed",
    sourceGroup: "linkedin",
    postedAt: "2026-07-30",
    freshnessTag: "month",
    freshnessAgeDays: 14,
    links: [
      "https://es.linkedin.com/jobs/view/art-director-graphic-design-at-liados-4437151743",
      "mailto:jobs@liadosclab.com",
    ],
    searchText: "Liados expired original LinkedIn 4437151743 Art Director Graphic Design Barcelona Poblenou 1-2 years visual identities key visuals campaigns Adobe final artwork digital print indefinite 37.5 hours jobs email expired_jd_redirect closed history",
  },
  {
    id: 930916,
    section: ROUND63_SECTION,
    source: "Sitges Film Festival / expired official Factorial detail",
    opportunity: "Dissenyador/a Gràfic 2026 — deadline passed",
    fit: "Sitges graphic-production, layout, communications, signage and festival-material role; application deadline passed",
    location: "08870 Sitges, Barcelona province; fixed-discontinuous full-time period 2026-08-03 to 2026-10-22",
    status: "Closed/history: the official Factorial detail was identified and its complete indexed text was read on 2026-08-13. Although a stale Inscríbete ahora label remains indexed, the body explicitly sets the application deadline at 12:00 on 2026-05-25. It asks for at least three years and values English C2; gross monthly pay was EUR1,853.",
    contact: "Expired official detail: https://sitgesfilmfestival.factorial.es/job_posting/dissenyador-a-grafic-2026-300959",
    analysis: "The explicit deadline overrides the surviving Apply label. Preserve the layout, signage and festival-communication brief as history only; wait for a 2027 requisition or another independently dated opening.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Graphic production / signage / festival — closed",
    sourceGroup: "other",
    postedAt: "2026-05-25",
    freshnessTag: "quarter",
    freshnessAgeDays: 80,
    links: ["https://sitgesfilmfestival.factorial.es/job_posting/dissenyador-a-grafic-2026-300959"],
    searchText: "Sitges Film Festival official Factorial 300959 Dissenyador Grafic 2026 Sitges Barcelona layout originals communications signage 3 years English C2 valued fixed discontinuous 2026-08-03 2026-10-22 EUR 1853 monthly explicit application deadline 2026-05-25 passed closed history stale apply label",
  },
];

allData.push(...round63AuditItems);

const round63RvGroup = allData.find((item) => Number(item.id) === 396);
if (round63RvGroup) {
  Object.assign(round63RvGroup, {
    section: ROUND63_SECTION,
    source: "RV Group - Rodriguez Villar / current JobToday exact details",
    status: "Live/current canonical role: a newly exposed exact JobToday route DLOPKX was opened and read on 2026-08-13 and again shows Apply now, a verified employer, central Barcelona, 100% onsite full-time work and the complete Junior Motion Graphics & Visual Designer brief. It is the same vacancy identity as the already preserved 9wP83M route, not a second job. Both fluent Spanish and fluent English remain mandatory.",
    contact: "Current exact JobToday routes: https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-DLOPKX ; https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-9wP83M",
    analysis: "Keep one canonical card and both exact source routes. The junior level and Barcelona location are useful, but motion/video dominates and fluent Spanish plus fluent English are explicit hard gates, so its personal-fit score remains near the bottom.",
    links: [
      "https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-DLOPKX",
      "https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-9wP83M",
    ],
    searchText: "RV Group Rodriguez Villar current canonical JobToday DLOPKX 9wP83M Junior Motion Graphics Visual Designer Barcelona central 100% onsite full-time verified employer Apply now fluent Castellano Spanish and English both mandatory Adobe After Effects Premiere Photoshop Illustrator campaigns social digital signage flyers posters menus brand consistency junior duplicate source routes one vacancy",
  });
}

const round63Uniqlo = allData.find((item) => Number(item.id) === 153);
if (round63Uniqlo) {
  round63Uniqlo.links = [
    ...(Array.isArray(round63Uniqlo.links) ? round63Uniqlo.links : []),
    "https://es.linkedin.com/jobs/view/in-store-graphic-designer-at-uniqlo-4415503040",
  ];
}

Object.assign(CURATED, {
  396: {
    ...CURATED[396],
    statusKey: "live",
    direction: "motion",
    company: "RV Group — Rodriguez Villar",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市中心 / 100% 现场 / 全职",
    titleZh: "初级 Motion Graphics 与视觉设计师",
    titleEs: "Junior Motion Graphics & Visual Designer",
    languageKey: "foreign",
    applicationMode: "englishSpanish",
    language: "明确要求流利西班牙语与流利英语，两者均为必须",
    experienceKey: "junior",
    experienceLabel: "初级；接受个人、学业、实习或自由职业作品",
    statusEvidence: "2026-08-13 逐字读取新 JobToday 精确路由 DLOPKX：Apply now、验证雇主、Barcelona 市中心全职；正文和语言栏明确 Spanish Advanced + English Advanced。它与原 9wP83M 是同一职位，不重复计数。",
    reason: "级别和地点友好，也覆盖品牌一致性与平面延展；但 Motion/视频为主，且英西双语流利是明写硬门槛，所以个人适配分继续接近底部。",
    next: "当前不优先投。只有两门语言能完成现场协作时再用 Motion reel、Campaign、digital signage、社媒与印刷适配案例申请。",
    links: [
      "https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-DLOPKX",
      "https://jobtoday.com/es/trabajo/junior-motion-graphics-and-visual-designer-9wP83M",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-current-duplicate-route-merged",
  },
  930910: {
    statusKey: "live",
    direction: "brand",
    company: "Mylva S.A.",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Gràcia / hybrid 3+2 / 全职",
    titleZh: "平面与网页设计师（品牌、编辑、包装与数字延展）",
    titleEs: "Diseñador/a Gráfico & Web",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "职位全文与 Barcelona 本地工作环境为西语；未写正式等级，但日常西语很可能",
    experienceKey: "senior",
    experienceLabel: "至少 4 年；JobToday 正文写 5+ 年",
    statusEvidence: "2026-08-13 逐字读取 JobToday 精确页：显示 Apply now、2026-07-27 发布、Barcelona 市中心、hybrid 3+2、全职稳定合同与 €26,000/年；InfoJobs 独立镜像写无固定期限全职和至少 4 年。",
    reason: "品牌识别、编辑、包装、Campaign、社媒、邮件、视频、WordPress 与品牌指南很匹配，但 4–5+ 年资历和西语本地环境是重大门槛，不能因职责漂亮而高分。",
    next: "先用极短西语消息确认日常语言是否可接受英文辅助，以及 4 年以下是否会考虑；得到肯定答复后再准备品牌系统、包装、编辑与数字延展案例。",
    links: [
      "https://jobtoday.com/es/trabajo/disenador-a-grafico-and-web-PwVnx9",
      "https://www.infojobs.net/barcelona/disenador-grafico-web/of-i2261626aa54c9b86b9903cbc8f444e",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-new-current-barcelona-senior-spanish-likely",
  },
  930911: {
    statusKey: "live",
    direction: "brand",
    company: "NUDE PROJECT",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 22@ / 16–20 小时自由职业",
    titleZh: "自由职业平面设计师（品牌视觉延展）",
    titleEs: "Freelance Graphic Designer",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "西语职位正文与 Barcelona 本地团队环境；未写正式语言等级，先按西语大概率评分",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–2 年",
    statusEvidence: "2026-08-13 打开 LinkedIn 雇主原始详情 4385975298：显示 Solicitar、Barcelona、约 1 周、200+ 申请；正文明确 16–20 小时合同和 22@ 办公室。",
    reason: "初级、品牌视觉延展和 Barcelona 都匹配，但西语工作环境未确认替代路径，且只有 16–20 小时、薪资未公开；因此是低分但真实的本地机会。",
    next: "先问日常语言、每周具体排班、自由职业还是劳动合同及小时费率；确认可沟通后，用时装/青年品牌视觉、社媒、印刷、周边和活动物料案例投递。",
    links: ["https://es.linkedin.com/jobs/view/freelance-graphic-designer-at-nude-project-4385975298"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-new-current-barcelona-junior-freelance",
  },
  930913: {
    statusKey: "live",
    direction: "digital",
    company: "Tenth Revolution Group / 客户未披露",
    locationKey: "barcelona",
    locationLabel: "Barcelona 周边 / 长期自由职业 / 客户未披露",
    titleZh: "自由职业数字平面设计师（英语 B2、需 autónomo）",
    titleEs: "Freelance Graphic Designer – Digital Assets",
    languageKey: "english",
    applicationMode: "english",
    scoringLanguageRisk: "englishSpanishLikely",
    language: "英语 B2+ 明确必需；Barcelona 本地客户协作的西语环境也很可能",
    experienceKey: "junior",
    experienceLabel: "1+ 年；中介页标注中级",
    statusEvidence: "2026-08-13 完整读取 LinkedIn 雇主职位 4398479910：约 20 小时、可申请、招聘人邮箱可见；明确 1+ 年、autónomo 与 English B2+，终端客户、费率和期限未公开。",
    reason: "数字资产、活动与品牌指南相关，但英语 B2、自雇注册、本地西语概率及客户/费用不透明共同降权。",
    next: "先用邮件只问客户行业、日常语言、地点/远程节奏、项目期限、小时费率和发票条件；信息明确前不发送完整个人资料。",
    links: [
      "https://es.linkedin.com/jobs/view/graphic-designer-%E2%80%93-digital-assets-at-tenth-revolution-group-4398479910",
      "mailto:a.soffia@tenthrevolution.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-new-current-recruiter-freelance-english-b2",
  },
  930914: {
    statusKey: "live",
    direction: "digital",
    company: "Tenth Revolution Group / 药妆客户未披露",
    locationKey: "barcelona",
    locationLabel: "Barcelona 周边 / 自由职业 / 客户未披露",
    titleZh: "自由职业 3D 与视觉设计师（Blender、英语 B2）",
    titleEs: "Freelance Graphic Designer with Blender",
    languageKey: "english",
    applicationMode: "english",
    scoringLanguageRisk: "englishSpanishLikely",
    language: "英语 B2+ 明确必需；Barcelona 本地客户协作的西语环境也很可能",
    experienceKey: "junior",
    experienceLabel: "1+ 年；另需成熟 Blender 作品",
    statusEvidence: "2026-08-13 完整读取 LinkedIn 雇主职位 4398679901：约 6 小时、显示 Solicitar 与招聘人邮箱；明确 1+ 年、Blender、autónomo 与 English B2+，客户、费率和期限未公开。",
    reason: "方向偏 UI、3D 与 Motion，不是核心 VI；英语 B2、Blender 深度、自雇与不透明客户进一步降低可行性。",
    next: "仅当 Blender/3D 已是成熟能力时先问语言、客户、费率、地点和期限；否则不投入申请时间。",
    links: [
      "https://es.linkedin.com/jobs/view/freelance-graphic-designer-with-blender-at-tenth-revolution-group-4398679901",
      "mailto:a.soffia@tenthrevolution.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-new-current-specialist-3d-english-b2",
  },
  930915: {
    statusKey: "closed",
    direction: "brand",
    company: "Liados",
    locationKey: "barcelona",
    locationLabel: "Poblenou, Barcelona / 原 37.5 小时无固定期限职位",
    titleZh: "艺术指导与平面设计—精确页已过期",
    titleEs: "Art Director & Graphic Design — expired",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "原职位与 Barcelona 工作室语境为西语；未写正式等级",
    experienceKey: "junior",
    experienceLabel: "原要求 1–2 年",
    statusEvidence: "2026-08-13 打开精确 LinkedIn 4437151743，跳转至带 expired_jd_redirect 的通用 Art Director 搜索页；不能用两周前缓存和邮箱证明仍在招。",
    reason: "职责很匹配视觉识别、KV、Campaign、完稿和数字/印刷适配，但职位已经过期；保留而不冒充可投。",
    next: "等待新职位编号，或先发一封不附敏感材料的状态确认邮件；对方明确仍收材料后再恢复。",
    links: [
      "https://es.linkedin.com/jobs/view/art-director-graphic-design-at-liados-4437151743",
      "mailto:jobs@liadosclab.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-expired-exact-detail-history",
  },
  930916: {
    statusKey: "closed",
    direction: "production",
    company: "Sitges Film Festival",
    locationKey: "barcelona",
    locationLabel: "Sitges, Barcelona 省 / 2026-08-03 至 2026-10-22",
    titleZh: "电影节平面设计师—申请截止日已过",
    titleEs: "Dissenyador/a Gràfic 2026 — deadline passed",
    languageKey: "foreign",
    applicationMode: "spanish",
    language: "职位正文为加泰语；English C2 被列为加分项",
    experienceKey: "mid",
    experienceLabel: "至少 3 年",
    statusEvidence: "官方 Factorial 索引正文明确写申请截止时间为 2026-05-25 12:00；残留的 Inscríbete ahora 不能覆盖正文截止日。",
    reason: "排版、传播物料和导视相关，但截止日期已经过去，必须留在历史区。",
    next: "等待 2027 新 requisition；当前不投。",
    links: ["https://sitgesfilmfestival.factorial.es/job_posting/dissenyador-a-grafic-2026-300959"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-explicit-deadline-history",
  },
  153: {
    ...CURATED[153],
    statusKey: "closed",
    statusEvidence: "2026-08-13 再开 LinkedIn 雇主详情 4415503040：页面明确写“Ya no se aceptan solicitudes”；正文同时要求母语加泰语和西语、工作英语、4+ 年及英文 CV。官方 Workday 精确编号此前也已从职位板消失。",
    reason: "LinkedIn 停止接收和 Workday 移除相互印证，不能恢复为当前机会；语言与资历也不符合现阶段优先条件。",
    next: "保留零售空间平面、POS、橱窗、欧洲规范本地化和供应商管理要求作历史参考；等待新的 Fast Retailing requisition。",
    latestAuditSection: ROUND63_SECTION,
    changeType: "round-63-linkedin-closed-and-language-gates-confirmed",
  },
});

SCORE_LANGUAGE_RISK_OVERRIDES.set(930913, "englishSpanishLikely");
SCORE_LANGUAGE_RISK_OVERRIDES.set(930914, "englishSpanishLikely");

const ROUND64_SECTION = "2026-08-14 Round 64 latest-source discovery, duplicate merge and language-fit correction";

// Exact pages were read in full on 2026-08-14. Four secondary visual-content
// vacancies are independent and current. The remaining records preserve fresh
// mirrors, duplicate routes and non-design false positives without inflating
// the current opportunity count.
const round64AuditItems = [
  {
    id: 930917,
    section: ROUND64_SECTION,
    source: "Avecla Realty / current original LinkedIn employer detail 4450472949",
    opportunity: "Social Media & Marketing",
    fit: "Sant Cugat junior social-content and light brand-production backup; Canva, Photoshop and CapCut",
    location: "Sant Cugat del Vallès, Barcelona province; applicant must live in Sant Cugat or nearby; work mode, hours and contract not published",
    status: "Live/current with caution: the exact employer-posted LinkedIn detail 4450472949 was opened and read on 2026-08-14. It shows a current onsite LinkedIn application and asks for creative digital content, content editing, brand actions and Canva, Photoshop or CapCut. The Spanish brief does not publish contract type, hours, pay or a separate employer ATS.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/social-media-marketing-at-avecla-realty-4450472949 ; employer website: https://www.aveclarealty.com/",
    analysis: "Keep as a low-score Barcelona-area social/marketing-visual backup, not a graphic-design or VI priority. The no-fixed-years wording and hands-on tools are useful, but Spanish-local communication, mandatory nearby residence and missing employment terms materially reduce feasibility.",
    score: 44,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Social content / light graphic and video production",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: [
      "https://es.linkedin.com/jobs/view/social-media-marketing-at-avecla-realty-4450472949",
      "https://www.aveclarealty.com/",
    ],
    searchText: "Avecla Realty current original LinkedIn 4450472949 Social Media Marketing Sant Cugat Barcelona residence nearby creative digital content editing brand actions Canva Photoshop CapCut Spanish local likely contract hours salary unpublished secondary non VI",
  },
  {
    id: 930918,
    section: ROUND64_SECTION,
    source: "Grupo Planeta / current original LinkedIn employer detail 4452752640",
    opportunity: "Prácticas de Comunicación y Marketing — Geoilustrados",
    fit: "Barcelona editorial-marketing internship with banners, video, animation, presentations and book-launch campaigns",
    location: "Barcelona; internship; exact hours, pay, convenio terms and work mode not published in the visible detail",
    status: "Live/current with caution: Grupo Planeta's employer-posted LinkedIn detail 4452752640 was opened and read in full on 2026-08-14 and exposes an external-application control. It supports Lonely Planet, Geoplaneta and Lunwerg launches, including digital campaigns, videos, animation, banners and presentations. The visible detail does not expose the exact TalentClue requisition, pay, hours or convenio wording.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/pr%C3%A1cticas-de-comunicaci%C3%B3n-y-marketing-editorial-at-grupo-planeta-4452752640 ; official careers hub: https://jobs.planeta.es/",
    analysis: "Keep as a zero-score training backup. The editorial visuals and launch assets are relevant, but it is primarily communication/marketing support, is an internship in a Spanish editorial environment and does not disclose compensation or the exact agreement conditions.",
    score: 42,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Editorial marketing / video / banners / internship",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: [
      "https://es.linkedin.com/jobs/view/pr%C3%A1cticas-de-comunicaci%C3%B3n-y-marketing-editorial-at-grupo-planeta-4452752640",
      "https://jobs.planeta.es/",
    ],
    searchText: "Grupo Planeta current employer LinkedIn 4452752640 Practicas Comunicacion Marketing Editorial Geoilustrados Barcelona Lonely Planet Geoplaneta Lunwerg book launches digital campaigns videos animations banners presentations Photoshop Canva CapCut internship Spanish local likely pay hours convenio exact ATS not exposed",
  },
  {
    id: 930919,
    section: ROUND64_SECTION,
    source: "Lorena Canals / current original LinkedIn employer detail 4450097645",
    opportunity: "Social Media Junior",
    fit: "Sant Just Desvern lifestyle-brand social content, short video, photography, PR, events and brand consistency",
    location: "Sant Just Desvern, Barcelona province; Monday-Thursday office and Friday remote half-day",
    status: "Live/current: the exact employer-posted LinkedIn detail 4450097645 was opened and read in full on 2026-08-14 and exposes an onsite LinkedIn application. It covers daily social content, Reels, posts, brand storytelling, influencer work, PR, events, photoshoots and activations. Fluent written and spoken English and Spanish are explicit requirements.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/social-media-junior-at-lorena-canals-4450097645",
    analysis: "Keep as a very low-score lifestyle-brand content backup. Junior level, visual taste and brand consistency are useful, but it is community/social rather than graphic or VI ownership and the explicit fluent English-plus-Spanish gate makes it unrealistic as a priority for this user.",
    score: 46,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Social content / lifestyle brand / short-form video",
    sourceGroup: "linkedin",
    postedAt: "2026-08-07",
    freshnessTag: "week",
    freshnessAgeDays: 7,
    links: ["https://es.linkedin.com/jobs/view/social-media-junior-at-lorena-canals-4450097645"],
    searchText: "Lorena Canals current original LinkedIn 4450097645 Social Media Junior Sant Just Desvern Barcelona lifestyle brand daily social content Instagram TikTok Pinterest Reels posts photography video CapCut Canva brand consistency fluent English and Spanish written spoken both mandatory hybrid Friday remote",
  },
  {
    id: 930920,
    section: ROUND64_SECTION,
    source: "CoverManager / Hospitality Tech Group / current original LinkedIn employer detail 4453697814",
    opportunity: "Social Media Intern",
    fit: "Barcelona social-content internship with adaptable templates, posts, stories, reels and video editing",
    location: "Barcelona or Sevilla; internship; exact schedule, pay, agreement and office rhythm not published",
    status: "Live/current: the exact employer-posted LinkedIn detail 4453697814 was opened and read in full on 2026-08-14 and exposes an onsite LinkedIn application. The role creates scalable templates, posts, stories, reels and video for Zenchef and CoverManager. French and Spanish plus conversational English are explicit requirements.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/social-media-intern-at-covermanager-4453697814",
    analysis: "Keep at zero as a multilingual social-video internship backup, separate from CoverManager's existing Motion Designer vacancy. It is not core VI, accepts Barcelona or Sevilla rather than Barcelona only, and its French-plus-Spanish-plus-English requirement is a decisive language barrier.",
    score: 38,
    tier: "C",
    locationTag: "Barcelona area",
    typeTag: "Social video / content templates / internship",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/social-media-intern-at-covermanager-4453697814"],
    searchText: "CoverManager Hospitality Tech Group current original LinkedIn 4453697814 Social Media Intern Barcelona or Sevilla Zenchef templates posts stories reels video editing French Spanish plus conversational English all required internship pay agreement schedule unknown secondary social non VI",
  },
  {
    id: 930921,
    section: ROUND64_SECTION,
    source: "ELIM HOME / current LinkedIn duplicate route 4450494402",
    opportunity: "Escaparatista - Visual Merchandising — duplicate source merged",
    fit: "Current Sabadell employer-posted mirror of canonical Chinese-source ELIM HOME lead 930904",
    location: "Sabadell, Barcelona province; full-time; exact store and schedule not published",
    status: "Closed/history duplicate: LinkedIn employer detail 4450494402 was opened and read on 2026-08-14. Company, window-display mission, seasonal campaigns, merchandise presentation and physical installation match canonical ELIM HOME record 930904. It is a fresh application route, not a second vacancy identity.",
    contact: "Current duplicate route merged into 930904: https://es.linkedin.com/jobs/view/escaparatista-visual-merchandising-at-elim-home-4450494402",
    analysis: "Preserve this route as current-status and Spanish-workflow evidence while counting one ELIM HOME vacancy only.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Duplicate retail visual-merchandising source",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/escaparatista-visual-merchandising-at-elim-home-4450494402"],
    searchText: "ELIM HOME LinkedIn 4450494402 Escaparatista Visual Merchandising Sabadell full time no experience Spanish brief duplicate canonical 930904 current route merged",
  },
  {
    id: 930922,
    section: ROUND64_SECTION,
    source: "IES / Equipo Singular / current LinkedIn duplicate route 4453114943",
    opportunity: "Jóvenes Talentos Diseño Gráfico y Vídeo — duplicate source merged",
    fit: "Fresh job-board mirror of canonical official Equipo Singular TalentClue record 930843",
    location: "Barcelona; hybrid mornings; school or university convenio required; EUR271 gross/month",
    status: "Closed/history duplicate: LinkedIn 4453114943 was opened and read in full on 2026-08-14. Employer, duties, 09:00-14:00 hybrid schedule, mandatory school/university convenio, EUR271 gross monthly grant and people@equiposingular.com all match official TalentClue record 930843.",
    contact: "Current duplicate route merged into 930843: https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-ies-4453114943",
    analysis: "Keep the mirror in history, but count and rank the vacancy once under the official TalentClue identity.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Duplicate graphic/video internship source",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-ies-4453114943"],
    searchText: "IES Equipo Singular LinkedIn 4453114943 duplicate canonical 930843 official TalentClue Jovenes Talentos Diseno Grafico Video Barcelona hybrid mornings 9 14 school university convenio EUR271 people email",
  },
  {
    id: 930923,
    section: ROUND64_SECTION,
    source: "Preply / current LinkedIn duplicate route 4442687317",
    opportunity: "UGC Editor — duplicate source merged",
    fit: "Fresh employer-posted mirror of canonical Preply official Ashby record 930866",
    location: "Barcelona hybrid full-time",
    status: "Closed/history duplicate: LinkedIn 4442687317 was opened and read in full on 2026-08-14. Brand UGC, paid and organic short-form video, 2+ years, CapCut/Premiere and advanced English exactly match official Ashby requisition 3b86049e-f2ac-4d98-ad59-e81e4e7b028c.",
    contact: "Current duplicate route merged into 930866: https://es.linkedin.com/jobs/view/ugc-editor-at-preply-4442687317",
    analysis: "Preserve the current mirror, but keep one official Preply vacancy card and one score.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Duplicate brand UGC source",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://es.linkedin.com/jobs/view/ugc-editor-at-preply-4442687317"],
    searchText: "Preply LinkedIn 4442687317 UGC Editor Brand Barcelona advanced English 2 years CapCut Premiere duplicate official Ashby 930866 merged",
  },
  {
    id: 930924,
    section: ROUND64_SECTION,
    source: "Antal International / current original LinkedIn detail 4452439482",
    opportunity: "Responsable Diseño Denim — non-target fashion design",
    fit: "Barcelona current result; apparel/denim product design, not graphic or brand visual design",
    location: "Barcelona offices",
    status: "Closed/history exclusion from this job target: exact LinkedIn detail 4452439482 was opened and read on 2026-08-14. It is a senior women's-denim department-lead role requiring at least five years of apparel design, not a graphic, VI, brand-guideline or digital-brand vacancy.",
    contact: "Current non-target original detail: https://es.linkedin.com/jobs/view/responsable-dise%C3%B1o-denim-at-antal-international-4452439482",
    analysis: "Preserve as a reviewed false positive and exclude from the design-opportunity board.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Non-target apparel design",
    sourceGroup: "linkedin",
    postedAt: "2026-08-11",
    freshnessTag: "week",
    freshnessAgeDays: 3,
    links: ["https://es.linkedin.com/jobs/view/responsable-dise%C3%B1o-denim-at-antal-international-4452439482"],
    searchText: "Antal 4452439482 Responsable Diseno Denim Barcelona women fashion apparel product design 5 years senior non graphic non VI excluded",
  },
  {
    id: 930925,
    section: ROUND64_SECTION,
    source: "Opella / current original LinkedIn employer detail 4451846881",
    opportunity: "Brand Manager Maalox Iberia — non-design marketing management",
    fit: "Barcelona current result; commercial pharmaceutical brand management, not a visual-design role",
    location: "Barcelona; Spain and Portugal market responsibility",
    status: "Closed/history exclusion from this job target: exact employer LinkedIn detail 4451846881 was opened and read in full on 2026-08-14. It owns commercial planning, forecasting, healthcare marketing and stakeholder management, requires 3+ years in brand management and fluent English and Spanish, and contains no hands-on visual-design responsibility.",
    contact: "Current non-target original detail: https://es.linkedin.com/jobs/view/brand-manager-pharmaton-maalox-iberia-barcelona-at-opella-4451846881",
    analysis: "Preserve as a reviewed Brand-keyword false positive and exclude from the visual-design board.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Non-target brand management",
    sourceGroup: "linkedin",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 4,
    links: ["https://es.linkedin.com/jobs/view/brand-manager-pharmaton-maalox-iberia-barcelona-at-opella-4451846881"],
    searchText: "Opella 4451846881 Brand Manager Maalox Iberia Barcelona pharmaceutical commercial planning forecasting English Spanish fluent 3 years non visual design excluded",
  },
  {
    id: 930926,
    section: ROUND64_SECTION,
    source: "NotLinear / current original LinkedIn detail 4453673536",
    opportunity: "Social Media Content Creator — text-first non-design role",
    fit: "Barcelona current result; LinkedIn, Substack and YouTube content growth without visual-production duties",
    location: "Barcelona label; part-time with possible path to full-time; work mode not published",
    status: "Closed/history exclusion from this job target: exact LinkedIn detail 4453673536 was opened and read on 2026-08-14. The role is text-first audience growth, AI workflows and editorial content planning; it does not ask for graphic, motion, video-editing or brand-system production.",
    contact: "Current non-target original detail: https://es.linkedin.com/jobs/view/social-media-content-creator-linkedin-substack-at-notlinear-ai-trainings-4453673536",
    analysis: "Preserve as an inspected social-content false positive; exclude from the design board.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Non-target text-first content",
    sourceGroup: "linkedin",
    postedAt: "2026-08-13",
    freshnessTag: "week",
    freshnessAgeDays: 1,
    links: ["https://es.linkedin.com/jobs/view/social-media-content-creator-linkedin-substack-at-notlinear-ai-trainings-4453673536"],
    searchText: "NotLinear 4453673536 Social Media Content Creator LinkedIn Substack YouTube AI text first audience growth non visual design excluded",
  },
  {
    id: 930927,
    section: ROUND64_SECTION,
    source: "Grupo Hotusa / Hospitaliti / current original LinkedIn detail 4451122485",
    opportunity: "Técnico de Comunicación — non-design communications role",
    fit: "Barcelona current result; media relations, communications planning and brand-style compliance without hands-on design",
    location: "Barcelona; exact contract and working mode not published",
    status: "Closed/history exclusion from this job target: exact LinkedIn detail 4451122485 was opened and read on 2026-08-14. The role coordinates media plans, concepts, storytelling, press relationships, reporting and style-guide compliance, but it does not create visual assets or require design tools.",
    contact: "Current non-target original detail: https://es.linkedin.com/jobs/view/t%C3%A9cnico-de-comunicaci%C3%B3n-at-hospitaliti-4451122485",
    analysis: "Preserve as a reviewed communications false positive; do not confuse following a style guide with being a brand designer.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Non-target communications / PR",
    sourceGroup: "linkedin",
    postedAt: "2026-08-10",
    freshnessTag: "week",
    freshnessAgeDays: 4,
    links: ["https://es.linkedin.com/jobs/view/t%C3%A9cnico-de-comunicaci%C3%B3n-at-hospitaliti-4451122485"],
    searchText: "Grupo Hotusa Hospitaliti 4451122485 Tecnico Comunicacion Barcelona media relations planning storytelling reporting style guide compliance no hands-on visual design excluded",
  },
  {
    id: 930928,
    section: ROUND64_SECTION,
    source: "Equipo Singular / current original LinkedIn employer detail 4452390923",
    opportunity: "Programa de Jóvenes Talentos Social Media — non-design internship",
    fit: "Barcelona social strategy and community internship; no concrete graphic or video-production ownership",
    location: "Barcelona hybrid mornings; school or university convenio required; EUR271 gross/month",
    status: "Closed/history exclusion from this design target: exact employer LinkedIn detail 4452390923 was opened and read in full on 2026-08-14. It focuses on content plans, scheduling, copy, metrics, paid-social learning and client presentations. A school/university convenio, morning schedule and some English are required; the grant is EUR271 gross/month.",
    contact: "Current non-target original detail: https://es.linkedin.com/jobs/view/programa-de-j%C3%B3venes-talentos-social-media-barcelona-at-equipo-singular-4452390923",
    analysis: "Preserve as an inspected social-media internship, but exclude it because the duties do not establish hands-on visual-design production and the agreement/pay conditions are weak.",
    score: 0,
    tier: "X",
    locationTag: "Barcelona area",
    typeTag: "Non-target social strategy internship",
    sourceGroup: "linkedin",
    postedAt: "2026-08-12",
    freshnessTag: "week",
    freshnessAgeDays: 2,
    links: ["https://es.linkedin.com/jobs/view/programa-de-j%C3%B3venes-talentos-social-media-barcelona-at-equipo-singular-4452390923"],
    searchText: "Equipo Singular 4452390923 Jovenes Talentos Social Media Barcelona content plans scheduling copy metrics paid social presentation school university convenio mornings English EUR271 non design excluded",
  },
];

allData.push(...round64AuditItems);

const round64Elim = allData.find((item) => Number(item.id) === 930904);
if (round64Elim) {
  Object.assign(round64Elim, {
    section: ROUND64_SECTION,
    source: "ELIM HOME / current InfoHuaxin Chinese route plus original LinkedIn employer detail",
    location: "Sabadell and ELIM HOME Barcelona-province stores; full-time; exact assigned store and schedule not published",
    status: "Live/current with language caution: LinkedIn employer detail 4450494402 was opened and read in full on 2026-08-14 and shows a current full-time application, no fixed experience requirement and complete window-display duties. InfoHuaxin independently preserves the Chinese recruitment text and direct telephone 656 656 158. Count one vacancy only. The public employer brief is Spanish and the work is hands-on store visual merchandising rather than graphic/VI design.",
    contact: "Current original employer detail/application: https://es.linkedin.com/jobs/view/escaparatista-visual-merchandising-at-elim-home-4450494402 ; Chinese recruitment detail: https://infohuaxin.com/showinfo.asp?id=4281407 ; direct telephone: +34 656 656 158",
    analysis: "Keep one current Chinese-contact Barcelona-area card. Upgrade status from verify to live because the employer-posted application is current, but lower the personal fit through a Chinese-plus-foreign-language risk: the detail is Spanish, physical store-team coordination is likely Spanish, and the work is retail display rather than Logo, VI, brand guidelines or digital brand systems.",
    links: [
      "https://es.linkedin.com/jobs/view/escaparatista-visual-merchandising-at-elim-home-4450494402",
      "https://infohuaxin.com/showinfo.asp?id=4281407",
      "https://infohuaxin.com/showclass.asp?Page=3&class1=13&class2=221&dq=12",
      "tel:+34656656158",
    ],
    searchText: "ELIM HOME current canonical employer LinkedIn 4450494402 InfoHuaxin 4281407 Sabadell Barcelona full time no fixed experience window display visual merchandising seasonal campaigns merchandise presentation lighting signage installation Chinese direct phone 656656158 Spanish public brief local store language likely non graphic non VI duplicate routes merged",
  });
}

const round64EquipoGraphic = allData.find((item) => Number(item.id) === 930843);
if (round64EquipoGraphic) {
  Object.assign(round64EquipoGraphic, {
    section: ROUND64_SECTION,
    status: "Live/current canonical vacancy: the official TalentClue detail and application were reopened on 2026-08-14 and still show the complete Barcelona graphic/video internship plus Inscríbete. Fresh IES LinkedIn mirror 4453114943 repeats the same duties, 09:00-14:00 hybrid schedule, mandatory convenio, EUR271 gross/month and contact email; it is not a second vacancy.",
    contact: "Official TalentClue detail/application: https://equiposingular.talentclue.com/node/127743936/66909823 ; fresh duplicate mirror: https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-ies-4453114943 ; questions: people@equiposingular.com",
    analysis: "Keep one zero-score canonical training card. The branding/editorial/digital/video practice is real, but the mandatory convenio, Spanish-local environment, morning-only schedule and EUR271 monthly grant remain decisive constraints.",
    links: [
      "https://equiposingular.talentclue.com/node/127743936/66909823",
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-ies-4453114943",
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
      "mailto:people@equiposingular.com",
    ],
  });
}

const round64Preply = allData.find((item) => Number(item.id) === 930866);
if (round64Preply) {
  Object.assign(round64Preply, {
    section: ROUND64_SECTION,
    status: "Live/current canonical vacancy: Preply's official Ashby requisition 3b86049e-f2ac-4d98-ad59-e81e4e7b028c remains the authoritative application. Fresh employer LinkedIn mirror 4442687317 was read on 2026-08-14 and independently repeats Brand UGC, Barcelona, 2+ years, CapCut/Premiere and advanced English. Count one role only.",
    contact: "Official detail/application: https://jobs.ashbyhq.com/preply/3b86049e-f2ac-4d98-ad59-e81e4e7b028c ; current employer mirror: https://es.linkedin.com/jobs/view/ugc-editor-at-preply-4442687317",
    links: [
      "https://jobs.ashbyhq.com/preply/3b86049e-f2ac-4d98-ad59-e81e4e7b028c",
      "https://preply.com/en/careers/apply?ashby_jid=3b86049e-f2ac-4d98-ad59-e81e4e7b028c&job_title=UGC%20Editor&job_team=Brand&job_location=Barcelona",
      "https://es.linkedin.com/jobs/view/ugc-editor-at-preply-4442687317",
    ],
  });
}

Object.assign(CURATED, {
  930904: {
    ...CURATED[930904],
    statusKey: "live",
    direction: "other",
    company: "ELIM HOME",
    locationKey: "barcelona",
    locationLabel: "Sabadell / Barcelona 省门店 / 全职现场",
    titleZh: "橱窗设计与商品陈列（零售视觉；非平面 / VI）",
    titleEs: "Escaparatista - Visual Merchandising",
    languageKey: "unknown",
    applicationMode: "chineseCheck",
    scoringLanguageRisk: "chineseForeign",
    language: "华新保留中文直联电话，可先中文询问；雇主 LinkedIn 完整正文为西语，现场门店协作很可能需要西语",
    chineseFit: true,
    experienceKey: "open",
    experienceLabel: "明确不要求长期履历 / 无固定年限；零售陈列经验加分",
    statusEvidence: "2026-08-14 逐字读取 LinkedIn 雇主详情 4450494402：当前可申请、全职、Sabadell、无固定经验门槛；华新中文帖和电话仍作为中文联系入口。两路是同一岗位，只计一张。",
    reason: "这是可先中文联系的当前 Barcelona-area 机会，但招聘正文和门店现场环境显示西语风险，且核心是橱窗安装、商品陈列和空间氛围，不是平面、Logo、VI、品牌指南或数字品牌系统；因此从原先过高的中文单一路径改按中文联系＋外语工作门槛计分。",
    next: "先用中文电话确认日常是否必须西语、具体门店、合同、全保、薪资、班次、搬运安装比例和是否有付费试做；只有语言可行时再发零售空间、橱窗、导视与陈列案例。",
    links: [
      "https://es.linkedin.com/jobs/view/escaparatista-visual-merchandising-at-elim-home-4450494402",
      "https://infohuaxin.com/showinfo.asp?id=4281407",
      "https://infohuaxin.com/showclass.asp?Page=3&class1=13&class2=221&dq=12",
      "tel:+34656656158",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-current-route-and-language-risk-correction",
  },
  930843: {
    ...CURATED[930843],
    statusKey: "live",
    direction: "digital",
    company: "Equipo Singular",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / 09:00–14:00 实习",
    titleZh: "平面与视频设计实习（必须 convenio；€271/月）",
    titleEs: "Jóvenes Talentos Diseño Gráfico y Vídeo",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    experienceKey: "intern",
    experienceLabel: "学生 / 毕业年级；必须学校或大学 convenio",
    internshipKey: true,
    lowPayRisk: true,
    statusEvidence: "2026-08-14 官方 TalentClue 仍有完整正文和 Inscríbete；新 IES LinkedIn 4453114943 与旧雇主镜像均为同一岗位，补助 €271 税前/月、上午班和 convenio 条件一致。",
    reason: "品牌、编辑、数字与基础视频练习真实存在，但它是西语本地、必须 convenio、仅上午且 €271/月的低薪实习，个人适配分保持 0。",
    next: "只有学校可以签 convenio 且能接受西语环境和补助时再申请；使用官方 TalentClue，不把两个 LinkedIn 镜像重复计数。",
    links: [
      "https://equiposingular.talentclue.com/node/127743936/66909823",
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-ies-4453114943",
      "https://es.linkedin.com/jobs/view/j%C3%B3venes-talentos-dise%C3%B1o-gr%C3%A1fico-y-v%C3%ADdeo-barcelona-at-equipo-singular-4452389902",
      "mailto:people@equiposingular.com",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-current-official-recheck-and-duplicate-merge",
  },
  930866: {
    ...CURATED[930866],
    statusKey: "live",
    statusEvidence: "2026-08-14 新 LinkedIn 雇主镜像 4442687317 与 Preply 官方 Ashby 3b86049e 内容一致：Barcelona Brand 团队、2+ 年、CapCut/Premiere、高级英语和当前申请入口；只计一张。",
    links: [
      "https://jobs.ashbyhq.com/preply/3b86049e-f2ac-4d98-ad59-e81e4e7b028c",
      "https://preply.com/en/careers/apply?ashby_jid=3b86049e-f2ac-4d98-ad59-e81e4e7b028c&job_title=UGC%20Editor&job_team=Brand&job_location=Barcelona",
      "https://es.linkedin.com/jobs/view/ugc-editor-at-preply-4442687317",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-current-linkedin-mirror-merged",
  },
  930917: {
    statusKey: "live",
    direction: "social",
    company: "Avecla Realty",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 需住附近 / 条款未公开",
    titleZh: "社媒与营销内容制作（轻量平面 / 视频）",
    titleEs: "Social Media & Marketing",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "西语职位正文与 Sant Cugat 本地工作环境；未写正式等级，按西语大概率评分",
    experienceKey: "open",
    experienceLabel: "年轻人才 / 无固定年限；市场、平面、传播或广告背景",
    statusEvidence: "2026-08-14 逐字读取 LinkedIn 雇主页 4450472949：当前可申请，职责含数字内容、编辑、品牌行动及 Canva/Photoshop/CapCut；合同、工时、薪资未公开。",
    reason: "本地且经验门槛较松，但只是社媒/营销视觉备选，不是品牌 VI；西语环境、居住地限制和条款不透明使其只能低排。",
    next: "先问合同、薪资、工时、到岗天数与实际工作语言；确认可行后再用社媒版式、短视频和品牌活动内容申请。",
    links: [
      "https://es.linkedin.com/jobs/view/social-media-marketing-at-avecla-realty-4450472949",
      "https://www.aveclarealty.com/",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-new-current-secondary-social-visual",
  },
  930918: {
    statusKey: "live",
    direction: "digital",
    company: "Grupo Planeta / Geoilustrados",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 传播营销实习 / 条款待确认",
    titleZh: "编辑传播与营销实习（视频、动画、Banner）",
    titleEs: "Prácticas de Comunicación y Marketing — Editorial",
    languageKey: "spanishLikely",
    applicationMode: "spanishLikely",
    language: "西语职位正文与本地编辑团队环境；未写正式等级，按西语大概率评分",
    experienceKey: "intern",
    experienceLabel: "学生实习；具体 convenio 条款未在可见正文写明",
    internshipKey: true,
    statusEvidence: "2026-08-14 逐字读取 Grupo Planeta 雇主 LinkedIn 4452752640：当前外部申请按钮存在，职责含图书推广、视频、动画、Banner 和演示；精确 TalentClue 编号、补助、工时未公开。",
    reason: "视觉输出与编辑品牌有关，但岗位本质是传播营销实习，不是平面 / VI 主岗；西语环境、实习身份和关键条款缺失使其保持 0 分。",
    next: "只有能接受实习且确认 convenio、补助、工时与语言后再申请；材料放编辑推广、Banner、短视频和动画，不当作正式品牌设计岗。",
    links: [
      "https://es.linkedin.com/jobs/view/pr%C3%A1cticas-de-comunicaci%C3%B3n-y-marketing-editorial-at-grupo-planeta-4452752640",
      "https://jobs.planeta.es/",
    ],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-new-current-editorial-marketing-internship",
  },
  930919: {
    statusKey: "live",
    direction: "social",
    company: "Lorena Canals",
    locationKey: "barcelona",
    locationLabel: "Sant Just Desvern / 周一至周四现场、周五远程半天",
    titleZh: "初级社媒内容与品牌故事",
    titleEs: "Social Media Junior",
    languageKey: "foreign",
    applicationMode: "englishSpanish",
    language: "明确要求英语与西班牙语书面、口语均流利",
    experienceKey: "junior",
    experienceLabel: "初级；未写固定年限",
    statusEvidence: "2026-08-14 逐字读取 LinkedIn 雇主页 4450097645：当前可申请，涵盖日常社媒、短视频、摄影、活动与品牌一致性；英西双语流利为硬门槛。",
    reason: "生活方式品牌语境和视觉审美相关，但核心是社群与内容，且英西双语流利是明确硬门槛，因此只作 3 分左右的后排备选。",
    next: "当前不优先；只有两门语言都可工作时再用品牌故事、短视频、摄影和社媒一致性案例申请。",
    links: ["https://es.linkedin.com/jobs/view/social-media-junior-at-lorena-canals-4450097645"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-new-current-bilingual-social-brand-backup",
  },
  930920: {
    statusKey: "live",
    direction: "social",
    company: "CoverManager / Hospitality Tech Group",
    locationKey: "barcelona",
    locationLabel: "Barcelona 或 Sevilla / 实习 / 条款未公开",
    titleZh: "社媒内容实习（模板、Reels 与视频）",
    titleEs: "Social Media Intern",
    languageKey: "foreign",
    applicationMode: "foreign",
    language: "法语和西班牙语均要求，同时还需会话英语",
    experienceKey: "intern",
    experienceLabel: "实习；协议与年限未公开",
    internshipKey: true,
    statusEvidence: "2026-08-14 逐字读取 LinkedIn 雇主页 4453697814：当前可申请，制作模板、帖子、Stories、Reels 和视频；法语、西语及英语条件明确。",
    reason: "有实际视频和模板制作，但不是 VI，且多语言硬门槛与实习条件使个人适配分为 0；与现有 Motion Designer 是不同职位。",
    next: "当前跳过；只有法语、西语和英语均可工作且能签实习协议时再确认补助、时长和办公城市。",
    links: ["https://es.linkedin.com/jobs/view/social-media-intern-at-covermanager-4453697814"],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: "round-64-new-current-multilingual-social-internship",
  },
});

for (const id of [930921, 930922, 930923, 930924, 930925, 930926, 930927, 930928]) {
  const item = round64AuditItems.find((entry) => entry.id === id);
  CURATED[id] = {
    statusKey: "closed",
    direction: id === 930921 ? "other" : id === 930922 || id === 930923 ? "digital" : "other",
    company: item?.source?.split(" /")[0] || "已复核记录",
    locationKey: "barcelona",
    locationLabel: item?.location || "Barcelona",
    titleZh: item?.opportunity || "已复核记录",
    titleEs: item?.opportunity || "Reviewed record",
    languageKey: "unknown",
    applicationMode: "unknown",
    experienceKey: "unknown",
    statusEvidence: item?.status || "已复核并移出当前主表。",
    reason: item?.analysis || "重复或不属于目标设计岗位。",
    next: "保留历史证据；不作为当前独立设计岗位投递。",
    links: item?.links || [],
    preferCuratedLinks: true,
    latestAuditSection: ROUND64_SECTION,
    changeType: id <= 930923 ? "round-64-duplicate-source-history" : "round-64-non-target-exclusion-history",
  };
}

SCORE_LANGUAGE_RISK_OVERRIDES.set(930904, "chineseForeign");

function applicationLanguagePath(item) {
  const curated = CURATED[item.id];
  const explicitMode = curated?.applicationMode || APPLICATION_MODE_OVERRIDES[item.id];
  if (explicitMode && APPLICATION_LANGUAGE_PATHS[explicitMode]) {
    return APPLICATION_LANGUAGE_PATHS[explicitMode];
  }

  const language = languageInfo(item);
  const text = `${curated?.language || ""} ${curated?.next || ""} ${item.searchText || ""}`;
  if (language.key === "spanish" || curated?.languageHard) {
    return APPLICATION_LANGUAGE_PATHS.spanish;
  }
  if (language.key === "basic") {
    return APPLICATION_LANGUAGE_PATHS.basicSpanish;
  }

  const englishRequired =
    /(?:fluent|professional|excellent|advanced|high[-\s]?level)\s+english|english\s+(?:is\s+)?(?:required|essential|mandatory|must)|英语.{0,10}(?:必需|必须|硬门槛|流利|熟练)|英文(?:简历|作品集|材料|申请)|用英文(?:投递|申请|沟通)/i.test(
      text,
    );
  if (englishRequired) return APPLICATION_LANGUAGE_PATHS.english;

  if (sourceGroup(item) === "chinese" || curated?.chineseFit) {
    if (
      /西语.{0,12}(?:良好|熟练|流利|工作沟通|B1|B2)|西班牙语.{0,12}(?:良好|熟练|流利|工作沟通|B1|B2)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.spanish;
    }
    if (
      /中文(?:可|能|沟通|友好|渠道|环境)|先用中文|中文电话|中文微信|华人(?:渠道|团队|公司|项目)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.chinese;
    }
    return APPLICATION_LANGUAGE_PATHS.chineseCheck;
  }

  if (language.key === "light") return APPLICATION_LANGUAGE_PATHS.english;
  return APPLICATION_LANGUAGE_PATHS.unknown;
}

function scoreLanguageRisk(item) {
  const evidencePath = applicationLanguagePath(item).key;
  return SCORE_LANGUAGE_RISK_OVERRIDES.get(Number(item.id)) || evidencePath;
}

function displayApplicationLanguagePath(item) {
  const evidencePath = applicationLanguagePath(item);
  const riskPath = scoreLanguageRisk(item);
  if (riskPath !== evidencePath.key && APPLICATION_LANGUAGE_PATHS[riskPath]) {
    return APPLICATION_LANGUAGE_PATHS[riskPath];
  }
  return evidencePath;
}

function roleLabels(item) {
  const curated = CURATED[item.id];
  if (curated) return { zh: curated.titleZh, es: curated.titleEs };

  const role = String(item.opportunity || "");
  for (const [pattern, labels] of ROLE_RULES) {
    if (pattern.test(role)) return { zh: labels[0], es: labels[1] };
  }

  if (/设计|美工|视觉|平面|品牌|运营|新媒体|视频|剪辑/.test(role)) {
    return {
      zh: role.replace(/\s*[-–]\s*[A-Za-z][\s\S]*$/, "").trim() || "设计相关岗位",
      es: DIRECTION_LABELS[directionKey(item)].es,
    };
  }

  const direction = DIRECTION_LABELS[directionKey(item)];
  return {
    zh: `${direction.zh}相关机会`,
    es: direction.es,
  };
}

function companyLabel(item) {
  if (CURATED[item.id]?.company) return CURATED[item.id].company;
  const role = String(item.opportunity || "");
  if (/电脑修图工作人员|商品图片处理/i.test(role)) return "匿名仓库雇主（需先核实）";
  if (/线上营销.*拍照.*修图|拍照、修图与网页基础/i.test(role)) return "Valencia 线上营销雇主（需先核实）";
  if (/鞋业电商运营|产品图、详情页与广告投放/i.test(role)) return "Yuncler 鞋业公司（疑似 JOMIX Spain）";
  if (/视频拍摄和剪辑师|巴塞罗那视频拍摄和剪辑师/i.test(role)) return "巴塞罗那个人发布者（需先核实）";
  let source = String(item.source || "未标明公司");
  if (/REDLINE/i.test(source)) return "REDLINE 传媒";
  if (/KLMED|SUNMED/i.test(source)) return "SUNMED / Grupo KLMED";
  if (/发布主体未披露|主体未披露/i.test(source)) return "未披露雇主（需先核实）";
  source = source
    .replace(/\s+via\s+.+$/i, "")
    .replace(/\s*\/\s*(Xihua|Huarenjie|InfoHuaxin|Eulam|ES02|LinkedIn|西华论坛|华人街|华人通).*$/i, "")
    .replace(/\s*\+\s*.+$/, "")
    .trim();
  return source || "未标明公司";
}

function sourceLabel(item) {
  return SOURCE_LABELS[sourceGroup(item)];
}

function tierLabel(tier) {
  return {
    A: "A · 立即优先",
    B: "B · 值得投",
    C: "C · 备选",
    D: "D · 冷投观察",
    X: "X · 排除",
  }[tier] || "未分级";
}

function isStale(item) {
  return applicationStatus(item).key !== "live";
}

// Appspace's cached Greenhouse snippets kept showing the old role after the
// official detail began redirecting to the current board. Keep this exact
// requisition in history until a fresh employer-board check restores it.
function isKnownClosedRoute(item) {
  const text = `${item.source || ""} ${item.opportunity || ""} ${item.contact || ""} ${item.searchText || ""}`;
  return /appspace/i.test(text) && /5813989004/.test(text);
}

function applicationStatus(item) {
  // Round 709: these three official current routes have readable application
  // paths in their latest audits; do not let older curated verify snapshots
  // hide the current submission route.
  if ([55, 224, 886, 920001, 930711, 930719].includes(Number(item?.id))) {
    return { key: "live", label: "页面显示可投" };
  }
  if (Number(item?.id) === 999999) {
    return { key: "closed", label: "已关闭 / 历史" };
  }
  // Round 708: the current Chinese-source category index is evidence that
  // the canonical Barcelona lead is present again, but its individual detail
  // route is still unreadable; never let the older curated live snapshot
  // overrule the newer verify-first audit.
  if (Number(item?.id) === 778 && item?.tier !== "X") {
    return { key: "verify", label: "需先确认状态" };
  }
  if (isKnownClosedRoute(item)) {
    return { key: "closed", label: "已关闭 / 历史" };
  }
  // A later direct original-page audit must override any earlier curated
  // “live” snapshot. ATS pages commonly stay indexed after applications
  // close, so explicit closure wording is the stronger evidence.
  const explicitClosureText = String(item.status || "");
  if (
    /^closed\/(?:history|historical):/i.test(explicitClosureText) &&
    /no longer accept|no longer active|no longer available|ya no se aceptan|archived|expired|\bclosed\b|couldn['’]t find this job|this job doesn['’]t exist|this job was removed|page you are looking for doesn['’]t exist/i.test(
      explicitClosureText,
    )
  ) {
    return { key: "closed", label: "已关闭 / 历史" };
  }
  const curated = CURATED[item.id];
  if (curated?.statusKey) {
    return {
      key: curated.statusKey,
      label: { live: "页面显示可投", verify: "需先确认状态", closed: "已关闭 / 历史" }[curated.statusKey],
    };
  }

  const text = `${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""} ${item.contact || ""}`;
  if (
    /no longer accept|no longer active|no longer available|ya no se aceptan|archived|expired|\bclosed\b|redirects? to (?:an )?expired|listing has just closed|not a live confirmed opening|couldn['’]t find this job|this job doesn['’]t exist|this job was removed|page you are looking for doesn['’]t exist|已过期|已关闭|不再接受|已经下架|官方已下架|已撤下|职位已关闭|不能按在招|已被.{0,24}(?:替代|取代)/i.test(
      text,
    )
  ) {
    return { key: "closed", label: "已关闭 / 历史" };
  }
  if (/(?:需先确认|需要确认|地点冲突|状态冲突|region[- ]eligibility conflict|location conflict|verify[- ]first|must be confirmed|confirm before|returns? 404|error=true|not found)/i.test(text)) {
    return { key: "verify", label: "需先确认状态" };
  }
  if (
    /still (?:has|shows).{0,20}(?:apply|solicitar)|(?:has|with) (?:an? )?(?:apply|solicitar)|shows? [“"]?(?:apply|solicitar)|visibly shows.{0,250}apply for this job|apply for this role|live with apply|仍有[“"]?Solicitar|仍显示[“"]?(?:Apply|Solicitar|申请|投递)|可直接申请|可直接提交|仍可申请|官方.{0,24}(?:申请|投递).{0,16}(?:开放|入口)|live.{0,20}(?:role|vacancy|application)|current.{0,24}(?:apply|application)|显示“Enviar solicitud”|显示“ENVÍA TU CV”/i.test(
      text,
    )
  ) {
    return { key: "live", label: "页面显示可投" };
  }
  return { key: "verify", label: "需先确认状态" };
}

function getStatusSummary(records = dedupedData) {
  return records.reduce(
    (counts, item) => {
      const key = applicationStatus(item).key;
      if (Object.prototype.hasOwnProperty.call(counts, key)) counts[key] += 1;
      return counts;
    },
    { live: 0, verify: 0, closed: 0 },
  );
}

function freshnessInfo(item) {
  const labels = {
    week: "7 天内发布",
    month: "30 天内发布",
    quarter: "近 3 个月",
    older: "超过 3 个月",
    old: "发布时间较早",
    unknown: "发布时间未确认",
  };
  return {
    key: item.freshnessTag || "unknown",
    label: labels[item.freshnessTag] || labels.unknown,
    date: item.postedAt || "",
  };
}

function genericReason(item) {
  const text = String(item.searchText || "");
  if (item.tier === "X") {
    if (/线上代理|电商代理|订单处理|上传单号|tracking|不会可教/i.test(text)) {
      return "发布者未实名，也未公开公司、薪资、合同、地址或保险；相同文案还在多个国家的华人网站重复出现，真实性与用工关系无法核验。";
    }
    if (isStale(item)) return "岗位已关闭、过期或只剩历史参考价值，不应占用当前申请时间。";
    return "公开信息不足或风险信号较强，暂不达到可投标准。";
  }
  const direction = DIRECTION_LABELS[directionKey(item)].zh;
  const source = sourceGroup(item);
  const sourceText =
    source === "chinese"
      ? "来自华人或中文渠道，沟通环境相对友好。"
      : source === "linkedin"
        ? "来自领英，岗位信息通常更完整，但应仔细核对语言与身份要求。"
        : "来自公司官网或机构渠道，适合直接核对当前开放状态。";
  const freshness = isStale(item) ? "信息可能较旧，价值主要在于先询问是否仍开放。" : "";
  return `${item.tier === "A" ? "高优先级" : item.tier === "B" ? "值得尝试" : "可作为补充"}的${direction}机会。${sourceText}${freshness}`;
}

function genericNext(item) {
  if (item.tier === "X") {
    const text = String(item.searchText || "");
    if (/线上代理|电商代理|订单处理|上传单号|tracking|不会可教/i.test(text)) {
      return "仅作为风险样本保留：不要提供身份证、银行卡、验证码或账号密码，不要代付、垫款、刷单或替对方收付款。";
    }
    return "不建议投入申请时间，仅保留为排除或历史记录。";
  }
  if (isStale(item)) return "先用邮件、电话或微信确认岗位是否仍开放，得到肯定答复后再发送完整材料。";
  const direction = directionKey(item);
  const portfolio = {
    brand: "品牌识别、VI 系统和跨媒介延展",
    digital: "网页、落地页、广告素材和数字品牌延展",
    social: "社媒视觉、短视频封面、剪辑和内容栏目",
    ecommerce: "产品图、电商 Banner、详情页和店铺视觉",
    production: "菜单、招牌、海报、传单和印刷落地",
    motion: "品牌动效、视频与跨渠道动态延展",
    other: "最贴近岗位职责的",
  }[direction];
  return `打开原招聘渠道核对状态，准备一份精简简历，并优先展示${portfolio}案例。`;
}

function signalList(item) {
  const text = String(item.searchText || "");
  const signals = [];
  const freshness = freshnessInfo(item);

  if (freshness.date) {
    signals.push(`记录中的最近发布日期：${freshness.date}（${freshness.label}）。`);
  } else if (isStale(item)) {
    signals.push("信息存在旧帖或历史记录信号，第一步应确认是否仍开放。");
  } else {
    signals.push("公开记录未确认发布日期，投递前应打开原链接复核。");
  }

  signals.push(`经验门槛：${experienceInfo(item).label}。`);

  const salaryMatches = text.match(
    /(?:€|EUR|USD|\$|GBP|£)\s?[\d,.]+(?:\s?[-–]\s?(?:€|EUR|USD|\$|GBP|£)?\s?[\d,.]+)?(?:\/month|\/year|\/day|\/hour|\/月|\/年|\/天|\/小时)?/i,
  );
  if (salaryMatches) signals.push(`原信息出现薪资：${salaryMatches[0]}。`);
  else if (/salary|薪资|工资|薪水/i.test(text)) signals.push("原信息提到了薪资，但需要在展开的原始记录中核对具体条件。");
  else signals.push("公开记录中没有清晰、可直接比较的薪资范围。");

  if (/work residence|work permit|legal residence|legal right to work|工作居留|合法工作|居留/i.test(text)) {
    signals.push("岗位可能要求西班牙合法工作身份或工作居留。");
  }
  if (/portfolio|作品集/i.test(text)) signals.push("申请时需要或强烈建议附上作品集。");
  if (/school internship agreement|internship agreement|学校实习协议/i.test(text)) {
    signals.push("这是实习路线，需要学校提供实习协议。");
  }
  if (/full-time|全职/i.test(text)) signals.push("记录显示为全职方向。");
  else if (/part-time|part time|兼职/i.test(text)) signals.push("记录显示为兼职方向。");
  else if (/internship|intern|实习/i.test(text)) signals.push("记录显示为实习方向。");

  return [...new Set(signals)].slice(0, 5);
}

function contactTokens(item) {
  const text = String(item.contact || "");
  const tokens = [];
  const emails = [...text.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((match) => match[0]);
  emails.slice(0, 3).forEach((email) => tokens.push({ label: `邮箱：${email}`, href: `mailto:${email}` }));

  const phoneText = text.replace(/https?:\/\/\S+/gi, " ").replace(/mailto:\S+/gi, " ");
  const phones = [...phoneText.matchAll(/(?:\+34[\s.-]*)?(?:\d[\s.-]*){9}/g)]
    .map((match) => match[0].trim())
    .filter((value) => !/202[0-9]/.test(value.replace(/\D/g, "")));
  [...new Set(phones)].slice(0, 3).forEach((phone) => {
    const digits = phone.replace(/\D/g, "");
    const dialNumber = digits.length === 9 ? `+34${digits}` : `+${digits}`;
    tokens.push({ label: `电话：${phone}`, href: `tel:${dialNumber}` });
  });

  const wechat = text.match(/(?:WeChat|微信)\s*[:：]?\s*([A-Za-z0-9_-]{4,})/i);
  if (wechat) tokens.push({ label: `微信：${wechat[1]}` });

  if (!tokens.length) tokens.push({ label: "联系方式请在原招聘页面中查看" });
  return tokens;
}

function linkLabel(href, index) {
  if (href.startsWith("mailto:")) return "发送邮件";
  if (href.startsWith("tel:")) return "拨打招聘电话";
  if (/linkedin\.[^/]+\/jobs\/view/i.test(href)) return "领英投递";
  if (/\/(?:apply|application)(?:\/|$|\?)/i.test(href)) return "直接申请";
  if (/xihua/i.test(href)) return "查看西华招聘";
  if (/huarenjie/i.test(href)) return "查看华人街招聘";
  if (/eulam\.infohuaxin/i.test(href)) return "打开欧浪新版详情";
  if (/infohuaxin/i.test(href)) return "华信传统页（可能失效）";
  if (/wa\.me/i.test(href)) return "WhatsApp 联系";
  if (/leeeu/i.test(href)) return "查看乐在欧洲招聘";
  if (/xbyhr/i.test(href)) return "查看西班牙同城网招聘";
  if (/es02/i.test(href)) return "查看华人通招聘";
  if (/99876/i.test(href)) return "查看 99876 华人招聘";
  if (/\.pdf(?:$|\?)/i.test(href)) return "查看招聘 PDF";
  if (/job_posting|job-boards\.greenhouse\.io\/.+\/jobs\/\d|jobs\.ashbyhq\.com\/.+\/[0-9a-f-]{20,}|jobs\.personio\.com\/job\/\d|teamtailor\.com\/jobs\/\d|myworkdayjobs\.com\/.+\/job\//i.test(href)) return "查看官方职位";
  if (/career|careers|jobs/i.test(href)) return "公司招聘页";
  if (/insbrand|infiled|tineco/i.test(href)) return "公司官网";
  return index === 0 ? "打开投递渠道" : "补充资料";
}

function sourceEvidenceLinks(item) {
  const raw = Array.isArray(item.links) ? item.links : item.links ? [item.links] : [];
  const contactUrls = String(item.contact || "").match(/https?:\/\/[^\s<>"'，。；;）】)]+/gi) || [];
  return [...new Set([...raw, ...contactUrls])]
    .map((href) => String(href).replace(/[),.;!?，。；）】]+$/g, ""))
    .filter((href) => /^https?:\/\//i.test(href));
}

function sourceEvidenceLabel(href) {
  if (/bbs\.eus/i.test(href)) return "打开 BBS 来源页";
  if (/infohuaxin|eulam/i.test(href)) return "打开华信来源页";
  if (/xihua/i.test(href)) return "打开西华原帖";
  if (/huarenjie/i.test(href)) return "打开华人街原帖";
  return "查看原始来源";
}

function renderLinks(item, node, compact = false) {
  node.innerHTML = "";
  const links = toLinks(item).slice(0, compact ? 2 : 3);
  if (!links.length) {
    const evidenceLinks = sourceEvidenceLinks(item).slice(0, compact ? 1 : 2);
    evidenceLinks.forEach((href) => {
      const link = document.createElement("a");
      link.className = "action-link action-link--evidence";
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.title = "来源证据页，不代表当前开放或可直接投递";
      link.textContent = sourceEvidenceLabel(href);
      node.appendChild(link);
    });
    if (evidenceLinks.length) return;

    const span = document.createElement("span");
    span.className = "no-link";
    span.textContent =
      sourceGroup(item) === "chinese"
        ? "原帖无有效深链接；请展开联系方式核实"
        : "暂无可直接打开的投递链接";
    node.appendChild(span);
    return;
  }

  links.forEach((href, index) => {
    const link = document.createElement("a");
    link.className = index === 0 ? "action-link action-link--primary" : "action-link";
    link.href = href;
    link.target = href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank";
    link.rel = "noreferrer";
    link.textContent = linkLabel(href, index);
    node.appendChild(link);
  });
}

function renderRaw(item, node) {
  node.innerHTML = "";
  const keyLabels = {
    "Fit / location": "匹配度 / 地点",
    "Status / language / compensation": "状态 / 语言 / 薪资",
    "Analysis / next action": "分析 / 下一步",
    "Original detail / application route": "原始详情 / 投递渠道",
    "Role": "岗位",
    "Role / result": "岗位 / 结果",
    "Company / channel": "公司 / 渠道",
    "Status/evidence": "状态 / 证据",
    "Source/channel": "来源 / 渠道",
    "Location": "地点",
    "Contact/application": "联系方式 / 投递",
    "Priority fit": "优先级匹配",
    "Opportunity": "机会",
    "Why it matters / caution": "价值 / 注意事项",
    "Status / evidence": "状态 / 证据",
    "Contact / application": "联系方式 / 投递",
    "Priority": "优先级",
  };
  const rows = item.rawColumns || {};
  Object.entries(rows).forEach(([key, value]) => {
    if (!String(value || "").trim()) return;
    const row = document.createElement("div");
    row.className = "raw-row";
    row.innerHTML = `<strong>${escapeHtml(keyLabels[key] || key)}</strong><p>${linkifyOriginal(value)}</p>`;
    node.appendChild(row);
  });
}

function linkifyOriginal(value) {
  const safe = escapeHtml(value);
  return safe.replace(
    /(https?:\/\/[^\s;，]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi,
    (match) => {
      const href = match.includes("@") && !match.startsWith("http") ? `mailto:${match}` : match;
      return `<a href="${href}" target="_blank" rel="noreferrer">${match}</a>`;
    },
  );
}

function identityKey(item) {
  const links = toLinks(item);
  // Bending Spoons exposes the same Media Designer requisition through an
  // official detail, an application route and employer LinkedIn mirrors.
  // Normalize every representation before ID aliases so a refreshed mirror
  // cannot reappear as an extra vacancy.
  if (
    links.some((link) => /69d588c142e4c7b7a3dd14ee|4450907880/i.test(link)) ||
    /69d588c142e4c7b7a3dd14ee|4450907880/i.test(`${item.contact || ""} ${item.searchText || ""}`)
  ) {
    return "ats:bending-spoons:69d588c142e4c7b7a3dd14ee";
  }
  // Revolut can expose the same requisition through locale-specific career
  // URLs and LinkedIn mirrors. Reopening the exact role must replace its old
  // closed snapshot, not create a second deduped identity.
  if (
    links.some((link) => /graphic-designer-employer-branding-d47d1c9b-3e07-4878-84d7-5841dd3930d8/i.test(link)) ||
    /d47d1c9b-3e07-4878-84d7-5841dd3930d8/i.test(`${item.contact || ""} ${item.searchText || ""}`)
  ) {
    return "ats:revolut:d47d1c9b-3e07-4878-84d7-5841dd3930d8";
  }
  // This requisition has repeatedly re-entered the tracker as a fresh row
  // after Teamtailor closed it. Match the official requisition before legacy
  // id aliases so the closure audit and every regenerated mirror share one
  // identity.
  if (links.some((link) => /careers\.eurofragance\.com\/jobs\/7079723-/i.test(link))) {
    return "ats:eurofragance:7079723";
  }
  const alias = IDENTITY_ALIASES[item.id];
  if (alias) return `alias:${alias}`;

  const specific = links.find((link) =>
    /\/jobs\/view\/|\/jobs\/\d+-|job-boards\.greenhouse\.io\/[^/]+\/jobs\/\d+|careers\.eurofragance\.com\/jobs\/|jobs\.ashbyhq\.com\/[^/]+\/[0-9a-f-]{20,}|viewthread|info-\d+|\.pdf(?:$|\?)|\/S\d+\.html/i.test(link),
  );
  if (specific) {
    try {
      const url = new URL(specific);
      const tid = url.searchParams.get("tid");
      return tid ? `${url.hostname}${url.pathname}?tid=${tid}` : `${url.hostname}${url.pathname}`;
    } catch {
      return specific.toLowerCase();
    }
  }
  return `${companyLabel(item)}|${String(item.opportunity || "")}`
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, "");
}

function dedupe(records) {
  const preference = (item) =>
    // This official Eurofragance closure audit is stronger than an older
    // index/aggregator snapshot using the exact same requisition URL. It is
    // deliberately narrow: broad closure preference would incorrectly merge
    // different historical and current requisitions under shared aliases.
    (MY_OPPORTUNITY_SET.has(Number(item.id)) ? 2000000 : 0) +
    (identityKey(item) === "ats:eurofragance:7079723" && applicationStatus(item).key === "closed" ? 1000000 : 0) +
    (CURATED[item.id]?.changeType === "refresh" ? 100000 : 0) +
    (item.postedAt ? 10000 : 0) +
    (item.score || 0);
  const sorted = [...records].sort((a, b) => preference(b) - preference(a));
  const seen = new Set();
  return sorted.filter((item) => {
    const key = identityKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const dedupedData = dedupe(allData);
function auditSection(item) {
  return String(CURATED[item.id]?.latestAuditSection || CURATED[item.id]?.auditSection || item.section || "");
}

function roundRank(item) {
  const section = auditSection(item);
  if (!/(第.+轮|Round\s*\d+)/i.test(section)) return null;
  const dateMatch = section.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
  const date = dateMatch ? Date.parse(`${dateMatch[1]}T00:00:00Z`) : 0;
  const englishRound = Number(section.match(/Round\s*(\d+)/i)?.[1] || 0);
  return { date, englishRound, id: Number(item.id) || 0, section };
}

const latestRoundSection = allData.reduce((latest, item) => {
  const candidate = roundRank(item);
  if (!candidate) return latest;
  if (
    candidate.date > latest.date ||
    (candidate.date === latest.date && candidate.englishRound > latest.englishRound) ||
    (candidate.date === latest.date && candidate.englishRound === latest.englishRound && candidate.id > latest.id)
  ) {
    return candidate;
  }
  return latest;
}, { date: 0, englishRound: 0, id: 0, section: "" }).section;
// “本轮变化” is an audit log as well as a discovery queue. Keep cards moved
// to history visible here, so a closure-only round never looks empty.
const latestRoundItems = dedupe(allData.filter((item) => auditSection(item) === latestRoundSection));
const priorityItems = PRIORITY_IDS.map((id) => allData.find((item) => item.id === id))
  .filter(Boolean);
sortRecords(priorityItems);

function progressKey(item) {
  return identityKey(item);
}

function progressValue(item) {
  return savedProgress[progressKey(item)] || "untracked";
}

function saveProgressValue(item, value) {
  const key = progressKey(item);
  if (value === "untracked") delete savedProgress[key];
  else savedProgress[key] = value;
  try {
    window.localStorage?.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(savedProgress));
  } catch {
    // The board still works when storage is unavailable or blocked.
  }
}

function createProgressControl(item) {
  const label = document.createElement("label");
  label.className = "progress-control";
  const caption = document.createElement("span");
  caption.textContent = "我的进度";
  const select = document.createElement("select");
  select.setAttribute("aria-label", `${companyLabel(item)}：我的投递进度`);
  Object.entries(PROGRESS_LABELS).forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.value = progressValue(item);
  select.addEventListener("change", () => {
    saveProgressValue(item, select.value);
    renderPriority();
    renderResults();
  });
  label.append(caption, select);
  return label;
}

function chineseOutreachText(item) {
  const role = roleLabels(item).zh.replace(/（[^）]+）/g, "");
  const company = companyLabel(item);
  const focus = {
    brand: "品牌视觉、VI 和数字品牌延展",
    digital: "数字品牌视觉、网页与多渠道延展",
    social: "社媒视觉、短视频与品牌内容",
    ecommerce: "产品图、详情页和电商视觉",
    production: "平面设计、菜单、招牌和印刷落地",
    motion: "品牌动效、视频与动态视觉系统",
    other: "视觉设计与内容制作",
  }[directionKey(item)];
  return `你好，我看到${company}在招聘“${role}”。我目前在巴塞罗那，主要做${focus}，中文沟通没有问题，西语和英语还在学习。请问这个岗位现在还在招聘吗？日常工作能否主要用中文沟通？如果合适，我可以先发作品集和简历给您。谢谢！`;
}

function englishOutreachText(item) {
  const role = roleLabels(item).es || roleLabels(item).zh;
  const company = companyLabel(item);
  const focus = {
    brand: "brand identity, visual systems, and cross-channel brand extensions",
    digital: "digital brand design, landing pages, and multichannel assets",
    social: "social visuals, short-form video, and branded content",
    ecommerce: "product visuals, e-commerce pages, and campaign assets",
    production: "graphic design, print materials, and production-ready artwork",
    motion: "brand motion, video, and dynamic visual systems",
    other: "visual design and branded content",
  }[directionKey(item)];
  return {
    en: `Hello, I’m interested in the “${role}” position at ${company}. I’m based in Barcelona and specialize in ${focus}. Before applying, could you please confirm the main working language and whether the role requires frequent client-facing English? I can share my CV and portfolio. Thank you.`,
    zh: `中文意思：你好，我对 ${company} 的“${role}”岗位感兴趣。我目前在巴塞罗那，主要做相关视觉设计。正式申请前，想先确认主要工作语言，以及这个岗位是否需要经常用英语面对客户沟通。我可以发送简历和作品集。谢谢。`,
  };
}

function createCopyButton(text, label = "复制中文询问") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-message-button";
  button.textContent = label;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    button.textContent = "已复制，可以直接发送";
    window.setTimeout(() => {
      button.textContent = label;
    }, 2200);
  });
  return button;
}

function renderPriority() {
  els.priorityGrid.innerHTML = "";
  els.languageCautionGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const cautionFragment = document.createDocumentFragment();
  let primaryRank = 0;
  let cautionRank = 0;

  priorityItems.forEach((item) => {
    const card = els.priorityTemplate.content.firstElementChild.cloneNode(true);
    const labels = roleLabels(item);
    const curated = CURATED[item.id];
    const freshness = freshnessInfo(item);
    const applicationLanguage = displayApplicationLanguagePath(item);
    // The main row is reserved for a Chinese-first contact path. A role can be
    // professionally relevant and still belong in the caution row when it
    // requires English, Spanish or even basic Spanish for day-to-day work.
    const isPrimary = ["chinese", "chineseCheck"].includes(applicationLanguage.key);
    const rank = isPrimary ? ++primaryRank : ++cautionRank;

    card.querySelector(".priority-card__rank").textContent = String(rank).padStart(2, "0");
    card.querySelector(".priority-card__tier").textContent = tierLabel(item.tier);
    card.querySelector(".priority-card__company").textContent = curated?.company || companyLabel(item);
    card.querySelector(".priority-card__title").textContent = labels.zh;
    card.querySelector(".priority-card__title-es").textContent = labels.es;
    card.querySelector(".priority-card__meta").innerHTML = `
      <span>${escapeHtml(DIRECTION_LABELS[directionKey(item)].zh)}</span>
      <span>${escapeHtml(locationLabel(item))}</span>
      <span>${escapeHtml(sourceLabel(item))}</span>
      <span>${escapeHtml(freshness.date ? `${freshness.date} · ${freshness.label}` : freshness.label)}</span>
      <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.label)}</span>
    `;
    card.querySelector(".priority-card__reason").textContent = curated?.reason || genericReason(item);
    card.querySelector(".priority-card__action").innerHTML = `<strong>下一步</strong><p>${escapeHtml(curated?.next || genericNext(item))}</p>`;
    const outreachText = chineseOutreachText(item);
    card.querySelector(".priority-card__outreach-text").textContent = outreachText;
    card.querySelector(".priority-card__outreach-actions").appendChild(createCopyButton(outreachText));
    card.querySelector(".priority-card__progress").appendChild(createProgressControl(item));
    renderLinks(item, card.querySelector(".priority-card__links"), true);
    if (isPrimary) {
      fragment.appendChild(card);
    } else {
      cautionFragment.appendChild(card);
    }
  });

  els.priorityGrid.appendChild(fragment);
  els.languageCautionGrid.appendChild(cautionFragment);
  const cautionSection = els.languageCautionGrid.closest("details");
  if (cautionSection) cautionSection.hidden = cautionRank === 0;
}

function baseRecords() {
  if (state.sourceLibrary === "chinese") {
    const chineseRecords = dedupedData.filter((item) => sourceGroup(item) === "chinese");
    return chineseRecords.filter((item) =>
      state.sourceLibraryView === "closed"
        ? isClosedLibraryRecord(item)
        : state.sourceLibraryView === "review"
          ? isReviewLibraryRecord(item)
          : !isClosedLibraryRecord(item) && !isReviewLibraryRecord(item),
    );
  }
  if (state.scope === "latestRound") {
    return latestRoundItems;
  }
  if (state.scope === "recentChinese") {
    return dedupedData.filter(
      (item) =>
        sourceGroup(item) === "chinese" &&
        ["week", "month"].includes(item.freshnessTag) &&
        item.tier !== "X",
    );
  }
  if (state.scope === "ab") return dedupedData.filter((item) => ["A", "B"].includes(item.tier));
  if (state.scope === "excluded") return dedupedData.filter((item) => item.tier === "X");
  return dedupedData.filter((item) => item.tier !== "X");
}

function matchesFilters(item, ignoreSource = false) {
  const query = els.searchInput.value.trim().toLowerCase();
  if (query && !String(item.searchText || "").toLowerCase().includes(query)) return false;
  if (!matchesPreset(item)) return false;
  if (els.validRouteOnly.checked && toLinks(item).length === 0) return false;
  if (els.excludeLowPay.checked && hasLowPayRisk(item)) return false;
  if (els.excludeInternships.checked && isInternshipRole(item)) return false;
  if (els.directionFilter.value !== "all" && directionKey(item) !== els.directionFilter.value) return false;
  if (
    els.locationFilter.value === "priority" &&
    !["barcelona", "remote"].includes(locationBucket(item))
  ) {
    return false;
  }
  if (
    !["all", "priority"].includes(els.locationFilter.value) &&
    locationBucket(item) !== els.locationFilter.value
  ) {
    return false;
  }
  if (
    els.languageFilter.value !== "all" &&
    scoreLanguageRisk(item) !== els.languageFilter.value
  ) {
    return false;
  }
  const status = applicationStatus(item).key;
  if (els.statusFilter.value === "open" && status === "closed") return false;
  if (!["all", "open"].includes(els.statusFilter.value) && status !== els.statusFilter.value) return false;
  const freshness = els.freshnessFilter.value;
  if (freshness === "week" && item.freshnessTag !== "week") return false;
  if (freshness === "month" && !["week", "month"].includes(item.freshnessTag)) return false;
  if (freshness === "quarter" && !["week", "month", "quarter"].includes(item.freshnessTag)) return false;
  if (freshness === "dated" && !/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return false;
  if (freshness === "unknown" && item.freshnessTag !== "unknown") return false;
  const labor = els.laborFilter.value;
  if (labor === "formal" && !isFormalRole(item)) return false;
  if (labor === "knownPay" && !hasKnownCompensation(item)) return false;
  if (labor === "freelance" && !isFreelanceRole(item)) return false;
  if (labor === "internship" && !isInternshipRole(item)) return false;
  if (labor === "payUnknown" && hasKnownCompensation(item)) return false;
  if (els.experienceFilter.value !== "all" && experienceInfo(item).key !== els.experienceFilter.value) {
    return false;
  }
  const risks = riskFlags(item);
  if (
    els.riskFilter.value === "clear" &&
    (risks.length > 0 || applicationStatus(item).key !== "live" || isResearchOnly(item))
  ) {
    return false;
  }
  if (!["all", "clear"].includes(els.riskFilter.value) && !risks.includes(els.riskFilter.value)) {
    return false;
  }
  if (state.progressFilter !== "all" && progressValue(item) !== state.progressFilter) return false;
  if (!ignoreSource && state.source !== "all" && sourceGroup(item) !== state.source) return false;
  return true;
}

function isClosedLibraryRecord(item) {
  // Keep genuinely closed or non-vacancy research rows out of the usable pool.
  // A page can remain online after a vacancy closes, so page accessibility is
  // not treated as proof that the opening is live.
  return applicationStatus(item).key === "closed" || (isResearchOnly(item) && applicationStatus(item).key !== "verify");
}

function isReviewLibraryRecord(item) {
  // Unconfirmed pages, including X-tier/risk-tagged rows, belong in a review
  // queue instead of being labelled closed. This preserves evidence for a
  // manual recheck without promoting it to the usable pool.
  return (
    applicationStatus(item).key === "verify" &&
    (
      ["D", "X"].includes(item.tier) ||
      isResearchOnly(item) ||
      toLinks(item).length === 0 ||
      ["quarter", "older", "old"].includes(item.freshnessTag)
    )
  );
}

function updateSourceCounts(records) {
  const base = records.filter((item) => matchesFilters(item, true));
  const chineseLibrarySize = dedupedData.filter((item) => sourceGroup(item) === "chinese").length;
  const chineseActiveRecords = dedupedData.filter(
    (item) =>
      sourceGroup(item) === "chinese" &&
      !isClosedLibraryRecord(item) &&
      !isReviewLibraryRecord(item),
  );
  const chineseReviewRecords = dedupedData.filter(
    (item) => sourceGroup(item) === "chinese" && isReviewLibraryRecord(item),
  );
  const chineseClosedRecords = dedupedData.filter(
    (item) => sourceGroup(item) === "chinese" && isClosedLibraryRecord(item),
  );
  // Keep badge counts aligned with the cards currently rendered. The old
  // badge counted the whole active pool (55) while the default filters only
  // rendered the seven Barcelona/remote cards that passed them.
  const visibleUnderCurrentFilters = (item) => matchesFilters(item, true);
  const chineseActiveSize = chineseActiveRecords.filter(visibleUnderCurrentFilters).length;
  const chineseReviewSize = chineseReviewRecords.filter(visibleUnderCurrentFilters).length;
  const chineseClosedSize = chineseClosedRecords.filter(visibleUnderCurrentFilters).length;
  els.allSourceCount.textContent = base.length;
  // The source-tab badge is the deduped Chinese-source library total. The
  // active/closed split is shown separately below it; showing only the active
  // count here made the library appear to shrink from the previous raw total.
  els.chineseCount.textContent = chineseLibrarySize;
  els.chineseActiveCount.textContent = chineseActiveSize;
  els.chineseReviewCount.textContent = chineseReviewSize;
  els.chineseClosedCount.textContent = chineseClosedSize;
  els.linkedinCount.textContent = base.filter((item) => sourceGroup(item) === "linkedin").length;
  els.otherCount.textContent = base.filter((item) => sourceGroup(item) === "other").length;
  const chineseRawCount = allData.filter((item) => sourceGroup(item) === "chinese").length;
  els.sourceTabsNote.textContent =
    state.sourceLibrary === "chinese"
      ? state.sourceLibraryView === "review"
        ? `当前查看页面仍可复核分栏，共 ${chineseReviewSize} 条；页面仍可打开，但岗位状态、雇主或投递入口尚未确认。中文来源原始线索共 ${chineseRawCount} 条。`
        : state.sourceLibraryView === "closed"
        ? `当前查看关闭 / 历史 / 排除分栏，共 ${chineseClosedSize} 条；这些记录保留作证据和复盘，不应占用当前申请时间。中文来源原始线索共 ${chineseRawCount} 条。`
        : `当前查看华人中文全库可用池，共 ${chineseActiveSize} 条；数字与当前显示的卡片数量保持一致。Barcelona 卡片按分数优先，马德里和其他城市在这里保留并带地点标签。中文来源原始线索共 ${chineseRawCount} 条。`
      : `来源分布按当前筛选统计；点击“华人中文全库（去重）”可进入中文来源分栏。原始中文来源线索共 ${chineseRawCount} 条。`;
}

function renderResultCard(item) {
  const card = els.resultTemplate.content.firstElementChild.cloneNode(true);
  const role = roleLabels(item);
  const direction = DIRECTION_LABELS[directionKey(item)];
  const language = languageInfo(item);
  const applicationLanguage = displayApplicationLanguagePath(item);
  const group = sourceGroup(item);
  const curated = CURATED[item.id];
  const freshness = freshnessInfo(item);
  const application = applicationStatus(item);
  const labor = laborConditionInfo(item);

  card.dataset.tier = item.tier || "";
  card.dataset.score = String(displayedScore(item));
  card.querySelector(".result-card__badges").innerHTML = `
    <span class="tier-badge tier-badge--${escapeHtml(item.tier || "none")}">${escapeHtml(tierLabel(item.tier))}</span>
    ${curated?.changeType === "new" ? '<span class="change-badge change-badge--new">本轮新增</span>' : ""}
    ${curated?.changeType === "refresh" ? '<span class="change-badge change-badge--refresh">状态更新</span>' : ""}
    <span class="source-badge">${escapeHtml(SOURCE_LABELS[group])}</span>
    ${group !== "chinese" && isChineseRelevant(item) ? '<span class="china-badge">中文相关</span>' : ""}
    ${isResearchOnly(item) ? '<span class="research-badge">研究线索</span>' : ""}
    <span class="source-badge">${escapeHtml(freshness.date ? `${freshness.date} · ${freshness.label}` : freshness.label)}</span>
    <span class="${application.key === "closed" ? "closed-badge" : application.key === "verify" ? "warning-badge" : "live-badge"}">${escapeHtml(application.label)}</span>
    <span class="source-badge">${escapeHtml(labor.label)}</span>
    ${hasKnownCompensation(item) ? '<span class="live-badge">薪资金额公开</span>' : '<span class="warning-badge">薪资待确认</span>'}
    <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.short)}</span>
    ${riskFlags(item).includes("spanish") ? '<span class="warning-badge">本地语言硬门槛</span>' : ""}
    ${riskFlags(item).includes("english") ? '<span class="warning-badge">需要英文材料 / 沟通</span>' : ""}
    ${riskFlags(item).includes("foreign") ? '<span class="warning-badge">其他外语工作门槛</span>' : ""}
    ${riskFlags(item).includes("lowpay") ? '<span class="warning-badge">低薪 / 无薪风险</span>' : ""}
    ${riskFlags(item).includes("internship") ? '<span class="warning-badge">实习 / 协议限制</span>' : ""}
    ${riskFlags(item).includes("opaque") ? '<span class="warning-badge">匿名客户 / 聚合入口</span>' : ""}
  `;
  card.querySelector(".result-card__company").textContent = companyLabel(item);
  card.querySelector(".result-card__title").textContent = role.zh;
  card.querySelector(".result-card__title-es").textContent = role.es;
  card.querySelector(".result-card__direction").textContent = direction.zh;
  card.querySelector(".result-card__direction-es").textContent = direction.es;
  card.querySelector(".result-card__location").textContent = locationLabel(item);
  card.querySelector(".result-card__language").textContent = applicationLanguage.label;
  card.querySelector(".result-card__language-detail").textContent = language.label;
  card.querySelector(".result-card__reason").textContent = curated?.reason || genericReason(item);
  card.querySelector(".result-card__next").textContent = curated?.next || genericNext(item);
  const personalized = ["mine", "profile"].includes(state.preset);
  card.querySelector(".result-card__score").textContent = displayedScore(item);
  card.querySelector(".result-card__score-label").textContent = personalized ? "我的匹配分" : "综合分";
  if (item.tier === "X") {
    card.querySelector(".result-card__reason-label").textContent = "为什么排除";
    card.querySelector(".result-card__score-label").textContent = "记录分";
    card.querySelector(".result-card__next-label").textContent = "安全提醒";
  }

  card.querySelector(".result-card__progress").appendChild(createProgressControl(item));
  renderLinks(item, card.querySelector(".result-card__links"));

  const outreachWrap = card.querySelector(".result-card__outreach-wrap");
  const outreachTitle = card.querySelector(".result-card__outreach-title");
  const outreachTextNode = card.querySelector(".result-card__outreach");
  const outreachTranslation = card.querySelector(".result-card__outreach-translation");
  const outreachActions = card.querySelector(".result-card__outreach-actions");
  if (["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage.key)) {
    const outreachText = chineseOutreachText(item);
    outreachTitle.textContent = "可直接发送的中文询问";
    outreachTextNode.textContent = outreachText;
    outreachActions.appendChild(createCopyButton(outreachText));
  } else if (
    ["english", "englishLikely", "englishSpanish", "englishSpanishLikely"].includes(
      applicationLanguage.key,
    )
  ) {
    const outreach = englishOutreachText(item);
    outreachWrap.classList.add("result-card__outreach-wrap--english");
    outreachTitle.textContent = "英文询问模板（附中文意思）";
    outreachTextNode.textContent = outreach.en;
    outreachTranslation.hidden = false;
    outreachTranslation.textContent = outreach.zh;
    outreachActions.appendChild(createCopyButton(outreach.en, "复制英文询问"));
  } else {
    outreachWrap.hidden = true;
  }

  const contactNode = card.querySelector(".result-card__contact");
  contactTokens(item).forEach((token) => {
    const element = token.href ? document.createElement("a") : document.createElement("span");
    element.className = "contact-token";
    element.textContent = token.label;
    if (token.href) element.href = token.href;
    contactNode.appendChild(element);
  });

  const signalsNode = card.querySelector(".result-card__signals");
  signalList(item).forEach((signal) => {
    const li = document.createElement("li");
    li.textContent = signal;
    signalsNode.appendChild(li);
  });

  renderRaw(item, card.querySelector(".result-card__raw"));
  return card;
}

function renderResults() {
  const records = baseRecords();
  updateSourceCounts(records);
  const visible = records.filter((item) => matchesFilters(item));
  sortRecords(visible);

  els.visibleCount.textContent = visible.length;
  els.resultsList.innerHTML = "";

  if (!visible.length) {
    els.resultsList.innerHTML = `
      <div class="empty-state">
        <strong>没有符合当前条件的机会</strong>
        <p>可以清除部分筛选，或切换到“A / B 值得投”“可投 + 冷联系”和“排除 / 已过期”。</p>
      </div>
    `;
    els.loadMore.hidden = true;
    els.loadMore.parentElement.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  visible.slice(0, state.limit).forEach((item, index) => {
    const card = renderResultCard(item);
    card.dataset.sortIndex = String(index);
    fragment.appendChild(card);
  });
  els.resultsList.appendChild(fragment);

  els.loadMore.hidden = visible.length <= state.limit;
  els.loadMore.parentElement.hidden = els.loadMore.hidden;
  if (!els.loadMore.hidden) {
    els.loadMore.textContent = `继续加载（还有 ${visible.length - state.limit} 条）`;
  }
}

function loadMoreResults() {
  if (autoLoading || els.loadMore.hidden) return;
  autoLoading = true;
  state.limit += 18;
  renderResults();
  window.requestAnimationFrame(() => {
    autoLoading = false;
  });
}

function resetLimitAndRender() {
  state.limit = 18;
  renderResults();
}

function syncPresetUi() {
  els.presetButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.preset === state.preset),
  );
  els.presetNote.textContent = PRESET_NOTES[state.preset] || PRESET_NOTES.none;
}

function syncScopeUi() {
  els.scopeButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.scope === state.scope),
  );
}

function syncSourceUi() {
  els.sourceTabs.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.source === state.source),
  );
}

function syncChineseLibraryUi() {
  const visible = state.sourceLibrary === "chinese";
  els.chineseLibraryViews.hidden = !visible;
  els.chineseLibraryViewButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.libraryView === state.sourceLibraryView),
  );
  els.chineseLibraryLocationButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.libraryLocation === state.sourceLibraryLocation),
  );
}

function syncProgressFilterUi() {
  els.progressFilterButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.progressFilter === state.progressFilter),
  );
}

function applyPreset(preset) {
  state.preset = preset;
  state.scope = ["mine", "profile", "actionable", "chinese", "core", "none"].includes(preset) ? "all" : "ab";
  state.source = "all";
  state.sourceLibrary = false;
  state.sourceLibraryView = "active";
  state.progressFilter = "all";
  els.searchInput.value = "";
  els.directionFilter.value = "all";
  // All named presets are Barcelona-first. Madrid remains available only
  // through an explicit location choice; it must never leak into the main
  // Chinese/brand browsing flow just because a source tab was opened.
  els.locationFilter.value = preset === "none" ? "all" : "priority";
  els.languageFilter.value = "all";
  els.statusFilter.value = "open";
  els.freshnessFilter.value = "all";
  els.sortFilter.value = "smart";
  els.laborFilter.value = "all";
  els.experienceFilter.value = "all";
  els.riskFilter.value = "all";
  els.validRouteOnly.checked = true;
  // “我的全部机会”必须真的展示整张已核验主表，不能再让隐藏的
  // 低薪/实习开关造成顶部数量和实际卡片数不一致。
  els.excludeLowPay.checked = ["actionable", "stable"].includes(preset);
  els.excludeInternships.checked = ["actionable", "stable"].includes(preset);
  syncPresetUi();
  syncScopeUi();
  syncSourceUi();
  syncChineseLibraryUi();
  syncProgressFilterUi();
  resetLimitAndRender();
}

function clearPresetForManualFilters() {
  state.preset = "none";
  state.sourceLibrary = false;
  state.sourceLibraryView = "active";
  // Every navigation/filter entry returns to the site's canonical order:
  // composite score, highest first. Alternative orders remain available only
  // when the user explicitly selects them in the sort control.
  els.sortFilter.value = "smart";
  syncPresetUi();
  syncChineseLibraryUi();
}

function activateChineseLibrary(view = "active") {
  state.scope = "all";
  state.source = "chinese";
  state.sourceLibrary = "chinese";
  state.sourceLibraryView = view;
  state.preset = "none";
  state.progressFilter = "all";
  els.searchInput.value = "";
  els.directionFilter.value = "all";
  // The Chinese source library defaults to the user's actual target: Barcelona
  // and Europe-remote. A small explicit “全部地点” toggle exposes the archive
  // without mixing Madrid into the main browsing stream.
  state.sourceLibraryLocation = "priority";
  els.locationFilter.value = "priority";
  els.languageFilter.value = "all";
  els.statusFilter.value = "all";
  els.freshnessFilter.value = "all";
  // The Chinese-community library is still a source view, not a freshness
  // view. Default it to the same score-descending order as the main board so
  // a 71-point card cannot appear before a 96-point card. Users can still
  // choose “最新发布” manually from the sort selector when needed.
  els.sortFilter.value = "smart";
  els.laborFilter.value = "all";
  els.experienceFilter.value = "all";
  els.riskFilter.value = "all";
  els.validRouteOnly.checked = false;
  els.excludeLowPay.checked = false;
  els.excludeInternships.checked = false;
  syncPresetUi();
  syncScopeUi();
  syncSourceUi();
  syncChineseLibraryUi();
  syncProgressFilterUi();
  resetLimitAndRender();
}

els.presetButtons.forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

els.scopeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.scope = button.dataset.scope;
    state.source = "all";
    state.sourceLibrary = false;
    state.sourceLibraryView = "active";
    syncScopeUi();
    syncSourceUi();
    syncChineseLibraryUi();
    resetLimitAndRender();
  });
});

els.sourceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.source === "chinese") {
      activateChineseLibrary();
      return;
    }
    clearPresetForManualFilters();
    state.source = button.dataset.source;
    state.sourceLibrary = false;
    state.sourceLibraryView = "active";
    if (state.scope === "recentChinese" && !["all", "chinese"].includes(state.source)) {
      state.scope = "all";
      syncScopeUi();
    }
    syncSourceUi();
    syncChineseLibraryUi();
    resetLimitAndRender();
  });
});

els.statusSummaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyPreset("mine");
    els.statusFilter.value = button.dataset.status;
    resetLimitAndRender();
    document.querySelector("#database")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

els.progressFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.progressFilter = button.dataset.progressFilter;
    if (state.progressFilter !== "all" && state.progressFilter !== "untracked") {
      clearPresetForManualFilters();
      state.scope = "all";
      state.source = "all";
      state.sourceLibraryView = "active";
      syncScopeUi();
      syncSourceUi();
      syncChineseLibraryUi();
    }
    syncProgressFilterUi();
    resetLimitAndRender();
  });
});

els.searchInput.addEventListener("input", resetLimitAndRender);
els.searchInput.addEventListener("change", resetLimitAndRender);

[els.directionFilter, els.locationFilter, els.languageFilter, els.statusFilter, els.freshnessFilter, els.laborFilter, els.experienceFilter, els.riskFilter].forEach((input) => {
  input.addEventListener("input", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
  input.addEventListener("change", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
});

els.sortFilter.addEventListener("change", resetLimitAndRender);

els.validRouteOnly.addEventListener("change", resetLimitAndRender);
els.excludeLowPay.addEventListener("change", resetLimitAndRender);
els.excludeInternships.addEventListener("change", resetLimitAndRender);

els.resetFilters.addEventListener("click", () => {
  applyPreset("mine");
});

els.loadMore.addEventListener("click", loadMoreResults);

els.chineseLibraryViewButtons.forEach((button) => {
  if (button.dataset.libraryLocation) return;
  button.addEventListener("click", () => activateChineseLibrary(button.dataset.libraryView));
});

els.chineseLibraryLocationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.sourceLibrary !== "chinese") return;
    state.sourceLibraryLocation = button.dataset.libraryLocation;
    els.locationFilter.value = state.sourceLibraryLocation;
    syncChineseLibraryUi();
    resetLimitAndRender();
  });
});

if ("IntersectionObserver" in window) {
  autoLoadObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) loadMoreResults();
    },
    { rootMargin: "0px 0px 160px 0px" },
  );
  autoLoadObserver.observe(els.loadMore);
}

function initStats() {
  els.totalCount.textContent = dedupedData.length;
  els.priorityCount.textContent = priorityItems.length;
  els.chineseTotal.textContent = allData.filter((item) => sourceGroup(item) === "chinese").length;
  const previousPreset = state.preset;
  state.preset = "actionable";
  const actionableChinese = dedupedData.filter(
    (item) =>
      ["A", "B", "C"].includes(item.tier) &&
      matchesPreset(item) &&
      ["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguagePath(item).key),
  ).length;
  state.preset = "chinese";
  const strictChinese = dedupedData.filter((item) => matchesPreset(item) && toLinks(item).length > 0).length;
  state.preset = previousPreset;
  const myCurrentRecords = dedupedData.filter(
    (item) => MY_OPPORTUNITY_SET.has(Number(item.id)) && applicationStatus(item).key !== "closed",
  );
  els.recentChineseTotal.textContent = myCurrentRecords.length;
  const recentChinese = dedupedData.filter(
    (item) =>
      sourceGroup(item) === "chinese" &&
      ["week", "month"].includes(item.freshnessTag) &&
      item.tier !== "X",
  ).length;
  const myStatus = getStatusSummary(myCurrentRecords);
  const myChineseRelevant = myCurrentRecords.filter(isChineseRelevant).length;
  const myLanguageCounts = myCurrentRecords.reduce((counts, item) => {
    const key = scoreLanguageRisk(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  const chinesePathCount =
    (myLanguageCounts.chinese || 0) +
    (myLanguageCounts.chineseCheck || 0) +
    (myLanguageCounts.basicSpanish || 0);
  const englishPathCount =
    (myLanguageCounts.english || 0) +
    (myLanguageCounts.englishLikely || 0) +
    (myLanguageCounts.englishSpanish || 0) +
    (myLanguageCounts.englishSpanishLikely || 0);
  const dualLanguageCount =
    (myLanguageCounts.englishSpanish || 0) + (myLanguageCounts.englishSpanishLikely || 0);
  els.chineseStatsNote.textContent = `默认主表共 ${myCurrentRecords.length} 个独立机会：${myStatus.live} 个原始页显示可投，${myStatus.verify} 个需先确认。可先走中文路径 ${chinesePathCount} 个；英文相关路径 ${englishPathCount} 个（其中 ${myLanguageCounts.englishLikely || 0} 个为英语环境大概率、${dualLanguageCount} 个同时存在明确或高概率西语门槛）、西语很可能 ${myLanguageCounts.spanishLikely || 0} 个、西语硬门槛 ${myLanguageCounts.spanish || 0} 个、其他外语门槛 ${myLanguageCounts.foreign || 0} 个只排在后面。中文或中国公司相关 ${myChineseRelevant} 个；历史、重复、关闭和外地线索仍完整保留。`;
  const statusSummary = myStatus;
  els.liveCount.textContent = statusSummary.live;
  els.verifyCount.textContent = statusSummary.verify;
  els.closedCount.textContent = statusSummary.closed;
  els.updatedAt.textContent = "2026-08-14";
}

syncChineseLibraryUi();
initStats();
renderPriority();
renderResults();
