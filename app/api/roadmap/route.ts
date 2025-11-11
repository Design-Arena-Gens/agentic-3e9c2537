import { NextRequest, NextResponse } from 'next/server';

function INTPBias(goals: string) {
  return [
    'Choose simple, composable primitives; avoid accidental complexity.',
    'Bias to written standards and unit tests before scale.',
    'Time-block deep work; protect focus hours daily.',
    `Anchor goals: ${goals}. Derive measurable weekly outcomes.`,
  ];
}

function planFor({ horizonYears, personality, goals }: { horizonYears: number; personality: string; goals: string }) {
  const stages = [
    {
      name: 'Foundation',
      window: '0?3 months',
      items: [
        'Stabilize finances and calendar; commit to weekly cadence and review.',
        'Select boring baseline stack; automate CI, formatting, and tests.',
        'Define non-negotiable standards: logging, errors, interfaces, SLIs/SLOs.',
        'Write a one-page strategy and two design docs.'
      ]
    },
    {
      name: 'Systematize',
      window: '3?12 months',
      items: [
        'Ship 3 tiny, durable features; instrument adoption and failure modes.',
        'Codify runbooks and checklists; remove single points of failure.',
        'Add backup/restore drills; document recovery time objectives.',
        'Establish customer feedback loop; weekly fixes, monthly releases.'
      ]
    },
    {
      name: 'Scale',
      window: '1?3 years',
      items: [
        'Partition services by failure domain; graceful degradation paths.',
        'Introduce cost budgets; track cost-to-value ratios per feature.',
        'Automate onboarding; create public docs and examples.',
        'Grow a small contributor group; code reviews and standards.'
      ]
    },
    {
      name: 'Endure',
      window: '3?10 years',
      items: [
        'Succession for critical roles; rotate on-call and ownership.',
        'Roadmap by invariants, not trends; prune risky dependencies.',
        'Resilience testing in production; chaos drills quarterly.',
        'Compounding loop: learn ? document ? standardize ? automate.'
      ]
    }
  ];

  if (personality === 'INTP') {
    stages[0].items = [...INTPBias(goals), ...stages[0].items];
  }

  return { horizonYears, personality, stages };
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { horizonYears = 5, personality = 'INTP', goals = '' } = body || {};
  const p = planFor({ horizonYears: Number(horizonYears), personality, goals });
  return NextResponse.json(p);
}
