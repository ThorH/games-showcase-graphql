export const currencyFormat = (price: number) =>
    price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })