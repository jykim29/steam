const gameData = [
  {
    id: 0,
    name: "remnant",
    sale: "-40",
    price: "31,800",
  },
  {
    id: 1,
    name: "ark",
    sale: "-10",
    price: "54,900",
  },
  {
    id: 2,
    name: "diablo",
    sale: "-40",
    price: "50,700",
  },
  {
    id: 3,
    name: "projectzomboid",
    sale: "-33",
    price: "14,400",
  },
  {
    id: 4,
    name: "outlast",
    sale: "-25",
    price: "24,000",
  },
  {
    id: 5,
    name: "riskofrain",
    sale: "-15",
    price: "14,020",
  },
  {
    id: 6,
    name: "cities",
    sale: "-10",
    price: "49,500",
  },
  {
    id: 7,
    name: "fc24",
    sale: "-60",
    price: "30,800",
  },
  {
    id: 8,
    name: "anno",
    sale: "-75",
    price: "16,250",
  },
];

const categoryData = [
  {
    id: 0,
    title: "DECK 완벽 호환",
    color: "darkred",
    img: "deck",
  },
  {
    id: 1,
    title: "비주얼 노벨",
    color: "darkblue",
    img: "visualnovel",
  },
  {
    id: 2,
    title: "VR 게임",
    color: "darkgoldenrod",
    img: "vrgame",
  },
  {
    id: 3,
    title: "레이싱",
    color: "darkgreen",
    img: "racing",
  },
  {
    id: 4,
    title: "캐주얼",
    color: "darkcyan",
    img: "casual",
  },
  {
    id: 5,
    title: "협동",
    color: "darkmagenta",
    img: "coop",
  },
  {
    id: 6,
    title: "오픈 월드",
    color: "#e98c00",
    img: "openworld",
  },
  {
    id: 7,
    title: "어드벤처",
    color: "darkred",
    img: "adventure",
  },
  {
    id: 8,
    title: "격투",
    color: "darkblue",
    img: "fighting",
  },
  {
    id: 9,
    title: "로그라이크",
    color: "darkgoldenrod",
    img: "roguelike",
  },
  {
    id: 10,
    title: "풍부한 스토리",
    color: "darkred",
    img: "storyrich",
  },
  {
    id: 11,
    title: "도시 및 정착",
    color: "darkblue",
    img: "strategycities",
  },
];

const recommendSwiper = new Swiper(".swiper-recommend > .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-recommend > .games-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "bullet-active",
    renderBullet: function (index, className) {
      return `<div class="${className}"></div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-recommend > .swiper-button-next",
    prevEl: ".swiper-recommend > .swiper-button-prev",
  },
  on: {
    init: function () {
      const swiperWrapper = document.querySelector(".swiper-recommend .swiper-wrapper");
      gameData.forEach((item) => {
        const template = createGameCardTemplate(item);
        swiperWrapper.insertAdjacentHTML("beforeend", template);
      });
      this.update();
    },
  },
  effect: "coverflow",
  coverflowEffect: {
    depth: 100,
    rotate: 10,
    slideShadows: false,
  },
});

function createGameCardTemplate(data) {
  return /*html*/ `
  <div class="swiper-slide">
    <div class="card" data-index="${data.id}" style="background-image: url(./assets/${data.name}.jpg);">
      <div class="card-detail">
        <div class="sale">${data.sale}%</div>
        <div class="price">￦ ${data.price}</div>
      </div>
    </div>
  </div>
  `;
}

function createCategoryCardTemplate(data) {
  return /*html*/ `
  <div class="swiper-slide">
    <div class="category-item" data-index="${data.id}" style="background: linear-gradient(to bottom, transparent, ${data.color}), url(./assets/${data.img}.png) no-repeat center / cover;">
    <p class="category-title">${data.title}</p>
    </div>
  </div>
  `;
}

const categorySwiper = new Swiper(".swiper-category > .swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".swiper-category > .games-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "bullet-active",
    renderBullet: function (index, className) {
      return `<div class="${className}"></div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-category > .swiper-button-next",
    prevEl: ".swiper-category > .swiper-button-prev",
  },
  on: {
    init: function () {
      const swiperWrapper = document.querySelector(".swiper-category .swiper-wrapper");
      categoryData.forEach((item) => {
        const template = createCategoryCardTemplate(item);
        swiperWrapper.insertAdjacentHTML("beforeend", template);
      });
      this.update();
    },
  },
});
