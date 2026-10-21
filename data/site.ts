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
  image: string;
  imageAlt: string;
  headline: string;
  summary: string;
  intro: string;
  problem: string;
  suitable: string[];
  scopeEyebrow: string;
  scopeHeadline: string;
  scopeIntro: string;
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
    image: "/images/services/ai-marketing-strategy.png",
    imageAlt: "A colorful marketing strategy workspace connecting channels, goals, audience, and growth",
    headline: "Get a marketing plan you can actually use.",
    summary: "Know what to focus on, what to stop doing, and where AI can genuinely save time.",
    intro: "Marketing gets frustrating when every channel seems to demand attention but none of it feels connected. I start by looking at how customers find you, what they see, and what happens after they enquire. From there, we choose the few activities most likely to support your goals. AI may help with research, content, follow-up, or reporting, but only where it makes the work simpler. You leave with a practical plan—not a long list of tools or tasks you will never use.",
    problem: "You may be posting, advertising, emailing, and trying new tools without knowing which activity deserves more time—or which one is quietly wasting it.",
    suitable: ["Owners who feel pulled in too many marketing directions", "Businesses with activity but no clear priorities", "Small teams that want practical, responsible uses for AI"],
    scopeEyebrow: "Your clearest priorities",
    scopeHeadline: "Focus your marketing before adding more.",
    scopeIntro: "We’ll untangle what you are already doing, keep the parts that earn their place, and build a practical order of action around your customers and goals.",
    includes: ["A review of your goals, offer, and customers", "A look at your current marketing journey", "Clear priorities for messages and channels", "Useful AI opportunities—not AI for its own sake", "Simple ways to track what is improving"],
    deliverables: ["A plain-English marketing strategy", "A prioritized action list", "Recommended channels and AI use cases", "A simple measurement plan"],
    process: [
      { title: "Talk", text: "We discuss the business, your customers, what you have tried, and what needs to change." },
      { title: "Review", text: "I look for gaps between attracting attention, receiving enquiries, and following up." },
      { title: "Choose", text: "We decide what matters now and remove lower-value distractions from the plan." },
      { title: "Map it out", text: "You receive clear next steps in an order that makes sense for your business." },
    ],
    benefits: ["Clearer decisions about where to spend time and budget", "Marketing activities that support the same business goal", "A sensible role for AI in your day-to-day work"],
    faqs: [
      { q: "Is this mainly a list of AI tools?", a: "No. The strategy starts with your business and customer journey. I only recommend an AI tool when it solves a clear problem or saves useful time." },
      { q: "What if I already have marketing in place?", a: "That is completely fine. We keep what is useful, identify what is missing, and improve the parts that are creating confusion or weak follow-up." },
    ],
    related: ["content-strategy", "lead-generation", "offer-messaging"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    shortTitle: "Meta Ads",
    image: "/images/services/meta-ads-management.png",
    imageAlt: "A colorful Meta advertising dashboard with a megaphone, target, audience, and performance charts",
    headline: "Turn Facebook and Instagram attention into useful enquiries.",
    summary: "Run focused Meta campaigns with a clear offer, relevant creative, and a sensible follow-up path.",
    intro: "Paying for reach is easy. Getting the right person to notice, understand, and respond to your offer takes more care. I build Meta campaigns around one clear objective, then connect the audience, message, creative, landing page, and follow-up. We watch the signals that matter and make changes for a reason—not because a dashboard suggests another button to press. The aim is to use your budget thoughtfully, learn what people respond to, and create more useful sales conversations from Facebook and Instagram.",
    problem: "A campaign can collect clicks and cheap leads while still producing very few worthwhile conversations. The weak point may be the offer, creative, page, or response after the enquiry.",
    suitable: ["Businesses with a clear service or offer to promote", "Owners who want more control over Meta ad spending", "Teams receiving leads that rarely move forward"],
    scopeEyebrow: "Campaigns with a purpose",
    scopeHeadline: "Make every advertising decision earn its place.",
    scopeIntro: "We’ll connect the offer, audience, creative, landing page, and follow-up so your budget supports one clear outcome instead of collecting disconnected clicks.",
    includes: ["Campaign goals and offer review", "Audience and campaign planning", "Ad copy and creative direction", "Landing-page and tracking checks", "Ongoing review and purposeful testing"],
    deliverables: ["A clear campaign plan", "Ad copy and creative briefs", "Set-up campaigns with tracking checks", "Plain-English performance notes and next actions"],
    process: [
      { title: "Check the basics", text: "We review the offer, audience, available creative, tracking, and what happens to a new lead." },
      { title: "Build the campaign", text: "I shape the audience, message, creative angles, and campaign structure around one objective." },
      { title: "Launch carefully", text: "The ads go live only after the enquiry path and tracking have been checked." },
      { title: "Learn and adjust", text: "We use real campaign and lead feedback to decide what deserves changing next." },
    ],
    benefits: ["More deliberate use of your advertising budget", "A closer match between the ad and what happens next", "Clearer lessons about the messages and audiences that respond"],
    faqs: [
      { q: "Will you also create the ads?", a: "I can provide the messaging, copy, creative direction, and asset requirements. The exact design or production work depends on what you already have and what we agree to include." },
      { q: "Will Meta ads guarantee sales?", a: "No. Ads can create opportunities, but sales also depend on demand, pricing, the offer, the page, response speed, and the sales conversation." },
    ],
    related: ["lead-generation", "offer-messaging", "websites-landing-pages"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation & Sales Funnels",
    shortTitle: "Lead Generation",
    image: "/images/services/lead-generation-funnel.png",
    imageAlt: "A colorful lead generation funnel turning prospects into qualified opportunities and customers",
    headline: "Stop losing good leads between interest and follow-up.",
    summary: "Create a simple journey that helps the right prospects enquire and makes the next step clear for your team.",
    intro: "Most funnels do not need more complexity. They need fewer gaps. I look at the full journey—from the first ad, post, or search through to the form, reply, qualification, and sales conversation. Then I simplify anything that is slowing people down or causing leads to disappear. The result is a clearer experience for the prospect and a more reliable process for your business. That can improve lead quality, reduce missed follow-up, and give serious enquiries a better chance of becoming customers.",
    problem: "Good prospects often drop away because the page is confusing, the form asks too much, the reply comes too late, or nobody is sure what should happen next.",
    suitable: ["Service businesses that rely on enquiries", "Businesses getting traffic but few useful leads", "Teams that need a clearer way to qualify and follow up"],
    scopeEyebrow: "A smoother enquiry journey",
    scopeHeadline: "Close the gaps where good leads disappear.",
    scopeIntro: "We’ll trace the prospect’s path, remove unnecessary friction, and give your team a simple follow-up flow that is easy to use.",
    includes: ["A map of the current customer journey", "Landing-page and form improvements", "Useful qualification questions", "A clear follow-up workflow", "Tracking for the important conversion points"],
    deliverables: ["A simple funnel map", "Page and form recommendations", "Qualification and follow-up steps", "A practical checklist for reviewing performance"],
    process: [
      { title: "Follow the journey", text: "We trace what a prospect sees and does from first contact to sales conversation." },
      { title: "Remove friction", text: "I simplify unclear pages, unnecessary form fields, and awkward handoffs." },
      { title: "Connect the steps", text: "The form, qualification, tracking, and follow-up are set up to work together." },
      { title: "Review real leads", text: "Lead quality and sales feedback guide the next improvement." },
    ],
    benefits: ["A clearer route from interest to enquiry", "Fewer leads forgotten after they make contact", "A better view of where and why prospects drop away"],
    faqs: [
      { q: "Do I need paid ads to use a funnel?", a: "No. The same journey can support people arriving through Google, social content, referrals, email, or direct outreach." },
      { q: "Can we keep the tools I already use?", a: "Usually, yes. I first look at your current website, forms, inbox, CRM, or messaging process and only suggest a change when there is a clear reason." },
    ],
    related: ["websites-landing-pages", "email-marketing", "meta-ads"],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & AI-Assisted Content Creation",
    shortTitle: "Content Strategy",
    image: "/images/services/content-strategy.png",
    imageAlt: "A colorful content planning system connecting ideas, writing, video, voice, and a publishing calendar",
    headline: "Create useful content without sounding like everyone else.",
    summary: "Turn what you know about your customers into clear, consistent content—with AI helping behind the scenes.",
    intro: "Good content should sound like your business and answer questions your customers genuinely ask. I help you choose useful topics, the right formats, and a publishing rhythm your team can maintain. AI can speed up research, outlines, first drafts, and repurposing, but it does not get the final word. Every piece still needs human judgment, accurate details, and your point of view. This gives you a steadier online presence and content that supports trust, enquiries, and real sales conversations.",
    problem: "Content becomes a burden when you are guessing what to post, rushing out generic drafts, or trying to maintain more channels than your team can handle.",
    suitable: ["Owners who have expertise but struggle to turn it into content", "Small teams that need a realistic publishing routine", "Businesses tired of generic, forgettable AI-written posts"],
    scopeEyebrow: "Content people recognize",
    scopeHeadline: "Turn real customer questions into useful content.",
    scopeIntro: "We’ll shape a manageable rhythm around your expertise, using AI for momentum while keeping your facts, judgment, and voice unmistakably human.",
    includes: ["Customer questions and topic research", "A small set of useful content themes", "Channel and format choices", "AI-assisted drafting and repurposing", "Human review for accuracy and voice"],
    deliverables: ["A focused content plan", "Practical topic ideas and content themes", "A realistic publishing calendar", "Agreed drafts, prompts, or reusable templates"],
    process: [
      { title: "Listen first", text: "We collect the questions, objections, and decisions that come up in real customer conversations." },
      { title: "Choose a rhythm", text: "I turn those insights into themes, formats, and a schedule your team can realistically maintain." },
      { title: "Create and review", text: "AI may prepare a starting point; human review makes it accurate, useful, and recognizably yours." },
      { title: "Keep what works", text: "We use audience response and business feedback to improve future content." },
    ],
    benefits: ["Less time wasted wondering what to publish", "A more consistent and credible online presence", "Content that gives prospects a reason to trust your business"],
    faqs: [
      { q: "Will the content be written entirely by AI?", a: "No. AI can help prepare and reshape drafts, but the final work needs human judgment, fact-checking, and your real experience." },
      { q: "Do I need to post on every platform?", a: "No. We focus on the places your customers pay attention to and the channels your team can manage properly." },
    ],
    related: ["ai-marketing-strategy", "email-marketing", "offer-messaging"],
  },
  {
    slug: "websites-landing-pages",
    title: "Website & Landing Page Creation",
    shortTitle: "Websites & Landing Pages",
    image: "/images/services/website-landing-pages.png",
    imageAlt: "A responsive website and landing page shown across desktop, tablet, and mobile screens",
    headline: "Give visitors a clear reason to stay—and a simple way to respond.",
    summary: "Create a responsive website or landing page that explains your offer clearly and makes the next step easy.",
    intro: "A website should answer the questions a visitor is already asking: Is this for me? Can this business help? What should I do next? I build pages around those decisions, not around decoration alone. The copy, structure, design, and enquiry path are planned together, then checked on phones and larger screens. You get a professional page that is easier to understand, easier to use, and better prepared to support referrals, search traffic, content, or paid campaigns.",
    problem: "A polished website can still lose visitors when the message is vague, important information is buried, or the contact process feels harder than it should.",
    suitable: ["Businesses that need a clearer, more professional website", "Owners launching or repositioning a service", "Campaigns that need one focused landing page"],
    scopeEyebrow: "Pages built for decisions",
    scopeHeadline: "Help visitors understand, trust, and act.",
    scopeIntro: "We’ll bring the message, page structure, responsive design, and enquiry path together so every screen has a clear job.",
    includes: ["Page goals and information structure", "Clear, conversion-focused copy", "Responsive design and development", "A working enquiry path", "Basic accessibility, search, and performance checks"],
    deliverables: ["Approved page structure and copy", "A responsive website or landing page", "Configured forms and calls to action", "A practical pre-launch quality check"],
    process: [
      { title: "Clarify the job", text: "We agree who the page is for, what it needs to explain, and the action it should encourage." },
      { title: "Shape the page", text: "I plan the message and layout so visitors can understand the offer without hunting for answers." },
      { title: "Build and connect", text: "The responsive page, forms, calls to action, and essential tracking are put in place." },
      { title: "Test the details", text: "I check the page on different screens and test the full enquiry journey before handover." },
    ],
    benefits: ["A clearer explanation of what you offer", "A simpler path from visit to enquiry", "A responsive foundation that is easier to maintain"],
    faqs: [
      { q: "Can you improve my current website instead of rebuilding it?", a: "Possibly. I first check whether the existing platform and structure can support the changes. If they can, improving what you have may be the sensible option." },
      { q: "Does the service include hosting and maintenance?", a: "That depends on the platform and the support you need. Hosting and ongoing maintenance are discussed clearly before the scope is agreed." },
    ],
    related: ["lead-generation", "offer-messaging", "content-strategy"],
  },
  {
    slug: "offer-messaging",
    title: "Offer Creation & Marketing Messaging",
    shortTitle: "Offer & Messaging",
    image: "/images/services/offer-messaging.png",
    imageAlt: "A colorful marketing offer with a gift box, message cards, magnet, megaphone, target, and growth chart",
    headline: "Make your offer easier to understand and easier to choose.",
    summary: "Put your service into plain language so the right customers quickly see why it matters.",
    intro: "When an offer is difficult to explain, marketing becomes difficult too. I help you make the basics clear: who the service is for, the problem it solves, what the customer receives, and why they should care. We then turn that thinking into language you can use across your website, ads, email, proposals, and sales conversations. The goal is not to sound clever. It is to help the right person understand the value, decide whether the offer fits, and take the next step with confidence.",
    problem: "Prospects hesitate when they cannot quickly tell what you do, who it is for, what is included, or why your option is worth considering.",
    suitable: ["Businesses preparing a new service or campaign", "Owners who struggle to explain their value simply", "Teams getting attention but too few serious enquiries"],
    scopeEyebrow: "A clearer reason to choose",
    scopeHeadline: "Put the value of your offer into plain language.",
    scopeIntro: "We’ll sharpen who it is for, why it matters, what is included, and how to invite the next step without making the message feel forced.",
    includes: ["A review of the offer and intended customer", "A clear value proposition", "Benefits, objections, and useful proof points", "Calls to action and next-step wording", "Message priorities for different channels"],
    deliverables: ["A plain-English offer statement", "Core messages and supporting points", "Objection and call-to-action guidance", "A messaging reference for pages, ads, and email"],
    process: [
      { title: "Hear the real story", text: "We discuss the customer problem, what they want instead, and the concerns that slow a decision." },
      { title: "Shape the offer", text: "I clarify what is included, why it matters, and how to describe it without jargon." },
      { title: "Use it everywhere", text: "The message is adapted for the website, ads, email, proposals, or sales material you need." },
      { title: "Listen and improve", text: "Questions from real prospects show us where the message still needs work." },
    ],
    benefits: ["An offer people can understand more quickly", "More consistent language across your marketing", "Better feedback about what customers find clear or confusing"],
    faqs: [
      { q: "Is this only for online products?", a: "No. Clear offers matter just as much for consultants, professional services, local businesses, appointments, and other offline sales conversations." },
      { q: "Will clearer messaging guarantee more sales?", a: "No. It removes avoidable confusion, but sales still depend on demand, pricing, trust, traffic quality, follow-up, and the overall customer experience." },
    ],
    related: ["websites-landing-pages", "meta-ads", "ai-marketing-strategy"],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Lead Nurturing",
    shortTitle: "Email Marketing",
    image: "/images/services/email-lead-nurturing.png",
    imageAlt: "A colorful email nurturing journey with message envelopes, timing, growth, trust, and a target",
    headline: "Follow up without sounding pushy or forgetting good leads.",
    summary: "Use timely, useful emails to stay in touch while prospects decide what to do next.",
    intro: "Many people are interested before they are ready. If the only follow-up is a sales message—or no message at all—good opportunities quietly disappear. I plan email journeys that answer questions, share useful information, and invite the next step at the right time. Segmentation and simple automation help different leads receive messages that fit their situation. Done well, email keeps your business present without becoming annoying and gives interested prospects more reasons to return when they are ready to talk.",
    problem: "Promising leads go cold when replies are delayed, everyone receives the same generic message, or follow-up stops after one attempt.",
    suitable: ["Businesses with leads who take time to decide", "Teams collecting contacts but rarely following up", "Owners who want a useful email routine without constant manual work"],
    scopeEyebrow: "Follow-up that feels useful",
    scopeHeadline: "Stay present while good leads decide.",
    scopeIntro: "We’ll plan a natural sequence that answers the right questions, respects timing, and gives each lead a helpful reason to come back.",
    includes: ["Simple audience segments", "Welcome and follow-up journey planning", "Useful email copy and calls to action", "Practical automation setup", "Review of engagement and lead response"],
    deliverables: ["A clear nurture journey", "Agreed email sequence copy", "Segmentation and automation rules", "A checklist for testing and future improvements"],
    process: [
      { title: "Sort the audience", text: "We identify the few differences that genuinely change what a lead needs to hear next." },
      { title: "Plan the conversation", text: "Each email has a useful purpose, from welcoming a lead to answering a common concern." },
      { title: "Set it up", text: "I prepare the copy, automation rules, links, and checks needed before the sequence goes live." },
      { title: "Improve the timing", text: "Engagement and lead feedback help us refine the content, order, and timing." },
    ],
    benefits: ["More consistent follow-up without relying on memory", "More relevant messages for different types of leads", "A natural path back to a useful sales conversation"],
    faqs: [
      { q: "Can we use my current email platform?", a: "Often, yes. I first check whether it can handle the simple segments and automation the journey needs before suggesting a change." },
      { q: "How many emails will the sequence include?", a: "There is no useful one-size-fits-all number. The sequence should be long enough to help the customer decide, without sending messages simply to fill a schedule." },
    ],
    related: ["lead-generation", "content-strategy", "offer-messaging"],
  },
  {
    slug: "seo-aeo-geo",
    title: "SEO, AEO & GEO",
    shortTitle: "SEO, AEO & GEO",
    image: "/images/services/seo-aeo-geo.png",
    imageAlt: "A connected search visibility system linking traditional search, helpful answers, generative AI, and business growth",
    headline: "Help the right people—and the right search tools—understand your business.",
    summary: "Improve how your business appears in search results, direct answers, and AI-generated recommendations.",
    intro: "Search is changing, but the basics still matter: clear pages, genuinely useful answers, and a website that makes your expertise easy to understand. I help you strengthen traditional SEO, shape content for answer engines, and make important business information easier for generative AI tools to interpret. The work stays practical—fixing unclear pages, choosing useful topics, improving structure, and building trustworthy signals—so more of the right people can discover you without chasing every new search trend.",
    problem: "Potential customers may be searching for exactly what you offer, but unclear pages, weak structure, or thin answers can make your business difficult for search engines and AI tools to understand.",
    suitable: ["Businesses that want more relevant organic visibility", "Owners whose useful expertise is difficult to find online", "Teams preparing content for both search engines and AI-assisted discovery"],
    scopeEyebrow: "Visibility built on clarity",
    scopeHeadline: "Make your expertise easier to find and understand.",
    scopeIntro: "We’ll improve the pages, questions, structure, and trust signals that help customers, search engines, and AI systems recognize why your business is relevant.",
    includes: ["A practical search visibility review", "Keyword, question, and customer-intent research", "Page structure and on-page SEO improvements", "Answer-focused content recommendations", "Clear business facts and trust signals for AI discovery"],
    deliverables: ["A prioritized SEO, AEO, and GEO action plan", "Recommended page and content improvements", "Useful search questions and topic opportunities", "A simple checklist for measuring visibility"],
    process: [
      { title: "Review visibility", text: "We check how customers search, what your current pages communicate, and where useful information is missing." },
      { title: "Choose priorities", text: "I focus the work on the searches, questions, and pages most connected to real customer decisions." },
      { title: "Improve the signals", text: "We strengthen page structure, helpful answers, internal connections, and trustworthy business details." },
      { title: "Measure and refine", text: "Search impressions, qualified visits, enquiries, and real customer questions guide the next improvements." },
    ],
    benefits: ["Clearer visibility for relevant searches and customer questions", "Pages that are easier for people, search engines, and AI tools to understand", "A more durable search strategy built around useful information"],
    faqs: [
      { q: "What is the difference between SEO, AEO, and GEO?", a: "SEO helps pages appear in traditional search results. AEO makes content easier to use in direct answers. GEO improves the clarity and trust signals that generative AI systems may use when forming recommendations. The three overlap, so I treat them as one connected visibility problem." },
      { q: "Can you guarantee first place on Google or an AI recommendation?", a: "No. No responsible consultant can guarantee rankings or inclusion in an AI answer. The work improves clarity, relevance, technical foundations, and trustworthy signals so your business has a better chance of being discovered." },
    ],
    related: ["content-strategy", "websites-landing-pages", "ai-marketing-strategy"],
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    tip?: string;
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
    link?: { before: string; label: string; href: string; after?: string };
  }[];
  closingHeading?: string;
  closing: string[];
  closingLink: { before: string; label: string; href: string; after?: string };
};

export const articles: Article[] = [
  {
    slug: "how-ai-is-changing-seo-and-what-to-do-about-it",
    title: "How AI Is Changing SEO, and What to Do About It",
    category: "SEO & AI Search",
    readingTime: "8 min read",
    image: "/images/blog/cover-ai-seo.png",
    imageAlt: "A small-business owner navigating connected traditional and AI-powered search results",
    description: "AI is rewriting how people search and how Google ranks content. Here are six changes every small business owner should understand, and exactly what to do about each one.",
    intro: "A few years ago, getting found on Google meant picking a keyword, writing a decent page around it, and building a few links. That recipe still matters, but it is no longer the whole story. Today, people ask full questions to Google, ChatGPT, Claude, and Perplexity, and they often get a complete answer without ever clicking a website.",
    sections: [
      {
        heading: "AI SEO is a different game",
        paragraphs: [
          "If you run a small or medium business, this can feel unsettling. Your website traffic might be flat, your competitors suddenly seem to publish twice as much, and everyone online has a different opinion about whether SEO is dead.",
          "It isn't. But AI SEO is a different game from the one most of us learned, and the businesses that adapt early will pick up customers while others wonder where their traffic went. Below are six real changes AI is bringing to search, and a clear action for each one.",
        ],
      },
      {
        heading: "1. Search results now answer questions directly",
        paragraphs: [
          "Google's AI Overviews and AI-powered assistants summarize answers at the top of the page. A user searching “how much does a website redesign cost” may read a neat summary and never visit a single link.",
          "This means fewer clicks for simple, factual queries. The pages that still win are the ones AI draws from and cites.",
          "What to do: Structure your content so it is easy to quote. Put a clear, direct answer in the first two or three sentences under each heading, then add depth below it. Use short paragraphs, plain language, and question-style headings. When your page is the easiest source to summarize, you become the source AI pulls from.",
        ],
        link: { before: "This is one of the practical foundations of my ", label: "SEO, AEO & GEO service", href: "/services/seo-aeo-geo", after: "." },
      },
      {
        heading: "2. Keywords matter less than intent and topics",
        paragraphs: [
          "Older SEO often meant repeating a phrase until Google noticed. AI systems understand meaning, not just matching words. They look at whether your page truly satisfies what the person wanted, including the follow-up questions they haven't asked yet.",
          "What to do: Stop writing for a single keyword. Build content around a topic and cover it properly. If you write about “AI marketing for restaurants,” also address costs, tools, common mistakes, and results. One thorough page beats five thin ones. Use keyword research to find the questions your customers really ask, then answer them completely.",
        ],
        link: { before: "If you need a repeatable way to turn real customer questions into useful pages, explore my ", label: "content strategy and AI-assisted creation service", href: "/services/content-strategy", after: "." },
      },
      {
        heading: "3. AI content is everywhere, so original content stands out",
        paragraphs: [
          "Anyone can now generate a 1,000-word article in thirty seconds. The result is a flood of bland, near-identical content. Google has said it rewards helpful content regardless of how it's made, but in practice, generic pages that add nothing new struggle to rank.",
          "What to do: Use AI as a helper, not a replacement for your voice. Let it draft outlines, speed up research, and polish wording, then add what AI cannot: your own experience, real client results, screenshots, opinions, and specific examples. A story about a real customer you helped is something no chatbot can copy. That is the content that earns trust and rankings.",
        ],
        image: "/images/blog/ai-seo-human-review.png",
        imageAlt: "A consultant reviewing an AI-assisted SEO draft against notes and source material",
        imageCaption: "AI can speed up the first draft; experience, fact-checking, and a human point of view make it worth reading.",
        link: { before: "Read more about why I keep human judgment at the centre on my ", label: "About page", href: "/about", after: "." },
      },
      {
        heading: "4. Trust signals are more important than ever",
        paragraphs: [
          "With so much machine-written content online, search engines lean harder on signals that a real, credible person or business is behind a page. Google calls this E-E-A-T: experience, expertise, authoritativeness, and trustworthiness.",
          "What to do: Show who you are. Add an author bio with real credentials, a clear About page, genuine testimonials, case studies, and contact details. Cite reliable sources when you share statistics. Keep your information up to date. Small touches like these tell both readers and algorithms that your business is the real thing.",
        ],
        link: { before: "A clear, credible website makes those trust signals easier to see. Here is how I approach ", label: "websites and landing pages", href: "/services/websites-landing-pages", after: "." },
      },
      {
        heading: "5. Search is spreading beyond Google",
        paragraphs: [
          "People now discover businesses through ChatGPT, Perplexity, Claude, and other AI tools, as well as YouTube, Reddit, and social platforms. Optimizing only for traditional Google rankings misses a growing share of how customers look for help. This new area is often called generative engine optimization, or GEO.",
          "What to do: Make your brand easy for AI systems to understand and recommend. Keep your business name, services, and location consistent everywhere online. Add FAQ sections and structured data (schema markup) so machines can read your content clearly. Earn mentions on reputable sites, directories, and communities in your industry. The more consistently and clearly your business is described across the web, the more likely AI tools are to mention it.",
        ],
        image: "/images/blog/ai-search-visibility.png",
        imageAlt: "A small business connected to search results, location information, FAQs, reviews, and AI recommendations",
        imageCaption: "Consistent business facts and useful answers help both people and AI systems understand what you offer.",
        tip: "Check that your business name, services, location, contact details, and short description match across your website and your most important directory profiles.",
      },
      {
        heading: "6. AI tools make SEO faster and cheaper to run",
        paragraphs: [
          "There is good news too. AI can take over the slow parts of SEO: clustering keywords, auditing pages, drafting meta descriptions, spotting content gaps, writing schema, and summarizing competitor strategies. Jobs that took a week can now take an afternoon.",
          "What to do: Build AI into your workflow, but always review the output. Use it to speed up research and routine tasks, then spend the time you saved on strategy, quality, and promotion. Check facts, edit for tone, and never publish raw AI output. Speed is only an advantage if the quality holds.",
        ],
        link: { before: "If you are deciding where AI genuinely belongs in your marketing, start with a practical ", label: "AI-powered digital marketing strategy", href: "/services/ai-marketing-strategy", after: "." },
      },
    ],
    closingHeading: "The verdict",
    closing: [
      "AI is not killing SEO. It is raising the bar. Basic, formulaic content that once ranked easily is now the first to disappear, while helpful, original, and trustworthy content is more valuable than ever.",
      "The winners will be businesses that do three things well. First, they answer real customer questions clearly and completely. Second, they back that content with genuine experience and proof. Third, they use AI to work faster without letting it replace their human voice.",
      "If you take only one thing from this article, let it be this: write for people first, structure for machines second, and use AI to support both. Small businesses actually have an edge here. You know your customers, your results, and your story far better than any large company's content team or any chatbot ever could.",
      "The businesses that start adjusting now will be the ones AI tools recommend next year. If you would like help finding out where your website stands, a quick SEO and AI-readiness audit is a great first step.",
    ],
    closingLink: { before: "Ready to get found in the age of AI search? ", label: "Get in touch for a free audit", href: "/contact", after: " of your website and a simple plan to improve your visibility." },
  },
  {
    slug: "digital-marketing-strategies-for-nepali-businesses",
    title: "5 Digital Marketing Strategies Nepali Businesses Can Actually Use",
    category: "Digital Marketing",
    readingTime: "8 min read",
    image: "/images/blog/cover-digital-marketing.png",
    imageAlt: "A Nepali business owner planning digital marketing from a Kathmandu workspace",
    description: "Five realistic ways to attract customers online without trying every platform or spending money without a clear plan.",
    intro: "Digital marketing often sounds more complicated than it is. A café in Pokhara, a consultancy in Kathmandu, an online shop in Butwal, and a local service business in Texas may use different platforms, but they face the same basic question: how do we help the right people notice us, trust us, and take the next step? The answer is rarely to post everywhere. It is to choose a few activities that work together.",
    sections: [
      {
        heading: "1. Lead with something useful—not another random post",
        paragraphs: [
          "Many businesses begin with the question, “What should we post today?” A better question is, “What would help a potential customer make a decision?” That small change makes marketing much easier. A restaurant might share its menu and delivery area clearly. A consultancy could offer a short eligibility check. A contractor could provide a rough project checklist before asking someone to book a call.",
          "The useful thing does not need to be a large ebook or an expensive promotion. It can be a clear price guide, a free audit, a short consultation, a size chart, a sample, or an honest answer to a question customers ask every week. When the offer is useful, the content and advertising around it have a purpose.",
        ],
        tip: "Write down the three questions customers ask before they buy. Turn the best answer into a post, short video, checklist, or consultation offer.",
        link: { before: "If the value of your service is difficult to explain, start by making the offer clearer. My ", label: "offer and marketing messaging service", href: "/services/offer-messaging", after: " is built for that kind of problem." },
      },
      {
        heading: "2. Make local search work before paying for more reach",
        paragraphs: [
          "When someone searches “dentist near me”, “best café in Lalitpur”, or “accountant in Dallas”, they are already looking for help. That is valuable attention. Before spending heavily on ads, make sure your Google Business Profile has the correct address, phone number, opening hours, services, photographs, and a working link to your website.",
          "Reviews matter too, but there is no need to chase them in an awkward way. Ask after a good customer experience, make the review link easy to open, and reply like a real person. For businesses serving several areas, create useful pages that explain where you work instead of copying the same page and changing only the city name.",
        ],
        image: "/images/blog/digital-local-search.png",
        imageAlt: "A Nepali café owner updating business information on a smartphone outside the shop",
        imageCaption: "Small improvements to your local presence can help nearby customers find and trust the business.",
        tip: "Search for your own business on Google from a phone. Check what a new customer can see without calling you, then fix the most obvious missing detail first.",
      },
      {
        heading: "3. Teach the questions your customers are already asking",
        paragraphs: [
          "Good content does not need to be clever. It needs to be useful. If customers regularly ask about price, timing, quality, risk, delivery, or what happens next, those questions are already your content plan. A trekking company could explain what first-time visitors should pack. A software consultant could show the difference between a quick fix and a proper system. A salon could explain how to prepare for a particular treatment.",
          "This approach works in Nepal and abroad because people want to feel informed before they commit. It also gives you something meaningful to share on Facebook, Instagram, LinkedIn, email, or your website instead of publishing posts simply to stay active.",
        ],
        link: { before: "If turning your knowledge into regular, natural content is the difficult part, see how I approach ", label: "content strategy and AI-assisted creation", href: "/services/content-strategy", after: "." },
      },
      {
        heading: "4. Run Meta ads with one clear goal",
        paragraphs: [
          "Facebook and Instagram are still useful for many Nepali businesses, but pressing the Boost button is not a complete strategy. Decide what you want the right person to do: send a message, request a quote, book a consultation, visit a product page, or join a list. Then build the ad around that one action.",
          "The message in the ad should match what happens after the click. If the ad promises a free consultation but the landing page talks vaguely about the company, people lose confidence. Start with a modest budget, try a few genuinely different messages or visuals, and judge the campaign by useful enquiries—not by likes alone.",
        ],
        image: "/images/blog/digital-campaign-planning.png",
        imageAlt: "Two Nepali colleagues mapping a focused customer journey for a digital campaign",
        imageCaption: "A useful campaign starts with the customer journey—not the Boost button.",
        tip: "Before launching an ad, send the link to someone unfamiliar with the offer. Ask them what they think they will receive and what they should do next.",
        link: { before: "For businesses that want the campaign, offer, landing page, and follow-up to work as one journey, my ", label: "Meta Ads Management service", href: "/services/meta-ads", after: " explains the process." },
      },
      {
        heading: "5. Follow up where your customers actually respond",
        paragraphs: [
          "A surprising number of leads are lost after they enquire. The form works, the message arrives, and then the reply is late, unclear, or never sent. In Nepal, a customer may prefer Messenger, WhatsApp, Viber, or a phone call. In the US or another market, email or SMS may be more common. Use the channel your customer already trusts, and make the next step easy to understand.",
          "You do not need a complicated automation to begin. A quick acknowledgement, a useful answer, and a clear expectation about when a person will reply can make the business feel far more reliable. Keep a simple record of new enquiries so that promising conversations do not disappear inside one person’s inbox.",
        ],
        bullets: [
          "Confirm that the enquiry was received",
          "Answer the immediate question before making another sales pitch",
          "Explain who will respond and when",
          "Follow up once or twice with something useful, not just “checking in”",
        ],
      },
      {
        heading: "A simple plan for the next 30 days",
        paragraphs: [
          "Choose one useful offer, tidy your local search presence, answer four real customer questions, and create one clear follow-up routine. If you run ads, send them to that same offer. This is less exciting than chasing every new platform, but it gives you a connected system you can actually learn from.",
          "At the end of the month, look at the quality of the conversations you received. Which message brought serious enquiries? Where did people hesitate? Which questions kept appearing? Those answers should shape the next month of marketing.",
        ],
      },
    ],
    closing: [
      "The best digital marketing strategy is not the one with the most tools. It is the one your business can use consistently and your customers can understand easily.",
    ],
    closingLink: { before: "If you want help turning these ideas into one practical plan, you can ", label: "explore my digital marketing services", href: "/services", after: " and choose the area that matches your current problem." },
  },
  {
    slug: "how-to-use-ai-in-your-business",
    title: "How to Use AI in Your Business Without Losing the Human Touch",
    category: "AI for Business",
    readingTime: "9 min read",
    image: "/images/blog/cover-ai-business.png",
    imageAlt: "A Nepali entrepreneur working with a realistic AI assistant in a modern evening office",
    description: "Seven down-to-earth ways to save time with AI while keeping your judgment, customer trust, and real business voice intact.",
    intro: "AI is everywhere now, which makes it easy to feel that your business is already behind. It is not. You do not need ten subscriptions, a complicated automation, or an AI chatbot greeting every visitor. You need one or two uses that remove boring work, help you respond faster, or make a good decision easier. That is where AI becomes valuable.",
    sections: [
      {
        heading: "1. Begin with a task you already repeat",
        paragraphs: [
          "Look at the work that quietly takes time every week: sorting enquiries, turning meeting notes into action points, rewriting the same product information, preparing quotations, or answering the same five questions. These are better starting points than asking an AI tool to “grow the business”.",
          "For example, a travel company could use AI to turn a rough itinerary into a tidy first draft. A real-estate office could organize viewing notes. A consultant could summarize a long call before writing a proposal. In each case, a person still checks the final result before it reaches the customer.",
        ],
        tip: "For one week, keep a note of every task you repeat. Circle the one that is predictable, time-consuming, and easy for you to review.",
      },
      {
        heading: "2. Create content faster, but never publish the first draft",
        paragraphs: [
          "AI is useful for brainstorming topics, building an outline, shortening a long explanation, or turning one article into several social posts. It is much less reliable at sounding like you without guidance. A first draft often uses smooth but empty phrases, repeats obvious advice, and confidently includes details that may be wrong.",
          "Give it your raw material first: notes from customer conversations, a voice memo, product facts, examples, and your actual opinion. Then edit the draft aloud. Remove anything you would never say to a customer. Add the small details that only someone inside the business would know. That is usually where the human voice comes back.",
        ],
        image: "/images/blog/ai-workflow-review.png",
        imageAlt: "A Nepali business owner comparing an AI draft with handwritten notes and source documents",
        imageCaption: "AI can prepare the first version; a knowledgeable person should still shape the final one.",
        link: { before: "This human-review process is also at the centre of my ", label: "AI-assisted content service", href: "/services/content-strategy", after: "; the tool helps with speed, but it does not get the final word." },
      },
      {
        heading: "3. Respond to common questions more quickly",
        paragraphs: [
          "Customers appreciate a fast response, especially when they are comparing several businesses. AI can help prepare answers to routine questions about opening hours, delivery, booking, eligibility, or next steps. It can also suggest a draft reply based on the information a customer has provided.",
          "Do not pretend a bot is a person, and do not automate sensitive or unusual conversations. A family asking about an important medical appointment, a customer making a complaint, or a client discussing a large financial decision deserves a thoughtful human response. Use AI to reduce the waiting, not the care.",
        ],
      },
      {
        heading: "4. Learn from customer feedback you already have",
        paragraphs: [
          "Useful insight is often sitting in review pages, support messages, enquiry forms, and sales notes. AI can group repeated questions, complaints, and reasons for hesitation so you can see patterns more quickly. A hotel might discover that guests keep asking about airport pickup. An online shop may notice that delivery times are creating doubt. A US service company may find that customers do not understand what is included in the quote.",
          "The tool can point to a pattern; you decide what it means. Sometimes the answer is a better website explanation. Sometimes it is a change in the service itself. The important part is to use the information, not simply produce another report.",
        ],
        image: "/images/blog/ai-customer-insights.png",
        imageAlt: "A small international team reviewing anonymized customer feedback and business patterns",
        imageCaption: "AI may reveal a pattern, but people who understand the business must decide what it means.",
        tip: "Remove names, phone numbers, email addresses, and other private details before putting customer feedback into any public AI tool.",
      },
      {
        heading: "5. Make reports easier to understand",
        paragraphs: [
          "Campaign dashboards can create more confusion than clarity. AI can help turn a table of figures into a short list of questions: Which campaign brought qualified enquiries? Did response time improve? Where did people stop? What changed from last month?",
          "Treat the summary as a starting point, not a verdict. If an ad produced fewer leads but those leads became better sales conversations, that may be a good result. The tool does not know this unless your business data and human feedback are part of the review.",
        ],
        link: { before: "If you need to decide where AI genuinely fits across your marketing, my ", label: "AI-powered digital marketing strategy", href: "/services/ai-marketing-strategy", after: " starts with the business problem rather than a list of tools." },
      },
      {
        heading: "6. Protect your customer data and your reputation",
        paragraphs: [
          "Convenience can make people careless. Do not paste confidential contracts, medical details, passwords, private financial information, or a customer database into a tool without understanding how that tool stores and uses data. Check the settings and the terms. When in doubt, remove identifying details or keep the task outside the AI system.",
          "Accuracy matters just as much. AI can invent a source, misunderstand Nepali context, use the wrong currency, or write a promise your business cannot keep. Someone who understands the work must review anything that affects a customer, employee, payment, or public claim.",
        ],
      },
      {
        heading: "7. Test one useful workflow for 30 days",
        paragraphs: [
          "Choose one task and write down how it works: what information goes in, what the AI prepares, who reviews it, and where the finished work goes. Use it for a month. Did it save time? Did the quality stay high? Did customers receive a faster or clearer response? If not, change it or stop using it.",
          "A small workflow that works every week is more valuable than an impressive demonstration nobody uses again. Once the first process is reliable, you can decide whether another part of the business deserves the same treatment.",
        ],
      },
    ],
    closing: [
      "AI should make the business feel lighter, not less human. Keep your judgment, your customer knowledge, and your responsibility at the centre. Let the technology handle the useful supporting work.",
    ],
    closingLink: { before: "You can read more about the thinking behind this approach on my ", label: "About page", href: "/about", after: ", or contact me if you want to discuss one practical place to begin." },
  },
  {
    slug: "five-practical-ways-to-increase-sales",
    title: "Five Practical Ways to Increase Sales Without Becoming Pushy",
    category: "Sales & Conversion",
    readingTime: "8 min read",
    image: "/images/blog/cover-increase-sales.png",
    imageAlt: "A South Asian business owner and an international client shaking hands after a productive meeting",
    description: "A straightforward guide to earning more sales through clearer offers, stronger trust, easier buying, and better follow-up.",
    intro: "When sales slow down, the first reaction is often to run a discount or spend more on advertising. Sometimes that helps. Often it only sends more people into a buying process that was already unclear. Before pushing harder, look at the small moments that help a customer feel understood, confident, and ready to move forward.",
    sections: [
      {
        heading: "1. Make it obvious who the offer is for",
        paragraphs: [
          "A customer should not need to study your website or message you three times to understand what you sell. Say who the service is for, what problem it helps with, what is included, and what they should do next. Clear language is especially important when customers are reading quickly on a phone.",
          "Imagine a Kathmandu education consultancy advertising “complete guidance”. That could mean almost anything. “Application guidance for Nepali students planning postgraduate study in Australia” is less fancy, but the right student knows immediately that the service may be relevant. The same principle works for a bookkeeping firm in New York or a photographer in London.",
        ],
        tip: "Ask someone outside the business to read your main offer for ten seconds. If they cannot explain it back to you, the message needs work.",
        link: { before: "When the offer feels difficult to describe, my ", label: "offer and marketing messaging service", href: "/services/offer-messaging", after: " can help make the value easier to understand." },
      },
      {
        heading: "2. Show real proof, even if it is small",
        paragraphs: [
          "People trust evidence more than adjectives. Instead of saying you provide “excellent service”, show a genuine review, a before-and-after example, a completed project, a short customer story, or the steps you use to maintain quality. New businesses may not have large case studies yet, but they can still show the founder’s experience, the process, sample work, or a clear guarantee they can honestly keep.",
          "Keep proof specific and truthful. “They replied quickly and delivered the order to Bhaktapur the next morning” says more than “Amazing company!” Always ask permission before sharing a customer’s name, image, or private results.",
        ],
        image: "/images/blog/sales-social-proof.png",
        imageAlt: "A Nepali shop owner and customer sharing a genuine product experience in a local clothing shop",
        imageCaption: "Real customer experiences are more convincing than another claim about excellent service.",
      },
      {
        heading: "3. Remove one unnecessary step from buying",
        paragraphs: [
          "Every extra step gives a customer another chance to leave. A slow page, a form asking for too much, an unclear delivery charge, or a booking button that leads to another explanation can quietly cost sales. Go through the process yourself on a phone, preferably using mobile data rather than perfect office Wi-Fi.",
          "For a local shop, the improvement may be showing the price and delivery area before asking for a message. For a consultant, it may be replacing a long contact form with four useful questions. For an international ecommerce business, it may be making returns and shipping clear before checkout.",
        ],
        bullets: [
          "Can people see the price or understand how pricing works?",
          "Is the primary button easy to find on a phone?",
          "Do you ask only for information needed at this stage?",
          "Does the customer know what happens after they respond?",
        ],
        link: { before: "If the website itself is creating friction, see my approach to ", label: "websites and landing pages", href: "/services/websites-landing-pages", after: "." },
      },
      {
        heading: "4. Follow up like a helpful person",
        paragraphs: [
          "Not every interested customer is ready today. They may need to compare options, speak to a partner, wait for payday, or simply find time. A good follow-up reminds them why they enquired and helps with the next decision. It should not make them feel chased.",
          "Refer to the actual conversation. Answer a question, send the promised information, or clarify the next step. “You asked whether installation is included; here is exactly what the quoted price covers” is useful. “Just checking in again” gives the customer no new reason to reply.",
        ],
        image: "/images/blog/sales-mobile-journey.png",
        imageAlt: "A small-business owner testing a mobile purchase journey and customer follow-up process",
        imageCaption: "Testing the buying journey yourself often reveals the small frustrations customers never report.",
        tip: "Create two simple follow-up messages: one for the day after an enquiry and one for a few days later. Leave space to add a detail from the real conversation.",
        link: { before: "For businesses losing good enquiries after the first contact, a clearer ", label: "lead generation and follow-up journey", href: "/services/lead-generation", after: " may be more valuable than simply buying more traffic." },
      },
      {
        heading: "5. Advertise only after the basics are ready",
        paragraphs: [
          "Advertising can bring attention quickly, but it cannot repair an unclear offer, missing proof, or a confusing order process. Fix those basics first. Then use a focused campaign to reach people who are likely to need the offer and send them to a page or conversation that matches the ad.",
          "Start small and pay attention to sales conversations, not only platform numbers. Which leads understood the offer? Which ones were a good fit? Where did people hesitate? A campaign that produces twenty serious conversations can be more valuable than one that produces two hundred cheap form submissions.",
        ],
      },
      {
        heading: "The useful question is: where are sales being lost?",
        paragraphs: [
          "If few people notice the business, you may need better reach. If many people look but few enquire, the offer or page may be unclear. If enquiries arrive but disappear, the follow-up or sales conversation may be the problem. Treating each situation as “we need more leads” wastes time and money.",
          "Look at the journey from the customer’s point of view and fix the weakest part first. That is usually a steadier route to growth than adding pressure, constant discounts, or another tool nobody has time to manage.",
        ],
      },
    ],
    closing: [
      "Increasing sales is rarely one dramatic trick. It is a collection of small improvements that make the customer’s decision easier and the business’s response more reliable.",
    ],
    closingLink: { before: "If you are unsure where your own sales journey is breaking down, ", label: "contact me", href: "/contact", after: " and tell me what is happening. We can start with the part that is costing you the most useful opportunities." },
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
