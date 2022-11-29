const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: "https://bugzlightyear-flightman.herokuapp.com/",
  },
  transpileDependencies: ["vuetify"],
});
