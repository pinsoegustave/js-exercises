
function getOptions() {
    var x = document.getElementById("mySelect");

    var txt1 = "No. of items: ";
    var i;

    length = document.getElementById("mySelect").length;

    txt1 = txt1 + length;

    for(i = 0; i < x.length; i++) {
        txt1 = txt1 + "\n" + x.options[i].text;
    }

    alert(txt1);
}