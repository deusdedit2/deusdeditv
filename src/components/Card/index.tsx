import classNames from "classnames";
import { motion, MotionProps, useAnimationControls, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react";
import { CardFooter, FooterProps } from "./CardFooter";
import { ContentContainer } from "./ContentContainer";
import { ImageContainer } from "./ImageContainer";
import { TitleContainer } from "./TitleContainer";


export interface cardProps extends MotionProps, FooterProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };
const plus = {
    hidden: {
        top: "200%",
        transform: "rotateZ(0)",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.05 }
    },
    visible: {
        top: "38%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.05 }
    },
    open: {
        top: "24px",
        transform: 'rotateZ(45deg)',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.05 }
    }
};

export function Card({ title, description, imageUrl, options, id, siteUrl, ghUrl, ...rest }: cardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const zIndex = useMotionValue(isExpanded ? 2 : 0);
    const controls = useAnimationControls()

    function checkZIndex(latest: any) {
        if (isExpanded) {
            zIndex.set(2);
        } else if (!isExpanded && latest.scaleX < 1.01) {
            zIndex.set(0);
        }
    }

    const selectHandler = () => {
        !isExpanded && setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
            if (event.code === 'Escape') {
                setIsExpanded(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        isExpanded ? controls.start("open") : controls.start("hidden")
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [isExpanded,controls])

    return (
        <>
            <motion.div {...rest} layout>
                <div className={`card`}>
                    <motion.div className={classNames('card-content-container', { "open": isExpanded })} onClick={selectHandler} onHoverStart={() => !isExpanded && controls.start("visible")} onHoverEnd={() => !isExpanded && controls.start("hidden")}>
                        <motion.div
                            className="card-content"
                            transition={isExpanded ? openSpring : closeSpring}
                            layout={true}
                            onUpdate={checkZIndex}
                        >
                            <ImageContainer src={imageUrl} />

                            <TitleContainer isExpanded={isExpanded} title={title} />
                            <motion.div aria-label="Close Card" onClick={() => setIsExpanded(false)} className={classNames("plus", { 'open': isExpanded })} variants={plus} animate={controls}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    fill="#fff"
                                    enableBackground="new 0 0 512 512"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path d="M289.391 222.609L289.391 0 222.609 0 222.609 222.609 0 222.609 0 289.391 222.609 289.391 222.609 512 289.391 512 289.391 289.391 512 289.391 512 222.609z"></path>
                                </svg>
                            </motion.div>
                            <ContentContainer description={description} />

                            <CardFooter options={options} ghUrl={ghUrl} siteUrl={siteUrl} />

                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <Overlay isExpanded={isExpanded} onClick={() => setIsExpanded(false)} />
        </>
    )
}

const Overlay = ({ isExpanded, onClick }: any) => (
    <motion.div
        initial={false}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        className="overlay"
        onClick={onClick}
    >
    </motion.div>
);
