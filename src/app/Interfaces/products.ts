import { Categories } from "./categories"

export interface Products {
    _id: string
    title: string,
    imageCover: string,
    category: Categories,
    price: number,
    ratingsAverage: number,
    description: string,
    quantity:number   
}
