export function PrinciplesList() {
  const items = [
    { k: 'Stability first', v: 'Prefer boring tech; reduce variance before raising the mean.' },
    { k: 'Small, steady gains', v: 'Compounding > bursts. Daily cadence, weekly review, quarterly direction.' },
    { k: 'Reliability by design', v: 'Automate checks, immutability where possible, graceful degradation, observability.' },
    { k: 'Sufficient runway', v: 'Stabilize finances and time; avoid desperate tradeoffs.' },
    { k: 'Serve others', v: 'Solve real, repeatable problems for real people.' },
    { k: 'Write it down', v: 'Standards, interfaces, invariants. Design docs > folklore.' },
    { k: 'Own your stack', v: 'Minimize critical external dependencies; have plan B.' }
  ];

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Reliability principles</h3>
      {items.map(({ k, v }) => (
        <div className="kv" key={k}>
          <b>{k}</b>
          <span>{v}</span>
        </div>
      ))}
    </div>
  );
}
