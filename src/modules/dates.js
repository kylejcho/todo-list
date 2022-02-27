import {format, startOfDay, addDays, isAfter, isBefore, isToday, getHours, isWithinInterval} from 'date-fns';

const getDate = () => {
    return today();
}

export const nextWeek = (date) => {
    return addDays(date, 7)
}

export const within7Days = (date) => {
   

    return isWithinInterval(date, { start: startOfDay(new Date()), end: addDays(new Date(),7) })
}

export const formatDate = (date) => {
    const dateFormatted = format(date, 'EEEE, LLLL do, yyyy');
    return dateFormatted;
}

export const getMonth = () => {
    return format(new Date, 'LLL')
}

export const getYear = () => {
    return format(new Date, 'yyyy')
}

export const getDayOfMonth = (date) => {
    return format(date, 'd')
}


export const isMorning = () => {
    if (getHours(new Date()) < 12) {
        return true
    }
}

export const isAfternoon = () => {
    if (getHours(new Date()) >= 12 && getHours(new Date())< 18){
        return true
    }
}

export default getDate;
