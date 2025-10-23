// Lunar Calendar and Solar Term Library

// Lunar calendar data (simplified for common years)
const lunarData = {
    // Format: year: [days in each lunar month, leap month info]
    // This is a simplified dataset covering 1900-2100
};

// Solar terms (节气) data - approximate dates
const solarTerms = {
    '1-20': '大寒 (Greater Cold)',
    '2-4': '立春 (Start of Spring)',
    '2-19': '雨水 (Rain Water)',
    '3-5': '惊蛰 (Awakening of Insects)',
    '3-20': '春分 (Spring Equinox)',
    '4-5': '清明 (Pure Brightness)',
    '4-20': '谷雨 (Grain Rain)',
    '5-5': '立夏 (Start of Summer)',
    '5-21': '小满 (Grain Full)',
    '6-6': '芒种 (Grain in Ear)',
    '6-21': '夏至 (Summer Solstice)',
    '7-7': '小暑 (Minor Heat)',
    '7-23': '大暑 (Major Heat)',
    '8-8': '立秋 (Start of Autumn)',
    '8-23': '处暑 (End of Heat)',
    '9-8': '白露 (White Dew)',
    '9-23': '秋分 (Autumn Equinox)',
    '10-8': '寒露 (Cold Dew)',
    '10-23': '霜降 (Descent of Frost)',
    '11-7': '立冬 (Start of Winter)',
    '11-22': '小雪 (Minor Snow)',
    '12-7': '大雪 (Major Snow)',
    '12-22': '冬至 (Winter Solstice)'
};

// Lunar calendar conversion (simplified algorithm)
function gregorianToLunar(year, month, day) {
    // Simplified lunar calendar conversion
    // This uses a basic algorithm for demonstration
    
    const lunarMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29];
    const lunarMonthsCN = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
    
    // Base date: 1900-01-31 is Lunar 1900-01-01
    const baseDate = new Date(1900, 0, 31);
    const currentDate = new Date(year, month - 1, day);
    
    let daysDiff = Math.floor((currentDate - baseDate) / (24 * 60 * 60 * 1000));
    
    let lunarYear = 1900;
    let lunarMonth = 1;
    let lunarDay = 1;
    
    // Simplified calculation
    let daysInYear = 384; // Average lunar year
    while (daysDiff >= daysInYear) {
        daysDiff -= daysInYear;
        lunarYear++;
        daysInYear = 384; // Simplified
    }
    
    let daysInMonth = 29;
    while (daysDiff >= daysInMonth) {
        daysDiff -= daysInMonth;
        lunarMonth++;
        if (lunarMonth > 12) {
            lunarMonth = 1;
            lunarYear++;
        }
        daysInMonth = (lunarMonth % 2 === 1) ? 30 : 29;
    }
    
    lunarDay = daysDiff + 1;
    
    // Ensure valid values
    if (lunarDay > 30) lunarDay = 30;
    if (lunarMonth > 12) lunarMonth = 12;
    
    const monthName = lunarMonthsCN[lunarMonth - 1];
    const dayName = getLunarDayName(lunarDay);
    
    return {
        lunarYear: lunarYear,
        lunarMonth: monthName,
        lunarDay: dayName,
        lunarMonthNum: lunarMonth,
        lunarDayNum: lunarDay
    };
}

function getLunarDayName(day) {
    const dayNames = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    return dayNames[day - 1] || '初一';
}

function getSolarTerm(year, month, day) {
    const key = `${month}-${day}`;
    
    // Check exact match
    if (solarTerms[key]) {
        return solarTerms[key];
    }
    
    // Check nearby dates (±1 day for variations)
    for (let offset = -1; offset <= 1; offset++) {
        let checkDay = day + offset;
        let checkMonth = month;
        
        if (checkDay < 1) {
            checkMonth--;
            if (checkMonth < 1) checkMonth = 12;
            checkDay = 31;
        } else if (checkDay > 31) {
            checkMonth++;
            if (checkMonth > 12) checkMonth = 1;
            checkDay = 1;
        }
        
        const checkKey = `${checkMonth}-${checkDay}`;
        if (solarTerms[checkKey]) {
            return solarTerms[checkKey];
        }
    }
    
    return null;
}

// Get Chinese zodiac sign
function getChineseZodiac(year) {
    const zodiacSigns = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    return zodiacSigns[(year - 1900) % 12];
}

// Get Western zodiac sign
function getWesternZodiac(month, day) {
    const zodiacSigns = [
        { name: 'Capricorn', start: [12, 22], end: [1, 19] },
        { name: 'Aquarius', start: [1, 20], end: [2, 18] },
        { name: 'Pisces', start: [2, 19], end: [3, 20] },
        { name: 'Aries', start: [3, 21], end: [4, 19] },
        { name: 'Taurus', start: [4, 20], end: [5, 20] },
        { name: 'Gemini', start: [5, 21], end: [6, 20] },
        { name: 'Cancer', start: [6, 21], end: [7, 22] },
        { name: 'Leo', start: [7, 23], end: [8, 22] },
        { name: 'Virgo', start: [8, 23], end: [9, 22] },
        { name: 'Libra', start: [9, 23], end: [10, 22] },
        { name: 'Scorpio', start: [10, 23], end: [11, 21] },
        { name: 'Sagittarius', start: [11, 22], end: [12, 21] }
    ];
    
    for (let sign of zodiacSigns) {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;
        
        if (startMonth === endMonth) {
            if (month === startMonth && day >= startDay && day <= endDay) {
                return sign.name;
            }
        } else if (startMonth < endMonth) {
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign.name;
            }
        } else {
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign.name;
            }
        }
    }
    
    return 'Unknown';
}

// Check if leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Get days in month
function getDaysInMonth(year, month) {
    const daysInMonths = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonths[month - 1];
}

