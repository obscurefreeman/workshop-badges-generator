// 编辑器
var textarea = document.getElementById('editor_en');
sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    // locale: 'cn',
    plugins: 'undo,plaintext,dragdrop,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
});

var textarea = document.getElementById('editor_zh');
sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    locale: 'cn',
    plugins: 'undo,plaintext,dragdrop,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
});