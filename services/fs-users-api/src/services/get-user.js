const users = [
    {
        user_id: 123456,
        name: 'Joe Bloggs',
        email: 'jbloggs@gmail.com',
        address_one: '10 Main Street',
        address_two: '',
        address_three: '',
        city: 'Edinburgh',
        postcode: 'EH00 0EH',
        phone_no: '07700777000',
        password: 'pass123',
        status: 'Active'
    }
];

const getUser = ctx => {
    const id = ctx.state.id.value;
    return users.find(user => user.user_id === parseInt(id)) || {};
};

export default getUser;