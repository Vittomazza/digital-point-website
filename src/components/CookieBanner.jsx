import React, { useEffect, useState } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-[99999]">
      <p className="text-sm text-slate-200">
        Usiamo cookie tecnici per migliorare l’esperienza del sito.
      </p>

      <div className="flex gap-3">
        <button
          onClick={rejectCookies}
          className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 transition"
        >
          Rifiuta
        </button>

        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Accetta
        </button>
      </div>
    </div>
  );
};