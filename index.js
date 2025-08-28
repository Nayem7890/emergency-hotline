// call button- traverse
const callBtns = document.getElementsByClassName('call-btn');

for(let callButton of callBtns) {
    callButton.addEventListener('click', function () {
      
    
        const callTitle = callButton.parentNode.parentNode.parentNode.children[1].children[0].innerText;
        
        const callNumber = callButton.parentNode.parentNode.parentNode.children[1].children[2].innerText;
        const currentTime = new Date().toLocaleTimeString();
         const callHistory = document.getElementById('call-history');
         const newCart = document.createElement("div");
         newCart.innerHTML = `
                   <div class="w-11/12 p-2 mx-auto mt-2 bg-[#F2F2F2] rounded-xl flex justify-between items-center">
                    <div class="w-2/3">
                        <h2 class="text-base md:text-xl font-bold">${callTitle}</h2>
                    <p class="py-1 text-[#5C5C5C]">${callNumber}</p>
                    </div>
                    <div>
                    <p class="text-sm text-[#5C5C5C] pr-2">${currentTime}</p>
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

// Heart increase
const heartButtons = document.getElementsByClassName('heart-btn');

 for(let heartButton of heartButtons) {
    heartButton.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const currentHeart = heartCount + 1;

    document.getElementById('heart-count').innerText = currentHeart;
})
 }


//  copy button increase
const copyButtons = document.getElementsByClassName('copy-btn');

for(let copyButton of copyButtons){
    copyButton.addEventListener('click', function (){
        const numberToCopy = copyButton.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(numberToCopy).then(() => {
        alert(`The number has been copied ${numberToCopy}`)

        const copyCount = document.getElementById('copy-count');
            let currentCount = parseInt(copyCount.innerText);
            copyCount.innerText = currentCount + 1;
            });
    });
};

  
