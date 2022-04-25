const buyBtns = document.querySelectorAll(".js-buy-sticket")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".js-modal-close")

function ShowBuyStickets(){
    modal.classList.add('open')
}

function hideBuyStickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', ShowBuyStickets)
}

modalClose.addEventListener('click', hideBuyStickets)




