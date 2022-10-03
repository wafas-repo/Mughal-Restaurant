function createFooter() {

    const footer = document.createElement("footer");

    const footerTop = document.createElement('div');
    footerTop.classList.add('footer-top');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

  
   
    const randomAddress = document.createElement('p')
    const randomNumber = document.createElement('p');
    const randomEmail = document.createElement('p');

    randomAddress.innerHTML = '4060 Lochmere Lane, Meriden, GA, 30058'
    randomNumber.innerHTML = '678-518-6399'
    randomEmail.innerHTML = 'info@mughalrestaurant.com'

    const ul = document.createElement('ul');
    ul.classList.add('socials');
    
    const socialItems = ["github", "linkedin"];
    
    for (let i = 0; i < socialItems.length; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute('href', '#');
        var iTag = document.createElement('i');
        iTag.classList.add("fa", "fa-brands", "fa-"+socialItems[i])
        link.appendChild(iTag);
        li.appendChild(link);
        ul.appendChild(li);
    }

    footerContent.appendChild(randomAddress);
    footerContent.appendChild(randomNumber)
    footerContent.appendChild(randomEmail)
    footerTop.appendChild(ul);

    const footerBottom = document.createElement('div');
    footerBottom.classList.add('footer-bottom');
    const copyright = document.createElement("p");
    copyright.innerHTML = "copyright &copy;2022 mughal. designed by Wafa Qazi"
    footerBottom.appendChild(copyright);
    footer.appendChild(footerTop)
    footer.appendChild(footerContent);
    footer.appendChild(footerBottom)

    return footer;
    
}

export default createFooter;