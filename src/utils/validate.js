export const validateMobileNo= (number)=> {
    var re= /^((\+)?(\d{2}[-])?(\d{10}){1})?(\d{11}){0,1}?$/
    return re.test(number)
}