class Slider{
  constructor(_element){
    this.slider = _element;
    this.items = [this.slider.querySelector('.item-1') /**Left photo */, this.slider.querySelector('.item-2')  /**Middle photo */, this.slider.querySelector('.item-3')  /**Right photo */ , this.slider.querySelector('.item-4')  /**Hidden photo */];
    this.listeners();
  }

  item_RClick = () => {
      this.items[0].removeEventListener('mousedown', this.item_LClick);
      this.items[2].removeEventListener('mousedown', this.item_RClick);
      this.next();
  }

  item_LClick = () => {
      this.items[0].removeEventListener('mousedown', this.item_LClick);
      this.items[2].removeEventListener('mousedown', this.item_RClick);
      this.previous();
  }

  listeners = () => {
      this.items[2].addEventListener('mousedown', this.item_RClick);
      this.items[0].addEventListener('mousedown', this.item_LClick);
  }

  reclass = () => {
    for(let i = 0; i < this.items.length; i++){
      this.items[i].classList.remove('item-1', 'item-2', 'item-3', 'item-4');
      this.items[i].classList.add('item-' + String(i + 1))
    }
    
  }
  
  next = () => {
    this.items.unshift(this.items[3]);
    this.items.pop();
    this.reclass();
    this.listeners();
  }

  previous = () => {
      this.items.push(this.items[0]);
      this.items.shift();
      this.reclass();
      this.listeners();
  }
  
}
const slider = new Slider(document.querySelector('#slider'));