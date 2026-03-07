import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
  resolve: {
    alias: {
      "@freeplaceholder/core": path.resolve(__dirname, "../core/src/index.ts"),
      "@freeplaceholder/vue": path.resolve(__dirname, "../vue/src/index.ts"),
    },
  },
});
