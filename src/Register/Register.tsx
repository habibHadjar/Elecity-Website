import './Register.scss'
import { useState } from 'react'

const Register: React.FC = () => {

	interface State {
		firstName: String
		lastName: String
		address: {
			street: String
			zipcode: Number
			city: String
		}
		birthDate: String
		phone: String
		mail: String
		password: String
		role: String
	}

	const [formData, setFormData] = useState<State>({
		firstName: "",
		lastName: "",
		address: {
			street: "",
			zipcode: 0,
			city: "",
		},
		birthDate: "",
		phone: "",
		mail: "",
		password: "",
		role: "",
	})

	const handleChange = (event: any) => {
		const { name, value } = event.target
		setFormData(prev => {
			return {
				...prev,
				[name]: value
			}
		})
		console.log(formData)
	}

	return (
		<div className='Register'>
			<div className="Register-form">
				<div className="Register-form-group">
					<label htmlFor="firstName">Prénom :</label>
					<input
						type="text"
						className='Register-form-input'
						id='firstName'
						name='firstName'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="lastName">Nom :</label>
					<input
						type="text"
						className='Register-form-input'
						id='lastName'
						name='lastName'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="address">Adresse :</label>
					<input
						type="text"
						className='Register-form-input'
						id='address'
						name='address'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="birthDate">Date de naissance :</label>
					<input
						type="text"
						className='Register-form-input'
						id='birthDate'
						name='birthDate'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="phone">Téléphone :</label>
					<input
						type="text"
						className='Register-form-input'
						id='phone'
						name='phone'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="mail">E-mail :</label>
					<input
						type="text"
						className='Register-form-input'
						id='mail'
						name='mail'
						onChange={handleChange}
					/>
				</div>

				<div className="Register-form-group">
					<label htmlFor="password">Mot de passe :</label>
					<input
						type="password"
						className='Register-form-input'
						id='password'
						name='password'
						onChange={handleChange}
					/>
				</div>

				<button
					type='button'
					className='Register-form-button'
				>
					Valider
				</button>
			</div>
		</div>
	)
}
export default Register