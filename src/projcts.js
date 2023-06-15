import { motion } from "framer-motion"

function Project() {
    const cards = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const card = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <><motion.div initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }} className="prjct-hdng" id='project'>
            Our <spam className='project'>Project</spam>

        </motion.div>
            <div className="cards">
                <div initial={{ opacity: 0, scale: 0, x: -500 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.9 }} class="card" style={{ width: '18rem' }}>
                    <motion.img initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} src="Saly-1 10.png " class="card-img-top" alt="..." />

                </div>
                <motion.div initial={{ opacity: 0, scale: 0, x: -500 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7 }} class="card" style={{ width: '18rem' }}>
                    <motion.img initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} src="Saly-1 10.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0, x: -500 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8 }} class="card" style={{ width: '18rem' }}>
                    <img src="Saly-1 10.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </motion.div>
            </div></>
    )
}
export default Project