"use client"
import "./State.css"
const statsData = {
  highlight: {
    amount: 3500000,
    prefix: "$",
    suffix: "+",
    description: "Total Payouts paid out to nexusTread Traders!"
  },
  items: [
    {
      id: 1,
      value: 100000,
      suffix: "+",
      label: "Active Traders"
    },
    {
      id: 2,
      value: 24,
      suffix: "hrs",
      label: "Guaranteed Payouts"
    },
    {
      id: 3,
      value: 9481,
      label: "Funded Accounts"
    }
  ]
};
import { useCountUp } from "../hook/useCountUp";

function States() {
  const highlightValue = useCountUp(statsData.highlight.amount);

  return (
    <div className="stats">
      <div className="stats-container">

        {/* Highlight */}
        <div className="stats-highlight">
          <h2 className="stats-amount">
            {statsData.highlight.prefix}
            {Math.floor(highlightValue).toLocaleString()}
            {statsData.highlight.suffix}
          </h2>

          <p className="stats-description">
            {statsData.highlight.description}
          </p>
        </div>

        {/* Items */}
        <div className="stats-flex">
          {statsData.items.map((item) => {
            const animatedValue = useCountUp(item.value);

            return (
              <div key={item.id} className="stats-item">
                <h4 className="stats-value">
                  {Math.floor(animatedValue).toLocaleString()}
                  {item.suffix || ""}
                </h4>
                <p className="stats-label">{item.label}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default States;