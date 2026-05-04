"use client"
import "./MarketTable.css"
const marketData = [
  {
    id: 1,
    name: "Bitcoin", 
    symbol: "BTC",
    icon: "₿",
    bg: "#fff3e0",
    color: "#f7931a",
    price: "$67,482.30",
    change: "+2.34%",
    changeType: "up",
    marketCap: "$1.33T",
    volume: "$28.4B",
    trend: "/Images/market_up.svg",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "Ξ",
    bg: "#e8eaf6",
    color: "#3f51b5",
    price: "$3,512.88",
    change: "+1.78%",
    changeType: "up",
    marketCap: "$421.5B",
    volume: "$14.2B",
    trend: "/Images/market_up.svg",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    icon: "◎",
    bg: "#e3f2fd",
    color: "#1565c0",
    price: "$182.44",
    change: "−0.92%",
    changeType: "down",
    marketCap: "$79.2B",
    volume: "$3.8B",
    trend: "/Images/market_down.svg",
  },
];
export default function MarketTable() {
  return (
    <section className="section markets-section">
      <div className="section-head">
        <div className="section-label">Live Markets</div>
        <h2 className="section-title">Top assets by volume</h2>
        <p className="section-sub">
          Track real-time prices and performance across all asset classes.
        </p>
      </div>

      <div className="table-wrap">
        <div className="table-topbar">
          <span className="table-title">Market Overview</span>
          <a href="#" className="view-all">
            View all markets →
          </a>
        </div>

        <div className="table-scroll">
          <table className="market-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Asset</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
                <th>Volume</th>
                <th>7d Trend</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {marketData.map((item, index) => (
                <tr key={item.id}>
                  <td className="rank">{index + 1}</td>

                  <td>
                    <div className="asset-cell">
                      <div
                        className="asset-icon"
                        style={{
                          background: item.bg,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="aname">{item.name}</div>
                        <div className="asym">{item.symbol}</div>
                      </div>
                    </div>
                  </td>

                  <td className="price-cell">{item.price}</td>

                  <td>
                    <span className={`badge ${item.changeType}`}>
                      {item.change}
                    </span>
                  </td>

                  <td className="muted-cell">{item.marketCap}</td>
                  <td className="muted-cell">{item.volume}</td>

                  <td>
                    <img className="spark" src={item.trend} alt="" />
                  </td>

                  <td>
                    <button className="btn-trade">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}