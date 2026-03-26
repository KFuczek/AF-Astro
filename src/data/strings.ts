// ─── UI strings ───────────────────────────────────────────────────────────────
// All user-visible text lives here, organised by where it is used.
// Strings that contain HTML tags (e.g. <span>) must be rendered with set:html.

// ── Layout ────────────────────────────────────────────────────────────────────
export const layout = {
  skipLink: 'Skip to main content',
} as const;

// ── SEO / meta ────────────────────────────────────────────────────────────────
export const seo = {
  defaultDescription:
    'ArchiForce Construction – reliable, professional construction services in Warsaw. General construction, renovations, roofing, electrical, and more.',
  pages: {
    home: {
      title: 'Home',
      description:
        "ArchiForce Construction – Warsaw's trusted construction partner since 1998. General construction, renovations, roofing, electrical and more. Get a free quote today.",
    },
    about: {
      title: 'About Us',
      description:
        'Learn about ArchiForce Construction — our 25-year history, values, certifications, and the expert team behind every project.',
    },
    services: {
      title: 'Services',
      description:
        'ArchiForce Construction offers general construction, renovations, interior finishing, roofing, electrical and plumbing installation, and project management across Poland.',
    },
    projects: {
      title: 'Projects',
      description:
        "Browse ArchiForce Construction's completed projects — office complexes, residential estates, hotel refurbishments, public infrastructure, and more across Poland.",
    },
    contact: {
      title: 'Contact',
      description:
        'Contact ArchiForce Construction for a free, no-obligation quote. Phone, email, or use our online form. We respond within 24 hours.',
    },
  },
} as const;

// ── Navbar ────────────────────────────────────────────────────────────────────
export const nav = {
  logoAriaLabel:      'ArchiForce – go to home',
  ariaLabel:          'Main navigation',
  hamburgerAriaLabel: 'Toggle navigation menu',
  ctaText:            'Get a Quote',
  links: [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About'    },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact',  label: 'Contact'  },
  ],
} as const;

// ── Footer ────────────────────────────────────────────────────────────────────
export const footer = {
  ariaLabel:         'Site footer',
  tagline:           "Building with integrity since 1998. Warsaw's most trusted construction partner for residential, commercial, and industrial projects.",
  certBadges:        ['ISO 9001', 'Licensed & Insured'],
  quickLinksHeading: 'Quick Links',
  servicesHeading:   'Our Services',
  contactHeading:    'Get in Touch',
  copyrightSuffix:   'All rights reserved.',
  builtWith:         'Designed & built with',
  links: [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact',  label: 'Contact'  },
  ],
  serviceLinks: [
    'General Construction',
    'Renovations & Refurbishments',
    'Interior Finishing',
    'Roofing & Waterproofing',
    'Electrical & Plumbing',
    'Project Management',
  ],
} as const;

// ── Shared component strings ──────────────────────────────────────────────────
export const serviceCard = {
  ctaText: 'Request this service',
} as const;

// ── Home page ─────────────────────────────────────────────────────────────────
export const homePage = {
  hero: {
    title:            'Reliable Construction Services <span>You Can Trust</span>',
    subtitle:         'For over 25 years, ArchiForce has been delivering exceptional construction projects across Poland. Quality craftsmanship, transparent communication, and results that stand the test of time.',
    ctaText:          'Get a Free Quote',
    ctaLink:          '/contact',
    secondaryCtaText: 'View Our Projects',
    secondaryCtaHref: '/projects',
  },
  stats: [
    { value: '25+',  label: 'Years of Experience'  },
    { value: '500+', label: 'Projects Completed'   },
    { value: '98%',  label: 'Client Satisfaction'  },
    { value: '50+',  label: 'Expert Professionals' },
  ],
  aboutIntro: {
    eyebrow: 'Who We Are',
    // HTML string — render with set:html
    title:   "Warsaw's Most <span>Trusted</span> Construction Company",
    body: [
      "Founded in 1998, ArchiForce Construction has grown from a small local contractor into one of Warsaw's leading full-service construction firms. We serve private homeowners, property developers, and large-scale commercial clients — bringing the same commitment to quality and safety regardless of project size.",
      "Every project is assigned a dedicated project manager, giving you a single point of contact from the first consultation through to the final handover. We believe great construction starts with great communication.",
    ],
    ctaText: 'Learn About Us',
    ctaHref: '/about',
    highlights: [
      { icon: '✅', title: 'Certified & Insured',      text: 'ISO 9001 quality management. Full liability coverage on every site.'        },
      { icon: '✅', title: 'Transparent Pricing',      text: 'Detailed quotes with no hidden costs. Fixed-price contracts available.'    },
      { icon: '✅', title: 'End-to-End Service',       text: 'Design consultation, permits, construction, and finishing — all under one roof.' },
      { icon: '✅', title: 'Post-Completion Support',  text: '12-month defect liability period and a dedicated aftercare team.'          },
    ],
  },
  benefits: {
    eyebrow:  'Why Choose Us',
    // HTML string — render with set:html
    title:    'Built on <span>Expertise</span> &amp; Integrity',
    subtitle: 'Four pillars that have defined ArchiForce for over two decades.',
    items: [
      { icon: '🏆', title: 'Proven Track Record',      text: 'Over two decades of delivering complex residential, commercial, and industrial projects on time and within budget.'                                       },
      { icon: '🔒', title: 'Quality Guaranteed',       text: 'ISO 9001-certified processes and rigorous quality control at every stage — from groundwork to final finishing.'                                           },
      { icon: '📅', title: 'Deadlines We Keep',        text: 'We understand that delays cost money. Our project management methodology ensures we hit every milestone.'                                                },
      { icon: '🛡️', title: 'Fully Licensed & Insured', text: 'All works are carried out by certified professionals. Full liability insurance and compliance with Polish building codes.'                                },
    ],
  },
  servicesPreview: {
    eyebrow:  'What We Do',
    // HTML string — render with set:html
    title:    'Our Core <span>Services</span>',
    subtitle: 'From structural groundwork to decorative finishes, we cover the full construction lifecycle.',
    ctaText:  'View All Services',
    ctaHref:  '/services',
    items: [
      { icon: '🏗️', title: 'General Construction',        description: 'From foundations to rooftops — we manage complete new-build projects for residential, commercial, and industrial clients.'          },
      { icon: '🔨', title: 'Renovations & Refurbishments', description: 'Breathing new life into existing structures with minimal disruption, maximum quality, and a clear timeline.'                      },
      { icon: '🪟', title: 'Interior Finishing',           description: 'Expert plastering, flooring, tiling, painting, and fitted joinery that turns a shell into a beautiful, functional space.'         },
    ],
  },
  testimonials: {
    eyebrow: 'Client Voices',
    // HTML string — render with set:html
    title: "What Our <span>Clients</span> Say",
    items: [
      { quote: 'ArchiForce completely transformed our office building in under four months. Professional team, on time, on budget — exactly what you need from a construction partner.',                                                      author: 'Marek Kowalski',   role: 'CEO, Nova Logistics Sp. z o.o.'      },
      { quote: "We hired ArchiForce for a full home renovation and couldn't be more pleased. Every detail was handled with care, and the team was communicative throughout the entire process.",                                              author: 'Anna Wiśniewska', role: 'Homeowner, Warsaw Mokotów'           },
      { quote: "As a property developer, I've worked with many firms. ArchiForce consistently stands out for their attention to detail, safety standards, and reliability. They are our go-to contractor.", author: 'Piotr Dąbrowski',  role: 'Managing Director, Varsovia Development' },
    ],
  },
  ctaBanner: {
    title:             'Ready to Start Your Project?',
    subtitle:          'Get a detailed, no-obligation quote within 48 hours. Our team is ready to make your vision a reality.',
    primaryCtaText:    'Get a Free Quote',
    primaryCtaHref:    '/contact',
    secondaryCtaText:  'Call Us Now',
  },
} as const;

// ── About page ────────────────────────────────────────────────────────────────
export const aboutPage = {
  hero: {
    title:    "Building Warsaw's <span>Future</span> Since 1998",
    subtitle: "From a small six-person team to one of Warsaw's leading construction companies — our story is one of steady growth, uncompromising quality, and lasting client relationships.",
    ctaText:  'Work With Us',
    ctaLink:  '/contact',
  },
  story: {
    eyebrow: 'Our Story',
    // HTML string — render with set:html
    title:   '25 Years of <span>Craftsmanship</span>',
    paragraphs: [
      'ArchiForce Construction was born from a simple belief: that construction should be done properly, honestly, and with pride. Founder Jan Kowalczyk began his career as a structural engineer and spent years watching good projects fail due to poor management, cut corners, and miscommunication. In 1998, he decided to do it differently.',
      'Starting with residential renovations in Praga, we built our reputation job by job — always on time, always transparent, always thorough. Word spread. Within five years we were taking on full commercial builds. Within ten, we had a team of certified engineers, project managers, and skilled tradespeople capable of handling projects of any scale.',
      "Today, ArchiForce is trusted by private homeowners, property developers, hospitality groups, and public institutions across Poland. Our portfolio spans luxury residential developments, office complexes, hotel refurbishments, and public infrastructure. But our values have never changed.",
    ],
    milestonesTitle: 'Key Milestones',
  },
  milestones: [
    { year: '1998', event: 'ArchiForce founded by Jan Kowalczyk with a team of 6 in Praga, Warsaw.'                        },
    { year: '2003', event: 'First major commercial contract — renovation of a 12-storey office block in Śródmieście.'      },
    { year: '2008', event: 'ISO 9001 quality management certification achieved. Team grows to 30 professionals.'            },
    { year: '2013', event: 'Expansion into industrial construction. Completion of our 100th major project.'                },
    { year: '2018', event: '20th anniversary. Over 300 projects completed. New headquarters opened in Ochota.'             },
    { year: '2023', event: 'Launch of our dedicated Project Management division. Team now 50+ strong.'                     },
  ],
  stats: [
    { value: '1998', label: 'Year Founded'           },
    { value: '500+', label: 'Projects Delivered'     },
    { value: '50+',  label: 'Team Members'           },
    { value: '5',    label: 'Industry Certifications' },
  ],
  values: {
    eyebrow:  'What Drives Us',
    // HTML string — render with set:html
    title:    'Our Core <span>Values</span>',
    subtitle: 'Every decision we make is guided by four founding principles.',
    items: [
      { icon: '🏅', title: 'Quality Without Compromise', text: 'Every nail, joint, and finish is held to the highest standard. We use only certified materials from verified suppliers.'                                                         },
      { icon: '🦺', title: 'Safety First',               text: 'Zero-accident culture. All staff undergo regular health & safety training. We are fully compliant with Polish and EU construction regulations.'                              },
      { icon: '🤝', title: 'Client Partnership',         text: 'We treat every client as a long-term partner. Open communication, regular updates, and no surprises — ever.'                                                                  },
      { icon: '🌱', title: 'Sustainable Practices',      text: 'Minimising waste, using energy-efficient materials, and working with local suppliers to reduce our environmental footprint.'                                                   },
    ],
  },
  team: {
    eyebrow:  'The People',
    // HTML string — render with set:html
    title:    'Meet the <span>Leadership Team</span>',
    subtitle: 'Experienced professionals who lead from the front on every project.',
    members: [
      { name: 'Jan Kowalczyk',       role: 'Founder & CEO',              years: '25+ years' },
      { name: 'Katarzyna Nowak',     role: 'Head of Project Management', years: '18 years'  },
      { name: 'Tomasz Wróblewski',   role: 'Chief Structural Engineer',  years: '20 years'  },
      { name: 'Magdalena Zielińska', role: 'Interior Design Lead',       years: '12 years'  },
      { name: 'Rafał Malinowski',    role: 'Health & Safety Director',   years: '15 years'  },
      { name: 'Agnieszka Szymańska', role: 'Client Relations Manager',   years: '10 years'  },
    ],
  },
  certifications: {
    eyebrow: 'Credentials',
    // HTML string — render with set:html
    title:   'Certifications &amp; <span>Accreditations</span>',
  },
} as const;

// ── Services page ─────────────────────────────────────────────────────────────
export const servicesPage = {
  hero: {
    title:    'Professional Construction <span>Services</span>',
    subtitle: 'From the first shovel in the ground to the final coat of paint — ArchiForce offers a complete range of construction services, all under one roof.',
    ctaText:  'Request a Quote',
    ctaLink:  '/contact',
  },
  list: {
    eyebrow:  'What We Offer',
    // HTML string — render with set:html
    title:    'Our <span>Six Core Services</span>',
    subtitle: 'Each service is backed by certified professionals, transparent pricing, and our quality guarantee.',
    items: [
      { icon: '🏗️', title: 'General Construction',              description: 'Full-cycle new-build projects from groundworks and foundations through to structural frame, envelope, and handover. We manage residential blocks, commercial units, and industrial facilities with equal rigour.'                                                                                                    },
      { icon: '🔨', title: 'Renovations & Refurbishments',      description: "Sympathetic restoration and modern refurbishment of existing buildings. Whether it's a heritage property requiring careful intervention or an ageing office block needing a complete overhaul, we deliver with minimal disruption."                                                                               },
      { icon: '🪟', title: 'Interior Finishing',                description: 'High-quality plastering, screed flooring, tiling, painting, and fitted joinery. We work closely with interior designers and clients to ensure finishes meet the exact brief — on time and to specification.'                                                                                                    },
      { icon: '🏠', title: 'Roofing & Waterproofing',           description: 'Flat and pitched roof installations, re-roofing, insulation upgrades, and full waterproofing systems. We use certified materials and our workmanship carries a 10-year guarantee.'                                                                                                                              },
      { icon: '⚡', title: 'Electrical & Plumbing Installation', description: 'Full MEP (Mechanical, Electrical, Plumbing) services carried out by certified installers. From single-phase domestic wiring to three-phase commercial systems, boiler installations to full HVAC fit-outs.'                                                                                                    },
      { icon: '📋', title: 'Project Management & Consulting',   description: 'Not ready to build yet? Our experienced project managers can help you plan, budget, obtain permits, and select the right contractors. Independent consulting from people who know construction inside out.'                                                                                                       },
    ],
  },
  process: {
    eyebrow:  'How We Work',
    // HTML string — render with set:html
    title:    'Our <span>Process</span>',
    subtitle: 'A clear, structured approach from first contact to final handover.',
    steps: [
      { step: '01', title: 'Initial Consultation', text: 'We meet on-site or online to understand your goals, timeline, and budget. No obligation, no cost.'                               },
      { step: '02', title: 'Detailed Quote',        text: 'Within 48 hours, you receive a comprehensive, itemised quote with no hidden extras.'                                            },
      { step: '03', title: 'Project Planning',      text: 'We develop a detailed programme, assign your project manager, and agree on milestones.'                                         },
      { step: '04', title: 'Construction',          text: 'Works begin. You receive weekly progress reports and have direct access to your PM at all times.'                               },
      { step: '05', title: 'Quality Inspection',    text: 'Every stage is inspected before sign-off. Nothing moves forward unless it meets our standard.'                                  },
      { step: '06', title: 'Handover & Aftercare',  text: 'You receive a full completion report, all warranties, and 12 months of dedicated aftercare support.'                            },
    ],
  },
  guarantee: {
    icon:    '🛡️',
    title:   'Our Quality Guarantee',
    text:    'All structural works carry a 5-year warranty. Roofing and waterproofing are guaranteed for 10 years. Interior finishes are covered for 2 years. If anything is not right, we come back and fix it — at no extra charge.',
    ctaText: 'Get a Free Quote',
    ctaHref: '/contact',
  },
} as const;

// ── Projects page ─────────────────────────────────────────────────────────────
export const projectsPage = {
  hero: {
    title:    'Projects That <span>Speak</span> for Themselves',
    subtitle: 'A selection of completed works across residential, commercial, industrial, and public sectors. Each project reflects our commitment to quality, safety, and on-time delivery.',
    ctaText:  'Start Your Project',
    ctaLink:  '/contact',
  },
  portfolio: {
    eyebrow:  'Our Portfolio',
    // HTML string — render with set:html
    title:    'Selected <span>Completed Works</span>',
    subtitle: 'From 48-unit housing estates to 22,000 m² logistics hubs — no project too large or too specialised.',
  },
  items: [
    {
      slug:        'zlota-tower-office-complex',
      title:       'Złota Tower Office Complex',
      description: 'Complete fit-out and structural refurbishment of a 14-storey office building in Warsaw city centre. Scope included full MEP upgrade, new curtain wall glazing, and Grade A interior finishing across 8,400 m².',
      category:    'Commercial',
      location:    'Warsaw, Śródmieście',
      year:        2023,
      bgColor:     '#1e3a5f',
      highlights: [
        { label: 'Total Floor Area', value: '8,400 m²'              },
        { label: 'Duration',         value: '14 months'             },
        { label: 'Building Height',  value: '14 storeys'            },
        { label: 'Project Type',     value: 'Fit-out & Refurbishment'},
        { label: 'MEP',              value: 'Full systems upgrade'  },
        { label: 'Specification',    value: 'Grade A office'        },
      ],
      fullDescription: [
        'The Złota Tower project involved a comprehensive fit-out and structural refurbishment of a prominent 14-storey commercial tower in Warsaw\'s Śródmieście district. The client required a full transformation from an outdated office block into a Grade A building capable of attracting premium tenants — all while maintaining partial occupancy during works.',
        'Our scope covered the complete replacement of the building\'s curtain wall glazing system, a full MEP upgrade across all 14 floors, and premium interior fit-out in common areas and lettable suites. The project demanded meticulous sequencing to manage occupied floors and minimise disruption to existing tenants.',
        'Delivered on programme over 14 months, the completed building achieved Grade A certification and was fully let within six months of handover — a testament to the quality of both the design and execution.',
      ],
    },
    {
      slug:        'green-hills-residential-estate',
      title:       'Green Hills Residential Estate',
      description: 'New-build development of 48 family homes across 3 phases. Delivered in 18 months from groundworks to final handover, including landscaping, road infrastructure, and all utilities connections.',
      category:    'Residential',
      location:    'Kraków, Bronowice',
      year:        2022,
      bgColor:     '#1e4d2b',
      highlights: [
        { label: 'Housing Units',  value: '48 homes'         },
        { label: 'Phases',         value: '3'                },
        { label: 'Duration',       value: '18 months'        },
        { label: 'Project Type',   value: 'New-build'        },
        { label: 'Infrastructure', value: 'Roads & utilities'},
        { label: 'Location',       value: 'Kraków, Bronowice'},
      ],
      fullDescription: [
        'Green Hills is a 48-unit residential development in the sought-after Bronowice district of Kraków, built across three carefully planned delivery phases. The project was developed for a regional property company with a mandate for high-quality family homes delivered within a strict 18-month programme.',
        'Our works encompassed groundworks and foundations for all three phases, followed by the construction of 48 semi-detached and detached homes. The scope extended to all road infrastructure, landscaping, and the installation of full utilities — water, gas, fibre, and drainage — across the entire site.',
        'The phased delivery strategy allowed the client to begin sales and early occupations before the final phase was complete, accelerating their cash position while we maintained quality and safety standards throughout the live-and-build environment.',
      ],
    },
    {
      slug:        'central-station-concourse-renovation',
      title:       'Central Station Concourse Renovation',
      description: 'Major public infrastructure renovation of the main passenger concourse — 2,200 m² of flooring, new passenger information systems, accessibility upgrades, and full roof waterproofing works.',
      category:    'Public Works',
      location:    'Warsaw, Śródmieście',
      year:        2022,
      bgColor:     '#3a3a3a',
      highlights: [
        { label: 'Concourse Area',  value: '2,200 m²'               },
        { label: 'Duration',        value: '8 months'               },
        { label: 'Environment',     value: 'Live operational station'},
        { label: 'Flooring',        value: 'Full replacement'        },
        { label: 'Daily Footfall',  value: '50,000+ passengers'      },
        { label: 'Client Type',     value: 'Public authority'        },
      ],
      fullDescription: [
        'This high-profile public infrastructure contract required the renovation of the main passenger concourse at one of Warsaw\'s busiest rail hubs, handling over 50,000 passengers per day. The complexity lay not in the technical scope, but in executing it within a live, 24-hour operational environment without disrupting rail services.',
        'Our team replaced 2,200 m² of flooring, installed new passenger information and wayfinding systems, carried out full accessibility upgrades including new lifts and tactile guidance systems, and completed comprehensive roof waterproofing works above the concourse.',
        'Works were structured in off-peak windows with strict handback requirements at the start of each operational day. The project was completed within the contractual eight-month programme, passing all client and regulatory inspections without a single operational disruption.',
      ],
    },
    {
      slug:        'waterfront-hotel-spa',
      title:       'Waterfront Hotel & Spa',
      description: 'Full construction of a 4-star, 120-room hotel with spa facilities, conference centre, and rooftop bar. Project managed from planning permission through to opening, in 22 months.',
      category:    'Hospitality',
      location:    'Gdańsk, Waterfront',
      year:        2021,
      bgColor:     '#4a2020',
      highlights: [
        { label: 'Guest Rooms',    value: '120 keys'              },
        { label: 'Star Rating',    value: '4-star'                },
        { label: 'Duration',       value: '22 months'             },
        { label: 'Facilities',     value: 'Spa, conference & bar' },
        { label: 'Project Type',   value: 'New-build'             },
        { label: 'Contract Basis', value: 'Design & build'        },
      ],
      fullDescription: [
        'The Waterfront Hotel & Spa is a ground-up, 120-room, 4-star hospitality development on Gdańsk\'s revitalised waterfront. ArchiForce was appointed as principal contractor on a full design-and-build basis, taking the project from planning consent through to opening-day handover in 22 months.',
        'The scope encompassed the full hotel structure, all guest room fit-outs, a fully equipped spa and wellness facility, a 180-delegate conference centre, ground-floor restaurant and bar units, and a 180-cover rooftop bar with panoramic harbour views. All MEP systems, kitchen installations, and public realm works were also within our contract.',
        'The hotel opened on schedule to strong advance bookings and was awarded four stars by the Polish Hotel Classification Committee on its first assessment. The project remains one of our most complete and prestigious hospitality deliveries to date.',
      ],
    },
    {
      slug:        'university-science-innovation-centre',
      title:       'University Science & Innovation Centre',
      description: 'Design-and-build contract for a 6,000 m² research and teaching facility. Specialised laboratory fit-outs, lecture theatres, and sustainable design elements including a green roof and solar array.',
      category:    'Education',
      location:    'Wrocław, Kampus',
      year:        2023,
      bgColor:     '#1e3d4a',
      highlights: [
        { label: 'Total Area',       value: '6,000 m²'       },
        { label: 'Contract Basis',   value: 'Design & build' },
        { label: 'Specialist Labs',  value: 'Multiple'       },
        { label: 'Sustainability',   value: "BREEAM 'Very Good'" },
        { label: 'Solar Array',      value: '120 kWp'        },
        { label: 'Green Roof',       value: '3,000 m²'       },
      ],
      fullDescription: [
        'The University Science & Innovation Centre was delivered under a design-and-build contract, giving ArchiForce responsibility for both the architectural design development and full construction delivery of this 6,000 m² research and teaching facility at Wrocław\'s Kampus.',
        'The building houses specialist wet and dry laboratories with high-specification MEP requirements, two tiered lecture theatres, breakout teaching spaces, and collaborative innovation areas. Sustainability was central to the brief — the building features a 3,000 m² green roof, a 120 kWp rooftop solar array, and achieved a BREEAM "Very Good" rating at practical completion.',
        'Specialist laboratory fit-out was coordinated closely with the university\'s research departments to ensure benching, fume extraction, and data infrastructure met exact operational requirements. The project was completed on time for the start of the academic year and has since become a landmark on the Kampus.',
      ],
    },
    {
      slug:        'city-park-retail-leisure-complex',
      title:       'City Park Retail & Leisure Complex',
      description: 'Ground-up construction of a 15,000 m² mixed-use retail and leisure complex. Includes 42 retail units, 8 restaurant units, a 10-screen cinema, and 600-space underground car park.',
      category:    'Retail',
      location:    'Łódź, Bałuty',
      year:        2021,
      bgColor:     '#3d2a1e',
      highlights: [
        { label: 'Total GIA',       value: '15,000 m²' },
        { label: 'Retail Units',    value: '42'         },
        { label: 'Restaurant Units',value: '8'          },
        { label: 'Cinema',          value: '10 screens' },
        { label: 'Parking',         value: '600 spaces' },
        { label: 'Duration',        value: '26 months'  },
      ],
      fullDescription: [
        'City Park is a 15,000 m² ground-up retail and leisure destination in Łódź\'s Bałuty district, designed to serve a catchment of over 400,000 residents. ArchiForce was engaged by the developer as principal contractor for the full construction package, from groundworks to final fit-out of common areas.',
        'The complex houses 42 retail units across two trading levels, eight food and beverage units, a 10-screen multiplex cinema, and a 600-space basement car park — all supported by extensive back-of-house, loading, and service infrastructure. The basement excavation and construction of the underground car park represented the most technically demanding phase.',
        'City Park opened to full occupancy and has since become the primary retail destination for the district. The development was completed within the developer\'s strict programme, enabling tenant fit-out and an on-schedule opening to the public.',
      ],
    },
    {
      slug:        'stara-fabryka-loft-conversion',
      title:       'Stara Fabryka Loft Conversion',
      description: 'Conversion of a historic 19th-century textile factory into 64 premium residential loft apartments. Careful heritage preservation combined with modern luxury finishes and smart home technology.',
      category:    'Residential',
      location:    'Łódź, Stare Miasto',
      year:        2022,
      bgColor:     '#2a1e3d',
      highlights: [
        { label: 'Apartments',      value: '64 units'           },
        { label: 'Building Age',    value: '19th century'       },
        { label: 'Project Type',    value: 'Heritage conversion'},
        { label: 'Technology',      value: 'Smart home'         },
        { label: 'Status',          value: 'Partial listing'    },
        { label: 'Development',     value: 'Premium residential'},
      ],
      fullDescription: [
        'Stara Fabryka is the sensitive conversion of a substantial 19th-century textile mill in Łódź\'s Stare Miasto into 64 premium residential loft apartments. The project demanded an unusual combination of heritage preservation expertise and contemporary luxury residential delivery.',
        'The original red-brick structure and characteristic roof trusses were carefully retained and restored, forming the architectural character of each apartment. Within this shell, we delivered 64 individually designed loft units with polished concrete floors, exposed brickwork, full smart home technology — covering lighting, heating, security, and AV — and premium fitted kitchens and bathrooms.',
        'The project required close collaboration with the heritage conservation authority throughout, with all interventions designed to be reversible. The resulting development sold out in pre-sale and has since won multiple architectural and residential development awards.',
      ],
    },
    {
      slug:        'logistic-hub-north',
      title:       'Logistic Hub North',
      description: 'New-build industrial logistics facility — 22,000 m² warehouse with dock levellers, office wing, and full site infrastructure. Steel frame construction completed in under 10 months.',
      category:    'Industrial',
      location:    'Warsaw, Białołęka',
      year:        2023,
      bgColor:     '#1e2d1e',
      highlights: [
        { label: 'Warehouse GIA',  value: '22,000 m²'    },
        { label: 'Office Wing',    value: '1,200 m²'     },
        { label: 'Dock Levellers', value: '18 positions' },
        { label: 'Frame',          value: 'Structural steel'},
        { label: 'Eaves Height',   value: '12 m'         },
        { label: 'Duration',       value: '10 months'    },
      ],
      fullDescription: [
        'Logistic Hub North is a 22,000 m² purpose-built industrial and logistics facility in Warsaw\'s Białołęka corridor, delivered for a pan-European 3PL operator requiring a fast-track programme to meet an operational start date.',
        'The main warehouse building features a 12-metre clear eaves height, 18 dock-leveller loading positions, and a separate 1,200 m² two-storey office and welfare wing. Full site infrastructure — roads, hardstanding, vehicle circulation, drainage, and utilities — was also within our scope.',
        'Structural steel erection was the critical path activity. Our works programme delivered the frame, envelope, and fit-out in under 10 months from groundworks to handover — meeting the client\'s operational start date and enabling a seamless racking installation and stock-in period.',
      ],
    },
    {
      slug:        'riverside-medical-centre',
      title:       'Riverside Medical Centre',
      description: 'Purpose-built two-storey outpatient medical facility with specialist clinical fit-out, operating suites, imaging department, and patient-accessible public realm improvements.',
      category:    'Healthcare',
      location:    'Poznań, Jeżyce',
      year:        2022,
      bgColor:     '#1a2e3f',
      highlights: [
        { label: 'Floors',           value: '2 storeys'                },
        { label: 'Type',             value: 'Purpose-built outpatient' },
        { label: 'Operating Suites', value: '3'                        },
        { label: 'Imaging Dept',     value: 'Full radiology suite'     },
        { label: 'Daily Patients',   value: '200+'                     },
        { label: 'Accessibility',    value: 'Full compliance'          },
      ],
      fullDescription: [
        'The Riverside Medical Centre is a purpose-built, two-storey outpatient healthcare facility in Poznań\'s Jeżyce district, developed for a private healthcare operator expanding their network of specialist clinical centres in western Poland.',
        'The clinical fit-out is highly specialist in nature, encompassing three operating suites with full ventilation and sterile field requirements, a digital imaging and radiology department with shielded rooms, outpatient consulting suites, and a reception and waiting environment designed around patient wellbeing. All MEP systems were designed and installed to the highest healthcare standards.',
        'In addition to the clinical interior, our scope covered all public realm works — landscaping, accessible car parking, and pedestrian connections to the adjacent riverside walkway. The centre opened on schedule and operates at full capacity, serving over 200 patients daily.',
      ],
    },
  ],
  cta: {
    title:             'Your Project Could Be Next',
    subtitle:          "Whether you're planning a single home renovation or a large commercial development, we'd love to hear about it. Get in touch for a free, no-obligation consultation.",
    primaryCtaText:    'Get a Free Quote',
    primaryCtaHref:    '/contact',
    secondaryCtaText:  'Our Services',
    secondaryCtaHref:  '/services',
  },
} as const;

// ── Contact page ──────────────────────────────────────────────────────────────
export const contactPage = {
  hero: {
    title:    "Let's Talk About <span>Your Project</span>",
    subtitle: 'Ready to build? Have a question? Our team is always happy to discuss your needs. Fill in the form or reach us directly — we respond within 24 hours.',
    ctaText:  'Call Us Now',
  },
  info: {
    title:        'Get in Touch',
    intro:        "Whether you have a fully detailed specification or just a rough idea, we're here to help you take the next step. All initial consultations are free with no obligation.",
    promiseLabel: 'Our promise:',
    promise:      "You'll hear back from a named member of our team — not a call centre — within 24 working hours.",
  },
  details: {
    address: { title: 'Visit Us'      },
    phone:   { title: 'Call Us'       },
    email:   { title: 'Email Us'      },
    hours:   { title: 'Working Hours' },
  },
  form: {
    title:    'Send Us a Message',
    ariaLabel: 'Contact form',
    fields: {
      name:    { label: 'Full Name',        placeholder: 'Jan Kowalski',       autocomplete: 'name'  },
      email:   { label: 'Email Address',    placeholder: 'jan@example.com',    autocomplete: 'email' },
      phone:   { label: 'Phone Number',     placeholder: '+48 __ ___ __ __',   autocomplete: 'tel'   },
      service: { label: 'Service Required' },
      message: { label: 'Your Message',     placeholder: 'Tell us about your project — location, scope, timeline, and any other details that would help us prepare a quote...' },
      consent: { label: 'I agree to ArchiForce processing my data to respond to this enquiry.' },
    },
    serviceDefaultOption: '— Select a service —',
    serviceOptions: [
      'General Construction',
      'Renovations & Refurbishments',
      'Interior Finishing',
      'Roofing & Waterproofing',
      'Electrical & Plumbing',
      'Project Management & Consulting',
      'Other / Not sure yet',
    ],
    submitText: 'Send Message',
    errors: {
      name:    'Please enter your full name.',
      email:   'Please enter a valid email address.',
      message: 'Please enter a message (minimum 10 characters).',
    },
    success: {
      title: 'Message sent!',
      text:  'Thank you — a member of our team will be in touch within 24 hours.',
    },
  },
} as const;
