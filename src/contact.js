function renderContact() {

    const contact_section = document.createElement('section');
    contact_section.classList.add("contact-section");
    

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us'

    contact_section.append(h1);

    const main = document.createElement('section');
    main.classList.add("parent");

    const map = document.createElement('div');
    map.classList.add("left");

    const map_div = document.createElement('div');
    map_div.classList.add('map-div')

    map_div.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1382.3073662511233!2d-79.64354768914845!3d43.70515302443351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bfc4a8b18d5%3A0x22e0de184bddffaf!2sMughal%20Mahal%20Restaurant!5e0!3m2!1sen!2sca!4v1669940892784!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    map.appendChild(map_div);

    const address = document.createElement('div');
    address.classList.add('right-1');

    const p_address = document.createElement('p');
    p_address.innerHTML = "<i class='fa fa-solid fa-map-pin'></i> 4060 Lochmere Lane, Meriden, <br> GA, 30058"

    const p_hours = document.createElement('p');
    p_hours.innerHTML = "<i class='fa fa-solid fa-clock'></i> Mon - Thu: 12:00pm - 11:00pm <br> Fri - Sun: 12:00pm - 1:00am"

    const address_pdiv = document.createElement('div');
    address_pdiv.append(p_address);
    address_pdiv.id = 'address-pdiv'
    const hours_pdiv =  document.createElement('div');
    hours_pdiv.id = 'hours-pdiv'
    hours_pdiv.appendChild(p_hours);

    const outer_pdiv = document.createElement('div');
    outer_pdiv.id = 'outer-pdiv'

    outer_pdiv.append(address_pdiv, hours_pdiv)

    address.append(outer_pdiv);

    const telephone = document.createElement('div');
    telephone.classList.add('right-3');

    const p_telephone = document.createElement('p');
   
    p_telephone.innerHTML = "<i class='fa fa-solid fa-phone'></i>  678-518-6399"

    const p_email = document.createElement('p');
    
    p_email.innerHTML = "<i class='fa fa-solid fa-envelope'></i> info@mughalrestaurant.com"

    const telephone_pdiv = document.createElement('div');
    telephone_pdiv.append( p_telephone);
    telephone_pdiv.id = 'telephone-pdiv'
    const email_pdiv =  document.createElement('div');
    email_pdiv.id = 'email-pdiv'
    email_pdiv.appendChild(p_email);

    const outer_pdiv2 = document.createElement('div');
    outer_pdiv2.id = 'outer-pdiv2'

    outer_pdiv2.append(telephone_pdiv, email_pdiv)

    telephone.append(outer_pdiv2);

    main.append(map, address, telephone);
    contact_section.append(main)

    return contact_section

}

export default renderContact;