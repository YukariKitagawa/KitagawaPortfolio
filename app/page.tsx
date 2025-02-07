import Top from '@/components/Top/Top'
import Navigation from '@/components/Navigation/Navigation'
import About from '@/components/About/About'
import Like from '@/components/Like/Like'
import Skill from '@/components/Skill/Skill'
import Works from '@/components/Works/Works'
import Future from '@/components/Future/Future'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Top />
      <About />
      <Like />
      <Works />
      <Skill />
      <Future />
      <Footer />
    </main>
  );
}
