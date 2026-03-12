/* ═══════════════════════════════════════════
   SVG Association of Montreal - Constants
   ═══════════════════════════════════════════ */

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/SVGAMontreal/",
  instagram: "https://www.instagram.com/svg.montreal/",
  youtube: "#",
} as const;

/** Height of the TopBar in px — used by Navigation for sticky offset */
export const TOPBAR_HEIGHT = 33;

export const C = {
  navy: "#002B5C",
  deepNavy: "#001631",
  blue: "#0052A5",
  gold: "#FCD116",
  goldDark: "#D4A800",
  green: "#009739",
  greenLight: "#E8F5ED",
  sand: "#FAF7F2",
  cream: "#FFFDF7",
  white: "#FFFFFF",
  charcoal: "#1C1C28",
  slate: "#4A4A5A",
  muted: "#8A8A9A",
  border: "#E8E6E1",
  cardShadow: "0 2px 12px rgba(0,43,92,0.06)",
  cardHover: "0 12px 40px rgba(0,43,92,0.1)",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About",
    href: "/about",
    sub: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
    ],
  },
  { id: "events", label: "Events", href: "/events" },
  {
    id: "membership",
    label: "Membership",
    href: "/membership",
    sub: [
      { label: "Why Join?", href: "/membership#why-join" },
      { label: "Membership Plans", href: "/membership#plans" },
      { label: "Member Benefits", href: "/membership#benefits" },
    ],
  },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "news", label: "News & Blog", href: "/news" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { num: "5,000+", label: "Vincentians Supported", value: 5000 },
  { num: "20+", label: "Events Per Year", value: 20 },
  { num: "60+", label: "Years of Service", value: 60 },
  { num: "5+", label: "Active Programs", value: 5 },
] as const;

export const EVENTS = [
  {
    month: "MAR",
    day: "18",
    title: "Executive Meeting",
    location: "TBD — Members notified by email",
    time: "7:00 PM",
    price: "Members Only",
    tag: "Social" as const,
    desc: "Monthly executive board meeting to review operations, finances, and upcoming programming. All board members expected.",
  },
  {
    month: "MAR",
    day: "25",
    title: "Member Meeting",
    location: "TBD — Members notified by email",
    time: "7:00 PM",
    price: "Members Only",
    tag: "Social" as const,
    desc: "Our monthly general membership meeting — open to all members. Updates on association activities, upcoming events, and open discussion.",
  },
  {
    month: "APR",
    day: "15",
    title: "Executive Meeting",
    location: "TBD — Members notified by email",
    time: "7:00 PM",
    price: "Members Only",
    tag: "Social" as const,
    desc: "Monthly executive board meeting to review operations, finances, and upcoming programming. All board members expected.",
  },
  {
    month: "APR",
    day: "29",
    title: "Member Meeting",
    location: "TBD — Members notified by email",
    time: "7:00 PM",
    price: "Members Only",
    tag: "Social" as const,
    desc: "Our monthly general membership meeting — open to all members. Updates on association activities, upcoming events, and open discussion.",
  },
  {
    month: "JUN",
    day: "21",
    title: "SVG Brunch",
    location: "TBD — Montreal",
    time: "11:00 AM",
    price: "TBD",
    tag: "Social" as const,
    desc: "Our beloved annual brunch bringing the community together for great food, good vibes, and Vincentian fellowship.",
  },
  {
    month: "JUL",
    day: "05",
    title: "Vincy Unity Picnic",
    location: "TBD — Montreal",
    time: "12:00 PM",
    price: "Free",
    tag: "Cultural" as const,
    desc: "A summer celebration of Vincentian unity — food, music, games, and community spirit under the open sky. All are welcome.",
  },
  {
    month: "AUG",
    day: "16",
    title: "SVG Picnic",
    location: "TBD — Montreal",
    time: "12:00 PM",
    price: "Free",
    tag: "Cultural" as const,
    desc: "Our annual summer picnic — a favourite tradition for families across the Vincentian community in Montreal.",
  },
  {
    month: "OCT",
    day: "27",
    title: "Independence Dinner",
    location: "TBD — Montreal",
    time: "6:30 PM",
    price: "TBD",
    tag: "National" as const,
    desc: "Our flagship annual dinner commemorating the independence of St. Vincent and the Grenadines with food, entertainment, and community pride.",
  },
  {
    month: "DEC",
    day: "13",
    title: "Children's Christmas Party",
    location: "TBD — Montreal",
    time: "2:00 PM",
    price: "Free",
    tag: "Social" as const,
    desc: "A festive celebration for the little ones in our community — games, gifts, music, and plenty of holiday cheer for all ages.",
  },
] as const;

export const SIGNATURE_EVENTS = [
  {
    month: "OCT",
    title: "Independence Dinner",
    tag: "National" as const,
    image: "/leadership-gala.jpeg",
    desc: "Our most anticipated event of the year. Every October 27th, we gather to celebrate the independence of St. Vincent and the Grenadines with a formal dinner, live entertainment, and community pride.",
    detail: "Held every October · Annual tradition · All members welcome",
  },
  {
    month: "JUL",
    title: "Vincy Unity Picnic",
    tag: "Cultural" as const,
    image: "/community-event.jpeg",
    desc: "A summer celebration of Vincentian unity — food, music, games, and community spirit under the open sky. One of our most beloved gatherings, bringing together families from across Montreal.",
    detail: "Held every summer · Free admission · All ages welcome",
  },
  {
    month: "AUG",
    title: "SVG Picnic",
    tag: "Social" as const,
    image: "/hero-community.jpeg",
    desc: "Our annual summer picnic is a cherished tradition — a relaxed afternoon of Caribbean food, laughter, and togetherness that the whole family looks forward to every year.",
    detail: "Held every August · Free admission · Family-friendly",
  },
  {
    month: "DEC",
    title: "Children's Christmas Party",
    tag: "Social" as const,
    image: "/community-speaker.jpeg",
    desc: "A festive holiday celebration dedicated to the children of our community. Games, gifts, food, and plenty of holiday cheer make this one of the most joyful events on our calendar.",
    detail: "Held every December · Free for children · Family event",
  },
] as const;

export const TAG_COLORS = {
  Social: { bg: "#F0F4FF", text: "#0052A5" },
  Education: { bg: "#E8F5ED", text: "#009739" },
  Cultural: { bg: "#FFF8E8", text: "#D4A800" },
  National: { bg: "rgba(252,209,22,0.19)", text: "#002B5C" },
} as const;

export const MEMBERSHIP_PLANS = [
  {
    name: "Virtual Member",
    price: "Free",
    period: "always",
    tagline: "Stay connected from anywhere",
    features: [
      "Monthly newsletter & announcements",
      "Access to our online community group",
      "Event updates & early registration info",
      "Digital SVG Association resources",
      "Support the community from afar",
    ],
    color: C.blue,
    featured: false,
  },
  {
    name: "Member",
    price: "$20",
    period: "year",
    tagline: "Full community membership",
    features: [
      "All Virtual Member benefits",
      "In-person event access",
      "Voting rights at General Assembly",
      "Member directory listing",
      "Priority event registration",
      "Exclusive member programs & workshops",
    ],
    color: C.navy,
    featured: true,
  },
] as const;

export const RESOURCES = [
  {
    icon: "newcomer" as const,
    title: "Newcomer Services",
    desc: "Essential support for Vincentians arriving in Montreal — from your first week to your first year.",
    details: ["Immigration & settlement referrals", "Housing search assistance", "French language class listings", "Employment support & CV help", "School enrollment guidance", "Quebec social services navigation"],
  },
  {
    icon: "health" as const,
    title: "Health & Social Services",
    desc: "Connecting community members to the health and social programs available across Montreal.",
    details: ["RAMQ registration guidance", "CLSC locations & services", "Mental health referrals", "Community health programs", "Senior support services", "Disability & accessibility resources"],
  },
  {
    icon: "education" as const,
    title: "Education & Youth",
    desc: "Supporting Vincentian students and families from primary school through post-secondary.",
    details: ["School enrollment process", "Tutoring & homework help", "Youth scholarship fund", "After-school programs", "College & university guidance", "Mentorship connections"],
  },
  {
    icon: "business" as const,
    title: "Business Directory",
    desc: "Discover and support Vincentian-owned businesses and professional services in Montreal.",
    details: ["Vincentian business listings", "Networking events & mixers", "Career development workshops", "Entrepreneurship resources", "Job board & postings", "Professional mentorship"],
  },
  {
    icon: "heritage" as const,
    title: "SVG Heritage & Culture",
    desc: "Keeping our roots alive — history, traditions, cuisine, and diaspora connections.",
    details: ["SVG history & cultural materials", "Traditional recipes & cuisine", "Music, folklore & arts", "Diaspora connections worldwide", "Language & dialect resources", "Cultural calendar of events"],
  },
  {
    icon: "legal" as const,
    title: "Government & Legal",
    desc: "Guidance on navigating Canadian and Quebec government services and legal matters.",
    details: ["SVG consular services in Canada", "Citizenship & residency info", "Passport & travel document help", "Quebec tax filing guidance", "Tenant rights resources", "Free legal aid referrals"],
  },
] as const;

export const NEWS_ARTICLES = [
  {
    date: "Mar 5, 2026",
    tag: "Announcement",
    title: "Spring Membership Drive Now Open",
    excerpt: "Registration is open for 2026. Whether you're joining for the first time or renewing, now is the perfect moment to become part of our community.",
    image: "/community-event.jpeg",
  },
  {
    date: "Feb 12, 2026",
    tag: "Announcement",
    title: "New Community Partnership Announced",
    excerpt: "We're proud to announce a new partnership with local organizations to better serve Vincentian newcomers arriving in Montreal.",
    image: "/hero-community.jpeg",
  },
  {
    date: "Feb 1, 2026",
    tag: "Community",
    title: "Volunteer Spotlight: Meet Our Event Coordinators",
    excerpt: "Behind every great gathering is a dedicated team. We sat down with the volunteers who make our events come to life every year.",
    image: "/community-speaker.jpeg",
  },
  {
    date: "Jan 28, 2026",
    tag: "Community",
    title: "2025 Year in Review",
    excerpt: "A look back at the milestones, events, and achievements our association accomplished together this past year.",
    image: "/leadership-gala.jpeg",
  },
  {
    date: "Jan 10, 2026",
    tag: "Events",
    title: "Caribbean Culture Festival 2026 Date Confirmed",
    excerpt: "Mark your calendars — the Caribbean Culture Festival returns to Parc Jean-Drapeau on June 8th, 2026. Bigger and better than ever.",
    image: "/community-event.jpeg",
  },
  {
    date: "Dec 15, 2025",
    tag: "Events",
    title: "Holiday Food Drive Success",
    excerpt: "Thanks to the generosity of our members, we delivered over 200 food baskets to families across Montreal this holiday season.",
    image: "/hero-community.jpeg",
  },
  {
    date: "Nov 20, 2025",
    tag: "Culture",
    title: "Independence Day Gala Highlights",
    excerpt: "Relive the memorable moments from our annual celebration of St. Vincent and the Grenadines' Independence — an unforgettable evening.",
    image: "/leadership-gala.jpeg",
  },
  {
    date: "Oct 5, 2025",
    tag: "Youth",
    title: "Youth Scholarship Fund Reaches $5,000 Goal",
    excerpt: "Thanks to generous donations during our anniversary gala, the SVG Association Youth Scholarship Fund has hit its inaugural target.",
    image: "/community-speaker.jpeg",
  },
] as const;

export const BOARD_MEMBERS = [
  {
    name: "Cheryl Thomas",
    role: "President",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "Cheryl has led the association since 2018, bringing over 20 years of community organizing experience and a lifelong passion for Vincentian culture.",
  },
  {
    name: "Marcus Williams",
    role: "Vice President",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Marcus oversees programming and partnerships, coordinating with Montreal's multicultural organizations to amplify our community's voice.",
  },
  {
    name: "Sandra Joseph",
    role: "Secretary",
    photo: "https://randomuser.me/api/portraits/women/56.jpg",
    bio: "Sandra manages communications and records, ensuring our members stay informed and our governance remains transparent.",
  },
  {
    name: "David Exeter",
    role: "Treasurer",
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
    bio: "David brings a background in finance to his role, stewarding the association's resources with care and accountability.",
  },
  {
    name: "Patricia King",
    role: "Director, Youth & Education",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Patricia champions youth programming, from mentorship workshops to scholarships for Vincentian students across Quebec.",
  },
  {
    name: "Errol Franklyn",
    role: "Director, Culture & Events",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "Errol curates our annual calendar of events, bringing the vibrancy of Vincentian culture to life on Montreal's stage.",
  },
] as const;

export const NEWS_EXTENDED_CONTENT: Record<
  string,
  | { type: "press-release"; body: string[]; inlineImage: string }
  | { type: "gallery"; intro: string; images: string[] }
> = {
  "New Community Partnership Announced": {
    type: "press-release",
    inlineImage: "/community-speaker.jpeg",
    body: [
      "FOR IMMEDIATE RELEASE — Montreal, QC, February 12, 2026",
      "The St. Vincent & the Grenadines Association of Montreal (SVGAM) is proud to announce a formal partnership with the Centre for Immigrant and Community Services (CICS) and the Maison d'Haïti community organization to expand support services for Vincentian newcomers and long-time residents across the greater Montreal area.",
      "Under the terms of the agreement, the three organizations will coordinate on settlement referrals, French-language integration programming, and joint community events beginning in Spring 2026. The partnership will also create a shared resource hub accessible to all three communities, reducing duplication and improving access for newcomers navigating Quebec's social services landscape.",
      '"This partnership reflects something we have believed since day one — that our community is strongest when we build bridges," said Cheryl Thomas, President of the SVG Association of Montreal. "Working alongside CICS and Maison d\'Haïti allows us to serve our members more effectively while contributing to a more unified immigrant community in Montreal."',
      "The collaboration was facilitated through the City of Montreal's Bureau interculturel, which has supported multicultural community initiatives in the region since 2001. Initial programming under the partnership will include bi-monthly newcomer orientation sessions, a shared events calendar, and cross-community cultural exchanges beginning in April 2026.",
      "Members and community partners interested in learning more about the partnership or participating in upcoming programs are encouraged to contact the association at info@svgmontreal.ca.",
      "About the SVG Association of Montreal: The St. Vincent & the Grenadines Association of Montreal is a non-profit community organization dedicated to connecting, celebrating, and supporting the Vincentian diaspora in Quebec. Founded in 2003, the association serves over 5,000 community members through cultural events, advocacy, and mutual aid programs.",
    ],
  },
  "Independence Day Gala Highlights": {
    type: "gallery",
    intro: "On October 27th, 2025, the SVG Association of Montreal hosted its annual Independence Dinner — a spectacular evening of culture, community, and celebration. Over 250 guests gathered to commemorate the independence of St. Vincent and the Grenadines with a formal dinner, live entertainment, heartfelt speeches, and dancing that carried on well into the night. Here are some of the highlights from a truly unforgettable evening.",
    images: [
      "https://picsum.photos/seed/gala01/800/600",
      "https://picsum.photos/seed/gala02/800/600",
      "https://picsum.photos/seed/gala03/600/800",
      "https://picsum.photos/seed/gala04/800/600",
      "https://picsum.photos/seed/gala05/800/600",
      "https://picsum.photos/seed/gala06/800/600",
      "https://picsum.photos/seed/gala07/600/800",
      "https://picsum.photos/seed/gala08/800/600",
      "https://picsum.photos/seed/gala09/800/600",
      "https://picsum.photos/seed/gala10/800/600",
      "https://picsum.photos/seed/gala11/800/600",
      "https://picsum.photos/seed/gala12/600/800",
    ],
  },
};

export const CONTACT_INFO = [
  {
    icon: "location" as const,
    title: "Meeting Location",
    lines: ["Saint Paul's Anglican Church", "3970 Chemin de la Côte-Sainte-Catherine", "Montreal, QC H3T 1E3"],
  },
  { icon: "email" as const, title: "Email", lines: ["info@svgmontreal.ca"] },
] as const;

export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Why Join?", href: "/membership#why-join" },
      { label: "Individual", href: "/membership#plans" },
      { label: "Family", href: "/membership#plans" },
      { label: "Senior", href: "/membership#plans" },
      { label: "Business Partners", href: "/membership#plans" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events Calendar", href: "/events" },
      { label: "News & Blog", href: "/news" },
      { label: "Resources", href: "/resources" },
      { label: "Newcomer Guide", href: "/resources" },
      { label: "Business Directory", href: "/resources" },
    ],
  },
] as const;
