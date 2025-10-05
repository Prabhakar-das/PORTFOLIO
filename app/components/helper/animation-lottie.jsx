"use client"

import dynamic from 'next/dynamic';

// Dynamically load lottie-react on the client only to prevent SSR from
// executing browser-only code (lottie references `document` internally).
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;