//U6899-7808
//Step 1 Fetch and Display products
function call() {
        const request = fetch('https://course-api.com/react-store-products').then((response) => {
            console.log(response);
            return response.json();
        }).then((data)=>{
                document.querySelector("productName").textContent = `${data[0].name}`;
                document.querySelector("productPicture").src = `${data[0].image}`;
                document.querySelector("productPicture").width = "400";
                document.querySelector("discription").textContent = `${data[0].description}`
                document.querySelectorAll("productPrice").textContent = `$${data[0].price}`
        
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
call()