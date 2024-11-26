import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		hmr: {
			overlay: false,
		},
	},
	build: {
		rollupOptions: {
			// 多页应用的页面入口配置
			// 和单页应用完全不同
			input: {
				main: resolve(__dirname, "index.html"),
				home: resolve(__dirname, "Home.html"),
				test: resolve(__dirname, "test.html"),
			},
		},
	},
});
