class Sorter {
  constructor() {
    this.store = [];
    this.compareFunction = function (left, right) {
      return left - right;
    }
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indeces) {
    var sliceStore = [];

    indeces.forEach( (element) => {
      sliceStore.push(this.store[element]);
    });

    sliceStore.sort(this.compareFunction);

    indeces.forEach( (element) => {
      this.store[element] = sliceStore.shift();
    })

    return this.store;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
