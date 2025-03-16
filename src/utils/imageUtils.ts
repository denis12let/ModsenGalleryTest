export const truncateText = (text: string, len: number) => {
  if (text.length > len) {
    return text.slice(0, len) + '...';
  }

  return text;
};
