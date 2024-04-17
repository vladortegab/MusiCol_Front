import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      nombre: "Beaver Creek",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      descripcion: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      nombre: "Daylight",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      descripcion: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      nombre: "Keep Going",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      descripcion: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      nombre: "Nightfall",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      descripcion: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      nombre: "Reflection",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      descripcion: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      nombre: "Under the City Stars",
      urlImagen:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      urlMusica: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      descripcion: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
