import Venusaur from "../Components/Venusaur";
import Charizard from "../Components/Charizard";
import Blastoise from "../Components/Blastoise";
import Pikachu from "../Components/Pikachu";
import Gardevoir from "../Components/Gardevoir";
import Lucario from "../Components/Lucario";

export const router = [
  {
    path: "venusaur",
    element: <Venusaur />,
  },
  {
    path: "charizard",
    element: <Charizard />,
  },
  {
    path: "blastoise",
    element: <Blastoise />,
  },
  {
    path: "pikachu",
    element: <Pikachu />,
  },
  {
    path: "gardevoir",
    element: <Gardevoir />,
  },
  {
    path: "lucario",
    element: <Lucario />,
  },
];