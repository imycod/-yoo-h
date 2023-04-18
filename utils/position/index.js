export function usePosition() {
    const position = {
        get(el) {
            const { top, left, width, height } = el.getBoundingClientRect()
            return {
                top,
                left,
                width,
                height,
            }
        },
        set(value, el) {
            el.style.top = value.top + 'px'
            el.style.left = value.left + 'px'
            el.style.width = value.width + 'px'
            el.style.height = value.height + 'px'
        },
    }
    return {
        position,
        setPosition(aDom, bDom) {
            // a to b 
            const aPosition = position.get(aDom.length > 0 ? aDom[0] : aDom)
            position.set(aPosition, bDom)
        }
    }
}