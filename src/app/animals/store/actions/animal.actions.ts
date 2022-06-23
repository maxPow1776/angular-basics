import { Action } from '@ngrx/store'
import { IAnimal } from 'src/app/animals/components/animal/animal'

export enum EAnimalActions {
    GetAnimals = '[Animal] Get Animals',
    GetAnimalsSuccess = '[Animal] Get Animals Success',
    GetAnimal = '[Animal] Get Animal',
    GetAnimalSuccess = '[Animal] Get Animal Success',
    GetAnimalsWithoutCats = '[Animal] Get Animals Without Cats',
    DeleteAnimal = '[Animal] Delete Animal',
    AddAnimal = '[Animal] Add Animal',
    UpdateAnimal = '[Animal] Update Animal',
}

export class GetAnimals implements Action {
    public readonly type = EAnimalActions.GetAnimals
}

export class GetAnimalsSuccess implements Action {
    public readonly type = EAnimalActions.GetAnimalsSuccess
    constructor(public payload: IAnimal[]) {}
}

export class GetAnimal implements Action {
    public readonly type = EAnimalActions.GetAnimal
    constructor(public payload: string) {}
}

export class GetAnimalSuccess implements Action {
    public readonly type = EAnimalActions.GetAnimalSuccess
    constructor(public payload: IAnimal) {}
}

export class GetAnimalsWithoutCats implements Action {
    public readonly type = EAnimalActions.GetAnimalsWithoutCats
}

export class DeleteAnimal implements Action {
    public readonly type = EAnimalActions.DeleteAnimal
    constructor(public payload: string) {}
}

export class AddAnimal implements Action {
    public readonly type = EAnimalActions.AddAnimal
    constructor(public payload: IAnimal) {}
}

export class UpdateAnimal implements Action {
    public readonly type = EAnimalActions.UpdateAnimal
    constructor(public payload: {id: string, animal: IAnimal}) {}
}

export type AnimalActions = GetAnimals | GetAnimalsSuccess | GetAnimal | GetAnimalSuccess | GetAnimalsWithoutCats | DeleteAnimal | AddAnimal | UpdateAnimal