//object
let word={
    id:1,
    word:"Apple",
    meaning:"A fruit",
    Example:"The boy is eating the apple",
    
}

//class
class Word{
    constructor(id, word,meaning,Example){
        this.id=id;
        this.word=word;
        this.meaning=meaning;
        this.Example=Example;
    }
}
class Storage{
    static addWord(word){
let words= Storage.fetchWord();
words.push(word);
localStorage.setItem('words', JSON.stringify(words))
    }
    static fetchWord(){
        let words=[]
if(localStorage.getItem("words")!=null){
    words= JSON.parse(localStorage.getItem("words"))
}
        return words
    }
}

document.querySelector('#btn-save').addEventListener("click", function(){
    let id=Storage.fetchWord.lenght+1;
   let word= document.querySelector("#new-word").value;
   let meaning= document.querySelector("#new-meaning").value
   let example=document.querySelector("#new-example").value
   let newWord= new Word(id, word,meaning,example)
   Storage.addWord(newWord)

})