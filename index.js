const resultDisplay = document.querySelector("#result-display");

document
  .querySelector("#submit-button")
  .addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const ratingValue =
    document.getElementById("rating-form").elements["radio-group"].value;
  console.log(ratingValue);
  if (ratingValue === "") {
    // todo -- Add better form validation
    alert("please choose something");
  } else {
    resultDisplay.innerHTML = `You selected ${ratingValue} out of 5`;
  }
}
