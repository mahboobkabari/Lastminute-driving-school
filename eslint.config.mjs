import nextConfig from "eslint-config-next";

const configs = Array.isArray(nextConfig) ? nextConfig : [nextConfig];

export default [
  {
    settings: {
      react: {
        version: "19.0.0",
      },
    },
  },
  ...configs.map((config) => ({
    ...config,
    settings: {
      ...config.settings,
      react: {
        version: "19.0.0",
      },
    },
  })),
  {
    ignores: [".next/*", "node_modules/*", "out/*", "build/*", "next-env.d.ts"],
  },
];
