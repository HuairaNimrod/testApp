
    var header = document.querySelector('header');
    var section = document.querySelector('section');
        
    /*----Obtaining the JSON-----*/
        
    var requestURL = 'https://huairanimrod.github.io/cit261/week02/json/carList.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
          var Cars = request.response;
          populateHeader(Cars);
          showBrands(Cars);
        }
    /*-----Populating the Header-----*/
    
    function populateHeader(jsonObj) {
          var myH1 = document.createElement('h1');
          myH1.textContent = jsonObj['listName'];
          header.appendChild(myH1);

          var myPara = document.createElement('p');
          myPara.textContent = 'City: ' + jsonObj['city'] + ' - Course: ' + jsonObj['course'];
          header.appendChild(myPara);
        }
    /*-----Cars Information----*/
        
    function showBrands(jsonObj) {
          var brand = jsonObj['Brands'];

          for (var i = 0; i < brand.length; i++) {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
       

            myH2.textContent = brand[i].name;
            myPara1.textContent = 'Model: ' + brand[i].model;
            myPara2.textContent = 'Max Speed: ' + brand[i].maxSpeed;
            myPara3.textContent = 'Country: '+ brand[i].country;;

       

            myArticle.appendChild(myH2); 
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
         
            section.appendChild(myArticle);
          }
        }

 /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
