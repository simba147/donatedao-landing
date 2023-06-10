import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>DonateDAO</title>
          <meta
            name="description"
            content="We abstract donations, so you can focus on giving."
          />
          <meta property="og:title" content="DonateDAO" />
          <meta
            property="og:description"
            content="We abstract donations, so you can focus on giving."
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">🙏 DonateDAO</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            ></nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <a
              href="https://donatedao.org/app"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view button"
            >
              Open App
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <a
              href="https://donatedao.org/app"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view1 button"
            >
              Launch App
            </a>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">🙏 DonateDAO</h1>
            <p className="home-caption">
              We abstract donations, so you can focus on giving.
            </p>
          </div>
          <div className="home-buttons">
            <a
              href="https://donatedao.org/app"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view2 button"
            >
              Give Today
            </a>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/bannerwhite-1500w.png"
            className="home-divider-image"
          />
        </section>
        <section className="home-cards">
          <div className="home-row">
            <div className="home-card">
              <div className="home-avatar">
                <img
                  alt="image"
                  src="/zksynclogo-200w.webp"
                  className="home-avatar1"
                />
              </div>
              <div className="home-main">
                <div className="home-content">
                  <h2 className="home-header1">On ZkSync</h2>
                  <p className="home-description1">
                    We use ZKSync so you can donate in crypto without worrying
                    about transactions fees.
                  </p>
                </div>
                <a
                  href="https://zksync.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-learn button"
                >
                  <span className="home-text">Learn more</span>
                  <img
                    alt="image"
                    src="/iconmonstr-arrow-25%201.svg"
                    className="home-image"
                  />
                </a>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-avatar2">
                <img
                  alt="image"
                  src="/nearprotocolgreen-200h.png"
                  className="home-avatar3"
                />
              </div>
              <div className="home-main1">
                <div className="home-content1">
                  <h2 className="home-header2">Hosted on NEAR</h2>
                  <p className="home-description2">
                    We host our front ends on NEAR&apos;s Blockchain operating
                    system, so anybody can access our donation portal.
                  </p>
                </div>
                <a
                  href="https://near.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-learn1 button"
                >
                  <span className="home-text1">Learn more</span>
                  <img
                    alt="image"
                    src="/iconmonstr-arrow-25.svg"
                    className="home-image1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading1">
                <h2 className="home-logo1">🙏 Donate DAO</h2>
                <p className="home-caption1">
                  Abstracting donations, making giving easy.
                </p>
                <a
                  href="https://donatedao.org/code"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord social button"
                >
                  <img
                    alt="image"
                    src="/github-icon-1-logo-svgrepo-com%20(1).svg"
                    className="home-image2"
                  />
                </a>
              </div>
            </div>
            <div className="home-socials"></div>
          </div>
          <a
            href="https://donatedao.org"
            target="_blank"
            rel="noreferrer noopener"
            className="home-copyright"
          >
            <span>© 2023 Donate DAO</span>
            <br></br>
          </a>
        </footer>
        <div>
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: #000000;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-view {
            color: #ffffff;
            text-decoration: none;
            background-color: #4b8ace;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-view1 {
            color: #ffffff;
            text-decoration: none;
            background-color: rgb(75, 138, 206);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: #000000;
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: #000000;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-view2 {
            color: #ffffff;
            text-decoration: none;
            background-color: #4b8ace;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #4b8ace;
          }
          .home-avatar {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #fdea6b;
          }
          .home-avatar1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header1 {
            color: rgb(255, 255, 255);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description1 {
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn {
            gap: var(--dl-space-space-unit);
            color: white;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            text-decoration: none;
            background-color: transparent;
          }
          .home-text {
            font-style: normal;
            font-weight: 500;
          }
          .home-image {
            width: 16px;
            object-fit: cover;
          }
          .home-card1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #bdf3ce;
          }
          .home-avatar2 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-avatar3 {
            width: 67px;
            height: 69px;
            object-fit: cover;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header2 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn1 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            text-decoration: none;
            background-color: transparent;
          }
          .home-text1 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image1 {
            width: 16px;
            object-fit: cover;
          }
          .home-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo1 {
            color: #000000;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption1 {
            color: #000000;
            font-size: 18px;
            line-height: 27px;
          }
          .home-discord {
            text-decoration: none;
          }
          .home-image2 {
            width: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-copyright {
            color: #000000;
            font-size: 12px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-row {
              flex-direction: column;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
              background-color: #bdf3ce;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-view1 {
              background-color: #4b8ace;
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header1 {
              font-size: 24px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card1 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #bdf3ce;
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header2 {
              font-size: 24px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-logo1 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption1 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-image2 {
              width: var(--dl-size-size-xsmall);
            }
            .home-socials {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .home-container {
              background-color: #ffffff;
            }
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              color: rgb(0, 0, 0);
              font-size: 32px;
              font-style: normal;
              font-weight: 600;
            }
            .home-view1 {
              text-decoration: none;
              background-color: rgb(75, 138, 206);
            }
            .home-header {
              color: #000000;
            }
            .home-caption {
              color: #000000;
            }
            .home-card1 {
              background-color: #bdf3ce;
            }
            .home-main2 {
              margin-bottom: 0px;
            }
            .home-logo1 {
              color: rgb(0, 0, 0);
            }
            .home-caption1 {
              color: rgb(0, 0, 0);
            }
            .home-image2 {
              width: var(--dl-size-size-xsmall);
            }
            .home-copyright {
              color: rgb(0, 0, 0);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
