interface TerminalBlockProps {
  title?: string;
  children: React.ReactNode;
  variant?: "dark" | "darker";
}

export function TerminalBlock({ title = "terminal", children, variant = "dark" }: TerminalBlockProps) {
  return (
    <div className={`overflow-hidden border border-border ${variant === "darker" ? "bg-background" : "bg-card"}`}>
      {/* Editor winbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border mono-label">
        <span>~/{title}</span>
        <span className="text-muted-foreground">[+]</span>
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

interface CodeLineProps {
  prompt?: string;
  children: React.ReactNode;
  output?: boolean;
}

export function CodeLine({ prompt = "$", children, output = false }: CodeLineProps) {
  return (
    <div className="flex gap-3 items-start mb-2 last:mb-0">
      {!output && <span className="text-primary select-none">{prompt}</span>}
      <code className={`flex-1 ${output ? "text-muted-foreground" : "text-foreground"}`}>
        {children}
      </code>
    </div>
  );
}
