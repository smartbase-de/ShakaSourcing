// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  //{ name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
 /* {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },*/
  {
    section: "Company",
    links: [
      { name: "Services", url: "/services" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "/careers" },
      //{ name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  x: "https://x.com/ShakaSourcing",

};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};