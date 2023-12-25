var textarea = document.getElementById('editor');

sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    plugins: 'undo,plaintext,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: true, // Set to true to start in enabled state
    },
});