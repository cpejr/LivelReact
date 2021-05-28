export default function validateInputs(type, value) {
    let isValid;
    
    switch (type) {
        case "Name":
            if (value === "") {
              isValid = false;
            } else {
              isValid = true;
            }
        break;

        case "Email":
            if (value === "" || !value.includes("@") || !value.includes(".com")) {
              isValid = false;
            } else {
              isValid = true;
            }

        break;
    
        case "Password":
            if (value.length < 6) {
                isValid = false;
            } else {
                isValid = true;
            }
        
        break;

    default:
        break;
    }
    return isValid;
}