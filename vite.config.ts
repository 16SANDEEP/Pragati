import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/pragati/',
    server: {
      host: '127.0.0.1',
    },
    preview: {
      host: '127.0.0.1',
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      routes: ['/', '/auth', '/admin', '/admin/content', '/admin/gallery', '/admin/rsvps'],
    }
  },
});
