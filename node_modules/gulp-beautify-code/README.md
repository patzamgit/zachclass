# gulp-beautify-code

Plugin **Gulp** for decorating **HTML CSS JS**

# Install

```
npm install gulp-beautify-code --save-dev
```

## Setup

```js
var gulp = require('gulp');
var beautifyCode = require('gulp-beautify-code');
```

## HTML

```js
gulp.task('pages', function () {
    return gulp.src('app/**/*.html')
        .pipe(beautifyCode())
        .pipe(gulp.dest('dist'));
});
```

## CSS

```js
gulp.task('styles', function () {
    return gulp.src('app/**/*.css')
        .pipe(beautifyCode())
        .pipe(gulp.dest('dist'));
});
```

## JS

```js
gulp.task('scripts', function () {
    return gulp.src('app/**/*.js')
        .pipe(beautifyCode())
        .pipe(gulp.dest('dist'));
});
```

## Example Usage

```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><header><h1>Hello World</h1></header><main><section><h2>Content</h2></section></main><footer><p>copyright</p></footer></body></html>
```

*result:*

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>

    <body>
        <header>
            <h1>Hello World</h1>
        </header>
        <main>
            <section>
                <h2>Content</h2>
            </section>
        </main>
        <footer>
            <p>copyright</p>
        </footer>
    </body>

</html>
```

***

## Options

**Default**

```js
.pipe(beautifyCode({
    indent_size: 4,
    indent_char: ' ',
    unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
}))
```

**HTML: js-beautify**

```
  indent_size                  Indentation size [4]
  indent_char                  Indentation character [" "]
  indent_with_tabs             Indent with tabs, overrides -s and -c
  eol                          Character(s) to use as line terminators. (default newline - "\\n")
  end_with_newline             End output with newline
  preserve_newlines            Preserve existing line-breaks (--no-preserve-newlines disables)
  max_preserve_newlines        Maximum number of line-breaks to be preserved in one chunk [10]
  indent_inner_html            Indent <head> and <body> sections. Default is false.
  brace_style                  [collapse-preserve-inline|collapse|expand|end-expand|none] ["collapse"]
  indent_scripts               [keep|separate|normal] ["normal"]
  wrap_line_length             Maximum characters per line (0 disables) [250]
  wrap_attributes              Wrap attributes to new lines [auto|force|force-aligned|force-expand-multiline] ["auto"]
  wrap_attributes_indent_size  Indent wrapped attributes to after N characters [indent-size] (ignored if wrap-attributes is "force-aligned")
  unformatted                  List of tags (defaults to inline) that should not be reformatted
  content_unformatted          List of tags (defaults to pre) whose content should not be reformatted
  extra_liners                 List of tags (defaults to [head,body,/html] that should have an extra newline before them.
```

**CSS: js-beautify**

```
indent_size                  Indentation size [4]
indent_char                  Indentation character [" "]
indent_with_tabs             Indent with tabs, overrides -s and -c
eol                          Character(s) to use as line terminators. (default newline - "\\n")
end_with_newline             End output with newline
selector_separator_newline   Add a newline between multiple selectors
newline_between_rules        Add a newline between CSS rules
```

**JS: js-beautify**

```
indent_size                 Indentation size [4]
indent_char                 Indentation character [" "]
indent_with_tabs            Indent with tabs, overrides -s and -c
eol                         Character(s) to use as line terminators. [first newline in file, otherwise "\n]
end_with_newline            End output with newline
indent_level                Initial indentation level [0]
preserve_newlines           Preserve line-breaks (--no-preserve-newlines disables)
max_preserve_newlines       Number of line-breaks to be preserved in one chunk [10]
space_in_paren              Add padding spaces within paren, ie. f( a, b )
space_in_empty_paren        Add a single space inside empty paren, ie. f( )
jslint_happy                Enable jslint-stricter mode
space_after_anon_function   Add a space before an anonymous function's parens, ie. function ()
brace_style                 [collapse|expand|end-expand|none][,preserve-inline] [collapse,preserve-inline]
unindent_chained_methods    Don't indent chained method calls
break_chained_methods       Break chained method calls across subsequent lines
keep_array_indentation      Preserve array indentation
unescape_strings            Decode printable characters encoded in xNN notation
wrap_line_length            Wrap lines at next opportunity after N characters [0]
e4x                         Pass E4X xml literals through untouched
good_stuff                  Warm the cockles of Crockford's heart
comma_first                 Put commas at the beginning of new line instead of end
operator_position           Set operator position (before-newline|after-newline|preserve-newline) [before-newline]
```

## License

ISC License

## Author

Legostaev Vadim (*legostaev.vadim@mail.ru*)
