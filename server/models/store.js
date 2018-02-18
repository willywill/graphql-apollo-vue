export default (mongoose) => {
    try {
        mongoose.Promise = global.Promise
        mongoose.connect(process.env.DB_URL)
        mongoose.connection.once('open', () => console.log('Server successfully connected to the database.'))
        mongoose.connection.on('error', () => new Error('There was an error in the database.'))
    } catch (error) {
        console.log(error)
    } finally {
        return function (req, res, next) {
            next()
        }
    }
}
