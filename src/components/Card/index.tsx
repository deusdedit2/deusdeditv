import classNames from "classnames";
import { motion, MotionProps, useMotionValue } from "framer-motion"
import Image from "next/image";
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

export function Card({ title, description, imageUrl, options, id, siteUrl, ghUrl, ...rest }: cardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const zIndex = useMotionValue(isExpanded ? 2 : 0);

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
          return () => document.removeEventListener('keydown', handleEscapeKey)
    },[])

    return (
        <>
            <motion.div {...rest} layout>
                <div className={`card`}>
                    <div className={classNames('card-content-container', { "open": isExpanded })} onClick={selectHandler}>
                        <motion.div
                            className="card-content"
                            transition={isExpanded ? openSpring : closeSpring}
                            layout={true}
                            onUpdate={checkZIndex}
                        >
                            <ImageContainer src={imageUrl} />

                            <TitleContainer isExpanded={isExpanded} title={title} />
                            <ContentContainer description={description} />

                            <CardFooter options={options} ghUrl={ghUrl} siteUrl={siteUrl} />

                        </motion.div>
                    </div>
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
