import { useState } from "react";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  const content = {
    Story: (
      <>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to
          real-time tracking, efficient logistics, and customer-first service
          has made us a trusted partner for thousands.
        </p>

        <p>
          Whether it's a personal gift or a time-sensitive business delivery,
          we ensure it reaches its destination — on time, every time.
        </p>

        <p>
          We believe delivery should be simple, transparent, and dependable.
          Our goal is to connect people and businesses through better,
          smarter logistics solutions.
        </p>
      </>
    ),

    Mission: (
      <p>
        Our mission is to make parcel delivery faster, safer, and more
        reliable through smart logistics and customer-focused service.
      </p>
    ),

    Success: (
      <p>
        Our success comes from the trust of thousands of customers who rely
        on our delivery service every day.
      </p>
    ),

    "Team & Others": (
      <p>
        Our dedicated team works together to provide efficient logistics,
        real-time tracking, and a smooth delivery experience.
      </p>
    ),
  };

  return (
    <section className="about-section h-screen">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2>About Us</h2>

          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        {/* Tabs */}
        <div className="about-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="about-content">
          {content[activeTab]}
        </div>
      </div>
    </section>
  );
};

export default About;