import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import HText from '@/shared/HText'
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton"

const benefits: Array<BenefitType>= [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of The Art Facilities",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti maiores sed porro id officia autem quod non magni blanditiis, "
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti maiores sed porro id officia autem quod non magni blanditiis, "
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti maiores sed porro id officia autem quod non magni blanditiis, "
    },
]

const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                className=""
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5, delay: 0.2}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>
                {/* Benefits */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                >
                    {benefits.map(benefit => (
                        <Benefit benefit={benefit} key={benefit.title} setSelectedPage={setSelectedPage}/>
                    ))}
                </motion.div>
                {/* Graphics and desctiption */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img className='mx-auto' src={BenefitsPageGraphic} alt="BenefitsPage-Graphic" />
                    {/* Desctiption */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-2 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount:0.5}}
                                    transition={{duration: 0.5}}
                                    variants={{
                                        hidden: {opacity: 0, x: 50},
                                        visible: {opacity: 1, x: 0}
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING {""}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5, delay: 0.2}}
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0}
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quas deleniti aliquid deserunt delectus, sint eos, blanditiis
                                aliquam, rerum explicabo suscipit facere et culpa 
                                recusandae veritatis beatae tenetur sequi earum minus.
                            </p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quas deleniti aliquid deserunt delectus, sint eos, blanditiis
                                aliquam, rerum explicabo suscipit facere et culpa 
                                recusandae veritatis beatae tenetur sequi earum minus.
                            </p>
                        </motion.div>
                        {/* Buttons */}
                        <div className="relative">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits