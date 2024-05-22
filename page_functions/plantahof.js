//! OTHERS
const verticalMenu = document.getElementById('verticalMenu');
const hMenu = document.getElementById('hMenu');
const darkOrLight = document.getElementsByClassName('fa-moon')[0];
const style = document.createElement('style')
let navbarChoise = false;
let isDark = true;
//? dark or light
darkOrLight.addEventListener('click', function () {
    const footerTop = document.getElementById('footerTop');
    const formLeft = document.getElementById('formLeft');
    const formRight = document.getElementById('formRight');
    const precentStudy = document.getElementById('precentStudy');
    if (isDark) {
        darkOrLight.classList = "brightIcon fa-regular fa-sun";
        darkOrLight.style.color = "orange";

        for (let i = 0; i < verticalMenu.children.length; i++) {
            verticalMenu.children[i].children[0].style.color = "black";
        }
        for (let i = 0; i < hMenu.children.length; i++) {
            hMenu.children[i].style.backgroundColor = "black";
        }
        for (let i = 0; i < precentStudy.children.length; i++) {
            precentStudy.children[i].children[0].style.color = "black";
        }

        footerTop.children[0].children[0].style.color = "black";
        projects.children[0].children[0].style.color = "black";
        formLeft.style.backgroundColor = "rgba(0,0,255, .6)"
        formRight.style.backgroundColor = "rgba(0,0,255, .6)"
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
    } else {
        for (let i = 0; i < precentStudy.children.length; i++) {
            precentStudy.children[i].children[0].style.color = "white";
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
        formLeft.style.backgroundColor = "rgba(0,0,0, .24)"
        formRight.style.backgroundColor = "rgba(0,0,0, .24)"
        document.body.style.backgroundColor = "black";
        style.remove();
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
        textH1: 'SCALE OF 1:2 CONCRETE MODEL',
        textP1: 'The ownership of shooting and editing the videos and pictures on this website is reserved under',
        textP2: 'Copyright © by Alim Bayram',
        precentH1: 'PRECEDENT STUDY OF THE PLANTAHOF AUDITORIUM',
        precentP: 'As part of a group project involving a precedent analysis of an existing building in Landquart, Switzerland, designed by Valerio Olgiati, I was tasked with creating a 1:2 scale physical model of the structure. To achieve this, I utilized Rockite Anchoring Cement, a fast-drying material that allowed me to create a highly accurate and detailed replica of the building. The model was carefully constructed over a period of several hours, with close attention paid to the precise placement and alignment of each element to ensure an accurate representation of the original structure.',
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
        textH1: 'МАСШТАБ БЕТОННОЙ МОДЕЛИ 1:2',
        textP1: 'Право собственности на съемку и редактирование видео и изображений на этом веб-сайте защищено',
        textP2: 'Авторские права © Алим Байрам',
        precentH1: 'ПРЕЦЕДЕНТНОЕ ИССЛЕДОВАНИЕ ЗАЛА ПЛАНТАХОФА',
        precentP: 'В рамках группового проекта, включающего прецедентный анализ существующего здания в Ландкварте, Швейцария, спроектированного Валерио Ольджати, мне было поручено создать физическую модель конструкции в масштабе 1:2. Для этого я использовал анкерный цемент Rockite, быстросохнущий материал, который позволил мне создать очень точную и подробную копию здания. Модель была тщательно построена в течение нескольких часов, при этом пристальное внимание уделялось точному расположению и выравниванию каждого элемента, чтобы обеспечить точное представление исходной конструкции.',
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
        textH1: '1:2 BETON MODEL ÖLÇEKLİ',
        textP1: 'Bu web sitesindeki video ve resimlerin çekilmesi ve düzenlenmesinin mülkiyeti aşağıda saklıdır.',
        textP2: "Telif Hakkı © Alim Bayram'a aittir",
        precentH1: 'PLANTAHOF ODİTORYUMUNUN ÖRNEK ÇALIŞMASI',
        precentP: "Valerio Olgiati tarafından tasarlanan, İsviçre'nin Landquart kentindeki mevcut bir binanın emsal analizini içeren bir grup projesinin parçası olarak, yapının 1:2 ölçekli fiziksel modelini oluşturmakla görevlendirildim. Bunu başarmak için hızlı kuruyan ve binanın son derece doğru ve ayrıntılı bir kopyasını oluşturmamı sağlayan Rockite Ankraj Çimentosu'nu kullandım. Model, orijinal yapının doğru bir şekilde temsil edilmesini sağlamak için her bir öğenin hassas yerleştirilmesine ve hizalanmasına büyük özen gösterilerek, birkaç saatlik bir süre boyunca dikkatli bir şekilde inşa edildi.",
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
        textH1: '1:2 BETON MODELİNİN ÖLÇÜSÜ',
        textP1: 'Bu veb-saytda video və şəkillərin çəkilişi və redaktə edilməsi hüququ qorunur',
        textP2: 'Müəlliflik hüququ © Alim Bayrama məxsusdur',

        precentH1: 'PLANTAHOF AUDİTORİUMUNDA PRESEDENT TƏDQİQAT',
        precentP: 'Valerio Olgiati tərəfindən layihələndirilən İsveçrənin Landquart şəhərində mövcud binanın presedent təhlilini əhatə edən qrup layihəsinin bir hissəsi kimi mənə strukturun 1:2 miqyaslı fiziki modelini yaratmaq tapşırıldı. Buna nail olmaq üçün mən binanın yüksək dəqiq və ətraflı surətini yaratmağa imkan verən tez quruyan material olan Rockite Anchoring Cement-dən istifadə etdim. Model bir neçə saat ərzində diqqətlə qurulmuşdur, orijinal strukturun dəqiq təsvirini təmin etmək üçün hər bir elementin dəqiq yerləşdirilməsi və düzülməsinə ciddi diqqət yetirilmişdir.',
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
const textP1 = document.getElementById('textP_1');
const textP2 = document.getElementById('textP_2');

const precentH1 = document.getElementById('precentH1');
const precentP = document.getElementById('precentP');
const footerTopH1 = document.getElementById('footerTopH1'); //*true
const formLeftH6 = document.getElementById('formLeftH6'); //*true

const submitButton = document.getElementById('submitButton'); //*true
const sendUsAMessageText = document.getElementById('sendUsAMessageText'); //*true
const infoH6_1 = document.getElementById('infoH6_1'); //*true

const infoP = document.getElementById('infoP'); //*true
const infoH6_2 = document.getElementById('infoH6_2'); //*true
const infoH6_3 = document.getElementById('infoH6_3'); //*true

const select = document.getElementsByTagName('select')[0];
const formInputsArr = document.querySelectorAll('.formInputs');
select.addEventListener('change', function () {
    const selectedLang = this.options[this.selectedIndex].value;
    if (selectedLang === "EN") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
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
        textP1.innerText = langObj.en.textP1;
        textP2.innerText = langObj.en.textP2;

        precentH1.innerText = langObj.en.precentH1;
        precentP.innerText = langObj.en.precentP;
        footerTopH1.innerText = langObj.en.footerTopH1;
        formLeftH6.innerText = langObj.en.formLeftH6;

        submitButton.innerText = langObj.en.submitButton;
        sendUsAMessageText.innerText = langObj.en.sendUsAMessageText;
        infoH6_1.innerText = langObj.en.infoH6_1;

        infoP.innerText = langObj.en.infoP;
        infoH6_2.innerText = langObj.en.infoH6_2;
        infoH6_3.innerText = langObj.en.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.en.footerTopH1Before}'`);

    } else if (selectedLang === "RU") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
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
        textP1.innerText = langObj.ru.textP1;
        textP2.innerText = langObj.ru.textP2;

        precentH1.innerText = langObj.ru.precentH1;
        precentP.innerText = langObj.ru.precentP;
        footerTopH1.innerText = langObj.ru.footerTopH1;
        formLeftH6.innerText = langObj.ru.formLeftH6;

        submitButton.innerText = langObj.ru.submitButton;
        sendUsAMessageText.innerText = langObj.ru.sendUsAMessageText;
        infoH6_1.innerText = langObj.ru.infoH6_1;

        infoP.innerText = langObj.ru.infoP;
        infoH6_2.innerText = langObj.ru.infoH6_2;
        infoH6_3.innerText = langObj.ru.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.ru.footerTopH1Before}'`);

    } else if (selectedLang === "TR") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
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
        textP1.innerText = langObj.tr.textP1;
        textP2.innerText = langObj.tr.textP2;

        precentH1.innerText = langObj.tr.precentH1;
        precentP.innerText = langObj.tr.precentP;
        footerTopH1.innerText = langObj.tr.footerTopH1;
        formLeftH6.innerText = langObj.tr.formLeftH6;

        submitButton.innerText = langObj.tr.submitButton;
        sendUsAMessageText.innerText = langObj.tr.sendUsAMessageText;
        infoH6_1.innerText = langObj.tr.infoH6_1;

        infoP.innerText = langObj.tr.infoP;
        infoH6_2.innerText = langObj.tr.infoH6_2;
        infoH6_3.innerText = langObj.tr.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.tr.footerTopH1Before}'`);

    } else if (selectedLang === "AZ") {
        for (let i = 0; i < projectsHTMLs.length; i++) {
            projectsHTMLs[i].addEventListener('mouseenter', function () {
                if (projectsHTMLs[i].children[1].children[0].children.length > 0) {
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
        textP1.innerText = langObj.az.textP1;
        textP2.innerText = langObj.az.textP2;

        precentH1.innerText = langObj.az.precentH1;
        precentP.innerText = langObj.az.precentP;
        footerTopH1.innerText = langObj.az.footerTopH1;
        formLeftH6.innerText = langObj.az.formLeftH6;

        submitButton.innerText = langObj.az.submitButton;
        sendUsAMessageText.innerText = langObj.az.sendUsAMessageText;
        infoH6_1.innerText = langObj.az.infoH6_1;

        infoP.innerText = langObj.az.infoP;
        infoH6_2.innerText = langObj.az.infoH6_2;
        infoH6_3.innerText = langObj.az.infoH6_3;
        footerTopH1.style.setProperty('--footerTopH1', `'${langObj.az.footerTopH1Before}'`);
    }
})
