import { motion } from "framer-motion"
export default function Contact() {
    return (
        <div className="contactform">
            < motion.h1 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} className="ContactUs">Contact <span>Us</span></motion.h1>

            <div className="contact-input" id='contact'>
                <motion.img initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }} src="Group 18.png" alt="image ppl" className="img-ppl" />
                <form action="Submit" className="field" >
                    <motion.input initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} type="text" className="Name" placeholder="Full Name" />
                    <motion.input initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} type="email" className="Mail" placeholder="Mail ID" />
                    <motion.textarea initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }} name="contenr" className="message" rows={4} cols={40} placeholder="Write your Message Here..." />
                    <motion.button initial={{ opacity: 0, scale: 0, x: -500 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2 }} whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }} whileTap={{ scale: 0.8 }} className="Send from-left">Send</motion.button>

                </form>



            </div>
        </div>
    )
}