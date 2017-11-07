import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default (model, key='') => {
	let errors = ''


	if (!Validator.isEmail(model.email)){
		errors = 'Неверный адрес'

	}
	if (isEmpty(model.password)){
		errors = 'Bведите пароль'
	}
	if (key === 'reg') {
		if (isEmpty(model.repassword)){
			errors = 'повторите пароль'
		}
		if (model.password !== model.repassword){
			errors = 'Пароли не совпадают'
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}