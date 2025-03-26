import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${12 * 2}px)`,
        top: 12,
        scale,
        position: 'sticky',
        zIndex: 0,
        overflow: 'hidden',
      }}
      ref={targetRef}
    >
      <motion.div
        style={{
          opacity,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '17, 24, 39, 0.7',
        }}
      />
    </motion.div>
  );
};

export default StickyImage;
