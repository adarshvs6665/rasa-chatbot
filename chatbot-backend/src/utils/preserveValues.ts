export const preserveValues = (text: string) => {
  const values: string[] = [];
  const textWithoutValues = text.replace(
    /<preserve>(.*?)<\/preserve>/gi,
    (match, value) => {
      console.log(value);
      values.push(value);
      return "<_>";
    }
  );
  return { values, textWithoutValues };
};

export const restoreValues = (values: string[], text: string) => {
  const restoredText = text.replace(/<_>+/g, () => {
    const value = values.shift();
    return `<span style="font-size: 14px;">${value}</span>`;
  });

  return restoredText;
};
