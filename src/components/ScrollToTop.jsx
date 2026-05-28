import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const id = sessionStorage.getItem("scrollTo");
    console.log("ScrollToTop - pathname:", location.pathname, "| id:", id);
    if (id) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => {
        const el = document.getElementById(id);
        console.log("elemento trovato:", el);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;