import React, { useEffect, useState } from "react";
import "./PromoBanner.css";
import { Link } from "react-router";

const defaultTarget = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

function getRemaining(target) {
  const total = Math.max(0, target - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const TimeBox = ({ value, label }) => (
  <div className="time-box">
    <div className="time-value">{String(value).padStart(2, "0")}</div>
    <div className="time-label">{label}</div>
  </div>
);

const PromoBanner = ({ targetDate }) => {
  const target = targetDate ? new Date(targetDate) : defaultTarget;
  const [remaining, setRemaining] = useState(getRemaining(target));

  useEffect(() => {
    const t = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <section className="promo-banner mt-8 rounded-lg overflow-hidden">
      <div className="promo-inner container mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Winter Sale – Up to 30% OFF!</h2>
          <p className="mt-3 text-base-content/80 max-w-xl">
            Limited time offers on selected toys. Shop now and bring joy to
            little ones with safe, educational and fun toys.
          </p>

          <div className="mt-6 flex gap-4 items-center">
            <Link to="/feature" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
            <Link to="/all-toys" className="btn btn-ghost">
              Browse all toys
            </Link>
          </div>
        </div>

        <div className="countdown-wrapper">
          <div className="countdown-grid">
            <TimeBox value={remaining.days} label="Days" />
            <TimeBox value={remaining.hours} label="Hours" />
            <TimeBox value={remaining.minutes} label="Mins" />
            <TimeBox value={remaining.seconds} label="Secs" />
          </div>
          <div className="mt-3 text-sm text-base-content/70">Offer ends soon — hurry up!</div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
