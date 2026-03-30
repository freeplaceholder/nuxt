import { describe, it, expect, vi, beforeEach } from "vitest";

const mockAddComponent = vi.fn();
const mockAddImports = vi.fn();
const mockConfigure = vi.fn();

vi.mock("@nuxt/kit", () => ({
  defineNuxtModule: (options: { setup: (opts: Record<string, unknown>) => void }) => ({
    _setup: options.setup,
  }),
  addComponent: mockAddComponent,
  addImports: mockAddImports,
}));

vi.mock("@freeplaceholder/core", () => ({
  configure: mockConfigure,
}));

describe("Nuxt module", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  it("exports a Nuxt module definition", async () => {
    const mod = await import("../src/module");
    expect(mod.default).toBeDefined();
  });

  it("calls configure with the provided baseUrl", async () => {
    vi.doMock("@freeplaceholder/core", () => ({ configure: mockConfigure }));
    const mod = await import("../src/module");
    const module = mod.default as unknown as { _setup: (opts: Record<string, unknown>) => void };
    module._setup({ baseUrl: "https://my.custom.url" });
    expect(mockConfigure).toHaveBeenCalledWith({ baseUrl: "https://my.custom.url" });
  });

  it("does not call configure when baseUrl is not provided", async () => {
    const mod = await import("../src/module");
    const module = mod.default as unknown as { _setup: (opts: Record<string, unknown>) => void };
    module._setup({});
    expect(mockConfigure).not.toHaveBeenCalled();
  });

  it("registers FpPlaceholder component", async () => {
    const mod = await import("../src/module");
    const module = mod.default as unknown as { _setup: (opts: Record<string, unknown>) => void };
    module._setup({ baseUrl: "https://freeplaceholder.com" });
    expect(mockAddComponent).toHaveBeenCalledWith(expect.objectContaining({
      name: "FpPlaceholder",
      export: "FpPlaceholder",
      filePath: "@freeplaceholder/vue",
    }));
  });

  it("registers FpAvatar component", async () => {
    const mod = await import("../src/module");
    const module = mod.default as unknown as { _setup: (opts: Record<string, unknown>) => void };
    module._setup({ baseUrl: "https://freeplaceholder.com" });
    expect(mockAddComponent).toHaveBeenCalledWith(expect.objectContaining({
      name: "FpAvatar",
      export: "FpAvatar",
      filePath: "@freeplaceholder/vue",
    }));
  });

  it("registers auto-imports for composables and URL builders", async () => {
    const mod = await import("../src/module");
    const module = mod.default as unknown as { _setup: (opts: Record<string, unknown>) => void };
    module._setup({ baseUrl: "https://freeplaceholder.com" });
    expect(mockAddImports).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: "useAvatarUrl" }),
        expect.objectContaining({ name: "usePlaceholderUrl" }),
        expect.objectContaining({ name: "useSnippetUrl" }),
        expect.objectContaining({ name: "avatarUrl" }),
        expect.objectContaining({ name: "placeholderUrl" }),
        expect.objectContaining({ name: "snippetUrl" }),
        expect.objectContaining({ name: "configure", as: "configurePlaceholder" }),
      ]),
    );
  });
});
