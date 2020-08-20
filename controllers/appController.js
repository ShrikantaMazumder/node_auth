module.exports.head = (req, res, next) => {
    if (!req.body.name) return res.json({ Error: "Username is required." });
    console.log(req.headers);
    next();
}
module.exports.root = (req, res, next) => {
    return res.json({ Home: "This is homepage" })
}

module.exports.service = (req, res, next) => {
    return res.json({ Service: 'This is service page' });
}

module.exports.about = (req, res, next) => {
    console.log(req.body);
    return res.json({ About: 'About data accepted.' });
}