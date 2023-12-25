var textarea = document.getElementById('editor');
var locale = 'en'; // 默认语言为英语

// 检测网页链接是否包含"/cn"，如果是则将locale设置为中文
if (window.location.href.includes('/cn')) {
    locale = 'cn';
}

sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    locale: locale, // 根据检测结果设置编辑器的语言
    plugins: 'undo,plaintext,dragdrop,autoyoutube',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
});