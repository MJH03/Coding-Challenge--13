//U6899-7808
//Step 1 Fetch and Display products
let count = 0
function call(count) {
        const request = fetch('https://course-api.com/react-store-products').then((response) => {
            return response.json();
        }).then((data)=>{
                document.querySelector("productName").textContent = `${data[count].name}`;
                document.querySelector("productPicture").src = `${data[count].image}`;
                document.querySelector("productPicture").width = "400";
                document.querySelector("discription").textContent = `${data[count].description}`
                document.querySelectorAll("productPrice").textContent = `$${data[count].price}`
        
//Step 2:Improve Error Handling
            }).catch((err) => {
                console.log(Error)
                alert('Sorry but the website did not load. Please try again.');
//Step 3:Implement a Loading State
        }).finally(()=>{
            console.log("Fetch has Landed");
            alert("Check out these exciting products")
        })
 }
//Step 4: Navigation Buttons for Products:
const previous = document.querySelector("button");
        previous.addEventListener("click", function () {// Step 5: Added Dynamic Data hanlding 
            call(count)
            count = (count > 0) ? --count : 10;
        })
const next = document.querySelector("button");
        next.addEventListener("click", function(){
            call()
            count = (count < 10) ? ++count : 0;
        })