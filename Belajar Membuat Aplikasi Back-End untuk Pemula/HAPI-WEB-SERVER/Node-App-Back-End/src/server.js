const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",

    // Same-Origin Policy
    //  Untuk cakupan CORS lebih luas untuk seluruh Route yang ad di server
    //  bisa tetapkan CORS pada konfigurasi ketika hendak membuat server dengan menambahkan properti routes.cors
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
