import React, {useState, useRef} from 'react'
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../style.js";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc"
import {slideIn} from "../utils/motion.js";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        messages: '',
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
    }
    const handleSubmit = (event) => {
    }

    return (
        <div className={'xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'}>
            <motion.div
                variants={slideIn('left', 'tween', .2, 1)}
                className={'flex-[0.75] bg-black-100 p-8 rounded-2xl'}
            >
                <p className={styles.sectionSubText}>Get in Touch</p>
                <h3 className={styles.heroHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className={'mt-12 flex flex-col gap-8'}
                >
                    <label className={'flex flex-col'}>
                        <span className={'text-white font-medium mb-4'}>Your Name</span>
                        <input
                            type={'text'}
                            name={'name'}
                            value={form.name}
                            onChange={handleChange}
                            placeholder={"What's your name ?"}
                            className={'bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
                        />
                    </label>
                    <label className={'flex flex-col'}>
                        <span className={'text-white font-medium mb-4'}>Your Email</span>
                        <input
                            type={'email'}
                            name={'email'}
                            value={form.name}
                            onChange={handleChange}
                            placeholder={"What's your email ?"}
                            className={'bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
                        />
                    </label>
                    <label className={'flex flex-col'}>
                        <span className={'text-white font-medium mb-4'}>Your Name</span>
                        <input
                            type={'text'}
                            name={'name'}
                            value={form.name}
                            onChange={handleChange}
                            placeholder={"What's your name ?"}
                            className={'bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
                        />
                    </label>
                </form>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')