const questions = {
   English: [
        {
            questionText: 'What is called Job Seeker?',
            answerOptions: [
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is called Recruiter?',
            answerOptions: [
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is Resume?',
            answerOptions: [
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is ShortList?',
            answerOptions: [
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is the Head in Recruitment?',
            answerOptions: [
                { answerText: 'HR', isCorrect: false },
                { answerText: 'TL', isCorrect: false },
                { answerText: 'FM', isCorrect: true },
                { answerText: 'CPO', isCorrect: false },
            ],
        },
    
    ]
} 
    
    // n = 5 to export 5 question
    export default (n = 5) =>
    Promise.resolve(questions.English.sort(() => 0.5 - Math.random()).slice(0, n));
    