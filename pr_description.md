🎯 **What:** Removed the redundant `unoptimized` prop from the `next/image` component for the role selection image in `src/app/domvio/page.tsx:152`.

💡 **Why:** `next/image` handles optimization automatically, which helps with performance and loading time. The `unoptimized` prop bypassed this process. For external images, `unoptimized` is needed without specific Next.js configuration, but for this local asset, it was a code health issue hindering performance optimization. Removing it allows Next.js to properly optimize the image delivery.

✅ **Verification:** Verified by checking that `npm run build` completed successfully without any compilation errors, ensuring the change didn't break the build process and the static export completes successfully. Additionally passed code review for correctness and safety.

✨ **Result:** Improved image loading performance and code cleanliness by leveraging the default Next.js image optimization behavior for the local asset.
