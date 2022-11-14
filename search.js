/*<script>
          function searchFunction() {
            // Declare variables
            var input, filter, product, i, textValue;
            input = document.getElementById('seachProduct');
            filter = input.value.toUpperCase();
            var productDict = {};
            $(document).ready(()=>{
                      $.getJSON('./products.json', (data)=>{
                          data.forEach((product)=>{
                            productDict[product.name] = product.id;
                          }) 
                        }); 
                      });
          
            // Loop through all list items, and hide those who don't match the search query
            for (const [key, value] of Object.entries(productDict)){
              product = key.getElementsByTagName(productDict)
            }

            for (i = 0; i < productName.length; i++) {
              a = li[i].getElementsByTagName("a")[0];
              textValue = a.textContent || a.innerText;
              if (textValue.toUpperCase().indexOf(filter) > -1) {
                product[i].style.display = "";
              } else {
                li[i].style.display = "none";
              }
            }
          }
          </script>*/