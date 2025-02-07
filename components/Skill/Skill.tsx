'use client'

import { Bar, Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import type { Chart, ChartArea } from "chart.js"
import FadeInWhenVisible from '../FadeInWhenVisible/FadeInWhenVisible'
import AnimatedFootprints from '../AnimatedFootprints/AnimatedFootprints'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const Skills = () => {
  const barData = {
    labels: ['HTML', 'CSS', 'TypeScript', 'Vuejs', 'jQuery', 'Reactjs', 'laravel', 'cursor', 'golang'],
    datasets: [
      {
        label: '技術スタックの経験年数',
        data: [5.75, 5.75, 4.75, 4.5, 2.4, 1.5, 0.75, 0.75, 0.15],
        backgroundColor: '#B78791',
      },
    ],
  }

  const langRadarData = {
    labels: ['Vuejs', 'Reactjs', 'jQuery', 'Typescript', 'Laravel', 'chartjs', 'jest'],
    datasets: [
      {
        label: '技術スキルの自己評価',
        data: [4, 4, 4, 4, 3, 4, 2],
        backgroundColor: 'rgba(212, 165, 165, 0.4)',
        borderColor: '#D4A5A5',
        borderWidth: 2,
      },
    ],
  }

  const devProcessRadarData = {
    labels: ['要件定義', '基本設計', '詳細設計', '環境構築', 'コーディング', 'テスト', 'デプロイ'],
    datasets: [
      {
        label: '開発プロセスの自己評価',
        data: [3, 4, 4, 3, 4, 4, 3],
        backgroundColor: 'rgba(212, 165, 165, 0.4)',
        borderColor: '#D4A5A5',
        borderWidth: 2,
      },
    ],
  }

  const backgroundPlugin = {
    id: 'customBackground',
    beforeDraw: (chart: Chart) => {
      const { ctx } = chart
      const chartArea = chart.chartArea as ChartArea
  
      // 描画エリア（枠線内）の座標を取得
      const { left, top, right, bottom } = chartArea
  
      // 背景を白で塗りつぶす
      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(left, top, right - left, bottom - top);
      ctx.restore();
    },
  };

  const barOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 6,
        ticks: {
          stepSize: 1,
          callback: (value: string | number) => value + '年',
        },
      },
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        min: 0, // r軸の最小値
        max: 5, // r軸の最大値
        ticks: {
          stepSize: 1,
          callback: (value: string | number) => value.toString(),
          color: '#333', // r軸の文字色
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
        backgroundColor: 'white',
      },
    },
  };  

  const randerBasis = [
    {
      id: 1,
      title: '初級',
      text: '基本的な概念を理解しているが、実際のプロジェクトでの使用経験は少ない。',
    },
    {
      id: 2,
      title: '基礎',
      text: '簡単な問題には対応できるが、応用や複雑な課題にはサポートが必要。',
    },
    {
      id: 3,
      title: '中級',
      text: '一般的なプロジェクトで独立して作業できるが、高度な作業にはまだサポートが必要。',
    },
    {
      id: 4,
      title: '上級',
      text: '高度な作業や複雑な課題に対応でき、他のメンバーをサポートできるレベル。',
    },
    {
      id: 5,
      title: 'エキスパート',
      text: '深い専門知識を持ち、技術的なリーダーシップを発揮できる。',
    },
  ]

  return (
    <section id="Skill" className="bg-bg_color1 section">
      <div className="section_wrap">
        <FadeInWhenVisible>
          <h2 className="section_title">Skill</h2>
          <h3 className="section_subtitle">- できること -</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
            <p>
              これまでフロントエンドを中心に、HTML、CSS、JavaScriptを使った多様なWeb開発に従事してきました。
              特にChart.jsやGoogle Maps APIを活用したグラフや地図機能の実装に強みがあります。
              また、画面イメージ作成からフロントエンド実装、さらにバックエンド開発の経験もありバックエンドとのスムーズな意思疎通が可能です。
            </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <div style={{ height: '400px' }} className="my-4">
            <Bar data={barData} options={barOptions} plugins={[backgroundPlugin]} />
          </div>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeInWhenVisible delay={0.2}>
            <div style={{ height: '400px', width: '100%' }} className="flex justify-center">
              <Radar data={langRadarData} options={radarOptions}  />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div style={{ height: '400px', width: '100%' }} className="flex justify-center">
              <Radar data={devProcessRadarData} options={radarOptions} />
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible delay={0.2}>
          <div className="bg-white rounded-lg p-2 order-solid border border-sub_color">
            {randerBasis.map((randerBase) => (
              <div key={randerBase.id}>
                <p>
                  <span className="font-bold">
                    {randerBase.id} - {randerBase.title} :
                  </span>
                  <br className="sm:hidden" /> {/* スマホのみ改行 */}
                  <span className="text-sm">
                    {randerBase.text}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="footprins_img footprins_img_right">
        <AnimatedFootprints
          className=""
          animatedSrc="/footprints5.gif"
          alt="足跡"
        />
      </div>
    </section>
  )
}

export default Skills
