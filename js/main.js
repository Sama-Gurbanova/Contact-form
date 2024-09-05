document.getElementById('applicationForm').addEventListener('submit', function(event) {
   event.preventDefault(); 

  
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const company = document.getElementById('company').value;
   const mobile = document.getElementById('mobile').value;
   const email = document.getElementById('email').value;

   
   const output = [
      'Ad: ' + firstName,
      'Soyad: ' + lastName,
      'Şirkət Adı: ' + company,
      'Mobil Nömrə: ' + mobile,
      'E-mail: ' + email
  ].join('<br>');

  
   document.getElementById('formOutput').innerHTML = output;
});