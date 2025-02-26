

export const handleAmountInputChange = (e,setValue) => {
    let value = e.target.value;
    const regex = /^-?(\d{0,10})(\.\d{0,3})?/;
    value = value.match(regex)?.[0] || value;
    setValue("amount", value);
  
  };


  export const handleTextInputChange = (e, setValue) => {
    let value = e.target.value;
    if (value.startsWith(" ")) {
        value = value.trimStart(); 
    }
    if (value.length > 30) {
        value = value.substring(0, 30);
    }
    setValue("text", value); 
};


export const handleAmountBeforeInput = (e) => {
    const invalidChars = /[^0-9\.\-]/;
    if (invalidChars.test(e.data)) {
      e.preventDefault(); 
    }
  };

  export const getCurrentDateAndTime = () =>{
    const formattedDateTime = new Date()
          .toLocaleDateString("en-GB")
          .replace(/\//g, "-") + " " + new Date()
          .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });
    return formattedDateTime
  }

  export const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : parseFloat(amountStr).toFixed(2);
  };