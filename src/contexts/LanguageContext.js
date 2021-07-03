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
