const questionOne = document.getElementById("question_1");
const questionTwo = document.getElementById("question_2");
const questionThree = document.getElementById("question_3");
const questionFour = document.getElementById("question_4");
const questionFive = document.getElementById("question_5");

const answerOne = document.getElementById("answer_panel_1");
const answerTwo = document.getElementById("answer_panel_2");
const answerThree = document.getElementById("answer_panel_3");
const answerFour = document.getElementById("answer_panel_4");
const answerFive = document.getElementById("answer_panel_5");

questionOne.addEventListener('click', () => {
    const visibility = questionOne.getAttribute('aria-expanded')

    if (visibility === "false") {
        questionOne.setAttribute('aria-expanded', "true")
        answerOne.setAttribute('data-visible', "true")
    } else {
        questionOne.setAttribute('aria-expanded', "false")
        answerOne.setAttribute('data-visible', "false")
    }
})

questionTwo.addEventListener('click', () => {
    const visibility = questionTwo.getAttribute('aria-expanded')

    if (visibility === "false") {
        questionTwo.setAttribute('aria-expanded', "true")
        answerTwo.setAttribute('data-visible', "true")
    } else {
        questionTwo.setAttribute('aria-expanded', "false")
        answerTwo.setAttribute('data-visible', "false")
    }
})

questionThree.addEventListener('click', () => {
    const visibility = questionThree.getAttribute('aria-expanded')

    if (visibility === "false") {
        questionThree.setAttribute('aria-expanded', "true")
        answerThree.setAttribute('data-visible', "true")
    } else {
        questionThree.setAttribute('aria-expanded', "false")
        answerThree.setAttribute('data-visible', "false")
    }
})

questionFour.addEventListener('click', () => {
    const visibility = questionFour.getAttribute('aria-expanded')

    if (visibility === "false") {
        questionFour.setAttribute('aria-expanded', "true")
        answerFour.setAttribute('data-visible', "true")
    } else {
        questionFour.setAttribute('aria-expanded', "false")
        answerFour.setAttribute('data-visible', "false")
    }
})

questionFive.addEventListener('click', () => {
    const visibility = questionFive.getAttribute('aria-expanded')

    if (visibility === "false") {
        questionFive.setAttribute('aria-expanded', "true")
        answerFive.setAttribute('data-visible', "true")
    } else {
        questionFive.setAttribute('aria-expanded', "false")
        answerFive.setAttribute('data-visible', "false")
    }
})