var container1 = document.getElementById("container1");
var container = document.getElementById("container");


let count=0

const getPost = (count) => {
   
    for (var i = count + 1; i <= 25+count; i++) {
        console.log("bottom")
                var div = document.createElement("div");
                div.setAttribute("class", "padd")
                var h1 = document.createElement("h1");
        
                h1.innerText = ` Masai Student ${i}`
                div.append(h1)
                container1.append(div)
               
            }
  return i-1
    }
   
  

getPost(0)


const Name=(count)=>{
    setTimeout(()=>{
        getPost(count)
    },500)
}



container1.addEventListener("scroll", () => {
   const { scrollHeight, scrollTop, clientHeight } = container1

    // console.log(scrollHeight,scrollTop,clientHeight)
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        // console.log("bottom")
         count=count+20 
        
        Name(count)
    }

})