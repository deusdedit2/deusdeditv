import { motion } from "framer-motion"
import { closeSpring } from "."

interface ImageProps {
    src: string;
    alt?: string;
}

export const ImageContainer = ({ src, alt }: ImageProps) => {

    return (
        <motion.div
            className="card-image-container">
            <motion.img
            className="card-image"
            width={300}
            height={300}
            layout
            src={src}
            initial={false}
            transition={closeSpring}
            loading="lazy"
        />
            {/* <motion.img src="https://media.graphassets.com/HE1ToT38RjQL3EKv9w1r" alt="" width={400} height={400} /> */}
        </motion.div>
    )
}