const invoke = window.__TAURI__.invoke;

const btn = document.querySelector("#btn");
const btnAlert = document.querySelector("#btnAlert");
const btnCity = document.querySelector("#btnCity");
const btnAdd = document.querySelector("#btnAdd");
const btnFail = document.querySelector("#btnFail");

btnAlert.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", () => {
  // alert('hello world')
  console.log("called");
  invoke("my_custom_command");
});

btnCity.addEventListener("click", () => {
  const city = document.querySelector("#city").value;
  invoke("show_my_city", { city });
});

btnAdd.addEventListener("click", () => {
  invoke("add_two_numbers", {
    a: 10,
    b: 30,
  }).then((result) => {
    console.log(result);
    alert("result:" + result);
  });
});

btnFail.addEventListener("click", () => {
  console.log('called')
  invoke('command_could_fail')
    .then(() => console.log('works!'))
    .catch((error) => console.log(error))
})