export const getRandomElement = <S>(list: S[]) => {
  return list[Math.floor(Math.random() * list.length)];
};