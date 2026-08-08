/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StorySection.css";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    number: "01",
    className: "Playgroup",
    age: "1.5 – 2.5 Years",
    title: "Little Steps Begin Here",
    description:
      "A warm first classroom where children learn through play, movement, music and meaningful relationships.",
    points: ["Sensory & creative play", "Social confidence", "Early communication"],
    image: "/image.png",
    color: "#FF6B9D",
    light: "#FFF0F6",
    icon: "🌱",
  },
  {
    number: "02",
    className: "Nursery",
    age: "2.5 – 3.5 Years",
    title: "Curiosity Starts Growing",
    description:
      "Children become curious, confident and independent while discovering letters, numbers, shapes and the world around them.",
    points: ["Early phonics", "Creative play", "Numbers & shapes"],
    image: "/image5.png",
    color: "#5B8DEF",
    light: "#EEF4FF",
    icon: "🎨",
  },
  {
    number: "03",
    className: "LKG",
    age: "3.5 – 4.5 Years",
    title: "Little Minds Start Connecting",
    description:
      "Learning becomes more purposeful while children build language, early maths, problem-solving and stronger friendships.",
    points: ["Storytelling & vocabulary", "Early maths", "Problem solving"],
    image: "/artandcraft1.png",
    color: "#FFB84D",
    light: "#FFF7E8",
    icon: "⭐",
  },
  {
    number: "04",
    className: "UKG",
    age: "4.5 – 5.5 Years",
    title: "Ready for Their Big Adventure",
    description:
      "Children gain the confidence, independence and foundational skills they need to take their next big step into school.",
    points: ["School readiness", "Reading & writing", "Confidence & independence"],
    image: "/learninglab.png",
    color: "#47C99E",
    light: "#ECFBF5",
    icon: "🚀",
  },
  {
    number: "05",
    className: "Daycare",
    age: "Flexible Care",
    title: "A Happy Place Beyond Class",
    description:
      "A safe, caring environment where children can rest, play, explore and feel at home after their classroom day.",
    points: ["Safe & caring environment", "Creative activities", "Rest & play time"],
    image: "/toyzone.png",
    color: "#9B7AF7",
    light: "#F4F0FF",
    icon: "💜",
  },
];

export default function StorySection() {
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${stories.length * 110}%`,
          pin: true,
          scrub: 1.2, // Higher scrub value makes the scroll response buttery smooth
          snap: {
            snapTo: 1 / (stories.length - 1),
            duration: { min: 0.3, max: 0.6 },
            delay: 0.05,
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            const idx = Math.min(
              stories.length - 1,
              Math.round(self.progress * (stories.length - 1))
            );
            setActiveIndex(idx);
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(
          card,
          {
            yPercent: 125,
            scale: 0.92,
            opacity: 0,
            rotate: i % 2 === 0 ? 1.5 : -1.5, // Playful micro-rotation as cards enter
          },
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "power3.out",
          }
        );

        if (cards[i - 1]) {
          tl.to(
            cards[i - 1],
            {
              scale: 0.93,
              opacity: 0.25,
              yPercent: -8,
              duration: 1.2,
              ease: "power3.out",
            },
            "<"
          );
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="story-gsap-container">
      {/* PLAYFUL BACKGROUND DECORATIONS */}
      <div className="story-bg-blobs">
        <div className="blob blob-left" />
        <div className="blob blob-right" />
        <div className="sparkle star-1">✨</div>
        <div className="sparkle star-2">🎈</div>
        <div className="sparkle star-3">🌟</div>
        <div className="sparkle star-4">🧸</div>
      </div>

      <div className="container position-relative z-2 h-100 d-flex flex-column justify-content-between py-3">
        {/* HEADER */}
        <header className="story-header text-center mx-auto mt-2">
          <div className="story-badge mb-2">
            <span className="badge-icon">🌈</span> Growing Together
          </div>
          <h2 className="fw-black display-6 kids-heading text-dark">
            Every Little Step Becomes a <span className="highlight-text">Big Story</span>
          </h2>
          <p className="kids-subheading text-secondary small mb-0">
            From their first little steps to becoming school-ready, watch your child grow with us!
          </p>
        </header>

        {/* WIDER STAGE CARDS CONTAINER */}
        <div className="story-cards-wrapper position-relative mx-auto my-auto">
          {stories.map((story, index) => (
            <article
              key={story.number}
              ref={(el) => (cardsRef.current[index] = el)}
              className="story-card shadow-lg overflow-hidden"
              style={{
                zIndex: index + 10,
                "--card-color": story.color,
                "--card-light": story.light,
              }}
            >
              <div className="row g-0 h-100">
                {/* IMAGE COLUMN */}
                <div className="col-md-6 position-relative story-img-col">
                  <img
                    src={story.image}
                    alt={`${story.className} classroom`}
                    className="w-100 h-100 object-fit-cover story-card-img"
                  />
                  <div className="img-glass-overlay" />
                  
                  <span className="story-num-badge">{story.number}</span>
                  
                  <div className="story-class-tag">
                    <span className="tag-emoji">{story.icon}</span>
                    <span className="tag-text">{story.className}</span>
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div className="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white story-content-col">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span
                      className="rounded-circle pulse-dot"
                      style={{ backgroundColor: story.color }}
                    />
                    <span className="kids-age-badge" style={{ color: story.color, backgroundColor: story.light }}>
                      {story.age}
                    </span>
                  </div>

                  <h3 className="fw-black text-dark h3 mb-2 card-title-text">{story.title}</h3>
                  <p className="text-secondary small mb-4 card-desc-text">{story.description}</p>

                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2.5">
                    {story.points.map((pt) => (
                      <li key={pt} className="d-flex align-items-center gap-2.5 kids-point-item">
                        <span
                          className="check-circle"
                          style={{
                            backgroundColor: story.light,
                            color: story.color,
                          }}
                        >
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* DOTS NAVIGATION */}
          <div className="story-nav-dots d-flex flex-column gap-2">
            {stories.map((s, idx) => (
              <span
                key={s.number}
                className={`nav-dot ${activeIndex === idx ? "active" : ""}`}
                style={{
                  backgroundColor: activeIndex === idx ? s.color : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center story-footer mb-2">
          {activeIndex < stories.length - 1 ? (
            <div className="scroll-hint-pill">
              <span>Scroll down for more</span>
              <span className="bounce-arrow">👇</span>
            </div>
          ) : (
            <div className="d-inline-flex align-items-center gap-3 bg-white px-4 py-2.5 rounded-pill shadow-md kids-cta-pill">
              <span className="fw-bold text-dark">Ready for their next adventure? 💛</span>
              <a href="/enquiry" className="btn btn-primary rounded-pill px-4 btn-kids-action">
                Start Their Journey <span className="arrow-icon">→</span>
              </a>
            </div>
          )}
        </footer>
      </div>
    </section>
  );
}