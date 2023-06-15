import { motion } from "framer-motion"
function Service() {
    return (
        <div className='main1'>
            <motion.h1 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} className='service-head' id='service'>Our <span>services</span></motion.h1>
            < motion.div initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }} className="servece-slide">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" id='service'>
                            <img src="Rectanglemon.png" alt="" className="monitor" />
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
            </motion.div>
        </div>
    )
}
export default Service