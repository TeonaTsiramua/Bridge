import { motion } from 'framer-motion';
import { HeroImg, HeroText } from '../../styles/MainStyles';
import bg1 from '../../assets/bg-4.jpg';

export default function Hero() {
  return (
    <div>
      <HeroImg
        as={motion.img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={bg1}
        alt=''
      />
      <HeroText>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          BRIDGE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Global Vehicle Trader
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </motion.p>
      </HeroText>
    </div>
  );
}
