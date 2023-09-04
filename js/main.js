const burgerIcon = document.querySelector('.burger-button')
const nav = document.querySelector('.list')
const barTwo = document.querySelector('.bar-two')
const barThree = document.querySelector('.bar-three')

const dropdownBtns = document.querySelectorAll('.dropdown-btn')
const arrowDowns = document.querySelectorAll('.arrow-down')
const arrowUps = document.querySelectorAll('.arrow-up')
const hideArrows = document.querySelectorAll('.hide-arrow')
const showArrows = document.querySelectorAll('.show-arrow')
const dropdowns = document.querySelectorAll('.dropdown')
const slideIn = document.querySelectorAll('.slide-in')
const slideOut = document.querySelectorAll('.slide-out')

const showNav = () => {
	nav.classList.toggle('active')
	dropdowns.forEach(dropdown => {
		dropdown.classList.remove('show-dropdown')
	})
	arrowUps.forEach(arrowUp => {
		arrowUp.classList.add('hide-arrow')
	})
	arrowDowns.forEach(arrowDown => {
		arrowDown.classList.remove('hide-arrow')
	})
	dropdowns.forEach(dropDown => {
		dropDown.classList.remove('slide-in')
	})
	dropdowns.forEach(dropDown => {
		dropDown.classList.remove('slide-out')
	})
	dropdownStates.fill(false)
}

const toggleMenu = () => {
	barTwo.classList.toggle('bar-two-change')
	barThree.classList.toggle('bar-three-change')
}

const dropdownStates = Array.from({ length: dropdownBtns.length }, () => false)

const showDropDown = index => {
	const dropdown = dropdowns[index]
	const arrowDown = arrowDowns[index]
	const arrowUp = arrowUps[index]

	dropdownStates[index] = !dropdownStates[index]
	dropdown.classList.toggle('show-dropdown', dropdownStates[index])
	arrowDown.classList.toggle('hide-arrow', dropdownStates[index])
	arrowUp.classList.toggle('show-arrow', dropdownStates[index])
	arrowDown.classList.toggle('show-arrow', !dropdownStates[index])
	arrowUp.classList.toggle('hide-arrow', !dropdownStates[index])
	dropdown.classList.toggle('slide-in', dropdownStates[index])
	dropdown.classList.toggle('dropdown', dropdownStates[index])
	dropdown.classList.toggle('white', !dropdownStates[index])
	dropdown.classList.toggle('slide-out', !dropdownStates[index])

	setTimeout(() => {
		dropdown.classList.toggle('hide-dropdown', !dropdownStates[index])
	}, 400)
}

dropdownBtns.forEach((dropdownBtn, index) => {
	dropdownBtn.addEventListener('click', () => {
		showDropDown(index)
	})
})

burgerIcon.addEventListener('click', showNav)

const slides = document.querySelectorAll('.slides .slide')
let currentSlide = 0
// let slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
	slides[currentSlide].classList.remove('showing')
	currentSlide = (currentSlide + 1) % slides.length
	slides[currentSlide].classList.add('showing')
}

function prevSlide() {
	slides[currentSlide].classList.remove('showing')
	currentSlide = (currentSlide - 1 + slides.length) % slides.length
	slides[currentSlide].classList.add('showing')
}

document.addEventListener('DOMContentLoaded', function () {
	var card = document.querySelector('.card')
	var cardText = document.querySelector('.card-text2')

	card.addEventListener('mouseenter', function () {
		cardText.classList.add('show-animation')
		cardText.classList.remove('hide-animation')
	})

	card.addEventListener('mouseleave', function () {
		cardText.classList.add('hide-animation')
		cardText.classList.remove('show-animation')
	})
})

//hide animation

const cards = [...document.querySelectorAll('.card')]
const cardTexts = [...document.querySelectorAll('.card-text2')]
cards.forEach(
	(card, index) => {
		card.addEventListener('mouseenter', () => {
			cardTexts[index].classList.add('hide-icon')
		})
	},
	{ once: true }
)

//menu-select

const coffee = document.querySelector('.coffee-button')
const tea = document.querySelector('.tea-button')
const cake = document.querySelector('.cake-button')
const cupCake = document.querySelector('.cupcake-button')

const menuCoffee = document.querySelector('.menu-coffee')
const menuHotDrinks = document.querySelector('.menu-hot-drinks')
const menuCake = document.querySelector('.menu-cake')
const menuCupCake = document.querySelector('.menu-cupcake')

const changeToCoffee = () => {
	menuCoffee.classList.add('menu-show')
	menuCake.classList.remove('menu-show')
	menuHotDrinks.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	coffee.style.backgroundColor = '#573517'
	tea.style.backgroundColor = '#cfa47e'
	cake.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToTea = () => {
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.add('menu-show')
	menuCake.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	tea.style.backgroundColor = '#573517'
	coffee.style.backgroundColor = '#cfa47e'
	cake.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToCake = () => {
	menuCake.classList.add('menu-show')
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	cake.style.backgroundColor = '#573517'
	coffee.style.backgroundColor = '#cfa47e'
	tea.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToCupCake = () => {
	menuCupCake.classList.add('menu-show')
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.remove('menu-show')
	menuCake.classList.remove('menu-show')
	cupCake.style.backgroundColor = '#573517'
	cake.style.backgroundColor = '#cfa47e'
	coffee.style.backgroundColor = '#cfa47e'
	tea.style.backgroundColor = '#cfa47e'
}

tea.addEventListener('click', changeToTea)
coffee.addEventListener('click', changeToCoffee)
cake.addEventListener('click', changeToCake)
cupCake.addEventListener('click', changeToCupCake)

//resevation

const phone = document.querySelector('#phone')
const username = document.querySelector('#name')
const email = document.querySelector('#email')

const sendBtn = document.querySelector('.send-btn')
const clearBtn = document.querySelector('.clear-btn')

const def = document.querySelector('#def')
const yourClass = document.querySelector('.red-placeholder')

const checkForm = (input) => {
	input.forEach(el => {
		if (el.value === '') {
			el.classList.add('red-placeholder')
		}
	})
}

sendBtn.addEventListener('click', e => {
	e.preventDefault() //not refresh website
	checkForm([phone, username, email])
})

clearBtn.addEventListener('click', e => {
	e.preventDefault() //not refresh website
	;[phone, username, email].forEach(el => {
		el.value = ''
	})
})
