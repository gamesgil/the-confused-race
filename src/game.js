function game() {
    let dieValue = -1

    return {
        getDieValue: _ => dieValue,

        setDieValue: val => {
            console.log(val)
            
            dieValue = val
        }
    }
}

export default game