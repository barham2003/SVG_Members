export default function sitemap() {
  const base = "https://www.smartvolunteersgroup.com";
  const krdUrl = "https://www.smartvolunteersgroup.com/ku";
  const enUrl = "https://www.smartvolunteersgroup.com/en";
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
      url: enUrl,
      lastModified: new Date(),
    },
    {
      url: `${enUrl}/activities`,
      lastModified: new Date(),
    },
    {
      url: `${krdUrl}/activities`,
      lastModified: new Date(),
    },
  ];
}
