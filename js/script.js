function slctID(id) {
    "use strict";
    return document.getElementById(id);
}
/*menu*/
function toggleMenu() {
    "use strict";
    if (slctID('trigger').classList.contains('closed')) {
        slctID('trigger').classList.remove('closed');
        slctID('trigger').classList.add('opened');
        slctID('itemsContainer').classList.remove('menuCellsClose');
        slctID('itemsContainer').classList.add('menuCellsOpen');
    } else {
        slctID('trigger').classList.remove('opened');
        slctID('trigger').classList.add('closed');
        slctID('itemsContainer').classList.remove('menuCellsOpen');
        slctID('itemsContainer').classList.add('menuCellsClose');
    }
}
/* display the svg code of the rect under it */
var sRekt;

function textIt() {
    "use strict";
    sRekt = "\t&lt;rect id='rect' x='" + slctID('xRekt').value + "' y='" + slctID('yRekt').value + "' width='" + slctID('widthRekt').value + "' height='" + slctID('heightRekt').value + "' fill='" + slctID('fillRekt').value + "' stroke='" + slctID('strokeRekt').value + "' stroke-width='" + slctID('stroke-widthRekt').value + "' &gt;";
    var rektCod = slctID('whrItHpnsRct').innerHTML;
    slctID('rektCode').innerHTML = sRekt;
}
textIt();
/*underline and change the color of the selected element*/
function spannify(element) {
    "use strict";
    var sRektSplit = sRekt.split(" "), k = 0;
    for (k = 0; k < sRektSplit.length; k++) {
        if (sRektSplit[k].search(element.className) !== -1) {
            sRektSplit[k] = '<span class="valHglgt">' + sRektSplit[k] + '</span>';
            break;
        }
    }
    sRekt = sRektSplit.join(" ");
    slctID('rektCode').innerHTML = sRekt;
}
//set the properties of the rect
function Rect() {
    "use strict";
    var xRect = slctID("xRekt").value;
    var yRect = slctID("yRekt").value;
    var hRect = slctID("heightRekt").value;
    var wRect = slctID("widthRekt").value;
    var fillRect = slctID("fillRekt").value;
    var strokeRect = slctID("strokeRekt").value;
    var strokeWRect = slctID("stroke-widthRekt").value;
    slctID("rect").setAttribute("x", xRect);
    slctID("rect").setAttribute("y", yRect);
    slctID("rect").setAttribute("height", hRect)
    slctID("rect").setAttribute("width", wRect);
    slctID("rect").setAttribute("fill", fillRect);
    slctID("rect").setAttribute("stroke", strokeRect)
    slctID("rect").setAttribute("stroke-width", strokeWRect);
}
/*      Setting up the circle show       */
//set the properties of the circle
function Crcl() {
    "use strict";
    var xCrcl = slctID("xCrcl").value;
    slctID("Crcl").setAttribute("cx", xCrcl);
    var yCrcl = slctID("yCrcl").value;
    slctID("Crcl").setAttribute("cy", yCrcl);
    var rxCrcl = slctID("rxCrcl").value;
    slctID("Crcl").setAttribute("rx", rxCrcl);
    var ryCrcl = slctID("ryCrcl").value;
    slctID("Crcl").setAttribute("ry", ryCrcl);
    var fillCrcl = slctID("fillCrcl").value;
    slctID("Crcl").setAttribute("fill", fillCrcl);
    var strokeCrcl = slctID("strokeCrcl").value;
    slctID("Crcl").setAttribute("stroke", strokeCrcl);
    var strokeWCrcl = slctID("stroke-widthCrcl").value;
    slctID("Crcl").setAttribute("stroke-width", strokeWCrcl);
}
/* display the svg code of the circle under it */
var sCircle;

function textItCrcl() {
    "use strict";
    sCircle = "\t&lt;ellipse id='Crcl' cx='" + slctID('xCrcl').value + "' cy='" + slctID('yCrcl').value + "' rx='" + slctID('rxCrcl').value + "' ry='" + slctID('ryCrcl').value + "' fill='" + slctID('fillCrcl').value + "' stroke='" + slctID('strokeCrcl').value + "' stroke-width='" + slctID('stroke-widthCrcl').value + "' &gt;";
    var crclCod = slctID('whrItHpnsCrcl').innerHTML;
    slctID('crclCode').innerHTML = sCircle;
}
textItCrcl();
/*underline and change the color of the selected element*/
function spannifyC(element) {
    "use strict";
    var sCSplit = sCircle.split(" "), k = 0;
    for (k = 0; k < sCSplit.length; k++) {
        if (sCSplit[k].search(element.className) !== -1) {
            sCSplit[k] = '<span class="valHglgt">' + sCSplit[k] + '</span>';
            break;
        }
    }
    sCircle = sCSplit.join(" ");
    slctID('crclCode').innerHTML = sCircle;
}
/*        setting up the Demo*/
//grow the demo rects
function growDemo() {
    "use strict";
    slctID('rect1').setAttribute("height", "5%");
    slctID("rect2").setAttribute("height", "25%");
    slctID("rect3").setAttribute("height", "95%");
    slctID("rect4").setAttribute("height", "45%");
    slctID("rect5").setAttribute("height", "12%");
}
//change the demo rects colors
function hoverColChgDemo() {
    "use strict";
    slctID("rect1Fill").setAttribute("fill", "#f55");
    slctID("rect2Fill").setAttribute("fill", "#f55");
    slctID("rect3Fill").setAttribute("fill", "#f55");
    slctID("rect4Fill").setAttribute("fill", "#f55");
    slctID("rect5Fill").setAttribute("fill", "#f55");
}
//change the demo rects colors back
function hoverColChgBckDemo() {
    "use strict";
    slctID("rect1Fill").setAttribute("fill", "#f55");
    slctID("rect2Fill").setAttribute("fill", "#55e5ff");
    slctID("rect3Fill").setAttribute("fill", "#76ff55");
    slctID("rect4Fill").setAttribute("fill", "#ffff55");
    slctID("rect5Fill").setAttribute("fill", "#b755ff");
}
//time to ghost
function ghostingDemo() {
    "use strict";
    slctID("rect1Fill").setAttribute("fill", "none");
    slctID("rect2Fill").setAttribute("fill", "none");
    slctID("rect3Fill").setAttribute("fill", "none");
    slctID("rect4Fill").setAttribute("fill", "none");
    slctID("rect5Fill").setAttribute("fill", "none");
}