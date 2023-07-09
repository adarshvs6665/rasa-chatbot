export const isEnglish = (input: string) => {
    return /^[a-zA-Z0-9\s.,'"/#!$%^&*;:{}=\-_`~()?]+$/.test(input);
};
