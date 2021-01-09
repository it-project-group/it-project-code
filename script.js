var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var jammu = document.getElementById('Jammu');
var chennai = document.getElementById('Chennai');
var jammuAndKashmir = document.getElementById('Jammu-and-kashmir');
var tamilNadu = document.getElementById('Tamil-Nadu');
var srinagar = document.getElementById('Srinagar');
var anantnag = document.getElementById('Anantnag');
var udhampur = document.getElementById('udhampur');
var leh = document.getElementById('Leh');
var doda = document.getElementById('Doda');
var kulgam = document.getElementById('kulgam');
var akhnoor = document.getElementById('Akhnoor');
var sopore = document.getElementById('Sopore');
var baramula = document.getElementById('Baramula');
var rajauri = document.getElementById('Rajauri');
var punch = document.getElementById('Punch');
var kupwara = document.getElementById('Kupwara');
var kathua = document.getElementById('Kathua');
var vellore = document.getElementById('Vellore');
var coimbatore = document.getElementById('coimbatore');
var madurai = document.getElementById('Madurai');
var tiruchirappalli = document.getElementById('Tiruchirapalli');
var thanjavur = document.getElementById('Thanjavur');
var salem = document.getElementById('Salem');
var erode = document.getElementById('Erode');
var tirunelveli = document.getElementById('Tirunelveli');
var dindigul = document.getElementById('Dindigul');
var ranipet = document.getElementById('Ranipet');
var sivakasi = document.getElementById('Sivakasi');
var karur = document.getElementById('Karur');
var udhagamandalam = document.getElementById('udhagamandalam');
var hosur = document.getElementById('Hosur');
var nagercoil = document.getElementById('Nagercoil');
var kanchipuram = document.getElementById('kanchipuram');
var neyveli = document.getElementById('Neyveli');
var cuddalore = document.getElementById('Cuddalore');
var kumbakonam = document.getElementById('Kumbakonam');
var tiruvannamalai = document.getElementById('Tiruvannamalai');
var vaniyambadi = document.getElementById('Vaniyambadi');
var gudiyatham = document.getElementById('Gudiyatham');
var ambur = document.getElementById('Ambur');
var nagapattinam = document.getElementById('Nagapattinam');
var pudukkottai = document.getElementById('Pudukkottai');
var karaikkudi = document.getElementById('Karaikkudi');
var pollachi = document.getElementById('Pollachi');
function show() {
  if (jammu.checked=== true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Jammu&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(jammuAndKashmir.checked === true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Jammu%20and%20kashmir&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(rajauri.checked === true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rajauri&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(tamilNadu.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tamil%20Nadu&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(thanjavur.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Thanjavur&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(chennai.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(srinagar.checked===true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Srinagar&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(anantnag.checked===true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=anantnag&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(udhampur.checked == true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=udhampur&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(leh.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=leh&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(doda.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=doda&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(kulgam.checked== true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kulgam&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(akhnoor.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=akhnoor&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(sopore.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=sopore&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(baramula.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=baramula&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(punch.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=punch&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(kupwara.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kupwara&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(kathua.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kathua&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(kathua.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kathua&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(vellore.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=vellore&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(coimbatore.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=coimbatore&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(madurai.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=madurai&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(tiruchirappalli.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tiruchirappalli&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(salem.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=salem&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(erode.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=erode&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
      else if(tirunelveli.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tirunelveli&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });

    else if(dindigul.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dindigul&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(sivakasi.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=sivakasi&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(karur.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=karur&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(udhagamandalam.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=udhagamandalam&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(hosur.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=hosur&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
      else if(nagercoil.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nagercoil&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(kanchipuram.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kanchipuram&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(karaikkudi.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=karaikkudi&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(neyveli.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=neyveli&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(cuddalore.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=cuddalore&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(kumbakonam.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kumbakonam&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(tiruvannamalai.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tiruvannamalai&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(vaniyambadi.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=vaniyambadi&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(gudiyatham.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=gudiyatham&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(ambur.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=ambur&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(nagapattinam.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nagapattinam&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
    else if(pudukkottai.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=pudukkottai&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
  else if(pollachi.checked==true)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=pollachi&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    desc.innerHTML = "Weather description : " + descValue;
    temp.innerHTML = "Temperature : " + tempValue + '℃';
    });
}