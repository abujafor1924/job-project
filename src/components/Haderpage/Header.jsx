import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const letters = ["A", "S", "B", "D", "E", "S", "I", "G", "N"];
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [letters.length]);

  const springProps = useSpring({
    from: { transform: "translate(0px, 0px)" },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "translate(0px, 0px)" });
        await next({ transform: "translate(0px, -100px)" });
        await next({ transform: "translate(-100px,0px)" });
        await next({ transform: "translate(0px,0px)" });
      }
    },
  });

  return (
    <div className="md:h-[90vh] h-[50vh] overflow-hidden bg-img">
      <div className="relative ">
        <div className="text-center  text-white md:mt-32 mt-44 relative ">
          <animated.div
            className="text-5xl font-bold md:mt-48 mt-28 "
            style={springProps}
          >
            {letters[currentLetterIndex]}
          </animated.div>
        </div>
        <div className="text-center mt-4 text-white">
          <h1 className="font-bold text-2xl">ASB DESIGN</h1>
          <p className="w-56 mx-auto ">
            Focus. Learn. Excel. Unlock your potential in photography and
            design!
          </p>
        </div>

        <div className="md:w-72 h-28 w-24  bg-black absolute -top-28 ml-[40%] "></div>
      </div>
      <div className="md:w-72 w-24 md:h-24 h-32 bg-black absolute md:top-40 top-24 md:ml-[26%] ml-[20%]"></div>
    </div>
  );
};

export default Header;
