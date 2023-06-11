import { useEffect } from "react";

const RedirectLinks = {
  "/code": "https://github.com/Spoyte/DonateDAO",
  "/app": "https://test.near.social/#/donating.testnet/widget/DonateTest.main",
  "/landing": "https://github.com/codingshot/donatedao-landing",
  "/social": "https://donating.near.social",
  "/demo": "https://youtu.be/EXrpRyvAINc",


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
