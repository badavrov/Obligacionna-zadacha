function Calculate() {
    var i = $('#i').val();
    var lv = $('#lv').val();
    var obl = $('#obl').val();
    var lvobl = $('#lvobl').val();
    var srok = $('#srok').val();
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
    var ti2= a-li2
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
    var ti3= a-li3
    var smetka= Math.floor(ti3/lvobl)
    var ai3= smetka+++1
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
    var riCustom1= ri1+++ri2+++ri3
    $('#riCustom1').html(riCustom1)
    //Tablica row5
    var ki4= ki3-pi3
    var oi4= oi3-ai3
    var li4= ki4*i
    var ti4= a-li4
    var smetka= Math.floor(ti4/lvobl)
    var ai4= smetka+++1
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
    //Tablica row6
    var riCustom2= riCustom1+++ri4
    $('#riCustom2').html(riCustom2)
    //Tablica row7
    var ki5= ki4-pi4
    var oi5= oi4-ai4
    var li5= ki5*i
    var ti5= a-li5
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
    //Tablica row8
    var riCustom3= riCustom2+++ri5
    $('#riCustom3').html(riCustom3)

    var tiCustom1= riCustom3-lvobl
    $('#tiCustom1').html(tiCustom1)
}