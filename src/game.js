function game() {
    let dieValue = -1
    let state = 1

    return {
        getDieValue: _ => dieValue,

        setDieValue: val => {
            console.log(val)

            dieValue = val
        },

        setState: state => {
            state = state
        }
    }
}

export default game