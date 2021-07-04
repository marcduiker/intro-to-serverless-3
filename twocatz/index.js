const fetch = require('node-fetch');

module.exports = async function (context, req) {
    

    let response = await fetch('https://cataas.com/cat/says/serverless');
    let data = await response.arrayBuffer();
    let base64data = Buffer.from(data).toString('base64')

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: base64data
    };
}