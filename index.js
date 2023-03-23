const addDays = require("date-fns/addDays");

function addXDays(days) {
  const dateObj = addDays(new Date(2020, 8, 22), days);
  return `${dateObj.getDate()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getFullYear()}`;
}

module.exports = addXDays;
