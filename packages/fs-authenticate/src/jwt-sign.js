import nodeJose from 'node-jose';
const { JWE, JWK, JWS, util } = nodeJose;

const jwtSign = async () => {
    var contentAlg = "A256CBC-HS512";
    var store = JWK.createKeyStore();
    
    await store.generate("RSA",2048,{alg:"RS256", key_ops:["sign", "decrypt", "unwrap"]});
    var privateKey = (await store.get());
    JSON.stringify(privateKey.toJSON(true));

    var key = privateKey.toJSON();
    key.use = "verify";
    key.key_ops=["encrypt","verify", "wrap"];

    var publicKey = await JWK.asKey(key);
    await store.add(publicKey);
    JSON.stringify(publicKey.toJSON());

    var payload = { test: 'hi' };

    var token = await JWS.createSign({format: 'compact'}, privateKey).update(JSON.stringify(payload), "utf8").final();

    var serverKey = await JWK.asKey(
        {"kid":"qQ1hDBdtvgbtXziPRmT09XS-6oc3vugIvkHdd8Kh1rk","kty":"RSA","key_ops":["encrypt","verify","wrapKey"],"n":"vuxR5sMnOz8LUCx-8zO6MexL8s_VA1t8FIh4_eUFgebQkyCvxHvQjTtHsqExWg_rJH_qyo3_EXK5lZXbRDbXN8TTwsDs79SrDqf3NoLLSMjGe3fS97HObP1WEcy0mFUDDlvz8Cdq0jXLnrvLKx5G_Pfz52NoGa3R5Gp8KrljeOqkd0DuV5qPtPc-EBkRhjnjH_IVsBeZ3gYGW8m6GqnREtK0lHvBTcdTUgQZZUHHzbpTv6Ta1ZQbImzDCuWBzlHQqbf8Zr6hb75rYTvfpS0NHD7WOjJBQn0PPxS0FSbZOd7ns3ZwbxAfzOwi7IoIGOl62GFxmowwnRAuJNpfkHkDxQ","e":"AQAB","alg":"RSA-OAEP","use":"enc"});
    
    var options = {
        zip: false,
        compact: true,
        contentAlg: contentAlg,
        protect: Object.keys(
        {
        "alg": serverKey.alg,
        "kid": serverKey.kid,
        "enc": contentAlg
        }),
        fields: 
        {
        "alg": serverKey.alg,
        "kid": serverKey.kid,
        "enc": contentAlg
        }
    };

    token  = await JWE.createEncrypt(options, serverKey).update(token, "utf8").final();

    return token;
};

jwtSign().then(data => console.log(data));
