const container = document.querySelector('.container')
const error = document.querySelector('.error');

const getAge = () => {
    const dobVal = document.getElementById('dob').value;

    if (!dobVal) return;

    let dob = new Date(dobVal);

    let today = new Date()

    let diff = today - dob;

    let age = diff / (1000 * 60 * 60 * 24 * 365);

    calcAge(age);
}

const calcAge = (age) => {
    let year = Math.floor(age);
    let remainingYear = age - year;

    let monthDiff = remainingYear * 12;
    let month = Math.floor(monthDiff);

    let dayDiff = monthDiff - month;
    
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'dec']
    months.forEach((_element, i) => {
        if((i+1)%2==0){
            daysIn = 31;
        }
        if(months[i]== 1){
            daysIn = 28;
        }
        else{
            daysIn = 30;
        }
    });
    let day = Math.floor(dayDiff * daysIn);
    ageDisp(year, month, day);
}



function ageDisp(y, m, d) {
    const years = document.getElementById('years');
    const month = document.getElementById('month');
    const day = document.getElementById('date');

    years.innerText = y;
    month.innerText = m;
    day.innerText = d;

    if (y >= 0) {
        error.style.display = `none`;
    }
    if (y < 0) {
        error.style.display = `block`;
    }
}

container.addEventListener('input', getAge)