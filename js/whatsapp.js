const WspNum = "5491122334455";
const URL = `https://api.whatsapp.com/send?phone=${WspNum}&text=`;



const WspBtnOpn = document.getElementById("whatsapp-button-open");
const WspBtnCls = document.getElementById("whatsapp-button-close");
const WspBtnSnd = document.getElementById("whatsapp-button-send");
const WspMsj = document.getElementById("whatsapp-comentario");

const Bar = document.getElementById("bar");

const OpnWsp = () =>{

    const WspWrap = document.getElementById("whatsapp-wrap");

    WspWrap.style.height="300px";
    WspWrap.style.opacity="100";

}

const ClsWsp = () =>{

    const WspWrap = document.getElementById("whatsapp-wrap");

    WspWrap.style.height="0px";
    WspWrap.style.opacity="0";

}

const RdcWsp = () =>{

    let WspMsjNew = WspMsj.value;

    WspMsjNew = WspMsjNew.split(" ");

    WspMsjNew =WspMsjNew.join("%20");

    WspMsjNew =`${URL}${WspMsjNew}`;

    window.open(WspMsjNew);

    WspMsj.value="";


}

setInterval(() => {
    
    Bar.style.opacity="0";

}, 1000);

setInterval(() => {
    
    Bar.style.opacity="1";

},1200);





WspBtnOpn.addEventListener("click",OpnWsp);
WspBtnCls.addEventListener("click",ClsWsp);
WspBtnSnd.addEventListener("click",RdcWsp);

