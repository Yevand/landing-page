import { i18n } from "./dictionary.js";
function useTranslations(language) {
  const translations = i18n[language] || i18n.en;

  const headingLevelOne = document.querySelector("h1");
  if (!translations["heading-level-one"]) headingLevelOne.hidden = true;
  headingLevelOne.textContent = translations["heading-level-one"];

  const exploreCarsSectionHeading = document.getElementById(
    "explore-cars-section-heading",
  );
  if (!translations["explore-cars-section-heading"])
    exploreCarsSectionHeading.textContent =
      translations["explore-cars-section-heading"];

  const logo = document.getElementById("logo");
  if (!translations["logo"]) logo.hidden = true;
  logo.ariaLabel = translations["logo"]["aria-label"];

  ["login-icon"].forEach((key) => {
    const icon = document.querySelector(".login-icon");
    if (!translations[key]) icon.hidden = true;
    icon.ariaLabel = translations[key]["aria-label"];
    icon.href = translations[key].url;
  });

  ["step-1", "step-2", "step-3", "step-4"].forEach((key) => {
    const step = document.getElementById(key);
    if (!translations[key]) step.hidden = true;
    step.textContent = translations[key].label;
    step.href = translations[key].url;
  });

  ["car-1", "car-2", "car-3", "car-4", "car-5"].forEach((key) => {
    const car = document.getElementById(key);
    if (!translations[key]) car.hidden = true;
    const image = car.querySelector("img");
    const heading = car.querySelector("h3");
    const paragraph = car.querySelector("p");
    const link = car.querySelector("a");
    image.alt = translations[key].heading;
    heading.textContent = translations[key].heading;
    paragraph.textContent = translations[key].paragraph;
    link.href = translations[key].url;
  });

  ["new-tag", "promotion-tag"].forEach((key) => {
    const tag = document.getElementById(key);
    if (!translations[key]) tag.hidden = true;
    const background = tag.querySelector("rect");
    const text = tag.querySelector("text");
    text.textContent = translations[key].label;
    text.setAttribute("fill", translations[key]["text-color"]);
    background.setAttribute("fill", translations[key]["bg-color"]);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  useTranslations(document.documentElement.lang || "en");

  const toggle = document.getElementById("language-toggle");
  if (toggle) {
    toggle.addEventListener("change", () => {
      const selected = toggle.querySelector("input:checked")?.id;
      if (selected) {
        document.documentElement.lang = selected;
        useTranslations(selected);
      }
    });
  }
});
