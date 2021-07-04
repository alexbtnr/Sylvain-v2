import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

// const LanguageContextProvider = () => {
//   const [enLang, setEnLang] = useState({
//     isRo: true,
//     ro: {
//       mainTitle: `"Și în pădure mă duc, să-mi pierd mintea și să-mi găsesc sufletul."`
//     },
//     en: {
//       mainTitle: `"And into the forest I go, to lose my mind and find my soul."`
//     }
//   })
//   return (
//     <LanguageContext.Provider value={{enLang}}>
//       {props.children}
//     </LanguageContext.Provider>
//   )
// }

class LanguageContextProvider extends Component {
  state = {
    isRo: true,
    ro: {
      mainTitle: `"Și în pădure mă duc, să-mi pierd mintea și să-mi găsesc sufletul."`,
      textList: ["Despre", "Povești", "Galerie", "Cazare", "Video", "Contact"],
      hikers: "Excursioniști",
      nrPersons: "3 Persoane",
      bookNow: "INREGISTRARE",
      reservations: "Rezervări",
      anotherReservation: "Mai faceţi o rezervare!",
      bookingReceived: "Mulțumesc! Detaliile rezervării dvs. au fost primite!",
      aboutMainText:
        "Faceți drumeții în 5 țări europene și descoperiți de ce localnicii nu se pot sătura de natură.",
      aboutSecondaryText:
        "Cele mai pitorești peisaje ale noastre sunt cu siguranță cel mai bine savurate mergând pe jos.",
      card1Title: "Urcă spre liniște",
      card1Text:
        "De la Mont Blanc la Muntele Jungfrau sau Munții Carpați, indiferent de loc, urcarea la vârf este unul dintre cele mai frumoase lucruri pe care le poate experimenta un om.",
      card2Title: "Fotografiază privelişti uluitoare",
      card2Text:
        "Poți face călătoria când peisajul este pictat în roșu, galben și portocaliu la sfârșitul verii și toamnei, pentru a te bucura de un peisaj maiestuos.",
      card3Title: "Bucură-te de drumeții în pădure",
      card3Text:
        "După o lungă iarnă, oamenii de toate categoriile de vârstă și mediile sociale se îndreaptă spre aer liber și fac drumeții în munți, de-a lungul coastei sau în păduri.",
      infoTitle: "Găsește-ți drumul",
      infoText:
        "Câteva exemple de trasee de drumeție clasice (și provocatoare!) În Norvegia sunt Preikestolen, Trolltunga, Galdhøpiggen, Besseggen și Romsdalseggen.",
      info1: "Țări",
      info2: "Trasee",
      info3: "Locuri de cazare",
      storiesText1: `"Un cățeluș Golden Retriever aprobă serviciile oferite de Sylvain"`,
      storiesTitle1: "Cățeluș Golden Retriever",
      storiesText2: `"Nu toţi cei care hoinăresc sunt pierduţi."`,
      storiesText3: `"Un loc unic de explorat și de descoperit singur sau cu un grup de prieteni"`,
      storiesTitle3: "Un grup de prieteni",
      storiesText4: `"Un spațiu unic pentru a scăpa de stres și pentru a-ți reîncărca bateriile departe de viața de oraș"`,
      storiesMainTitle: "OAMENI ȘI POVEȘTI",
      storiesSecondaryTitle: "De ce să alegi Sylvain?",
      storiesMainText:
        "Iată câteva mărturii ale clienților noștri obișnuiți despre motivul pentru care preferă serviciile noastre de drumeții.",
      galleryTitle: "Galeria noastră",
    },
    en: {
      mainTitle: `"And into the forest I go, to lose my mind and find my soul."`,
      textList: [
        "About",
        "Stories",
        "Gallery",
        "Accomodation",
        "Video",
        "Contact",
      ],
      hikers: "Hikers",
      nrPersons: "3 Persons",
      bookNow: "BOOK NOW",
      reservations: "Reservations",
      anotherReservation: "Make another reservation!",
      bookingReceived: "Thank you! Your booking details have been received!",
      aboutMainText:
        "Go hiking in 5 European countries and discover why the locals can’t get enough of nature.",
      aboutSecondaryText:
        "Our most scenic landscapes are definitely best enjoyed on foot.",
      card1Title: "Climb Into Quietness",
      card1Text:
        "From Mont Blanc to Mountain Jungfrau or The Carpathian Mountains, no matter the place, going up to the summit is one of the most serene things a human can experience.",
      card2Title: "Capture Breathtaking Sights",
      card2Text:
        "You can take the trip when the landscape get painted in red, yellow, and orange during late summer and autumn in order to enjoy a majestic scenery.",
      card3Title: "Enjoy Forest Hiking",
      card3Text:
        "After a long winter, people of all age groups and social backgrounds head outdoors and go trekking in the mountains, along the coast, or in the forests.",
      infoTitle: "Find your path",
      infoText:
        "A few examples of classic (and challenging!) hiking routes in Norway are Preikestolen, Trolltunga, Galdhøpiggen, Besseggen, and Romsdalseggen.",
      info1: "Countries",
      info2: "Trails",
      info3: "Camps",
      storiesText1: `"A Golden Retriever Puppy approves of Sylvain's services"`,
      storiesTitle1: "Golden Retriever Puppy",
      storiesText2: `"Not all those who wander are lost."`,
      storiesText3: `"A unique place to explore and discover by yourself or with a group of friends"`,
      storiesTitle3: "A group of friends",
      storiesText4: `"A unique space to unload and recharge your batteries away from the city life"`,
      storiesMainTitle: "PEOPLE AND STORIES",
      storiesSecondaryTitle: "Why Choose Sylvain?",
      storiesMainText:
        "Here are a couple of testimonials from our regular clients on why they prefer our hiking services.",
      galleryTitle: "Our photo Gallery",
    },
  };
  toggleLanguage = () => {
    this.setState({ isRo: !this.state.isRo });
  };
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, toggleLanguage: this.toggleLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContextProvider;
