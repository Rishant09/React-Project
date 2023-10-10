const Hero = () => {
    return (
    <main className="hero contianer">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
        <button>Shop Now</button>
        <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
        <p>Also Availble on</p>
        <div className="brand-icon">
            <img  src="/Image/amazon.png" alt="amazon logo"/>
            <img  src="/Image/flipkart.png" alt="flipkart logo"/>
        </div>
        </div>
      </div>
      <div className="hero-Image">
        <img src="/Image/shoe_image.png" alt="hero-image"/>
      </div>
    </main>
    );
}
export default Hero;




