const axios = require('axios')

const parse = async (interactions) => {

    const tokens = interactions.map(element => element.tokens).reduce((a, b) => a + b, 0);

    //At time of checking, 1 Props token = $0.04704

    const props = getProps(tokens)

    const dollars = props * 0.04704

    let bitCoin = await getBitCoin(dollars)

    let ethereum = await getEthereum(dollars)

    let crypto = {
        props,
        bitCoin,
        ethereum
    }

    return crypto

}

const getProps = (tokens) => {
    return tokens * 0.0375
}

const getBitCoin = async (dollars) => {
    let bitCoin = axios.get('https://api.coincap.io/v2/rates/bitcoin')
    .then(response => {
        console.log('response btc: ', response.data)
        let rate =  response.data.data.rateUsd
        console.log('btc rate: ', rate)
        return dollars/rate
    })
    .catch(response => {
        return ''
    })

    return bitCoin
}

const getEthereum = async (dollars) => {
    let ethereum = axios.get('https://api.coincap.io/v2/rates/ethereum')
    .then(response => {
        let rate = response.data.data.rateUsd
        console.log('eth rate: ', rate)
        return dollars/rate
    })
    .catch(response => {
        return ''
    })

    return ethereum
}


exports.parse = parse