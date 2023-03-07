import alig from '../images/tiles/alligator.png';// todo настроить webpack на загрузку png через js

const toLeftBtn = document.querySelector('[data-directon="to_left"]');
const toRightBtn = document.querySelector('[data-directon="to_right"]');
const sliderContainer = document.querySelector('.slider__container');

const animals = [
    {
        id: '0a', src: 'assets/img/pandas.png', name: 'giant Pandas', location: 'Native to Southwest China', icon: 'assets/img/banana-bamboo_icon.svg',
    },
    {
        id: '1a', src: alig, name: 'Alligators', location: 'Native to Southeastern U. S.', icon: 'assets/img/meet-fish_icon.svg',
    },
    {
        id: '2a', src: 'assets/img/cheetos.png', name: 'cheetahs', location: 'Native to Africa', icon: 'assets/img/meet-fish_icon.svg',
    },
    {
        id: '3a', src: 'assets/img/eagle.png', name: 'Eagles', location: 'Native to South America', icon: 'assets/img/meet-fish_icon.svg',
    },
    {
        id: '4a', src: 'assets/img/gorrila.png', name: 'Gorillas', location: 'Native to Congo', icon: 'assets/img/banana-bamboo_icon.svg',
    },
    {
        id: '5a', src: 'assets/img/pinguine.png', name: 'Penguins', location: 'Native to Antarctica', icon: 'assets/img/meet-fish_icon.svg',
    },
    {
        id: '6a', src: 'assets/img/sloth.png', name: 'Two-toed Sloth', location: 'Mesoamerica, South America', icon: 'assets/img/banana-bamboo_icon.svg',
    },

];
function createTile(animal) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data-unic', animal.id);
    tile.insertAdjacentHTML('afterbegin', `<div class="tile__wrapper"><div class="hiden_text"><h5 class="animal_name">${animal.name}</h5><p class="animal_location">${animal.location}</p></div><div class="tile__wrapper_bg_white"><img class="tile_img" src="${animal.src}" alt="animal"><div class="tile__title"><div class="tile__title_text"><h5 class="animal_name">${animal.name}</h5><p class="animal_location">${animal.location}</p></div><img class="tile__title_icon" src="${animal.icon}" /></div></div></div>`);
    return tile;
}
function unicCheck(checkedElem, baseCollection) {
    const idTile = checkedElem.dataset.unic;
    const baseCards = baseCollection.querySelectorAll('.tile');
    const elementsArr = [];

    Array.from(baseCards).map((el) => elementsArr.push(el.dataset.unic));
    if (elementsArr.includes(idTile)) {
        return false;
    }

    return true;
}
function generationUnicRandom(length) {
    return Math.floor(Math.random() * length);// 7 элементов слайдера
}
function createNewSlider(maxLength) {
    const newSlider = document.createElement('div');
    newSlider.classList.add('slider__tiles');

    while (newSlider.querySelectorAll('.tile').length < maxLength) {
        // Берем элемент из массива animals случайным образом
        const newTile = createTile(animals[generationUnicRandom(animals.length)]);

        if (unicCheck(newTile, newSlider)) {
            newSlider.append(newTile);
        }
    }
    return newSlider;
}
function removeExcessTiles() {
    const widthScreen = document.documentElement.clientWidth;
    const tiles = document.querySelectorAll('.tile');
    if (widthScreen < 1000 && tiles.length > 4) {
        tiles[0].remove();
        tiles[1].remove();
    } else if (widthScreen >= 1000 && tiles.length < 5) {
        document.querySelector('.slider__tiles')?.remove();
        document.querySelector('.slider__container')?.append(createNewSlider(6));
    }
}

function addNewSliderToPage(classForNewSlider, classForDirection) {
    const tiles = document.querySelectorAll('.tile');
    const oldSlider = document.querySelector('.slider__tiles');
    const newSlider = createNewSlider(tiles.length);
    newSlider.classList.add(classForNewSlider, classForDirection);
    oldSlider.classList.add(classForDirection);
    toLeftBtn.disabled = true;
    toRightBtn.disabled = true;

    oldSlider.addEventListener('animationend', () => {
        toLeftBtn.disabled = false;
        toRightBtn.disabled = false;
        newSlider.classList.remove(classForNewSlider, classForDirection);
        oldSlider.remove();
    });

    sliderContainer.append(newSlider);// добавляем новый слайдер
}
function debounce(f, ms) {
    // функция-обертка по выключению переданной ф-ии если не прошёл промежуток времени
    let isCooldown = false;
    return function () {
        if (isCooldown) { return; }

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => { isCooldown = false; }, ms);
    };
}
const slideWithDelay = debounce(addNewSliderToPage, 1000);
removeExcessTiles();
toLeftBtn?.addEventListener('click', () => { addNewSliderToPage('nextRightSlider', 'toRight'); });
toRightBtn?.addEventListener('click', () => { addNewSliderToPage('nextLeftSlider', 'toLeft'); });
window.addEventListener('resize', () => { removeExcessTiles(); });

let touchstart;// начало касания скрина
let touchend;// конец касания скрина

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', (e) => {
        touchstart = e.changedTouches;
    });
    sliderContainer.addEventListener('touchend', (e) => {
        touchend = e.changedTouches;
        const heightShift = touchend[0].screenY - touchstart[0].screenY;
        const widthShift = touchend[0].screenX - touchstart[0].screenX;

        if ((widthShift < 0 && widthShift > -320) && (heightShift < 80 && heightShift > -80)) {
            // slideWithDelay(addNewSliderToPage('nextLeftSlider', 'toLeft'), 1000);
            slideWithDelay('nextLeftSlider', 'toLeft');
        } else if ((widthShift > 0 && widthShift < 320)
            && (heightShift < 80 && heightShift > -80)) {
            // slideWithDelay(addNewSliderToPage('nextRightSlider', 'toRight'), 1000);
            slideWithDelay('nextRightSlider', 'toRight');
        }
    });
}
