import { motion } from "framer-motion";


interface LettersProps {
    text: string;
    className?: string;
}

export function AnimatedLetters({ text, className }: LettersProps) {
    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    const splitWords = text.split(" ");

    const words: any[] = [];

    for (const item of splitWords) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    return (
        <h1 className={className}>
            {words.map((word, index) => {
                return (
                    <span className="row-title" key={index}>
                        {words[index].flat().map((element: string, index: number) => {
                            return (
                                <span
                                    className="row-letters"
                                    key={index}
                                >
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        variants={item}
                                        className="row-letter"
                                    >
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </span>
                );
            })}
        </h1>
    );
};