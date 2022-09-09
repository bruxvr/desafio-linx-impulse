import { Header } from "../../components/Header"
import { Description } from "../../components/Description"
import { Divider } from "../../components/Divider"
import { Products } from "../../components/Products"
import { Share } from "../../components/Share"
import { Footer } from "../../components/Footer"

function Home () {
  return (
    <>
      <Header />
      <Description />
      <Divider>Sua seleção especial</ Divider>
      <Products />
      <Divider>Compartilhe a novidade</ Divider>
      <Share />
      <Footer />

    </>
  )
}

export default Home