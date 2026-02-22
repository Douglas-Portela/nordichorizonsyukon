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
    feature3_text: "Solutions adaptées pour marchandises, équipements et projets spécialisés.",
    
    /* ===== Contato ===== */
    contact_title: "Contactez-Nous",
    contact_text: "Nous serons ravis de répondre à vos questions et demandes de transport.",
    form_name: "Nom",
    form_email: "Email",
    form_message: "Message",
    form_send: "Envoyer",

    footer_email: "Email",
    footer_phone: "Tel",
    footer_rights: "Nordic Horizons Yukon. Copyright © 2026 Tous Droits Réservés. Par"
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
    feature3_text: "Tailored solutions for cargo, equipment and specialized projects.",

    /* ===== Contact ===== */
    contact_title: "Contact Us",
    contact_text: "We are happy to answer your questions and transportation requests.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send",

    footer_email: "Email",
    footer_phone: "Tel",
    footer_rights: "Nordic Horizons Yukon. Copyright © 2026 All Rights Reserved. By"
  }
};


function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Default language
setLanguage("fr");