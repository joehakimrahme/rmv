var converter = new showdown.Converter({
  tables: true,
  strikethrough: true,
  simplifiedAutoLink: true,
});

window.onload = function () {
  var mdownArea = document.getElementById("markdown-text")
  var htmlArea = document.getElementById('html-output')

  mdownArea.focus();

  document.getElementById('html-link').onclick = function generateHTML(e) {
    e.preventDefault();
    text = mdownArea.value;
    html = converter.makeHtml(text);
    htmlArea.innerHTML = html;
    mdownArea.style.display = 'none';
    htmlArea.style.display = 'block';
  }
  document.getElementById('markdown-link').onclick = function showMarkdown(e) {
    e.preventDefault();
    mdownArea.style.display = 'block';
    htmlArea.style.display = 'none';
  }
}
