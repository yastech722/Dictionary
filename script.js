//object
let word = {
  id: 1,
  word: "Apple",
  meaning: "A fruit",
  Example: "The boy is eating the apple",
};

//class
class Word {
  constructor(id, word, meaning, Example) {
    this.id = id;
    this.word = word;
    this.meaning = meaning;
    this.Example = Example;
  }
}
class Storage {
  static addWord(word) {
    let words = Storage.fetchWord();
    words.push(word);
    localStorage.setItem("words", JSON.stringify(words));
  }
  static fetchWord() {
    let words = [];
    if (localStorage.getItem("words") != null) {
      words = JSON.parse(localStorage.getItem("words"));
    }
    return words;
  }
}
class UI {
  static loadWordList() {
    // word.style.listStyle = none;
    const meaning = document.querySelector("#meaning");
    const example = document.querySelector("#example");

    const words = Storage.fetchWord();
    meaning.innerHTML = words[0].meaning;
    example.innerHTML = words[0].Example;
    words.forEach((content) => UI.loadWord(content));
  }
  static loadWord(element) {
    const word = document.querySelector("#word-list");
    const item = document.createElement("ul");
    item.className == `list-group`;
    item.innerHTML = `<li class="list-group-item">${element.word}</li>`;
    word.append(item);
  }
  static getWordMeaning(word, content) {
    if (content.word === word) {
      meaning.innerHTML = content.meaning;
      example.innerHTML = content.Example;
    }
  }
}

document.addEventListener("DOMContentLoaded", UI.loadWordList());

document.querySelector("#btn-save").addEventListener("click", function () {
  let id = Storage.fetchWord.lenght + 1;
  let word = document.querySelector("#new-word").value;
  let meaning = document.querySelector("#new-meaning").value;
  let example = document.querySelector("#new-example").value;
  let newWord = new Word(id, word, meaning, example);
  Storage.addWord(newWord);
  UI.loadWordList();
});

document.querySelector("#word-list").addEventListener("click", (e) => {

   console.log(e.target.textContent);
   Storage.fetchWord().forEach((content) =>
     UI.getWordMeaning(e.target.textContent, content)
   );
});

document.querySelector("#search-btn").addEventListener("click", (e) => {
  const word = document.querySelector("#word-search").value;
  Storage.fetchWord().forEach((content) => UI.getWordMeaning(word, content));
});
