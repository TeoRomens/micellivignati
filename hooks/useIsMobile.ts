import * as React from 'react';

const useIsMobile = (mobileScreenSize = 640) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      console.error('matchMedia not supported by browser or window is undefined!');
      return;
    }

    const mediaListener = window.matchMedia(`(max-width: ${mobileScreenSize}px)`);
    setIsMobile(mediaListener.matches);

    const checkIsMobile = (event: { matches: boolean }) => {
      setIsMobile(event.matches);
    };

    // try catch used to fallback for browser compatibility
    try {
      mediaListener.addEventListener('change', checkIsMobile);
    } catch {
      mediaListener.addListener(checkIsMobile);
    }

    return () => {
      try {
        mediaListener.removeEventListener('change', checkIsMobile);
      } catch {
        mediaListener.removeListener(checkIsMobile);
      }
    };
  }, [mobileScreenSize]);

  return isMobile;
};

export default useIsMobile;
