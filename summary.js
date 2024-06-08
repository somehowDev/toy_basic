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
              title: "Blue Bird - Ikimono Gakari",
              description: "경쾌하고 신나는 멜로디로 하루를 시작하기 좋습니다.",
            },
            {
              title: "Shape of You - Ed Sheeran",
              description: "리드미컬한 비트와 가사로 인기를 끈 노래입니다.",
            },
            {
              title: "Rolling in the Deep - Adele",
              description: "아델의 파워풀한 보컬이 돋보이는 곡입니다.",
            },
            {
              title: "Nandemonaiya - RADWIMPS",
              description: "애니메이션 '너의 이름은'의 OST로 유명한 곡입니다.",
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
              title: "리그 오브 레전드",
              description:
                "팀 전략 게임으로 다양한 챔피언과 협동 플레이가 재미있는 게임입니다.",
            },
            {
              title: "리니지 2M",
              description:
                "원작 리니지를 모바일에서 즐길 수 있는 게임으로, 화려한 그래픽이 특징입니다.",
            },
            {
              title: "바람의 나라: 연",
              description:
                "고전 MMORPG 바람의 나라를 모바일로 재현한 게임입니다.",
            },
            {
              title: "스타크래프트",
              description:
                "전략 시뮬레이션 게임의 고전으로, 높은 전략성이 요구됩니다.",
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
              title: "2024년 여름 패션 트렌드",
              description: "밝은 색상과 가벼운 소재의 옷이 유행할 예정입니다.",
            },
            {
              title: "스킨케어 루틴",
              description:
                "기초 스킨케어 단계부터 고급 스킨케어 팁까지 소개합니다.",
            },
            {
              title: "메이크업 트렌드",
              description:
                "자연스러운 메이크업과 글로우 메이크업이 인기입니다.",
            },
            {
              title: "헤어스타일링 팁",
              description:
                "간단하게 따라 할 수 있는 헤어스타일링 방법을 공유합니다.",
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
                "원하는 목표를 이루기 위해 참고 인내해 온 사람이라면 누구라도 반드시 알아야 할 모든 것.",
            },
            {
              title: "부의 추월 차선 - 엠제이 드마코",
              description: "빠르게 부자가 되기 위한 방법을 설명해주는 책.",
            },
            {
              title: "오케팅 - 오두환",
              description:
                "브랜딩, 마케팅을 근본적으로 어떻게 해야 하는지 쉽게 설명한 책.",
            },
            {
              title: "그릿 - 앤절라 더크워스",
              description:
                "'꾸준함'을 인생 모토로 삼고 있는 사람에게 추천하는 책.",
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
          subtitle: "감명 깊은 영화와 나의 생각을 정리하기",
          items: [
            {
              title: "포레스트 검프",
              description: "삶의 소중함과 용기를 주는 감동적인 영화입니다.",
            },
            {
              title: "인셉션",
              description:
                "복잡한 이야기 구조와 놀라운 시각 효과로 주목받은 영화입니다.",
            },
            {
              title: "인터스텔라",
              description: "우주 탐사를 소재로 한 감동적인 SF 영화입니다.",
            },
            {
              title: "기생충",
              description:
                "한국 영화 최초로 아카데미 작품상을 수상한 영화입니다.",
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
  let currentSectionIndex = null; // 현재 섹션 인덱스 변수 추가

  function openModal(title) {
    modal.style.display = "block";
    modalTitle.textContent = title;
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
    content.innerHTML = ""; // 기존 콘텐츠를 초기화합니다.

    data.forEach((section, index) => {
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
        openModal(section.section);
        document.getElementById("sectionTitle").value = section.section;
        document.getElementById("sectionDescription").value = section.content
          .map((item) => item.subtitle || item.title)
          .join("\n");

        currentSectionIndex = index;

        section.content[0]?.items?.forEach((item, idx) => {
          document.getElementById(`data${idx + 1}`).value = item.title;
          document.getElementById(`dataDesc${idx + 1}`).value =
            item.description;
        });

        // 해당 섹션을 펼침
        const sectionContent = document.getElementById(section.contentId);
        sectionContent.style.maxHeight = sectionContent.scrollHeight + "px";
        const toggleButton = document.getElementById(section.toggleId);
        toggleButton.innerHTML = "➖";

        document
          .querySelector(`a[href='#${section.id}']`)
          .classList.add("active");
      });

      const toggleButton = document.createElement("div");
      toggleButton.className = "toggle-button";
      toggleButton.textContent = "➕";
      toggleButton.id = section.toggleId;
      flexDiv.appendChild(toggleButton);

      sectionHeader.appendChild(flexDiv);
      sectionDiv.appendChild(sectionHeader);

      const sectionContent = document.createElement("div");
      sectionContent.className = "section-content";
      sectionContent.id = section.contentId;

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
        });
      }

      sectionDiv.appendChild(sectionContent);
      content.appendChild(sectionDiv);
    });
  }

  function setupToggle(toggleButtonId, contentId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById(toggleButtonId);

    content.style.maxHeight = "0";
    button.innerHTML = "➕";

    button.addEventListener("click", function () {
      const section = button.parentNode.parentNode.parentNode;
      const sectionId = section.id;

      if (
        content.style.maxHeight === "0px" ||
        content.style.maxHeight === "0"
      ) {
        content.style.maxHeight = content.scrollHeight + "px";
        button.innerHTML = "➖";

        document
          .querySelector(`a[href='#${sectionId}']`)
          .classList.add("active");
      } else {
        content.style.maxHeight = "0";
        button.innerHTML = "➕";

        document
          .querySelector(`a[href='#${sectionId}']`)
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

  function setupMenuToggle() {
    const menuLinks = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll(".section-content");

    menuLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        menuLinks.forEach((link) => {
          link.classList.remove("active");
        });

        this.classList.add("active");

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document
          .getElementById(targetId)
          .querySelector(".section-content");

        sections.forEach((section) => {
          if (section !== targetSection) {
            section.style.maxHeight = "0";
            const toggleButton =
              section.previousElementSibling.querySelector(".toggle-button");
            if (toggleButton) {
              toggleButton.innerHTML = "➕";
            }
          }
        });

        if (
          targetSection.style.maxHeight === "0px" ||
          targetSection.style.maxHeight === "0"
        ) {
          targetSection.style.maxHeight = targetSection.scrollHeight + "px";
          const toggleButton =
            targetSection.previousElementSibling.querySelector(
              ".toggle-button"
            );
          if (toggleButton) {
            toggleButton.innerHTML = "➖";
          }
        } else {
          targetSection.style.maxHeight = "0";
          const toggleButton =
            targetSection.previousElementSibling.querySelector(
              ".toggle-button"
            );
          if (toggleButton) {
            toggleButton.innerHTML = "➕";
          }
        }

        document
          .getElementById(targetId)
          .scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  saveBtn.addEventListener("click", function () {
    const sectionTitle = document.getElementById("sectionTitle").value;
    const sectionDescription =
      document.getElementById("sectionDescription").value;

    const expandedSections = {};
    document.querySelectorAll(".section-content").forEach((section) => {
      if (
        section.style.maxHeight !== "0px" &&
        section.style.maxHeight !== "0"
      ) {
        expandedSections[section.id] = true;
      }
    });

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

    renderContent();

    data.forEach((section) => {
      setupToggle(section.toggleId, section.contentId);
    });

    Object.keys(expandedSections).forEach((id) => {
      const sectionContent = document.getElementById(id);
      sectionContent.style.maxHeight = sectionContent.scrollHeight + "px";
      const toggleButton =
        sectionContent.previousElementSibling.querySelector(".toggle-button");
      toggleButton.innerHTML = "➖";

      document
        .querySelector(`a[href='#${sectionContent.parentNode.id}']`)
        .classList.add("active");
    });

    closeModal();
  });

  function initialize() {
    renderMenu();
    renderContent();
    data.forEach((section) => {
      setupToggle(section.toggleId, section.contentId);
    });
    setupMenuToggle();
  }

  initialize();
});
