import json

# This contains the payload from list_design_systems earlier
payload = {
  "designSystems": [
    {
      "name": "assets/3aa866d4aba240abb0379f52cc151109",
      "designSystem": {
        "displayName": "Giridhar Reddy Portfolio",
        "styleGuidelines": "## Brand & Style\n\nThe design system is built on the principles of **Brutalist Minimalism**. It prioritizes raw structural integrity, clarity, and intentionality over decorative flourishes. The brand personality is intellectually honest, precise, and understated, catering to an audience that values technical craft and architectural layout.\n\nThe visual style is defined by a rigorous grid, sharp edges, and a high-contrast monochromatic base. By stripping away shadows, gradients, and rounded corners, the design system forces focus onto the content and the rhythm of the typography. It evokes a digital \"gallery\" feeling—neutral enough to showcase work, but bold enough to have a distinct, authoritative voice.\n\n## Layout & Spacing\n\nThe layout philosophy follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. It uses a strict 8px base unit system to ensure mathematical alignment.\n\n- **Desktop**: 12-column grid with a max-width of 1440px. Gutters are fixed at 24px.\n- **Mobile**: 4-column grid with 16px side margins. \n- **Rhythm**: Spacing between sections should be aggressive (64px or 128px) to emphasize the minimalist \"void\" and structural clarity. Elements within a component are tightly packed (4px or 8px) to create distinct groupings.\n\n## Elevation & Depth\n\nThis design system rejects all forms of simulated depth. There are no shadows, blurs, or gradients. Depth is communicated exclusively through **Tonal Layering** and **High-Contrast Borders**.\n\n- **Level 0 (Base)**: The `#F7F5F2` background.\n- **Level 1 (Containers)**: The `#EDEBE7` surface, typically wrapped in a 1px `#0A0A0A` border.\n- **Active State**: The `#2563EB` accent color acts as the highest level of visual priority, used for selection or focus rather than physical elevation.\n- **Interaction**: On hover, elements may swap colors (invert) or increase border thickness from 1px to 2px, but they never \"lift\" off the page.\n\n## Components\n\n### Buttons\n- **Primary**: Solid `#0A0A0A` fill with white Inter text. 0px radius. Large padding (12px 24px).\n- **Secondary**: `#FFFFFF` or `#F7F5F2` fill with a 1px `#0A0A0A` border and black text. 0px radius.\n- **Tertiary/Ghost**: No background or border. Underline on hover.\n\n### Input Fields\n- White background with a 1px `#D4D0C8` border.\n- Focus state: Border changes to 1px `#0A0A0A` or `#2563EB`. \n- 4px corner radius maximum.\n\n### Cards\n- Surface color `#EDEBE7` with a 1px `#0A0A0A` border. \n- No padding-top/bottom variations; content is consistently inset by 24px.\n- Labels inside cards use Geist Mono.\n\n### Chips & Badges\n- Small boxes with 0px radius. \n- Metadata uses the muted border; active status uses the Accent blue.\n\n### Lists\n- Separated by 1px horizontal lines (`#D4D0C8`). \n- Hovering over a list item changes the background to `#EDEBE7`.",
        "theme": {
          "colorMode": "LIGHT",
          "font": "INTER",
          "customColor": "#0a0a0a",
          "headlineFont": "INTER",
          "bodyFont": "INTER",
          "labelFont": "GEIST",
          "namedColors": {
            "background": "#fbf9f6",
            "error": "#ba1a1a",
            "error_container": "#ffdad6",
            "inverse_on_surface": "#f2f0ed",
            "inverse_primary": "#c9c6c5",
            "inverse_surface": "#30312f",
            "on_background": "#1b1c1a",
            "on_error": "#ffffff",
            "on_error_container": "#93000a",
            "on_primary": "#ffffff",
            "on_primary_container": "#858383",
            "on_primary_fixed": "#1c1b1b",
            "on_primary_fixed_variant": "#474646",
            "on_secondary": "#ffffff",
            "on_secondary_container": "#fefcff",
            "on_secondary_fixed": "#00174b",
            "on_secondary_fixed_variant": "#003ea8",
            "on_surface": "#1b1c1a",
            "on_surface_variant": "#444748",
            "on_tertiary": "#ffffff",
            "on_tertiary_container": "#868381",
            "on_tertiary_fixed": "#1d1b1a",
            "on_tertiary_fixed_variant": "#484645",
            "outline": "#747878",
            "outline_variant": "#c4c7c7",
            "primary": "#000000",
            "primary_container": "#1c1b1b",
            "primary_fixed": "#e5e2e1",
            "primary_fixed_dim": "#c9c6c5",
            "secondary": "#0051d5",
            "secondary_container": "#316bf3",
            "secondary_fixed": "#dbe1ff",
            "secondary_fixed_dim": "#b4c5ff",
            "surface": "#fbf9f6",
            "surface_bright": "#fbf9f6",
            "surface_container": "#efeeeb",
            "surface_container_high": "#eae8e5",
            "surface_container_highest": "#e4e2df",
            "surface_container_low": "#f5f3f0",
            "surface_container_lowest": "#ffffff",
            "surface_dim": "#dbdad7",
            "surface_tint": "#5f5e5e",
            "surface_variant": "#e4e2df",
            "tertiary": "#000000",
            "tertiary_container": "#1d1b1a",
            "tertiary_fixed": "#e6e1df",
            "tertiary_fixed_dim": "#cac6c3"
          },
          "designMd": "---\nname: Giridhar Reddy Portfolio\ncolors:\n  surface: '#fbf9f6'\n  surface-dim: '#dbdad7'\n  surface-bright: '#fbf9f6'\n  surface-container-lowest: '#ffffff'\n  surface-container-low: '#f5f3f0'\n  surface-container: '#efeeeb'\n  surface-container-high: '#eae8e5'\n  surface-container-highest: '#e4e2df'\n  on-surface: '#1b1c1a'\n  on-surface-variant: '#444748'\n  inverse-surface: '#30312f'\n  inverse-on-surface: '#f2f0ed'\n  outline: '#747878'\n  outline-variant: '#c4c7c7'\n  surface-tint: '#5f5e5e'\n  primary: '#000000'\n  on-primary: '#ffffff'\n  primary-container: '#1c1b1b'\n  on-primary-container: '#858383'\n  inverse-primary: '#c9c6c5'\n  secondary: '#0051d5'\n  on-secondary: '#ffffff'\n  secondary-container: '#316bf3'\n  on-secondary-container: '#fefcff'\n  tertiary: '#000000'\n  on-tertiary: '#ffffff'\n  tertiary-container: '#1d1b1a'\n  on-tertiary-container: '#868381'\n  error: '#ba1a1a'\n  on-error: '#ffffff'\n  error-container: '#ffdad6'\n  on-error-container: '#93000a'\n  primary-fixed: '#e5e2e1'\n  primary-fixed-dim: '#c9c6c5'\n  on-primary-fixed: '#1c1b1b'\n  on-primary-fixed-variant: '#474646'\n  secondary-fixed: '#dbe1ff'\n  secondary-fixed-dim: '#b4c5ff'\n  on-secondary-fixed: '#00174b'\n  on-secondary-fixed-variant: '#003ea8'\n  tertiary-fixed: '#e6e1df'\n  tertiary-fixed-dim: '#cac6c3'\n  on-tertiary-fixed: '#1d1b1a'\n  on-tertiary-fixed-variant: '#484645'\n  background: '#fbf9f6'\n  on-background: '#1b1c1a'\n  surface-variant: '#e4e2df'\ntypography:\n  headline-xl:\n    fontFamily: Inter\n    fontSize: 64px\n    fontWeight: '800'\n    lineHeight: '1.1'\n    letterSpacing: -0.04em\n  headline-lg:\n    fontFamily: Inter\n    fontSize: 40px\n    fontWeight: '700'\n    lineHeight: '1.2'\n    letterSpacing: -0.02em\n  headline-md:\n    fontFamily: Inter\n    fontSize: 24px\n    fontWeight: '600'\n    lineHeight: '1.3'\n    letterSpacing: -0.01em\n  body-lg:\n    fontFamily: Inter\n    fontSize: 18px\n    fontWeight: '400'\n    lineHeight: '1.6'\n  body-md:\n    fontFamily: Inter\n    fontSize: 16px\n    fontWeight: '400'\n    lineHeight: '1.6'\n  label-mono:\n    fontFamily: Geist Mono\n    fontSize: 14px\n    fontWeight: '500'\n    lineHeight: '1.0'\n    letterSpacing: 0.05em\n  metadata:\n    fontFamily: Geist Mono\n    fontSize: 12px\n    fontWeight: '400'\n    lineHeight: '1.4'\n  headline-lg-mobile:\n    fontFamily: Inter\n    fontSize: 32px\n    fontWeight: '700'\n    lineHeight: '1.2'\nspacing:\n  unit: 4px\n  xs: 4px\n  sm: 8px\n  md: 16px\n  lg: 32px\n  xl: 64px\n  gutter: 24px\n  margin-mobile: 16px\n  margin-desktop: 48px\n---\n\n## Brand & Style\n\nThe design system is built on the principles of **Brutalist Minimalism**. It prioritizes raw structural integrity, clarity, and intentionality over decorative flourishes. The brand personality is intellectually honest, precise, and understated, catering to an audience that values technical craft and architectural layout.\n\nThe visual style is defined by a rigorous grid, sharp edges, and a high-contrast monochromatic base. By stripping away shadows, gradients, and rounded corners, the design system forces focus onto the content and the rhythm of the typography. It evokes a digital \"gallery\" feeling—neutral enough to showcase work, but bold enough to have a distinct, authoritative voice.\n\n## Colors\n\nThe palette is rooted in a warm-neutral industrial spectrum. The background and surface colors provide a sophisticated, paper-like texture that reduces the harshness of pure white while maintaining high readability.\n\n- **Primary**: Used for headings, primary actions, and structural borders.\n- **Accent**: Reserved exclusively for active states, indicators, and status badges to provide a singular point of focus within the monochromatic environment.\n- **Muted Elements**: Secondary text and muted borders use mid-tone grays to establish a clear visual hierarchy without breaking the brutalist aesthetic.\n\n## Typography\n\nThis design system employs a dual-font strategy. **Inter** handles all narrative and structural content with its clean, neo-grotesque proportions. **Geist Mono** is utilized for labels, data, and metadata to inject a technical, \"engineered\" feel consistent with brutalist aesthetics.\n\nHeadlines should be set with tight tracking and leading to create dense, impactful blocks of text. Body copy maintains generous line heights for maximum legibility against the off-white background. Labels and captions should always leverage the monospaced typeface to distinguish them from editorial content.\n\n## Layout & Spacing\n\nThe layout philosophy follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. It uses a strict 8px base unit system to ensure mathematical alignment.\n\n- **Desktop**: 12-column grid with a max-width of 1440px. Gutters are fixed at 24px.\n- **Mobile**: 4-column grid with 16px side margins. \n- **Rhythm**: Spacing between sections should be aggressive (64px or 128px) to emphasize the minimalist \"void\" and structural clarity. Elements within a component are tightly packed (4px or 8px) to create distinct groupings.\n\n## Elevation & Depth\n\nThis design system rejects all forms of simulated depth. There are no shadows, blurs, or gradients. Depth is communicated exclusively through **Tonal Layering** and **High-Contrast Borders**.\n\n- **Level 0 (Base)**: The `#F7F5F2` background.\n- **Level 1 (Containers)**: The `#EDEBE7` surface, typically wrapped in a 1px `#0A0A0A` border.\n- **Active State**: The `#2563EB` accent color acts as the highest level of visual priority, used for selection or focus rather than physical elevation.\n- **Interaction**: On hover, elements may swap colors (invert) or increase border thickness from 1px to 2px, but they never \"lift\" off the page.\n\n## Shapes\n\nThe shape language is strictly **Sharp**. 90-degree angles are a core tenant of the design system's brutalist identity. \n\n- **Global Radius**: 0px for all containers, cards, buttons, and decorative elements.\n- **Exception**: Input fields and text areas may use a maximum of 4px radius to provide a subtle affordance for interactability and to distinguish them from static structural boxes.\n\n## Components\n\n### Buttons\n- **Primary**: Solid `#0A0A0A` fill with white Inter text. 0px radius. Large padding (12px 24px).\n- **Secondary**: `#FFFFFF` or `#F7F5F2` fill with a 1px `#0A0A0A` border and black text. 0px radius.\n- **Tertiary/Ghost**: No background or border. Underline on hover.\n\n### Input Fields\n- White background with a 1px `#D4D0C8` border.\n- Focus state: Border changes to 1px `#0A0A0A` or `#2563EB`. \n- 4px corner radius maximum.\n\n### Cards\n- Surface color `#EDEBE7` with a 1px `#0A0A0A` border. \n- No padding-top/bottom variations; content is consistently inset by 24px.\n- Labels inside cards use Geist Mono.\n\n### Chips & Badges\n- Small boxes with 0px radius. \n- Metadata uses the muted border; active status uses the Accent blue.\n\n### Lists\n- Separated by 1px horizontal lines (`#D4D0C8`). \n- Hovering over a list item changes the background to `#EDEBE7`.",
          "colorVariant": "FIDELITY",
          "overridePrimaryColor": "#0a0a0a",
          "overrideSecondaryColor": "#2563eb",
          "overrideNeutralColor": "#f7f5f2",
          "spacingScale": 2,
          "typography": {
            "body-lg": {
              "fontFamily": "Inter",
              "fontSize": "18px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "body-md": {
              "fontFamily": "Inter",
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "headline-lg": {
              "fontFamily": "Inter",
              "fontSize": "40px",
              "fontWeight": "700",
              "lineHeight": "1.2",
              "letterSpacing": "-0.02em"
            },
            "headline-lg-mobile": {
              "fontFamily": "Inter",
              "fontSize": "32px",
              "fontWeight": "700",
              "lineHeight": "1.2"
            },
            "headline-md": {
              "fontFamily": "Inter",
              "fontSize": "24px",
              "fontWeight": "600",
              "lineHeight": "1.3",
              "letterSpacing": "-0.01em"
            },
            "headline-xl": {
              "fontFamily": "Inter",
              "fontSize": "64px",
              "fontWeight": "800",
              "lineHeight": "1.1",
              "letterSpacing": "-0.04em"
            },
            "label-mono": {
              "fontFamily": "Geist Mono",
              "fontSize": "14px",
              "fontWeight": "500",
              "lineHeight": "1.0",
              "letterSpacing": "0.05em"
            },
            "metadata": {
              "fontFamily": "Geist Mono",
              "fontSize": "12px",
              "fontWeight": "400",
              "lineHeight": "1.4"
            }
          },
          "spacing": {
            "gutter": "24px",
            "lg": "32px",
            "margin-desktop": "48px",
            "margin-mobile": "16px",
            "md": "16px",
            "sm": "8px",
            "unit": "4px",
            "xl": "64px",
            "xs": "4px"
          },
          "headlineFontFamily": "Inter",
          "bodyFontFamily": "Inter",
          "labelFontFamily": "Geist"
        }
      },
      "version": "1"
    },
    {
      "name": "assets/6143c0c523d846519d59e65194630f21",
      "designSystem": {
        "displayName": "Technical Pragmatist",
        "styleGuidelines": "## Brand & Style\n\nThis design system is rooted in a philosophy of **Technical Pragmatism**. It prioritizes utility, clarity, and structural honesty over decorative trends. The aesthetic is a fusion of **Modern Minimalism** and **Industrial Brutalism**, utilizing a high-contrast, monochrome palette to create a focused environment for complex data and professional workflows.\n\nThe target audience consists of engineers, architects, and power users who value information density and functional reliability. The emotional response is one of precision and unshakeable stability. There are no gradients, no shadows, and no rounded corners—only hard edges and clear divisions.\n\n## Layout & Spacing\n\nThe layout follows a **Fixed Grid** philosophy on desktop, transitioning to a fluid model on mobile. \n\n- **Grid Model:** Use a 12-column grid for desktop with 24px gutters. Content should be strictly aligned to the grid lines to emphasize the structural nature of the design system.\n- **Rhythm:** Spacing follows an 8px base increment. Use 24px for spacing between individual components (e.g., cards, input groups) and 64px for vertical gaps between major sections.\n- **Mobile:** On mobile devices, the grid collapses to 4 columns. Margins are reduced to 16px, but the 8px base unit remains the primary spacing multiplier.\n\n## Elevation & Depth\n\nThis design system explicitly rejects shadows and blurs. Depth is communicated through **Tonal Layering** and **Bold Borders**.\n\n- **Z-Axis Hierarchy:** Hierarchy is achieved by placing elements on the Surface color (#EDEBE7) against the Background color (#F7F5F2).\n- **Hard Lines:** 1px or 2px solid borders (#0A0A0A) are used to define interactive areas and separate content blocks. \n- **Active States:** Depth is not indicated by \"lifting\" an element, but by color shifts (e.g., the Accent blue #2563EB) or inversion of color (black to white).\n\n## Components\n\n### Buttons\n- **Primary:** Solid #0A0A0A fill with white text. 0px border radius. Large padding (12px 24px).\n- **Secondary:** White/Background fill with a 1px solid #0A0A0A border. 0px border radius.\n- **Active/Hover:** Transition the border or text to the #2563EB accent.\n\n### Inputs\n- **Field:** #F7F5F2 background with a 1px #D4D0C8 border. Focus state uses a 1px #0A0A0A border or #2563EB accent. Max 4px radius.\n- **Labels:** Use the Metadata Geist Mono style above the field.\n\n### Cards\n- **Container:** Solid #EDEBE7 background. 0px border radius. No shadow.\n- **Header:** Use a 1px solid #D4D0C8 bottom border to separate header content from the body.\n\n### Chips & Tags\n- **Style:** Geist Mono font, 1px #0A0A0A border, 0px border radius. \n- **Status:** Use a small 8px square of #2563EB to indicate \"Active\" or \"Online\" status within the tag.\n\n### Lists\n- **Separation:** Use 1px #D4D0C8 horizontal dividers between list items. No dividers on the first or last item if contained within a card.",
        "theme": {
          "colorMode": "LIGHT",
          "font": "INTER",
          "customColor": "#0a0a0a",
          "headlineFont": "INTER",
          "bodyFont": "INTER",
          "labelFont": "GEIST",
          "namedColors": {
            "background": "#fdf8f8",
            "error": "#ba1a1a",
            "error_container": "#ffdad6",
            "inverse_on_surface": "#f4f0ef",
            "inverse_primary": "#c9c6c5",
            "inverse_surface": "#313030",
            "on_background": "#1c1b1b",
            "on_error": "#ffffff",
            "on_error_container": "#93000a",
            "on_primary": "#ffffff",
            "on_primary_container": "#858383",
            "on_primary_fixed": "#1c1b1b",
            "on_primary_fixed_variant": "#474646",
            "on_secondary": "#ffffff",
            "on_secondary_container": "#fefcff",
            "on_secondary_fixed": "#00174b",
            "on_secondary_fixed_variant": "#003ea8",
            "on_surface": "#1c1b1b",
            "on_surface_variant": "#444748",
            "on_tertiary": "#ffffff",
            "on_tertiary_container": "#868381",
            "on_tertiary_fixed": "#1d1b1a",
            "on_tertiary_fixed_variant": "#484645",
            "outline": "#747878",
            "outline_variant": "#c4c7c7",
            "primary": "#000000",
            "primary_container": "#1c1b1b",
            "primary_fixed": "#e5e2e1",
            "primary_fixed_dim": "#c9c6c5",
            "secondary": "#0051d5",
            "secondary_container": "#316bf3",
            "secondary_fixed": "#dbe1ff",
            "secondary_fixed_dim": "#b4c5ff",
            "surface": "#fdf8f8",
            "surface_bright": "#fdf8f8",
            "surface_container": "#f1edec",
            "surface_container_high": "#ebe7e6",
            "surface_container_highest": "#e5e2e1",
            "surface_container_low": "#f7f3f2",
            "surface_container_lowest": "#ffffff",
            "surface_dim": "#ddd9d8",
            "surface_tint": "#5f5e5e",
            "surface_variant": "#e5e2e1",
            "tertiary": "#000000",
            "tertiary_container": "#1d1b1a",
            "tertiary_fixed": "#e6e1df",
            "tertiary_fixed_dim": "#cac6c3"
          },
          "designMd": "---\nname: Technical Pragmatist\ncolors:\n  surface: '#fdf8f8'\n  surface-dim: '#ddd9d8'\n  surface-bright: '#fdf8f8'\n  surface-container-lowest: '#ffffff'\n  surface-container-low: '#f7f3f2'\n  surface-container: '#f1edec'\n  surface-container-high: '#ebe7e6'\n  surface-container-highest: '#e5e2e1'\n  on-surface: '#1c1b1b'\n  on-surface-variant: '#444748'\n  inverse-surface: '#313030'\n  inverse-on-surface: '#f4f0ef'\n  outline: '#747878'\n  outline-variant: '#c4c7c7'\n  surface-tint: '#5f5e5e'\n  primary: '#000000'\n  on-primary: '#ffffff'\n  primary-container: '#1c1b1b'\n  on-primary-container: '#858383'\n  inverse-primary: '#c9c6c5'\n  secondary: '#0051d5'\n  on-secondary: '#ffffff'\n  secondary-container: '#316bf3'\n  on-secondary-container: '#fefcff'\n  tertiary: '#000000'\n  on-tertiary: '#ffffff'\n  tertiary-container: '#1d1b1a'\n  on-tertiary-container: '#868381'\n  error: '#ba1a1a'\n  on-error: '#ffffff'\n  error-container: '#ffdad6'\n  on-error-container: '#93000a'\n  primary-fixed: '#e5e2e1'\n  primary-fixed-dim: '#c9c6c5'\n  on-primary-fixed: '#1c1b1b'\n  on-primary-fixed-variant: '#474646'\n  secondary-fixed: '#dbe1ff'\n  secondary-fixed-dim: '#b4c5ff'\n  on-secondary-fixed: '#00174b'\n  on-secondary-fixed-variant: '#003ea8'\n  tertiary-fixed: '#e6e1df'\n  tertiary-fixed-dim: '#cac6c3'\n  on-tertiary-fixed: '#1d1b1a'\n  on-tertiary-fixed-variant: '#484645'\n  background: '#fdf8f8'\n  on-background: '#1c1b1b'\n  surface-variant: '#e5e2e1'\ntypography:\n  display-lg:\n    fontFamily: Inter\n    fontSize: 48px\n    fontWeight: '800'\n    lineHeight: '1.1'\n    letterSpacing: -0.02em\n  headline-lg:\n    fontFamily: Inter\n    fontSize: 32px\n    fontWeight: '800'\n    lineHeight: '1.2'\n    letterSpacing: -0.02em\n  headline-md:\n    fontFamily: Inter\n    fontSize: 24px\n    fontWeight: '800'\n    lineHeight: '1.2'\n    letterSpacing: -0.02em\n  headline-sm:\n    fontFamily: Inter\n    fontSize: 20px\n    fontWeight: '800'\n    lineHeight: '1.2'\n    letterSpacing: -0.01em\n  body-lg:\n    fontFamily: Inter\n    fontSize: 18px\n    fontWeight: '400'\n    lineHeight: '1.6'\n    letterSpacing: '0'\n  body-md:\n    fontFamily: Inter\n    fontSize: 16px\n    fontWeight: '400'\n    lineHeight: '1.6'\n    letterSpacing: '0'\n  body-sm:\n    fontFamily: Inter\n    fontSize: 14px\n    fontWeight: '400'\n    lineHeight: '1.6'\n    letterSpacing: '0'\n  metadata:\n    fontFamily: Geist Mono\n    fontSize: 12px\n    fontWeight: '400'\n    lineHeight: '1'\n    letterSpacing: 0.08em\n  headline-lg-mobile:\n    fontFamily: Inter\n    fontSize: 28px\n    fontWeight: '800'\n    lineHeight: '1.2'\n    letterSpacing: -0.02em\nspacing:\n  base: 8px\n  component-gap: 24px\n  section-gap: 64px\n  container-padding: 32px\n  grid-margin: 24px\n  grid-gutter: 24px\n---\n\n## Brand & Style\n\nThis design system is rooted in a philosophy of **Technical Pragmatism**. It prioritizes utility, clarity, and structural honesty over decorative trends. The aesthetic is a fusion of **Modern Minimalism** and **Industrial Brutalism**, utilizing a high-contrast, monochrome palette to create a focused environment for complex data and professional workflows.\n\nThe target audience consists of engineers, architects, and power users who value information density and functional reliability. The emotional response is one of precision and unshakeable stability. There are no gradients, no shadows, and no rounded corners—only hard edges and clear divisions.\n\n## Colors\n\nThe palette is strictly functional, leveraging high-contrast neutrals to define hierarchy.\n\n- **Primary / Text:** #0A0A0A is used for all primary text, icons, and heavy structural borders.\n- **Background:** #F7F5F2 provides a warm, paper-like neutral base that reduces eye strain compared to pure white.\n- **Surface:** #EDEBE7 is used for cards and container backgrounds to create subtle layering without shadows.\n- **Accent:** #2563EB is reserved exclusively for active states, notifications, and status indicators. It should never be used for decorative purposes.\n- **Borders:** Use #0A0A0A for interactive elements and #D4D0C8 for layout dividers and muted boundaries.\n\n## Typography\n\nThe typography system relies on **Inter** for its systematic clarity and **Geist Mono** for technical metadata.\n\n- **Headlines:** Use Inter at 800 weight with tight tracking (-0.02em). This creates a \"blocky\" and authoritative visual weight.\n- **Body:** Use Inter at 400 weight with a generous 1.6 line height to ensure maximum legibility within dense information layouts.\n- **Metadata:** All labels, tags, and small technical data points use Geist Mono in uppercase. The 0.08em letter spacing ensures these small-scale elements remain readable and distinct from body copy.\n\n## Layout & Spacing\n\nThe layout follows a **Fixed Grid** philosophy on desktop, transitioning to a fluid model on mobile. \n\n- **Grid Model:** Use a 12-column grid for desktop with 24px gutters. Content should be strictly aligned to the grid lines to emphasize the structural nature of the design system.\n- **Rhythm:** Spacing follows an 8px base increment. Use 24px for spacing between individual components (e.g., cards, input groups) and 64px for vertical gaps between major sections.\n- **Mobile:** On mobile devices, the grid collapses to 4 columns. Margins are reduced to 16px, but the 8px base unit remains the primary spacing multiplier.\n\n## Elevation & Depth\n\nThis design system explicitly rejects shadows and blurs. Depth is communicated through **Tonal Layering** and **Bold Borders**.\n\n- **Z-Axis Hierarchy:** Hierarchy is achieved by placing elements on the Surface color (#EDEBE7) against the Background color (#F7F5F2).\n- **Hard Lines:** 1px or 2px solid borders (#0A0A0A) are used to define interactive areas and separate content blocks. \n- **Active States:** Depth is not indicated by \"lifting\" an element, but by color shifts (e.g., the Accent blue #2563EB) or inversion of color (black to white).\n\n## Shapes\n\nThe shape language is defined by the **Right Angle**. \n\n- **Containers & Buttons:** All cards, buttons, and navigation elements must have a 0px border radius. No exceptions.\n- **Inputs:** Form fields (text inputs, textareas) are permitted a 4px max border radius to provide a subtle visual affordance that distinguishes them from static containers, though 0px is preferred if the layout allows.\n- **Icons:** Use sharp-edged, geometric iconography to match the typeface weights.\n\n## Components\n\n### Buttons\n- **Primary:** Solid #0A0A0A fill with white text. 0px border radius. Large padding (12px 24px).\n- **Secondary:** White/Background fill with a 1px solid #0A0A0A border. 0px border radius.\n- **Active/Hover:** Transition the border or text to the #2563EB accent.\n\n### Inputs\n- **Field:** #F7F5F2 background with a 1px #D4D0C8 border. Focus state uses a 1px #0A0A0A border or #2563EB accent. Max 4px radius.\n- **Labels:** Use the Metadata Geist Mono style above the field.\n\n### Cards\n- **Container:** Solid #EDEBE7 background. 0px border radius. No shadow.\n- **Header:** Use a 1px solid #D4D0C8 bottom border to separate header content from the body.\n\n### Chips & Tags\n- **Style:** Geist Mono font, 1px #0A0A0A border, 0px border radius. \n- **Status:** Use a small 8px square of #2563EB to indicate \"Active\" or \"Online\" status within the tag.\n\n### Lists\n- **Separation:** Use 1px #D4D0C8 horizontal dividers between list items. No dividers on the first or last item if contained within a card.",
          "colorVariant": "FIDELITY",
          "overridePrimaryColor": "#0a0a0a",
          "overrideSecondaryColor": "#2563eb",
          "spacingScale": 2,
          "typography": {
            "body-lg": {
              "fontFamily": "Inter",
              "fontSize": "18px",
              "fontWeight": "400",
              "lineHeight": "1.6",
              "letterSpacing": "0"
            },
            "body-md": {
              "fontFamily": "Inter",
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6",
              "letterSpacing": "0"
            },
            "body-sm": {
              "fontFamily": "Inter",
              "fontSize": "14px",
              "fontWeight": "400",
              "lineHeight": "1.6",
              "letterSpacing": "0"
            },
            "display-lg": {
              "fontFamily": "Inter",
              "fontSize": "48px",
              "fontWeight": "800",
              "lineHeight": "1.1",
              "letterSpacing": "-0.02em"
            },
            "headline-lg": {
              "fontFamily": "Inter",
              "fontSize": "32px",
              "fontWeight": "800",
              "lineHeight": "1.2",
              "letterSpacing": "-0.02em"
            },
            "headline-lg-mobile": {
              "fontFamily": "Inter",
              "fontSize": "28px",
              "fontWeight": "800",
              "lineHeight": "1.2",
              "letterSpacing": "-0.02em"
            },
            "headline-md": {
              "fontFamily": "Inter",
              "fontSize": "24px",
              "fontWeight": "800",
              "lineHeight": "1.2",
              "letterSpacing": "-0.02em"
            },
            "headline-sm": {
              "fontFamily": "Inter",
              "fontSize": "20px",
              "fontWeight": "800",
              "lineHeight": "1.2",
              "letterSpacing": "-0.01em"
            },
            "metadata": {
              "fontFamily": "Geist Mono",
              "fontSize": "12px",
              "fontWeight": "400",
              "lineHeight": "1",
              "letterSpacing": "0.08em"
            }
          },
          "spacing": {
            "base": "8px",
            "component-gap": "24px",
            "container-padding": "32px",
            "grid-gutter": "24px",
            "grid-margin": "24px",
            "section-gap": "64px"
          },
          "headlineFontFamily": "Inter",
          "bodyFontFamily": "Inter",
          "labelFontFamily": "Geist"
        }
      },
      "version": "1"
    },
    {
      "name": "assets/df23e44463524070923de79c5e06b308",
      "designSystem": {
        "displayName": "Technical Pragmatist",
        "styleGuidelines": "## Brand & Style\n\nThis design system is built on a foundation of utilitarian minimalism and technical pragmatism. It is optimized for high-density information environments where readability and rapid execution are the primary objectives. The aesthetic rejects decorative trends like gradients, soft shadows, and glassmorphism in favor of a raw, functional visual language.\n\nThe brand personality is authoritative, neutral, and precise. It communicates value through clarity and structural integrity rather than ornamentation. The style is a blend of **Minimalism** and **Modern Brutalism**, utilizing high-contrast monochrome palettes, sharp edges, and purposeful whitespace to create a focused, distraction-free user experience.\n\n## Layout & Spacing\n\nThe layout philosophy is centered on an 8px base unit, using generous whitespace as the primary tool for content grouping. This reduces the need for heavy lines and dividers, keeping the interface clean and breathable.\n\n- **Grid**: A standard 12-column fluid grid is used for desktop layouts, transitioning to a single-column stack on mobile. Gutters are fixed at 24px (`space-medium`) to ensure consistent separation.\n- **Rhythm**: Vertical rhythm is maintained through the three core spacing tokens. Use `space-tight` for internal component elements (labels to inputs), `space-medium` for spacing between distinct components, and `space-generous` to separate major page sections.\n- **Separation**: Avoid horizontal dividers. Instead, use background color shifts (White to Surface Gray) to define different content zones.\n\n## Elevation & Depth\n\nThis system intentionally rejects traditional depth metaphors. There are no ambient shadows or blurred layers.\n\nVisual hierarchy is communicated through:\n- **Tonal Layering**: Elements sit on the base background or are recessed into the `bg-surface` color.\n- **Bold Outlines**: Structural elements use 1px solid borders to define their boundaries.\n- **Contrast**: The relationship between the dark primary text/borders and the light background provides all necessary depth signaling.\n- **Zero Elevation**: All components are treated as \"flat\" on the page, reinforcing the utilitarian, physical-print aesthetic.\n\n## Components\n\n### Buttons\n- **Primary**: Sharp Technical Blue background, white high-weight text. Rectangular with a 4px maximum radius.\n- **Secondary**: White background, 1px Primary Border (`#09090B`), primary text.\n- **States**: On hover, primary buttons darken slightly; secondary buttons gain a subtle light-gray background fill.\n\n### Cards\n- **Style**: Background set to `color-bg-surface` with a 1px `color-border-muted` stroke.\n- **Elevation**: No shadows. Content inside cards should follow the 8px spacing grid.\n\n### Input Fields\n- **Appearance**: 1px structural border, sharp corners, white background. \n- **Focus State**: To avoid soft glows, use a 2px stroke width or the Technical Blue accent color for the border on focus.\n\n### Chips & Tags\n- **Style**: Small, high-contrast labels using the `mono-data` typography. Use `color-bg-surface` for neutral tags and the utility accent for active or highlighted status.\n\n### Lists & Tables\n- **Execution**: Minimalist data rows separated by 1px `color-border-muted` lines only. Header rows should be bold and use the `mono-data` font for a technical feel. Use `space-tight` for cell padding.",
        "theme": {
          "colorMode": "LIGHT",
          "font": "INTER",
          "customColor": "#09090b",
          "headlineFont": "INTER",
          "bodyFont": "INTER",
          "labelFont": "GEIST",
          "namedColors": {
            "background": "#fdf8f8",
            "bg-base": "#FFFFFF",
            "bg-surface": "#F4F4F5",
            "border-muted": "#E4E4E7",
            "error": "#ba1a1a",
            "error_container": "#ffdad6",
            "inverse_on_surface": "#f4f0ef",
            "inverse_primary": "#c8c6c8",
            "inverse_surface": "#313030",
            "on_background": "#1c1b1b",
            "on_error": "#ffffff",
            "on_error_container": "#93000a",
            "on_primary": "#ffffff",
            "on_primary_container": "#858386",
            "on_primary_fixed": "#1c1b1d",
            "on_primary_fixed_variant": "#474649",
            "on_secondary": "#ffffff",
            "on_secondary_container": "#fefcff",
            "on_secondary_fixed": "#00174b",
            "on_secondary_fixed_variant": "#003ea8",
            "on_surface": "#1c1b1b",
            "on_surface_variant": "#47464a",
            "on_tertiary": "#ffffff",
            "on_tertiary_container": "#8a8282",
            "on_tertiary_fixed": "#1f1a1a",
            "on_tertiary_fixed_variant": "#4c4545",
            "outline": "#78767b",
            "outline_variant": "#c8c5ca",
            "primary": "#000000",
            "primary_container": "#1c1b1d",
            "primary_fixed": "#e5e1e4",
            "primary_fixed_dim": "#c8c6c8",
            "secondary": "#0051d5",
            "secondary_container": "#316bf3",
            "secondary_fixed": "#dbe1ff",
            "secondary_fixed_dim": "#b4c5ff",
            "surface": "#fdf8f8",
            "surface_bright": "#fdf8f8",
            "surface_container": "#f1edec",
            "surface_container_high": "#ebe7e7",
            "surface_container_highest": "#e5e2e1",
            "surface_container_low": "#f7f3f2",
            "surface_container_lowest": "#ffffff",
            "surface_dim": "#ddd9d9",
            "surface_tint": "#5f5e60",
            "surface_variant": "#e5e2e1",
            "tertiary": "#000000",
            "tertiary_container": "#1f1a1a",
            "tertiary_fixed": "#ebe0df",
            "tertiary_fixed_dim": "#cec4c4",
            "text-secondary": "#71717A"
          },
          "designMd": "---\nname: Technical Pragmatist\ncolors:\n  surface: '#fdf8f8'\n  surface-dim: '#ddd9d9'\n  surface-bright: '#fdf8f8'\n  surface-container-lowest: '#ffffff'\n  surface-container-low: '#f7f3f2'\n  surface-container: '#f1edec'\n  surface-container-high: '#ebe7e7'\n  surface-container-highest: '#e5e2e1'\n  on-surface: '#1c1b1b'\n  on-surface-variant: '#47464a'\n  inverse-surface: '#313030'\n  inverse-on-surface: '#f4f0ef'\n  outline: '#78767b'\n  outline-variant: '#c8c5ca'\n  surface-tint: '#5f5e60'\n  primary: '#000000'\n  on-primary: '#ffffff'\n  primary-container: '#1c1b1d'\n  on-primary-container: '#858386'\n  inverse-primary: '#c8c6c8'\n  secondary: '#0051d5'\n  on-secondary: '#ffffff'\n  secondary-container: '#316bf3'\n  on-secondary-container: '#fefcff'\n  tertiary: '#000000'\n  on-tertiary: '#ffffff'\n  tertiary-container: '#1f1a1a'\n  on-tertiary-container: '#8a8282'\n  error: '#ba1a1a'\n  on-error: '#ffffff'\n  error-container: '#ffdad6'\n  on-error-container: '#93000a'\n  primary-fixed: '#e5e1e4'\n  primary-fixed-dim: '#c8c6c8'\n  on-primary-fixed: '#1c1b1d'\n  on-primary-fixed-variant: '#474649'\n  secondary-fixed: '#dbe1ff'\n  secondary-fixed-dim: '#b4c5ff'\n  on-secondary-fixed: '#00174b'\n  on-secondary-fixed-variant: '#003ea8'\n  tertiary-fixed: '#ebe0df'\n  tertiary-fixed-dim: '#cec4c4'\n  on-tertiary-fixed: '#1f1a1a'\n  on-tertiary-fixed-variant: '#4c4545'\n  background: '#fdf8f8'\n  on-background: '#1c1b1b'\n  surface-variant: '#e5e2e1'\n  bg-base: '#FFFFFF'\n  bg-surface: '#F4F4F5'\n  text-secondary: '#71717A'\n  border-muted: '#E4E4E7'\ntypography:\n  display-h1:\n    fontFamily: Inter\n    fontSize: 48px\n    fontWeight: '800'\n    lineHeight: '1.1'\n    letterSpacing: -0.02em\n  display-h1-mobile:\n    fontFamily: Inter\n    fontSize: 32px\n    fontWeight: '800'\n    lineHeight: '1.2'\n    letterSpacing: -0.02em\n  header-h2:\n    fontFamily: Inter\n    fontSize: 32px\n    fontWeight: '700'\n    lineHeight: '1.2'\n    letterSpacing: -0.01em\n  subheader-h3:\n    fontFamily: Inter\n    fontSize: 24px\n    fontWeight: '600'\n    lineHeight: '1.3'\n  body-primary:\n    fontFamily: Inter\n    fontSize: 16px\n    fontWeight: '400'\n    lineHeight: '1.6'\n  body-secondary:\n    fontFamily: Inter\n    fontSize: 14px\n    fontWeight: '400'\n    lineHeight: '1.5'\n  mono-data:\n    fontFamily: Geist\n    fontSize: 14px\n    fontWeight: '400'\n    lineHeight: '1.5'\nspacing:\n  base: 8px\n  tight: 8px\n  medium: 24px\n  generous: 64px\n---\n\n# Design Specification: Product Builder's Portfolio (Utilitarian Minimalist)\n\nThis specification defines the foundational design tokens, visual hierarchy, and core aesthetic rules for a workspace optimized for readability, rapid execution, and technical pragmatism.\n\n## 1. Vibe & Intent\n- **Core Principle**: Utilitarian, brutally minimalist, strictly optimized for readability.\n- **Aesthetic**: Signal technical pragmatism. No gradients, no soft shadows, no glassmorphism, no decorative patterns.\n- **Visual Language**: High contrast, sharp edges, and purposeful whitespace.\n\n## 2. Typography\n- **Primary Font**: Inter (Sans-Serif) - Clean, high-contrast, neutral.\n- **Type Scale**: Strict 1.250x (Major Third) scale.\n  - **Display (H1)**: 48px / 1.1 LH / Extra Bold (800) / Tracking -0.02em\n  - **Header (H2)**: 32px / 1.2 LH / Bold (700) / Tracking -0.01em\n  - **Subheader (H3)**: 24px / 1.3 LH / Semi-Bold (600)\n  - **Body (Primary)**: 16px / 1.6 LH / Regular (400)\n  - **Body (Secondary/Caption)**: 14px / 1.5 LH / Regular (400)\n  - **Monospace (Code/Data)**: 14px / 1.5 LH / Geist Mono (Technical metadata)\n\n## 3. Color Palette (Monochrome + Utility Accent)\nStrict adherence to high-contrast accessibility and functional signaling.\n\n| Token | Value | Usage |\n| :--- | :--- | :--- |\n| `color-bg-base` | #FFFFFF | Primary background |\n| `color-bg-surface` | #F4F4F5 | Cards, secondary sections, subtle separation |\n| `color-text-primary` | #09090B | Headers, primary body copy (Maximum contrast) |\n| `color-text-secondary`| #71717A | Metadata, secondary body copy, descriptions |\n| `color-accent-utility`| #2563EB | Sharp Technical Blue: CTAs, active states, critical status |\n| `color-border-base` | #09090B | Structural borders (1px) |\n| `color-border-muted` | #E4E4E7 | Decorative or secondary structural lines |\n\n## 4. Spacing & Grid\n- **Base Unit**: 8px.\n- **Spacing Tokens**:\n  - `space-tight`: 8px (Small gaps, internal component padding)\n  - `space-medium`: 24px (Component-to-component spacing)\n  - `space-generous`: 64px (Section-to-section layout separation)\n- **Layout Rule**: Rely on whitespace for separation. Avoid horizontal dividers unless absolutely necessary for data density.\n\n## 5. Borders & Effects\n- **Radius**: Sharp corners. `0px` for large containers, `4px` maximum for interactive elements (buttons, inputs).\n- **Strokes**: `1px solid` for structural elements.\n- **Shadows**: Strictly `none`. Separation is achieved via background color contrast (#F4F4F5 vs #FFFFFF) or 1px borders.\n\n## 6. Component Rules\n- **Buttons**: `color-bg-base` with `color-border-base` (Secondary) or `color-accent-utility` (Primary). Rectangular, high-weight text.\n- **Cards**: Background `color-bg-surface`, no shadow, 1px border `color-border-muted`.\n- **Inputs**: 1px border, sharp corners, no glow effects on focus—use 2px border or accent color instead.",
          "colorVariant": "FIDELITY",
          "overridePrimaryColor": "#09090b",
          "overrideSecondaryColor": "#2563eb",
          "spacingScale": 2,
          "typography": {
            "body-primary": {
              "fontFamily": "Inter",
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "body-secondary": {
              "fontFamily": "Inter",
              "fontSize": "14px",
              "fontWeight": "400",
              "lineHeight": "1.5"
            },
            "display-h1": {
              "fontFamily": "Inter",
              "fontSize": "48px",
              "fontWeight": "800",
              "lineHeight": "1.1",
              "letterSpacing": "-0.02em"
            },
            "display-h1-mobile": {
              "fontFamily": "Inter",
              "fontSize": "32px",
              "fontWeight": "800",
              "lineHeight": "1.2",
              "letterSpacing": "-0.02em"
            },
            "header-h2": {
              "fontFamily": "Inter",
              "fontSize": "32px",
              "fontWeight": "700",
              "lineHeight": "1.2",
              "letterSpacing": "-0.01em"
            },
            "mono-data": {
              "fontFamily": "Geist",
              "fontSize": "14px",
              "fontWeight": "400",
              "lineHeight": "1.5"
            },
            "subheader-h3": {
              "fontFamily": "Inter",
              "fontSize": "24px",
              "fontWeight": "600",
              "lineHeight": "1.3"
            }
          },
          "spacing": {
            "base": "8px",
            "generous": "64px",
            "medium": "24px",
            "tight": "8px"
          },
          "headlineFontFamily": "Inter",
          "bodyFontFamily": "Inter",
          "labelFontFamily": "Geist"
        }
      },
      "version": "1"
    }
  ]
}

with open("design_system.json", "w") as f:
    json.dump(payload, f, indent=2)
