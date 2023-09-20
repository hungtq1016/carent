const currency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
const useFormatCurrency = (value:number) =>{
    return currency.format(value)
}
export default useFormatCurrency