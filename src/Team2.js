import { motion } from "framer-motion"
function Team2() {
    return (
        <div className="ourteam1">
            <motion.div initial={{ opacity: 0, scale: 0, x: -500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }} class="card-team1" style={{ width: '18rem' }}>
                <div class="card-body">
                    <motion.h5 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} class="card-title2">Rohit J Sharma</motion.h5>
                    <motion.h6 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} class="card-subtitle2 mb-2 text-muted">UI/UX developer, Software Developer </motion.h6>
                    <motion.p initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3 }} class="card-text2">Personal Use is any use that does not meet the criteria for Commercial Use. Personal, or Non-commercial <br />
                        <img src="Saly-17 1.png" alt="sally" className="sally2" />
                    </motion.p>

                </div>
            </motion.div>

        </div>
    )
}
export default Team2