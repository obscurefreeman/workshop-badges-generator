var textarea = document.getElementById('editor');

sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    locale: 'cn', // 根据检测结果设置编辑器的语言
    plugins: 'undo,plaintext,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: true, // Set to true to start in enabled state
    },
    // resizeEnabled: false,
    width: '700px',
});