export class Section {
  constructor({ renderer }, containerSelector) {

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element)
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(cardsData) {
    cardsData.forEach(card => {
      this._renderer(card);
      
    })
  }
}
