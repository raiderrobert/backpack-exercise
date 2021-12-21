const counter = (list) => {
  return list.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: 1 + (prev[curr] || 0),
    }),
    {}
  );
};

const alphaSort = function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
};


class Backpack{

  constructor(size=10) {
        this.size = size;
        this._contents = [];
        this._counts = counter(this._contents);
  }


    get_contents(){
        return this._contents;
    }

    get_counts(){
        return this._counts;
    }

    _drop_contents(){
      if (this._contents.length > this.size){
         this._contents.shift();
      }

    }

    add(item){
        this._contents.push(item);
        this._drop_contents();
        this._contents.sort(alphaSort);
        this._counts = counter(this._contents);
    }

    remove(item){
        this._contents.splice(
          this._contents.findIndex(i => i === item),
          1);
        this._contents.sort(alphaSort);
        this._counts = counter(this._contents);
    }

    most_popular(){
      const obj = this._counts
      const key = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
      return {[key]: obj[key]}
    }


}

module.exports = {
    Backpack
};