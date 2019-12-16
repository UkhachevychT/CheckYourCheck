import { Product } from './product';

export class Check{
    // name: string
    // location: string
    // products: Array<Product>
    // date: Date
    // file: File

    id
    image: string
    retrieved_text: string
    parsed_text: CheckData
    upload_date: string

    constructor() {
    }
}

export class CheckData{
    shop:string
    tax: string
    total: string
    date: string

    constructor(){

    }
}
