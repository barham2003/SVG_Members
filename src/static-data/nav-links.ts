interface NavItem {
  item: string;
  href: string;
}

export function getNavLinks(lang: "ku" | "en"): NavItem[] {
  if (lang === "ku")
    return [
      { item: "سەرەکی", href: `/` },
      { item: "پرۆفایڵ", href: `/profile` },
      { item: "چالاكیەکان", href: `/activities` },
    ];

  return [
    { item: "Home", href: `/` },
    { item: "Profile", href: `/profile` },
    { item: "Activities", href: `/activities` },
  ];
}
