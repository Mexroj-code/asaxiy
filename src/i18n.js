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
            nav1:"?????? ??????????????????",
            nav2:"??????????????",
            nav3:"??????????????",
            nav4:"????????????",
            nav5:"??????????",
            nav6:"?????????????? ?? ??????????????",
            nav7:"????????????????????",
            nav8:"?????????? ????????????",
          },
          navbarTop:{
            nav1:"??????????...",
            nav2:"????????????",
            nav3:"??????????????",
            nav4:"??????????????????",
            nav5:"????????????????",
            nav6:"??????????????????",
            nav7:"??????????????",
            nav8:"?? ??????",
            nav9:"??????????",
            nav10:"??????",
            nav11:"???????????????? ??????????????",
            nav12:"?????????????? ?? ????????????????"
          },
          Cardlang:{
            card1:"????????????",
            card2:"??????????????",
            card3:"??????",
            card4:"??????",
            card5:"??????????????????",
            card6:"???????????? ?? 1 ????????",
          },
          productDetail:{
            product1:"??????????:",
            product2:"??????????????:",
            product3:"????????????????????:",
            product4:" ???????? ?? ??????????????",
            product5:"??????????????????????",
            product6:"??????????????????",
            product7:"???????????????? ?? ??????????????",
            product8:"???????????? ?? 1 ????????",
            product9:"???????????????? Samsung Galaxy Buds Live Black,...",
            product10:"???????????????? Apple AirPods Pro ",

          }
        }
      }
    }
  });

export default i18n;