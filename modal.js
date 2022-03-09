window.addEventListener("click",(e)=>{
    if(e.target.id === 'modal-make' || e.target.id === 'cross'){
        setTimeout(()=>{
            display("modal-make")
            document.getElementById("modal-make").style.display = 'none'
        },500)
        document.getElementById("modals").style.transform = "translateY(-200%) translateX(-50%)"
        document.getElementById("modals").style.transition = 'transform 0.5s'
    }
})