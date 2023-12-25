// 编辑器
// var textarea = document.getElementById('example');
// sceditor.create(textarea, {
//     format: 'bbcode',
//     icons: 'monocons',
//     style: 'minified/themes/content/obscurefreeman.css',
//     locale: 'cn',
//     plugins: 'undo',
// });
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
    alert("请填写正确的ID或URL！");
    return;
    }

    var outputURLs = document.getElementById("outputURLs");
    var subscriptions = `https://img.shields.io/steam/subscriptions/${id}?style=for-the-badge&label=订阅&color=b4e419`;
    var downloads = `https://img.shields.io/steam/downloads/${id}?style=for-the-badge&label=下载&color=00adb5`;
    var views = `https://img.shields.io/steam/views/${id}?style=for-the-badge&label=浏览量&color=ff5719`;
    var size = `https://img.shields.io/steam/size/${id}?style=for-the-badge&label=模组大小&color=2ea043`;
    var releasedate = `https://img.shields.io/steam/release-date/${id}?style=for-the-badge&label=发布日期&color=ffb300`;
    var updatedate = `https://img.shields.io/steam/update-date/${id}?style=for-the-badge&label=更新日期&color=515de9`;
    
    // 生成URLs
    var url1 = format === "bbcode" ? `[img]${subscriptions}[/img]` : `![订阅](${subscriptions})`;
    var url2 = format === "bbcode" ? `[img]${downloads}[/img]` : `![下载](${downloads})`;
    var url3 = format === "bbcode" ? `[img]${views}[/img]` : `![浏览量](${views})`;
    var url4 = format === "bbcode" ? `[img]${size}[/img]` : `![模组大小](${size})`;
    var url5 = format === "bbcode" ? `[img]${releasedate}[/img]` : `![发布日期](${releasedate})`;
    var url6 = format === "bbcode" ? `[img]${updatedate}[/img]` : `![更新日期](${updatedate})`;
    
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
        copyButton.innerHTML = "复制";
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
    copyAllButton.innerHTML = "复制全部";
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
    alert("已复制到剪贴板！");
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
    alert("已复制所有代码到剪贴板！");
}