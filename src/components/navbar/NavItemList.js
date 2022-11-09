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
  },
  {
    id: 2,
    title: "Hardware",
    icon: [
      { img: PS5Icon, title: "PS5", path: "/ps5" },
      { img: PS4Icon, title: "PS4", path: "/ps4" },
      { img: PS4ProIcon, title: "PS4 Pro", path: "/" },
      { img: PSVRIcon, title: "PS VR", path: "/" },
    ],
  },
  {
    id: 3,
    title: "Servizi",
    icon: [
      { img: PSPlusIcon, title: "PS Plus", path: "/" },
      { img: PS4Icon, title: "PS Stars", path: "/" },
    ],
  },
  {
    id: 4,
    title: "Novità",
    icon: [
      { img: PSBlog, title: "PS Blog", path: "/" },
      { img: PSThisMonth, title: "Questo mese su PlayStation", path: "/" },
    ],
  },
  {
    id: 5,
    title: "Fai acquisti",
    icon: [
      { img: PSStoreIcon, title: "Digital Games and services", path: "/store-games" },
      { img: PSGear, title: "PS Gear", path: "/" },
    ],
  },
  {
    id: 6,
    title: "Supporto",
    icon: [
      { img: PSSupport, title: "Supporto", path: "/support" },
      { img: PSNIcon, title: "Stato del PSN", path: "/" },
    ],
  },
];
