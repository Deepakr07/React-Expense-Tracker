

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

  export const getCurrentDateAndTime = ()=>{
    const today = new Date();
    return `${String(today.getDate()).padStart(2,'0')}-
            ${String(today.getMonth()+1).padStart(2,'0')}-
            ${String(today.getFullYear()).padStart(2,'0')} 
            ${String(today.getHours()).padStart(2,'0')}:
            ${String(today.getMinutes()).padStart(2,'0')}`
  }