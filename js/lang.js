async function fetchTexts(language) {
  try {
    const response = await fetch("texts.json");
    const texts = await response.json();

    // Update header texts
    document.querySelector(".header-inner-left h1").innerHTML =
      texts[language].headerTitle;
    document.querySelector(".lead").textContent =
      texts[language].headerSubtitle;
    document.querySelector(".text-md").textContent = texts[language].headerText;

    // Update navigation links
    document.querySelector(
      ".navbar-nav li:nth-child(1) .nav-link"
    ).textContent = texts[language].navHome;
    document.querySelector(
      ".navbar-nav li:nth-child(2) .nav-link"
    ).textContent = texts[language].navAbout;
    document.querySelector(
      ".navbar-nav li:nth-child(3) .nav-link"
    ).textContent = texts[language].navService;
    document.querySelector(
      ".navbar-nav li:nth-child(4) .nav-link"
    ).textContent = texts[language].navDoctors;
    document.querySelector(
      ".navbar-nav li:nth-child(5) .nav-link"
    ).textContent = texts[language].navContact;

    // Update buttons
    document.querySelector(".btn-white").textContent =
      texts[language].btnLearnMore;
    document.querySelector(".btn-light-blue").textContent =
      texts[language].btnSignIn;

    // Update other elements
    document.querySelector(".bb2").textContent = texts[language].bb2;
    document.querySelector(".bb3").textContent = texts[language].bb3;
    document.querySelector(".skill-title1").textContent =
      texts[language].skilltitle1;
    document.querySelector(".skill-title2").textContent =
      texts[language].skilltitle2;
    document.querySelector(".title1-2").textContent = texts[language].title12;
    document.querySelector(".title1-2-p").textContent =
      texts[language].title12p;
    document.querySelector(".title-p2p").textContent = texts[language].titlep2p;
    document.querySelector(".title-p3p").textContent = texts[language].titlep3p;
    document.querySelector(".title-p3").textContent = texts[language].titlep3;
    document.querySelector(".title-p4p").textContent = texts[language].titlep4p;
    document.querySelector(".title-p4").textContent = texts[language].titlep4;
    document.querySelector(".title-p2").textContent = texts[language].titlep2;
    document.querySelector(".post-p1").textContent = texts[language].postp1;
    document.querySelector(".post-p1-p1").textContent =
      texts[language].postp1p1;
    document.querySelector(".post-p1-p2").textContent =
      texts[language].postp1p2;
    document.querySelector(".post-p2").textContent = texts[language].postp2;
    document.querySelector(".post-p2-p1").textContent =
      texts[language].postp2p1;
    document.querySelector(".post-p2-p2").textContent =
      texts[language].postp2p2;
    document.querySelector(".post-p3").textContent = texts[language].postp3;
    document.querySelector(".post-p3-p1").textContent =
      texts[language].postp3p1;
    document.querySelector(".post-p3-p2").textContent =
      texts[language].postp3p2;
    document.querySelector(".About-text-body").textContent =
      texts[language].Abouttextbody;
    document.querySelector(".about-tag-head").textContent =
      texts[language].abouttagname;
    document
      .querySelector(".search-control")
      .setAttribute("placeholder", texts[language].searchPlaceholder);
  } catch (error) {
    console.error("Error fetching texts:", error);
  }
}

function changeLanguage() {
  var languageSelect = document.getElementById("language");
  var selectedLanguage = languageSelect.value;

  // Call fetchTexts function to update texts
  fetchTexts(selectedLanguage);
}

// Initial call to set default language texts
fetchTexts("en");

function openSiteAndDownload() {
  var languageSelect = document.getElementById("language");
  var selectedLanguage = languageSelect.value;
  var url;

  switch (selectedLanguage) {
    case "en":
      url = "cv dr hoda/CV Dr Hoda Elbendari English (en).pdf";
      break;
    case "ar":
      url = "cv dr hoda/CV Dr Hoda Elbendari Arabic (ar).pdf";
      break;
    case "de":
      url = "cv dr hoda/CV Dr Hoda Elbendari German (de).pdf";
      break;
    case "fr":
      url = "cv dr hoda/CV Dr Hoda Elbendari French (fr).pdf";
      break;
    default:
      url = "cv dr hoda/CV Dr Hoda Elbendari English (en).pdf";
  }

  // فتح الموقع في نافذة جديدة
  window.open(url, "_blank");

  // تنزيل الملف
  var link = document.createElement("a");
  link.href = "cv dr hoda.zip";
  link.download = "cv dr hoda.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
