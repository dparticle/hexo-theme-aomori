// import c from 'clipboard'
;(function () {
    document.querySelectorAll('pre code').forEach((element) => {
        var copyHtml =
            '<button class="btn-copy" data-clipboard-snippet=""><span class="btn-copy-able">复制</span></button>'
        element.insertAdjacentHTML('beforebegin', copyHtml)
        // 父元素添加 class 样式
        element.parentElement.classList.add('highlight-container')
        // mobile, enable active
        document.body.addEventListener('touchstart', function () {})
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function (trigger) {
                return trigger.nextElementSibling
            },
        })
        clipboard.on('success', function (e) {
            e.trigger.innerHTML = '<span>复制成功</span>'
            setTimeout(function () {
                e.trigger.innerHTML = '<span class="btn-copy-able">复制</span>'
            }, 1000)

            e.clearSelection()
        })
        clipboard.on('error', function (e) {
            e.trigger.innerHTML = '<span>复制失败</span>'
            setTimeout(function () {
                e.trigger.innerHTML = '<span class="btn-copy-able">复制</span>'
            }, 1000)
            e.clearSelection()
        })
    })
})()
