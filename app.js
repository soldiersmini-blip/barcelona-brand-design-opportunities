const allData = Array.isArray(window.JOB_OPPORTUNITIES) ? window.JOB_OPPORTUNITIES : [];

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
].forEach((record) => {
  if (!allData.some((item) => Number(item.id) === record.id)) allData.push(record);
});

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
const PRIORITY_IDS = [930813, 910, 914, 1300, 160, 1107, 866, 425];

// Canonical, evidence-backed opportunities for the user. The generated corpus
// remains searchable, but only these independently reviewed identities enter
// the default board. This prevents old source indexes, Madrid posts, mirrors
// and research notes from inflating the usable count.
const MY_OPPORTUNITY_IDS = Object.freeze([
  930813, 910, 914, 1300, 160, 1107, 866, 94, 930816, 1245, 296, 175, 930832, 446, 425, 4, 1828,
  668, 447, 1102, 884, 203, 601, 284, 920001, 930812, 190, 930715, 577, 55,
  1278, 1314, 314, 207, 78, 444, 458, 258, 5106, 960, 238, 156, 1239, 928, 147, 216, 604,
  930822, 304, 170, 1038, 84, 930815, 930824, 930831, 12, 859, 305, 1011, 445, 1029, 188, 922, 483, 958,
  930823, 930825, 930818, 930820, 930821, 930828, 930827, 930829, 921, 228, 178, 2942, 1105, 890, 891, 930637, 930833, 930819, 930826, 930707, 930708, 134, 277, 109, 930720,
  117, 93, 1296, 206, 375, 210, 930719, 89, 183, 239, 1023, 385, 930817, 841, 903, 1108, 855, 874, 875, 876,
  1227, 396, 1240, 217, 985, 977, 989, 870, 990001, 27, 1303, 308, 1020, 351, 1081,
  1080, 1099, 981, 1097, 1101, 24, 1301, 1294, 25, 484, 278, 1293, 1255, 37, 889, 1241,
  172, 86, 930717, 224, 279, 930814, 920,
]);
const MY_OPPORTUNITY_SET = new Set(MY_OPPORTUNITY_IDS);

// The reviewed order above is the single source of truth for ranking. Scores
// are spread across a stable 100–1 scale, so the board remains strictly
// descending even after more than one hundred verified records are recovered.
const AUDITED_SCORE_STEP = MY_OPPORTUNITY_IDS.length > 1 ? 99 / (MY_OPPORTUNITY_IDS.length - 1) : 0;
const AUDITED_FIT_SCORES = Object.freeze(
  Object.fromEntries(
    MY_OPPORTUNITY_IDS.map((id, index) => [id, Number((100 - index * AUDITED_SCORE_STEP).toFixed(1))]),
  ),
);

const IDENTITY_ALIASES = Object.freeze({
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
    applicationMode: "chineseCheck",
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
    applicationMode: "basicSpanish",
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
  // The default is the hand-audited canonical opportunity ledger. Source
  // libraries and historical research remain available as secondary views.
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
  mine: "默认显示逐条打开原始招聘页后保留下来的唯一岗位：Barcelona 本地优先，其次是明确 Spain / Europe remote；关闭页、马德里岗位、重复镜像和研究线索不进入这里。分数是按你的实际可用性重新评估的匹配分。",
  profile: "默认只显示可以先用中文联系的 Barcelona / 西班牙远程机会；需要完整英文材料或西语工作的岗位不会混进来。",
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

function isActionableLink(value) {
  if (/^mailto:/i.test(value)) return true;
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
  if (host === "infohuaxin.com" || host === "www.infohuaxin.com") return false;
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
  const contact = String(item.contact || "");
  const emails = [...contact.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
    (match) => `mailto:${match[0]}`,
  );
  return [...new Set([...raw, ...emails])].filter(isActionableLink);
}

function isInternshipRole(item) {
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
  const applicationLanguage = applicationLanguagePath(item).key;
  if (applicationLanguage === "spanish") flags.push("spanish");
  if (applicationLanguage === "english") flags.push("english");
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
    /(?:job[- ]?board|jobs?) (?:channel|route|recheck)|channel (?:recheck|status|monitor)|(?:monitor|watchlist|watch route|research route)|no (?:new|current).{0,35}(?:job|vacancy|opening)|no confirmed|not (?:a |an )?(?:current |confirmed )?(?:job|vacancy|opening)|speculative (?:creative\/brand\/packaging )?application|self[- ]application|status correction|historical lead|current .{0,35}(?:employer|ecosystem)$|(?:company|platform|classifieds) (?:target|route|monitor)|institutional.{0,35}route|service category|招聘频道|招聘渠道|监控|观察入口|研究线索|当前无.{0,20}(?:岗位|职位)/i.test(
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

function personalMatchScore(item) {
  const tierPoints = { A: 20, B: 15, C: 8, D: 2, X: 0 };
  const locationPoints = { barcelona: 20, remote: 18, madrid: 4, other: 1 };
  const applicationLanguagePoints = {
    chinese: 25,
    chineseCheck: 18,
    basicSpanish: 5,
    unknown: 0,
    english: -18,
    spanish: -30,
  };
  const directionPoints = { brand: 20, digital: 17, motion: 18, ecommerce: 13, social: 11, production: 8, other: 0 };
  const freshnessPoints = { week: 10, month: 7, quarter: 3, older: 0, old: -5, unknown: 0 };

  let score =
    (tierPoints[item.tier] || 0) +
    (locationPoints[locationBucket(item)] || 0) +
    (applicationLanguagePoints[applicationLanguagePath(item).key] || 0) +
    (directionPoints[directionKey(item)] || 0) +
    (freshnessPoints[item.freshnessTag] || 0);

  if (isChineseRelevant(item)) score += 10;
  if (toLinks(item).length) score += 8;
  if (isInternshipRole(item)) score -= 5;
  if (hasLowPayRisk(item)) score -= 8;
  if (isResearchOnly(item)) score -= 30;
  if (applicationStatus(item).key === "live") score += 6;
  if (applicationStatus(item).key === "verify") score -= 4;
  if (applicationStatus(item).key === "closed") score -= 25;
  return Math.max(0, Math.min(100, score));
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
  // Sort by the number the card actually shows. The old implementation used
  // item.score even when the profile view displayed personalMatchScore, which
  // made the visual order appear wrong. Keep the raw score as a deterministic
  // tie-breaker so equal displayed scores remain stable.
  if (Object.prototype.hasOwnProperty.call(AUDITED_FIT_SCORES, item.id)) {
    return Number(AUDITED_FIT_SCORES[item.id]) || 0;
  }
  if (state.preset === "profile") return Number(personalMatchScore(item)) || 0;
  return Number(item.score) || 0;
}

function sortRecords(records) {
  const mode = els.sortFilter?.value || "smart";
  const compareScore = (a, b) =>
    displayedScore(b) - displayedScore(a) || (Number(b.score) || 0) - (Number(a.score) || 0);
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

  records.sort((a, b) => compareScore(a, b) || tieBreaker(a, b));
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
      applicationLanguagePath(item).key === "english" &&
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
      language !== "spanish" &&
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
  // Round 705: MANGO's Fashion Art Director is in Palau-solità i Plegamans,
  // Barcelona province, not Barcelona city; keep it out of the default local view.
  if (Number(item?.id) === 930705) return "other";
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
  spanish: {
    key: "spanish",
    label: "西语或本地语言是硬门槛",
    short: "西语门槛",
    tone: "hard",
  },
  unknown: {
    key: "unknown",
    label: "投递语言未说明，先中文核实",
    short: "语言待问",
    tone: "check",
  },
};

const APPLICATION_MODE_OVERRIDES = Object.freeze({
  760: "spanish",
  762: "english",
  815: "spanish",
});

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
  if ([206, 930720].includes(Number(item?.id))) {
    return { key: "verify", label: "Needs verification" };
  }
  // Round 709: these three official current routes have readable application
  // paths in their latest audits; do not let older curated verify snapshots
  // hide the current submission route.
  if ([55, 1023, 224, 886, 920001, 930711, 930719].includes(Number(item?.id))) {
    return { key: "live", label: "页面显示可投" };
  }
  /*
  if ([206, 930720].includes(Number(item?.id))) {
    return { key: "verify", label: "闂団偓閸忓牏鈥樼拋銈囧Ц閹? };
  }
  */
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
    /^closed\/history:/i.test(explicitClosureText) &&
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
    link.target = href.startsWith("mailto:") ? "_self" : "_blank";
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
function roundRank(item) {
  const section = String(item.section || "");
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
const latestRoundItems = dedupe(allData.filter((item) => item.section === latestRoundSection));
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
    const applicationLanguage = applicationLanguagePath(item);
    // The priority row is about usefulness, not language. English application
    // paths are shown explicitly on the card instead of being hidden below a
    // collapsed warning section.
    const isPrimary = true;
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
    applicationLanguagePath(item).key !== els.languageFilter.value
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
  const applicationLanguage = applicationLanguagePath(item);
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
  } else if (applicationLanguage.key === "english") {
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
  els.excludeLowPay.checked = preset !== "none";
  els.excludeInternships.checked = ["mine", "actionable", "stable"].includes(preset);
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
  els.chineseStatsNote.textContent = `默认主表共 ${myCurrentRecords.length} 个独立机会：${myStatus.live} 个原始页显示可投，${myStatus.verify} 个需先确认；中文或中国公司相关 ${myChineseRelevant} 个。历史、重复、关闭和外地线索仍完整保留在来源库。`;
  const statusSummary = myStatus;
  els.liveCount.textContent = statusSummary.live;
  els.verifyCount.textContent = statusSummary.verify;
  els.closedCount.textContent = statusSummary.closed;
  els.updatedAt.textContent = "2026-08-12";
}

syncChineseLibraryUi();
initStats();
renderPriority();
renderResults();
