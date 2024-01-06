
import styles from './page.module.css'
import { HeaderMenu } from './components/HeaderMenu'
import { BadgeCard } from './components/BadgeCard'
import work from './data/work.json'
import { Container } from '@mantine/core'
import { HeroImageRight } from './components/HeroImageRight'
import FormTime from './components/FormTime'



export default function Home() {
  return (
    <>
      <HeaderMenu />
      <HeroImageRight />
      <FormTime />


      <Container>
        <div className={styles.card}>
          {work.map((data, index) => (
            <BadgeCard key={index} {...data} />
          ))}
        </div>
      </Container>
    </>
  )
}
