// select all markdown code blocks
let codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function(codeBlock) {
    let copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy to clipboard';

    let clipboard = document.createElement('img');
    clipboard.src = "/latex-savvy/assets/static/copy.png";
    clipboard.width = 30;

    copyButton.append(clipboard);
    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {

        // copy text
        let code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        // add checkmark to indicate that the text has been copied
        copyButton.innerText = '';
        let check = document.createElement('img');
        check.src = "/latex-savvy/assets/static/checkmark.png";
        check.width = 30;
        copyButton.append(check);

        let fourSeconds = 4000;

        // after 4 seconds, show the copy to clipboard icon again
        setTimeout(function () {
            let clipboard = document.createElement('img');
            clipboard.src = "/latex-savvy/assets/static/copy.png";
            clipboard.width = 30;
            copyButton.innerText = '';
            copyButton.append(clipboard);
        }, fourSeconds);

    });

    // when the user hovers over the code block, show the button to copy
    codeBlock.addEventListener('mouseover', function () {
        copyButton.focus({preventScroll:true});
    });
    codeBlock.addEventListener('mouseleave', function () {
        copyButton.blur();
    });

});
