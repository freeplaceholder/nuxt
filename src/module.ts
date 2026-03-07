import { defineNuxtModule, addImports, addComponent } from "@nuxt/kit";
import { configure } from "@freeplaceholder/core";

export interface ModuleOptions {
  baseUrl?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@freeplaceholder/nuxt",
    configKey: "freeplaceholder",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  defaults: {
    baseUrl: "https://freeplaceholder.com",
  },
  setup(options) {
    if (options.baseUrl) {
      configure({ baseUrl: options.baseUrl });
    }

    addComponent({
      name: "FpPlaceholder",
      export: "FpPlaceholder",
      filePath: "@freeplaceholder/vue",
    });

    addComponent({
      name: "FpAvatar",
      export: "FpAvatar",
      filePath: "@freeplaceholder/vue",
    });

    addImports([
      { name: "usePlaceholderUrl", from: "@freeplaceholder/vue" },
      { name: "useAvatarUrl", from: "@freeplaceholder/vue" },
      { name: "placeholderUrl", from: "@freeplaceholder/core" },
      { name: "avatarUrl", from: "@freeplaceholder/core" },
      { name: "configure", as: "configurePlaceholder", from: "@freeplaceholder/core" },
    ]);
  },
});
