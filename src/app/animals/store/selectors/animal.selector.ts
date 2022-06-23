import { createSelector } from '@ngrx/store'
import { IAppState } from '../state/app.state'
import { IAnimalState } from '../state/animal.state'

const selectAnimals = (state: IAppState) => state.animals

export const selectAnimalList = createSelector(
    selectAnimals,
    (state: IAnimalState) => state.animals
)

export const selectSelectedAnimal = createSelector(
    selectAnimals,
    (state: IAnimalState) => state.selectedAnimal
)