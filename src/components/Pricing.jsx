const plans = [
  {
    id: 1,
    name: "Basic",
    price: "₹999",
    duration: "/month",
    features: [
      "Gym Access",
      "Locker Facility",
      "1 Trainer Session",
      "Basic Support",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: "₹1999",
    duration: "/month",
    popular: true,
    features: [
      "Gym Access",
      "Unlimited Classes",
      "Personal Trainer",
      "Diet Plan",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Elite",
    price: "₹2999",
    duration: "/month",
    features: [
      "All Premium Features",
      "Dedicated Coach",
      "Custom Diet Plan",
      "Body Analysis",
      "VIP Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container-custom">
        <div className="pricing-heading">
          <h2>
            MEMBERSHIP
            <span>PLANS</span>
          </h2>

          <p>Choose the perfect plan for your fitness journey.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
                {plan.price}

                <span>{plan.duration}</span>
              </div>

              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>

              <button>Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
