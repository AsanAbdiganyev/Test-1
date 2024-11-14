//1
const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345678"))
console.log(containsOnlyDigits("i234567p"))



//2
// const EverySecond = () => {
//     setInterval(() => {
//         console.log("прошла секунда");
//     }, 1000);
// }
// EverySecond();


//3
const count = () => {
    let i = 1
    const interval = setInterval(() => {
        console.log(i)
        if (i === 10) {
            clearInterval(interval)
        }
        i++
    }, 1000)
}

count()



//4
const colorBox = document.getElementById("colorBox")

colorBox.addEventListener("click", () => {
    colorBox.classList.toggle("active")
})



//5
const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json", true);

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4&&xhr.status ===200 ) {

    }
}

xhr.send();


