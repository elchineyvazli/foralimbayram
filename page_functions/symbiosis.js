//! OTHERS
const style = document.createElement("style");
const verticalMenu = document.getElementById('verticalMenu');
const darkOrLight = document.getElementsByClassName('fa-moon')[0];
const hMenu = document.getElementById('hMenu');
let navbarChoise = false;
let isDark = true;
//? dark or light
// console.log(footerTop.children[0]);
darkOrLight.addEventListener('click', function () {
    const footerTop = document.getElementById('footerTop');
    const formLeft = document.getElementById('formLeft');
    const formRight = document.getElementById('formRight');
    const symbiosisTexts = document.getElementsByClassName('symbiosisText');
    const imageContainers = document.getElementsByClassName('imageContainer');

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

        for (let i = 0; i < symbiosisTexts.length; i++) {
            for (let j = 0; j < symbiosisTexts[i].children.length; j++) {
                symbiosisTexts[i].children[j].style.color = "black";
            }
        }
        formLeft.style.backgroundColor = "rgba(0,0,255, .6)"
        formRight.style.backgroundColor = "rgba(0,0,255, .6)"

        document.body.style.backgroundColor = "white"
        document.head.appendChild(style);
        style.innerHTML = `
            .formInputs{
                border-bottom: solid 2px white;
                &::placeholder{
                    color:white;
                }
            }`
    } else {

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
        for (let i = 0; i < imageContainers.length; i++) {
            imageContainers[i].style.border = "solid 2px white";
        }
        for (let i = 0; i < symbiosisTexts.length; i++) {
            for (let j = 0; j < symbiosisTexts[i].children.length; j++) {
                symbiosisTexts[i].children[j].style.color = "white";
            }
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
        textH1: 'SITE AT MATTHEWS ARENA PARKING MODEL',
        textP1: 'The ownership of shooting and editing the videos and pictures on this website is reserved under',
        textP2: 'Copyright © by Alim Bayram',
        symbiosisH1_1: 'SYMBIOSIS WITH THE SITE',
        symbiosisP_1: 'The Site Model Project was a collaborative effort by the Studio 04 class led by James Allen. The project, PROJECT 03: SYMBIOSIS WITH THE SITE - Part 02 & 03. Through  the project, with group mates, we gained practical experience while learning about the symbiotic relationship between architecture and the site.',
        symbiosisH1_2: "BLUMENTHAL FAMILY LIBRARY",
        symbiosisP_2: "This building was also under my responsibility, and the works completed for this project were executed with the same precision and attention to detail as the building shown in the image above.",
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
        textH1: 'ПЛОЩАДКА НА ПАРКОВКЕ «МЭТЬЮС АРЕНА»',
        textP1: 'Право собственности на съемку и редактирование видео и изображений на этом веб-сайте защищено',
        textP2: 'Авторские права © Алим Байрам',
        symbiosisH1_1: 'СИМБИОЗ С САЙТОМ',
        symbiosisP_1: 'Проект модели сайта был совместной работой класса Studio 04 под руководством Джеймса Аллена. Проект ПРОЕКТ 03: СИМБИОЗ С ПЛОЩАДКОЙ - Части 02 и 03. В рамках проекта вместе с товарищами по группе мы получили практический опыт, изучая симбиотические отношения между архитектурой и местом.',
        symbiosisP_2: "Это здание также находилось под моей ответственностью, и работы, выполненные по этому проекту, были выполнены с той же точностью и вниманием к деталям, что и здание, показанное на изображении выше.",
        symbiosisH1_2: "СЕМЕЙНАЯ БИБЛИОТЕКА БЛЮМЕНТАЛЯ",
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
        textH1: 'MATTHEWS ARENA PARKI SİTESİNDE',
        textP1: 'Bu web sitesindeki video ve resimlerin çekilmesi ve düzenlenmesinin mülkiyeti aşağıda saklıdır.',
        textP2: "Telif Hakkı © Alim Bayram'a aittir",
        symbiosisH1_1: 'SİTE İLE SEMBYOZ',
        symbiosisP_1: "Site Modeli Projesi, James Allen liderliğindeki Studio 04 sınıfının ortak bir çalışmasıydı. Proje, PROJE 03: ALAN İLE SİMBİYOZ - Bölüm 02 & 03. Proje aracılığıyla grup arkadaşlarıyla birlikte mimari ve alan arasındaki simbiyotik ilişkiyi öğrenirken pratik deneyim kazandık.",
        symbiosisP_2: "Bu bina da benim sorumluluğumdaydı ve bu proje için tamamlanan işler, yukarıdaki resimde gösterilen bina ile aynı hassasiyet ve detaylara dikkat edilerek yürütüldü.",
        symbiosisH1_2: "BLUMENTHAL AİLE KÜTÜPHANESİ",
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
        textH1: 'MATTEWS ARENA PARKINDA SAYT',
        textP1: 'Bu veb-saytda video və şəkillərin çəkilişi və redaktə edilməsi hüququ qorunur',
        textP2: 'Müəlliflik hüququ © Alim Bayrama məxsusdur',

        symbiosisH1_1: 'SAYT İLƏ SİMBİOZ',
        symbiosisP_1: 'Sayt Modeli Layihəsi James Allen-in rəhbərlik etdiyi Studio 04 sinfinin birgə səyi idi. Layihə, LAYİHƏ 03: SAYT İLƏ SİMBIOSİS - Part 02 və 03. Layihə vasitəsilə qrup yoldaşları ilə biz memarlıq və sayt arasında simbiotik əlaqəni öyrənərkən praktiki təcrübə qazandıq.',
        symbiosisP_2: "Bu bina da mənim məsuliyyətim altında idi və bu layihə üçün tamamlanan işlər yuxarıdakı şəkildə göstərilən bina kimi dəqiqliklə və təfərrüata diqqət yetirilərək yerinə yetirildi.",
        symbiosisH1_2: "BLUMENTAL AİLƏ KİTABXANASI",
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
const textP1 = document.getElementById('textP1');
const textP2 = document.getElementById('textP2');

const symbiosisH1_1 = document.getElementById('symbiosisH1_1');
const symbiosisH1_2 = document.getElementById('symbiosisH1_2');
const symbiosisP_1 = document.getElementById('symbiosisP_1');
const symbiosisP_2 = document.getElementById('symbiosisP_2');
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

        symbiosisH1_1.innerText = langObj.en.symbiosisH1_1;
        symbiosisH1_2.innerText = langObj.en.symbiosisH1_2;
        symbiosisP_1.innerText = langObj.en.symbiosisP_1;
        symbiosisP_2.innerText = langObj.en.symbiosisP_2;

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

        symbiosisH1_1.innerText = langObj.ru.symbiosisH1_1;
        symbiosisH1_2.innerText = langObj.ru.symbiosisH1_2;
        symbiosisP_1.innerText = langObj.ru.symbiosisP_1;
        symbiosisP_2.innerText = langObj.ru.symbiosisP_2;

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

        symbiosisH1_1.innerText = langObj.tr.symbiosisH1_1;
        symbiosisH1_2.innerText = langObj.tr.symbiosisH1_2;
        symbiosisP_1.innerText = langObj.tr.symbiosisP_1;
        symbiosisP_2.innerText = langObj.tr.symbiosisP_2;

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

        symbiosisH1_1.innerText = langObj.az.symbiosisH1_1;
        symbiosisH1_2.innerText = langObj.az.symbiosisH1_2;
        symbiosisP_1.innerText = langObj.az.symbiosisP_1;
        symbiosisP_2.innerText = langObj.az.symbiosisP_2;

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
