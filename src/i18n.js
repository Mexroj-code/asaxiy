import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      uz: {
        translation: {
          navbar:{
            nav1:"Barcha Bo'limlar",
            nav2:"Yangiliklar",
            nav3:"Yangi kelganlar",
            nav4:"Chegirmalar",
            nav5:"Kitoblar",
            nav6:"Telefon va gatjetlar",
            nav7:"Televezor",
            nav8:"Sport buyumlari",
          },
          navbarTop:{
            nav1:"Qidirish...",
            nav2:"Qidirish",
            nav3:"To'lov",
            nav4:"Trek",
            nav5:"Savatcha",
            nav6:"Sevimlilar",
            nav7:"Kabinet",
            nav8:"Biz haqimizda",
            nav9:"Jami",
            nav10:"so'm",
            nav11:"SOTIB OLISH",
            nav12:"SAVATGA O'TISH",
          },
          Cardlang:{
            card1:"Chegirma",
            card2:"ta sharh",
            card3:"so'm",
            card4:"oy",
            card5:"Rassrochka",
            card6:"Bir klikda olish",
          },
          productDetail:{
            product1:"Brend:",
            product2:"Holati:",
            product3:"Ulashish",
            product4:"Sotuvda bor",
            product5:"Tavsiya",
            product6:"Muddatli to'lov",
            product7:"Savatchaga qo'shish",
            product8:"Bir klikda olish",
            product9:"Samsung Galaxy Buds Live Black, White...",
            product10:"Apple AirPods Pro quloqchini",

          }
        }
      },
      ru: {
        translation: {
          navbar:{
            nav1:"Все категории",
            nav2:"Новости",
            nav3:"Новинки",
            nav4:"Скидки",
            nav5:"Книги",
            nav6:"Телефон и гаджеты",
            nav7:"Телевизоры",
            nav8:"Спорт товары",
          },
          navbarTop:{
            nav1:"Поиск...",
            nav2:"Искать",
            nav3:"Оплатит",
            nav4:"Отследить",
            nav5:"Корзинка",
            nav6:"Избранное",
            nav7:"Кабинет",
            nav8:"О нас",
            nav9:"Сумма",
            nav10:"сум",
            nav11:"ОФОРМИТЬ ПОКУПКУ",
            nav12:"ПЕРЕЙТИ В КОРЗИНКУ"
          },
          Cardlang:{
            card1:"Скидка",
            card2:"отзывов",
            card3:"сум",
            card4:"мес",
            card5:"Рассрочка",
            card6:"Купить в 1 клик",
          },
          productDetail:{
            product1:"Бренд:",
            product2:"Наличии:",
            product3:"Поделиться:",
            product4:" Есть в наличии",
            product5:"Рекомендуем",
            product6:"Рассрочку",
            product7:"Добавить в корзину",
            product8:"Купить в 1 клик",
            product9:"Наушники Samsung Galaxy Buds Live Black,...",
            product10:"Наушники Apple AirPods Pro ",

          }
        }
      }
    }
  });

export default i18n;