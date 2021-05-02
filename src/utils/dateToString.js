const dateToString = (date) => {
    let day = date.getDate() 
    let month = date.getMonth()
    
    if (day.toString().length === 1) {
        day = `0${day}`
    }

    if (month.toString().length === 1) {
        month = `0${month}`
    }
    return `${day}.${month}`
}

export {dateToString}