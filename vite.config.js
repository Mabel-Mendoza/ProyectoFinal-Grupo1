import { defineConfig } from "vite";
import path from "node:path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "/ProyectoFinal-Grupo1/",
  appType: "mpa", // multipage app
  plugins: [
    handlebars({

      partialDirectory: path.resolve(__dirname, "Partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // aquí declaro
        main: path.resolve(__dirname, "index.html"),
        acercadenosotros: path.resolve(__dirname, "acercadenosotros.html"),
        eventos: path.resolve(__dirname, "eventos.html"),
        preguntas: path.resolve(__dirname, "preguntas.html"),
        entradas: path.resolve(__dirname, "entradas.html"),
        arroz: path.resolve(__dirname, "arroz.html"),
        mariscos: path.resolve(__dirname, "mariscos.html"),
        especialidades: path.resolve(__dirname, "especialidades.html"),
        bebidas: path.resolve(__dirname, "bebidas.html"),
        blog: path.resolve(__dirname, "blog.html"),
        contactanos: path.resolve(__dirname, "contactanos.html"),
        galeria: path.resolve(__dirname, "galeria.html"),
        reserva: path.resolve(__dirname, "reserva.html"),
      },
    },
  },
});
