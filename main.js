
//select for menu
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

//select for menu image
const catagory = document.querySelectorAll(".catagory input");
const cataImg = document.querySelector("#c-img");

// select for connect section with nav item
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

// event listener for toggle menu
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});

// scroll event
document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");

  // conect With nav link
  connectSecWithNavLink();
});

// controlling menu image
catagory.forEach((element) => {
  element.addEventListener("click", () => {
    catagory.forEach((ele) => {
      ele.classList.remove("active");
    });

    let values = element.value;
    element.classList.add("active");
    cataImg.src = `./images/menu-${values}.jpg`;
  });
});

// handeling scroll event and mar nav item
const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};

// Form submisson
function SendEmail(){

  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let order=document.getElementById("order").value;
  let contact=document.getElementById("contact").value;
  let address=document.getElementById("address").value;
  
  let body= "Name:"+ name +"<br/>Email:" + email + "<br/> Order:" + order +"<br/> Contact Number:" + contact + "<br/>Address:" + address;
  console.log(body);
  
  //  Email.send({
    //SecureToken :"3cc0cf33-f177-4798-984d-e86882a76d1a", 
    //Host : "smtp.elasticemail.com",
    //Username : "yadlucky770@gmail.com",
    //Password : "96586D0B2E07F9F665300EE51E29CB2BA326",
    //To : 'yadlucky770@gmail.com',
    //From : "yadlucky770@gmail.com",
    //Subject : "This is the subject",
    //Body : "And this is the body"
//}).then(
  //message => alert(message)
//);

}

// happy coding!!!  
