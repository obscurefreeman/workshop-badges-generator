var textarea = document.getElementById('editor');

sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    plugins: 'undo,plaintext,dragdrop,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
});