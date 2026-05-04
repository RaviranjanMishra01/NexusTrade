"use client"
import "./Features.css";
const cardsData = [
  {
    id: 1,
    type: "crypto-card",
    title: "Crypto Withdrawals",
    text: "Securely withdraw your performance rewards to your preferred crypto wallet with lightning-fast processing and top-tier security.",
    image: "/Images/crypto.png",
    imageAlt: "Crypto",
    layout: "image-top",
  },
  {
    id: 2,
    type: "daily-payouts-card",
    title: "Daily Payouts!",
    text: "No more waiting for your rewards. We process payout requests daily, ensuring you access your earnings whenever you need them.",
    disclaimer:
      "Actual trader payout. Individual results vary. Trading involves risk.",
    image: "/Images/calendar.png",
    imageAlt: "Calendar",
    layout: "content-left",
  },
  {
    id: 3,
    type: "instruments-card",
    title: "300+ Instruments",
    image: "/Images/instruments.png",
    imageAlt: "Instruments",
    layout: "image-center",
  },
  {
    id: 4,
    type: "mt5-card",
    title: "MT5 Platform",
    image: "/Images/mt5.png",
    imageAlt: "MT5",
    layout: "image-center",
  },
];

const headerData = {
  title: "Why Traders Love ",
  titleHighlight: "NexusTrade?",
  subtitle:
    "Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.",
};

const NexusTradeFundedLayout = () => {
  return (
    <div className="NexusTrade-container">
      {/* Header Section */}
      <div className="NexusTrade-header">
        <h1 className="NexusTrade-title">
          {headerData.title}
          <span>{headerData.titleHighlight}</span>
        </h1>
        <p className="NexusTrade-subtitle">{headerData.subtitle}</p>
      </div>

      {/* Main Grid Layout */}
      <div className="NexusTrade-grid">
        {cardsData.map((card) => (
          <div key={card.id} className={`NexusTrade-card ${card.type}`}>
            {/* Image Top Layout */}
            {card.layout === "image-top" && (
              <>
                <div className="cover_image">
                  <div className="card-image">
                    <img src={card.image} alt={card.imageAlt} />
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </>
            )}

            {/* Content Left Layout */}
            {card.layout === "content-left" && (
              <div className="payouts-content">
                <div className="payouts-text">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-text">{card.text}</p>
                  {card.disclaimer && (
                    <p className="card-disclaimer">{card.disclaimer}</p>
                  )}
                </div>
                <div className="payouts-image">
                  <img src={card.image} alt={card.imageAlt} />
                </div>
              </div>
            )}

            {/* Image Center Layout */}
            {card.layout === "image-center" && (
              <>
                <h2 className="card-title">{card.title}</h2>
                <div className="card-image-center">
                  <img src={card.image} alt={card.imageAlt} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NexusTradeFundedLayout;
