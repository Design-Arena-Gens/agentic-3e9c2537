"use client";
import { useState } from 'react';
import { RoadmapForm } from '@/components/RoadmapForm';
import { RoadmapTimeline } from '@/components/RoadmapTimeline';
import { PrinciplesList } from '@/components/PrinciplesList';
import { PersonalityBadge } from '@/components/PersonalityBadge';

export default function Page() {
  const [plan, setPlan] = useState<null | any>(null);

  return (
    <div className="container">
      <header className="header">
        <div className="brand">Enduring Systems</div>
        <PersonalityBadge type="INTP" title="The Logician" />
      </header>

      <main>
        <section className="panel">
          <h1 className="h1">Build something that lasts</h1>
          <p className="sub">Stability and meaningful progress through reliable systems. A serious, traditional approach?quietly modern.</p>
          <div className="grid">
            <div className="col-7">
              <RoadmapForm
                defaultPersonality="INTP"
                onPlan={(p) => setPlan(p)}
              />
            </div>
            <div className="col-5">
              <PrinciplesList />
            </div>
          </div>
        </section>

        {plan && (
          <section className="panel" style={{ marginTop: 16 }}>
            <RoadmapTimeline plan={plan} />
          </section>
        )}

        <p className="footer">? {new Date().getFullYear()} Enduring Systems ? Designed for reliability.</p>
      </main>
    </div>
  );
}
