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
      reservationsTextList: ["Acasă", "Contact"],
      hikers: "Excursioniști",
      nrPersons: "3 Persoane",
      bookNow: "INREGISTRARE",
      reservations: "Rezervări",
      clearReservations: "Ștergeți rezervările",
      anotherReservation: "Mai faceţi o rezervare!",
      alertText1: "Numărul maxim de rezervări efectuate.",
      alertText2:
        "Ștergeți una sau mai multe dacă doriți să continuați să faceți rezervări.",
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
      carouselTitle1: "Cazare",
      videoTitle: "O plimbare în natură îți conduce sufletul înapoi acasă.",
      videoText:
        "Dacă ați decis când și unde doriți să mergeți în drumeții, faceți click pe butonul de mai jos pentru a face o rezervare",
      videoBtn: "Rezervă",
      contactText1: "Odihnă",
      contactText2: "fără",
      contactText3: "Stres",
      contactMsg:
        "Aveți un mesaj sau vreți doar să ne salutați? Contactați-ne și vă vom răspunde cu plăcere!",
      contactPlaceholderName: "Nume",
      contactPlaceholderSubject: "Subiect",
      contactPlaceholderMessage: "Mesaj",
      contactBtn: "Trimite",
      footerLogo: "Logo creat cu",
      footerImages: "Imagini si video luate de la",
      footerInspiration1: "Inspirație pentru design",
      footerInspiration2: "aici",
      footerInspiration3: "și",
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
      reservationsTextList: ["Home", "Contact"],
      hikers: "Hikers",
      nrPersons: "3 Persons",
      bookNow: "BOOK NOW",
      reservations: "Reservations",
      clearReservations: "Clear reservations",
      alertText1: "Maximum number of reservations made.",
      alertText2:
        "Delete one or more if you wish to continue making reservations.",
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
      carouselTitle1: "Accomodation",
      videoTitle: "A walk in nature walks the soul back home.",
      videoText:
        "If you've decided on when and where you want to go hiking simply click the button below to book a reservation",
      videoBtn: "Book Now",
      contactText1: "Relax",
      contactText2: "no",
      contactText3: "Stress",
      contactMsg:
        "Have a message or just wanna say hi? Contact us and we'll gladly answer!",
      contactPlaceholderName: "Name",
      contactPlaceholderSubject: "Subject",
      contactPlaceholderMessage: "Message",
      contactBtn: "Submit",
      footerLogo: "Logo made with",
      footerImages: "Images and video taken from",
      footerInspiration1: "Inspiration for design from",
      footerInspiration2: "here",
      footerInspiration3: "and",
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
