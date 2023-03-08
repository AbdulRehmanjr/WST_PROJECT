import { Category } from "./category"

export class Quiz {
    quizId:number
    title:string
    content:string
    category:Category
    numberOfQuestions:number
    totalMarks:number
    time:number
    active:boolean
}
