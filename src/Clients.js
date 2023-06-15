import { motion } from "framer-motion"
function Clients() {
    return (
        <><motion.div initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }} className="clnt-heading">
            Our <span>Clients</span>
        </motion.div> <motion.img initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }} src="Indian Man.png" alt="" className="avatar" style={{ zIndex: 0 }} />
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} src="Black Man.png" alt="" className="avatar1" style={{ zIndex: 0 }} />
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} src="College Student.png" alt="" className="avatar2" style={{ zIndex: 0 }} />
            <div className="clnt-cards">

                <div class="card11" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} class="card-title">Ramesh Singh</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} src="Group 13.png" alt="" className="star" />

                        <hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} class="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</motion.p>

                    </div>
                </div>
                <div class="card2" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} class="card-title">Robert</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} src="Group 13.png" alt="" className="star1" /><hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} class="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</motion.p>

                    </div>
                </div>
                <div class="card3" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} class="card-title">Suresh</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} src="Group 13.png" alt="" className="star2" /><hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} class="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</motion.p>

                    </div>
                </div>

            </div></>
    )
}
export default Clients