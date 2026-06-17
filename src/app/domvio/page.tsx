import Image from "next/image";
import { FeatureCard } from "./FeatureCard";

export default function DomvioCaseStudy() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous py-generous gap-generous flex flex-col flex-grow">
      
      {/* Header Section */}
      <section className="flex flex-col gap-medium pt-generous border-b border-primary pb-generous">
        <div className="font-mono-data text-mono-data uppercase text-surface-tint tracking-widest text-xs">
          CASE STUDY — 2026
        </div>
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">
          Domvio
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-primary max-w-3xl leading-relaxed">
          WhatsApp-First Rent Collection for Indian Small Landlords
        </p>
        <div className="mt-base">
          <span className="inline-block bg-primary text-on-primary font-mono-data text-mono-data px-tight py-1 uppercase text-xs tracking-wider">
            PHASE 1 — ACTIVE
          </span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-medium w-full">
        <div className="border border-primary p-medium flex flex-col gap-tight bg-bg-base">
          <div className="font-display-h1-mobile text-display-h1-mobile text-primary">100+</div>
          <div className="font-mono-data text-mono-data text-surface-tint text-xs uppercase tracking-wider">
            Landlords Waitlisted
          </div>
        </div>
        <div className="border border-primary p-medium flex flex-col gap-tight bg-bg-base">
          <div className="font-display-h1-mobile text-display-h1-mobile text-primary">12 Weeks</div>
          <div className="font-mono-data text-mono-data text-surface-tint text-xs uppercase tracking-wider">
            Core Loop Built
          </div>
        </div>
        <div className="border border-primary p-medium flex flex-col gap-tight bg-bg-base">
          <div className="font-display-h1-mobile text-display-h1-mobile text-primary">₹0</div>
          <div className="font-mono-data text-mono-data text-surface-tint text-xs uppercase tracking-wider">
            Paid Acquisition Cost
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="flex flex-col md:flex-row gap-medium md:gap-generous border-t border-primary pt-generous">
        <div className="md:w-1/3">
          <h2 className="font-header-h2 text-header-h2 text-primary">The Problem</h2>
        </div>
        <div className="md:w-2/3">
          <p className="font-body-primary text-body-primary text-on-surface leading-relaxed">
            Small landlords in India manage 2–10 properties each. Rent collection happens over WhatsApp. Reminders are manual. Receipts don&apos;t exist. Payment confirmation is a screenshot. This is the operational baseline for millions of landlords.
          </p>
        </div>
      </section>

      {/* The Core Loop Section */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous">
        <h2 className="font-header-h2 text-header-h2 text-primary">The Core Loop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-medium w-full mt-medium items-center">
          <div className="flex flex-col gap-medium">
            <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
              <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight text-xs tracking-wider">
                01 / REMIND
              </div>
              <div className="font-body-primary text-body-primary pt-tight">
                Automated WhatsApp reminder sent on schedule
              </div>
            </div>
            <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
              <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight text-xs tracking-wider">
                02 / COLLECT
              </div>
              <div className="font-body-primary text-body-primary pt-tight">
                UPI payment link in the same thread
              </div>
            </div>
            <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
              <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight text-xs tracking-wider">
                03 / RECEIPT
              </div>
              <div className="font-body-primary text-body-primary pt-tight">
                Auto-generated receipt sent on confirmation
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-tight bg-surface-container border border-primary relative h-[450px] overflow-hidden">
            <Image
              alt="WhatsApp rent collection interface"
              className="max-w-full h-auto max-h-[400px] object-contain grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnfK10M_rxDOF2r2jpziX_PQn4PEO1E4lnOXwbfy7xQtcMSWP6yNw72tcp70ZkFYJVkrzgkdGIfvVwIuKJgns4s4XBNqGiaZo8P7JkR3_2J4Urfvy3GGOu_gwyeBuDSxrG82KpXymeI-sIH9kkMiZqTucYlVHWCJ4VPcXuNZF3RmQ9hKNyZ0YvgMxjb06YcnXYY3qfxIN6vcHFdgCyl5yz91dThIFEC027jVgT-UtNjco4EEjsF5qOc3mHITihkXqjgvMZ-JSvN4"
              width={400}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Onboarding & Access Workflow Section */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous">
        <div className="flex flex-col gap-tight">
          <h2 className="font-header-h2 text-header-h2 text-primary">Onboarding & Access Workflow</h2>
          <p className="font-body-secondary text-body-secondary text-surface-tint">
            A frictionless, mobile-first signup and verification flow designed for Indian users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium w-full mt-medium">
          <FeatureCard
            step="01 / Phone Auth"
            subtitle="OTP Login"
            imageAlt="Domvio OTP Login Interface"
            imageSrc="/domvio/login-phone.jpg"
            title="Frictionless Sign In"
            description="OTP verification via WhatsApp and SMS removes password fatigue. Standard input formats ensure rapid mobile entry."
          />
          <FeatureCard
            step="02 / Bifurcated Persona"
            subtitle="Role Selection"
            imageAlt="Domvio Role Selection Interface"
            imageSrc="/domvio/account-type.jpg"
            title="Dual-Persona Onboarding"
            description="Tailored journeys branch instantly between Landlords (rent tracking & setup) and Tenants (one-tap UPI rent payment)."
          />
          <FeatureCard
            step="03 / Landlord Verification"
            subtitle="Details & Setup"
            imageAlt="Domvio Landlord Verification Interface"
            imageSrc="/domvio/signup-landlord.jpg"
            title="Landlord Activation"
            description="Instant database linking via registered WhatsApp number and optional email setup for receiving periodic payout reports."
          />
        </div>
      </section>

      {/* Distribution Section */}
      <section className="flex flex-col md:flex-row gap-medium md:gap-generous border-t border-primary pt-generous">
        <div className="md:w-1/3">
          <h2 className="font-header-h2 text-header-h2 text-primary">
            How 100 Landlords Found It
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="font-body-primary text-body-primary text-on-surface leading-relaxed">
            Zero paid acquisition. Built a LinkedIn content system documenting the build in public. WhatsApp Channel for direct audience. Organic only. 100+ waitlist before Phase 1 launch.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous pb-generous">
        <h2 className="font-header-h2 text-header-h2 text-primary">What It&apos;s Built On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-medium w-full mt-medium border border-primary p-medium bg-bg-base">
          <ul className="font-mono-data text-mono-data flex flex-col gap-tight text-sm">
            <li>+ React 19 + Vite</li>
            <li>+ NestJS + Prisma</li>
            <li>+ Supabase</li>
            <li>+ Railway + Vercel</li>
          </ul>
          <ul className="font-mono-data text-mono-data flex flex-col gap-tight text-sm">
            <li>+ WhatsApp Business API</li>
            <li>+ Interakt</li>
            <li>+ Razorpay UPI</li>
            <li>+ Claude API</li>
          </ul>
        </div>
      </section>

      {/* Learning Section */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous pb-generous">
        <div className="flex flex-col gap-tight">
          <h2 className="font-header-h2 text-header-h2 text-primary">What the Waitlist Taught Me</h2>
          <p className="font-body-secondary text-body-secondary text-surface-tint">
            Observations from 0 to 100+ landlords with no paid acquisition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-medium w-full mt-medium">
          <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
            <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight uppercase text-xs tracking-wider">
              01 / CHANNEL
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mt-2">
              LinkedIn Outperformed Everything
            </h3>
            <p className="font-body-primary text-body-primary text-on-surface mt-2 leading-relaxed text-sm">
              One post — &apos;Everyone told me to build an app. You can&apos;t run a SaaS on WhatsApp.&apos; — hit 15,751 impressions and reached 9,928 members organically. 105 reactions, 103 profile visits, 8 new followers from a single post. Zero paid reach. The pattern was consistent: documenting the contrarian build decision outperformed every promotional post. Landlords who felt the problem being described was their problem converted. Specificity of pain &gt; breadth of reach.
            </p>
          </div>
          <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
            <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight uppercase text-xs tracking-wider">
              02 / MESSAGING
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mt-2">
              Features Don&apos;t Convert. Friction Does.
            </h3>
            <p className="font-body-primary text-body-primary text-on-surface mt-2 leading-relaxed text-sm">
              Posts about WhatsApp reminders and UPI got traction. Posts about the product got ignored. The insight: landlords don&apos;t care about software. They care about not chasing tenants for rent. Lead with the problem they already hate, not the solution you built.
            </p>
          </div>
          <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
            <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight uppercase text-xs tracking-wider">
              03 / TIMING
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mt-2">
              Distribution Before Product
            </h3>
            <p className="font-body-primary text-body-primary text-on-surface mt-2 leading-relaxed text-sm">
              The waitlist was built before Phase 1 was complete. Starting distribution early — even with nothing to sell — meant the first version launched into an audience that had already self-selected. No launch cold start.
            </p>
          </div>
          <div className="border border-primary p-medium flex flex-col gap-base bg-bg-base">
            <div className="font-mono-data text-mono-data font-bold border-b border-primary pb-tight uppercase text-xs tracking-wider">
              04 / ITERATION
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mt-2">
              Engagement Tells You What to Build
            </h3>
            <p className="font-body-primary text-body-primary text-on-surface mt-2 leading-relaxed text-sm">
              Comments and DMs on LinkedIn posts became the clearest signal for what the product needed. Two features added to the roadmap came directly from landlord responses to content — not from a survey or user interview session.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
