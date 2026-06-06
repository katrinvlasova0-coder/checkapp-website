const ROWS = [
  { feature: 'Talks to you', checkapp: true, hydration: false, dashboards: false },
  { feature: 'Tongue analysis', checkapp: true, hydration: false, dashboards: false },
  { feature: 'Video messages', checkapp: true, hydration: false, dashboards: false },
  { feature: 'Proactive check-ins', checkapp: true, hydration: false, dashboards: false },
  { feature: 'Free tier available', checkapp: true, hydration: true, dashboards: true },
];

function Cell({ value }: { value: boolean }) {
  return (
    <td className="px-4 py-3 text-center">
      {value ? (
        <span className="text-primary font-bold" aria-label="Yes">✅</span>
      ) : (
        <span className="text-text-secondary/40" aria-label="No">❌</span>
      )}
    </td>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-3xl bg-card shadow-lg">
      <table className="w-full min-w-[500px] text-left">
        <thead>
          <tr className="border-b border-black/5">
            <th className="px-4 py-4 font-display font-bold text-text">Feature</th>
            <th className="px-4 py-4 text-center font-display font-bold text-primary">CheckApp</th>
            <th className="px-4 py-4 text-center font-display font-bold text-text-secondary">Generic hydration apps</th>
            <th className="px-4 py-4 text-center font-display font-bold text-text-secondary">Health dashboards</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.feature} className="border-b border-black/5 last:border-0">
              <td className="px-4 py-3 font-medium text-text">{row.feature}</td>
              <Cell value={row.checkapp} />
              <Cell value={row.hydration} />
              <Cell value={row.dashboards} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
