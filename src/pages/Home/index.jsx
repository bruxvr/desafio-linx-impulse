import { Header } from "../../components/Header"
import { Description } from "../../components/Description"
import { Divider } from "../../components/Divider"
import { Products } from "../../components/Products"



function Home () {
  return (
    <>
      <Header />
      <Description />
      <Divider>Sua seleção especial</ Divider>
      <Products />
    </>
  )
}

export default Home