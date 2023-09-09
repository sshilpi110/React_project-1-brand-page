 const HeroSection=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST WE ARE HERE TO HELP WITH OUR SHOES 
                YOUR FEET DESERVE THE BEST WE ARE HERE TO HELP WITH OUR SHOES 
                </p>
                <div className="hero-btn">
                    <button className="btn1">Shop Now</button>

                 <button  className="btn2">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                   <img src="/Images/amazon-png.png" alt="amazon-icon"  width="70px"/>
                   <img src="/Images/flipcart-png.jpg" alt="flipcart-icon" width="70px" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/Images/red-shoe.jpg" alt="red-shoe"  width="600px"/>
            </div>
        </main>
    )
 }
 export default  HeroSection