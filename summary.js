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
          subtitle: "최근 플레이한 게임: 게임 X",
          description:
            "게임 X는 모험과 퍼즐 해결이 결합된 게임으로, 다채로운 세계를 탐험할 수 있습니다.",
          pros: "스토리가 매력적이고, 퍼즐이 도전적입니다.",
          cons: "때때로 로딩 시간이 길어질 수 있습니다.",
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
          subtitle: "이번 달 패션 트렌드: 봄을 맞이하는 산뜻한 스타일",
          description: [
            "봄맞이 메이크업 팁: 화사한 봄꽃처럼, 핑크와 코랄 색상의 블러셔를 추천합니다.",
            "추천 아이템: 가벼운 소재의 스카프와 선글라스로 포인트를 주세요.",
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
          title: "꽃길이 따로 있나, 내 삶이 꽃인 것을 - 오평선",
          description:
            "지금껏 가족을 위해 행복을 뒤로 미루며 살아온 부모님에게, 세상의 기준에 맞추며 사느라 내 삶을 뒤로 미뤘던 나에게 이 책을 선물하자. 책 속의 문장들이 외롭고 지친 날 기댈 수 있는 든든한 쉼터가 되어줄 것이다.",
        },
        {
          title: "세이노의 가르침 - 세이노",
          description:
            "순자산 천억 원대 자산가, 세이노의 ‘요즘 생각’을 만나다 책입니다. 인생 선배로서 부와 성공에 대한 지혜와 함께 삶에 대한 체험적 지식을 나누어 주었다. 그래서 그의 글을 좋아하는 사람들은 그를 ‘세이노 스승님’이라 부른다.",
        },
        {
          title: "불변의 법칙 - 모건 하우절",
          description:
            "세계적인 베스트셀러 『돈의 심리학』의 저자 모건 하우절이 3년 만에 세상에 내놓은 신작.‘절대 변하지 않는 것들에 대한 23가지 이야기’를 전한다. 국내 유수의 리더들 또한 먼저 읽고 “대단한 책이다”라는 평가를 내놓았다.",
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
          title: "영화 1",
          director: "감독 A",
          description:
            "이 영화는 사랑과 우정에 대한 감동적인 이야기를 담고 있습니다.",
        },
        {
          title: "영화 2",
          director: "감독 B",
          description: "모험과 액션이 가득한 흥미진진한 영화입니다.",
        },
        {
          title: "영화 3",
          director: "감독 C",
          description:
            "미래를 배경으로 한 공상 과학 영화로, 놀라운 비주얼과 스토리를 자랑합니다.",
        },
      ],
    },
  ];

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
    data.forEach((section) => {
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
});
