import helpOne from "/public/help-one.png";
import helpStudent from "/public/help-student.jpg";
import seminar from "/public/seminar.jpg";
import tree from "/public/tree.jpg";

interface Work {
  text: string;
  img: any;
}
export function getOurWork(lang: "ku" | "en"): Work[] {
  if (lang === "ku") {
    return [
      {
        text: "١ - هاوکاری کردنی کەسانی هەژار و کەم دەرامەت لە پێناو باشترکردنی حاڵ و گوزەرانیان",
        img: helpOne,
      },
      {
        text: "٢ - هاوکاری کردنی ئەو خوێندکارانەی توانای ئابووری باش نیە لە ڕێگای گرتنی وانەی تایبەت و خولی بەهێزکردن و دابینکردنی کرێی هاتووچۆ",
        img: helpStudent,
      },
      {
        text: "٣ - ئەنجامدانی ئیڤێنت و چالاکی بەهێزکردنی ئاستی هۆشیاری کۆمەڵگا بە گشتی و گەنجان بە تایبەتی",
        img: seminar,
      },
      {
        text: "٤ - بەشداری کردن لە چالاکیە ژینگەییەکان و ئەو کارانەی بەشدارن لە باشترکردنی کۆمەڵگا",
        img: tree,
      },
    ];
  }

  return [
    {
      text: "1. Helping the poor and low-income people in order to improve their livelihoods.",
      img: helpOne,
    },
    {
      text: "2. Assisting students with limited financial means by taking private lessons, reinforcement courses and providing transportation fees.",
      img: helpStudent,
    },
    {
      text: "3. Conducting events and activities to strenthen the level of awareness of the society in general and the youth in particular.",
      img: seminar,
    },
    {
      text: "4. Participation in environmental activities and activities that contribute to the improvement of society.",
      img: tree,
    },
  ];
}

export function workDefintion(lang: "ku" | "en") {
  if (lang === "ku")
    return "کارەکانی ئێمە هەمە جۆرە و هەوڵمانداوە لە زۆربەی کایەکانی ژیانەوە یارمەتی شارەکەمان بدەین، لیستی بەشێك لەو جۆرە چالاکیانەی ساڵانە ئەنجامی دەدەین";

  return "Our work is diverse and we have tried to help our city in many areas of life, examples are: ";
}
