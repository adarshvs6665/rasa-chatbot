import translate from "translate-google";
import { config } from "./config";
import { backupLinks, restoreLinks } from "./handleLink";
import { preserveValues, restoreValues } from "./preserveValues";

const translateToMalayalam = async (input: string) => {
  const { links, textWithoutLinks } = backupLinks(input);
  const { values, textWithoutValues } = preserveValues(textWithoutLinks);
  const outputWithoutLinksAndValues = await translate(textWithoutValues, {
    to: "ml",
  })
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return config.translationErrorCode;
    });
  const outputWithoutLinks = restoreValues(values, outputWithoutLinksAndValues);
  const output = restoreLinks(links, outputWithoutLinks);
  return output;
};

export default translateToMalayalam;
