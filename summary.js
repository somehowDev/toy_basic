document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      section: "여행 일지",
      id: "travelJournalSection",
      toggleId: "toggleTravel",
      contentId: "travelJournal",
      content: [
        {
          subtitle: "제주도 여행 - 아름다운 섬, 제주를 탐험하다",
          items: [
            {
              title: "첫째 날",
              description: "한라산 등반. 숨이 멎을 듯한 경치를 경험.",
            },
            {
              title: "둘째 날",
              description:
                "해변에서의 일몰 감상. 노을이 바다에 비친 모습이 잊히지 않아요.",
            },
            {
              title: "셋째 날",
              description:
                "전통 시장 탐방. 제주만의 특색 있는 먹거리와 기념품 쇼핑.",
            },
            {
              title: "여행 팁",
              description:
                "렌터카를 이용하면 제주도의 숨은 명소들을 편하게 탐방할 수 있습니다.",
            },
          ],
        },
      ],
    },
    {
      section: "음악 플레이리스트",
      id: "musicPlaylistSection",
      toggleId: "toggleMusic",
      contentId: "musicPlaylist",
      content: [
        {
          subtitle: "이번 달의 플레이리스트 - 감성을 울리는 멜로디",
          items: [
            {
              title: "노래 1 - 아티스트 A",
              description: "가사와 멜로디가 마음을 울려요.",
            },
            {
              title: "노래 2 - 아티스트 B",
              description: "듣기만 해도 기분이 좋아지는 노래입니다.",
            },
            {
              title: "노래 3 - 아티스트 C",
              description: "이 노래를 들을 때마다 여행을 떠나고 싶어집니다.",
            },
            {
              title: "코멘트",
              description:
                "각곡마다 저의 개인적인 이야기를 담았어요. 들어보시고 공감하시면 좋겠네요.",
            },
          ],
        },
      ],
    },
    {
      section: "게임 리뷰 및 가이드",
      id: "gameReviewSection",
      toggleId: "toggleGame",
      contentId: "gameReview",
      content: [
        {
          subtitle: "최근 플레이한 게임",
          items: [
            {
              title: "리그오브레전드",
              description: "블라블라블라.",
            },
            {
              title: "리니지2m",
              description: "블라블라블라.",
            },
            {
              title: "바람의나라",
              description: "블라블라블라.",
            },
            {
              title: "스타크래프트",
              description: "블라블라블라.",
            },
          ],
        },
      ],
    },
    {
      section: "패션 및 뷰티 블로그",
      id: "fashionContentSection",
      toggleId: "toggleFashion",
      contentId: "fashionContent",
      content: [
        {
          subtitle: "패션 및 뷰티 정보 제공",
          items: [
            {
              title: "블라블라블라",
              description: "블라블라블라.",
            },
            {
              title: "블라블라블라",
              description: "블라블라블라.",
            },
            {
              title: "블라블라블라",
              description: "블라블라블라.",
            },
            {
              title: "블라블라블라",
              description: "블라블라블라.",
            },
          ],
        },
      ],
    },
    {
      section: "책 추천",
      id: "booksContentSection",
      toggleId: "toggleBooks",
      contentId: "booksContent",
      content: [
        {
          subtitle: "책을 읽고 감명 깊은 문구 또는 나의 생각을 정리하기",
          items: [
            {
              title: "빠르게 실패하기 - 존 크럼볼츠, 라이언 바비노",
              description:
                "원하는 목표를 이루기 위해 참고 인내해 온 사람이라면 누구라도 반드시 알아야 할 모든 것",
            },
            {
              title: "부의 추월 차선 - 엠제이 드마코",
              description: "빠르게 부자 되기의 장점을 설명해준 책",
            },
            {
              title: "오케팅 - 오두환",
              description:
                "브랜딩, 마케팅을 근본적으로 어떻게 해야되는지 쉽게 설명 한 책",
            },
            {
              title: "그릿 - 앤절라 더크워스",
              description:
                "[꾸준함]을 내 인생 모토로 삼고 있는데, 그걸 한번 더 증명 받기 위해 읽은 책.",
            },
          ],
        },
      ],
    },
    {
      section: "영화 추천",
      id: "movieContentSection",
      toggleId: "toggleMovie",
      contentId: "movieContent",
      content: [
        {
          subtitle: "책을 읽고 감명 깊은 문구 또는 나의 생각을 정리하기",
          items: [
            {
              title: "영화 - 1",
              description: "영화 1",
            },
            {
              title: "영화 - 2",
              description: "영화 2",
            },
            {
              title: "영화 - 3",
              description: "영화 3",
            },
            {
              title: "영화 - 4",
              description: "영화 4",
            },
          ],
        },
      ],
    },
  ];

  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const closeBtn = document.getElementsByClassName("close")[0];
  const saveBtn = document.getElementById("saveButton");

  function openModal(title) {
    modal.style.display = "block";
    modalTitle.textContent = title; // 모달 제목을 업데이트
  }

  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.onclick = function () {
    closeModal();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  function renderMenu() {
    const menu = document.getElementById("menu");
    data.forEach((section) => {
      const menuItem = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.href = `#${section.id}`;
      menuLink.className = "menu-link";
      menuLink.textContent = section.section;
      menuItem.appendChild(menuLink);
      menu.appendChild(menuItem);
    });
  }

  function renderContent() {
    const content = document.getElementById("content");
    data.forEach((section, index) => {
      console.log("section", section);
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "section";
      sectionDiv.id = section.id;

      const sectionHeader = document.createElement("div");
      sectionHeader.className = "section-header";

      const sectionTitle = document.createElement("div");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = section.section;
      sectionHeader.appendChild(sectionTitle);

      const flexDiv = document.createElement("div");
      flexDiv.className = "flex";

      const penIcon = document.createElement("div");
      penIcon.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      flexDiv.appendChild(penIcon);

      penIcon.addEventListener("click", function () {
        openModal(section.section); // 모달을 열고 제목을 전달
        document.getElementById("sectionTitle").value = section.section;
        document.getElementById("sectionDescription").value = section.content
          .map((item) => item.subtitle || item.title)
          .join("\n");

        // 현재 섹션 인덱스를 저장
        currentSectionIndex = index;

        // items 데이터를 모달 폼에 바인딩
        section.content[0]?.items?.forEach((item, idx) => {
          document.getElementById(`data${idx + 1}`).value = item.title;
          document.getElementById(`dataDesc${idx + 1}`).value =
            item.description;
        });
      });

      const toggleButton = document.createElement("div");
      toggleButton.className = "toggle-button";
      toggleButton.textContent = "➕";
      toggleButton.id = section.toggleId; // 토글 버튼에 ID 추가
      flexDiv.appendChild(toggleButton);

      sectionHeader.appendChild(flexDiv);
      sectionDiv.appendChild(sectionHeader);

      const sectionContent = document.createElement("div");
      sectionContent.className = "section-content";
      sectionContent.id = section.contentId; // 콘텐츠에 ID 추가

      if (section.content) {
        section.content.forEach((content) => {
          if (content.subtitle) {
            const subtitle = document.createElement("p");
            subtitle.className = "section-subtitle";
            subtitle.textContent = content.subtitle;
            sectionContent.appendChild(subtitle);
          }

          if (content.items) {
            const ul = document.createElement("ul");
            content.items.forEach((item) => {
              const li = document.createElement("li");
              const title = document.createElement("strong");
              title.textContent = item.title + ": ";
              li.appendChild(title);
              li.appendChild(document.createTextNode(item.description));
              ul.appendChild(li);
            });
            sectionContent.appendChild(ul);
          }

          if (content.title) {
            const title = document.createElement("p");
            title.className = "section-title";
            title.textContent = content.title;
            sectionContent.appendChild(title);
          }

          if (content.description) {
            const description = document.createElement("p");
            description.className = "section-description";
            description.textContent = content.description;
            sectionContent.appendChild(description);
          }

          if (content.pros) {
            const pros = document.createElement("p");
            pros.className = "section-pros";
            pros.textContent = "장점: " + content.pros;
            sectionContent.appendChild(pros);
          }

          if (content.cons) {
            const cons = document.createElement("p");
            cons.className = "section-cons";
            cons.textContent = "단점: " + content.cons;
            sectionContent.appendChild(cons);
          }
        });
      }

      sectionDiv.appendChild(sectionContent);
      content.appendChild(sectionDiv);
    });
  }

  function setupToggle(toggleButtonId, contentId) {
    const content = document.getElementById(contentId); // 콘텐츠 선택
    const button = document.getElementById(toggleButtonId); // 버튼 선택

    content.style.maxHeight = "0"; // 초기 상태에서 콘텐츠를 접음
    button.innerHTML = "➕"; // 초기 상태에서 버튼을 "➕"로 설정

    // 버튼에 클릭 이벤트 리스너 추가
    button.addEventListener("click", function () {
      if (
        content.style.maxHeight === "0px" ||
        content.style.maxHeight === "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px"; // 콘텐츠를 펼침
        button.innerHTML = "➖"; // 버튼을 "➖"로 변경
      } else {
        content.style.maxHeight = "0"; // 콘텐츠를 접음
        button.innerHTML = "➕"; // 버튼을 "➕"로 변경
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

  function setupMenuToggle() {
    const menuLinks = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll(".section-content");

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
        document
          .getElementById(targetId)
          .scrollIntoView({ behavior: "smooth" }); // 대상 섹션으로 부드럽게 스크롤

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
  }

  // 메뉴와 콘텐츠 렌더링
  renderMenu();
  renderContent();

  // 각 섹션의 토글 버튼 설정
  setupToggle("toggleTravel", "travelJournal");
  setupToggle("toggleMusic", "musicPlaylist");
  setupToggle("toggleGame", "gameReview");
  setupToggle("toggleFashion", "fashionContent");
  setupToggle("toggleBooks", "booksContent");
  setupToggle("toggleMovie", "movieContent");

  // 메뉴 클릭 시 토글 설정
  setupMenuToggle();

  // 저장 버튼 클릭 이벤트 리스너 추가
  saveBtn.addEventListener("click", function () {
    const sectionTitle = document.getElementById("sectionTitle").value;
    const sectionDescription =
      document.getElementById("sectionDescription").value;

    if (currentSectionIndex !== null) {
      data[currentSectionIndex].section = sectionTitle;
      if (data[currentSectionIndex].content[0]) {
        data[currentSectionIndex].content[0].subtitle = sectionDescription;
        data[currentSectionIndex].content[0].items = [
          {
            title: document.getElementById("data1").value,
            description: document.getElementById("dataDesc1").value,
          },
          {
            title: document.getElementById("data2").value,
            description: document.getElementById("dataDesc2").value,
          },
          {
            title: document.getElementById("data3").value,
            description: document.getElementById("dataDesc3").value,
          },
          {
            title: document.getElementById("data4").value,
            description: document.getElementById("dataDesc4").value,
          },
        ];
      }
    }

    // 콘텐츠 재렌더링
    document.getElementById("content").innerHTML = "";
    renderContent();

    setupToggle("toggleTravel", "travelJournal");
    setupToggle("toggleMusic", "musicPlaylist");
    setupToggle("toggleGame", "gameReview");
    setupToggle("toggleFashion", "fashionContent");
    setupToggle("toggleBooks", "booksContent");
    setupToggle("toggleMovie", "movieContent");

    closeModal();
  });
});
