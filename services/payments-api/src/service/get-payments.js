import payments from '../mocks/payments.js';

const getPayments = id => {
    return payments
    .filter(payment => payment.accountId === id)
    .sort((a, b) => b.date - a.date);
};

export default getPayments;
