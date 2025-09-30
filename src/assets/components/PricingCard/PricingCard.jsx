import React from "react";
import Features from "./Features";

const PricingCard = ({ pricing }) => {
  const { name, price, features, popular } = pricing;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          {popular && (
            <span className="badge badge-xs badge-warning">Most Popular</span>
          )}
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">${price}</span>
          </div>
          <div className="mt-6 gap-2 text-xs">
            {features.map((feature, index) => (
              <Features key={index} feature={feature}></Features>
            ))}
          </div>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
