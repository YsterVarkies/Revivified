// Every fact on the page lives here, taken from revivifiedbeauty.mypixieset.com,
// the salon's printed flyers and @revivifiedbeauty. Change it here, not in the sections.

import { asset } from '@/lib/asset';

export const contact = {
  name: 'Revivified Beauty',
  street: '32 Peter Mokaba Street',
  town: 'Potchefstroom, 2520',
  whatsappDisplay: '071 359 4956',
  whatsappNumber: '27713594956',
  booksy: 'https://revivified.booksy.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=32+Peter+Mokaba+Street+Potchefstroom',
  instagram: 'https://www.instagram.com/revivifiedbeauty/',
  facebook: 'https://www.facebook.com/revivifiedbeauty',
  youtube: 'https://youtube.com/@revivifiedbeautysalon',
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const nav = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Academy', href: '#academy' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Testimonials', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
];

export const story =
  'Revivified Beauty opened in August 2016, built on careful research and the latest technology. As demand grew, so did the menu, from advanced skincare to pure pampering. Every client is given the time to talk through their skin, their needs and the result they want.';

// Bruidsgids & Wedding Guide membership badges, shown beside the salon's story.
// Add a new year by saving its badge in public/images and adding a line here.
export const badges = [
  { src: asset('images/bgwg-member-2024.webp'), alt: 'Proud member of Bruidsgids Wedding Guide, 2024' },
  { src: asset('images/bgwg-member-2025.webp'), alt: 'Proud member of Bruidsgids Wedding Guide, 2025' },
];

export type Treatment = { id: string; name: string; detail: string };
export type TreatmentGroup = {
  id: string;
  name: string;
  image: string;
  alt: string;
  caption: string;
  items: Treatment[];
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: 'skin',
    name: 'Skin and laser',
    image: asset('images/menu-skin.webp'),
    alt: 'Green leaves and flower buds covered in water droplets',
    caption: 'Skin and laser',
    items: [
      { id: 'laser', name: 'Laser treatments', detail: 'Hair removal and skin rejuvenation, face and body' },
      { id: 'skincare', name: 'Aesthetic skincare', detail: 'Monteil and Kalahari facials matched to your skin' },
      { id: 'collagen', name: 'Collagen induction', detail: 'Microneedling that prompts the skin to renew itself' },
      { id: 'acne', name: 'Acne treatment', detail: 'Calms breakouts, clears pores and supports healing' },
    ],
  },
  {
    id: 'face',
    name: 'Face and brows',
    image: asset('images/menu-face.webp'),
    alt: 'A bride with soft bridal make-up at a candlelit wedding table',
    caption: 'Bridal make-up by Maria',
    items: [
      { id: 'pmu', name: 'Permanent make-up', detail: 'Lips and brows, by PMU by Maria' },
      { id: 'makeup', name: 'Make-up and bridal', detail: 'Wedding days and special events, by Make-up by Maria' },
      { id: 'brows', name: 'Brows and lashes', detail: 'Threading, shaping, tinting and lash lifts' },
    ],
  },
  {
    id: 'body',
    name: 'Body',
    image: asset('images/menu-body.webp'),
    alt: 'A white water lily open among dark lily pads',
    caption: 'Body',
    items: [
      { id: 'massage', name: 'Massage', detail: 'Swedish, hot stone and cupping' },
      { id: 'slimming', name: 'Slimming', detail: 'Slimming and toning treatments for the body' },
      { id: 'waxing', name: 'Waxing', detail: 'Hot and strip wax' },
      { id: 'sunbed', name: 'Sunbed tanning', detail: 'A sunbed in the salon, now available' },
      { id: 'spraytan', name: 'Spray tan', detail: 'An even, professional tan without the sun' },
    ],
  },
  {
    id: 'hands',
    name: 'Nails, hair and smile',
    image: asset('images/teeth-whitening.webp'),
    alt: 'A client relaxing during a teeth whitening session under a blue light',
    caption: 'Teeth whitening, 30 minutes',
    items: [
      { id: 'nails', name: 'Nails', detail: 'Acrylic and gel' },
      { id: 'bracing', name: 'Nail bracing', detail: 'B/S Spange, for ingrown and deformed toenails' },
      { id: 'hair', name: 'Hair and upstyles', detail: 'Styled with GHD' },
      { id: 'teeth', name: 'Teeth whitening', detail: 'Two to nine shades whiter in 30 painless minutes' },
    ],
  },
];

export const academy = {
  before: 'Learn the treatments we perform every day, hands on, in a working salon.',
  after: 'courses, from skin analysis to lash extensions, for newcomers and for therapists refining their craft.',
  slips: [
    {
      name: 'Skin',
      courses: ['Skin analysis', 'Advanced skin analysis', 'Skincare generic', 'Dermaplaning', 'Microneedling'],
    },
    {
      name: 'Machines',
      courses: ['MDA diamond tip', 'Micro-current', 'Audiosonic', 'Skin scrubber', 'Galvanic', 'Frimator', 'High frequency'],
    },
    {
      name: 'Massage',
      courses: ['Swedish massage', 'Hot stone massage', 'Cupping massage', 'Rungu massage', 'Calabash massage'],
    },
    {
      name: 'Brows and lashes',
      courses: [
        'Threading',
        'Eyebrow shaping',
        'Brow mapping',
        'Henna brow tinting',
        'Lash and brow tinting',
        'Lash lift',
        'Individual lashes',
      ],
    },
    { name: 'Hands and feet', courses: ['B/S Spange nail bracing', 'Manicure or pedicure', 'Waxing, hot and strip'] },
    { name: 'Finishing', courses: ['Basic make-up', 'Professional spray tan'] },
  ],
};

export const boutique = {
  photos: [
    { src: asset('images/boutique-gown-train.webp'), alt: 'A beaded silver gown with a long lace train on the lounge rug' },
    { src: asset('images/ella-pink-top.webp'), alt: 'A pink bubble-hem top from Ella Carlé' },
    { src: asset('images/ella-floral.webp'), alt: 'Two floral midi dresses from Ella Carlé' },
    { src: asset('images/boutique-ella-rack.webp'), alt: 'Two women browsing a rail of Ella Carlé clothing' },
    { src: asset('images/ella-friends.webp'), alt: 'Two friends in striped tops and linen shorts' },
  ],
};

export const dressHire = {
  image: asset('images/formal-wear-hire.webp'),
  alt: 'Elegantly Styled Boutique: formal wear for hire. A woman in a black off-the-shoulder dress beside the RB boutique logo, Revivified Beauty Salon, 32 Peter Mokaba Street, 071 359 4956.',
};

export const womanOnTheMove = {
  photos: [
    { src: asset('images/wotm-crossbody.webp'), alt: 'A tan Woman on the Move crossbody phone wallet' },
    { src: asset('images/wotm-leopard.webp'), alt: 'A leopard print crossbody phone pouch' },
    { src: asset('images/wotm-phone.webp'), alt: 'A phone on a beige crossbody strap' },
    {
      src: asset('images/wotm-chain-set.webp'),
      alt: 'A clear phone case with a gold chain, a beige zip pouch and a woven crossbody strap',
    },
  ],
};

export const retail = [
  {
    name: 'Monteil',
    text: 'The German anti-ageing specialist, found in over 30 countries. Bio-active ingredients in high concentration, for luxury treatments in the salon and home care that keeps the result.',
    image: asset('images/retail-monteil.webp'),
    alt: 'Monteil serums, Perfect Skin and Elixir Métamorphose bottles on a wet stone ledge',
    size: 'landscape',
  },
  {
    name: 'Kalahari',
    text: 'A proudly South African range with CF Ceutical, KPhyto Ceuticals and Ancient Desert Secrets, made from sustainably sourced botanicals and suited to every skin condition.',
    image: asset('images/retail-kalahari.webp'),
    alt: 'Kalahari Phyto Ceutical serums, booster gel and facial cleanser in copper and white',
    size: 'square',
  },
  {
    name: 'Thoclor',
    text: 'Hypochlorous acid care, with Trifectiv Plus for wounds and burns. GF1 calms and speeds healing after laser, peels, waxing and microneedling. GF2 hydrates, fades age spots and clears breakouts.',
    image: asset('images/retail-thoclor.webp'),
    alt: 'Thoclor GF1 aftercare and GF2 skin rejuvenation bottles on marble',
    size: 'portrait',
  },
  {
    name: 'Malu Wilz and Lovella',
    text: 'Make-up made in Germany that cares for the skin, with Lovella’s coating sealer, brow styling soap and keratin lash serum.',
    image: asset('images/retail-malu-wilz.webp'),
    alt: 'An open jar of Malu Wilz loose powder with a white puff on scattered powder',
    size: 'square',
  },
  {
    name: 'Pure Smile',
    text: 'Fluoride-free instant whitening toothpaste, a CBD toothpaste and activated coconut charcoal powder, all 100% natural.',
    image: asset('images/retail-pure-smile.webp'),
    alt: 'A tube of Pure Smile instant whitening toothpaste',
    size: 'landscape',
  },
  {
    name: 'GHD',
    text: 'The professional stylers we use for every upstyle, on the shelf to take home.',
    image: asset('images/retail-ghd.webp'),
    alt: 'A black GHD styler resting on glass prisms',
    size: 'portrait',
  },
];

export const counterNote =
  'Also at the counter: Gin and Fruit Caviar in thirteen flavours, from chilli and mango to rooibos and ginger.';

export const reviews = [
  'Calm, relaxing, private and clean. Great therapists that are very knowledgeable. Definitely recommend.',
  'A relaxing face treatment that left my skin glowing.',
  'Very professional, love the atmosphere. Thank you for my beautiful brows.',
  'Fantastic atmosphere! Very friendly service! I will definitely visit them again soon!',
  'Such an amazing experience!! Love my nails.',
  'Absolutely amazing service! Had the most amazing time. Will definitely be going back asap!',
  'Excellent service. Will definitely be going back. Friendly staff.',
  'Professional and welcoming experience.',
  'Wonderful experience, friendly team.',
  'Always excellent service at Revivified.',
  'Very professional, definitely recommended.',
];

export const credits = [
  { what: 'Leaves with water droplets', who: 'John French', where: 'https://unsplash.com' },
  { what: 'Calla lily', who: 'Marta Pawlik', where: 'https://unsplash.com' },
  { what: 'Water lily', who: 'Schicka', where: 'https://unsplash.com' },
];
