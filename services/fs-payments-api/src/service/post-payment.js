const postPayment = async ctx => {
    const id = ctx.state.id;
    const { description, amount } = ctx.request.body;
    const date = new Date();

    await ctx.db.query(`
        INSERT INTO T001PAYMENTS 
        (ACCOUNT_ID, DESCRIPTION, AMOUNT, DATE) 
        VALUES 
        ($1, $2, $3, $4);
    `, [id, description, amount, date]);
};

export default postPayment;
