import { StatusLine } from "./StatusLine";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = ["portfolio", "about", "contact"];

  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="mono-caps text-chrome tracking-[0.3em]">Ridwan.Yusuf</p>
          <p className="font-mono text-xs text-muted-foreground mt-2">// data scientist &amp; ai/ml engineer</p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              :{link}
            </button>
          ))}
        </div>
      </div>

      <StatusLine
        path="~/ridwan/footer.tsx"
        fields={[
          { label: "system", value: "operational", hot: true },
          { label: "built", value: "react · ts · tailwind" },
          { label: "©", value: String(currentYear) },
        ]}
      />
    </footer>
  );
}
