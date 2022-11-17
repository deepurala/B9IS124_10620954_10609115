
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
          
          //Loop through all list items, and hide those who don't match the search query
             for (const [key, value] of Object.entries(productDict)){
              product = key.getElementsByTagName(productDict.key)
             }

             for (i = 0; i < productName.length; i++) {
               a = filter[i].getElementsByTagName("a")[0];
               textValue = a.textContent || a.innerText;
               if (textValue.toUpperCase().indexOf(filter) > -1) {
                 product[i].style.display = ""; 
          
               } else {
                 li[i].style.display = "none";
               }
             }
           }



           function searchProduct(){
            $(".shop-content").html("");
            var productname=$("#searchbuttonid").val();
            if(productname==""){  
            alert("please enter value for search");  
            data.forEach( (product)=> {
                var  productList = '<div class="product-box">'+
                        '<img src="'+product.img[0]+'" alt="" class="product-img">'+
                        '<h2 class="product-title">'+product.title+'</h2>'+
                        '<span class="price">'+product.price+'</span>'+
                    '<a href="reserve.html"><i class="bx bx-plus reserve" title="Reserve Product"></i></a>'+
                        '</div>';
                    $('.shop-content').append(productList);
            });
            }
            else{
            $(".shop-content").html("");
            for(var i=0;i<data.length;i++){
            if(data[i].title.toLowerCase()==productname.toLowerCase()){
            var  productList = '<div class="product-box">'+
                        '<img src="'+data[i].img[0]+'" alt="" class="product-img">'+
                        '<h2 class="product-title">'+data[i].title+'</h2>'+
                        '<span class="price">'+data[i].price+'</span>'+
                    '<a href="reserve.html"><i class="bx bx-plus reserve" title="Reserve Product"></i></a>'+
                        '</div>';
                    $('.shop-content').append(productList);            
            }
            }  
            }
            }
          