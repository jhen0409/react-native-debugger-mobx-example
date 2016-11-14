import { observable, action, useStrict } from 'mobx'
import remotedev from 'mobx-remotedev'

useStrict(true)

export default remotedev(class Counter {
  @observable counter = 0

  @action increment() {
    this.counter++
  }

  @action decrement() {
    this.counter--
  }

  @action incrementIfOdd() {
    if (this.counter % 2 === 0) {
      return
    }
    this.counter++
  }

  incrementAsync(delay = 1000) {
    setTimeout(() => {
      this.increment();
    }, delay)
  }
}, {
  // Options: https://github.com/zalmoxisus/mobx-remotedev#api
})
