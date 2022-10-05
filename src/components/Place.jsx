import React from "react";
import Spot from "./Spot";
import church from "../assets/imagesVideo/binondochurch.png";
import intramuros from "../assets/imagesVideo/intramuros.jpeg";
import mall from "../assets/imagesVideo/luckychinatownmall.jpeg";

export default function Place() {
  return (
    <>
      <p className="foodtext">places to go to in binondo</p>
      <div className="foodintro">
        <div className="foodline"></div>
      </div>
      <Spot
        title="Minor Basilica of Saint Lorenzo Ruiz"
        img={church}
        alt="A large church made out of granite"
        description="Also known as Binondo Church, it is located in the District of Binondo, Manila fronting Plaza San Lorenzo Ruiz, in the Philippines. This church was founded by Dominican priests in 1596 to serve their Chinese converts to Christianity. The original building was destroyed in 1762 by British bombardment. A new granite church was completed on the same site in 1852 however it was greatly damaged during the Second World War, with only the western façade and the octagonal belfry surviving. It is named after the first Filipino saint, Lorenzo Ruiz."
      />
      <Spot
        title="Intramuros"
        img={intramuros}
        alt="A huge stone wall with a gate in the middle"
        description="The latin word for 'inside the walls' is the 0.67-square-kilometer (0.26 sq mi) historic walled area within the city of Manila, the capital of the Philippines. It is administered by the Intramuros Administration with the help of the city government of Manila. Present-day Intramuros comprises a centuries-old historic district, entirely surrounded by fortifications, that was considered at the time of the Spanish Empire to be the entire City of Manila."
      />
      <Spot
        title="Lucky Chinatown Mall"
        img={mall}
        alt="Picture taken from the third storey of the mall downwards with lots of chinese red lanterns hung up"
        description="A lifestyle mall development of Megaworld Lifestyle Malls located along Reina Regente Street corner Dela Reina Street in Binondo, Manila. It houses a wide selection of international fashion brands and high-end shopping to a part of the Manila known for bargain centers and budget shopping. Lucky Chinatown also has establishments that cater to home improvement, convenience, as well as beauty and wellness. For budget shopping and pop up kiosks popular in Divisoria and other Chinatown markets in the world, Lucky Chinatown has the Annex A building for those. Aside from shopping, Lucky Chinatown serves a variety of high end dining offerings with a mix of Asian, European and Oriental cuisines."
      />
    </>
  );
}
