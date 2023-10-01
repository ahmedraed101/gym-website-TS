import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
    const {register, trigger, formState: {errors}} = useForm()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger()
        if(!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-24">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div 
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas deleniti aliquid deserunt delectus, sint eos, blanditiis
                        aliquam, rerum explicabo suscipit facere et culpa 
                        recusandae veritatis beatae tenetur sequi earum minus.
                    </p>
                </motion.div>
                {/* form and image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 bassis-1/2 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form target="_blank" onSubmit={onSubmit} id="contactform" action="https://formsubmit.io/send/946377b2-8923-4358-a2f7-6648de4b8c2b" method="POST">
                            <input 
                                className={inputStyles} type="text" id="name" placeholder="NAME" {...register("name", {
                                    required: true,
                                    maxLength: 100
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max Lenght is 100 char."}
                                </p>
                            )}
                            <input  className={inputStyles} 
                                type="email" id="email"
                                placeholder="EMAIL"
                                {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === 'required' && "This field is required."}
                                    {errors.email.type === 'pattern' && "invalid email address"}
                                </p>
                            )}
                            <textarea className={inputStyles}  id="message" rows={4}
                                placeholder="MESSAGE"
                                {...register("message", {required: true, maxLength: 2000})}
                                
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === 'required' && "This field is required."}
                                    {errors.message.type === 'maxLength' && "Max Lenght is 2000 char."}
                                </p>
                            )}

                            <input name="_formsubmit_id" type="text" style={{display:"none"}} />

                            <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ dealy:0.2 ,duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-20 before:z-[-1]">
                            <img
                                className="w-full"
                                src={ContactUsPageGraphic} alt="contactUs-page-graphic" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs