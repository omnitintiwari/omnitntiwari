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
    title: "I co-create solutions that align strategy, user needs and market fit.",
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
    des: "Full-stack task app with drag-and-drop, reminders, and team workflows using React, Node.js, MongoDB.",
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
    des: "Built a secure e-commerce platform with Tor compatibility, PGP encryption, and crypto escrow.",
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
    des: "Won a skincare case competition for brand strategy, user research, and storytelling clarity.",
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
    des: "5-year study of balance sheets, ratios, and performance trends to assess corporate health.",
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
  }
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
