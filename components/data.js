/* ==========================================================================
   EDIT YOUR WEBSITE CONTENT HERE (no need to touch the page files)
   ========================================================================== */

export const SITE = {
  url: 'https://upmukhiyachai.com',   // your live domain, no trailing slash
  tagline: 'Kulhad chai franchise in Uttar Pradesh',
};

export const BRAND = {
  nameHi: 'उपमुखिया चाय',
  nameEn: 'Upmukhiya Chai',
  phones: [
    { display: '86300 08745', tel: '+918630008745', wa: null },
    { display: '72067 75364', tel: '+917206775364', wa: '917206775364' },
  ],
  email: 'upmukhiyachai@gmail.com',
  address: 'Ramganga Vihar, Near Sales Tax Office, Moradabad, Uttar Pradesh',
  city: 'Moradabad',
  state: 'Uttar Pradesh',
  mapQuery: 'Ramganga Vihar Near Sales Tax Office Moradabad Uttar Pradesh',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/upmukhiya.chai/',
  instagramHandle: '@upmukhiya.chai',
  // facebook: 'https://facebook.com/...',   // add more here later if needed
};

export const waLink = (number, text = '') =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/menu', label: 'Menu' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/contact', label: 'Contact' },
];

export const TEAS = [
  { name: 'Masala Chai', hi: 'मसाला चाय', img: '/images/tea/masala-chai.jpg', text: 'Slow-brewed with ginger, cardamom and whole spices.' },
  { name: 'Kulhad Chai', hi: 'कुल्हड़ चाय', img: '/images/tea/kulhad-chai.jpg', text: 'Served in a clay kulhad for that earthy, roadside taste.' },
  { name: 'Adrak Chai', hi: 'अदरक चाय', img: '/images/tea/ginger-chai.jpg', text: 'Fresh ginger, strong leaf and full-cream milk.' },
  { name: 'Elaichi Chai', hi: 'इलायची चाय', img: '/images/tea/elaichi-chai.jpg', text: 'Green cardamom pods crushed fresh into every pot.' },
  { name: 'Kesar Chai', hi: 'केसर चाय', img: '/images/tea/kesar-chai.jpg', text: 'Saffron-infused golden chai for special moments.' },
  { name: 'Lemon Tea', hi: 'नींबू चाय', img: '/images/tea/lemon-glass.jpg', text: 'Light, bright and refreshing with a squeeze of lemon.' },
  { name: 'Green Tea', hi: 'ग्रीन टी', img: '/images/tea/green-tea.jpg', text: 'Clean, gentle green tea with a fresh finish.' },
  { name: 'Mint Tea', hi: 'पुदीना चाय', img: '/images/tea/mint-tea.jpg', text: 'Fresh mint leaves steeped into a cooling cup.' },
  { name: 'Iced Tea', hi: 'आइस टी', img: '/images/tea/iced-tea.jpg', text: 'Chilled lemon iced tea for hot Moradabad afternoons.' },
];

export const SNACKS = [
  { name: 'Samosa', img: '/images/food/samosa.jpg' },
  { name: 'Grilled Sandwich', img: '/images/food/sandwich.jpg' },
  { name: 'Burger', img: '/images/food/burger.jpg' },
  { name: 'Bread Pakora', img: '/images/food/bread-pakora.jpg' },
  { name: 'Cold Coffee', img: '/images/food/cold-coffee.jpg' },
  { name: 'Strawberry Shake', img: '/images/food/strawberry-shake.jpg' },
];

/* Inauguration photos. To add one: put the photo in /public/images/launches/
   and add a new line below. `pos` = which part of the photo stays visible when cropped. */
export const LAUNCHES = [
  { img: '/images/launches/shahjahanpur-opening.jpg', title: 'Grand opening, Shahjahanpur', caption: 'A new outlet opens with family, friends and well-wishers.', alt: 'Women cutting the ribbon at the grand opening of the Shahjahanpur branch, with blue and white balloons', pos: 'center 40%' },
  { img: '/images/launches/outlet-opening-night.jpg', title: 'A new outlet opens', caption: 'The community gathers for the ribbon cutting.', alt: 'Elderly man cutting a pink ribbon at a new Upmukhiya Chai outlet while a crowd watches', pos: 'center 35%' },
  { img: '/images/launches/inauguration-petals.jpg', title: 'Rose petals and garlands', caption: 'Guests of honour welcomed with marigold garlands.', alt: 'Guests in marigold garlands at an outlet inauguration with rose petals falling', pos: 'center 60%' },
  { img: '/images/launches/ribbon-cutting.jpg', title: 'Ribbon cutting night', caption: 'Celebrations under the lights on opening night.', alt: 'Man in a striped shirt cutting a ribbon at an outlet opening under string lights', pos: 'center 40%' },
];

export const WHY = [
  ['Real chai, real taste', 'Strong leaf, fresh ginger, whole cardamom and real milk. No shortcuts in the cup.'],
  ['A brand people recognise', 'A clear name, logo and outlet look that customers remember and trust.'],
  ['Simple to run', 'A short menu of chai and snacks that is quick to prepare and easy to manage.'],
  ['Support after launch', 'Our UP Head and head office stay with you well after the opening day.'],
];

export const BENEFITS = [
  ['Trusted brand', 'A recognisable name, logo and outlet look that customers remember.'],
  ['Tested recipes', 'Our Chief Master Tea sets the blends and the method for every cup.'],
  ['Training', 'Hands-on training for you and your staff before launch.'],
  ['Outlet design', 'Warm, modern interiors and branded kulhads, cups and signage.'],
  ['Simple menu', 'Chai, snacks and cold drinks that are quick to prepare and easy to manage.'],
  ['Ongoing support', 'Our UP Head and head office stay in touch after you open.'],
];

export const STEPS = [
  ['Enquire', 'Send your details through the form or call us.'],
  ['Discuss', 'We talk about your city, space and budget.'],
  ['Agreement', 'Finalise the franchise terms with our team.'],
  ['Set up and train', 'Design the outlet and train your staff.'],
  ['Launch', 'Open your doors with our support on the ground.'],
];

export const FAQ = [
  ['How do I apply for an Upmukhiya Chai franchise?', 'Fill in the enquiry form on this page or call or WhatsApp us. Our team will contact you to discuss your city, space and budget.'],
  ['How much investment is needed?', 'The investment depends on your city and outlet size. Our team shares full details and terms after your enquiry.'],
  ['Which areas do you offer franchises in?', 'We are growing across Uttar Pradesh. Send us your city and we will confirm availability.'],
  ['Will I get training?', 'Yes. We train you and your staff on the recipes, brew method and serving style before launch.'],
  ['What do outlets sell?', 'Kulhad chai, masala chai, ginger and cardamom tea, green and iced tea, plus snacks like samosa, sandwich and burger. Menu may vary by outlet.'],
];

/* Franchise package TYPES – shown only on the Franchise page. No prices are shown.
   Edit the names and text, add or remove blocks. Set PACKAGES = [] to hide the section.
   featured: true highlights one card. Details and pricing are shared on enquiry. */
export const PACKAGES = [
  { name: 'Kiosk Package', note: 'A compact chai counter for high-footfall spots.', featured: false,
    includes: ['Small counter or stall format', 'Branded signage and cups', 'Core chai and snack menu', 'Training for you and your staff'] },
  { name: 'Standard Outlet Package', note: 'A full chai outlet with a complete menu.', featured: true,
    includes: ['Shop-format outlet with branded interior', 'Full chai, snacks and cold drinks menu', 'Branded kulhads, cups and signage', 'Training and launch support'] },
  { name: 'Premium Café Package', note: 'A café with seating for customers to sit and talk.', featured: false,
    includes: ['Café-style interior with seating', 'Full menu with premium serving', 'Complete branding and outlet design', 'Training and ongoing support'] },
];
