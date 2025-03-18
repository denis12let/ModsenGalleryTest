export const truncateText = (text: string, len: number) => {
  if (text.length > len) {
    return text.slice(0, len) + '...';
  }

  return text;
};

export const capitalizeWord = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

export const getIconSize = (isModal: boolean, width: number) => {
  if (isModal) {
    return width > 1000
      ? { width: '20px', height: '30px' }
      : { width: '12px', height: '16px' };
  } else {
    return width > 1000
      ? { width: '10px', height: '14px' }
      : { width: '8px', height: '12px' };
  }
};

export const getTextWidth = (isModal: boolean, width: number): number => {
  if (isModal) {
    return width > 900 ? 50 : 20;
  } else {
    return (width <= 900 && width > 650) || width < 450 ? 17 : 30;
  }
};
