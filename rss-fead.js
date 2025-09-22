
const Parser = require('rss-parser');
const parser = new Parser();
const { toJalaali, toGregorian } = require('jalaali-js');
/*
(async () => {
  try {
    const feed = await parser.parseURL('https://parsi.euronews.com/rss?format=mrss&level=theme&name=news');

    console.log(`عنوان فید: ${feed.title}`);
    console.log(`تعداد آیتم‌ها: ${feed.items.length}`);
    console.log('---');

    feed.items.forEach(item => {
      console.log(`📌 عنوان: ${item.title}`);
      console.log(`🔗 لینک: ${item.link}`);
      console.log(`📅 تاریخ: ${item.pubDate}`);
      console.log(`📝 خلاصه: ${item.contentSnippet || '---'}`);
      console.log('---');
    });

  } catch (error) {
    console.error('خطا در خواندن فید:', error.message);
  }
})();

// دریافت تاریخ امروز میلادی
const today = new Date();

// تبدیل به تاریخ جلالی
const jalaliDate = toJalaali(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate(),
  today.getDay()
);

console.log(jalaliDate);
// خروجی: { jy: 1403, jm: 7, jd: 15 }

// فرمت زیبا
console.log(`امروز: ${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`);
*/
function getPersianDayOfWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0-6 (یکشنبه=0, شنبه=6)
    
    const days = [
        'یکشنبه',
        'دوشنبه', 
        'سه‌شنبه',
        'چهارشنبه',
        'پنجشنبه',
        'جمعه',
        'شنبه'
    ];
    
    return days[dayOfWeek];
}

// استفاده
console.log(`امروز ${getPersianDayOfWeek()} است`);
