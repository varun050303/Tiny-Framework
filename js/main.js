import Tiny from './tiny.js'
import child from './child.js'
Tiny({
  selector: 'main',
  component: {
    child
  },
  template() {
    return `
        <div class="component parent-component flow">
        <h1>Parent Counter</h1>
        <p>Count: ${this.state.count}</p>
        <button tiny-listener="[click,increaseCount]">Increase count by 1</button>

        <div class="half">
          <div tiny-component="child"></div>
        </div>
      </div>`
  },
  increaseCount(event) {
    this.setState({
      count: this.state.count + 1
    })
  },
  increaseChildCount(event) {
    this.setState({
      childCount: this.state.childCount + 1
    })
  },
  state: {
    count: 10,
    childCount: 5
  }
})