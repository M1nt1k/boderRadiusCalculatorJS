function fun1() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let div = document.getElementById('div');

    div.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
    div.innerHTML = "border-radius: " + rtl + ' ' + rtr + ' ' + rbr + ' ' + rbl + ';'; 
}
