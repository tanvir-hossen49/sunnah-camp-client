import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `Sunnah Camp | ${title}`;

    return () => {
      document.title = "Sunnah Camp";
    };
  }, [title]);
};

export default useTitle;
