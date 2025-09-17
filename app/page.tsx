import { LayoutDashboard, Paintbrush, PenLine, Sparkles, Type } from "lucide-react";

const brandPillars = [
  {
    name: "Clarity",
    description:
      "Every touchpoint reduces friction for storytellers through intentional typography and balanced spacing.",
    icon: Sparkles,
  },
  {
    name: "Warmth",
    description:
      "A grounded palette and soft shadows create a welcoming environment for monthly writing rituals.",
    icon: Paintbrush,
  },
  {
    name: "Momentum",
    description:
      "Components are designed to keep writers focused on progress, not on configuring their workspace.",
    icon: PenLine,
  },
];

const colors = [
  {
    name: "Aurora Sky",
    token: "--color-primary",
    value: "#38bdf8",
    description: "Primary actions, highlights, and active states.",
  },
  {
    name: "Twilight Plum",
    token: "--color-secondary",
    value: "#7c3aed",
    description: "Accent surfaces, tags, and secondary buttons.",
  },
  {
    name: "Inkstone",
    token: "--color-surface",
    value: "#0f172a",
    description: "Base canvas for application backgrounds.",
  },
  {
    name: "Starlight",
    token: "--color-overlay",
    value: "#f8fafc",
    description: "Text on dark backgrounds and elevated elements.",
  },
  {
    name: "Soft Clay",
    token: "--color-muted",
    value: "#f5d0c5",
    description: "System feedback, informational banners, and avatars.",
  },
  {
    name: "Fresh Moss",
    token: "--color-success",
    value: "#34d399",
    description: "Positive confirmations and success toasts.",
  },
];

const typeScale = [
  {
    name: "Display",
    token: "text-5xl/none font-semibold tracking-tight",
    sample: "Monthly Writing Circle",
    usage: "Hero headlines and landing messaging.",
  },
  {
    name: "Heading",
    token: "text-2xl/loose font-semibold",
    sample: "Capture progress, together.",
    usage: "Section headers and primary calls to action.",
  },
  {
    name: "Body",
    token: "text-base/7",
    sample: "Our voice is encouraging, clear, and rooted in community.",
    usage: "Default copy, paragraphs, and product descriptions.",
  },
  {
    name: "Detail",
    token: "text-sm/6 tracking-wide uppercase",
    sample: "Next Workshop • 5 Feb",
    usage: "Metadata, captions, and small labels.",
  },
];

const spacingScale = [
  { token: "space-1", value: "0.25rem", pixels: 4 },
  { token: "space-2", value: "0.5rem", pixels: 8 },
  { token: "space-4", value: "1rem", pixels: 16 },
  { token: "space-6", value: "1.5rem", pixels: 24 },
  { token: "space-8", value: "2rem", pixels: 32 },
  { token: "space-12", value: "3rem", pixels: 48 },
  { token: "space-16", value: "4rem", pixels: 64 },
];

const componentStates = [
  {
    label: "Primary",
    className:
      "bg-sky-400 text-slate-950 hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200",
  },
  {
    label: "Secondary",
    className:
      "bg-transparent border border-slate-600 text-slate-100 hover:border-slate-300/80 hover:text-white",
  },
  {
    label: "Ghost",
    className:
      "bg-white/5 text-slate-100 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#38bdf833,transparent_55%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 md:px-10 lg:py-28">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm/6 uppercase tracking-[0.2em] text-slate-300">
              <LayoutDashboard className="size-4" />
              Design System
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              A cohesive language for the Monthly Writing Circle.
            </h1>
            <p className="text-lg/8 text-slate-300">
              This system translates our community values into tangible UI decisions. Every token, component, and guideline
              balances creative momentum with the calm of a shared writing practice.
            </p>
            <div className="flex flex-wrap gap-3 text-sm/6 text-slate-300">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <Sparkles className="size-4 text-sky-300" /> Elevate creative focus
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <Type className="size-4 text-purple-300" /> Encourage clarity
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <Paintbrush className="size-4 text-emerald-300" /> Foster warmth
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-50px_rgba(56,189,248,0.45)]">
            <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="absolute -bottom-24 left-4 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Brand Pillars</p>
              <div className="space-y-5">
                {brandPillars.map(({ icon: Icon, name, description }) => (
                  <div key={name} className="flex items-start gap-4 rounded-2xl bg-black/20 p-4">
                    <div className="rounded-xl bg-white/10 p-2 text-sky-200">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{name}</p>
                      <p className="text-sm text-slate-300">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-white">Color tokens</h2>
              <p className="text-base/7 text-slate-300">
                Gradated blues and twilight purples channel the rhythm of evening writing sessions while staying accessible.
              </p>
            </div>
            <span className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 md:inline-flex">
              WCAG AA compliant
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
              <div key={color.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="h-32 transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: color.value }} />
                <div className="space-y-2 px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{color.token}</p>
                  <p className="text-lg font-semibold text-white">{color.name}</p>
                  <p className="text-sm text-slate-300">{color.description}</p>
                  <p className="text-xs text-slate-400">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">Typography scale</h2>
            <p className="text-base/7 text-slate-300">
              Geist Sans is paired with comfortable leading for long-form reading. Use tighter tracking for display text and
              relaxed spacing for supportive copy.
            </p>
            <div className="space-y-6">
              {typeScale.map((type) => (
                <div key={type.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{type.name}</span>
                    <span>{type.token}</span>
                  </div>
                  <p className={`mt-4 text-white ${type.token}`}>{type.sample}</p>
                  <p className="mt-3 text-sm text-slate-300">{type.usage}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.08] to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Voice & Tone</p>
            <div className="space-y-4 text-sm text-slate-200">
              <p>
                • Lead with warmth and confidence. We celebrate progress and offer steady guidance without overwhelming detail.
              </p>
              <p>
                • Use concise verbs ("share", "revise", "submit") and concrete nouns to keep writers grounded in action.
              </p>
              <p>• Prefer supportive cues over alerts. When errors arise, offer a way forward in the same sentence.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Spacing, radii, and elevation</h2>
            <p className="text-base/7 text-slate-300">
              Modular spacing keeps collaborative documents tidy. Rounded corners and translucent layers echo the softness of
              shared studio light.
            </p>
            <div className="space-y-5">
              {spacingScale.map((space) => (
                <div key={space.token} className="flex flex-wrap items-center gap-4 rounded-2xl bg-white/5 px-4 py-3">
                  <div className="min-w-[120px] text-xs uppercase tracking-[0.3em] text-slate-400">{space.token}</div>
                  <div className="flex grow items-center gap-3">
                    <div className="h-2 rounded-full bg-sky-300/80" style={{ width: `${space.pixels * 2}px` }} />
                    <span className="text-sm text-slate-200">{space.value}</span>
                  </div>
                  <span className="text-xs text-slate-400">{space.pixels}px</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Radii</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Pill</span>
                  <span>999px</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Large</span>
                  <span>24px</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Medium</span>
                  <span>16px</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Small</span>
                  <span>8px</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <div className="h-8 rounded-full bg-sky-400/40" />
                <div className="h-16 rounded-3xl bg-purple-500/30" />
                <div className="h-12 rounded-2xl bg-white/10" />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Elevation</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-900/80 p-4 shadow-[0_25px_60px_-20px_rgba(56,189,248,0.45)]">
                  Level 3 · Dialog
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-4 shadow-[0_20px_45px_-25px_rgba(124,58,237,0.6)]">
                  Level 2 · Panels
                </div>
                <div className="rounded-2xl bg-slate-900/60 p-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.9)]">
                  Level 1 · Cards
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Component library</h2>
              <p className="text-base/7 text-slate-300">
                Responsive states prioritize readability and reduce context switching for ongoing drafts and feedback.
              </p>
            </div>
            <span className="text-sm uppercase tracking-[0.3em] text-slate-400">Buttons, surfaces, inputs</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Buttons</p>
              <div className="flex flex-wrap gap-3">
                {componentStates.map((button) => (
                  <button
                    key={button.label}
                    className={`rounded-full px-6 py-2 text-sm font-semibold transition ${button.className}`}
                    type="button"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                Maintain a minimum hit area of 44px, and pair iconography with text when the action is critical.
              </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Cards & Inputs</p>
              <div className="space-y-4">
                <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>Workshop summary</span>
                    <span>Card • Level 1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">April Feedback Session</h3>
                  <p className="text-sm text-slate-300">
                    Collect reflections, assign partners, and celebrate wins. Cards hold snapshots that lead to dedicated views.
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200">
                    View agenda →
                  </button>
                </div>
                <label className="block space-y-2 text-sm text-slate-300">
                  Comment field
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 focus-within:border-sky-300 focus-within:bg-black/20">
                    <Type className="size-4 text-slate-400" />
                    <input
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                      placeholder="Share focused feedback..."
                      type="text"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 px-8 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white">Implementation principles</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base/7 text-slate-300">
            Build with accessibility first, keep interactions purposeful, and use motion sparingly to support, not distract from,
            writing. As the community evolves, iterate on tokens before altering components to protect continuity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm/6 text-slate-300">
            <span className="rounded-full border border-white/10 px-4 py-2">Hand off Figma tokens → Tailwind variables</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Document component props in Storybook</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Pair with React Testing Library for flows</span>
          </div>
        </section>
      </main>
    </div>
  );
}
