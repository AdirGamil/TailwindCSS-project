import { Analytics } from './cmps/Analytics'
import { Cards } from './cmps/Cards'
import { Hero } from './cmps/Hero'
import { Navbar } from './cmps/Navbar'
import { Newsletter } from './cmps/Newsletter'

export function RootCmp() {
  return (
    <section className="main-container">
      <Navbar />
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
    </section>
  )
}
