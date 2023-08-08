export default class DinoService {

    static createDinos(parags, words) {
        
        return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
              const url = `https://dinoipsum.com/api/?format=text&paragraphs=${parags}&words=${words}`;
            
              request.addEventListener("loadend", function() {
                const response = this.responseText;
                console.log(response);
                if (this.status === 200) {
                  resolve(response);
                }
          
                else {
                  reject(response);
                }
          
              });
            
              request.open("GET", url, true);
              request.send();
            
        });
    }

}