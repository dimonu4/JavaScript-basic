"use strict";

// В стиле ES-5
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = this.text + text;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

let post1 = new AttachedPost(
  "Aristotel",
  "The sense of life is ",
  "12.03.2021"
);
post1.edit("life");
post1.makeTextHighlighted();
console.log(post1);

// В стиле ES-6

class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(text) {
    this.text = this.text + text;
  }
}

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let post1 = new AttachedPost(
  "Aristotel",
  "The sense of life is ",
  "12.03.2021"
);
post1.edit("life");
post1.makeTextHighlighted();
console.log(post1);
