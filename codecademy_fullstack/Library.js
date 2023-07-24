class Media {
    constructor (title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    set isCheckedOut(val) {
      return this._isCheckedOut = val;
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRating () {
      let total = 0;
      for(let i = 0; i < this._ratings.length; i++) {
        total += this._ratings[i];
      }
      const avg = total / this._ratings.length;
      return avg;
    }
    toggleCheckOutStatus (val) {
      this._isCheckedOut = val;
      return this._isCheckedOut;
      }
    addRating (newRating) { 
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  }
  
  class CD extends Media {
    constructor(title, artist) {
      super(title);
      this._artist = artist;
      this._isCheckedOut = false;
      this._ratings = [];
      this._songs = [];
    }
    get artist() {
      return this._author;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    get songs() {
      return this._songs;
    }
    addSong (songName) {
      this._songs.push(songName);
    }
  }
  
  killEmAll = new CD('KillEmAll','Metallica');
  killEmAll.addSong('Motorbreath');
  killEmAll.addRating(10);
  killEmAll.addRating(9);
  killEmAll.toggleCheckOutStatus(true);
  console.log(killEmAll.title);
  console.log(killEmAll.songs);
  console.log(killEmAll.ratings);
  console.log(killEmAll.getAverageRating());
  console.log(killEmAll.isCheckedOut);
  
  ecce = new Book('Ecce Homo','Nietzsche',150);
  ecce.addRating(10);
  ecce.addRating(9);
  ecce.toggleCheckOutStatus(true);
  console.log(ecce.title);
  console.log(ecce.author);
  console.log(ecce.pages);
  console.log(ecce.ratings);
  console.log(ecce.getAverageRating());
  console.log(ecce.isCheckedOut);
  
  inception = new Movie('Inception','Leonardo',120);
  inception.addRating(10);
  inception.addRating(9);
  inception.toggleCheckOutStatus(true);
  console.log(inception.title);
  console.log(inception.director);
  console.log(inception.ratings);
  console.log(inception.runTime);
  console.log(inception.getAverageRating());
  console.log(inception.isCheckedOut);
  