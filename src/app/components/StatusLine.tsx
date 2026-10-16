interface StatusField {
  label: string;
  value: string;
  hot?: boolean;
}

interface StatusLineProps {
  mode?: string;
  path: string;
  fields?: StatusField[];
  className?: string;
}

/** A Vim-style status bar: mode block, file path, then label/value columns. */
export function StatusLine({ mode = "NORMAL", path, fields = [], className = "" }: StatusLineProps) {
  return (
    <div className={`flex items-stretch border-t border-border bg-background mono-caps ${className}`}>
      <span className="flex items-center px-3 py-2 bg-primary text-primary-foreground font-medium">{mode}</span>
      <span className="flex items-center px-3 py-2 text-chrome normal-case tracking-[0.08em] truncate">{path}</span>
      <div className="ml-auto hidden sm:flex items-stretch">
        {fields.map((field) => (
          <p key={field.label} className="flex items-center gap-2 px-4 py-2 border-l border-border text-[10.5px]">
            <span className="text-muted-foreground">{field.label}</span>
            <span className={field.hot ? "text-primary" : "text-foreground"}>{field.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
