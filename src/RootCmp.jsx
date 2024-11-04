import { Hero } from './cmps/Hero'
import { Navbar } from './cmps/Navbar'
import { MainIndex } from './pages/MainIndex'

export function RootCmp() {
  return (
    <section className="main-container">
      <Navbar />
      <Hero/>
      {/* <MainIndex /> */}
    </section>
  )
}
