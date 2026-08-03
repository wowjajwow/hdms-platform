export function CompanyEnergyRing() {
  return (
    <div className="company-energy-ring" aria-hidden="true">
      <svg
        className="company-energy-ring__svg"
        viewBox="0 0 720 240"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="companyEnergyFront" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0.5" />
            <stop offset="42%" stopColor="#fde047" stopOpacity="0.88" />
            <stop offset="74%" stopColor="#fff7d6" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="companyEnergyTail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.46" />
            <stop offset="54%" stopColor="#fbbf24" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#fff7d6" stopOpacity="0.96" />
          </linearGradient>
        </defs>

        <ellipse
          className="company-energy-ring__base company-energy-ring__base--back"
          cx="360"
          cy="120"
          rx="310"
          ry="72"
          pathLength="1000"
        />
        <ellipse
          className="company-energy-ring__base company-energy-ring__base--front"
          cx="360"
          cy="120"
          rx="310"
          ry="72"
          pathLength="1000"
        />

        <ellipse
          className="company-energy-ring__afterglow company-energy-ring__afterglow--long"
          cx="360"
          cy="120"
          rx="310"
          ry="72"
          pathLength="1000"
        />
        <ellipse
          className="company-energy-ring__afterglow company-energy-ring__afterglow--short"
          cx="360"
          cy="120"
          rx="310"
          ry="72"
          pathLength="1000"
        />
        <ellipse
          className="company-energy-ring__spark"
          cx="360"
          cy="120"
          rx="310"
          ry="72"
          pathLength="1000"
        />
      </svg>
    </div>
  );
}
