🧹 Remove unoptimized prop from Next.js Images

🎯 **What:** Removed the `unoptimized` prop from all `Image` components in `src/app/about/page.tsx`, `src/app/page.tsx`, and `src/app/domvio/page.tsx`, and removed the global `unoptimized: true` setting from `next.config.ts`.
💡 **Why:** Removing the unoptimized prop enables Next.js image optimization, which helps with performance and loading time of the images.
✅ **Verification:** Ran `npm run build` to confirm that static export continues to work successfully even without the unoptimized prop/setting.
✨ **Result:** Improved page load performance through optimized image delivery.
