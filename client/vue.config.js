const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/main.scss";',
      },
    },
  },
  pwa: {
    name: "bloom",
    themeColor: "#da532c",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./registerServiceWorker.js",
      // ...other Workbox options...
    },
  },
};

// {
//   "name": "bloom",
//   "short_name": "bloom",
//   "start_url": "/index.html",
//   "theme_color": "#da532c",
//   "background_color": "#da532c",
//   "display": "standalone",
//   "scope": "/app/",
//   "icons": [
//       {
//           "src": "favicon/favicon-16x16.png",
//           "type": "image/png",
//           "sizes": "16x16"
//       },
//       {
//           "src": "favicon/favicon-32x32.png",
//           "type": "image/png",
//           "sizes": "32x32"
//       },
//       {
//           "src": "favicon/android-chrome-192x192.png",
//           "type": "image/png",
//           "sizes": "192x192"
//       }
//   ]
// }
