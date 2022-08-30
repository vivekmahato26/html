var navBar = document.getElementById("navBar");
var toggleMenu = document.getElementById("toggleMenu");
function toggleNavBar() {
    if (navBar) {
        if (navBar.classList.contains('navbar--slide')) {
            navBar.classList.remove('navbar--slide');
        } else {
            navBar.classList.add('navbar--slide');
        }
    }
}

function toggleBar() {

    if (toggleMenu) {
        if (toggleMenu.classList.contains('toggle-menu--clicked')) {
            toggleMenu.classList.remove('toggle-menu--clicked');
        } else {
            toggleMenu.classList.add('toggle-menu--clicked');
        }
    }
    toggleNavBar();
}

const date = new Date();

const body = {
    customer_details: {
        // customer_id : data.body.id,
        customer_email: "yamini",
        customer_phone: "123",
    },
    order_id: "string",
    order_amount: 25000,
    order_currency: "INR",
    order_note: "test order"
}

const createOrder = (event) => {

    fetch("http://localhost:4000/createOrder", {
        method: "POST",
        body: JSON.stringify(body)
    })
    .then(data => {
        console.log(data);
        // window.location.assign(data.payment_link);
    })
    .catch(err => {
        console.log(err)
    })

}