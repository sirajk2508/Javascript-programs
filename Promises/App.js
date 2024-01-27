const cart = ["Shoes", "T-shirt", "Pant"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.catch((err) => {
    console.log(err.message);
})
.then((orderId) => {
    return proceedToPayment(orderId);
})
.then((paymentInfo) => {
    console.log(paymentInfo);
});

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Payment Successful!!!"), 2000);
    });
}
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if(!validCart(cart)) {
            setTimeout(() => {
                const err = new Error("Can't validate Cart!!!");
                reject(err);
            }, 2000);
        }
        const orderId = "12345";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 2000);
        }
    });
    return pr;
}

function validCart(cart) {
    return false;
}


function bottom() {
    function top() {
        console.trace("who called upon me?");
    }
    top();
}
bottom();