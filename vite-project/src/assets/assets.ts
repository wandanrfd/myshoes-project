import { TruckIcon, LeafIcon, ClockIcon, ShieldCheckIcon } from "lucide-react";
import sneakersImg from "./sneakers.png";
import sandalImg from "./sandal.png";
import sportsImg from "./sports.png";
import formalImg from "./formal.png";
import bootsImg from "./boots.png";
import sliponImg from "./slipon.png";
import highheelsImg from "./highheels.png";
import canvasImg from "./canvas.png";
import {
  MapPin,
  Phone,
  Mail,
  Share2,
  Globe,
  MessageSquare,
} from "lucide-react";
import sepatuImg from "./sepatu.jpg";

export const footerData = {
  brand: {
    name: "MyShoes",
    description:
      "Menyediakan berbagai macam koleksi sepatu berkulitas, nyaman, dan gaya untuk mendukung setiap langkah aktivitas Anda.",
    socials: [
      { icon: Share2, link: "https://facebook.com" },
      { icon: Globe, link: "https://twitter.com" },
      { icon: MessageSquare, link: "https://instagram.com" },
    ],
  },
  sections: [
    {
      title: "QUICK LINKS",
      links: [
        { label: "All Products", to: "/products" },
        { label: "Flash Deals", to: "/deals" },
        { label: "Track Order", to: "/track-order" },
        { label: "Delivery Partner", to: "/delivery" },
      ],
    },
    {
      title: "CUSTOMER SERVICE",
      links: [
        { label: "My Account", to: "/account" },
        { label: "Order History", to: "/orders" },
        { label: "Addresses", to: "/addresses" },
        { label: "Help Center", to: "/help" },
      ],
    },
  ],
  contact: [
    { icon: MapPin, text: "Jl. Soekarno Hatta No. 123, Malang" },
    { icon: Phone, text: "+62 812-3456-7890" },
    { icon: Mail, text: "support@myshoes.com" },
  ],
  bottom: {
    copyright: "© 2026 MyShoes. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

export const categoriesData = [
  {
    name: "Sneakers",
    slug: "sneakers",
    image: sneakersImg,
  },
  {
    name: "Sport",
    slug: "sport",
    image: sportsImg,
  },
  {
    name: "Formal",
    slug: "formal",
    image: formalImg,
  },
  {
    name: "Boots",
    slug: "boots",
    image: bootsImg,
  },
  {
    name: "Sandal",
    slug: "sandal",
    image: sandalImg,
  },
  {
    name: "Slip On",
    slug: "slip-on",
    image: sliponImg,
  },
  {
    name: "High Heels",
    slug: "high-heels",
    image: highheelsImg,
  },
  {
    name: "Canvas Shoes",
    slug: "canvas",
    image: canvasImg,
  },
];

export const dummyProducts = [];

// export const dummyProducts = [
//   {
//     _id: "1",
//     name: "Stiletto High Heels Elegant",
//     description:
//       "High heels bahan kulit sintetis premium dengan desain anggun untuk acara formal.",
//     price: 650000,
//     offerPrice: 520000,
//     discount: 20,
//     image: [highheelsImg],
//     category: "high-heels",
//     rating: 4.8,
//     reviewCount: 34,
//   },
//   {
//     _id: "2",
//     name: "Classic Low Canvas Sneakers",
//     description:
//       "Sepatu kanvas bertali gaya retro, sangat ringan dan nyaman untuk pemakaian sehari-hari.",
//     price: 380000,
//     offerPrice: 299000,
//     discount: 21,
//     image: [canvasImg],
//     category: "canvas",
//     rating: 4.6,
//     reviewCount: 89,
//   },
//   {
//     _id: "3",
//     name: "Leather Strapped Casual Sandal",
//     description:
//       "Sandal kulit kasual dengan strap fleksibel dan sol empuk anti slip.",
//     price: 250000,
//     offerPrice: 199000,
//     discount: 20,
//     image: [sandalImg],
//     category: "sandal",
//     rating: 4.5,
//     reviewCount: 52,
//   },
//   {
//     _id: "4",
//     name: "Urban Streetwear Sneakers",
//     description:
//       "Sneakers modern dengan sirkulasi udara baik, cocok untuk hang out maupun olahraga ringan.",
//     price: 750000,
//     offerPrice: 599000,
//     discount: 20,
//     image: [sneakersImg],
//     category: "sneakers",
//     rating: 4.9,
//     reviewCount: 120,
//   },
//   {
//     _id: "5",
//     name: "Tactical Leather Boots",
//     description:
//       "Sepatu boots bahan kulit tahan lama dengan grip kuat untuk segala medan.",
//     price: 890000,
//     offerPrice: 712000,
//     discount: 20,
//     image: [bootsImg],
//     category: "boots",
//     rating: 4.7,
//     reviewCount: 45,
//   },
// ];

export const dummyDashboardOrdersData = [
  {
    shippingAddress: {
      label: "Rumah",
      address: "Jl. Soekarno Hatta No. 12",
      city: "Malang",
      state: "Jawa Timur",
      zip: "65141",
      lat: -7.942,
      lng: 112.62,
    },
    liveLocation: {
      lat: -7.942,
      lng: 112.62,
      updatedAt: "2026-04-06T08:41:27.211Z",
    },
    _id: "69d366617ed7e54198d67dac",
    user: {
      _id: "69bb6caf448f2d818db59122",
      name: "Pelanggan Setia",
      email: "user@example.com",
    },
    items: [
      {
        product: "69c22613ae75a98c7cd13b3b",
        name: "Stiletto High Heels Elegant",
        image: [highheelsImg],
        price: 520000,
        quantity: 1,
        size: "38",
        _id: "69d366617ed7e54198d67dad",
      },
      {
        product: "69c22613ae75a98c7cd13b36",
        name: "Casual Shoes",
        image: [sneakersImg],
        price: 450000,
        quantity: 1,
        size: "41",
        _id: "69d366617ed7e54198d67dae",
      },
    ],
    paymentMethod: "COD",
    subtotal: 970000,
    deliveryFee: 15000,
    tax: 0,
    total: 985000,
    status: "Delivered",
    statusHistory: [
      {
        status: "Placed",
        note: "Pesanan berhasil dibuat",
        _id: "69d366617ed7e54198d67daf",
        timestamp: "2026-04-06T07:53:05.769Z",
      },
      {
        status: "Shipped",
        note: "Pesanan telah diserahkan ke kurir",
        _id: "69d366b57ed7e54198d67e00",
        timestamp: "2026-04-06T07:54:29.226Z",
      },
      {
        status: "Delivered",
        note: "Pesanan diterima oleh pembeli",
        _id: "69d373207ed7e54198d681b1",
        timestamp: "2026-04-06T08:47:28.983Z",
      },
    ],
    deliveryPartner: {
      _id: "69bbfc3866db7c6cdea47ede",
      name: "JNE / J&T Express",
      email: "courier@example.com",
      phone: "081234567890",
    },
    deliveryOtp: "",
    isPaid: true,
    createdAt: "2026-04-06T07:53:05.774Z",
    updatedAt: "2026-04-06T08:47:28.984Z",
    __v: 4,
  },
  {
    shippingAddress: {
      label: "Kantor",
      address: "Jl. Sudirman No. 45",
      city: "Jakarta Selatan",
      state: "DKI Jakarta",
      zip: "12190",
      lat: -6.225,
      lng: 106.808,
    },
    liveLocation: {
      lat: -6.225,
      lng: 106.808,
      updatedAt: "2026-04-06T08:41:27.211Z",
    },
    _id: "69d366617ed7e54198d67dad",
    user: {
      _id: "69bb6caf448f2d818db59122",
      name: "Pelanggan Setia",
      email: "user@example.com",
    },
    items: [
      {
        product: "69c22613ae75a98c7cd13b3b",
        name: "Stiletto High Heels Elegant",
        image: [highheelsImg],
        price: 520000,
        quantity: 1,
        size: "37",
        _id: "69d366617ed7e54198d67dad",
      },
    ],
    paymentMethod: "Bank Transfer",
    subtotal: 520000,
    deliveryFee: 20000,
    tax: 0,
    total: 540000,
    status: "Out for Delivery",
    statusHistory: [
      {
        status: "Placed",
        note: "Pesanan berhasil dibuat",
        _id: "69d366617ed7e54198d67daf",
        timestamp: "2026-04-06T07:53:05.769Z",
      },
      {
        status: "Packed",
        note: "Sepatu sedang dikemas",
        _id: "69d366b37ed7e54198d67ddc",
        timestamp: "2026-04-06T07:54:27.171Z",
      },
      {
        status: "Out for Delivery",
        note: "Kurir sedang menuju ke alamat tujuan",
        _id: "69d366b57ed7e54198d67e00",
        timestamp: "2026-04-06T07:54:29.226Z",
      },
    ],
    deliveryPartner: {
      _id: "69bbfc3866db7c6cdea47ede",
      name: "Sicepat Express",
      email: "courier@example.com",
      phone: "081987654321",
    },
    deliveryOtp: "754730",
    isPaid: true,
    createdAt: "2026-04-06T07:53:05.774Z",
    updatedAt: "2026-04-06T08:47:28.984Z",
    __v: 4,
  },
];

export const iconsForLeafpad = {
  truck: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
  destination: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
};

export const dummyAddressData = [
  {
    label: "Rumah",
    address: "Jl. Sudirman No. 45, RT 02/RW 05, Karet Semanggi",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    zip: "12930",
    isDefault: true,
    lat: -6.2146,
    lng: 106.8214,
    _id: "69d3652df9a340288f1a0f8c",
  },
  {
    label: "Kantor",
    address: "Gedung Tunjungan Tower Lt. 8, Jl. Tunjungan No. 12",
    city: "Surabaya",
    state: "Jawa Timur",
    zip: "60275",
    isDefault: false,
    lat: -7.2575,
    lng: 112.7383,
    _id: "69d3652df9a340288f1a0f8d",
  },
];

export const statusColors: Record<string, string> = {
  Placed: "bg-blue-100 text-blue-700",
  Confirmed: "bg-indigo-100 text-indigo-700",
  Packed: "bg-purple-100 text-purple-700",
  "Out for Delivery": "bg-app-orange/10 text-app-orange",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};
export const dummyAdminDashboardData = {
  totalOrders: 1,
  totalUsers: 3,
  totalProducts: 5,
  outOfStock: 0,
  totalPartners: 2,
  recentOrders: [
    {
      shippingAddress: {
        label: "Rumah",
        address: "Jl. Sudirman No. 45, RT 02/RW 05, Karet Semanggi",
        city: "Jakarta Selatan",
        state: "DKI Jakarta",
        zip: "12930",
        lat: -6.2146,
        lng: 106.8173,
      },
      liveLocation: {
        lat: -6.2146,
        lng: 106.8173,
        updatedAt: "2026-09-25T08:41:27.211Z",
      },
      _id: "69d366617ed7e54198d67dac",
      user: {
        _id: "69bb6caf448f2d818db59122",
        name: "Admin",
        email: "admin@myshoes.com",
      },
      items: [
        {
          product: "69c22613ae75a98c7cd13b3b",
          name: "Stiletto High Heels Elegant",
          image:
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/heels.png", // Sesuaikan path gambar sepatu Anda
          price: 520000,
          quantity: 1,
          unit: "Pair",
          _id: "69d366617ed7e54198d67dad",
        },
      ],
      paymentMethod: "card",
      subtotal: 520000,
      deliveryFee: 0,
      tax: 41600,
      total: 561600,
      status: "Delivered",
      statusHistory: [
        {
          status: "Placed",
          note: "Order placed successfully",
          _id: "69d366617ed7e54198d67daf",
          timestamp: "2026-09-25T07:53:05.769Z",
        },
        {
          status: "Assigned",
          note: "Assigned to Budi Kurir",
          _id: "69d366ab7ed7e54198d67dbe",
          timestamp: "2026-09-25T07:54:19.796Z",
        },
        {
          status: "Packed",
          note: "Status updated to Packed",
          _id: "69d366b37ed7e54198d67ddc",
          timestamp: "2026-09-25T07:54:27.171Z",
        },
        {
          status: "Out for Delivery",
          note: "Status updated to Out for Delivery",
          _id: "69d366b57ed7e54198d67e00",
          timestamp: "2026-09-25T07:54:29.226Z",
        },
        {
          status: "Delivered",
          note: "Delivered by partner",
          _id: "69d373207ed7e54198d681b1",
          timestamp: "2026-09-25T08:47:28.983Z",
        },
      ],
      deliveryPartner: {
        _id: "69bbfc3866db7c6cdea47ede",
        name: "Budi Kurir",
        phone: "081234567890",
      },
      deliveryOtp: "",
      isPaid: true,
      createdAt: "2026-09-25T07:53:05.774Z",
      updatedAt: "2026-09-25T08:47:28.984Z",
      __v: 4,
    },
  ],
};
export const dummyDeliveryPartnerData = [
  {
    _id: "69bbfc6c66db7c6cdea47ee4",
    name: "Budi Santoso",
    email: "budi@myshoes.com",
    phone: "081234567890",
    avatar: "",
    vehicleType: "bike",
    isActive: true,
    createdAt: "2026-03-19T13:38:52.827Z",
    updatedAt: "2026-03-19T13:38:52.827Z",
    __v: 0,
  },
  {
    _id: "69bbfc3866db7c6cdea47ede",
    name: "Ahmad Rizky",
    email: "ahmad@myshoes.com",
    phone: "089876543210",
    avatar: "",
    vehicleType: "bike",
    isActive: true,
    createdAt: "2026-03-19T13:38:00.872Z",
    updatedAt: "2026-03-19T13:38:00.872Z",
    __v: 0,
  },
];
export const heroSectionData = {
  description:
    "Fresh, organic groceries delivered from local farms to your doorstep. Quality you can taste, convenience you deserve.",
  hero_image: sepatuImg,
  hero_features: [
    { icon: TruckIcon, title: "Free Delivery", desc: "Orders over $20" },
    { icon: LeafIcon, title: "100% Organic", desc: "Certified products" },
    { icon: ClockIcon, title: "Same Day", desc: "Express delivery" },
    { icon: ShieldCheckIcon, title: "Secure Pay", desc: "Safe checkout" },
  ],
};
