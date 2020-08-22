const getPayments = async ctx => {
    const id = ctx.state.id;
    const payments = await ctx.db.query(`
        SELECT * 
        FROM T001PAYMENTS 
        WHERE ACCOUNT_ID = $1 
        ORDER BY DATE DESC;
    `, [id]);
    return payments;
};

export default getPayments;
