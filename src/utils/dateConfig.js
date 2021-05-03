
// Добавляет к дате переданное количество дней
const  addDays = (date, numDays) => {
    let res = new Date(date)
    res = res.setDate(date.getDate() + numDays)
    res = new Date(Number(res))

    return res
}


// возвращает дату в удобном для вывода коротком формате
const dateToString = (date) => {

    let day = date.getDate()
    let month = date.getMonth() + 1;
    
    if (day.toString().length === 1) {
        day = `0${day}`
    }

    if (month.toString().length === 1) {
        month = `0${month}`
    }
    return `${day}.${month}`
}

// возвращает дату в удобном для вывода длинном формате
const dateToLongString = (date) => {

    let year = date.getFullYear();

    return `${dateToString(date)}.${year}`
}

// возвращает название дня переданной даты
const getDayName = (date) => {
    const daysName =["sunday", "monday", "tuesday", "wednesd", "thursday", "friday", "saturday"]
    return daysName[date.getDay()]
}

// возвращает название месяца переданной даты
const getMonthName = (date) => {
    const MonthName =[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return MonthName[date.getMonth()]
}

export {dateToString, dateToLongString, addDays, getDayName, getMonthName}