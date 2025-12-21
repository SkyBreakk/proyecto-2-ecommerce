// IMPORT DE IMÁGENES
import rubenImg from "../assets/img/about/ruben.jpg";
import samuelImg from "../assets/img/about/samuel.jpg";
import mariaImg from "../assets/img/about/maria.jpg";
import pabloImg from "../assets/img/about/pablo.jpg";

// ARRAY DE INTEGRANTES
const team = [
  {
    name: "Ruben López",
    role: "Scrum Master · Frontend Developer",
    img: rubenImg,
    contributions: [
      "Scrum Master",
      "Encargado del tablero de Trello",
      "Navbar",
      "Footer",
      "Acerca de nosotros",
      "Carrito",
    ],
  },
  {
    name: "Samuel Fernandez",
    role: "Encargado Técnico · Frontend Developer",
    img: samuelImg,
    contributions: [
      "Encargado Técnico",
      "Maquetado de la web",
      "Catálogo",
      "Página Principal",
      "Buscador",
      "Página Producto",
    ],
  },
  {
    name: "Maria Morales",
    role: "Frontend Developer",
    img: mariaImg,
    contributions: ["Tester", "Página Error 404", "Página de Contacto"],
  },
  {
    name: "Pablo Padilla",
    role: "Frontend Developer",
    img: pabloImg,
    contributions: ["Login", "Logout", "Register", "Página Admin"],
  },
];

export default team;
