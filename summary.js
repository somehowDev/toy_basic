document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".section-content");
  const toggles = document.querySelectorAll(".toggle-button");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document
        .getElementById(targetId)
        .querySelector(".section-content");

      sections.forEach((section) => {
        section.style.maxHeight = "0";
      });

      targetSection.style.maxHeight = targetSection.scrollHeight + "px";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

      // 토글 버튼 업데이트
      const targetToggle = document
        .getElementById(targetId)
        .querySelector(".toggle-button");
      targetToggle.innerHTML = "➖";
    });
  });

  function setupToggle(toggleButtonId, contentId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById(toggleButtonId);
    const section = button.parentElement.parentElement;

    content.style.maxHeight = "0";
    button.innerHTML = "➕";
    section.style.overflow = "hidden";

    button.addEventListener("click", function () {
      if (
        content.style.maxHeight === "0px" ||
        content.style.maxHeight === "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px";
        button.innerHTML = "➖";
      } else {
        content.style.maxHeight = "0";
        button.innerHTML = "➕";
      }
    });

    requestAnimationFrame(() => {
      if (
        content.style.maxHeight !== "0px" &&
        content.style.maxHeight !== "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  setupToggle("toggleTravel", "travelJournal");
  setupToggle("toggleMusic", "musicPlaylist");
  setupToggle("toggleGame", "gameReview");
  setupToggle("toggleFashion", "fashionContent");
  setupToggle("toggleBooks", "booksContent");
  setupToggle("toggleMovie", "movieContent");
});
