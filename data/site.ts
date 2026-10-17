export const siteConfig = {
  name: "Prasidha Chhetri",
  title: "AI Marketing Expert & Digital Marketing Consultant",
  description: "Practical AI-powered digital marketing for small and medium businesses.",
  email: "prasidhachhetri@gmail.com",
  phone: "",
  whatsapp: "",
  bookingUrl: "",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  summary: string;
  problem: string;
  suitable: string[];
  includes: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI-Powered Digital Marketing Strategy",
    shortTitle: "AI Marketing Strategy",
    headline: "Turn disconnected marketing activity into a focused growth plan.",
    summary: "Get a clear marketing roadmap that connects your goals, audience, channels, content, and the right AI tools.",
    problem: "When marketing feels like a list of unrelated tasks, it is hard to know what deserves attention, what is working, and where AI can genuinely help.",
    suitable: ["Businesses without a clear marketing plan", "Owners balancing several channels with limited time", "Teams that want to use AI responsibly and productively"],
    includes: ["Business, offer, and audience review", "Current marketing and customer-journey assessment", "Messaging and channel priorities", "Practical AI opportunity mapping", "Measurement plan and recommended next steps"],
    deliverables: ["A concise digital marketing strategy document", "A prioritized action plan", "Recommended channels, messages, and AI use cases", "A practical measurement framework"],
    process: [
      { title: "Discover", text: "Clarify your goals, offer, customers, constraints, and current activity." },
      { title: "Diagnose", text: "Identify gaps, friction, and the highest-value opportunities." },
      { title: "Prioritize", text: "Choose the work that matters now and set aside lower-value distractions." },
      { title: "Plan", text: "Turn the findings into a usable roadmap with clear next steps." },
    ],
    benefits: ["A clearer direction for marketing decisions", "Better alignment between activity and business goals", "More confident choices about where AI belongs"],
    faqs: [
      { q: "Will the strategy recommend specific AI tools?", a: "Where useful, yes. Recommendations are based on the workflow and business need, not on adding technology for its own sake." },
      { q: "Can you help implement the plan?", a: "Implementation can be scoped separately after the priorities are clear. The free consultation itself does not include paid implementation." },
    ],
    related: ["content-strategy", "lead-generation", "offer-messaging"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    shortTitle: "Meta Ads",
    headline: "Run Facebook and Instagram campaigns with a clearer path to enquiry.",
    summary: "Reach relevant people on Facebook and Instagram with clearer offers, focused campaigns, and better follow-up.",
    problem: "Ads can produce clicks or enquiries without producing qualified conversations when the offer, targeting, creative, tracking, or sales follow-up is weak.",
    suitable: ["Businesses ready to promote a clearly defined offer", "Teams that need clearer campaign structure and reporting", "Advertisers receiving enquiries that rarely progress"],
    includes: ["Campaign and offer planning", "Audience research and campaign structure", "Creative and copy direction", "Tracking and landing-page review", "Testing, optimization, and performance reporting"],
    deliverables: ["Campaign plan and audience approach", "Ad copy and creative briefs", "Configured campaigns and tracking checks", "Performance summaries with recommended actions"],
    process: [
      { title: "Assess", text: "Review the offer, audience, assets, tracking, budget context, and follow-up process." },
      { title: "Plan", text: "Define campaign goals, audiences, creative angles, and measurement." },
      { title: "Launch", text: "Build campaigns and confirm the conversion path works as intended." },
      { title: "Improve", text: "Review signals, test meaningful changes, and document decisions." },
    ],
    benefits: ["More intentional use of advertising spend", "Stronger alignment between the ad promise and sales process", "Clearer learning from campaign data"],
    faqs: [
      { q: "Do you create the ad creative?", a: "Creative direction, messaging, and asset requirements may be included. The exact production scope is agreed after reviewing what your business already has." },
      { q: "Can ads guarantee sales?", a: "No. Results depend on the offer, market, budget, creative, landing experience, sales process, and execution." },
    ],
    related: ["lead-generation", "offer-messaging", "websites-landing-pages"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation & Sales Funnels",
    shortTitle: "Lead Generation",
    headline: "Create a clearer journey from first interest to a useful sales conversation.",
    summary: "Create a simple path that turns interest into qualified enquiries and helps your team follow up consistently.",
    problem: "Leads are often lost between an ad or post and the first meaningful sales conversation because the path is confusing, qualification is weak, or follow-up is inconsistent.",
    suitable: ["Service businesses that depend on enquiries", "Businesses with traffic but too few qualified leads", "Teams that need a more reliable follow-up process"],
    includes: ["Customer journey and funnel mapping", "Landing pages and enquiry forms", "Lead qualification questions", "Follow-up workflow design", "Conversion tracking and funnel review"],
    deliverables: ["A documented funnel and customer journey", "Conversion-focused page and form recommendations", "Lead qualification and follow-up steps", "A measurement and improvement checklist"],
    process: [
      { title: "Map", text: "Document how a prospect discovers, evaluates, and contacts your business." },
      { title: "Simplify", text: "Remove unnecessary steps and clarify the action visitors should take." },
      { title: "Connect", text: "Set up pages, forms, qualification, tracking, and follow-up handoffs." },
      { title: "Refine", text: "Review lead quality and conversion points to guide improvements." },
    ],
    benefits: ["A clearer route from interest to enquiry", "More consistent lead handling", "Better visibility into where prospects drop away"],
    faqs: [
      { q: "Do I need paid ads for a funnel?", a: "No. A funnel can support traffic from search, social content, referrals, email, or advertising." },
      { q: "Will it connect to my current tools?", a: "Where practical, the funnel can be designed around your existing website, inbox, CRM, or messaging workflow." },
    ],
    related: ["websites-landing-pages", "email-marketing", "meta-ads"],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & AI-Assisted Content Creation",
    shortTitle: "Content Strategy",
    headline: "Build a content system your business can use consistently.",
    summary: "Turn your business knowledge into useful content with a clear plan and responsible AI support.",
    problem: "Inconsistent content usually comes from unclear priorities and an unrealistic workflow—not simply a shortage of ideas.",
    suitable: ["Owners who want a clearer professional presence", "Small teams struggling to publish consistently", "Businesses that need content tied to real customer questions"],
    includes: ["Audience and topic research", "Content pillars and channel priorities", "Editorial planning", "AI-assisted research, drafting, and repurposing", "Human review standards and measurement"],
    deliverables: ["A documented content strategy", "Content pillars and topic ideas", "An editorial plan and repeatable workflow", "Reviewed content drafts or templates agreed in scope"],
    process: [
      { title: "Listen", text: "Collect the customer questions, objections, and business goals content should address." },
      { title: "Structure", text: "Define useful themes, formats, channels, and a realistic publishing rhythm." },
      { title: "Create", text: "Develop content with clear human review and brand safeguards." },
      { title: "Learn", text: "Use audience response and business feedback to improve the plan." },
    ],
    benefits: ["More consistent and useful communication", "Less time lost deciding what to publish", "Content that supports trust and sales conversations"],
    faqs: [
      { q: "Will AI write all of the content?", a: "AI can support research, outlines, first drafts, and repurposing. Final content should always be reviewed for accuracy, context, and your voice." },
      { q: "Which platforms will we use?", a: "The plan prioritizes the channels your audience uses and your team can maintain well." },
    ],
    related: ["ai-marketing-strategy", "email-marketing", "offer-messaging"],
  },
  {
    slug: "websites-landing-pages",
    title: "Website & Landing Page Creation",
    shortTitle: "Websites & Landing Pages",
    headline: "Make your offer easier to understand—and easier to enquire about.",
    summary: "Give visitors a clear reason to choose you with responsive pages that make the next step easy.",
    problem: "A website can look respectable and still fail to generate enquiries when its message, structure, trust signals, or calls to action are unclear.",
    suitable: ["Businesses launching or repositioning an offer", "Teams with an outdated or confusing website", "Campaigns that need a focused landing page"],
    includes: ["Page strategy and information structure", "Conversion-focused copy", "Responsive design and development", "Enquiry form setup", "Basic search, performance, and accessibility checks"],
    deliverables: ["Approved page structure and copy", "Responsive website or landing page files", "Configured enquiry path", "Pre-launch quality and accessibility checklist"],
    process: [
      { title: "Clarify", text: "Define the visitor, offer, key questions, and desired action." },
      { title: "Plan", text: "Create a page structure and message hierarchy around the decision journey." },
      { title: "Build", text: "Design and develop the responsive experience with appropriate integrations." },
      { title: "Check", text: "Test content, forms, links, accessibility, and key device sizes before launch." },
    ],
    benefits: ["A clearer explanation of what you offer", "A more direct path to enquiry", "A maintainable, responsive foundation"],
    faqs: [
      { q: "Can you improve an existing website?", a: "Yes. The right scope may be a focused audit and targeted improvements rather than a complete rebuild." },
      { q: "Is hosting included?", a: "Hosting and ongoing maintenance depend on the chosen platform and are agreed as part of the project scope." },
    ],
    related: ["lead-generation", "offer-messaging", "content-strategy"],
  },
  {
    slug: "offer-messaging",
    title: "Offer Creation & Marketing Messaging",
    shortTitle: "Offer & Messaging",
    headline: "Explain the value of your offer in language customers understand.",
    summary: "Make your offer easier to understand so the right prospects can see its value and take action.",
    problem: "Prospects hesitate when an offer is vague, difficult to compare, poorly explained, or disconnected from the problem they want solved.",
    suitable: ["Businesses preparing a new service or campaign", "Teams with attention but weak enquiry rates", "Owners who need clearer packaging and messaging"],
    includes: ["Offer, audience, and alternative review", "Value proposition and message hierarchy", "Benefit, objection, and proof planning", "Calls to action and conversion path review", "Testing priorities"],
    deliverables: ["A clear offer statement and positioning summary", "Core messages and supporting points", "Objection-handling and call-to-action guidance", "A messaging reference for pages and campaigns"],
    process: [
      { title: "Understand", text: "Clarify the customer problem, desired progress, alternatives, and concerns." },
      { title: "Shape", text: "Define what the offer includes, why it matters, and how to explain it clearly." },
      { title: "Apply", text: "Adapt the message across the relevant pages, ads, email, and sales material." },
      { title: "Test", text: "Prioritize useful experiments and learn from real customer response." },
    ],
    benefits: ["A clearer, easier-to-understand offer", "Stronger consistency across marketing touchpoints", "Better-informed messaging improvements"],
    faqs: [
      { q: "Is this only for online products?", a: "No. Offer clarity matters for professional services, local businesses, consultations, and many other sales processes." },
      { q: "Can you guarantee a conversion increase?", a: "No. The work improves clarity and creates stronger testing priorities, but outcomes depend on traffic quality, market demand, execution, and context." },
    ],
    related: ["websites-landing-pages", "meta-ads", "ai-marketing-strategy"],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Lead Nurturing",
    shortTitle: "Email Marketing",
    headline: "Keep useful conversations moving after the first enquiry.",
    summary: "Stay useful and relevant after the first enquiry with clear email journeys and consistent follow-up.",
    problem: "Leads lose interest when every contact receives the same message, follow-up arrives too late, or emails focus only on selling.",
    suitable: ["Businesses with leads that need longer consideration", "Teams that collect contacts but rarely nurture them", "Brands that want a more consistent email plan"],
    includes: ["Audience segmentation", "Welcome and nurture sequence planning", "Email copy and calls to action", "Automation setup", "Testing and performance review"],
    deliverables: ["A lead-nurture journey map", "Agreed email sequence copy", "Segmentation and automation rules", "Testing notes and review checklist"],
    process: [
      { title: "Segment", text: "Identify the meaningful differences between subscribers and leads." },
      { title: "Sequence", text: "Plan the information and prompts each group needs next." },
      { title: "Set up", text: "Build, review, and test emails and automation rules." },
      { title: "Review", text: "Assess engagement and conversion signals, then refine content and timing." },
    ],
    benefits: ["More consistent follow-up", "More relevant communication", "A clearer path from early interest to conversation"],
    faqs: [
      { q: "Can this work with my current email platform?", a: "Often, yes. The first step is checking whether your existing platform supports the segmentation and automation you need." },
      { q: "How many emails are included?", a: "The number and type of emails depend on the customer journey and the agreed project scope." },
    ],
    related: ["lead-generation", "content-strategy", "offer-messaging"],
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "practical-ways-small-businesses-can-use-ai-in-marketing",
    title: "Practical Ways Small Businesses Can Use AI in Marketing",
    category: "AI Marketing",
    readingTime: "7 min read",
    description: "A practical guide to using AI for research, content, follow-up, and analysis without losing human judgment.",
    intro: "AI becomes useful when it helps a real workflow—not when it is added simply because it is new. For a small business, the best starting points are usually repetitive tasks that already have clear inputs, outputs, and a person responsible for review.",
    sections: [
      { heading: "Start with the bottleneck, not the tool", paragraphs: ["List the marketing work that regularly takes too long, gets delayed, or depends on copying the same information between systems. Then ask whether AI can prepare, summarize, classify, or draft part of that work.", "This keeps technology connected to a business problem. It also makes it easier to decide whether a workflow is actually saving time."], bullets: ["Researching common customer questions", "Turning notes into a first draft", "Preparing personalized follow-up suggestions", "Summarizing campaign data for review"] },
      { heading: "Use AI to prepare—then review", paragraphs: ["AI is effective at producing a useful starting point. It can organize ideas, create options, or adapt a draft to a channel. It does not automatically understand your market, policies, facts, or tone.", "Create a simple review checklist: Is the information accurate? Is the promise appropriate? Does it sound like the business? Is there any customer or confidential data that should not be in the tool?"] },
      { heading: "Build one reliable workflow", paragraphs: ["Choose one repeatable use case and document how it should work. Define the input, prompt or rules, reviewer, and final destination. Test it with normal cases and awkward cases before relying on it.", "Once one workflow is dependable, you have a better foundation for adding another. A small system that is used consistently is more valuable than a long list of disconnected tools."] },
      { heading: "Measure usefulness in business terms", paragraphs: ["Track whether the workflow saves time, reduces missed follow-up, improves consistency, or helps the team make a better decision. Those measures are more useful than counting how often an AI tool is opened.", "Results still depend on the quality of the process, the offer, and the people using it. AI supports execution; it does not remove the need for sound strategy."] },
    ],
  },
  {
    slug: "why-more-leads-do-not-always-mean-more-customers",
    title: "Why Getting More Leads Does Not Always Mean Getting More Customers",
    category: "Lead Generation",
    readingTime: "8 min read",
    description: "A practical look at the gaps between generating an enquiry and winning a customer—and how to diagnose them.",
    intro: "More enquiries can create more work without creating more customers. The problem is often not the number of leads alone, but the fit of those leads and the experience between the first response and the sales conversation.",
    sections: [
      { heading: "Lead volume and lead quality are different", paragraphs: ["A broad message can attract people who are curious but not suitable, ready, or able to buy. That can make the lead count look healthy while the sales team struggles to find meaningful conversations.", "Clarify who the offer is for, what problem it solves, and what a prospect should understand before enquiring. A useful message can also help the wrong person decide not to respond."], bullets: ["Which leads became useful sales conversations?", "Which expectations were mismatched?", "Which questions or objections appeared repeatedly?", "Where did promising prospects stop responding?"] },
      { heading: "The journey after the enquiry matters", paragraphs: ["A visitor may respond to a clear promise and then receive a slow, generic, or confusing follow-up. Confidence drops when the next step does not match the experience that created the enquiry.", "Review the journey as a prospect would experience it: form confirmation, first reply, qualification, sales conversation, and next action. Each step should explain what happens next."] },
      { heading: "Qualification should help both sides", paragraphs: ["Useful qualification is not about creating unnecessary barriers. It helps the business understand the enquiry and helps the prospect decide whether the service is relevant.", "Ask only for the information needed at that stage. A hypothetical home-services business, for example, might need location and service type before arranging a call, but not a long questionnaire."] },
      { heading: "Connect sales feedback to marketing", paragraphs: ["Marketing needs more than a lead total. It needs feedback about lead quality, common objections, response speed, and where conversations stop.", "A simple review process can reveal whether the next improvement belongs in the targeting, offer, page, form, follow-up, or sales conversation. That is how more leads become a more useful business outcome."] },
    ],
  },
  {
    slug: "what-makes-a-landing-page-convert",
    title: "What Makes a Landing Page Convert?",
    category: "Conversion",
    readingTime: "7 min read",
    description: "A practical framework for making landing pages clearer, more credible, and easier to act on.",
    intro: "A landing page has one demanding job: help the right visitor understand an offer and decide whether to take the next step. Strong pages do this through clarity and relevance, not pressure or decoration.",
    sections: [
      { heading: "Match the visitor’s context", paragraphs: ["A visitor arriving from an ad, email, or referral brings a particular expectation. The first section should confirm that they are in the right place by reflecting the problem, audience, and offer they just encountered.", "Avoid making people translate a clever slogan. Say what the service helps with and who it is for."] },
      { heading: "Build a clear decision sequence", paragraphs: ["People usually need answers in a sensible order: What is this? Is it relevant to me? What does it involve? Why should I trust the process? What happens if I respond?", "Structure the page around those questions. Use headings that communicate meaning even when someone scans quickly."], bullets: ["A specific headline and supporting explanation", "Concrete inclusions or process", "Appropriate proof when real proof is available", "Objection-handling questions", "One clear primary action"] },
      { heading: "Reduce form friction thoughtfully", paragraphs: ["Ask only for information needed to respond or qualify the enquiry. Every field adds effort, especially on a phone. Optional fields should be labelled clearly.", "Validation should explain how to fix a problem, preserve the information already entered, and show success only after the server accepts the submission."] },
      { heading: "Improve with useful evidence", paragraphs: ["Start with basic reliability: page views, form starts, accepted submissions, lead quality, and customer feedback. A higher form conversion rate is not useful if lead quality collapses.", "Prioritize changes that address a clear problem. Test one meaningful hypothesis at a time, and interpret results in the context of traffic volume and business quality."] },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
