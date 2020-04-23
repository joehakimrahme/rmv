window.onload = function () {

    var converter = new showdown.Converter({
      tables: true,
      strikethrough: true,
      simplifiedAutoLink: true,
    });

    var textarea = document.getElementById('markdown-text');
    var output = document.getElementById('html-output');

    textarea.oninput = (e) => {
      output.innerHTML = converter.makeHtml(textarea.value);
      textarea.style.display = "none";
      textarea.parentElement.classList.remove("col");
    }

    textarea.focus();
}
