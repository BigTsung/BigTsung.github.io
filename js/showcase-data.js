/*
 * Showcase — live, published products (App Store apps + LINE stickers).
 * Rendered as interactive 3D-tilt cards in the "Live & Shipped" section.
 *
 * type:  'app'  -> App Store badge   |  'sticker' -> LINE STORE badge
 * To add: append an entry (image lives in assets/img/projects/).
 */
const SHOWCASE_DIR = 'assets/img/projects/';

const SHOWCASE = [
  {
    type: 'app',
    nameKey: 'show-meals-name',
    descKey: 'show-meals-desc',
    img: 'Project_StartTrackingMeals_app.png',
    tags: ['iOS', 'SwiftUI', 'Gemini AI'],
    url: 'https://apps.apple.com/tw/app/%E8%A8%98%E9%A3%9F%E9%96%8B%E5%A7%8B/id6741752069'
  },
  {
    type: 'app',
    nameKey: 'show-record-name',
    descKey: 'show-record-desc',
    img: 'Project_RecordYourLove_5.png',
    tags: ['iOS', 'Swift'],
    url: 'https://apps.apple.com/tw/app/%E8%A8%98%E8%AE%80%E4%BD%A0%E7%9A%84%E6%84%9B-%E8%A8%98%E9%8C%84%E6%94%B6%E8%97%8F-%E6%94%B6%E8%97%8F%E8%A8%98%E9%8C%84/id6740759782'
  },
  {
    type: 'app',
    nameKey: 'show-smile-name',
    descKey: 'show-smile-desc',
    img: 'project_did_you_smile_today.png',
    tags: ['iOS', 'Vision'],
    url: 'https://apps.apple.com/tw/app/daily%E7%9A%84%E7%AC%91-%E5%BE%AE%E7%AC%91%E6%89%93%E5%8D%A1/id6754910689'
  },
  {
    type: 'app',
    nameKey: 'show-flag-name',
    descKey: 'show-flag-desc',
    img: 'Project_FlagMaster_1.webp',
    tags: ['Unity', 'iOS'],
    url: 'https://apps.apple.com/tw/app/%E6%88%91%E8%A6%81%E6%88%90%E7%82%BA%E5%9C%8B%E6%97%97%E7%8E%8B/id6736927842'
  },
  {
    type: 'sticker',
    nameKey: 'show-stickers-name',
    descKey: 'show-stickers-desc',
    img: 'Project_StickerGenerator-line-stickers.png',
    tags: ['LINE', 'Python'],
    url: 'https://store.line.me/stickershop/author/5812261/zh-Hant'
  }
];
