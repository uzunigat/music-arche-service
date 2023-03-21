const addOneHourToCurrentDate = (): Date => {
  const currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 1)
  return currentDate
}

const isExpired = (date: Date): boolean => {
  const currentDate = new Date()
  return currentDate > date
}

export { addOneHourToCurrentDate, isExpired }
