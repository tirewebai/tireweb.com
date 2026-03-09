/**
 * LogoTicker — pure CSS infinite scrolling logo marquee.
 * Accepts an optional `logos` prop (array of image paths).
 * Falls back to the default homepage set if none provided.
 */

const DEFAULT_LOGOS = [
  '/images/Group-1000003602.png',
  '/images/Group-1000003603.png',
  '/images/Group-1000003604.png',
  '/images/Group-1000003605.png',
  '/images/Group-1000003609.png',
  '/images/Group-1000003608.png',
  '/images/Group-1000003607.png',
  '/images/Group-1000003606.png',
  '/images/Group-1000003617.png',
  '/images/Group-1000003627.png',
  '/images/Group-1000003611.png',
  '/images/Group-1000003612.png',
  '/images/Group-1000003616.png',
  '/images/Group-1000003615.png',
  '/images/www.png',
  '/images/Group-1000003629.png',
];

export default function LogoTicker({ logos = DEFAULT_LOGOS }) {
  return (
    <div
      className="clients-logo"
      style={{ overflow: 'hidden', display: 'block', flexWrap: 'initial' }}
    >
      {/* Duplicate the set so the animation loops seamlessly */}
      <div className="logo-ticker-track">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="clients-logo-wraper white-background-icon" style={{ flexShrink: 0 }}>
            <img src={src} loading="lazy" alt="" className="clients-logo-icon" />
          </div>
        ))}
      </div>

      <style>{`
        .logo-ticker-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: logoTicker 35s linear infinite;
        }
        .logo-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes logoTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
