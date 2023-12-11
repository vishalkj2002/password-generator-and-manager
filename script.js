document.getElementById('generatebtn').addEventListener('click', function(){
    var passwordLength=document.getElementById('myRange').value;
    var includeCharacters=document.getElementById('characters').checked
    var includeNumbers=document.getElementById('numbers').checked
    var includeAlphabets=document.getElementById('alphabets').checked
    
    var password= generatepassword(passwordLength, includeAlphabets,includeCharacters,includeNumbers);

    var alertMessageElement = document.getElementById('alertMessage');
    alertMessageElement.innerHTML = ""

    if(password===""){
      document.getElementById('generateout').value=""
        alertMessageElement.innerHTML='Please Select atleast one option'
        setTimeout(() => {
          document.getElementById('alertMessage').innerHTML=""
        }, 2000);
        return;
    }
    document.getElementById('generateout').value=password;
    document.getElementById('copy').innerHTML="Copy"

})



setTimeout(function() {
  let contentLoadedDiv = document.querySelector('.content-loaded');
  contentLoadedDiv.style.opacity = '1';
  let loadingSkeleton = document.querySelector('.loading-skeleton');
  loadingSkeleton.style.display = 'none';
}, 2000); 
    

    function copyToClipboard(){
       var copyText=document.getElementById('generateout')
      //  copyText.select();
      //  copyText.setSelectionRange(0, 99999)
       navigator.clipboard.writeText(copyText.value)

       showTick();
       setTimeout(function(){
        let copyButton=document.getElementById('copy')
        copyButton.innerHTML="Copy"
       }, 2000)
    }


    function showTick(){
      let copyButton=document.getElementById('copy');
      copyButton.innerHTML='Copied <span class="tick-Icon">✅</span>'
      
    }
    
  function generatepassword(passwordLength, includeAlphabets,includeCharacters,includeNumbers){
    var charset = "";
    if(includeAlphabets){
        charset+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (includeNumbers) {
        charset += "0123456789";
      }
      if (includeCharacters) {
        charset += "!@#$%^&*()_+";
      }

      if(charset===""){
        return ""
      }
    var password=""
    for(var i=0;i<passwordLength;i++){
        var randomIndex= Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }
    return password;


  }