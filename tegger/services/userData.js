const axios = require('axios')

const getInteractions = async (uid) => {

    
    let int = axios.get(`https://stg-api.tegger.io/api/v1/interactions/history/${uid}`)
    .then(response => {
        console.log('response: ', response)
        return response.body.interactions
    })
    .catch(response => {
        console.log('failure response:')
        //dummy values
        let interactions = [
            {'tokens': 343.23,},
            {'tokens': 4324.34},
            {'tokens': 32423.89}
        ]
        return interactions

    })
    return int
}

exports.getInteractions = getInteractions 