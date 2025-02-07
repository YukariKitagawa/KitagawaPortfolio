import FadeInWhenVisible from '../FadeInWhenVisible/FadeInWhenVisible'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'

// 下線用スタイル
const inlineClassName = "relative inline bg-gradient-to-t from-marker_color to-transparent bg-[length:100%_12px] bg-no-repeat bg-bottom"

const Future = () => {
  return (
    <section id="Future" className="bg-main_color section">
      <div className="section_wrap">
        <FadeInWhenVisible>
          <h2 className="section_title">Future</h2>
          <h3 className="section_subtitle">- 今後の展望 -</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <div className="mb-8">
            今後は、技術力をさらに高め、<span className={inlineClassName}>チームを技術的にリードできるエンジニア</span>を目指しています。
          </div>
          <div>
            これまでは受託開発の現場で、<span className={inlineClassName}>限られた時間の中で効率的に開発を進めるスキル</span>を磨いてきました。
          </div>
          <div>
            しかし、今後はコードの質や設計の持続可能性を意識し、リファクタリングやコードレビューを通じて、<span className={inlineClassName}>プロダクトの成長を支える開発</span>に携わりたいと考えています。
          </div>
          <div className="mb-8">
            そのため、現在は<span className={inlineClassName}>中長期的にプロダクトの価値を高めることができる環境</span>を求め、自社開発企業を中心に転職活動を進めています。
          </div>
          <div>
            また、AIや技術の進化が加速する中で、エンジニアとしての市場価値を高めるためには、<span className={inlineClassName}>自分ならではの強みを確立することが不可欠</span>だと感じています。
          </div>
          <div className="mb-8">
            特に、パフォーマンス最適化や大規模アプリケーションの設計といった分野で専門性を深め、<span className={inlineClassName}>ユーザー体験を向上させる開発</span>に貢献したいと考えています。
          </div>
          <div>
            今後も、技術の探求を続けながら、<span className={inlineClassName}>より価値のあるプロダクトを生み出せるエンジニア</span>を目指していきます。
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="footprins_img">
        <AnimatedFootprints
          className=""
          animatedSrc="/footprints6.gif"
          alt="足跡"
        />
      </div>
    </section>
  )
}

export default Future
