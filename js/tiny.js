const initial = {
    component: {}
}

export default function Tiny(options) {
    options = Object.assign({}, initial, options)
    const element = typeof options.selector === 'string' ?
        document.querySelector(options.selector) : options.selector

    function _render(element, options) {
        element.innerHTML = options.template()
    }

    function _addEventListener(element, options) {
        const listenerElements = document.querySelectorAll('[tiny-listener]')
        for (const listenerElement of listenerElements) {
            const attribute = listenerElement.getAttribute('tiny-listener')
            const listenerInfo = attribute.replace('[', '').replace(']', '').split(',').map(l => l.trim())
            const [eventName, fn] = listenerInfo
            listenerElement.addEventListener(eventName, options[fn].bind(options))
        }
    }

    function _renderChildComponents() {
        const compEls = document.querySelectorAll('[tiny-component]')
        for (const compEl of compEls) {
            const compName = compEl.getAttribute('tiny-component')
            const comp = options.component[compName]
            compEl.innerHTML = comp.template()

            _render(compEl, comp)
            _addEventListener(compEl, comp)
        }
    }

    if (options.selector) {
        _render(element, options)
        _addEventListener(element, options)
        _renderChildComponents()
    }

    options.setState = (newState) => {
        const entries = Object.entries(newState)
        for (const entry of entries) {
            options.state[entry[0]] = entry[1]
        }
        _render()
        _addEventListener()
    }

    return options
}