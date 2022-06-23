import { IAnimal } from 'src/app/animals/components/animal/animal'

export interface IAnimalState {
    animals: IAnimal[]
    selectedAnimal: IAnimal | null
}

export const initialAnimalState: IAnimalState = {
    animals: [],
    selectedAnimal: null
}