function renderContact() {

    const contact_section = document.createElement('section');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us'

    contact_section.append(h1);

    return contact_section

}

export default renderContact;