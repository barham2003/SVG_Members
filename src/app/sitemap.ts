export default function sitemap() {
  const base = "https://www.smartvolunteersgroup.com";
  const krdUrl = "https://www.smartvolunteersgroup.com/kur";
  const engUrl = "https://www.smartvolunteersgroup.com/eng";
  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: krdUrl,
      lastModified: new Date(),
    },
    {
      url: engUrl,
      lastModified: new Date(),
    },
    {
      url: `${engUrl}/activities`,
      lastModified: new Date(),
    },
    {
      url: `${krdUrl}/activities`,
      lastModified: new Date(),
    },
  ];
}
