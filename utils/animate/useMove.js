export default function useMove(el, position, options = null) {
    const keyframes = [
        {
            top: `${el.offsetTop}px`,
            left: `${el.offsetLeft}px`,
            width: `${el.offsetWidth}px`,
            height: `${el.offsetHeight}px`,
        },
        {
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
            height: `${position.height}px`,
        },
    ]
    const params = {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards',
    }

    // 合并参数 options 和 params
    const mergeParams = Object.assign(params, options)


    el.animate(keyframes, mergeParams)
}