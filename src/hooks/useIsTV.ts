"use client";

import { useState, useEffect } from "react";

export function useIsTV() {
  const [isTV, setIsTV] = useState(false);

  useEffect(() => {
    const checkIsTV = () => {
      if (typeof window === "undefined") return false;

      const ua = window.navigator.userAgent.toLowerCase();
      const isSmartTV =
        /webos|tizen|smarttv|googlebot|tv|netcast|viera|bravia|googletv|hisense|vidaa/i.test(
          ua
        );
      
      // Also check for low-end hardware (typical of older TVs)
      const isLowEnd = window.navigator.hardwareConcurrency ? window.navigator.hardwareConcurrency <= 2 : false;

      return isSmartTV || isLowEnd;
    };

    setIsTV(checkIsTV());
  }, []);

  return isTV;
}
