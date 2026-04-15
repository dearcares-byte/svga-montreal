/* ═══════════════════════════════════════════
   SVG Association of Montreal - Constants
   ═══════════════════════════════════════════ */

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61556407842537",
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
    month: "MAR",
    day: "15",
    title: "Vincy Brunch",
    location: "TBD — Montreal",
    time: "11:00 AM",
    price: "TBD",
    tag: "Social" as const,
    desc: "Our beloved annual brunch bringing the community together for great food, good vibes, and Vincentian fellowship.",
  },
] as const;

export const SIGNATURE_EVENTS = [
  {
    month: "MAR",
    title: "Vincy Brunch",
    tag: "Social" as const,
    image: "/brunch2026/654018197_17940344664170702_1029859975362340713_n.jpg",
    desc: "Our beloved annual brunch bringing the community together for great food, good vibes, and Vincentian fellowship. A cherished tradition every March.",
    detail: "Held every March · All are welcome",
  },
  {
    month: "JUL",
    title: "Vincy Unity Picnic",
    tag: "Cultural" as const,
    image: "/picnic2025.jpg",
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
    month: "OCT",
    title: "Independence Dinner",
    tag: "National" as const,
    image: "/independence2025/581403156_17925328947170702_1407863673226079999_n.jpg",
    desc: "Our most anticipated event of the year. Every October 27th, we gather to celebrate the independence of St. Vincent and the Grenadines with a formal dinner, live entertainment, and community pride.",
    detail: "Held every October · Annual tradition · All members welcome",
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
    date: "Mar 15, 2026",
    tag: "Community",
    title: "Vincy Brunch 2026 — A Celebration to Remember",
    excerpt: "What an incredible afternoon! On Saturday, March 15, 2026, SVGAM hosted its annual Vincy Brunch — and the event was nothing short of spectacular.",
    image: "/brunch2026/652674832_17940344556170702_2742035876991688277_n.jpg",
  },
  {
    date: "Mar 2026",
    tag: "Events",
    title: "Vincy Unity Picnic Canada Returns — July 18th, 2026",
    excerpt: "Canada's largest Vincentian diaspora celebration is back. Join thousands at Crysler Park Marina in Morrisburg, Ontario for a full day of music, culture, and community.",
    image: "/unity-picnic-2026.jpg",
  },
  {
    date: "Jan 1, 2026",
    tag: "Community",
    title: "Happy New Year from SVGAM!",
    excerpt: "Wishing you a year full of blessings, smiles, success and sparkle! From the Executive and members of SVGAM — Happy New Year!",
    image: "/newyear2026.jpg",
  },
  {
    date: "Oct 25, 2025",
    tag: "Culture",
    title: "A Diamond Evening — Banquet and Ball Recap",
    excerpt: "On October 25, 2025, SVGAM marked a historic milestone — our 60th Anniversary and the 46th Independence of St. Vincent and the Grenadines — with a spectacular Banquet and Ball Diamond Celebration.",
    image: "/independence2025/573515276_17923496472170702_758710345630327335_n.jpg",
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
  | { type: "press-release"; body: string[]; inlineImage: string; flyer?: string }
  | { type: "gallery"; intro?: string; body?: string[]; images: string[] }
> = {
  "Vincy Brunch 2026 — A Celebration to Remember": {
    type: "gallery",
    body: [
      "What an incredible afternoon! On Saturday, March 15, 2026, the St. Vincent & The Grenadines Association of Montreal (SVGAM) hosted its annual Vincy Brunch, and the event was nothing short of spectacular. Held at 5366 Chem. de la Côte-des-Neiges, the venue came alive with the warmth, energy, and pride that define our Vincy community here in Montreal.",
      "From the moment guests arrived, the atmosphere was electric. The room was filled with vibrant colours, the aroma of a delicious Vincy-inspired brunch menu, and the sounds of music that kept spirits high throughout the afternoon. Food, laughter, and conversation flowed freely as community members, families, and friends came together to celebrate our shared culture and traditions.",
      "One of the most heartwarming highlights of the day was the bursary presentations, recognizing outstanding young members of our community and investing in their futures. It was a proud moment for everyone in attendance and a reminder of why events like this matter so deeply.",
      "A heartfelt thank you to every single person who came out to show their support — your presence made the day truly special. To our volunteers, organizers, and sponsors, your dedication and hard work made this event possible. Together we are stronger, and together we continue to keep the Vincy spirit alive in Montreal.",
      "We look forward to celebrating with you again soon. Scroll through the photos below to relive the highlights of this wonderful day!",
    ],
    images: [
      "/brunch2026/652674832_17940344556170702_2742035876991688277_n.jpg",
      "/brunch2026/652794802_17940344604170702_7759291578459706_n.jpg",
      "/brunch2026/652794804_17940344673170702_3607537254789958706_n.jpg",
      "/brunch2026/652874595_17940344652170702_5546320964874291692_n.jpg",
      "/brunch2026/653385937_17940344619170702_8398059688640205869_n.jpg",
      "/brunch2026/653474189_17940344643170702_11622553417314085_n.jpg",
      "/brunch2026/653493421_17940344691170702_5478786927395518753_n.jpg",
      "/brunch2026/653522905_17940344715170702_7648937664224617607_n.jpg",
      "/brunch2026/653699046_17940344631170702_4591812045541542699_n.jpg",
      "/brunch2026/653973207_17940344682170702_738547795164027154_n.jpg",
      "/brunch2026/654013319_17940344760170702_2147449820372297309_n.jpg",
      "/brunch2026/654013443_17940344751170702_2990258618465620440_n.jpg",
      "/brunch2026/654013533_17940344733170702_1590289454272439564_n.jpg",
      "/brunch2026/654014261_17940344595170702_1941566774730642541_n.jpg",
      "/brunch2026/654018197_17940344664170702_1029859975362340713_n.jpg",
      "/brunch2026/654027461_17940344568170702_7062918718365027183_n.jpg",
      "/brunch2026/654269842_17940344622170702_9105916162266327351_n.jpg",
    ],
  },
  "Happy New Year from SVGAM!": {
    type: "press-release",
    inlineImage: "/newyear2026.jpg",
    body: [
      "Jan 1, 2026 · St. Vincent & The Grenadines Association of Montreal Inc.",
      "Wishing you a year full of blessings, smiles, success & sparkle!",
      "NEW HOPE · NEW DREAMS · NEW OPPORTUNITIES · NEW HAPPINESS · ENDLESS SUCCESS",
      "May your days be bright, your heart be light, and your year be magical!",
      "CHEERS TO LOVE, JOY, PEACE, AND PROSPERITY! — HAPPY NEW YEAR. STAY BLESSED.",
      "From the Executive and members of SVGAM",
    ],
  },
  "A Diamond Evening — Banquet and Ball Recap": {
    type: "gallery",
    body: [
      "On the evening of Saturday, October 25, 2025, the St. Vincent & The Grenadines Association of Montreal (SVGAM) marked a truly historic milestone — our 60th Anniversary and the 46th Independence of St. Vincent and the Grenadines — with a spectacular Banquet and Ball Diamond Celebration at Le Challenger, Saint-Laurent.",
      "The night was nothing short of magical. Guests arrived for cocktails at 5:30pm, greeted by an elegant atmosphere befitting a diamond occasion. As dinner was served at 7:00pm, the room buzzed with pride, warmth, and a deep sense of community. Stories were shared, milestones were honoured, and the bonds that connect our Vincy family in Montreal were felt by all.",
      "When the dance floor opened at 10:00pm, the celebration truly came alive. Music, movement, and joy filled the room as members and guests danced the night away in style — a fitting tribute to 60 years of resilience, culture, and togetherness.",
      "Sixty years is no small feat. This milestone reflects the dedication and passion of every member, volunteer, and supporter who has contributed to making SVGAM the vibrant organization it is today. And as we celebrate 46 years of Vincentian independence, we are reminded of the rich heritage and national pride that unites us, no matter where in the world we call home.",
      "To everyone who joined us on this unforgettable evening — thank you. Your presence made this diamond celebration shine even brighter. Here's to the next chapter, and to many more milestones ahead. Scroll through the photos below to relive the highlights of this very special night!",
    ],
    images: [
      "/independence2025/573515276_17923496472170702_758710345630327335_n.jpg",
      "/independence2025/580776480_17925329007170702_6658896066887274324_n.jpg",
      "/independence2025/580947247_17925328041170702_5367596404436174189_n.jpg",
      "/independence2025/581057028_17925329379170702_2896229393689430296_n.jpg",
      "/independence2025/581114633_17925330537170702_3007196099496282361_n.jpg",
      "/independence2025/581119896_17925328032170702_2985347769934984193_n.jpg",
      "/independence2025/581149160_17925328998170702_4803099593929895972_n.jpg",
      "/independence2025/581217262_17925329190170702_6749966379309565132_n.jpg",
      "/independence2025/581232070_17925329025170702_4516947887452336689_n.jpg",
      "/independence2025/581268220_17925328002170702_8662029201545439441_n.jpg",
      "/independence2025/581273561_17925330567170702_1882719957093012438_n.jpg",
      "/independence2025/581340444_17925330546170702_4031740958429659409_n.jpg",
      "/independence2025/581403156_17925328947170702_1407863673226079999_n.jpg",
      "/independence2025/581460348_17925328902170702_2132078835836212613_n.jpg",
      "/independence2025/581556672_17925330555170702_2250166182347864065_n.jpg",
      "/independence2025/581568671_17925328011170702_5275563401393471076_n.jpg",
      "/independence2025/581815781_17925328986170702_6362384645454550099_n.jpg",
      "/independence2025/581979412_17925330579170702_743141366153773830_n.jpg",
      "/independence2025/582394002_17925330297170702_1209483426840900585_n.jpg",
      "/independence2025/582428394_17925329391170702_617415377680767099_n.jpg",
      "/independence2025/582525614_17925328881170702_8434979699161603329_n.jpg",
      "/independence2025/582533341_17925328959170702_8530070480138447001_n.jpg",
      "/independence2025/582649296_17925329013170702_6906218814418758070_n.jpg",
      "/independence2025/582658671_17925328050170702_3100649473108379702_n.jpg",
      "/independence2025/582779616_17925330855170702_7690685899686526686_n.jpg",
      "/independence2025/582983896_17925329400170702_567194259607556798_n.jpg",
      "/independence2025/583148265_17925328020170702_521015739482083038_n.jpg",
      "/independence2025/583271381_17925330528170702_6206843626059513625_n.jpg",
      "/independence2025/583322136_17925328968170702_5124262115677389451_n.jpg",
      "/independence2025/583464288_17925328977170702_3095671320044039545_n.jpg",
      "/independence2025/586851467_17926198236170702_2168655134003106651_n.jpg",
      "/independence2025/587249699_17926198227170702_3588284068765242384_n.jpg",
      "/independence2025/587256346_17926198125170702_3672733229154236517_n.jpg",
      "/independence2025/587293474_17926198209170702_852600489306673212_n.jpg",
      "/independence2025/587320401_17926198218170702_3468812857948547934_n.jpg",
      "/independence2025/587590412_17926198116170702_5711397207820659169_n.jpg",
    ],
  },
  "Vincy Unity Picnic Canada Returns — July 18th, 2026": {
    type: "press-release",
    inlineImage: "/unity-picnic-2026.jpg",
    flyer: "/unity-picnic-2026.jpg",
    body: [
      "FOR IMMEDIATE RELEASE — March 2026 · SVG Associations of Montréal, Ottawa & Toronto",
      "The SVG Associations of Montréal, Ottawa, and Toronto are proud to announce the return of the Vincy Unity Picnic Canada on Saturday, July 18th, 2026. Now in its third decade, this beloved annual tradition will once again be held at the scenic Crysler Park Marina, 13480 Stormont County Road 2, Morrisburg, Ontario. Gates open at 8:00 AM, with the picnic grounds closing at 4:30 PM and the event wrapping up at 6:00 PM.",
      "First held in 1999, the Vincy Unity Picnic has grown into one of the most prominent Caribbean cultural events in Canada, regularly drawing more than 12,000 attendees from Montréal, Ottawa, Toronto, other Canadian provinces, and across the United States.",
      '"The Vincy Unity Picnic is more than a summer outing — it is a celebration of who we are. Every year, thousands of Vincentians and their friends come together to honour our culture, our music, and our community bonds, both here in Canada and across the diaspora." — Vincy Unity Picnic Canada Committee',
      "The 2026 edition promises a rich programme for the whole family: Live Music & Entertainment — a full day of soca, calypso, and Caribbean sounds · Cultural Performances celebrating the heritage of St. Vincent and the Grenadines · Kids Village with dedicated activities · Marketplace featuring local vendors, food, arts, and crafts · Lakeside Vibes set against the stunning backdrop of the St. Lawrence River.",
      "📅 Saturday, July 18th, 2026 · Crysler Park Marina, Morrisburg, Ontario · Gates: 8:00 AM – 4:30 PM · Event ends 6:00 PM",
      "Tickets and further details — including performer announcements, vendor applications, and sponsorship opportunities — are available through the SVG Associations and at vincyunitypicniccanada.com. Follow @vincyunitypicnicca on Facebook and Instagram and use #VincyUnityPicnic to join the conversation.",
      "About the Vincy Unity Picnic Canada: The Annual Vincy Unity Picnic Canada is a family-friendly cultural celebration hosted by the SVG Unity Picnic Committee on behalf of the St. Vincent and the Grenadines Associations of Montréal, Ottawa, and Toronto. Held every third Saturday in July since 1999. Media contact: vincyunitypicnicca@gmail.com · vincyunitypicniccanada.com · Montréal: 514-581-4879",
    ],
  },
  "New Community Partnership Announced": {
    type: "press-release",
    inlineImage: "/community-speaker.jpeg",
    body: [
      "FOR IMMEDIATE RELEASE — Montreal, QC, February 12, 2026",
      "The St. Vincent & the Grenadines Association of Montreal (SVGAM) is proud to announce a formal partnership with the Centre for Immigrant and Community Services (CICS) and the Maison d'Haïti community organization to expand support services for Vincentian newcomers and long-time residents across the greater Montreal area.",
      "Under the terms of the agreement, the three organizations will coordinate on settlement referrals, French-language integration programming, and joint community events beginning in Spring 2026. The partnership will also create a shared resource hub accessible to all three communities, reducing duplication and improving access for newcomers navigating Quebec's social services landscape.",
      '"This partnership reflects something we have believed since day one — that our community is strongest when we build bridges," said Cheryl Thomas, President of the SVG Association of Montreal. "Working alongside CICS and Maison d\'Haïti allows us to serve our members more effectively while contributing to a more unified immigrant community in Montreal."',
      "The collaboration was facilitated through the City of Montreal's Bureau interculturel, which has supported multicultural community initiatives in the region since 2001. Initial programming under the partnership will include bi-monthly newcomer orientation sessions, a shared events calendar, and cross-community cultural exchanges beginning in April 2026.",
      "Members and community partners interested in learning more about the partnership or participating in upcoming programs are encouraged to contact the association at info@svgamontreal.ca.",
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
  { icon: "email" as const, title: "Email", lines: ["info@svgamontreal.ca"] },
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
