import { Product } from './product';

export class Check{
    id: number
    name: string
    location: string
    products: Array<Product>
    date: Date
    file: File

    constructor() {
    }
}
