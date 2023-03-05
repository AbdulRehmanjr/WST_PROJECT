import { Category } from "./category"

export class Quiz {
    id:number
    title:string
    description:string
    category:Category
    numberOfQuestions:number
    totalMarks:number
    time:number
    active:boolean
}
