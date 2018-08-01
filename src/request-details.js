module.exports = function(req, res, next) {
	req.feathers.request = req;
	next();
}