import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { AnimatedLetters } from "./AnimatedLetters";
import { useTranslation } from "react-i18next";


export const Hero = () => {
    const { t } = useTranslation("home");
    const placeholderText = [
        { 
            type: "heading1",
            text: t("hero.top"),
            class: "hero-top" 
        },
        { 
            type: "heading1",
            text: t("hero.middle"),
            class: "hero-title" 
        },
        {
            type: "heading2",
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
        <motion.div
            ref={ref}
            className="banner"
            initial="hidden"
            animate={controls}
            viewport={{ once: true }}
            variants={container}
        >

            <div className="banner_inner">
                {placeholderText.map((item, index) => {
                    return <AnimatedLetters className={item.class} {...item} key={index} />;
                })}
            </div>
        </motion.div>
    );
};