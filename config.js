exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://admin:admin@ds029725.mlab.com:29725/shopping-list' :
                            'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;
