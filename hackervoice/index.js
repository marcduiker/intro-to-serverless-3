module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const pw = req.query.password;
    let responseMessage = "Access denied.";
    if (pw == "letmein")
    {
        responseMessage = "Access granted."
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}