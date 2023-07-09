export const backupLinks = (text: string) => {
  const links: string[] = [];
  const textWithoutLinks = text.replace(
    /<a\b[^>]*>(.*?)<\/a>/gi,
    (match, link) => {
      links.push(link);
      return "<>";
    }
  );
  return { links, textWithoutLinks };
};

export const restoreLinks = (links: string[], text: string) => {
  const restoredText = text.replace(/<>+/g, () => {
    const link = links.shift();
    return `<a style="font-size: 16px;color: orange;font-weight: 600;" href="${link}" target="_blank">${link}</a>`;
  });   

  return restoredText;
};
