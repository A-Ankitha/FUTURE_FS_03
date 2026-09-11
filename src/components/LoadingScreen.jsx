import { useEffect, useState } from 'react';
import SakuraPetals from './SakuraPetals';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;

    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      const nextProgress = Math.min(
        100,
        Math.round((current / steps) * 100)
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          setVisible(false);

          setTimeout(() => {
            onComplete?.();
          }, 650);
        }, 250);
      }
    }, interval);

    const fallback = setTimeout(() => {
      clearInterval(timer);
      setVisible(false);

      setTimeout(() => {
        onComplete?.();
      }, 650);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${
        !visible ? 'fade-out' : ''
      }`}
      aria-hidden={!visible}
    >
      <div className="loading-atmosphere" />

      <SakuraPetals count={16} zIndex={2} />

      <div className="loading-rings">
        <span />
        <span />
      </div>

      <div className="loading-content">
        <div className="loading-kanji animate-scale-in">
          頂
        </div>

        <div className="loading-brand animate-fade-in-up">
          <div className="loading-brand-name">
            ITADAKI
          </div>

          <div className="loading-brand-subtitle">
            RAMEN SHOP
          </div>
        </div>

        <div className="loading-progress animate-fade-in-up">
          <div className="loading-progress-track">
            <div
              className="loading-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span>{progress}%</span>
        </div>

        <p className="loading-tagline animate-fade-in-up">
          Good Food Brings Good People Together
        </p>

        <p className="loading-japanese">
          いただきます
        </p>
      </div>
    </div>
  );
}