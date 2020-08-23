import nodeJose from 'node-jose';
const { JWE, JWK, JWS, util } = nodeJose;

const initializeKeyStore = () => {
    const contentAlg = "A256CBC-HS512";
    const store = JWK.createKeyStore();
    console.log('A', store);
    
    // await store.generate("RSA",2048,{alg:"RS256", key_ops:["sign", "decrypt", "unwrap"]});
    // const privateKey = (await store.get());
    // JSON.stringify(privateKey.toJSON(true));

    // const key = privateKey.toJSON();
    // key.use = "verify";
    // key.key_ops=["encrypt","verify", "wrap"];

    // const publicKey = await JWK.asKey(key);
    // await store.add(publicKey);
    // JSON.stringify(publicKey.toJSON());
}