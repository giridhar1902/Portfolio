# Giridhar Reddy — Personal Portfolio
An execution-focused, high-contrast, brutalist minimalist developer portfolio tracking active ventures, tools, historical execution ledgers, and live case studies.

Built from scratch using **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## 🎨 Design Philosophy: Brutalist Minimalism
The visual layout implements a stark, premium, and functional aesthetic optimized for pure performance and content clarity:
- **Zero-Border-Radius Constraints**: Sharp container edges (`* { border-radius: 0px !important }`) across all visual interfaces, with form inputs capped at `4px` maximum for focus and accessibility limits.
- **Off-White Warm Base**: Background color bounded to a precise off-white warm code (`#F7F5F2`) and deep carbon foreground (`#09090B`).
- **High Contrast Borders**: Hard solid `1px` borders (`border-primary`) framing every structural element.
- **Typography Pairing**: Elegant combination of **Inter** (sans-serif display headlines) and **Geist Mono** (mono metrics and code data blocks).
- **Aesthetic Image Treatment**: Built-in CSS grayscale filters (`grayscale mix-blend-multiply opacity-90`) ensuring stock and user photography align perfectly with the greyscale minimal design.

---

## 📁 Key Directories & Components

```bash
src/
└── app/
    ├── about/          # Stark grayscale portrait profile, bio, and Connect actions
    ├── archive/        # Responsive multi-column project execution archive ledger
    ├── context/        # Split-pane terminal-styled operator context & configurations
    ├── domvio/         # Domvio case study, WhatsApp loop, and Onboarding gallery
    ├── stack/          # 4-cell Blueprint Grid outlining programming, DBs, and AI tools
    ├── Footer.tsx      # Shared global footer component
    ├── Navbar.tsx      # Responsive desktop/mobile header navigation drawer
    ├── globals.css     # Strict Tailwind CSS v4 variables, custom tokens, and root base resets
    ├── layout.tsx      # Typography bounds and core viewport layout container
    └── page.tsx        # Homepage featuring stats, active project card, stack, and ledger
```

---

## 🖥️ Ported Features & Pages

### 1. Homepage (`/`)
- Display hero statement outlining the transition from mechanical engineer to AI-native operator.
- Landlord waitlist analytics card featuring active WhatsApp collection wireframes.
- Core execution stack cards and recent output archive rows.

### 2. Domvio Case Study (`/domvio`)
- Complete product retrospective for **Domvio** — a WhatsApp-first rent collection platform for small landlords in India.
- **The Core Loop**: 3-step breakdown (Remind, Collect, Receipt) and a flat WhatsApp interface wireframe.
- **Onboarding & Access Workflow**: Responsive 3-column gallery showcasing actual grayscaled mobile signup screenshots (Phone Auth, Role Selection, and Landlord Activation).
- **Waitlist Learnings**: 4 strategic insights documenting how the waitlist was grown to 100+ landlords organically.

### 3. Stack & Tooling (`/stack`)
- A grid visualizing the stack under 4 blueprints:
  - **Programming & Frameworks** (Vite, React 19, TypeScript, NestJS)
  - **Workflows & Integrations** (WhatsApp API, Interakt, Claude API, Make)
  - **Database & Hosting** (PostgreSQL, Prisma, Supabase, Vercel, Railway)
  - **AI & Instrumentation** (v0, cursor, Windsurf)

### 4. Execution Archive (`/archive`)
- Tabular chronological ledger tracking previous builds, dates, distribution channels, and execution outcomes.

### 5. Operator Context (`/context`)
- High-contrast console displaying system environment variables, memory sizes, focal targets, and active system uptime.

### 6. About Page (`/about`)
- Stark, grayscaled personal portrait image (`public/profile.jpg`) optimized with Next.js eager `priority` loading.
- Narrative biography detailing backgrounds in startup operations, US sales orgs, and experimental builds.
- Connect action block linking directly to your personal email (**giridhar123reddy@gmail.com**) and verified **LinkedIn**.

---

## 🛠️ Local Development & Setup

### Prerequisites
Make sure you have Node.js (version 18 or above recommended) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the active portfolio.

### 3. Compile Production Build
Ensure types, imports, and Turbopack compiler run cleanly with zero errors:
```bash
npm run build
```
