import { useEffect, useRef, useState } from 'react';

const useInViewAnimation = () => {
    const textRef = useRef(null);
    const boxRef = useRef(null);
    const [textVisible, setTextVisible] = useState(false);
    const [boxVisible, setBoxVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === textRef.current) {
                            setTextVisible(true);
                        } else if (entry.target === boxRef.current) {
                            setBoxVisible(true);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (textRef.current) observer.observe(textRef.current);
        if (boxRef.current) observer.observe(boxRef.current);

        return () => observer.disconnect();
    }, []);

    return { textRef, boxRef, textVisible, boxVisible };
};

export default useInViewAnimation;
