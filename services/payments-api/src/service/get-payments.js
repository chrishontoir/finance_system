const payments = [
    {
        paymentId: 1,
        accountId: 'A123',
        description: 'Tesco Ltd',
        amount: 87.45,
        date: new Date('2020-01-01')
    },
    {
        paymentId: 2,
        accountId: 'A123',
        description: 'Netflix',
        amount: 8.99,
        date: new Date('2020-01-02')
    },
    {
        paymentId: 3,
        accountId: 'B456',
        description: 'Amazon Prime',
        amount: 23.74,
        date: new Date('2020-01-05')
    }
];

const getPayments = id => {
    return payments
    .filter(payment => payment.accountId === id)
    .sort((a, b) => b.date - a.date);
};

export default getPayments;
