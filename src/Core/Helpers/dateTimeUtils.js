export const getCurrentDateAndTime = () =>{
    const formattedDateTime = new Date()
          .toLocaleDateString("en-GB")
          .replace(/\//g, "-") + " " + new Date()
          .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });
    return formattedDateTime
  }