import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Index({
    children,
}:{
    children: React.ReactNode
}) {
    const magnetic = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(magnetic.current, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.2, // Adjust the duration as needed
                ease: "elastic.out(1, 0.3)",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(magnetic.current, {
                x: 0,
                y: 0,
                duration: 0.2, // Adjust the duration as needed
                ease: "elastic.out(1, 0.3)",
            });
        };

        magnetic.current?.addEventListener("mousemove", handleMouseMove);
        magnetic.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            // Cleanup event listeners when the component unmounts
            magnetic.current?.removeEventListener("mousemove", handleMouseMove);
            magnetic.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
    return (
        <div ref={magnetic} className="relative">
            {children}
        </div>
    )
}
