
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileDebug = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed top-0 right-0 bg-black text-white p-2 z-50">
      <p>Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Width: <span id="screen-width">Calculating...</span></p>
      <p>Breakpoint: 1200px</p>
      <script dangerouslySetInnerHTML={{
        __html: `
          function updateWidth() {
            document.getElementById('screen-width').textContent = window.innerWidth + 'px';
          }
          window.addEventListener('resize', updateWidth);
          updateWidth();
        `
      }} />
    </div>
  );
};

export default MobileDebug;
