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
