const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    allowedHosts: "all",
    proxy: "https://bugzlightyear-flightman.herokuapp.com/",
  },
  transpileDependencies: ["vuetify"],
});
