function titles() {
    let novler = datasors.map((x) => x.nov);

    let result = [];

    for (let i = 0; i < novler.length; i++) {
        let nov = novler[i];


        if (!result.includes(nov)) {
            result.push(nov);
        }
    }

    return result
}

function leftBarHtml() {
    let str = ``;

    let novler = titles();



    for (let i = 0; i < novler.length; i++) {
        str += `<div class="left">${novler[i]}</div>`;
    }

    return str;
}

function card(nov, ad, qiymet, vahid) {
    let cart = `
    <div class="card col-lg-3" style="width: 18rem;">
            <div class="image">
            </div>

            <div class="card-body">
                <p>novu: <span>${nov}</span></p>
                <p>adi:<span>${ad}</span></p>
                <p>qiymet:<span>${qiymet}</span></p>
                <p>vahidi:<span>${vahid}</span></p>
  
            </div>
            <div class="buttondiv">
            <button class="edit">Edit</button>
                <button class="delete">X</button>
                <button class="cardbtn">Sebete at</button>
            </div>

            
        </div>
    `;
    return cart;


}

function fillMain() {
    for (let i = 0; i < datasors.length; i++) {
        let obj = datasors[i];
        $('.main').append(card(obj.nov, obj.ad, obj.vahid, obj.qiymet));
    }
}