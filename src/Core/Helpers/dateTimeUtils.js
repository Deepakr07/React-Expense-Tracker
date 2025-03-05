export const getCurrentDateAndTime = (date) => {
      const formattedDateTime = new Date(date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-") + " " + 
        new Date(date) 
        .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });
      return formattedDateTime;
    };
    