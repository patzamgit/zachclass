const beautify = require('js-beautify')
const through2 = require('through2').obj

module.exports = function(options = {}) {

    options.indent_size = options.indent_size || 4
    options.indent_char = options.indent_char || ' '
    options.unformatted = options.unformatted || ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']

    return through2(function(file, enc, callback) {

        if (file.extname === '.js') file.contents = Buffer.from(beautify(file.contents.toString(), options))
        else if (file.extname === '.css') file.contents = Buffer.from(beautify.css(file.contents.toString(), options))
        else if (file.extname === '.html') file.contents = Buffer.from(beautify.html(file.contents.toString(), options))

        callback(null, file)
    })
}
