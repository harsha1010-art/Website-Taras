import { motion } from "framer-motion"


function About() {


    return (
        <div className="aboutus" >


            <motion.h3 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}


                className="heading2" id='about-us'>About<span className='us'>Us</span></motion.h3>
            <motion.p initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} className='about-prg'>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.
                .</motion.p>
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} src="Group 2.png" alt="img-about" className="jugling" id='about' />
        </div>
    )
}
export default About