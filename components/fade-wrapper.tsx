import React from 'react';

interface FadeWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeWrapper({ children, delay = 0 }: FadeWrapperProps) {
  return (
    <div
      data-aos="fade"
      data-aos-offset="0"
      data-aos-duration="300"
      data-aos-easing="ease-in-out-sine"
      data-aos-delay={delay}
      className="aos-animate"
    >
      {children}
    </div>
  );
}
