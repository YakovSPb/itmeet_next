export const linkPhoneNumber = (number) => {
    return "+" + number?.replace(/^8-/, "+7").replace(/-/g, "").replace(/\D/g, "");;
}