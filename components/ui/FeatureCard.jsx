import React from "react";
import "./FeatureCard.css"

const featureData = [
  {
    id: 1,
    title: "DailyRewards",
    subtitle: "upto 80% split",
    note: null
  },
  {
    id: 2,
    title: "NoConsistency",
    subtitle: "Score Rules",
    note: null
  },
  {
    id: 3,
    title: "24 /Hrs",
    subtitle: "Payout Guaranteed",
    note: "Actual trader payout. Individual results vary. Trading involves risk."
  }
];

export default function FeatureCard() {
  return (
    <div className="FeatureCard">
      {featureData.map((feature, index) => (
        <React.Fragment key={feature.id}>
          <div className="card-item">
            <h3>{feature.title}</h3>
            <p>{feature.subtitle}</p>
            {feature.note && <span className="note">{feature.note}</span>}
          </div>
          {index < featureData.length - 1 && <div className="divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}