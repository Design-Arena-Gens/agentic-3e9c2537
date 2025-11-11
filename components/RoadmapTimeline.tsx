export function RoadmapTimeline({ plan }: { plan: any }) {
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Roadmap</h3>
      <div className="timeline">
        {plan.stages.map((s: any) => (
          <div key={s.name} className="stage">
            <h3>{s.name} <small>? {s.window}</small></h3>
            <ul className="list">
              {s.items.map((it: string, idx: number) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
