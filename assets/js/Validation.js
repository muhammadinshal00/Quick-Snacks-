document.getElementById('f').addEventListener('submit',function(event){

    //event.preventDefault()
    var name = document.getElementById('n1').value
    var text = document.getElementById('n2').value
    var message = document.getElementById('n3').value
    var email = document.getElementById('e1').value
   
    document.getElementById('s1').style.display = "none"
    document.getElementById('s2').style.display = "none"
 document.getElementById('s3').style.display = "none"
 document.getElementById('s4').style.display = "none"
    
    var reg_name = /^[a-zA-Z]+$/
    var reg_email =/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   var reg_text = /^[a-zA-Z]+$/
    var reg_message = /^(?:[a-zA-Z]+\s+){19,29}[a-zA-Z]+$/
    
   
    
    if(name == ""){
    var s = document.getElementById('s1')
    s.style.display = "block"
    s.textContent = "Name field can not be empty"
    s.style.color = "red"
    
    
    }
    else if (!(reg_name.test(name)))
         {
            event.preventDefault()
         var s = document.getElementById('s1')
         s.style.display = "block"
         s.textContent = "Input must be alphabatic(a-zA-Z)"
         s.style.color = "red"
    
         }
    else if(reg_name.test(name)){
        //event.preventDefault()
        var s = document.getElementById('s1')
        s.style.display = "block"
        s.textContent = "Correct"
        s.style.color = "green"
    }
    
    if(email == ""){
        var s = document.getElementById('s2')
        s.style.display = "block"
        s.textContent = "E-mail field can not be empty"
        s.style.color = "red"
        
        
        }
        else if (!(reg_email.test(email)))
             {
                event.preventDefault()
             var s = document.getElementById('s2')
             s.style.display = "block"
             s.textContent = "Input must be alphabatic(a-zA-Z)"
             s.style.color = "red"
        
             }
        else if(reg_email.test(email)){
            //event.preventDefault()
            var s = document.getElementById('s2')
            s.style.display = "block"
            s.textContent = "Correct"
            s.style.color = "green"
        }
        
    
        if(text == ""){
            var s = document.getElementById('s3')
            s.style.display = "block"
            s.textContent = "Subject field can not be empty"
            s.style.color = "red"
            
            
            }
            else if (!(reg_text.test(text)))
                 {
                    event.preventDefault()
                 var s = document.getElementById('s3')
                 s.style.display = "block"
                 s.textContent = "Input must be alphabatic(a-zA-Z)"
                 s.style.color = "red"
            
                 }
            else if(reg_text.test(text)){
                //event.preventDefault()
                var s = document.getElementById('s3')
                s.style.display = "block"
                s.textContent = "Correct"
                s.style.color = "green"
            }
            
            if(message == ""){
                var s = document.getElementById('s4')
                s.style.display = "block"
                s.textContent = "Message field can not be empty"
                s.style.color = "red"
                
            
                 }
                 else if (!(reg_message.test(message)))
                      {
                        event.preventDefault()
                      var s = document.getElementById('s4')
                      s.style.display = "block"
                      s.textContent = "Input must be alphabatic(a-zA-Z)"
                      s.style.color = "red"
                
                     }

                else if(reg_message.test(message)){
                    //event.preventDefault()
                    var s = document.getElementById('s4')
                    s.style.display = "block"
                    s.textContent = "Correct"
                    s.style.color = "green"
                }
    
    
    
          
    })
    
  
