export const declinationWord = (num: number, words: string[]) => {
  num = num % 10;
  if (num > 10 && num < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
};

export const setLocalStorage = (name: string, item: any) => {
  window.localStorage.setItem(name, JSON.stringify(item));
};

export const getLocalStorage = (name: string) => {
  const data = window.localStorage.getItem(name);
  if (!data) return [];
  return JSON.parse(data);
};
