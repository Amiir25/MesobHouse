import React, { useEffect, useState } from "react";

const Spinner = ({ text = "Loading...", timer = 2000 }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsOpen(false);
    }, timer)

    return () => clearTimeout(loadingTimer); 
  }, [])

  return (
    <>
      {isOpen && (
        <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="border border-blue-700 border-t-transparent w-8 h-8 rounded-full animate-spin"></div>
            <p>{text}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Spinner;
