import FadeInWhenVisible from '../FadeInWhenVisible/FadeInWhenVisible'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'

const About = () => {
  return (
    <section id="About" className="text-white text-center bg-sub_color section">
      <div className="section_wrap">
        <FadeInWhenVisible>
          <h2 className="section_title">About</h2>
          <h3 className="section_subtitle">- はじめに -</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p>北川優香(きたがわ ゆかり)のポートフォリオにお越しいただき、ありがとうございます。</p>
          <p>このポートフォリオでは、私のスキルセットやこれまで手掛けたプロジェクトの一部などを紹介しています。</p>
          <p>お忙しい中恐縮ですが、ぜひご覧いただけますと幸いです。</p>
        </FadeInWhenVisible>
      </div>
      <div className="footprins_img">
        <AnimatedFootprints
          className=""
          animatedSrc="/footprints2.gif"
          alt="足跡"
        />
      </div>
    </section>
  )
}

export default About
