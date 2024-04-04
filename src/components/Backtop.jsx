import React, { useState } from "react";
import { Uparrow } from "./Icon";
const Backtop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center w-[45px] h-[45px] bg-purple-600 rounded-full items-center p-2  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300   hover:shadow-[1px_1px_1px_1px_purple-600] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <Uparrow/>
            </button>
        </div>
    );
};

export default Backtop;