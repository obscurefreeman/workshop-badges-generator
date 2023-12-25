// 编辑器
var textarea = document.getElementById('example');
sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/obscurefreeman.css',
    // locale: 'cn',
    plugins: 'undo',
});
// 主要代码
function generateURLs(format) {
                
    var inputText = document.getElementById("inputText").value;

    // 判断用户输入的是ID还是URL
    var id;
    if (/^\d+$/.test(inputText)) {
    // 用户输入的是纯数字，表示ID
    id = inputText;
    } else if (inputText.startsWith("https://steamcommunity.com/sharedfiles/filedetails/?id=")) {
    // 用户输入的是URL，提取其中的ID
    id = inputText.replace("https://steamcommunity.com/sharedfiles/filedetails/?id=", "");
    } else {
    // 输入格式不正确，给出错误提示
    alert("Please fill in the correct ID or URL!");
    return;
    }

    var outputURLs = document.getElementById("outputURLs");
    var subscriptions = `https://img.shields.io/steam/subscriptions/${id}?style=for-the-badge&color=b4e419`;
    var downloads = `https://img.shields.io/steam/downloads/${id}?style=for-the-badge&color=00adb5`;
    var views = `https://img.shields.io/steam/views/${id}?style=for-the-badge&color=ff5719`;
    var size = `https://img.shields.io/steam/size/${id}?style=for-the-badge&color=2ea043`;
    var releasedate = `https://img.shields.io/steam/release-date/${id}?style=for-the-badge&color=ffb300`;
    var updatedate = `https://img.shields.io/steam/update-date/${id}?style=for-the-badge&color=515de9`;
    
    // 生成URLs
    var url1 = format === "bbcode" ? `[img]${subscriptions}[/img]` : `![Subscriptions](${subscriptions})`;
    var url2 = format === "bbcode" ? `[img]${downloads}[/img]` : `![Downloads](${downloads})`;
    var url3 = format === "bbcode" ? `[img]${views}[/img]` : `![Views](${views})`;
    var url4 = format === "bbcode" ? `[img]${size}[/img]` : `![Size](${size})`;
    var url5 = format === "bbcode" ? `[img]${releasedate}[/img]` : `![Release Date](${releasedate})`;
    var url6 = format === "bbcode" ? `[img]${updatedate}[/img]` : `![Update Date](${updatedate})`;
    
    // 显示URLs
    outputURLs.innerHTML = "";
    
    function createURLContainer(preview, url) {
        var urlContainer = document.createElement("div");
        urlContainer.className = "url-container";
        
        var previewElement = document.createElement("div");
        previewElement.className = "preview";
        var img = document.createElement("img");
        img.src = preview;
        previewElement.appendChild(img);
        
        var urlElement = document.createElement("div");
        urlElement.className = "url";
        urlElement.innerHTML = url;
        
        var copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.innerHTML = "Copy";
        copyButton.addEventListener("click", function() {
            copyToClipboard(url);
        });
        
        urlContainer.appendChild(previewElement);
        urlContainer.appendChild(urlElement);
        urlContainer.appendChild(copyButton);
        
        return urlContainer;
    }
    
    var urlContainer1 = createURLContainer(subscriptions, url1);
    var urlContainer2 = createURLContainer(downloads, url2);
    var urlContainer3 = createURLContainer(views, url3);
    var urlContainer4 = createURLContainer(size, url4);
    var urlContainer5 = createURLContainer(releasedate, url5);
    var urlContainer6 = createURLContainer(updatedate, url6);
    var copyAllButton = document.createElement("button");
    copyAllButton.className = "copy-all-button";
    copyAllButton.innerHTML = "Copy All";
    copyAllButton.addEventListener("click", function() {
        copyAllToClipboard();
    });
    
    outputURLs.appendChild(copyAllButton);
    outputURLs.appendChild(urlContainer1);
    outputURLs.appendChild(urlContainer2);
    outputURLs.appendChild(urlContainer3);
    outputURLs.appendChild(urlContainer4);
    outputURLs.appendChild(urlContainer5);
    outputURLs.appendChild(urlContainer6);
}

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Code copied!");
}

function copyAllToClipboard() {
    var urls = document.querySelectorAll(".url");
    var urlsText = "";
    urls.forEach(function(url) {
        urlsText += url.innerHTML.replace(/&amp;/g, "&") + "\n";
    });
    var tempInput = document.createElement("textarea");
    tempInput.value = urlsText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("All code copied!");
}