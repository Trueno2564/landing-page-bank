import React, { Children, useEffect, useRef } from 'react'
import { MotionTransitionProps } from './MotionTransition.types'
import { useAnimation, useInView, motion } from 'framer-motion'
import { fadeIn } from '@/utils/transitions'

function MotionTransition( props:MotionTransitionProps ) {
    const {children, className} = props
    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const mainControl = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControl.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={fadeIn()}
                initial='hidden'
                animate={mainControl}
                exit='hidden'
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default MotionTransition
