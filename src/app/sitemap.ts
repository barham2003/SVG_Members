export default function sitemap() {
  const krdUrl = "https://www.smartvolunteersgroup.com/kur";
  const engUrl = "https://www.smartvolunteersgroup.com/eng";
  return [
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
