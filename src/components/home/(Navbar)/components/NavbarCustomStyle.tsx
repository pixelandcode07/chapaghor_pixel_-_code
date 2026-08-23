  <>
  {/* Version 1: */}
   <style>{`
        /* ═══════════════════════════════════════════════════════
            Animatable CSS custom property
        ═══════════════════════════════════════════════════════ */
        @property --nav-sweep {
          syntax: '<percentage>';
          initial-value: 0%;
          inherits: false;
        }

        /* ═══════════════════════════════════════════════════════
           .nav-pill  — normal state (Controls the HOVER OUT)
        ═══════════════════════════════════════════════════════ */
        .nav-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid transparent;
          
          background-image:
            linear-gradient(#ffffff, #ffffff),
            conic-gradient(
              from 0deg, 
              #FD7034 var(--nav-sweep),
              transparent var(--nav-sweep)
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          --nav-sweep: 0%;
          
          transition: --nav-sweep 0.6s cubic-bezier(0.25, 1, 0.5, 1); 
        }

        .nav-pill:hover {
          --nav-sweep: 100%;
          transition: --nav-sweep 0.3s ease-in;
        }

        /* ═══════════════════════════════════════════════════════
           Phase 2 — ::after  →  solid orange FILL
        ═══════════════════════════════════════════════════════ */
        .nav-pill::after {
          content: '';
          position: absolute;
          inset: -1px; 
          border-radius: 20px;
          background: #FD7034; 
          opacity: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.15s ease 0s;
        }

        .nav-pill:hover::after {
          opacity: 1;
          transition: opacity 0.25s ease 0.3s;
        }

        /* ═══════════════════════════════════════════════════════
           Phase 3 — text + icon → white
        ═══════════════════════════════════════════════════════ */
        .nav-pill-text {
          position: relative;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          color: #012C60; 
          text-decoration: none;
          font-weight: 400;
          white-space: nowrap;
          transition: color 0.15s ease 0s;
        }

        .nav-pill:hover .nav-pill-text {
          color: #ffffff;
          transition: color 0.15s ease 0.3s;
        }
      `}</style>



      {/* Version 2: */}

       <style>{`
              /* ═══════════════════════════════════════════════════════
                  Animatable CSS custom property
              ═══════════════════════════════════════════════════════ */
              @property --nav-sweep {
                syntax: '<percentage>';
                initial-value: 0%;
                inherits: false;
              }
      
              /* ═══════════════════════════════════════════════════════
                 .nav-pill  — normal state (Controls the HOVER OUT)
              ═══════════════════════════════════════════════════════ */
              .nav-pill {
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 20px;
                cursor: pointer;
                border: 1px solid transparent;
                
                background-image:
                  linear-gradient(#ffffff, #ffffff),
        conic-gradient(
          from 0deg,
          #511902 var(--nav-sweep),
          transparent var(--nav-sweep)
        );
                background-origin: border-box;
                background-clip: padding-box, border-box;
                --nav-sweep: 0%;
                
                transition: --nav-sweep 0.6s cubic-bezier(0.25, 1, 0.5, 1); 
              }
      
              .nav-pill:hover {
                --nav-sweep: 100%;
                transition: --nav-sweep 0.3s ease-in;
              }
      
              /* ═══════════════════════════════════════════════════════
                 Phase 2 — ::after  →  solid orange FILL
              ═══════════════════════════════════════════════════════ */
           .nav-pill::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 20px;
        border: 1px solid #511902;
      
        background:
          linear-gradient(
            135deg,
            rgba(255,120,40,.18) 28%,
            rgba(255,120,40,.45) 46%,
            rgba(255,120,40,.12) 58%,
            transparent 70%
          ),
          linear-gradient(
            135deg,
            #511902 0%,
            #6b2305 18%,
            #D4531C 48%,
            #B84516 68%,
            #7A2806 84%,
            #511902 100%
          );
      
        opacity: 0;
        z-index: 0;
        pointer-events: none;
        transition: opacity .25s ease;
      }
      
              .nav-pill:hover::after {
                opacity: 1;
                transition: opacity 0.25s ease 0.3s;
              }
      
              /* ═══════════════════════════════════════════════════════
                 Phase 3 — text + icon → white
              ═══════════════════════════════════════════════════════ */
              .nav-pill-text {
                position: relative;
                z-index: 10;
                display: inline-flex;
                font-family: Helvetica Neue;
                align-items: center;
                color: #012C60; 
                text-decoration: none;
                font-weight: 400;
                white-space: nowrap;
                transition: color 0.15s ease 0s;
              }
      
              .nav-pill:hover .nav-pill-text {
                color: #ffffff;
                transition: color 0.15s ease 0.3s;
              }
            `}</style>
   </>