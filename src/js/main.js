import { shop_data } from "./data.js";
import Card from "./card.js";

export default class Main {
  constructor() {
    this.data = shop_data;
    this.section = document.querySelector("section");
    this.render(this.data);
  }

  selectTypeItem(type) {
    let selectIconItem = [];
    this.data.forEach(data => {
      if (data.type === type) {
        selectIconItem.push(data);
      }
    });
    this.render(selectIconItem);
  }

  selectColorItem(item) {
    let selectColorItem = [];
    this.data.forEach(data => {
      if (data.color === item) {
        selectColorItem.push(data);
      }
    });
    this.render(selectColorItem);
  }

  render(data) {
    this.section.innerHTML = "";
    data.map(item => {
      new Card({
        $target: this.section,
        data: item
      });
    });

    const headerIcon = document.querySelector(".header-icon");
    headerIcon.addEventListener("click", () => {
      this.render(this.data);
    });

    const shirtIcon = document.querySelector(".shirt");
    shirtIcon.addEventListener("click", () => {
      this.selectTypeItem("shirt");
    });
    const pantsIcon = document.querySelector(".pants");
    pantsIcon.addEventListener("click", () => {
      this.selectTypeItem("pants");
    });
    const skertIcon = document.querySelector(".skert");
    skertIcon.addEventListener("click", () => {
      this.selectTypeItem("skert");
    });

    const blueBtn = document.querySelector(".blue-btn");
    blueBtn.addEventListener("click", () => {
      this.selectColorItem("blue");
    });
    const pinkBtn = document.querySelector(".pink-btn");
    pinkBtn.addEventListener("click", () => {
      this.selectColorItem("pink");
    });
    const yellowBtn = document.querySelector(".yellow-btn");
    yellowBtn.addEventListener("click", () => {
      this.selectColorItem("yellow");
    });
  }
}
