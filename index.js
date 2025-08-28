// call button- traverse
const callBtns = document.getElementsByClassName('call-btn');

for(let callButton of callBtns) {
    callButton.addEventListener('click', function () {
      
    
        const callTitle = callButton.parentNode.parentNode.parentNode.children[1].children[0].innerText;
        
        const callNumber = callButton.parentNode.parentNode.parentNode.children[1].children[2].innerText;

         const callHistory = document.getElementById('call-history');
         const newCart = document.createElement("div");
         newCart.innerHTML = `
                   <div class="w-11/12 p-2 mx-auto mt-2 bg-[#F2F2F2] rounded-xl">
                    <div class="w-2/3">
                        <h2 class="text-base md:text-xl font-bold">${callTitle}</h2>
                    <p class="py-1 text-[#5C5C5C]">${callNumber}</p>
                    </div>
                    <div>
                    
                    </div>
                </div>
         `;
         callHistory.append(newCart);
    });
}
 
document.getElementById('btn-clear').addEventListener('click', function () {
    const callHistoryClear = document.getElementById('call-history');
    callHistoryClear.innerHTML = "";
})