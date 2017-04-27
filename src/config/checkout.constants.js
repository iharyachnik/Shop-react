export const COUNTRIES = ['Canada', 'United States'];

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const currentYear = new Date().getFullYear();
export const YEARS = Array.from({ length: 10 }, (e, i) => i + currentYear);