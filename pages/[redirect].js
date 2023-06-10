import { useEffect } from "react";

const RedirectLinks = {
  "/code": "https://github.com/Spoyte/DonateDAO",


};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
