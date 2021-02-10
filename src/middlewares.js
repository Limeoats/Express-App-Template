function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`No route found at ${req.originalUrl}`);
    next(error);
}

function errorHandler(error, req, res, next) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
	status: statusCode,
	message: error.message,
	stack: process.env.NODE_ENV === "production" ? "" : error.stack,
	errors: error.errors || undefined,
    });
}

module.exports = {
    notFound,
    errorHandler,
};
