import Image from 'next/image'
import FadeInWhenVisible from '../FadeInWhenVisible/FadeInWhenVisible'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'

interface Like {
  id: number
  title: string
  image: string
  description: string
}

const likes: Like[] = [
  {
    id: 1,
    title: '食べること',
    description: '和食、メキシカン、中華、韓国料理など基本的になんでも好きです。外食時に美味しかった料理を、よく家で再現しています。',
    image: '/icon-cookie.svg',
  },
  {
    id: 2,
    title: '漫画・映像鑑賞',
    description: '漫画、アニメ、ドラマ、映画を観ることが好きです。ほのぼのした日常ものやホラーなど、いろいろなジャンルを観ます。',
    image: '/icon-monitor-play.svg',
  },
  {
    id: 3,
    title: '犬',
    description: '20年以上犬と暮らしていたため犬が大好きです。最近姉がビションフリーゼをお迎えしたためよく会いに行っています。',
    image: '/icon-dog.svg',
  },
  {
    id: 4,
    title: '運動',
    description: '動くことが好きで、家の中で動画を見ながら筋トレやストレッチをしています。他にも登山やボルダリング、ヨガなども好きです。',
    image: '/icon-dumbbell.svg',
  },
  {
    id: 5,
    title: '謎解き',
    description: 'ボードゲームやリアル脱出ゲームを友人とよくやります。最近一番のおすすめは「HUNTER×HUNTER」のリアル脱出ゲームです。',
    image: '/icon-file-question.svg',
  },
  {
    id: 6,
    title: 'ファッション',
    description: '目に見えるものが好きなので、洋服の人気ランキングや購入品紹介動画などをよく見ています。',
    image: '/icon-shirt.svg',
  },
]

const Like = () => {
  return (
    <section id="Like" className="bg-bg_color1 section">
      <div className="section_wrap">
        <FadeInWhenVisible>
          <h2 className="section_title">Like</h2>
          <h3 className="section_subtitle">- 好きなもの・趣味 -</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <div className="bg-white rounded-lg p-4 flex flex-wrap order-solid border border-sub_color">
            {likes.map((like) => (
              <div key={like.id} className="md:w-1/3 w-full flex flex-col gap-2 md:p-4 py-4">
                <p className="text-center text-lg font-bold">{like.title}</p>
                <div className="bg-accent_color rounded-lg p-6">
                  <Image
                    className="mx-auto"
                    src={like.image}
                    alt={like.title}
                    width={72}
                    height={72}
                  />
                </div>
                <p>{like.description}</p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="footprins_img footprins_img_right">
        <AnimatedFootprints
          className=""
          animatedSrc="/footprints3.gif"
          alt="足跡"
        />
      </div>
    </section>
  )
}

export default Like
