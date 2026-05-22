"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

type Category = {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  isFeatured: boolean;
};

export default function CategoryNeeds() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCategories = async () => {
      try {
        const res = await fetch("/api/v1/categories");
        const data = await res.json();
        if (data.success) {
          const featured = data.data.filter((c: Category) => c.isFeatured);
          setCategories(featured);
        }
      } catch (error) {
        console.error("Failed to load featured categories", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedCategories();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "80px 0" }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <Loader2 size={40} style={{ color: "#F05A28", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  const doubled = [...categories, ...categories];

  return (
    <>
      <style>{`

        /* ── Marquee ── */
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cn-track {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          width: max-content;
          padding: 14px 0;
          animation: marqueeScroll ${categories.length * 2.5}s linear infinite;
        }
        .cn-track:hover {
          animation-play-state: paused;
        }

        /* ════════════════════════════════════════
           OUTER CARD
           NORMAL → bg = white
           HOVER  → bg = peach
           overflow: hidden → inner card এর
           top corners outer card এর সাথে মিলবে
        ════════════════════════════════════════ */
        .cn-card {
          flex-shrink: 0;
          width: 178px;
          background-color: #ffffff;
          border-radius: 22px;
          border: none;
          box-shadow: none;
          overflow: hidden;
          cursor: pointer;
          transition: background-color 0.45s ease;
        }
        .cn-card:hover {
          background-color: #FDDCB5;
        }

        /* ════════════════════════════════════════
           WHITE INNER SECTION
           margin-top    = 0   → top এ peach দেখাবে না
           margin-left   = 0   → left এ peach দেখাবে না
           margin-right  = 0   → right এ peach দেখাবে না
           margin-bottom = 0   → panel এর আগে সামান্য gap

           border-radius:
             top-left / top-right  = 22px (outer card match)
             bottom-left / bottom-right = 16px (ছোট curve)
             → নিচে peach দেখাবে smooth করে
        ════════════════════════════════════════ */
        .cn-white {
          background: #ffffff;
          border-radius: 22px 22px 16px 16px;
          margin: 0 0 0 0;
          padding: 28px 14px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          /* NO transform — icon একদম স্থির থাকবে */
        }

        /* icon */
        .cn-icon {
          width: 74px;
          height: 74px;
          object-fit: contain;
          display: block;
        }

        /* name */
        .cn-name {
          font-size: 14px;
          font-weight: 600;
          color: #1C2B45;
          text-align: center;
          line-height: 1.4;
          margin: 0;
        }

        /* ════════════════════════════════════════
           SLIDE-DOWN PANEL
           Normal → max-height: 0 (hidden)
           Hover  → max-height: 80px (visible)
           bg = card এর peach (automatically)
        ════════════════════════════════════════ */
        .cn-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cn-card:hover .cn-panel {
          max-height: 80px;
          transition-delay: 0.08s;
        }

        .cn-panel-pad {
          padding: 8px 8px 10px 8px;
        }

        /* ════════════════════════════════════════
           VIEW DETAILS BUTTON
        ════════════════════════════════════════ */
        .cn-btn {
          display: block;
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          background: #ffffff;
          color: #1C2B45;
          font-size: 13px;
          font-weight: 500;
          padding: 11px 0;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.10);
          white-space: nowrap;
          transition:
            background-color 0.20s ease,
            color            0.20s ease,
            transform        0.15s ease;
        }
        .cn-btn:hover {
          background-color: #F05A28;
          color: #ffffff;
          transform: scale(1.02);
        }
        .cn-btn:active {
          transform: scale(0.97);
        }

      `}</style>

      {/* Section */}
      <section style={{ padding: "64px 0 72px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

          {/* Heading */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              letterSpacing: "0.055em",
              color: "#1C2B45",
              marginBottom: 48,
            }}
          >
            YOUR NEEDS
          </h2>

          {/* Marquee */}
          <div style={{ overflow: "hidden" }}>
            <div className="cn-track">
              {doubled.map((category, index) => (
                <div
                  key={`${category._id}-${index}`}
                  className="cn-card"
                >
                  {/* White section — icon + name — never moves */}
                  <div className="cn-white">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="cn-icon"
                    />
                    <p className="cn-name">{category.name}</p>
                  </div>

                  {/* Panel — peach bg, slides down on hover */}
                  <div className="cn-panel">
                    <div className="cn-panel-pad">
                      <Link
                        href={`/category/${category.slug}`}
                        className="cn-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}