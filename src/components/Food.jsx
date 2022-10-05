import React from "react";
import Resto from "./Resto";
import binondomorning from "../assets/imagesVideo/binondomorning.mp4";

export default function Food() {
  const [menu1, setMenu1] = React.useState("");
  const [menu2, setMenu2] = React.useState("");
  const [menu3, setMenu3] = React.useState("");

  React.useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 4 && hours < 12) {
      setMenu1(
        "For breakfast, they have: Filipino breakfast classics like Beef Tapa, Chicken Tocino, Corned Beef, Beef Steak Tagalog, Chicken or Pork Longganisa, and Boneless Bangus for the price of ₱220 each"
      );
      setMenu2(
        "For breakfast, they have: Differents kind of Congee like Fish, Meat Ball, Pork Century Egg, Mixed Meat, Beef, Soy Chicken, White Chicken, and Asado for ₱150 each. You can also go for their slightly more premium Roast Duck Congee for ₱170"
      );
      setMenu3(
        "For breakfast, they have: Noodle soups called Mami made with different kinds of meat. Beef Mami, Wanton Mami, Dumpling Mami, Fish Ball Mami, Pata Mami, White Chicken Mami, Asado Mami and Soy Chicken Mami for ₱200 each. If you want to splurge on a Mami, there is also the Roast Duck , which would set you back ₱280."
      );
    } else if (hours >= 12 && hours < 17) {
      setMenu1(
        "For lunch, they have: Main Entrees like their Grilled Porkchop, Grilled Chicken, Beef Tenderloin, Beef Tendon, Beef Brocolli, and Sweet & Sour Fish Fillet for ₱240. For ₱20 less, you can get their Boneless Bangus for ₱220, ₱10 less would get you the Chop Suey. But for additional ₱50, you can get their Norweigian Pink Salmon for ₱290."
      );
      setMenu2(
        "For lunch, they have: Sizzling Plates with different kinds of meat and vegetables like the Sizzling Oyster, Sizzling 3 Kinds Vegetables, Sizzling Stuffed Bean Curd, and Sizzling Chicken with Tausi for ₱330 each. The usual meats like Sizzling Beef Ginger Onion and Sizzling Fish Fillet is ₱350 each. Premium seafood dishes like the Sizzling Shrimp with Bean Curd and Sizzling Shrimp (Szechuan Style) run for ₱380 each."
      );
      setMenu3(
        "For lunch, they have: Orders that are good for 2-3 persons. For each one of these dishes, it costs ₱380. These dishes are Fish Fillet with Cream Sauce, Chicken Mushroom, Beef Brisket, Curry Beef, Lemon Chicken, Pork Chop, Honey Baked Ribs, Sweet & Sour Pork, Curry Chicken, and Fish Fillet with Sweet & Sour Sauce."
      );
    } else {
      setMenu1(
        "For dinner, they have: Family-sized platters of Pancit Canton for ₱400, Yangchow Fried Rice for ₱320, Chopsuey for ₱380, Lechon Macau for ₱460, Sweet & Sour Fish Fillet for ₱430, and their specialty, the Homemade Premium Patatim for ₱670. You can get the infamous Soup No. 5, which is made from bull testicles/penis that is believed to have aphrodisiac properties for only ₱350."
      );
      setMenu2(
        "For dinner, they have: Dimsum like Pork Shrimp Siomai for ₱110, Chicken Feet for ₱105, Vegetable Dumpling for ₱105, Shaolong Bao for ₱110, Shark's Fin for ₱110, Beef Ball for ₱105, Fried Dumpling for ₱170, Fried Wanton for ₱170, Special Pao for ₱105, and Asado Pao for ₱105."
      );
      setMenu3(
        "For dinner, they have: Three large kinds of meat in three different sizes. The first one is the Rost Peking Duck, which 1 whole costs ₱1,800, 1/2 is ₱900, and 1/4 is ₱450. The second one is the Roast Pork Asado, which the 1 kg costs ₱1000, 1/2 kg costs ₱500, and the 1/4 kg costs ₱250. The third and last one is the Soyed/White Chicken, which the whole costs ₱450, while the 1/2 costs ₱225."
      );
    }
  }, []);

  return (
    <>
      <p className="foodtext">famous food spots in binondo</p>
      <div className="foodintro">
        <div className="foodline"></div>
      </div>
      <Resto
        title="Café Mezzanine"
        description={
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Cafe%20mezzanine&t=&z=19&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style={{
              width: "100%",
              height: "500px",
              border: "5px solid #f4af00",
            }}
          ></iframe>
        }
        menu={menu1}
      />
      <Resto
        title="Ying Ying Tea House"
        description={
          <iframe
            src="https://maps.google.com/maps?q=%20233-235%20Dasmarinas%20st.%20corner%20Yuchengo%20st.%20Binondo%201000%20Binondo,%20Philippines&t=&z=19&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style={{
              width: "100%",
              height: "500px",
              border: "5px solid #f4af00",
            }}
          ></iframe>
        }
        menu={menu2}
      />
      <Resto
        title="Wai Ying"
        description={
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Wai%20Ying%20Binondo&t=&z=19&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style={{
              width: "100%",
              height: "500px",
              border: "5px solid #f4af00",
            }}
          ></iframe>
        }
        menu={menu3}
      />
    </>
  );
}
