import Image from 'next/image'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'
import * as motion from 'framer-motion/client'

const Top = () => {
  const name = 'Yukari Kitagawa';
  const portfolio = 'Portfolio';
  const text = '成長を楽しみ続ける。';

  // アニメーション生成関数
  const createAnimation = (wordArray: string, initialDelay = 0) =>
    wordArray.split('').map((char, index) => {
      return (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + index * 0.05 }}
          key={`${char}-${index}`}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char} {/* スペースを明示的に表示 */}
        </motion.span>
      );
    });

  return (
    <section className="max-w-5xl mx-auto relative py-20 px-4">
      <div className="flex flex-col items-start">
        <h1 className="md:text-5xl text-4xl leading-[48px] font-bold">
          {createAnimation(name)}
          <br />
          {createAnimation(portfolio, name.length * 0.05)}
        </h1>
      </div>
      <p className="md:text-3xl text-2xl md:absolute md:bottom-[60%] md:right-0 my-2">
        {createAnimation(text, (name.length + portfolio.length) * 0.05)}
      </p>
      <div className="relative max-w-2xl mx-auto">
        <Image
          src="/main-dog.svg"
          alt="Lion illustration"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <AnimatedFootprints
        className="absolute bottom-[-80px] right-4 z-20"
        animatedSrc="/footprints1.gif"
        alt="足跡"
      />
    </section>
  );
};

export default Top;
