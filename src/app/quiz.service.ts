import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuestions() {
    return [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        question: "Who developed Angular?",
        options: ["Facebook", "Google", "Microsoft", "Apple"],
        correctAnswer: "Google"
      },
      {
        question: "Who developed Java Programming Language?",
        options: ["Bill Gates", "Ratan TATA", "James Gosling", "Steve Jobs"],
        correctAnswer: "James Gosling"
      },
      {
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        correctAnswer: "New Delhi"
      },
      {
        question: "Who is the CEO of Tesla?",
        options: ["Elon Musk", "Bill Gates", "Sundar Pichai", "Tim Cook"],
        correctAnswer: "Elon Musk"
      },
      {
        question: "what is the largest lake?",
        options: ["Caspian Sea","Baikal","Lake Superior","Ontario"],
        correctAnswer: "Caspian Sea"
      },
      {
        question: "Which planet in the solar system is known as the “Red Planet”?",
        options: ["Venus","Mars","Jupiter","Saturn"],
        correctAnswer: "Mars"
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney","Melbourne","Canberra","Perth"],
        correctAnswer: "Canberra"
      },
      {
        question: "Which is the largest ocean in the world?",
        options: ["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
      },
      {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","Judy Blume"],
        correctAnswer: "J.K. Rowling"
      },
      {
        question:"What is the capital of Japan?",
        options:["Kyoto","Tokyo","Osaka","Hiroshima"],  
        correctAnswer:"Tokyo"
      },
      {
        question:"Which river is the longest in the world?",
        options:["Nile","Amazon","Yangtze","Mississippi"],
        correctAnswer:"Nile"
      },
      {
        question:"What gas is used to extinguish fires?",
        options:["Oxygen","Carbon Dioxide","Nitrogen","Helium"],
        correctAnswer:"Nitrozen"
      },
      {
        question:"What is the name of the process by which plants convert sunlight into energy?",
        options:["Photosynthesis","Respiration","Transpiration","Osmosis"],
        correctAnswer:"Photosynthesis"
      },
      {
        question:"Entomology is the science that studies:",
        options:["Behavior of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks"],
        correctAnswer:"Insects"
      },
      {
        question:"What is the phobia of thunder and rain?",
        options:["ombrophobia","Arachnophobia","Acrophobia","Claustrophobia"],
        correctAnswer:"ombrophobia"
      },
      {
        question:"What is considered the lung of the Earth?",
        options:["Amazon Rainforest","Sahara Desert","Arctic Tundra","Great Barrier Reef"],
        correctAnswer:"Amazon Rainforest"
      },
      {
        question:"In which century the Mona Lisa was painted?",
        options:["14th","15th","16th","17th"],
        correctAnswer:"16th"
      },
      {
        question:"Which is the richest country in the world?",
        options:["China","India","USA","Qatar"],
        correctAnswer:"Qatar"
      },
      {
        question:"How many bones are in the body of an adult human?",
        options:["206","208","210","212"],
        correctAnswer:"206"
      },
      {
        question:"Which city is called the “City of Winds”?",
        options:["Chicago","New York","Los Angeles","Miami"],
        correctAnswer:"Chicago"
      },
      {
        question:"Which river is the second longest in the world?",
        options:["Nile","Amazon","Yangtze","Mississippi"],
        correctAnswer:"Yangtze"
      }
    ];
}
}
