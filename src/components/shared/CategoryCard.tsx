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
          gap: 24px;
          width: max-content;
          padding: 24px 10px 48px 10px;
          animation: marqueeScroll ${categories.length * 2.5}s linear infinite;
        }
        .cn-track:hover {
          animation-play-state: paused;
        }

        /* ════════════════════════════════════════
           OUTER CARD
        ════════════════════════════════════════ */
        .cn-card {
          flex-shrink: 0;
          width: 178px;
          height: 195px;
          background-color: #ffffff; /* Normal e white */
          border-radius: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          cursor: pointer;
          overflow: hidden; /* Blue bottom area card er moddhe thakar jonno */
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
        }

        .cn-card:hover {
          background-color: #7995C2; /* Hover e BRAC bank er exact Blue color */
          box-shadow: 0 12px 30px rgba(121, 149, 194, 0.25);
        }

        /* ════════════════════════════════════════
           WHITE BACKGROUND LAYER (Ei layer ta hover e choto hobe)
        ════════════════════════════════════════ */
        .cn-white-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 24px;
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .cn-card:hover .cn-white-bg {
          height: 125px; /* Hover korle white area choto hoye jabe, niche blue show korbe */
          border-radius: 24px 24px 20px 20px; /* White er bottom curve hobe 2nd image er moto */
        }

        /* ════════════════════════════════════════
           INNER CONTENT (Icon + Text)
        ════════════════════════════════════════ */
        .cn-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          z-index: 2;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cn-card:hover .cn-content {
          transform: translateY(-28px); /* Hover e upore uthe jabe notun sadha jaygar majhkhan e */
        }

        .cn-icon {
          width: 68px;
          height: 68px;
          object-fit: contain;
          display: block;
        }

        .cn-name {
          font-size: 16px;
          font-weight: 400;
          color: #003B5C;
          text-align: center;
          margin: 0;
        }

        /* ════════════════════════════════════════
           VIEW DETAILS BUTTON
        ════════════════════════════════════════ */
        .cn-btn-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70px; /* Joto tuku blue area show korbe */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .cn-btn {
          background: #D4E0F0; /* 2nd image er moto light blue button */
          color: #003B5C;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 8px; /* 2nd image er moto halka curve, pura gol na */
          text-decoration: none;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cn-card:hover .cn-btn {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.05s;
        }

        .cn-btn:hover {
          background-color: #C1D2E8;
        }

      `}</style>

      {/* Section */}
      <section style={{ padding: "64px 0 72px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

          {/* Heading */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 3.5vw, 36px)",
              fontWeight: 300, 
              color: "#003B5C",
              marginBottom: 10,
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
                  {/* Sadha background layer jeta hover e choto hobe */}
                  <div className="cn-white-bg"></div>

                  {/* Icon ar Text layer jeta upore slide korbe */}
                  <div className="cn-content">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="cn-icon"
                    />
                    <p className="cn-name">{category.name}</p>
                  </div>

                  {/* Button layer jeta nicher blue section e ashbe */}
                  <div className="cn-btn-wrapper">
                    <Link
                      href={`/category/${category.slug}`}
                      className="cn-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Link>
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