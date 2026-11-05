import Image from "next/image";
import Link from "next/link";

type Finding = {
  id: string;
  severity: "High" | "Medium" | "Low";
  title: string;
  observed: string;
  fix: string;
};

const findings: Finding[] = [
  {
    id: "F1",
    severity: "High",
    title: "Sign-in offers a path that sign-up never creates",
    observed:
      "Sign-in has an Email + Password tab. Registration only collects a WhatsApp number and verifies it by OTP, and it never asks for a password. Anyone who signed up through that flow and taps 'Email' hits a dead end.",
    fix: "Make phone OTP the only sign-in path for v1. If email sign-in matters later, use a magic link rather than adding a password field to sign-up. One way in means one fewer support ticket.",
  },
  {
    id: "F2",
    severity: "High",
    title: "A tenant can finish onboarding without being linked to a landlord",
    observed:
      "The tenant invite code is marked optional. A tenant who skips it lands in an empty account with no rent due and no landlord, so the product has nothing to do for them.",
    fix: "Landlords share a WhatsApp deep link with the code built in. Tenants coming from that link skip role selection completely. The code field only shows when there is no link, and then it is required.",
  },
  {
    id: "F3",
    severity: "Medium",
    title: "Three screens before a landlord gets any value",
    observed:
      "Role selection, then a details screen, then OTP. Only after that can the landlord add a property. The first moment of value, the first reminder sent, is still several steps further away.",
    fix: "Ask for the phone number first, then the role, then go straight to 'Add your first tenant'. Put email and profile details after the first reminder goes out.",
  },
  {
    id: "F4",
    severity: "Low",
    title: "Same verb, different channel",
    observed:
      "Both screens say 'Send OTP' with a chat icon, but nothing tells the user whether the code comes by WhatsApp or SMS. That uncertainty is a classic reason people abandon at the OTP step.",
    fix: "Say it plainly: 'Code sent on WhatsApp to +91 98765 43210', with an SMS fallback after 30 seconds.",
  },
];

const funnel = [
  { step: "Landing → Create account tap", why: "Is the promise clear enough to start?" },
  { step: "Phone entered → OTP sent", why: "Hesitating to share a number" },
  { step: "OTP sent → OTP verified", why: "Delivery failures, channel confusion (F4)" },
  { step: "Verified → Role selected", why: "Do people understand the two personas?" },
  { step: "Landlord → First tenant added", why: "The real activation gate" },
  { step: "Tenant added → First reminder sent", why: "Aha moment. Track time to reach it." },
  { step: "Reminder → First rent collected", why: "Retention predictor" },
];

const sevStyle: Record<Finding["severity"], string> = {
  High: "bg-primary text-on-primary",
  Medium: "border border-primary text-primary",
  Low: "border border-border-muted text-surface-tint",
};

export default function OnboardingAudit() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous py-generous gap-generous flex flex-col flex-grow">
      {/* Header */}
      <section className="flex flex-col gap-medium pt-generous border-b border-primary pb-generous">
        <div className="font-mono-data text-mono-data uppercase text-surface-tint tracking-widest text-xs">
          Product Deep-Dive · Onboarding
        </div>
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">
          Auditing My Own Onboarding
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-on-surface-variant max-w-3xl leading-relaxed">
          I shipped Domvio&apos;s sign-up flow, then went through it the way a new PM would go through someone else&apos;s product, one screen at a time, asking &quot;why is this here?&quot;. Below are the gaps I found, how I&apos;d fix each one, and the funnel I&apos;d use to prove the fixes worked.
        </p>
      </section>

      {/* Current flow */}
      <section className="flex flex-col gap-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary">The Flow as Shipped</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-medium">
          {[
            { src: "/domvio/login-email.jpg", label: "Sign in · Email tab" },
            { src: "/domvio/account-type.jpg", label: "Role selection" },
            { src: "/domvio/signup-landlord.jpg", label: "Landlord details" },
            { src: "/domvio/signup-tenant.jpg", label: "Tenant details" },
          ].map((s, i) => (
            <figure key={s.src} className="border border-primary bg-bg-base flex flex-col">
              <div className="p-tight bg-surface-container-low border-b border-primary flex justify-center">
                <Image
                  src={s.src}
                  alt={`Domvio onboarding screen: ${s.label}`}
                  width={240}
                  height={520}
                  unoptimized
                  className="w-full max-w-[200px] h-auto grayscale contrast-110 border border-border-muted"
                />
              </div>
              <figcaption className="p-tight font-mono-data text-mono-data text-xs uppercase tracking-wider">
                0{i + 1} / {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Findings */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous">
        <h2 className="font-header-h2 text-header-h2 text-primary">Findings</h2>
        <div className="flex flex-col border-y border-primary">
          {findings.map((f) => (
            <article
              key={f.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-medium py-medium border-b border-border-muted last:border-b-0"
            >
              <div className="md:col-span-4 flex flex-col gap-tight">
                <div className="flex items-center gap-tight">
                  <span className="font-mono-data text-mono-data text-xs text-surface-tint">{f.id}</span>
                  <span className={`font-mono-data text-xs uppercase tracking-wider px-tight py-0.5 ${sevStyle[f.severity]}`}>
                    {f.severity}
                  </span>
                </div>
                <h3 className="font-subheader-h3 text-subheader-h3 text-primary text-xl leading-snug">{f.title}</h3>
              </div>
              <div className="md:col-span-4 flex flex-col gap-tight">
                <div className="font-mono-data text-mono-data text-xs uppercase tracking-widest text-surface-tint">
                  Observed
                </div>
                <p className="font-body-primary text-body-primary text-on-surface-variant leading-relaxed">{f.observed}</p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-tight">
                <div className="font-mono-data text-mono-data text-xs uppercase tracking-widest text-primary font-bold">
                  Proposed fix
                </div>
                <p className="font-body-primary text-body-primary text-primary leading-relaxed">{f.fix}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Funnel */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous">
        <div className="flex flex-col gap-tight">
          <h2 className="font-header-h2 text-header-h2 text-primary">How I&apos;d Measure It</h2>
          <p className="font-body-primary text-body-primary text-on-surface-variant max-w-3xl">
            An onboarding fix only counts if the funnel moves. These are the events I&apos;d track. Each step is one drop-off rate I can attach to a hypothesis.
          </p>
        </div>
        <ol className="border border-primary bg-bg-base">
          {funnel.map((f, i) => (
            <li
              key={f.step}
              className="grid grid-cols-12 gap-tight px-medium py-tight border-b border-border-muted last:border-b-0 items-center"
            >
              <span className="col-span-2 md:col-span-1 font-mono-data text-mono-data text-xs text-surface-tint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 md:col-span-6 font-body-primary text-body-primary font-semibold text-primary">
                {f.step}
              </span>
              <span className="col-span-12 md:col-span-5 font-body-secondary text-body-secondary text-on-surface-variant md:text-right">
                {f.why}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Principles */}
      <section className="flex flex-col gap-medium border-t border-primary pt-generous">
        <h2 className="font-header-h2 text-header-h2 text-primary">Principles I Took Away</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
          {[
            {
              t: "One way in",
              b: "Every auth option you add is another branch to support and another way for someone to get stuck. Pick the one your user already trusts.",
            },
            {
              t: "Value before profile",
              b: "Ask only for what the next screen needs. Email, name and preferences can wait until after the aha moment.",
            },
            {
              t: "Context carries over",
              b: "If someone arrives through an invite, the product should already know who they are and why they came.",
            },
          ].map((p) => (
            <div key={p.t} className="border border-primary p-medium bg-bg-surface flex flex-col gap-tight">
              <h3 className="font-subheader-h3 text-subheader-h3 text-primary">{p.t}</h3>
              <p className="font-body-primary text-body-primary text-on-surface-variant leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
        <Link
          href="/domvio"
          className="font-mono-data text-mono-data text-xs uppercase tracking-widest text-primary underline hover:text-secondary self-start pt-tight"
        >
          Full Domvio case study →
        </Link>
      </section>
    </div>
  );
}
