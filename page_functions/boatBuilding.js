//! PROJECTS OF BOAT BUILDING
let projs = document.getElementsByClassName('proj')
let prevprojIndex = ""
let prevprojText = ""
const projectImage = document.createElement('div');
projectImage.id = "projectImage";
for (let i = 0; i < projs.length; i++) {
    projs[i].addEventListener('mouseenter', function () {
        projs[i].style.height = "400px";
        prevprojIndex = i;
        prevprojText = projs[i].children[0].innerText;
        projs[i].children[0].innerText = "";
        projs[i].children[1].style.display = "none";
        projectImage.style.backgroundImage = `url(../assets/boatBuildingImages/projectParts/projectPart${i + 1}.jpg)`
        projs[i].style.justifyContent = "flex-start"
        projs[i].append(projectImage)
        for (let j = 0; j < projs.length; j++) {
            if (i != j) {
                projs[j].style.height = "35px";
                projs[i].children[1].style.display = "flex";
            }
        }
        projs[i].removeChild(projs[i].children[1])
    })
    projs[i].addEventListener('mouseleave', function () {
        projs[prevprojIndex].children[0].innerText = prevprojText;
        projs[prevprojIndex].style.height = "35px";
        const downArrow = document.createElement("i");
        downArrow.classList = "fa-solid fa-angle-down";
        projs[i].appendChild(downArrow);
        projs[i].style.justifyContent = "space-between";
        projs[i].removeChild(projectImage);
    })
}

//! OTHERS
const style = document.createElement("style");
const verticalMenu = document.getElementById('verticalMenu');
const darkOrLight = document.getElementsByClassName('fa-moon')[0];
const hMenu = document.getElementById('hMenu');
let navbarChoise = false;
let isDark = true;
//? dark or light
darkOrLight.addEventListener('click', function () {
    const footerTop = document.getElementById('footerTop');
    const formLeft = document.getElementById('formLeft');
    const formRight = document.getElementById('formRight');
    const boatBuildingText = document.getElementById('boatBuildingText');
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
        for (let i = 0; i < boatBuildingText.children.length; i++) {
            boatBuildingText.children[i].children[0].style.color = "black";
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
        for (let i = 0; i < boatBuildingText.children.length; i++) {
            boatBuildingText.children[i].children[0].style.color = "white";
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
        textH1: 'MARINE VEHICLES CONSTRUCTION BUILDING',
        textP1: 'The ownership of shooting and editing the videos and pictures on this website is reseP2ved under',
        textP2: "Copyright © by Alim Bayram",
        boatBuildingH1: 'THE BOAT BUILDING',
        boatBuildingP: `The Boat Building is a thoughtfully designed two-story structure that successfully
                    complements the
                    environment and seamlessly integrates with its surroundings, offering a space for boat-making
                    education
                    and leisure activities. The ground floor boasts a spacious reception area that provides information
                    on
                    the building, gift shop, restrooms, sewing room, and the director's office. Additionally, the big
                    shed,
                    wood shop, and wood storage areas are located on this floor and are accessible only from the first
                    level. The upper level features a dining area, classrooms, drafting room, and free seating areas,
                    all
                    accessible via an elevator and a circular staircase.`,
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
        ]
    },
    ru: {
        textH1: 'МОРСКИЕ ТРАНСПОРТНЫЕ СРЕДСТВА СТРОИТЕЛЬСТВО ЗДАНИЯ',
        textP1: 'Алим Байрам',
        textP2: "Авторское право © Алим Байрам.",
        boatBuildingH1: 'СТРОИТЕЛЬСТВО ЛОДОК',
        boatBuildingP: `Здание лодок - это продуманная двухэтажная конструкция, которая удачно дополняет Окружающую среду и органично вписывается в нее, предлагая место для изготовления лодок обучения и проведения досуга. На первом этаже находится просторная приемная, где можно получить информацию о сайте На первом этаже находится просторная приемная, где можно получить информацию о здании    сувенирный магазин, туалеты, швейная мастерская и кабинет директора. Кроме того, здесь расположены большой сарай, На этом этаже находятся большой сарай, мастерская и склад древесины, куда можно попасть только с первого уровня. На верхнем уровне находятся столовая, учебные классы, комната для черчения и свободные места для отдыха, все Все они доступны через лифт и круговую лестницу.`,
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
        ]
    },
    tr: {
        textH1: 'DENIZ ARAÇLARI INŞAAT BINASI',
        textP1: 'Bu web sitesindeki video ve resimlerin çekim ve düzenleme mülkiyeti',
        textP2: "Telif Hakkı © Alim Bayram tarafından",
        boatBuildingH1: 'TEKNE YAPIMI',
        boatBuildingP: `Tekne Binası, başarılı bir şekilde tasarlanmış iki katlı bir yapıdır tamamlar ve çevresiyle sorunsuz bir şekilde bütünleşerek tekne yapımı için bir alan sunar EĞİTİM ve boş zaman etkinlikleri. Zemin katta bilgi sağlayan geniş bir resepsiyon alanı bulunmaktadır üzerinde bina, hediyelik eşya dükkânı, tuvaletler, dikiş odası ve müdürün ofisi. Ayrıca, büyük dökün, ahşap atölyesi ve ahşap depolama alanları bu katta yer alır ve sadece birinci kattan erişilebilir. seviye. Üst katta yemek alanı, sınıflar, çizim odası ve serbest oturma alanları bulunmaktadır, hepsi Asansör ve dairesel bir merdivenle erişilebilir.`,
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
        ]
    },
    az: {
        textH1: ' DƏNİZ ALƏTLƏRİ İNŞAAT BİNASI',
        textP1: 'Bu veb-saytda video və şəkillərin çəkilişi və redaktəsinə sahiblik',
        textP2: "Copyright © by Alim Bayram",
        boatBuildingH1: 'QAYIQ İNŞASI',
        boatBuildingP: `Qayıq Binası uğurla dizayn edilmiş iki mərtəbəli bir quruluşdur tamamlayır və qayıq tikintisi üçün bir sahə təmin edərək, ətrafı ilə problemsiz inteqrasiya edir. TƏHSİL və asudə vaxt fəaliyyətləri. Birinci mərtəbədə məlumat verən geniş qəbul sahəsi var. haqqında bina, hədiyyə mağazası, tualetlər, tikiş otağı və direktorun kabineti. Həm də böyük toxunmaq, Taxta emalatxanası və taxta saxlama yerləri bu mərtəbədə yerləşir və onlara yalnız birinci mərtəbədən daxil olmaq olar. səviyyə. Üst mərtəbədə yemək otağı, sinif otaqları, qonaq otağı və pulsuz oturma yerləri var. hamısı Lift və dairəvi pilləkənlə daxil olmaq mümkündür.`,
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
        ]
    }
}

const textH1 = document.getElementById('textH1');
const textP1 = document.getElementById('textP1');
const textP2 = document.getElementById('textP2');

const boatBuildingH1 = document.getElementById('boatBuildingH1');
const boatBuildingP = document.getElementById('boatBuildingP');
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
console.log(select);
select.addEventListener('change', function () {
    const selectedLang = this.options[this.selectedIndex].value;
    if (selectedLang === "EN") {
        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.en.inputPlaceholders[i])
        }
        textH1.innerText = langObj.en.textH1;
        textP1.innerText = langObj.en.textP1;
        textP2.innerText = langObj.en.textP2;

        boatBuildingH1.innerText = langObj.en.boatBuildingH1;
        boatBuildingP.innerText = langObj.en.boatBuildingP;
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
        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.ru.inputPlaceholders[i])
        }
        textH1.innerText = langObj.ru.textH1;
        textP1.innerText = langObj.ru.textP1;
        textP2.innerText = langObj.ru.textP2;

        boatBuildingH1.innerText = langObj.ru.boatBuildingH1;
        boatBuildingP.innerText = langObj.ru.boatBuildingP;
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
        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.tr.inputPlaceholders[i])
        }
        textH1.innerText = langObj.tr.textH1;
        textP1.innerText = langObj.tr.textP1;
        textP2.innerText = langObj.tr.textP2;

        boatBuildingH1.innerText = langObj.tr.boatBuildingH1;
        boatBuildingP.innerText = langObj.tr.boatBuildingP;
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
        for (let i = 0; i < formInputsArr.length; i++) {
            formInputsArr[i].setAttribute('placeholder', langObj.az.inputPlaceholders[i])
        }
        textH1.innerText = langObj.az.textH1;
        textP1.innerText = langObj.az.textP1;
        textP2.innerText = langObj.az.textP2;

        boatBuildingH1.innerText = langObj.az.boatBuildingH1;
        boatBuildingP.innerText = langObj.az.boatBuildingP;
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