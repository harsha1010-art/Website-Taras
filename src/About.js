import { motion } from "framer-motion"


function About() {


    return (
        <div className="aboutus" >


            <motion.h3 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}


                className="heading2" id='about-us'>About<span className='us'>Us</span></motion.h3>
            <motion.p initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }} className='about-prg'>At Taras Company, we are dedicated to delivering innovative solutions that drive success. With expertise in web development, design, and digital marketing, we empower businesses with tailored strategies to achieve tangible results. Our collaborative approach and commitment to excellence ensure client satisfaction and long-term partnerships. Experience the difference with Taras Company
                .</motion.p>
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ top: '900px' }} src="Group 2.png" alt="img-about" className="jugling" id='about' />
        </div>
    )
}
export default About