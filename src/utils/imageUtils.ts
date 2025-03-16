export const truncateText = (text: string) => {
  if (text.length > 37) {
    return text.slice(0, 37) + '...';
  }

  return text;
};
