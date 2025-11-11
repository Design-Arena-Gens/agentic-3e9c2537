import { useState } from 'react';

export function RoadmapForm({ defaultPersonality = 'INTP', onPlan }: { defaultPersonality?: string; onPlan: (p: any) => void }) {
  const [goals, setGoals] = useState('Build reliable systems, provide for others, secure future');
  const [horizon, setHorizon] = useState(5);
  const [personality, setPersonality] = useState(defaultPersonality);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    try {
      const res = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goals, horizonYears: horizon, personality })
      });
      const data = await res.json();
      onPlan(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="row">
        <div>
          <label className="label">Personality</label>
          <select className="select" value={personality} onChange={(e) => setPersonality(e.target.value)}>
            <option>INTP</option>
            <option>INTJ</option>
            <option>ISTJ</option>
            <option>ENTP</option>
            <option>ENFJ</option>
          </select>
        </div>
        <div>
          <label className="label">Time horizon (years)</label>
          <select className="select" value={horizon} onChange={(e) => setHorizon(parseInt(e.target.value))}>
            {[1,2,3,5,7,10].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <label className="label">Goals</label>
        <textarea className="textarea" rows={4} value={goals} onChange={(e) => setGoals(e.target.value)} />
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button className="button" onClick={generate} disabled={loading}>{loading ? 'Generating?' : 'Generate roadmap'}</button>
        <button onClick={() => onPlan(null)} className="input" style={{ background: '#0f1421' }}>Clear</button>
      </div>
    </div>
  );
}
