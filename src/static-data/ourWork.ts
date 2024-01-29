export function getOurWork(lang: "kur" | "eng"): string[] {
  if (lang === "kur") {
    return [
      "١ - هاوکاری کردنی کەسانی هەژار و کەم دەرامەت لە پێناو باشترکردنی حاڵ و گوزەرانیان",
      "٢ - هاوکاری کردنی ئەو خوێندکارانەی توانای ئابووری باش نیە لە ڕێگای گرتنی وانەی تایبەت و خولی بەهێزکردن و دابینکردنی کرێی هاتووچۆ",
      "٣ - ئەنجامدانی ئیڤێنت و چالاکی بەهێزکردنی ئاستی هۆشیاری کۆمەڵگا بە گشتی و گەنجان بە تایبەتی",
      "٤ - بەشداری کردن لە چالاکیە ژینگەییەکان و ئەو کارانەی بەشدارن لە باشترکردنی کۆمەڵگا",
    ];
  }
  return [
    "1. Helping the poor and low-income people in order to improve their livelihoods.",
    "2. Assisting students with limited financial means by taking private lessons, reinforcement courses and providing transportation fees.",
    "3. Conducting events and activities to strengthen the level of awareness of the society in general and the youth in particular.",
    "4. Participation in environmental activities and activities that contribute to the improvement of society.",
  ];
}
