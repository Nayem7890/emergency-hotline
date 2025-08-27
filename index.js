// call button- traverse
const callBtns = document.getElementsByClassName('call-btn');

for(let callButton of callBtns) {
    callButton.addEventListener('click', function () {
      
        const callTitle = callButton.parentNode.parentNode.parentNode.children[1].children[0].innerTex
        const callNumber = callButton.parentNode.parentNode.parentNode.children[1].children[2].innerTex;
         console.log(callNumber)

         const callHistory = document.getElementById('call-history');
         const newCart = document.createElement('div');
         newCart.innerHTML = `
                   <div class="w-11/12 p-2 mx-auto mt-2 bg-[#F2F2F2] rounded-xl">
                    <div>
                        <h2 class="text-base md:text-xl font-bold">Title Name</h2>
                    <p class="py-1 text-[#5C5C5C]">Phone Number</p>
                    </div>
                    <div>
                    
                    </div>
                </div>
         `;
         callHistory.append(newCart);
    });
}