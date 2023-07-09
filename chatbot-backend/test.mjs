import translate from "translate-google";

const backupLinks = (text) => {
  const links = [];
  const textWithoutLinks = text.replace(
    /<a\b[^>]*>(.*?)<\/a>/gi,
    (match, link) => {
      links.push(link);
      return "***";
    }
  );
  return { links, textWithoutLinks };
};

const restoreLinks = (links, text) => {
  const restoredText = text.replace(/\*\*\*/g, () => {
    const link = links.shift();
    return `<a href="${link}">${link}</a>`;
  });

  return restoredText;
};

const translateToMalayalam = async (input) => {
  return await translate(input, { to: "ml" })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return "TRANSL_ERR_301";
    });
};

const preserveValues = (text) => {
  const values = [];
  const textWithoutValues = text.replace(
    /<preserve>(.*?)<\/preserve>/gi,
    (match, value) => {
      console.log(value);
      values.push(value);
      return "<>";
    }
  );
  return { values, textWithoutValues };
};

const restoreValues = (values, text) => {
  const restoredText = text.replace(/<>+/g, () => {
    const value = values.shift();
    return `${value}`;
  });

  return restoredText;
};

// const run = async () => {
//   const { links, textWithoutLinks } = backupLinks(input);
//   const outputWithoutLinks = await translateToMalayalam(textWithoutLinks);
//   const output = restoreLinks(links, outputWithoutLinks);
//   console.log(output);
// };

const input =
  "The Career Guidance & Placement Unit <preserve>(CGPU)</preserve> of the college is working as a team under the leadership of the Coordinator, the Committee Members of each Department and a batch of dedicated students. The students of the college are getting regular placements in many multinational companies like <preserve>TCS, IBM, INFOSYS, UST GLOBAL, WIPRO, IBS, SPERIDIAN, CTS</preserve> etc.";

const run = async () => {
  const { values, textWithoutValues } = preserveValues(input);
  console.log(textWithoutValues);
  const outputWithoutValues = await translateToMalayalam(textWithoutValues);
  const output = restoreValues(values, outputWithoutValues);
  console.log(output);
};

run();

// കരിയറിലെ മാര്ഗനിര്വരണവും പ്ലേസ്മെന്റ് യൂണിറ്റ് കാപ്രിക്കോണും കോർഡിനേറ്ററുടെ നേതൃത്വത്തിൽ ഒരു ടീമായി പ്രവർത്തിക്കുന്നു, ഓരോ വകുപ്പിലെ കമ്മിറ്റി അംഗങ്ങളും സമർപ്പിത വിദ്യാർത്ഥികളുടെ ബാച്ചിന്റെയും കമ്മിത വിദ്യാർത്ഥികൾ.കാപ്രിക്കോൺ മുതലായ നിരവധി ബഹുരാഷ്ട്ര കമ്പനികളിൽ കോളേജിലെ വിദ്യാർത്ഥികൾക്ക് പതിവ് പ്ലെയ്സ്മെന്റുകൾ ലഭിക്കുന്നു.
