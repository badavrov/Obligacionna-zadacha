function Calculate() {
    var i = $('#i').val();
    var lv = $('#lv').val();
    var obl = $('#obl').val();
    var lvobl = $('#lvobl').val();
    var srok = $('#srok').val();
    var lvobl2 = $('#lvobl2').val();
    var lvobl3 = $('#lvobl3').val();
    var broiobl = $('#broiobl').val();
    var broiobl2 = $('#broiobl2').val();
    var broiobl3 = $('#broiobl3').val();
    var iData = i;
    var q = iData+++1 ;
    var qSrok = Math.pow(q, srok)
    var kwf = (qSrok*i)/(qSrok---1)
    var a = lv*kwf
    $('#a').val(a)
    $('#q').val(q)
    $('#kwf').val(kwf)
    //tablica row1
    var ki1= lv
    var oi1= obl
    var li1= lv*i
    var ti1= a-li1
    var ai1= Math.floor(ti1/lvobl)
    var pi1= ai1*lvobl
    var vnosA1= pi1+li1
    var ri1= ti1-pi1
    $('#ki1').html(ki1)
    $('#oi1').html(oi1)
    $('#li1').html(li1)
    $('#ti1').html(ti1)
    $('#ai1').html(ai1)
    $('#pi1').html(pi1)
    $('#vnosA1').html(vnosA1)
    $('#ri1').html(ri1)
    //tablica row2
    var ki2= ki1-pi1
    var oi2= oi1-ai1
    var li2= ki2*i
    var ti2= a-li2+q*ri1
    var ai2= Math.floor(ti2/lvobl)
    var pi2= ai2*lvobl
    var vnosA2= pi2+li2
    var ri2= ti2-pi2
    $('#ki2').html(ki2)
    $('#oi2').html(oi2)
    $('#li2').html(li2)
    $('#ti2').html(ti2)
    $('#ai2').html(ai2)
    $('#pi2').html(pi2)
    $('#vnosA2').html(vnosA2)
    $('#ri2').html(ri2)
    //tablica row3
    var ki3= ki2-pi2
    var oi3= oi2-ai2
    var li3= ki3*i
    var ti3= a-li3+q*ri2
    var ai3= Math.floor(ti3/lvobl)
    var pi3= ai3*lvobl
    var vnosA3= pi3+li3
    var ri3= ti3-pi3
    $('#ki3').html(ki3)
    $('#oi3').html(oi3)
    $('#li3').html(li3)
    $('#ti3').html(ti3)
    $('#ai3').html(ai3)
    $('#pi3').html(pi3)
    $('#vnosA3').html(vnosA3)
    $('#ri3').html(ri3)
    //Tablica row4
    var ki4= ki3-pi3
    var oi4= oi3-ai3
    var li4= ki4*i
    var ti4= a-li4+q*ri3
    var ai4= Math.floor(ti4/lvobl)
    var pi4= ai4*lvobl
    var vnosA4= pi4+li4
    var ri4= ti4-pi4
    $('#ki4').html(ki4)
    $('#oi4').html(oi4)
    $('#li4').html(li4)
    $('#ti4').html(ti4)
    $('#ai4').html(ai4)
    $('#pi4').html(pi4)
    $('#vnosA4').html(vnosA4)
    $('#ri4').html(ri4)
    //Tablica row5
    var ki5= ki4-pi4
    var oi5= oi4-ai4
    var li5= ki5*i
    var ti5= a-li5+q*ri4
    var ai5= Math.floor(ti5/lvobl)
    var pi5= ai5*lvobl
    var vnosA5= pi5+li5
    var ri5= ti5-pi5
    $('#ki5').html(ki5)
    $('#oi5').html(oi5)
    $('#li5').html(li5)
    $('#ti5').html(ti5)
    $('#ai5').html(ai5)
    $('#pi5').html(pi5)
    $('#vnosA5').html(vnosA5)
    $('#ri5').html(ri5)
    //Tablica row6
    var ki6= ki5-pi5
    var oi6= oi5-ai5
    var li6= ki6*i
    var ti6= a-li6+q*ri5
    var ai6= Math.floor(ti6/lvobl)
    var pi6= ai6*lvobl
    var vnosA6= pi6+li6
    var ri6= ti6-pi6
    $('#ki6').html(ki6)
    $('#oi6').html(oi6)
    $('#li6').html(li6)
    $('#ti6').html(ti6)
    $('#ai6').html(ai6)
    $('#pi6').html(pi6)
    $('#vnosA6').html(vnosA6)
    $('#ri6').html(ri6)
    //Tablica row7
    var ki7= ki6-pi6
    var oi7= oi6-ai6
    var li7= ki7*i
    var ti7= a-li7+q*ri6
    var ai7= Math.round((ti7-33*lvobl-broiobl2*lvobl2)/lvobl3+broiobl2+++33)
    var pi7= (broiobl3*lvobl3+(broiobl2-1)*lvobl2+33*lvobl)
    var vnosA7= pi7+li7
    var ri7= ti7-pi7
    $('#ki7').html(ki7)
    $('#oi7').html(oi7)
    $('#li7').html(li7)
    $('#ti7').html(ti7)
    $('#ai7').html(ai7)
    $('#pi7').html(pi7)
    $('#vnosA7').html(vnosA7)
    $('#ri7').html(ri7)


    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var seven = document.getElementById("7");
    var srok = $('#srok').val();
    if(srok==3){
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
        seven.style.display = "none";
    }
    if(srok==4){
        five.style.display = "none";
        six.style.display = "none";
        seven.style.display = "none";
    }else if(srok==5){
        six.style.display = "none";
        seven.style.display = "none";
    }else if(srok==6){
        seven.style.display = "none";
    }
}

