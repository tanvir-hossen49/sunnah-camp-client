import { useEffect } from "react";
const useTitle = title => {
  useEffect(() => {
    document.title = `Sunnah Camp | ${title}`;
  }, [title]);
};

export default useTitle;
