const users = [
    {
        user_id: 123456,
        name: 'Joe Bloggs',
        email: 'jbloggs@gmail.com',
        status: 'ACTIVE'
    }
];

const getUser = ctx => {
    const id = ctx.state.id.value;
    return users.find(user => user.user_id === parseInt(id)) || {};
};

export default getUser;