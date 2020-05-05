export default class Card {
  constructor({ $target, data }) {
    this.data = data;
    this.card = document.createElement("article");
    this.card.className = "item-card";
    $target.appendChild(this.card);
    this.render();
  }
  render() {
    const item = this.data.item;
    const sex = this.data.sex;
    const size = this.data.size;

    const itemImg = document.createElement("img");
    itemImg.className = "select-item";
    itemImg.src = item;

    const sexInfo = document.createElement("span");
    sexInfo.className = "sex-info";
    sexInfo.innerText = sex + ",";

    const sizeInfo = document.createElement("span");
    sizeInfo.className = "size-info";
    sizeInfo.innerText = size;

    this.card.appendChild(itemImg);
    this.card.appendChild(sexInfo);
    this.card.appendChild(sizeInfo);
  }
}
