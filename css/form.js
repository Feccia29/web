function enableSubmit(){
    let inputs = document.getElementsByClassName("required")
    let btn = document.querySelector('input[type="submit"]')
    let isValid = true
    for (let i =0; i < inputs.length; i++){
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null ){
            isValid = false;
            break;
        }
    }
    btn.disabled = !isValid;
}

function validateForm() {
  const osRadios = document.getElementsByName("Операционная система");
  const deviceCheckboxes = document.getElementsByName("Устройство");
  
  let osSelected = false;
  let deviceSelected = false;
  
  // Проверяем, выбрана ли операционная система
  for (let i = 0; i < osRadios.length; i++) {
    if (osRadios[i].checked) {
      osSelected = true;
      break;
    }
  }
  
  // Проверяем, выбраны ли типы устройств
  for (let i = 0; i < deviceCheckboxes.length; i++) {
    if (deviceCheckboxes[i].checked) {
      deviceSelected = true;
      break;
    }
  }
  
  // Если операционная система и типы устройств выбраны, форма валидна
  if (osSelected && deviceSelected) {
    document.querySelector('input[type="submit"]').disabled = false;
  } else {
    document.querySelector('input[type="submit"]').disabled = true;
  }
}