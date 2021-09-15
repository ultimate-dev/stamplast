export default [
  {
    name: "Ana Sayfa",
    to: "/",
    exact: true,
  },
  {
    name: "Kurumsal",
    to: "/corporate",
    menu: [
      {
        name: "Hakkımızda",
        to: "/corporate/about",
      },
      {
        name: "Politikamız",
        to: "/corporate/our-policy",
      },
    ],
  },
  {
    name: "Ürünler",
    to: "/products",
  },
  {
    name: "Özellikler",
    to: "/features",
    exact: true,
  },
  {
    name: "Haberler",
    to: "/news",
  },
  {
    name: "İletişim",
    to: "/contact",
    exact: true,
  },
];
