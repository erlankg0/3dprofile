import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../style.js";
import {github} from "../assets"
import {SectionWrapper} from "../hoc";
import {projects} from "../contstans/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import * as PropTypes from "prop-types";

function ProjectCard({index, key, name, description, tags, image, source_code}) {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className={'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'}
            >
                <div className={'relative w-full h-[230px]'}>
                    <img src={image} alt={name} className={'w-full h-full object-cover rounded-2xl'}/>
                    <div className={'absolute inset-0 flex justify-end m-3 card-img_hover'}>
                        <div onClick={() => window.open(source_code, '_blank')}
                             className={'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'}>
                            <img
                                src={github}
                                alt={'github'}
                                className={'w-1/2 h-1/2 object-contain'}
                            />
                        </div>
                    </div>
                </div>
                <div className={'mt-5'}>
                    <h3 className={'text-white font-bold text-[24px]'}>{name}</h3>
                    <p className={'mt-2 text-secondary text-[14px]'}>{description}</p>
                    <div className={'mt-4 flex flex-wrap gap-2'}>
                        {tags.map((tag) => (<p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

ProjectCard.propTypes = {index: PropTypes.number};
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.heroHeadText}>Projects.</h2>
            </motion.div>

            <div className={'w-full flex'}>
                <motion.p className={'mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]'}>
                    Following projects showcases my skills and experience through real-world examples of my work.
                    Each project is briefly described withh links to code repositories anda live demo in it. IT reflects
                    my ability to solve complex problems,
                    work with different technologies and manage projects effectively.
                </motion.p>
            </div>

            <div className={'mt-20 flex flex-wrap gap-7 '}>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} index={index}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, 'works')