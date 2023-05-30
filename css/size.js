function changeFooterSize() {
    var footer = document.getElementsByTagName("footer")[0];

    if (footer.style.width == '2%') {
        footer.style.width = '99%';
    }
    else {
        footer.style.width = '2%';
    }
}
