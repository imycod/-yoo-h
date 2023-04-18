import { usePosition } from '../../utils/position/index.js'
import animate from "../../utils/animate/index.js"

const { useMove } = animate
export default {
    install(app) {
        app.directive('effect', {
            mounted(el, binding) {
                const { value, modifiers } = binding
                // const { value:{callback,value},modifiers } = binding
                if (modifiers.hover && modifiers.move) {
                    const { setPosition, position } = usePosition()
                    // Check if value.dom is a DOM element or a string
                    const dom = typeof value.dom === 'string' ? document.getElementById(value.dom) : value.dom;
                    el.addEventListener('mouseenter', (e) => {
                        const target = e.target
                        setPosition(target, dom)
                        useMove(dom, position.get(target))
                    })
                }
            }
        })
    }
}

'v-effect.hover.move'