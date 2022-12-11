import PS5Icon from "../../assets/icons/PS_icona1.png";
import PS4Icon from "../../assets/icons/PS_icona2.png";
import PSVRIcon from "../../assets/icons/PS_icona3.png";
import PSPlusIcon from "../../assets/icons/PS_icona4.png";
import PSStoreIcon from "../../assets/icons/PS_icona5.png";
import PS4ProIcon from "../../assets/icons/Ps_icona11.png";
import PSBlog from "../../assets/icons/Ps_icona10.png";
import PSThisMonth from "../../assets/icons/Ps_icona9.png";
import PSGear from "../../assets/icons/Ps_icona8.png";
import PSSupport from "../../assets/icons/Ps_icona7.png";
import PSNIcon from "../../assets/icons/Ps_Icona6.png";
import PSStarsIcon from "../../assets/icons/PSIcon_Stars.png";
import PSVR2Icon from "../../assets/icons/PSIcon_PSVR2.png";





export const navItems = [
  
  {
    id: 1,
    title: "games",
    icon: [
      { img: PS5Icon, title: "PS5", path: "/ps5" },
      { img: PS4Icon, title: "PS4", path: "/ps4" },
      { img: PSVRIcon, title: "PS VR", path: "/psvr" },
      { img: PSPlusIcon, title: "PS Plus", path: "/psplus" },
      { img: PSStoreIcon, title: "buy-games", path: "/store-games" },
    ],
    footerLink: [
      { link: "indie", path: "/" },
      { link: "titoli", path: "/" },
      { link: "Free to Play", path: "/" },
      { link: "pc", path: "/" },
      { link: "promo", path: "/" },
    ],
  },
  {
    id: 2,
    title: "Hardware",
    icon: [
      { img: PS5Icon, title: "PS5", path: "/ps5" },
      { img: PS4Icon, title: "PS4", path: "/ps4" },
      { img: PS4ProIcon, title: "PS4 Pro", path: "/" },
      { img: PSVR2Icon, title: "PS VR2", path: "/" },
    ],
    footerLink: [
      { link: "controller1", path: "/" },
      { link: "headphones", path: "/" },
      { link: "controller2", path: "/" },
      { link: "acc-ps", path: "/" },
      { link: "PlayStation VR", path: "/" },
    ],
  },
  {
    id: 3,
    title: "service",
    icon: [
      { img: PSPlusIcon, title: "PS Plus", path: "/" },
      { img: PSStarsIcon, title: "PS Stars", path: "/" },
    ],
    footerLink: [
      { link: "entertaiment1", path: "/" },
      { link: "entertaiment2", path: "/" },
    ],
  },
  {
    id: 4,
    title: "new",
    icon: [
      { img: PSBlog, title: "PS Blog", path: "/" },
      { img: PSThisMonth, title: "this-month", path: "/" },
    ],
    footerLink: [
      { link: "Gamer Board", path: "/" },
      { link: "access", path: "/" },
      { link: "privacy", path: "/" },
    ],
  },
  {
    id: 5,
    title: "shopping",
    icon: [
      {
        img: PSStoreIcon,
        title: "Digital Games and services",
        path: "/store-games",
      },
      { img: PSGear, title: "PS Gear", path: "/products" },
    ],
    footerLink: [
      { link: "latest", path: "/products" },
      { link: "new-sales", path: "/products" },
      { link: "raccolte", path: "/products" },
      { link: "buy-card", path: "/" },
      { link: "subscribe", path: "/" },
    ],
  },
  {
    id: 6,
    title: "support",
    icon: [
      { img: PSSupport, title: "support2", path: "/support" },
      { img: PSNIcon, title: "state", path: "/" },
    ],
    footerLink: [
      { link: "Account", path: "/" },
      { link: "store", path: "/" },
      { link: "subscriptions", path: "/" },
      { link: "games", path: "/" },
      { link: "Hardware", path: "/" },
    ],
  },
];
