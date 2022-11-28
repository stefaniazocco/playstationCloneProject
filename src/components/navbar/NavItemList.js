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
    title: "Giochi",
    icon: [
      { img: PS5Icon, title: "PS5", path: "/ps5" },
      { img: PS4Icon, title: "PS4", path: "/ps4" },
      { img: PSVRIcon, title: "PS VR", path: "/psvr" },
      { img: PSPlusIcon, title: "PS Plus", path: "/psplus" },
      { img: PSStoreIcon, title: "Compra giochi", path: "/store-games" },
    ],
    footerLink: [
      { link: "Indie", path: "/" },
      { link: "Titoli per PS4 su PS5", path: "/" },
      { link: "Free to Play", path: "/" },
      { link: "PlayStation su PC", path: "/" },
      { link: "Promozioni e offerte", path: "/" },
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
      { link: "Controller wireless DualSense", path: "/" },
      { link: "Cuffie wireless con microfono Pulse 3D", path: "/" },
      { link: "Controller wireless DUALSHOCK 4", path: "/" },
      { link: "Accessori per PS5 e PS4", path: "/" },
      { link: "PlayStation VR", path: "/" },
    ],
  },
  {
    id: 3,
    title: "Servizi",
    icon: [
      { img: PSPlusIcon, title: "PS Plus", path: "/" },
      { img: PSStarsIcon, title: "PS Stars", path: "/" },
    ],
    footerLink: [
      { link: "Intrattenimento per PS5", path: "/" },
      { link: "Intrattenimento per PS4", path: "/" },
    ],
  },
  {
    id: 4,
    title: "Novità",
    icon: [
      { img: PSBlog, title: "PS Blog", path: "/" },
      { img: PSThisMonth, title: "Questo mese su PlayStation", path: "/" },
    ],
    footerLink: [
      { link: "Gamer Board", path: "/" },
      { link: "Accessibilità", path: "/" },
      { link: "Privacy e sicurezza", path: "/" },
    ],
  },
  {
    id: 5,
    title: "Fai acquisti",
    icon: [
      {
        img: PSStoreIcon,
        title: "Digital Games and services",
        path: "/store-games",
      },
      { img: PSGear, title: "PS Gear", path: "/" },
    ],
    footerLink: [
      { link: "Ultime uscite", path: "/" },
      { link: "Nuovi sconti", path: "/" },
      { link: "Raccolte", path: "/" },
      { link: "Acquista carta regalo", path: "/" },
      { link: "Abbonamento a PS Plus", path: "/" },
    ],
  },
  {
    id: 6,
    title: "Supporto",
    icon: [
      { img: PSSupport, title: "Supporto", path: "/support" },
      { img: PSNIcon, title: "Stato del PSN", path: "/" },
    ],
    footerLink: [
      { link: "Account", path: "/" },
      { link: "Acquisti", path: "/" },
      { link: "Abbonamenti", path: "/" },
      { link: "Giochi", path: "/" },
      { link: "Hardware", path: "/" },
    ],
  },
];
