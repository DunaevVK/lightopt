'use strict';

/**
 * Email address verification
 *
 * @param {string} email - The email, that needs to validating.
 */
window.validateEmail = (email) => {
    // Regular expression for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Phone number verification
 *
 * @param {string} phone - The phone, that needs to validating.
 */
window.validatePhone = (phone) => {
    // Regular expression for phone
    const phoneRegex = /^7\d{10}$/
    return phoneRegex.test(phone)
}

const showSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('display')
    setTimeout(() => spinner.classList.add('visible'), 100)
}

const hideSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.remove('visible')
    setTimeout(() => spinner.classList.remove('display'), 1000)
}

window.addEventListener('load', () => {
    if (document.getElementById('spinner')) {
        window.spinner.show = showSpinner
        window.spinner.hide = hideSpinner
    }
})
const initFooterScripts = () => {
    console.log('Здесь можно добавить JS для футера');
}

window.addEventListener('load', () => {

    // Добавляем сюда все скрипты для футера

    initFooterScripts()
})
const initHeaderScripts = () => {
    console.log('Здесь можно добавить JS для хедера');
}

window.addEventListener('load', () => {

    // Добавляем сюда все скрипты для хедера

    initHeaderScripts()
})
const someJsScriptShouldWorkOnEveryPageOfTheLayout = () => {
    console.log('В этом файле можно добавлять скрипты которые должны работать на каждой странице сайта');
}

window.addEventListener('load', () => {
    someJsScriptShouldWorkOnEveryPageOfTheLayout()
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlRW1haWwuanMiLCJ2YWxpZGF0ZVBob25lLmpzIiwic3Bpbm5lci9zY3JpcHQuanMiLCJmb290ZXIvc2NyaXB0LmpzIiwiaGVhZGVyL3NjcmlwdC5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRW1haWwgYWRkcmVzcyB2ZXJpZmljYXRpb25cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIC0gVGhlIGVtYWlsLCB0aGF0IG5lZWRzIHRvIHZhbGlkYXRpbmcuXHJcbiAqL1xyXG53aW5kb3cudmFsaWRhdGVFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBlbWFpbFxyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvXHJcbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKVxyXG59XHJcbiIsIi8qKlxyXG4gKiBQaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZSAtIFRoZSBwaG9uZSwgdGhhdCBuZWVkcyB0byB2YWxpZGF0aW5nLlxyXG4gKi9cclxud2luZG93LnZhbGlkYXRlUGhvbmUgPSAocGhvbmUpID0+IHtcclxuICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgcGhvbmVcclxuICAgIGNvbnN0IHBob25lUmVnZXggPSAvXjdcXGR7MTB9JC9cclxuICAgIHJldHVybiBwaG9uZVJlZ2V4LnRlc3QocGhvbmUpXHJcbn1cclxuIiwiY29uc3Qgc2hvd1NwaW5uZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKVxyXG4gICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5JylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyksIDEwMClcclxufVxyXG5cclxuY29uc3QgaGlkZVNwaW5uZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKVxyXG4gICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5JyksIDEwMDApXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJykpIHtcclxuICAgICAgICB3aW5kb3cuc3Bpbm5lci5zaG93ID0gc2hvd1NwaW5uZXJcclxuICAgICAgICB3aW5kb3cuc3Bpbm5lci5oaWRlID0gaGlkZVNwaW5uZXJcclxuICAgIH1cclxufSkiLCJjb25zdCBpbml0Rm9vdGVyU2NyaXB0cyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfQl9C00LXRgdGMINC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCBKUyDQtNC70Y8g0YTRg9GC0LXRgNCwJyk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cclxuICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdGO0LTQsCDQstGB0LUg0YHQutGA0LjQv9GC0Ysg0LTQu9GPINGE0YPRgtC10YDQsFxyXG5cclxuICAgIGluaXRGb290ZXJTY3JpcHRzKClcclxufSkiLCJjb25zdCBpbml0SGVhZGVyU2NyaXB0cyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfQl9C00LXRgdGMINC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCBKUyDQtNC70Y8g0YXQtdC00LXRgNCwJyk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cclxuICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdGO0LTQsCDQstGB0LUg0YHQutGA0LjQv9GC0Ysg0LTQu9GPINGF0LXQtNC10YDQsFxyXG5cclxuICAgIGluaXRIZWFkZXJTY3JpcHRzKClcclxufSkiLCJjb25zdCBzb21lSnNTY3JpcHRTaG91bGRXb3JrT25FdmVyeVBhZ2VPZlRoZUxheW91dCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfQkiDRjdGC0L7QvCDRhNCw0LnQu9C1INC80L7QttC90L4g0LTQvtCx0LDQstC70Y/RgtGMINGB0LrRgNC40L/RgtGLINC60L7RgtC+0YDRi9C1INC00L7Qu9C20L3RiyDRgNCw0LHQvtGC0LDRgtGMINC90LAg0LrQsNC20LTQvtC5INGB0YLRgNCw0L3QuNGG0LUg0YHQsNC50YLQsCcpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIHNvbWVKc1NjcmlwdFNob3VsZFdvcmtPbkV2ZXJ5UGFnZU9mVGhlTGF5b3V0KClcclxufSkiXX0=
