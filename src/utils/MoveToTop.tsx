import { useEffect } from "react";

const MoveToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <></>;
};

export default MoveToTop;
