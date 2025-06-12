import React from "react";
import "./Content.css";
import VidalyticsVideo from "./VidalyticsVideo";
import YotpoReview from "./YotpoReview";

const Content = ({ buttonText = "Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!" }) => {
  return (
    <>
      <section className="content">
        <header className="header">
          <p className="headertext">
            <b><em>Insanely Comfy Holster</em></b> Makes Any Semi-Auto (Plus 2 Extra Mags) 
            <b><em> Disappear In Plain Sight</em></b> Even If You Wear 
            <u>Nothing But Gym Shorts, Sweatpants and T-Shirts!</u>
          </p>
        </header>
        <div className="video-container">
          <VidalyticsVideo />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div>
          <img 
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop4.webp?v=1729102312" 
            alt="heroimage" 
            className="hero-image" 
          />
        </div>
        <div className="header pad1">
          <span className="headertext yellow">
            175,232 Americans Have Trusted Us to Give Them The MOST Comfortable Holster They’ve Ever Worn
          </span>
        </div>
        <article className="bodymsg">
          <p>The VNSH Holster is rapidly becoming one of America's best-selling holsters… <b>and for good reason too!</b></p>
          <p>It’s GUARANTEED to be <b>the most comfortable holster</b> you’ll ever wear - or you get 100% of your money back! 
             Try it for 60 days, and if you don’t like it for any reason, let us know and we’ll give you every penny back.
          </p>
        </article>
        <div>
          <img 
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guaranteed_bannerDesktop.webp?v=1729109678" 
            alt="heroimage" 
            className="hero-image" 
          />
        </div>
        <article className="bodymsg">
          <p>The reason for it’s insane comfort? The materials. We combined the rugged <b>1000D Cordura</b> with a stretchy <b>‘yoga pant’</b> fabric that is not only built to last for years, but also feels like silk boxers on your skin.</p>
          <p>Even better, these sweat-wicking materials do <u>NOT</u> retain sweat or odor, so you can <b>carry comfortably all day</b> without getting sticky or slimy.</p>
          <p>You can wear this holster with <b>ANY</b> clothing. That’s because our specially designed, built in waistband simply goes around your torso like a belt, and doesn’t need hooks, clips, or a tactical belt to wear.</p>
          <p>This means you can wear this holster with a business suit, sweat suit, or swim suit… <em>or even just your birthday suit.</em></p>
          <p>But where it really excels <b><em>(and where most other holsters fail miserably)</em></b> is that it helps you carry anywhere while having the ability to carry 2 additional mags.</p>
          <p>Perhaps the best thing of all is this holster will fit 99% of all brands, types, and styles of semi autos.</p>
          <p>And our unique design ensures your concealed carry device <b>“Vanishes”</b> against your body, making it virtually invisible to others.</p>
          <p>It’s why we named it the <b><u>VNSH Holster!</u></b></p>
          <p>How many other holsters can do all that? <b>The answer is ZERO.</b></p>
        </article>
        <div>
          <img 
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop3.webp?v=1729102182" 
            alt="heroimage" 
            className="hero-image" 
          />
        </div>
        <article className="bodymsg">
          <p>Now it’s obvious we’d be saying this. But take a look at what some of our thousands upon thousands of customers say about our holster.</p>
        </article>
        <div className="yotpo">
          <YotpoReview />
        </div>
      </section>
    </>
  );
};

export default Content;
