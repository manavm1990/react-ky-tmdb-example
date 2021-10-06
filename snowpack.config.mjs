/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alias: {
    components: "./src/components",
    "@app": "./src",
  },
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-postcss"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    /* ... */
  },
  env: {
    // Adds to import.meta.env
    TMDB_TOKEN:
      // TODO: ❗ Replace this with your own!
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzRiNjY2MjcwZDY2MDQyZDE0NTkxZmUxZGNiNzJiYiIsInN1YiI6IjVhZWM2M2IyMGUwYTI2NmUyNjAwNWRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bnRmupVnSCiiXDZhF2lHZi4g8PsJCECTbsfPnz_iMIY",
  },
};
