export const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : parseFloat(amountStr).toFixed(2);
  };