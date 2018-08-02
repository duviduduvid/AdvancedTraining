function isDateValid(date) {
    var today = new Date();
    return new Date(date) >= today;
}