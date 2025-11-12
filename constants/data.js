// constants/data.js
export const SITE_DATA = {
  brand: {
    name: "FlavorTown",
    tagline: "Taste the Adventure!",
    description:
      "Unlock Your Culinary Journey with our premium fast-food delights",
  },
  nav: ["Home", "About", "Menu", , "Testimonials", "Contact"],

  testimonials: [
    {
      name: "Anjali Verma",
      text: "The burger was juicy, the fries crispy, and the vibe absolutely amazing!",
      rating: 5,
      avatarIcon: "🍔",
      role: "Food Blogger",
    },
    {
      name: "Rahul Singh",
      text: "Loved the spicy chicken sandwich and mango shake combo! Perfect flavor mix.",
      rating: 5,
      avatarIcon: "🍟",
      role: "Local Guide",
    },
    {
      name: "Neha Sharma",
      text: "Every visit feels like a food festival. Can’t stop coming back for more!",
      rating: 4,
      avatarIcon: "🥤",
      role: "Regular Customer",
    },
    {
      name: "Arjun Mehta",
      text: "Best vegan burger in town! Fresh, flavorful, and guilt-free.",
      rating: 5,
      avatarIcon: "🥗",
      role: "Vegan Enthusiast",
    },
    {
      name: "Simran Kapoor",
      text: "Friendly staff, cozy vibe, and delicious desserts! Perfect weekend spot.",
      rating: 5,
      avatarIcon: "🍰",
      role: "Dessert Lover",
    },
    {
      name: "Karan Patel",
      text: "Cold coffee and fries are my go-to. The taste is consistent and amazing!",
      rating: 4,
      avatarIcon: "☕",
      role: "Student",
    },
  ],
};

// constants/menuData.js
export const MENU_DATA = [
  {
    category: "Burgers & More 🍔",
    icon: "/assets/eating-burger.png",
    emoji: "🍔",
    items: [
      { name: "Classic Cheeseburger", price: "$5.99" },
      { name: "Spicy Chicken Sandwich", price: "$6.49" },
      { name: "Vegan Burger", price: "$6.99" },
      { name: "Crispy Tenders", price: "$5.49" },
    ],
  },
  {
    category: "Sides & Desserts 🍟🍩",
    icon: "/assets/eating-dessert.png",
    emoji: "🍟",
    items: [
      { name: "Loaded Fries", price: "$3.99" },
      { name: "Mozzarella Sticks", price: "$4.49" },
      { name: "Chocolate Brownie", price: "$2.99" },
      { name: "Cheese Dip", price: "$1.99" },
    ],
  },
  {
    category: "Drinks 🥤",
    icon: "/assets/enjoying-drink.png",
    emoji: "🥤",
    items: [
      { name: "Fresh Lemonade", price: "$2.49" },
      { name: "Mango Shake", price: "$2.99" },
      { name: "Cold Coffee", price: "$3.49" },
      { name: "Soda Float", price: "$2.29" },
    ],
  },
  {
    category: "Special Combos 🍕✨",
    icon: "/assets/eating-pizza.png",
    emoji: "🍕",
    items: [
      { name: "Family Feast Combo", price: "$12.99" },
      { name: "Cheesy Feast Box", price: "$9.99" },
      { name: "Double Patty Deluxe", price: "$7.99" },
    ],
  },
];
