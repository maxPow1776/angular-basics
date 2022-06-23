import { Component, Input, OnInit } from '@angular/core'
import { IAnimal } from '../animal/animal'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  @Input() isOpen!: boolean
  @Input() animal!: IAnimal
  moreInfo: string[] = []

  ngOnInit(): void {
    if (Object.keys(this.animal).length > 2) {
      if (this.animal.age) this.moreInfo.push(`Age: ${this.animal.age}`)
      if (this.animal.city) this.moreInfo.push(`City: ${this.animal.city}`)
      if (this.animal.price) this.moreInfo.push(`Price: ${this.animal.price}`)
      if (this.animal.color) this.moreInfo.push(`Color: ${this.animal.color}`)
      if (this.animal.favoriteFood) this.moreInfo.push(`Favorite food: ${this.animal.favoriteFood.join(', ')}`)
    }
  }
}
