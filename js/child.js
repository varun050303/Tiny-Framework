import Tiny from './tiny.js'

export default Tiny({
    state: {
        count: 5
    },
    increaseCount(event) {
        this.setState({
            count: this.state.count + 1
        })
    },
    increaseParentCount(event) {
        console.log('Increasing Parent Count')
    },
    template() {
        return `
        <div class="component child-component flow">
            <h2>Child Counter</h2>
            <p>Count: ${this.state.count}</p>
            <button tiny-listener="[click,increaseCount]">Increase count by 1</button>
            <button tiny-listener="[click,increaseParentCount]">Increase parent count by 1</button>
        </div>
        `
    }
})