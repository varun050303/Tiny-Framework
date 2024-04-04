import Tiny from './tiny.js'

export default Tiny({
    template() {
        return `
        <div class="component total-component flow text">
            <h2>Total Count</h2>
            <ul>
              <li>Parent Count: ${this.state.count}</li>
              <li>Child Count: ${this.state.childCount}</li>
              <li>Total Count: ${this.state.count + this.state.childCount}</li>
            </ul>
        </div>
        `
    }
})