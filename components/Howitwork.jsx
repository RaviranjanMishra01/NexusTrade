
"use client"
import React, { useState } from "react";
import Image from "next/image";
import "./Howitwork.css";

const SharkFundedUI = () => {
  const data = {
    title: "How it Works?",
    subtitle: "The main reasons why traders choose to trade with SharkFunded.",
    steps: [
      {
        id: 1,
        phase: "EVALUATION",
        title: "Choose Evaluation",
        description:
          "Choose between Instant Funding, 1 Phase or 2 Phase Evaluation!",
      },
      {
        id: 2,
        phase: "FUNDED PHASE",
        title: "Get Funded",
        description:
          "Choose between Instant Funding, 1 Phase or 2 Phase Evaluation!",
        accountDetails: {
          accountSize: "$50,000",
          profitSplit: "80%",
          firstPayout: "$22,864",
          profitGain: "+$28,580.26",
          percentGain: "+190%",
        },
      },
      {
        id: 3,
        phase: "PAYOUT",
        title: "Recieve Payouts!",
        description: "Withdraw Payouts on Daily basis through Crypto.",
        icon: "bitcoin",
      },
    ],
    ctaButton: "Get Funded",
  };

  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>

      {/* Steps Container */}
      <div className="steps-container">
        {/* Step 1: Evaluation */}
        <div className="card">
          {/* Plans */}
          <div className="plans-section">
            <div className="step-badge">
              <div className="badge-circle">✓</div>
              <span className="badge-text">Step 1</span>
            </div>
            <div className="howWorkImsges">
              <Image
                src="/Images/step1.webp"
                alt="step1"
                fill
                className="StepsImages"
              />
            </div>
          </div>
          <div className="cardBottom">
            <h3 className="phase-label">{data.steps[0].phase}</h3>
            <h2 className="step-title">{data.steps[0].title}</h2>
            <p className="step-description">{data.steps[0].description}</p>
          </div>
        </div>

        {/* Step 2: Funded Phase */}
        <div className="card">
          <div className="step-badge">
            <div className="badge-circle">✓</div>
            <span className="badge-text">Step 2</span>
          </div>

          {/* Account Details */}
          <div className="account-details">
            <Image
              src="/Images/step2.webp"
              alt="step1"
              width={300}
              height={200}
            />
          </div>
          <div className="cardBottom">
            <h3 className="phase-label">{data.steps[1].phase}</h3>
            <h2 className="step-title">{data.steps[1].title}</h2>
            <p className="step-description">{data.steps[1].description}</p>
          </div>
        </div>

        {/* Step 3: Payout */}
        <div className="card card-flex">
          <div>
            <div className="step-badge">
              <div className="badge-circle">✓</div>
              <span className="badge-text">Step 3</span>
            </div>

            {/* Bitcoin Icon */}
            <div className="bitcoin-icon-container">
              <div className="bitcoin-icon">
                <Image
                  src="/Images/step3.webp"
                  alt="step1"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className="cardBottom">
              <h3 className="phase-label">{data.steps[2].phase}</h3>
              <h2 className="step-title">{data.steps[2].title}</h2>
              <p className="step-description">{data.steps[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-container">
        <button className="btn btn-ctab">{data.ctaButton}</button>
      </div>
    </div>
  );
};

export default SharkFundedUI;
