import payments from './payments.js';
import { getPayments, postPayment } from '../service/index.js';

jest.mock('../service/index.js');

let ctx;

describe('payments.get', () => {
    beforeEach(async () => {
        getPayments.mockImplementation(() => []);

        ctx = { state: { id: 'A123' } };
        await payments.get(ctx);
    });

    test('should call getPayments', () => {
        expect(getPayments).toHaveBeenCalledWith(ctx);
    });

    test('should return an empty array of payments', () => {
        expect(ctx.body).toStrictEqual({ payments: [] });
    });

    test('should put the noOfPayments in the state.success', () => {
        expect(ctx.state.success).toStrictEqual({ noOfPayments: 0 });
    });
});

describe('payments.post', () => {
    beforeEach(async () => {
        postPayment.mockImplementation(() => 'SUCCESS');
        getPayments.mockImplementation(() => [{ payment_id: 1 }]);

        ctx = { state: { id: 'B456' } };
        await payments.post(ctx);
    });

    test('should call postPayment', () => {
        expect(postPayment).toHaveBeenCalledWith(ctx);
    });

    test('should call getPayments', () => {
        expect(getPayments).toHaveBeenCalledWith(ctx);
    });

    test('should return an array with one payment', () => {
        expect(ctx.body).toStrictEqual({ payments: [{ payment_id: 1 }] });
    });

    test('should put the noOfPayments in the state.success', () => {
        expect(ctx.state.success).toStrictEqual({ noOfPayments: 1 });
    });
});
