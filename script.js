const translations = {
  fr: {
    menu_home: "Accueil",
    menu_about: "À propos",
    menu_photos: "Photos",
    menu_contact: "Contact",
    home_title: "Transport touristique et logistique au cœur du Yukon",
    home_text: "Des solutions premium pour relier les paysages sauvages, les communautés et les opportunités du Nord canadien.",
    feature1_title: "Expertise nordique",
    feature1_text: "Une connaissance approfondie du territoire, des routes isolées et des conditions extrêmes.",
    feature2_title: "Transport touristique",
    feature2_text: "Voyagez confortablement à travers les paysages emblématiques du Yukon.",
    feature3_title: "Logistique fiable",
    feature3_text: "Solutions adaptées pour marchandises, équipements et projets spécialisés."
  },
  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_photos: "Photos",
    menu_contact: "Contact",
    home_title: "Tourist and logistics transportation in the heart of Yukon",
    home_text: "Premium solutions connecting wild landscapes, communities and opportunities in Northern Canada.",
    feature1_title: "Northern expertise",
    feature1_text: "Deep knowledge of remote routes and extreme northern conditions.",
    feature2_title: "Tourist transportation",
    feature2_text: "Travel comfortably through Yukon’s iconic landscapes.",
    feature3_title: "Reliable logistics",
    feature3_text: "Tailored solutions for cargo, equipment and specialized projects."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
}

setLanguage('fr');