function checkDate()
{
    const userDate = document.forms["dateForm"]["userDate"].value;
    const outputMsg = document.getElementById('output');

    let isWeekend = checkIfWeekend(userDate);
    let isHoliday = checkIfHoliday(userDate);

    if(isWeekend || isHoliday)
    {
        outputMsg.textContent = "You can relax today.";
    }
    else
    {
        outputMsg.textContent = "It's a working day.";
    }
}

function checkIfWeekend(today = "")
{
    let date = new Date(today);
    // 0 - 6
    let currentDayOfWeek = date.getUTCDay();

    //Check if it's Friday (5) Saturday (6), or Sunday (0)
    if (currentDayOfWeek === 5 || currentDayOfWeek === 6 || currentDayOfWeek === 0) {
        return true;
    } else {
        return false;
    }

}

function checkIfHoliday(today = "")
{
    let date = new Date(today);
    let currentDayOfMonth = date.getUTCDate();
    // Add 1 because the result is zero based.
    // 0 - 11
    let currentMonth = (date.getMonth() +1);
    //Add 1 to make it (1-12)
    //Check for hollidays
    if(
        (currentMonth === 12 && currentDayOfMonth === 25) || //Christmas
        (currentMonth === 7 && currentDayOfMonth === 4) || //Fourth of July
        (currentMonth === 11 && currentDayOfMonth === 28)  // Thanksgiving
     ) {
        return true;
     } else {
        return false;
        }

}