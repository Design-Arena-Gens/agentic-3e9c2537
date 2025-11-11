export function PersonalityBadge({ type, title }: { type: string; title: string }) {
  return (
    <div className="badge" title={title} aria-label={`Personality ${type}: ${title}`}>
      {type} ? {title}
    </div>
  );
}
