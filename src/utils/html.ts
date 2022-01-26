export const removeHtmlTags = (string: string) => {
  return string.replace(/<\/?[^>]+(>|$)/g, '');
};