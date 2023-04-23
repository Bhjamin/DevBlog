import { type NextPage } from "next";
import Layout from "~/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { array } from "zod";

const Home: NextPage = () => {
  const squares = Array(50).fill("");

  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 95) + 4;
    return randomNum;
  };

  const getRandomDelay = () => {
    let number = Math.floor(Math.random() * 75) + 1;

    number = number / 5;

    return number;
  };

  const getRandomSize = () => {
    const size = Math.floor(Math.random() * 20) + 5

    return size
  }

  const getRandomColor = () => {
    const randNum = Math.round(Math.random()) + 1

    if(randNum === 1){
      return 'bg-primary'
    } else {
      return 'bg-secondary'
    }
  }

  return (
    <>
      <Layout fullWidth className="bg-base-100">
        <div className="flex h-full flex-col items-center bg-base-100">
          <h1 className=" z-10 m-4 text-3xl text-base-content lg:text-6xl">
            Welcome to the{" "}
            <span className="inline-flex font-medium text-primary">
              Dev Blog
            </span>
          </h1>

          <span className=" z-1 absolute -bottom-3 h-6 w-6 rotate-45 bg-base-100 lg:-bottom-5 lg:h-10 lg:w-10" />
        </div>
        {squares.map((square, i) => {
          const randX = getRandomNum();
          const randomDelay = getRandomDelay();
          const randomSize = getRandomSize()
          const randomColor = getRandomColor()
          return (
            <motion.div
            style={{width: `${randomSize}px`, height: `${randomSize}px`}}
              key={i}
              className={`z-1 absolute bottom-0 ${randomColor} opacity-0`}
              initial={{ y: 50, x: `${randX}vw` }}
              animate={{
                y: -1000,
                opacity: 0.75,
                x: `${randX}vw`,
                rotate: 720,
              }}
              transition={{ duration: `${randomSize}`, repeat: Infinity, delay: randomDelay }}
            ></motion.div>
          );
        })}
      </Layout>
    </>
  );
};

export default Home;
