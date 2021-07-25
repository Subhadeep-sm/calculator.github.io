        
            
                
                let x=0;

                // add function
                function add(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    
                    let y=parseFloat(document.getElementById('input').value);
                    x+=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";

                }

                // multiply function
                function multiply(){
                    if (x==0){
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x=x+1
                    let y=parseFloat(document.getElementById('input').value);
                    x*=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                    x*=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }
                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";

                }

                function multiply_2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x*=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }
                
                // divide function
                function divide(){
                    if (x==0){
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    
                    let y=parseFloat(document.getElementById('input').value);
                    x=y*y;
                    x=x/y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=x/y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }
                
                // substract function
                function substract(){
                    if (x==0){
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=y*2;
                    x-=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x-=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    }
                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";
                    
                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }

                function substract2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    
                    let y=parseFloat(document.getElementById('input').value);
                    x-=y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }

                //exponential function
                function exponent(){
                    if (x==0){
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=y;
                    
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=x**y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";
                    }

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";

                }
                function exponent2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=x**y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }


                
                

                // 2X function
                function double(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=2*y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }

                function double2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x=2*x;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }






                // 1/X function
                function reciprocal(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x=1/y;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }

                function reciprocal2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x=1/x;
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }





                

                // pie function
                function pie(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    
                    document.getElementById('input').value = Math.PI;  
                }

                

                // square root function
                function sqrt1(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x= Math.sqrt(y);
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;

                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }
                

                function sqrt2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x= Math.sqrt(x);
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }

                

                function sin(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        x= Math.sin(y);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        x= Math.sin(y* Math.PI / 180);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";


                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";


                }

                function sin2(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        x= Math.sin(x);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        x= Math.sin(x* Math.PI / 180);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }

                }


                function cos(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        x= Math.cos(y);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        x= Math.cos(y* Math.PI / 180);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }

                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";


                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";


                }

                function cos2(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        x= Math.cos(x);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        x= Math.cos(x* Math.PI / 180);
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }

                }


                function tan(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        let sinval = Math.sin(y);
                        let cosval= Math.cos(y).toFixed(10);
                        x = sinval / cosval;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let y=parseFloat(document.getElementById('input').value);
                        let sinval= Math.sin(y* Math.PI / 180);
                        let cosval= Math.cos(y* Math.PI / 180).toFixed(10);
                        x= sinval / cosval;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";


                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";


                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";


                }


                function tan2(){
                    if (document.getElementById('angle-unit').value == "rad"){
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let sinval= Math.sin(x);
                        let cosval= Math.cos(x).toFixed(10);
                        x= sinval/cosval;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="hidden";
                        document.getElementById('ans').style.display="none";
                        let sinval= Math.sin(x*Math.PI/180);
                        let cosval= Math.cos(x* Math.PI/180).toFixed(10);
                        x= sinval/cosval;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                }

                function log(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    let y=parseFloat(document.getElementById('input').value);
                    x= Math.log(y);
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;



                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";


                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";


                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";
                }



                function log2(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x= Math.log(x);
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }


                // all clear function
                function allclear(){
                    document.getElementById('ans').style.visibility="hidden";
                    document.getElementById('ans').style.display="none";
                    x=0;
                    document.getElementById('input').value = null;
                    document.getElementById('result').innerHTML=null;


                    document.getElementById('multiply1').style.visibility="visible";
                    document.getElementById('multiply1').style.display="block";
                    document.getElementById('multiply2').style.visibility="hidden";
                    document.getElementById('multiply2').style.display="none";

                    document.getElementById('substract1').style.visibility="visible";
                    document.getElementById('substract1').style.display="block";
                    document.getElementById('substract2').style.visibility="hidden";
                    document.getElementById('substract2').style.display="none";

                    document.getElementById('sqrt1').style.visibility="visible";
                    document.getElementById('sqrt1').style.display="block";
                    document.getElementById('sqrt2').style.visibility="hidden";
                    document.getElementById('sqrt2').style.display="none";

                    document.getElementById('double1').style.visibility="visible";
                    document.getElementById('double1').style.display="block";
                    document.getElementById('double2').style.visibility="hidden";
                    document.getElementById('double2').style.display="none";

                    document.getElementById('reciprocal1').style.visibility="visible";
                    document.getElementById('reciprocal1').style.display="block";
                    document.getElementById('reciprocal2').style.visibility="hidden";
                    document.getElementById('reciprocal2').style.display="none";

                    document.getElementById('exponent1').style.visibility="visible";
                    document.getElementById('exponent1').style.display="block";
                    document.getElementById('exponent2').style.visibility="hidden";
                    document.getElementById('exponent2').style.display="none";

                    document.getElementById('sin1').style.visibility="visible";
                    document.getElementById('sin1').style.display="block";
                    document.getElementById('sin2').style.visibility="hidden";
                    document.getElementById('sin2').style.display="none";

                    document.getElementById('cos1').style.visibility="visible";
                    document.getElementById('cos1').style.display="block";
                    document.getElementById('cos2').style.visibility="hidden";
                    document.getElementById('cos2').style.display="none";

                    document.getElementById('tan1').style.visibility="visible";
                    document.getElementById('tan1').style.display="block";
                    document.getElementById('tan2').style.visibility="hidden";
                    document.getElementById('tan2').style.display="none";

                    document.getElementById('log1').style.visibility="visible";
                    document.getElementById('log1').style.display="block";
                    document.getElementById('log2').style.visibility="hidden";
                    document.getElementById('log2').style.display="none";

                    document.getElementById('answer1').style.visibility="visible";
                    document.getElementById('answer1').style.display="block";
                    document.getElementById('answer2').style.visibility="hidden";
                    document.getElementById('answer2').style.display="none";

                }


                // answer function
                function answer(){
                    if (document.getElementById('input').value==0){
                        document.getElementById('ans').style.visibility="visible";
                        document.getElementById('ans').style.display="block";
                        x=0;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    else{
                        document.getElementById('ans').style.visibility="visible";
                        document.getElementById('ans').style.display="block";
                        let y=parseFloat(document.getElementById('input').value);
                        x=y;
                        document.getElementById('result').innerHTML=x.toFixed(3);
                        document.getElementById('input').value = null;
                    }
                    

                    document.getElementById('answer1').style.visibility="hidden";
                    document.getElementById('answer1').style.display="none";
                    document.getElementById('answer2').style.visibility="visible";
                    document.getElementById('answer2').style.display="block";

                    document.getElementById('log1').style.display="none";
                    document.getElementById('log1').style.visibility="hidden";
                    document.getElementById('log2').style.visibility="visible";
                    document.getElementById('log2').style.display="block";

                    document.getElementById('tan1').style.display="none";
                    document.getElementById('tan1').style.visibility="hidden";
                    document.getElementById('tan2').style.visibility="visible";
                    document.getElementById('tan2').style.display="block";


                    document.getElementById('cos1').style.display="none";
                    document.getElementById('cos1').style.visibility="hidden";
                    document.getElementById('cos2').style.visibility="visible";
                    document.getElementById('cos2').style.display="block";

                    document.getElementById('sin1').style.visibility="hidden";
                    document.getElementById('sin1').style.display="none";
                    document.getElementById('sin2').style.visibility="visible";
                    document.getElementById('sin2').style.display="block";


                    document.getElementById('sqrt1').style.visibility="hidden";
                    document.getElementById('sqrt1').style.display="none";
                    document.getElementById('sqrt2').style.visibility="visible";
                    document.getElementById('sqrt2').style.display="block";

                    document.getElementById('exponent1').style.visibility="hidden";
                    document.getElementById('exponent1').style.display="none";
                    document.getElementById('exponent2').style.visibility="visible";
                    document.getElementById('exponent2').style.display="block";

                    document.getElementById('double1').style.visibility="hidden";
                    document.getElementById('double1').style.display="none";
                    document.getElementById('double2').style.visibility="visible";
                    document.getElementById('double2').style.display="block";

                    document.getElementById('reciprocal1').style.display="none";
                    document.getElementById('reciprocal2').style.visibility="visible";
                    document.getElementById('reciprocal2').style.display="block";
                    document.getElementById('reciprocal1').style.visibility="hidden";

                    document.getElementById('multiply1').style.visibility="hidden";
                    document.getElementById('multiply1').style.display="none";
                    document.getElementById('multiply2').style.visibility="visible";
                    document.getElementById('multiply2').style.display="block";

                    document.getElementById('substract1').style.visibility="hidden";
                    document.getElementById('substract1').style.display="none";
                    document.getElementById('substract2').style.visibility="visible";
                    document.getElementById('substract2').style.display="block";
                }

                function answer2(){
                    document.getElementById('ans').style.visibility="visible";
                    document.getElementById('ans').style.display="block";
                    document.getElementById('result').innerHTML=x.toFixed(3);
                    document.getElementById('input').value = null;
                }






