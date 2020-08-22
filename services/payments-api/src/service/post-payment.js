import payments from '../mocks/payments.js';

const postPayment = (id, payment) => {
    const { description, amount } = payment;
    const paymentId = payments[payments.length - 1].paymentId + 1;
    payments.push({
        paymentId,
        accountId: id,
        description,
        amount,
        date: new Date()
    });
};

export default postPayment;
