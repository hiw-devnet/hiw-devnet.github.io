$(function() {
  function execCopy() {
    // テキストエリアのテキストを取得（コピーさせるテキスト）
    var text = $('pre').text();
    // コピーする媒体となるテキストエリアを生成
    var clipboard = $('<textarea></textarea>');
    clipboard.text(text);
    // body直下に一時的に挿入
    $('body').append(clipboard);
    // 選択状態にする
    clipboard.select();
    // WebExtension APIのブラウザ拡張の仕組みを呼び出しクリップボードにコピー
    document.execCommand('copy');
    // 不要なテキストエリアを削除
    clipboard.remove();
    // 通知
    alert("コードがクリップボードにコピーされました");
  }
  $('code div button').on('click', execCopy);
});
