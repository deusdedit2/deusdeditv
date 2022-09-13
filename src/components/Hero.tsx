import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { AnimatedLetters } from "./AnimatedLetters";
import { useTranslation } from "react-i18next";


export const Hero = () => {
    const { t } = useTranslation("home");
    const placeholderText = [
        { 
            as: "h1",
            text: t("hero.top"),
            class: "hero-top" 
        },
        { 
            as: "h2",
            text: t("hero.middle"),
            class: "hero-title" 
        },
        {
            as: "h3",
            text: t("hero.bottom"),
            class: "hero-bottom"
        }
    ];


    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    const controls = useAnimationControls()
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        isInView && (
            setTimeout(() => {
                controls.start("visible")
            }, 3500))
    }, [controls, isInView])

    return (
        <motion.section
            ref={ref}
            className="banner"
            initial="hidden"
            animate={controls}
            viewport={{ once: true }}
            variants={container}
        >

            <motion.div className="banner_inner">
                {placeholderText.map((item, index) => {
                    return <AnimatedLetters className={item.class} {...item} key={index} />;
                })}
            </motion.div>
        </motion.section>
    )
};