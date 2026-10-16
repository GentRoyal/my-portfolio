import { StatusLine } from "./StatusLine";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stack = ["FastAPI", "LangChain", "MLflow", "RAG"];

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="flex-1 flex items-center px-6 pt-28 pb-16">
        <div className="max-w-5xl mx-auto w-full min-w-0">
          <p className="mono-label mb-10">
            ~/ridwan <span className="text-muted-foreground">· data scientist &amp; ai/ml engineer</span>
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl leading-[0.95] mb-8 text-foreground">
            Ridwan Lanre Yusuf
            <br />
            <i className="text-muted-foreground">prototype to production.</i>
          </h1>

          <p className="font-mono text-sm text-chrome mb-6">// scaling ai solutions, end to end.</p>

          <p className="max-w-2xl mb-12 text-muted-foreground">
            Experienced in the full ML lifecycle, from ETL and feature engineering to deployment and MLOps.
            Building production AI systems including RAG pipelines, geospatial and video analytics, LLM agents, and data-intensive
            backends across domains from public policy to waste management to investor intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-16 mono-caps">
            <button onClick={() => scrollTo('portfolio')} className="text-primary hover:text-foreground transition-colors">
              view portfolio ↩
            </button>
            <button onClick={() => scrollTo('contact')} className="text-chrome hover:text-foreground transition-colors">
              :contact
            </button>
          </div>

          <pre className="text-sm whitespace-pre-wrap">
            <span className="text-kw">const</span> <span className="text-fn">stack</span>
            <span className="text-chrome"> = [</span>
            {stack.map((item, i) => (
              <span key={item}>
                <span className="text-str">"{item}"</span>
                {i < stack.length - 1 && <span className="text-chrome">, </span>}
              </span>
            ))}
            <span className="text-chrome">];</span>
          </pre>
        </div>
      </div>

      <StatusLine
        path="~/ridwan/portfolio.tsx"
        fields={[
          { label: "role", value: "data scientist" },
          { label: "focus", value: "production ai", hot: true },
          { label: "stack", value: "python · ml · cloud" },
        ]}
      />
    </section>
  );
}
