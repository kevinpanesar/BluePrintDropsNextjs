
const monthSeperator = (element) => {
    const month = format(new Date(element.date), "LLLL");


    if (month == "January") {
      state.months.January.push(element);
    } else if (month == "Febuary") {
      state.months.Febuary.push(element);
    } else if (month == "March") {
      state.months.March.push(element);
    } else if (month == "April") {
      state.months.April.push(element);
    } else if (month == "May") {
      state.months.May.push(element);
    } else if (month == "June") {
      state.months.June.push(element);
    } else if (month == "July") {
      state.months.July.push(element);
    } else if (month == "August") {
      state.months.August.push(element);
    } else if (month == "September") {
      state.months.September.push(element);
    } else if (month == "October") {
      state.months.October.push(element);
    } else if (month == "November") {
      state.months.November.push(element);
    } else if (month == "December") {
      state.months.December.push(element);
    }
  }

export default monthSeperator;