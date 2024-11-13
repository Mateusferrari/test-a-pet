import { FormFields } from '../types'

const defaultResponse = 'Campo Obrigatório'

export function checkErrors(formFields: FormFields, isEditing?: boolean) {
  const errors = {
    date: getDateResponse(formFields.date),
    hour: getHourResponse(formFields.hour),
    name: formFields.name ? '' : defaultResponse,
    specie: getSelectResponse(formFields.specie.label, formFields.specie.value),
    breed: formFields.breed ? '' : defaultResponse,
    owner: formFields.owner ? '' : defaultResponse,
    birth:  getBirthResponse(formFields.birth),
    tel: getPhoneResponse(formFields.tel),
    vet: getSelectResponse(formFields.vet.label, formFields.vet.value)
  }

  const hasErrors = Object.values(errors).some(error => error)

  return hasErrors ? errors : null
}

function getDateResponse(value: string) {
  if (!value) return defaultResponse;


  const dateValue = new Date(value.concat('T03:00:00.000Z'));

  console.log('Data fornecida:', dateValue);
  console.log('Data atual:', new Date());

  if (isNaN(dateValue.getTime())) {
    return 'Data inválida. Verifique o formato da data.';
  }

  //
  const currentDateWithoutTime = new Date();
  currentDateWithoutTime.setHours(0, 0, 0, 0);


  if (dateValue <= currentDateWithoutTime) {
    return 'A data do agendamento deve ser posterior à atual';
  }

  return '';
}


function getBirthResponse(value: string) {
  if (!value) return defaultResponse;


  const dateValue = new Date(value.concat('T03:00:00.000Z'));

  console.log('Data fornecida:', dateValue);
  console.log('Data atual:', new Date());

  if (isNaN(dateValue.getTime())) {
    return 'Data inválida. Verifique o formato da data.';
  }

  //
  const currentDateWithoutTime = new Date();
  currentDateWithoutTime.setHours(0, 0, 0, 0);


  if (dateValue >= currentDateWithoutTime) {
    return 'A data do nascimento deve ser anterior à atual';
  }

  return '';
}


function getHourResponse(value: string) {

  if (!value) return defaultResponse;


  const hourRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!hourRegex.test(value)) {
    return 'Formato de hora inválido. Use o formato HH:mm.';
  }



  return '';
}

function getPhoneResponse(value: string) {

  if (!value) return defaultResponse;


  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

  if (!phoneRegex.test(value)) {
    return 'Formato de telefone inválido. Use o formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.';
  }

  return '';
}



function getSelectResponse(value: string, id: string) {

  if (!value) {
    return `Por favor, selecione uma opção para o campo ${id}.`;
  }


  if (value === "default") {
    return `Por favor, selecione uma opção válida para o campo ${id}.`;
  }

  return '';
}
