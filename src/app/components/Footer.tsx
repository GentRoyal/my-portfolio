export function Footer() {
  const links = ["portfolio", "about", "contact"];

  return (
    <footer className="bg-background pb-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="mono-caps text-chrome tracking-[0.3em]">Ridwan.Yusuf</p>
          <p className="font-mono text-xs text-muted-foreground mt-2">// data scientist &amp; ai/ml engineer · © {new Date().getFullYear()}</p>
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
    </footer>
  );
}
