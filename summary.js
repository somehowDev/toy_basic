document.addEventListener("DOMContentLoaded", function () {
  // 모든 메뉴 링크와 섹션, 토글 버튼을 선택
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".section-content");

  // 각 메뉴 링크에 클릭 이벤트 리스너를 추가
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 링크 동작 방지
      const targetId = this.getAttribute("href").substring(1); // 링크된 섹션의 ID 가져오기
      const targetSection = document
        .getElementById(targetId)
        .querySelector(".section-content"); // 대상 섹션의 콘텐츠 선택

      // 모든 섹션을 접음
      sections.forEach((section) => {
        section.style.maxHeight = "0";
      });

      // 대상 섹션을 펼침
      targetSection.style.maxHeight = targetSection.scrollHeight + "px";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); // 대상 섹션으로 부드럽게 스크롤

      // 모든 메뉴 링크에서 active 클래스 제거
      menuLinks.forEach((menuLink) => {
        menuLink.classList.remove("active");
      });

      // 클릭된 메뉴 링크에 active 클래스 추가
      this.classList.add("active");

      // 모든 토글 버튼을 초기화
      document.querySelectorAll(".toggle-button").forEach((button) => {
        button.innerHTML = "➕";
      });

      // 클릭된 섹션의 토글 버튼 업데이트
      const targetToggle = document
        .getElementById(targetId)
        .querySelector(".toggle-button");
      targetToggle.innerHTML = "➖"; // 토글 버튼을 "➖"로 변경
    });
  });

  // 토글 버튼 설정 함수
  function setupToggle(toggleButtonId, contentId) {
    const content = document.getElementById(contentId); // 콘텐츠 선택
    const button = document.getElementById(toggleButtonId); // 버튼 선택
    const section = button.parentElement.parentElement; // 섹션 선택

    content.style.maxHeight = "0"; // 초기 상태에서 콘텐츠를 접음
    button.innerHTML = "➕"; // 초기 상태에서 버튼을 "➕"로 설정
    section.style.overflow = "hidden"; // 섹션의 오버플로우를 숨김

    // 버튼에 클릭 이벤트 리스너 추가
    button.addEventListener("click", function () {
      if (
        content.style.maxHeight === "0px" ||
        content.style.maxHeight === "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px"; // 콘텐츠를 펼침
        button.innerHTML = "➖"; // 버튼을 "➖"로 변경

        // 관련된 메뉴 링크에 active 클래스 추가
        document
          .querySelector(`a[href="#${contentId}"]`)
          .classList.add("active");
      } else {
        content.style.maxHeight = "0"; // 콘텐츠를 접음
        button.innerHTML = "➕"; // 버튼을 "➕"로 변경

        // 모든 메뉴 링크에서 active 클래스 제거
        menuLinks.forEach((menuLink) => {
          menuLink.classList.remove("active");
        });

        // 관련된 메뉴 링크에서 active 클래스 제거
        document
          .querySelector(`a[href="#${contentId}"]`)
          .classList.remove("active");
      }
    });

    // 초기 상태에서 콘텐츠의 높이를 설정
    requestAnimationFrame(() => {
      if (
        content.style.maxHeight !== "0px" &&
        content.style.maxHeight !== "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  // 각 섹션의 토글 버튼 설정
  setupToggle("toggleTravel", "travelJournal");
  setupToggle("toggleMusic", "musicPlaylist");
  setupToggle("toggleGame", "gameReview");
  setupToggle("toggleFashion", "fashionContent");
  setupToggle("toggleBooks", "booksContent");
  setupToggle("toggleMovie", "movieContent");
});
