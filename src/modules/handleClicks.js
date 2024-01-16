const getActiveBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.btns')
        if (btns) {
            console.log(btns)
        }
    })
})()

export {getActiveBtn}