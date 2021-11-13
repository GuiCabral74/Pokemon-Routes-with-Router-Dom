import { Title, Images } from "../Style/Styles";
import VenusaurIMG from "./imgs/1-venusaur2.png"

const Venusaur = () => {
  return(
    <>
      <Title>Venusaur</Title>
      <Images style={{width: "925px", height: "537px"}} src={VenusaurIMG}/>
    </>
  )
}

export default Venusaur;