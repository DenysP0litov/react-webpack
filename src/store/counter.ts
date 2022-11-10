import { makeObservable, observable, action } from "mobx"

export class Counter {
  value = +JSON.parse(localStorage.getItem('counter')!)

  constructor() {
    makeObservable(this, {
        value: observable,
        increase: action,
        increaseBy: action,
        decrease: action,
        decreaseBy: action,
    })
  }

  increase() {
    this.value++
    this.saveState()
  }

  decrease() {
    this.value--
    this.saveState()
  }

  increaseBy(amount: number) {
    this.value += amount
    this.saveState()
  }

  decreaseBy(amount: number) {
    this.value -= amount
    this.saveState()
  }

  saveState() {
    localStorage.setItem('counter', `${this.value}`)
  }
}