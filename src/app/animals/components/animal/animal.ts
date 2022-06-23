export interface IAnimal {
    _id: string
    type: string
    name: string
    age?: number
    city?: string
    price?: number
    color?: string
    favoriteFood?: string[]
}

export class Animal implements IAnimal {
    _id: string
    type: string
    name: string
    age?: number
    city?: string
    price?: number
    color?: string
    favoriteFood?: string[]

    constructor(
        _id: string,
        type: string, 
        name: string,
        age?: number,
        city?: string,
        price?: number,
        color?: string,
        favoriteFood?: string[]
    ) {
        this._id = _id
        this.type = type
        this.name = name
        if (age) this.age = age
        if (city) this.city = city
        if (price) this.price = price
        if (color) this.color = color
        if (favoriteFood) this.favoriteFood = favoriteFood
    }
}