'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import FadeInWhenVisible from '../FadeInWhenVisible/FadeInWhenVisible'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'

interface Work {
  id: number
  title: string
  image: string
  is_work: boolean,
  description: string
  period: string
  technologies: string[]
  point: string
}

const works: Work[] = [
  {
    id: 1,
    title: 'ポートフォリオ',
    image: '/icon-dog.svg',
    is_work: false,
    description: '転職にあたり本ポートフォリオを作成いたしました。',
    period: '2025/01 - 2025/01 (7日間)',
    technologies: ['React.js', 'Next.js', 'TailwindCSS', 'chart.js', 'TypeScript', 'Figma'],
    point: '画面イメージの作成・コンテンツ内容決め・画像の作成に4日間、環境構築・実装・Githubへのアップロード作業に3日間かけました（1日=8時間想定）。データを視覚的に伝えるためにchart.jsを活用し、スキルセットや経験が直感的に伝わるよう工夫しました。'
  },
  {
    id: 2,
    title: 'LINE MAツール',
    image: '/icon-smartphone.svg',
    is_work: true,
    description: '企業や個人がマーケティングや顧客とのコミュニケーションを自動化するためのシステムの見積もりから要件定義、設計、実装、単体・結合試験までを経験しました。また、開発チーム（計11名）のリーダーを務めました。',
    period: '2024/06 - 2024/12 (7ヶ月)',
    technologies: ['HTML', 'CSS', 'TailwindCSS', 'React.js', 'Next.js', 'chart.js', 'LIFF', 'TypeScript', 'tRPC', 'AWS', 'cursor', 'Figma'],
    point: 'LIFF開発やデプロイ整備、AWSなど経験がない領域が多い状態でのアサインでしたが、事前に自己学習したり、知見のある方に相談したり、cursorを活用し効率的に作業を行うことで、納期を遅らせることなく納品することができました。',
  },
  {
    id: 3,
    title: '船舶位置情報確認システム',
    image: '/icon-ship.svg',
    is_work: true,
    description: '船舶の位置情報を確認するシステムなどを管理するシステムの詳細設計から実装、単体・結合試験までを経験しました。',
    period: '2024/05 - 2024/06 (2ヶ月)',
    technologies: ['HTML', 'SCSS', 'TailwindCSS', 'React.js', 'TypeScript', 'googleMapsApi', 'Figma'],
    point: '経験のあるgoogleMapsApiを使用した実装だったため当初予定されていたスケジュールよりも前倒しで実装ができたため、使い勝手がより良くなるように機能改修や追加の提案を行い、お客様から満足のいく機能になったと評価いただきました。',
  },
  {
    id: 4,
    title: '点呼アプリ支援システム',
    image: '/icon-contact-round.svg',
    is_work: true,
    description: '出勤状況や報告を管理するシステムの設計・実装・テストを担当しました。',
    period: '2024/01 - 2024/04 (4ヶ月)',
    technologies: ['HTML', 'SCSS', 'BootStrap', 'jQuery', 'laravel', 'XD'],
    point: 'フロントエンドだけでなく、バックエンドも担当することでシステム全体の理解を深めました。Laravelを用いた開発経験は浅かったため、公式ドキュメントやChatGPTを活用して効率的に学習することで、スケジュールに遅れを出すことなく実装を進めることができました。'
  },
  {
    id: 5,
    title: '植物生育予測システム',
    image: '/icon-vegan.svg',
    is_work: true,
    description: '植物の生育・収益を予測するシステムのフロントとバックエンドの実装や設計、画面イメージ作成、後輩教育を行いました。また、3か月間プレイングマネジャーとして案件管理を経験しました。',
    period: '2019/07 - 2022/08,2023/04 - 2023/08 (3年5ヶ月)',
    technologies: ['HTML', 'SCSS', 'BootStrap', 'TypeScript', 'Vue.js', 'chart.js', 'golang', 'googleMapsApi', 'XD'],
    point: '案件管理業務ではタスクの進捗管理やリスク管理を経験し、円滑なプロジェクト進行に貢献しました。複雑な仕様のグラフやマップを扱うことが多かったため、chart.jsやgoogleMapsApiの技術力が向上しました。また、画面イメージを作成する機会が多くあったためXDの基本的な操作を扱えるようになりました。',
  },
]

const Works = () => {
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  return (
    <section id="Works" className="bg-bg_color2 px-4">
      <div className="max-w-5xl pt-20 pb-24 mx-auto relative">
        <FadeInWhenVisible>
          <h2 className="section_title">Works</h2>
          <h3 className="section_subtitle">- 制作実績 -</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <div className="mx-auto relative">
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
              }}
              onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
              }}
              className="relative"
              >
              {works.map((work) => (
                <SwiperSlide key={work.id}>
                  <div className="bg-white rounded-lg order-solid border border-sub_color flex flex-col md:min-h-[530px] min-h-[764px]">
                    <div className="md:p-8 p-4 flex-grow flex gap-4 flex-col">
                      <div className="flex items-center gap-2">
                        <div className="bg-accent_color rounded-full">
                          <Image
                            className="p-2"
                            src={work.image}
                            alt={work.title}
                            width={64}
                            height={64}
                          />
                        </div>
                        <h3 className="md:text-2xl text-xl font-bold text-primary">{work.title}</h3>
                      </div>
                      <div
                        className={`w-20 rounded-full text-center py-1 font-bold ${
                          work.is_work ? 'order-solid border border-accent_color text-accent_color' : 'text-white bg-accent_color'
                        }`}
                      >
                        <span className="block text-xs">
                          {work.is_work ? '実務' : '自主制作'}
                        </span>
                      </div>

                      <div>
                        <p className="mb-1 font-bold text-lg">概要</p>
                        <p>{work.description}</p>
                      </div>
                      <div>
                        <p className="mb-1 font-bold text-lg">{work.is_work ? 'アサイン期間' : '制作期間'}</p>
                        <p>{work.period}</p>
                      </div>
                      <div>
                        <p className="mb-1 font-bold text-lg">言語・ツール</p>
                        <p>
                        {work.technologies.join(' / ')}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-bold text-lg">工夫したポイント</p>
                        <p>{work.point}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
              <div className="swiper-pagination"></div>
          </div>
        </FadeInWhenVisible>
        <div className="footprins_img">
          <AnimatedFootprints
            className=""
            animatedSrc="/footprints4.gif"
            alt="足跡"
          />
        </div>
      </div>
    </section>
  )
}

export default Works
