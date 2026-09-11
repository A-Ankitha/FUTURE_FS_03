import { useEffect, useMemo, useState } from 'react';


/* =========================================================
   SAKURA PETAL SVG
========================================================= */

const PETAL_SVG = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    d="M12 2
       C8 2 5 6 5 10
       C5 13 7 15 9 16.5
       L12 22
       L15 16.5
       C17 15 19 13 19 10
       C19 6 16 2 12 2Z"
    fill="currentColor"
  />
</svg>
`;


/* =========================================================
   CREATE RANDOM PETALS
========================================================= */

function createPetals(count) {
  return Array.from(
    { length: count },
    (_, index) => ({
      id: index,

      x:
        Math.random() * 100,

      size:
        Math.random() * 13 + 9,

      duration:
        Math.random() * 8 + 11,

      delay:
        Math.random() * 12,

      rotation:
        Math.random() * 360,

      sway:
        Math.random() * 80 - 40,

      opacity:
        Math.random() * 0.35 + 0.45,

      blur:
        Math.random() > 0.78
          ? Math.random() * 1.2
          : 0,

      depth:
        Math.random(),
    })
  );
}


/* =========================================================
   COMPONENT
========================================================= */

export default function SakuraPetals({
  count = 15,
  zIndex = 10,
}) {

  const [reducedMotion, setReducedMotion] =
    useState(false);


  /* -------------------------------------------------------
     Detect reduced motion
  ------------------------------------------------------- */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      );


    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };


    updatePreference();


    mediaQuery.addEventListener(
      'change',
      updatePreference
    );


    return () => {
      mediaQuery.removeEventListener(
        'change',
        updatePreference
      );
    };

  }, []);


  /* -------------------------------------------------------
     Generate petals only once
  ------------------------------------------------------- */

  const petals = useMemo(
    () => createPetals(count),
    [count]
  );


  if (reducedMotion) {
    return null;
  }


  return (
    <div
      className="sakura-layer"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,

        overflow: 'hidden',

        pointerEvents: 'none',

        userSelect: 'none',

        zIndex,

        isolation: 'isolate',
      }}
    >

      {petals.map((petal) => (

        <span
          key={petal.id}
          className="sakura-petal"
          style={{
            position: 'absolute',

            top: '-40px',

            left: `${petal.x}%`,

            width: `${petal.size}px`,

            height: `${petal.size}px`,

            color:
              petal.depth > 0.55
                ? 'rgba(218, 112, 112, 0.72)'
                : 'rgba(244, 137, 143, 0.82)',

            opacity:
              petal.opacity,

            filter:
              petal.blur
                ? `blur(${petal.blur}px)`
                : 'none',

            transform:
              `rotate(${petal.rotation}deg)`,

            willChange:
              'transform',

            animationName:
              'itadakiPetalFall, itadakiPetalSway',

            animationDuration:
              `${petal.duration}s, ${petal.duration * 0.62}s`,

            animationDelay:
              `-${petal.delay}s, -${petal.delay * 0.5}s`,

            animationTimingFunction:
              'linear, ease-in-out',

            animationIterationCount:
              'infinite, infinite',

            animationFillMode:
              'both, both',

            '--petal-sway':
              `${petal.sway}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: PETAL_SVG,
          }}
        />

      ))}


      {/* ===================================================
          COMPONENT-SCOPED ANIMATION
      =================================================== */}

      <style>{`

        .sakura-layer {
          contain:
            layout
            paint;
        }


        .sakura-petal {
          display:
            block;
        }


        .sakura-petal svg {
          display:
            block;

          width:
            100%;

          height:
            100%;
        }


        @keyframes itadakiPetalFall {

          0% {
            transform:
              translate3d(0, -45px, 0)
              rotate(0deg);
          }


          20% {
            transform:
              translate3d(
                calc(var(--petal-sway) * 0.25),
                20vh,
                0
              )
              rotate(140deg);
          }


          45% {
            transform:
              translate3d(
                calc(var(--petal-sway) * -0.35),
                48vh,
                0
              )
              rotate(310deg);
          }


          70% {
            transform:
              translate3d(
                calc(var(--petal-sway) * 0.55),
                76vh,
                0
              )
              rotate(500deg);
          }


          100% {
            transform:
              translate3d(
                calc(var(--petal-sway) * -0.3),
                112vh,
                0
              )
              rotate(720deg);
          }

        }


        @keyframes itadakiPetalSway {

          0%,
          100% {
            margin-left:
              0;
          }


          25% {
            margin-left:
              24px;
          }


          50% {
            margin-left:
              -18px;
          }


          75% {
            margin-left:
              28px;
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .sakura-layer {
            display:
              none !important;
          }

        }

      `}</style>

    </div>
  );
}