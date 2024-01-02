import { useEffect, useState } from "react";
/**
 * Custom React hook that checks if the viewport width is less than a given breakpoint.
 * The default breakpoint value is 700 pixels, indicating a mobile device width.
 * It uses the `useState` hook to establish the `isMobile` state and the `useEffect` hook
 * to listen for window resize events, which update the `isMobile` state accordingly.
 *
 * @param {number} [breakpoint=700] - The width in pixels below which `isMobile` will be set to `true`.
 * @returns {boolean} The state `isMobile`, indicating whether the viewport is considered mobile-sized.
 */

const useIsMobile = (breakpoint = 700) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};
export default useIsMobile;
