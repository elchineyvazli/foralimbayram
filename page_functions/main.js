//! CARDS
var d = document,
    de = d.documentElement,
    bd = d.getElementsByTagName('body')[0],
    htm = d.getElementsByTagName('html')[0],
    win = window,
    imgs = d.querySelectorAll('.atvImg'),
    totalImgs = imgs.length,
    supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;
if (totalImgs > 0) {
    for (var l = 0; l < totalImgs; l++) {

        var thisImg = imgs[l],
            layerElems = thisImg.querySelectorAll('.atvImg-layer'),
            totalLayerElems = layerElems.length;

        if (totalLayerElems <= 0) {
            continue;
        }

        while (thisImg.firstChild) {
            thisImg.removeChild(thisImg.firstChild);
        }

        var projectsHTML = d.createElement('div'),
            shineHTML = d.createElement('div'),
            layersHTML = d.createElement('div'),
            infoHTML = d.createElement('div'),
            layers = [];

        thisImg.id = 'atvImg__' + l;
        projectsHTML.className = 'atvImg-projects';
        shineHTML.className = 'atvImg-shine';
        layersHTML.className = 'atvImg-layers';
        infoHTML.className = 'atvImg-info';

        for (var i = 0; i < totalLayerElems; i++) {
            var layer = d.createElement('div'),
                imgSrc = layerElems[i].getAttribute('data-img');

            layer.className = 'atvImg-rendered-layer';
            layer.setAttribute('data-layer', i);
            layer.style.backgroundImage = 'url(' + imgSrc + ')';
            layersHTML.appendChild(layer);

            layers.push(layer);
        }

        projectsHTML.appendChild(layersHTML);
        projectsHTML.appendChild(shineHTML);
        shineHTML.appendChild(infoHTML);
        thisImg.appendChild(projectsHTML);

        var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
        thisImg.style.transform = 'perspective(' + w * 3 + 'px)';

        if (supportsTouch) {
            win.preventScroll = false;

            (function (_thisImg, _layers, _totalLayers, _shine) {
                thisImg.addEventListener('touchmove', function (e) {
                    if (win.preventScroll) {
                        e.preventDefault();
                    }
                    processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
                });
                thisImg.addEventListener('touchstart', function (e) {
                    win.preventScroll = true;
                    processEnter(e, _thisImg);
                });
                thisImg.addEventListener('touchend', function (e) {
                    win.preventScroll = false;
                    processExit(e, _thisImg, _layers, _totalLayers, _shine);
                });
            })(thisImg, layers, totalLayerElems, shineHTML);
        } else {
            (function (_thisImg, _layers, _totalLayers, _shine) {
                thisImg.addEventListener('mousemove', function (e) {
                    processMovement(e, false, _thisImg, _layers, _totalLayers, _shine);
                });
                thisImg.addEventListener('mouseenter', function (e) {
                    processEnter(e, _thisImg);
                });
                thisImg.addEventListener('mouseleave', function (e) {
                    processExit(e, _thisImg, _layers, _totalLayers, _shine);
                });
            })(thisImg, layers, totalLayerElems, shineHTML);
        }
    }
    function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {

        var bdst = bd.scrollTop || htm.scrollTop,
            bdsl = bd.scrollLeft,
            pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
            pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
            offsets = elem.getBoundingClientRect(),
            w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
            h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
            wMultiple = 320 / w,
            offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
            offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
            dy = (pageY - offsets.top - bdst) - h / 2,
            dx = (pageX - offsets.left - bdsl) - w / 2,
            yRotate = (offsetX - dx) * (0.07 * wMultiple),
            xRotate = (dy - offsetY) * (0.1 * wMultiple),
            imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)',
            arad = Math.atan2(dy, dx),
            angle = arad * 180 / Math.PI - 90;

        if (angle < 0) {
            angle = angle + 360;
        }

        if (elem.firstChild.className.indexOf(' over') != -1) {
            imgCSS += ' scale3d(1.07,1.07,1.07)';
        }
        elem.firstChild.style.transform = imgCSS;

        shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';
        shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px)';

        var revNum = totalLayers;
        for (var ly = 0; ly < totalLayers; ly++) {
            layers[ly].style.transform = 'translateX(' + (offsetX * revNum) * ((ly * 2.5) / wMultiple) + 'px) translateY(' + (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) + 'px)';
            revNum--;
        }
    }
    function processEnter(e, elem) {
        elem.firstChild.className += ' over';
    }
    function processExit(e, elem, layers, totalLayers, shine) {

        var projects = elem.firstChild;

        projects.className = projects.className.replace(' over', '');
        projects.style.transform = '';
        shine.style.cssText = '';

        for (var ly = 0; ly < totalLayers; ly++) {
            layers[ly].style.transform = '';
        }
    }
}
const cards = document.getElementsByClassName('atvImg-projects')
const viewProject = document.createElement('a');
viewProject.id = "viewProject";
viewProject.innerText = "VIEW PROJECT";
const projectH1 = document.createElement('h1');
projectH1.id = "projectH1";
const projectH4 = document.createElement('h4');
projectH4.id = "projectH4";
projectH4.innerText = "VIEW PROJECT";
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function (e) {
        hoverOnProjectCard = true;
        e.target.children[1].children[0].style.borderRadius = 0;
        e.target.children[1].children[0].style.width = "100%";
        e.target.children[1].children[0].style.height = "100%";
        e.target.children[1].children[0].style.right = 0;
        e.target.children[1].children[0].style.top = 0;

        cards[i].children[1].children[0].appendChild(viewProject)
        cards[i].children[1].children[0].appendChild(projectH1)
        cards[i].children[1].children[0].appendChild(projectH4)

        viewProject.href = i == 0 ? "./pages/boatBuilding.html" : i == 1 ? "./pages/plantahof.html" : i == 2 ? "./pages/symbiosis.html" : i == 3 ? "./pages/community.html" : ""
        projectH1.innerText = i == 0 ? "Boat Building" : i == 1 ? "Plantahof Auditorium" : i == 2 ? "Symbiosis with the site" : i == 3 ? "Community Center" : ""
        projectH4.innerText = i == 0 ? "Building Boats and Communities" : i == 1 ? "Constructed using concrete as the primary material at the scale of 1:2 physical model" : i == 2 ? "Group Work Site Project" : i == 3 ? "The Horace Mann School of the Deaf and Hard Hearing" : ""
    })
    cards[i].addEventListener('mouseleave', function (e) {
        hoverOnProjectCard = false;
        e.target.children[1].children[0].style.borderRadius = "50%";
        e.target.children[1].children[0].style.width = "100px";
        e.target.children[1].children[0].style.height = "100px";
        e.target.children[1].children[0].style.right = "-50px";
        e.target.children[1].children[0].style.top = "-50px";

        cards[i].children[1].children[0].removeChild(viewProject)
        cards[i].children[1].children[0].removeChild(projectH1)
        cards[i].children[1].children[0].removeChild(projectH4)
    })
}
const style = document.createElement("style");
//! OTHERS
const verticalMenu = document.getElementById('verticalMenu');
let navbarChoise = false;
const hMenu = document.getElementById('hMenu');
let isDark = true;
const darkOrLight = document.getElementsByClassName('fa-moon')[0];
//? dark or light
darkOrLight.addEventListener('click', function () {
    const bgHeader = document.getElementById('headerInsideText');
    const formLeft = document.getElementById('formLeft');
    const formRight = document.getElementById('formRight');
    const footerTop = document.getElementById('footerTop');
    const projects = document.getElementById('projects');
    if (isDark) {
        darkOrLight.classList = "brightIcon fa-regular fa-sun";
        darkOrLight.style.color = "orange";
        for (let i = 0; i < verticalMenu.children.length; i++) {
            verticalMenu.children[i].children[0].style.color = "black";
        }
        for (let i = 0; i < hMenu.children.length; i++) {
            hMenu.children[i].style.backgroundColor = "black";
        }
        footerTop.children[0].children[0].style.color = "black";
        projects.children[0].children[0].style.color = "black";
        formLeft.style.backgroundColor = "rgba(0,0,255, .6)"
        formRight.style.backgroundColor = "rgba(0,0,255, .6)"
        bgHeader.style.backgroundImage = "url(../assets/alimBayram/alimBayramLight.jpg)"
        bgHeader.style.backgroundPosition = "0 -100px"
        document.body.style.backgroundColor = "white"
        document.head.appendChild(style);
        style.innerHTML = `
#text{
    background-color:rgba(0,0,0,.2);

    h4{
        font-size:24px !important;
    }
    p{
        font-weight:600;
    }

}
.formInputs{
    border-bottom: solid 2px white;
    &::placeholder{
        color:white;
    }
}`
        for (let i = 0; i < bgHeader.children[0].children[0].children.length; i++) {
            bgHeader.children[0].children[0].children[i].style.color = "black";
        }

        if (document.body.offsetWidth < 1332) {
            bgHeader.style.backgroundPosition = "-100px 0px"
        }
        if (document.body.offsetWidth < 727) {
            bgHeader.style.backgroundPosition = "-100px 30px"
        }
        if (document.body.offsetWidth < 533) {
            bgHeader.style.backgroundPosition = "-20px 0px"
        }
    } else {
        if (document.body.offsetWidth < 1332) {
            bgHeader.style.backgroundPosition = "0 -200px"
        }
        if (document.body.offsetWidth < 807) {
            bgHeader.style.backgroundPosition = "0"
        }
        if (document.body.offsetWidth < 651) {
            bgHeader.style.backgroundPosition = "0 -80px"
        }

        for (let i = 0; i < verticalMenu.children.length; i++) {
            verticalMenu.children[i].children[0].style.color = "white";
        }
        for (let i = 0; i < hMenu.children.length; i++) {
            hMenu.children[i].style.backgroundColor = "white";
        }
        darkOrLight.classList = "brightIcon fa-regular fa-moon";
        darkOrLight.style.color = "white";
        footerTop.children[0].children[0].style.color = "white";
        projects.children[0].children[0].style.color = "white";
        formLeft.style.backgroundColor = "rgba(0,0,0, .24)"
        formRight.style.backgroundColor = "rgba(0,0,0, .24)"
        bgHeader.style.backgroundImage = "url(../assets/alimBayram/alimBayram.jpg)"
        document.body.style.backgroundColor = "black";
        style.remove();
        bgHeader.style.backgroundPosition = "0 -300px"

        for (let i = 0; i < bgHeader.children[0].children[0].children.length; i++) {
            bgHeader.children[0].children[0].children[i].style.color = "white";
        }
    }
    isDark = !isDark;
})
//? navbar
hMenu.addEventListener('click', function () {
    for (let i = 0; i < verticalMenu.children.length; i++) {
        verticalMenu.children[i].children[0].style.color = isDark ? "white" : "black";
    }
    for (let i = 0; i < hMenu.children.length; i++) {
        hMenu.children[i].style.backgroundColor = isDark ? "white" : "black";
    }
    if (!navbarChoise) {
        for (let i = 0; i < hMenu.children.length; i++) {
            if (i == 0) {
                hMenu.children[i].style.width = "40%";
            }
            if (i == 1) {
                hMenu.children[i].style.width = "70%";
            }
            if (i == 2) {
                hMenu.children[i].style.width = "100%";
            }
        }
        verticalMenu.style.display = "flex";
        setTimeout(() => {
            verticalMenu.style.top = "90%";
        }, 100)
    } else {
        for (let i = 0; i < hMenu.children.length; i++) {
            if (i == 0) {
                hMenu.children[i].style.width = "100%";
            }
            if (i == 1) {
                hMenu.children[i].style.width = "70%";
            }
            if (i == 2) {
                hMenu.children[i].style.width = "40%";
            }
        }
        verticalMenu.style.top = "-27%";
        setTimeout(() => {
            verticalMenu.style.display = "none";
        }, 300)
    }
    navbarChoise = !navbarChoise
})

let langObj = {
    en: {
        textH1: 'ARCHITECTURE STUDENT FROM AZERBAIJAN',
        textH4: 'Alim Bayram',
        textP: "I don't think architecture is only about shelter, it's only about a very simple enclosure. It should be able to excite you, to calm you, to make you think.",
        textPAuthor: "Zaha Hadid",
        projectsH1: 'PROJECTS',
        footerTopH1: 'Reach out for a new project or just say hello',
        footerTopH1Before: 'CONTACT US',
        formLeftH6: 'SEND MESSAGE',
        submitButton: 'SEND',
        sendUsAMessageText: "SEND MESSAGE",
        infoH6_1: 'Where to Find Us',
        infoP: '550 Huntington Ave, Boston, MA 02115 United States',
        infoH6_2: 'Email Us At',
        infoH6_3: 'Call Us At',
        inputPlaceholders: [
            "Your Name",
            "Your Email",
            "Subject",
            "Message"
        ],
        projectCards: [
            [
                "VIEW PROJECT",
                "Boat Building",
                "Building Boats and Communities",
            ],
            [
                "VIEW PROJECTAZ",
                "Plantahof Auditorium",
                "Constructed using concrete as the primary material at the scale of 1:2 physical model",
            ],
            [
                "VIEW PROJECTAZ",
                "Symbiosis with the site",
                "Group Work Site Project",
            ],
            [
                "VIEW PROJECTAZ",
                "Community Center",
                "The Horace Mann School of the Deaf and Hard Hearing",
            ],
        ]
    },
    ru: {
        textH1: 'СТУДЕНТКА АРХИТЕКТУРНОГО ФАКУЛЬТЕТА ИЗ АЗЕРБАЙДЖАНА',
        textH4: 'Алим Байрам',
        textP: "Я не думаю, что архитектура - это только укрытие, это только очень простое ограждение. Она должна возбуждать, успокаивать, заставлять думать.",
        textPAuthor: "Заха Хадид",
        projectsH1: 'ПРОЕКТЫ',
        footerTopH1: 'Обращайтесь за новым проектом или просто поздоровайтесь',
        footerTopH1Before: 'СВЯЖИТЕСЬ С НАМИ',
        formLeftH6: 'ОТПРАВИТЬ СООБЩЕНИЕ',
        submitButton: 'ОТПРАВИТЬ',
        sendUsAMessageText: "ОТПРАВИТЬ СООБЩЕНИЕ",
        infoH6_1: 'Как с вами связаться',
        infoP: '550 Huntington Ave, Boston, MA 02115 Соединенные Штаты Америки',
        infoH6_2: 'Отправьте нам электронное письмо',
        infoH6_3: 'Позвоните нам',
        inputPlaceholders: [
            "Ваше имя",
            "Электронная почта",
            "Tема",
            "Сообщение"
        ],
        projectCards: [
            [
                "ПОСМОТРЕТЬ ПРОЕКТ",
                "Строительство лодок",
                "Строительство лодок и сообществ",
            ],
            [
                "ПОСМОТРЕТЬ ПРОЕКТ",
                "Аудитория Плантахоф",
                "Создана с использованием бетона в качестве основного материала в масштабе 1:2 физическая модель",
            ],
            [
                "ПОСМОТРЕТЬ ПРОЕКТ",
                "Симбиоз с сайтом",
                "Групповая работа Проект сайта",
            ],
            [
                "ПОСМОТРЕТЬ ПРОЕКТ",
                "Общественный центр",
                "Школа глухих и слабослышащих имени Хораса Манна",
            ],
        ]
    },
    tr: {
        textH1: 'AZERBAYCANDAN MİMARLIK TALEBESİ',
        textH4: 'Alim Bayram',
        textP: "Bana kalırsa mimarlık yalnızca tasarımdan oluşmuyor, bundan daha geniş bir kavramdır. Bu 'tasarım' sizi heyecanlandırmalı, sakinleştirmeli ve derinlemesine düşünmenizi sağlamalı.",
        textPAuthor: "Zaha Hadid",
        projectsH1: 'PROJELER',
        footerTopH1: 'Yeni bir proje fikri için baş vurun ya da yorum yap',
        footerTopH1Before: 'BİZE ULAŞIN',
        formLeftH6: 'MESAJ GÖNDER',
        submitButton: 'GÖNDER',
        sendUsAMessageText: "MESAJ GÖNDER",
        infoH6_1: 'Bize nasıl ulaşırsın',
        infoP: '550 Huntington küç, Boston, MA 02115 Amerika Birleşmiş Devletleri',
        infoH6_2: 'E-Posta iletisi gönder',
        infoH6_3: 'Bizi ara',
        inputPlaceholders: [
            "Adınız",
            "E-posta",
            "Konu",
            "Mesaj"
        ],
        projectCards: [
            [
                "PROJEYİ GÖRÜNTÜLE",
                "Tekne Yapımı",
                "Tekne ve diğerlerinin inşası",
            ],
            [
                "PROJEYİ GÖRÜNTÜLE",
                "Plantahof Oditoryumu",
                "Ana malzeme olarak beton kullanılarak 1:2 fiziksel model ölçeğinde inşa edilmiştir",
            ],
            [
                "PROJEYİ GÖRÜNTÜLE",
                "Site ile simbiyoz",
                "Grup Çalışma Sahası Projesi",
            ],
            [
                "PROJEYİ GÖRÜNTÜLE",
                "Toplum Merkezi",
                "Horace Mann Sağır ve İşitme Engelliler Okulu",
            ],
        ]
    },
    az: {
        textH1: ' MEMARLIQ İXTİSASI ÜZRƏ AZƏRBAYCANLI TƏLƏBƏ',
        textH4: 'Alim Bayram',
        textP: "Məncə memarlıq təkcə dizayndan ibarət deyil, bundan daha geniş bir anlayışdır. Bu 'dizayn' sizi həyəcana, sakitləşməyə və dərin düşünməyə vadar etməlidir.",

        textPAuthor: "Zaha Hədid",
        projectsH1: 'PROYEKTLƏR',
        footerTopH1: 'Yeni bir layihə fikri üçün müraciət edin və ya fikrinizi bildirin',

        footerTopH1Before: 'BİZİMLƏ ƏLAQƏ SAXLAYIN',
        formLeftH6: 'MESAJ GÖNDƏR',
        submitButton: 'GÖNDƏR',

        sendUsAMessageText: "MESAJ GÖNDƏR",
        infoH6_1: 'Necə əlaqə qura bilərəm',
        infoP: '550 Huntington küç, Boston, MA 02115 Amerika Birləşmiş Ştatları',

        infoH6_2: 'Poçt mesaj göndər',
        infoH6_3: 'Zəng et',
        inputPlaceholders: [
            "Adınız",
            "E-poçt ünvanınız",
            "Başlıq",
            "Mesaj yazın"
        ],
        projectCards: [
            [
                "LAHİYƏNİ GÖSTƏR",
                "Qayıq inşası",
                "Qayıq və digərlərinin inşası",
            ],
            [
                "LAHİYƏNİ GÖSTƏR",
                "Plantahof Auditoriyası",
                "1:2 fiziki model miqyasında əsas material kimi betondan istifadə etməklə tikilmişdir",
            ],
            [
                "LAHİYƏNİ GÖSTƏR",
                "Saytla simbioz",
                "Qrup İş Saytı Layihəsi",
            ],
            [
                "LAHİYƏNİ GÖSTƏR",
                "İcma mərkəzi",
                "Horace Mann Kar və Çətin Eşitmə Məktəbi",
            ],
        ]
    }
}
const infoHTMLs = document.querySelectorAll('.atvImg-info')
const projectsHTMLs = document.querySelectorAll('.atvImg-projects')

const textH1 = document.getElementById('textH1');
const textH4 = document.getElementById('textH4');
const textP = document.getElementById('textP');

const projectsH1 = document.getElementById('projectsH1');
const footerTopH1 = document.getElementById('footerTopH1');
const formLeftH6 = document.getElementById('formLeftH6');

const submitButton = document.getElementById('submitButton');
const sendUsAMessageText = document.getElementById('sendUsAMessageText');
const infoH6_1 = document.getElementById('infoH6_1');

const infoP = document.getElementById('infoP');
const infoH6_2 = document.getElementById('infoH6_2');
const infoH6_3 = document.getElementById('infoH6_3');

const select = document.getElementsByTagName('select')[0];
const formInputsArr = document.querySelectorAll('.formInputs');
select.addEventListener('change', function () {
    const selectedLang = this.options[this.selectedIndex].value;
    if (selectedLang === "EN") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
                    console.log(projectsHTMLs[i].children[1].children[0].children);
                    console.log(langObj.az.projectCards[i]);
                    for (let j = 0; j < projectsHTMLs[i].children[1].children[0].children.length; j++) {
                        projectsHTMLs[i].children[1].children[0].children[j].innerText = langObj.en.projectCards[i][j]
                    }
                    projectsHTMLs[i].children[1].children[0].children[0].style.setProperty('--viewProject', `'${langObj.en.projectCards[i][0]}'`);
                }
            })
        }

        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.en.inputPlaceholders[i])
        }

        textH1.innerText = langObj.en.textH1;
        textH4.innerText = langObj.en.textH4;
        textP.innerText = langObj.en.textP;

        projectsH1.innerText = langObj.en.projectsH1;
        footerTopH1.innerText = langObj.en.footerTopH1;
        formLeftH6.innerText = langObj.en.formLeftH6;

        submitButton.innerText = langObj.en.submitButton;
        sendUsAMessageText.innerText = langObj.en.sendUsAMessageText;
        infoH6_1.innerText = langObj.en.infoH6_1;

        infoP.innerText = langObj.en.infoP;
        infoH6_2.innerText = langObj.en.infoH6_2;
        infoH6_3.innerText = langObj.en.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.en.footerTopH1Before}'`);
        textP.style.setProperty('--textPAuthor', `'${langObj.en.textPAuthor}'`);

    } else if (selectedLang === "RU") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
                    console.log(projectsHTMLs[i].children[1].children[0].children);
                    console.log(langObj.az.projectCards[i]);
                    for (let j = 0; j < projectsHTMLs[i].children[1].children[0].children.length; j++) {
                        projectsHTMLs[i].children[1].children[0].children[j].innerText = langObj.ru.projectCards[i][j]
                    }
                    projectsHTMLs[i].children[1].children[0].children[0].style.setProperty('--viewProject', `'${langObj.ru.projectCards[i][0]}'`);
                }
            })
        }

        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.ru.inputPlaceholders[i])
        }

        textH1.innerText = langObj.ru.textH1;
        textH4.innerText = langObj.ru.textH4;
        textP.innerText = langObj.ru.textP;

        projectsH1.innerText = langObj.ru.projectsH1;
        footerTopH1.innerText = langObj.ru.footerTopH1;
        formLeftH6.innerText = langObj.ru.formLeftH6;

        submitButton.innerText = langObj.ru.submitButton;
        sendUsAMessageText.innerText = langObj.ru.sendUsAMessageText;
        infoH6_1.innerText = langObj.ru.infoH6_1;

        infoP.innerText = langObj.ru.infoP;
        infoH6_2.innerText = langObj.ru.infoH6_2;
        infoH6_3.innerText = langObj.ru.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.ru.footerTopH1Before}'`);
        textP.style.setProperty('--textPAuthor', `'${langObj.ru.textPAuthor}'`);

    } else if (selectedLang === "TR") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
                    console.log(projectsHTMLs[i].children[1].children[0].children);
                    console.log(langObj.az.projectCards[i]);
                    for (let j = 0; j < projectsHTMLs[i].children[1].children[0].children.length; j++) {
                        projectsHTMLs[i].children[1].children[0].children[j].innerText = langObj.tr.projectCards[i][j]
                    }
                    projectsHTMLs[i].children[1].children[0].children[0].style.setProperty('--viewProject', `'${langObj.tr.projectCards[i][0]}'`);
                }
            })
        }


        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.tr.inputPlaceholders[i])
        }

        textH1.innerText = langObj.tr.textH1;
        textH4.innerText = langObj.tr.textH4;
        textP.innerText = langObj.tr.textP;

        projectsH1.innerText = langObj.tr.projectsH1;
        footerTopH1.innerText = langObj.tr.footerTopH1;
        formLeftH6.innerText = langObj.tr.formLeftH6;

        submitButton.innerText = langObj.tr.submitButton;
        sendUsAMessageText.innerText = langObj.tr.sendUsAMessageText;
        infoH6_1.innerText = langObj.tr.infoH6_1;

        infoP.innerText = langObj.tr.infoP;
        infoH6_2.innerText = langObj.tr.infoH6_2;
        infoH6_3.innerText = langObj.tr.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.tr.footerTopH1Before}'`);
        textP.style.setProperty('--textPAuthor', `'${langObj.tr.textPAuthor}'`);

    } else if (selectedLang === "AZ") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
                    console.log(projectsHTMLs[i].children[1].children[0].children);
                    console.log(langObj.az.projectCards[i]);
                    for (let j = 0; j < projectsHTMLs[i].children[1].children[0].children.length; j++) {
                        projectsHTMLs[i].children[1].children[0].children[j].innerText = langObj.az.projectCards[i][j]
                    }
                    projectsHTMLs[i].children[1].children[0].children[0].style.setProperty('--viewProject', `'${langObj.az.projectCards[i][0]}'`);
                }
            })
        }

        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.az.inputPlaceholders[i])
        }

        textH1.innerText = langObj.az.textH1;
        textH4.innerText = langObj.az.textH4;
        textP.innerText = langObj.az.textP;

        projectsH1.innerText = langObj.az.projectsH1;
        footerTopH1.innerText = langObj.az.footerTopH1;
        formLeftH6.innerText = langObj.az.formLeftH6;

        submitButton.innerText = langObj.az.submitButton;
        sendUsAMessageText.innerText = langObj.az.sendUsAMessageText;
        infoH6_1.innerText = langObj.az.infoH6_1;

        infoP.innerText = langObj.az.infoP;
        infoH6_2.innerText = langObj.az.infoH6_2;
        infoH6_3.innerText = langObj.az.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.az.footerTopH1Before}'`);
        textP.style.setProperty('--textPAuthor', `'${langObj.az.textPAuthor}'`);
    }
});