const dict = { "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14, "2020-01-06": 2, "2020-01-07": 4 }

const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const result = {}
for (const key in dict) {

    const date = new Date(key)
    const newDate = dayNames[date.getDay()]
    if (newDate in result) {
        result[newDate] += dict[key];
    }
    else {

        result[newDate] = dict[key];
    }
}
const sortWeek = (obj) => {
    const week = {
        Monday: null,
        Tuesday: null,
        Wednesday: null,
        Thursday: null,
        Friday: null,
        Saturday: null,
        Sunday: null,
    };
    for (const [key, value] of Object.entries(week)) {
        if (obj[key]) week[key] = obj[key];
    }
    let i = 0
    for (const [key, value] of Object.entries(week)) {
        if (week[key] == null) {
            let previous = Object.values(week)[i - 1]
            let next = Object.values(week)[i + 1]
            if (previous == null || next == null) {
                previous = Object.values(week)[0]
                next = Object.values(week)[Object.keys(week).length - 1]
            }
            const mean = (previous + next) / 2
            week[key] = mean
        }
        i += 1
    }

    return week;
};

console.log(sortWeek(result))