function renderHome() {

        const main = document.createElement("main");
        main.classList.add("main");
        main.setAttribute("id", "main");

        const main_container = document.createElement('div');
        main_container.classList.add("container");

        const description_container = document.createElement('div');
        description_container.classList.add('main-headings')

        const h1 = document.createElement("h1");
        h1.textContent = "Enjoy the Pakistani Delicacies."

        const p = document.createElement("p");
        p.textContent = "Spicy, rich, flavorful and diverse. We welcome you to a culinary journey through traditional recipes and fine cuisine.";

        const menu = document.createElement('button');
        menu.innerText = "MENU"

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        description_container.appendChild(h1)
        description_container.appendChild(p)
        description_container.appendChild(menu)
        overlay.appendChild(description_container)
        main_container.appendChild(overlay);
        
        main.appendChild(main_container);


        // <---------------> //

        const section2 = document.createElement('section');

        const aboutDiv = document.createElement('div');
        aboutDiv.id = 'about';

        const aboutTitle = document.createElement('h2');
        aboutTitle.innerText = "ABOUT US";

        const imgDiv = document.createElement('div');
        const outlineDiv = document.createElement('div');
        const outlineDiv2 = document.createElement('div');
        outlineDiv.id = 'outlineDiv'
        outlineDiv2.id = 'outlineDiv2'
        imgDiv.id = 'imgDiv'
        const img = new Image(500, 600); 
        img.src = "img/restaurant.jpg"
        img.id = "img2"
        imgDiv.appendChild(img);
        imgDiv.appendChild(outlineDiv)
        imgDiv.appendChild(outlineDiv2)

        const paras = document.createElement('div');
        paras.id = 'parasDiv';


        const para1 = document.createElement('div');
        para1.id = 'paraDiv1';

        const para2 = document.createElement('div');
        para2.id = 'paraDiv2';

        const aboutP1 = document.createElement('p');
        aboutP1.id = 'about-para-1';

        aboutP1.innerHTML = "Reminiscing over the Grand Banquets and fanfare of<br> 'Mighty Mughals' of Avadh, 'Noble Nizams' of Hyderabad, <br> 'Magnificent Maharajas' of Punjab and 'Royal Rajputs' of Rajputana,<br>we welcome you to experience a culinary journey through recipes<br>  covering these four grand regions from the Golden Era." 

        const aboutP2 = document.createElement('p');
        aboutP2.classList.add('about-para-2');

        aboutP2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br> laboris nisi ut aliquip ex ea commodo consequat. "

        const hr = document.createElement('hr');


        aboutDiv.appendChild(aboutTitle);
        para1.appendChild(aboutP1)
        para2.appendChild(aboutP2);

        para2.appendChild(hr);

        paras.appendChild(aboutTitle)
        paras.appendChild(para1)
        paras.appendChild(para2)


        aboutDiv.appendChild(paras)

        aboutDiv.appendChild(imgDiv)


        section2.appendChild(aboutDiv)

        main.appendChild(section2)


      

        // <---------------> //
        const section = document.createElement('section');
       
        
        const servicesDiv = document.createElement('div');
        servicesDiv.id = 'services';

        const servicesTitle = document.createElement('h2')
        servicesTitle.innerText = "Our Services"
        servicesDiv.append(servicesTitle);

        const cen = document.createElement('div');
        cen.classList.add("cen")

        const service1 = document.createElement('div')
        service1.classList.add("service")
        const iDinein = document.createElement('i')
        iDinein.classList.add('fa', 'fa-solid', 'fa-utensils')
        const dineIn = document.createElement('h3');
        dineIn.innerText = "Dine In"
        const pDineIn =  document.createElement('p')
        pDineIn.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'

        const service2 = document.createElement('div')
        service2.classList.add("service")
        const iTakeout = document.createElement('i')
        iTakeout.classList.add('fas', 'fa-shopping-bag')
        const takeout = document.createElement('h3');
        takeout.innerText = "Take-out"
        const pTakeout =  document.createElement('p')
        pTakeout.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'

        const service3 = document.createElement('div')
        service3.classList.add("service")
        const iDelivery = document.createElement('i')
        iDelivery.classList.add('fa', 'fa-solid', 'fa-car')
        const delivery = document.createElement('h3');
        delivery.innerText = "Delivery"
        const pDelivery =  document.createElement('p')
        pDelivery.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'


        service1.appendChild(iDinein);
        service1.appendChild(dineIn)
        service1.appendChild(pDineIn)

        service2.appendChild(iTakeout);
        service2.appendChild(takeout)
        service2.appendChild(pTakeout)

        service3.appendChild(iDelivery);
        service3.appendChild(delivery)
        service3.appendChild(pDelivery)
        
        cen.appendChild(service1)
        cen.appendChild(service2)
        cen.appendChild(service3)
        servicesDiv.appendChild(cen)

        section.appendChild(servicesDiv);


        main.appendChild(section)

        return main;
    
}

export default renderHome;