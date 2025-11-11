import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enduring Systems ? Agentic Planner',
  description: 'Plan and build reliable systems for a secure future.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="theme-dark">
      <body>
        {children}
      </body>
    </html>
  );
}
