export const BRAND = {
  nameHi: 'उपमुखिया चाय',
  nameEn: 'Upmukhiya Chai',
  phones: [
    { display: '86300 08745', tel: '+918630008745', wa: '918630008745' },
    { display: '72067 75364', tel: '+917206775364', wa: '917206775364' },
  ],
  email: 'upmukhiyachai@gmail.com',
  address: 'Ramganga Vihar, Near Sales Tax Office, Moradabad, Uttar Pradesh',
  mapQuery: 'Ramganga Vihar Near Sales Tax Office Moradabad Uttar Pradesh',
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
  { name: 'Masala Chai', hi: 'मसाला चाय', img: '/images/tea/kulhad-1.jpg', text: 'Slow-brewed with ginger, cardamom and whole spices.' },
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
