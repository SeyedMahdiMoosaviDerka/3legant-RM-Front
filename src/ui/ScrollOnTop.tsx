import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollOnTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [pathname]);

  return null;
}
