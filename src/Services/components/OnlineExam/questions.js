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
                { answerText: 'a formal document that a job applicant creates to itemize their qualifications for a position', isCorrect: true },
                { answerText: 'a formal document that a job applicant creates to Unnecessary personal information', isCorrect: false },
                { answerText: 'a formal document that a job applicant creates to Details about your hobbies and interests', isCorrect: false },
                { answerText: 'a formal document that a job applicant creates to Inaccuracies about your qualifications or experience', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is ShortList?',
            answerOptions: [
                { answerText: 'You have cleared the round of interviews and finally only salary negotiation is left.', isCorrect: false },
                { answerText: 'Carefully choose as being the best or most suitableb', isCorrect: false },
                { answerText: 'You have selected among other candidate profile based upon the type of skills that you have mentioned in the resume', isCorrect: true },
                { answerText: 'The number of people which recieves the final call for the job are the selected ones.', isCorrect: false },
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
    