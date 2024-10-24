import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { QuizService } from '../quiz.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  providers: [QuizService],
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: any[] = [];
  selectedOptions: number[] = [];
  score: number = 0;
  isSubmitted: boolean = false;
  flaggedQuestions: boolean[] = [];
  timeLeft: number = 30 * 60;  // 30 minutes in seconds
  interval: any;

  constructor(
    private quizService: QuizService,
    @Inject(PLATFORM_ID) private platformId: Object  // Inject to detect platform
  ) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.flaggedQuestions = Array(this.questions.length).fill(false);
    this.selectedOptions = Array(this.questions.length).fill(undefined);

    // Start the timer only if on the browser
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  // Timer Function
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.onSubmitQuiz();  // Auto-submit when time reaches 0
      }
    }, 1000);  // 1000ms = 1 second
  }

  // Format Time for Display
  getFormattedTime() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes < 10 ? '0' + minutes:minutes  }:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  // Handle option selection
  onSelectedOptions(questionIndex: number, optionIndex: number) {
    this.selectedOptions[questionIndex] = optionIndex;
  }

  // Submit Quiz
  onSubmitQuiz() {
    this.isSubmitted = true;
    clearInterval(this.interval);  // Stop the timer upon submission

    this.score = 0;
    this.questions.forEach((question, index) => {
      const selectedOption = this.selectedOptions[index] !== undefined 
        ? this.questions[index].options[this.selectedOptions[index]] 
        : null;
      if (selectedOption === question.correctAnswer) {
        this.score++;
      }
    });
  }

  // Toggle flag for questions
  toggleFlag(questionIndex: number) {
    this.flaggedQuestions[questionIndex] = !this.flaggedQuestions[questionIndex];
  }
}




// import { Component } from '@angular/core';
// import { QuizService } from '../quiz.service';
// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-quiz',
//   standalone: true,
//   providers: [QuizService],
//   imports: [CommonModule],
//   templateUrl: './quiz.component.html',
//   styleUrls: ['./quiz.component.css']
// })
// export class QuizComponent {
//   questions: any[] = [];
//   selectedOptions: number[] = [];
//   score: number = 0;
//   isSubmitted: boolean = false;
//   flaggedQuestions: boolean[] = [];
//   timeLeft: number = 30 * 60;  // 30 minutes in seconds
//   interval: any;

//   constructor(private quizService: QuizService) {}

//   ngOnInit() {
//     this.questions = this.quizService.getQuestions();
//     this.flaggedQuestions = Array(this.questions.length).fill(false);
//     this.selectedOptions = Array(this.questions.length).fill(undefined);

//     // Start the timer
//     this.startTimer();
//   }

//   // Timer Function
//   startTimer() {
//     this.interval = setInterval(() => {
//       if (this.timeLeft > 0) {
//         this.timeLeft--;
//       } else {
//         clearInterval(this.interval);
//         this.onSubmitQuiz();  // Auto-submit when time reaches 0
//       }
//     }, 1000);  // 1000ms = 1 second
//   }

//   // Format Time for Display
//   getFormattedTime() {
//     const minutes = Math.floor(this.timeLeft / 60);
//     const seconds = this.timeLeft % 60;
//     return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   }

//   // Function to handle option selection
//   onSelectedOptions(questionIndex: number, optionIndex: number) {
//     this.selectedOptions[questionIndex] = optionIndex;
//   }

//   // Submit Quiz
//   onSubmitQuiz() {
//     this.isSubmitted = true;
//     clearInterval(this.interval);  // Stop the timer upon submission

//     this.score = 0;
//     this.questions.forEach((question, index) => {
//       const selectedOption = this.selectedOptions[index] !== undefined 
//         ? this.questions[index].options[this.selectedOptions[index]] 
//         : null;
//       if (selectedOption === question.correctAnswer) {
//         this.score++;
//       }
//     });
//   }

//   // Toggle flag for questions
//   toggleFlag(questionIndex: number) {
//     this.flaggedQuestions[questionIndex] = !this.flaggedQuestions[questionIndex];
//   }
// }
