type TagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Tag({ label, active = false, onClick, className = "" }: TagProps) {
  const baseClass =
    "border px-3 py-1 text-xs uppercase tracking-[0.08em] transition";
  const stateClass = active
    ? "border-accent text-accent"
    : "border-border text-muted hover:border-accent hover:text-accent";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${baseClass} ${stateClass} ${className}`.trim()}>
        {label}
      </button>
    );
  }

  return <span className={`${baseClass} ${stateClass} ${className}`.trim()}>{label}</span>;
}
