import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I co-create solutions that align user needs and market fit.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborate easily across industries and time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entrepreneur with a builder’s mindset, crafting businesses, not just code.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a sales community through a niche job portal tailored to sales roles.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have an idea or challenge? Let’s build something bold.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

 export const projects = [
  {
    id: 1,
    title: "Pinnacle Solutions – Visual Identity & Web",
    des: "Created brand identity and responsive React website for a consulting firm to boost professional presence.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/canva.svg", "/netlify.svg"],
    link: "https://pinnaclesolution.netlify.app/",
    sourceCode: "https://pinnaclesolution.netlify.app/",
  },
  {
    id: 2,
    title: "Task Tracker – Productivity Tool",
    des: "Full-stack task app with drag-and-drop, reminders and team workflows using React, Node.js, MongoDB.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/tail.svg"],
    link: "https://github.com/omnitintiwari/task-manager-om",
    sourceCode: "https://github.com/omnitintiwari/task-manager-om",
  },
  {
    id: 3,
    title: "IntelProc Solutions – Procurement Site",
    des: "Developed a full web presence and visual assets for a B2B procurement startup using Webflow and Canva.",
    img: "/p3.svg",
    iconLists: ["/netlify.svg", "/canva.svg", "/re.svg", "/tail.svg"],
    link: "https://intelproc.in",
    sourceCode: "https://intelproc.in",
  },
  {
    id: 4,
    title: "Dark Web E-Commerce – Full-Stack Prototype",
    des: "Built a secure e-commerce platform with Tor compatibility, PGP encryption and crypto escrow.",
    img: "/p4.svg",
    iconLists: ["/node.svg", "/pgp.svg", "/crypto.svg", "/re.svg"],
    link: "https://github.com/omnitintiwari/DarkChain",
    sourceCode: "https://github.com/omnitintiwari/DarkChain",
  },
  {
    id: 5,
    title: "AeroBroom – Fantasy UI in Figma",
    des: "Designed a broom booking app inspired by Harry Potter with real UX flow and ride features.",
    img: "/p5.svg",
    iconLists: ["/figma.svg", "/ui.svg"],
    link: "https://www.figma.com/design/p9wrWUb7OkbuvIkFfubaJf/AeroBroom-Project?node-id=0-1",
    sourceCode: "https://www.figma.com/design/p9wrWUb7OkbuvIkFfubaJf/AeroBroom-Project?node-id=0-1",
  },
  {
    id: 6,
    title: "Chosen – Skincare Case Study (Winner)",
    des: "Won a skincare case competition for brand strategy, user research and storytelling clarity.",
    img: "/p6.svg",
    iconLists: ["/canva.svg"],
    link: "https://www.canva.com/design/DAGT3mKYocE/eHOZ2gvZG4-vLNz66BbgYg/edit",
    sourceCode: "https://www.canva.com/design/DAGT3mKYocE/eHOZ2gvZG4-vLNz66BbgYg/edit",
  },
  {
    id: 7,
    title: "R.I.O.S.S. Pharma – Capstone Project",
    des: "Proposed domestic manufacturing model for India’s KSM needs; aligned with policy and market feasibility.",
    img: "/p7.svg",
    iconLists: ["/gov.svg"],
    link: "https://www.canva.com/design/DAGXyK_Dv5k/I0NQ88soy1PjzIX0f2bwtg/edit?utm_content=DAGXyK_Dv5k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGXyK_Dv5k/I0NQ88soy1PjzIX0f2bwtg/edit?utm_content=DAGXyK_Dv5k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 8,
    title: "MotherAI – AI SaaS Suite (Runner-Up)",
    des: "Ideated freemium AI productivity suite: summarizer, chat, code tools; praised for design and model.",
    img: "/p8.svg",
    iconLists: ["/ai.svg"],
    link: "https://www.canva.com/design/DAGRXxDggvA/6MeVVSFBeCaSDDyJ-sTSGA/edit?utm_content=DAGRXxDggvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGRXxDggvA/6MeVVSFBeCaSDDyJ-sTSGA/edit?utm_content=DAGRXxDggvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 9,
    title: "Asian Paints – Financial Analysis",
    des: "5-year study of balance sheets, ratios and performance trends to assess corporate health.",
    img: "/p9.svg",
    iconLists: ["/excel.svg", "/canva.svg"],
    link: "https://www.canva.com/design/DAGdmP03zfo/B_XxJxCYPIYd1f7SVXQQtA/edit",
    sourceCode: "https://www.canva.com/design/DAGdmP03zfo/B_XxJxCYPIYd1f7SVXQQtA/edit",
  },
  {
    id: 10,
    title: "Reliance Smart Bazaar – Retail Ops Study",
    des: "Live in-store audit on merchandising, inventory, billing and customer behavior in retail setup.",
    img: "/p10.svg",
    iconLists: ["/excel.svg", "/canva.svg", "/analytics.svg"],
    link: "https://www.canva.com/design/DAGfoXSLkwc/2tQr_vWd-cwQ1aRX06kCQQ/edit",
    sourceCode: "https://www.canva.com/design/DAGfoXSLkwc/2tQr_vWd-cwQ1aRX06kCQQ/edit",
  },
  {
    id: 11,
    title: "SDG Hackathon – Sustainable Perfume",
    des: "Eco-friendly fragrance idea with SDG-aligned design and manufacturing pitch.",
    img: "/p11.svg",
    iconLists: ["/sdg.svg", "/eco.svg", "/canva.svg"],
    link: "https://www.canva.com/design/DAGRquRlTQw/Q99W2WFwCL6TOwxY_Ule6Q/edit",
    sourceCode: "https://www.canva.com/design/DAGRquRlTQw/Q99W2WFwCL6TOwxY_Ule6Q/edit",
  },
  {
    id: 12,
    title: "Out of the Box – Packaging Strategy",
    des: "Built growth plan for a sustainable packaging startup; praised for actionable storytelling and revenue model.",
    img: "/p12.svg",
    iconLists: ["/eco.svg", "/canva.svg"],
    link: "https://www.canva.com/design/DAGl3VKRupY/qoX_WYqvQad_eER9RSvrbg/edit",
    sourceCode: "https://www.canva.com/design/DAGl3VKRupY/qoX_WYqvQad_eER9RSvrbg/edit",
  },
  {
    id: 13,
    title: "Game Development – Horror Game Pitch",
    des: "Pitched a supernatural horror game to Okimi Studios with market data, financials and India's rising gaming potential.",
    img: "/p13.svg",
    iconLists: ["/figma.svg", "/canva.svg"],
    link: "https://www.canva.com/design/DAGmFpS7Uho/dh3I71QeooS435wdftHGow/edit?utm_content=DAGmFpS7Uho&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGmFpS7Uho/dh3I71QeooS435wdftHGow/edit?utm_content=DAGmFpS7Uho&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 14,
    title: "Zenith(Cybersecurity) – AI Firewall Startup",
    des: "Proposed an AI-driven firewall platform for enterprises with ₹362 Cr projections and strong GTM strategy.",
    img: "/p14.svg",
    iconLists: ["/firewall.svg"],
    link: "https://www.canva.com/design/DAGhHQXHhhE/XldJLhzeSsa-4U90m7wI4Q/edit?utm_content=DAGhHQXHhhE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGhHQXHhhE/XldJLhzeSsa-4U90m7wI4Q/edit?utm_content=DAGhHQXHhhE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 15,
    title: "Synapsy – Bakery Business Plan",
    des: "Crafted a scalable business model for a premium muffin & pastry brand with ₹1.6 Cr Year-3 revenue forecast.",
    img: "/p15.svg",
    iconLists: ["/excel.svg", "/figma.svg"],
    link: "https://www.canva.com/design/DAGXCkKf0Ok/M8vw9kG5VtHZJpveNhG_Hg/edit?utm_content=DAGXCkKf0Ok&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGXCkKf0Ok/M8vw9kG5VtHZJpveNhG_Hg/edit?utm_content=DAGXCkKf0Ok&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 16,
    title: "People Biases – Sales Job Portal",
    des: "Conducted bias analysis for SJV, identifying unconscious patterns in sales hiring and proposing ethical, inclusive recruitment strategies.",
    img: "/p16.svg",
    iconLists: ["/figma.svg"],
    link: "https://www.canva.com/design/DAGZ1xZMzTs/hDKCpqjZeelvzouS1Q2Q1A/edit?utm_content=DAGZ1xZMzTs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGZ1xZMzTs/hDKCpqjZeelvzouS1Q2Q1A/edit?utm_content=DAGZ1xZMzTs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 17,
    title: "Sustainable Food Startup",
    des: "Pitched a food waste reduction app selling discounted leftover meals to promote low-cost, scalable sustainability.",
    img: "/p17.svg",
    iconLists: ["/canva.svg", "/excel.svg","/analytics.svg"],
    link: "https://www.canva.com/design/DAGZuQG39iY/4rdmqRwHr3nMSvIFWv_kQQ/edit?utm_content=DAGZuQG39iY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGZuQG39iY/4rdmqRwHr3nMSvIFWv_kQQ/edit?utm_content=DAGZuQG39iY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 18,
    title: "Fair & Lovely – Cultural Bias Case Study",
    des: "Studied Unilever’s rebranding journey and proposed inclusive strategies to overcome cultural bias in marketing.",
    img: "/p18.svg",
    iconLists: ["/canva.svg"],
    link: "https://www.canva.com/design/DAGZu4151Hg/8fwiBOzOX6r98lKVrkjezQ/edit?utm_content=DAGZu4151Hg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGZu4151Hg/8fwiBOzOX6r98lKVrkjezQ/edit?utm_content=DAGZu4151Hg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 19,
    title: "The Rise & Fall of Nokia – Strategy Study",
    des: "Analyzed Nokia’s decline through SWOT, Porter’s Five Forces and strategic missteps in the mobile industry.",
    img: "/p19.svg",
    iconLists: ["/excel.svg", "/canva.svg"],
    link: "https://www.canva.com/design/DAGnPBYfnNI/Abwu_VJvZBZRFHv-5Y0jdg/edit?utm_content=DAGnPBYfnNI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGnPBYfnNI/Abwu_VJvZBZRFHv-5Y0jdg/edit?utm_content=DAGnPBYfnNI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 20,
    title: "Bernie Madoff – Ponzi Scheme Analysis",
    des: "Explored the $65B Ponzi scheme, its impact, regulatory failures and financial lessons from Madoff's scandal.",
    img: "/p20.svg",
    iconLists: [ "/canva.svg"],
    link: "https://www.canva.com/design/DAGRBarryX4/kSr4mUsVjsNm9nl8wYPz_Q/edit?utm_content=DAGRBarryX4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCode: "https://www.canva.com/design/DAGRBarryX4/kSr4mUsVjsNm9nl8wYPz_Q/edit?utm_content=DAGRBarryX4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
] as const;

export const testimonials = [
   {
    quote: `I’ve had the pleasure of teaching Om, a sharp, inquisitive mind with a natural flair for tech entrepreneurship. His confidence and problem-solving abilities consistently stood out in class discussions and projects. I’m confident he’ll drive impactful innovation wherever he go.`,
    name: "Shubhranil Kundu",
    title: "Cofounder, Intella Education | Director L&D OKiMi Studios",
  },
  {
    quote: `Om is a delightful mix of wit, mischief and sharp thinking. He may have preferred the back bench, but his ideas always led from the front. A natural leader in disguise, he brings both spark and substance to the table.`,
    name: "Utkarsh Rawat",
    title: "Founder - The Product Lens | Product & Design Lead - howtocrackinterviews.com ",
  },
  {
    quote: `A highly dedicated and hardworking individual, Om Nitin consistently demonstrates a strong eagerness to learn and grow. His commitment to excellence makes him a standout performer.`,
    name: "Himanshu Kumawat",
    title: "Security Compliance Manager | CISA | Ex KPMG India I Ex PwC India",
  },
  {
    quote: `Om comes in with a great sense of creativity, adventure and wonder - Exactly what is required from young and aspiring founders and entrepreneurs. He has great business acumen and a great sense to identify various business opportunities. As his mentor and business faculty at the Insitute of Venture building, I believe he will build and run very realistic and meaningful businesses in future.`,
    name: "Abhishek Srivastava",
    title: "CEO and Co-Founder, The CareerTrek Company | Founder LeagueUNO | Ex-Apple, Accenture, Schneider Electric ",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Excel",
    img: "/excel.svg",
    nameImg: "/excelname.svg",
  },
  {
    id: 2,
    name: "analytics",
    img: "/analytics.svg",
    nameImg: "/analyticsname.svg",
  },
  {
    id: 3,
    name: "Figma",
    img: "/figma.svg",
    nameImg: "/figmaname.svg",
  },
  {
    id: 4,
    name: "mixpanel",
    img: "/mixpanel.svg",
    nameImg: "/mixpanelname.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/icons8-shopify.svg",
    nameImg: "/shopifyname.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Brand & Web Consultant – IntelProc Solutions",
    desc: "Created a complete brand pack and built a react based website for a B2B procurement startup, helping shape their online presence.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: " Co-Founder – Grit (HR Tech Startup)",
    desc: "Launched a job portal for early career talent with a content-first approach. Led research, brand strategy and business model design.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Founder – XyloZoom (D2C Apparel Brand)",
    desc: "Bootstrapped and ran an online store using Shopify. Managed Meta Ads, social media and generated over ₹15,000 in sales.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Developer – Pinnacle Solutions",
    desc: "Delivered a responsive React website and cohesive brand identity for a procurement firm using Canva and custom UI design.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/omnitintiwari",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/om-nitin-tiwari-8b649a250/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
