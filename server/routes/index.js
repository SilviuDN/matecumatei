module.exports = app => {
    app.use('/api/', require('./base.routes'))
    app.use('/api/courses', require('./courses.routes'))
}