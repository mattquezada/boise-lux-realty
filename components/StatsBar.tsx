export default function StatsBar() {
  const stats = [
    { label: "Years of experience", value: "10+" },
    { label: "Homes sold", value: "300+" },
    { label: "Average days on market", value: "18" },
    { label: "5-star rating", value: "4.9/5" },
  ];

  return (
    <section className="fog">
      <div className="container section" style={{ paddingTop: 26, paddingBottom: 26 }}>
        <div className="statsGrid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="statVal">{s.value}</div>
              <div className="statLab">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
