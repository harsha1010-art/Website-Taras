function Service() {
    return (
        <div className='main1'>
            <h1 className='service-head' id='service'>Our <span>services</span></h1>
        <div className="servece-slide">
            
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" id ='service'>
                        <img src="Rectangle.png" alt="" className="monitor" />
                        <div className="subcomp"> <h1 className='slide1'>Web Development</h1>
                            <p className='para1'>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.
                            </p></div>

                    </div>
                    <div class="carousel-item">
                        <img src="Saly-1 10.png" alt="" className="monitor1" />
                        <div className="subcomp"> <h1 className='slide1'>PPT Presentation</h1>
                            <p className='para1'>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.
                            </p></div>
                    </div>
                    <div class="carousel-item">
                        <img src="Rectangle1.png" alt="" className="monitor" />
                        <div className="subcomp"> <h1 className='slide1'>App Development</h1>
                            <p className='para1'>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.
                            </p></div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

                    <img src="🦆 icon _chevron right_.png" alt="" className="arrow-rgt" />
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <img src="Vector.png" alt="" className="arrow-rgt" />

                </button>
            </div>
        </div>
        </div>
    )
}
export default Service