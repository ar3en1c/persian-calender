
const Parser = require('rss-parser');
const parser = new Parser();

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
