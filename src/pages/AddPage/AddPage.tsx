import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ICity } from "../../models/ICity";

interface FormValues {
	title: string;
	image: string;
	description: string;
}

interface AddPageProps {
	setCities: React.Dispatch<React.SetStateAction<ICity[]>>;
	cities: ICity[];
}

const AddPage: React.FC<AddPageProps> = ({ setCities, cities }) => {
	const navigate = useNavigate();

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("You must enter a title.").min(2, "You must at least use 2 characters."),
		image: Yup.string().required("You must enter an image URL."),
		description: Yup.string().required("You must enter a description."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: FormValues) => {
		const newCity: ICity = {
			cityName: data.title,
			summary: data.description,
			image: data.image,
			id: cities.length + 1,
		};

		setCities([...cities, newCity]);
		navigate("/");
	};

	const redirectToHome = () => {
		navigate("/");
	};

	return (
		<div className="sign-up-form-container">
			<div className="sign-up-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label htmlFor="title">Title:</label>
						{errors.title && <p className="error">{errors.title.message}</p>}
						<input
							id="title"
							type="text"
							{...register("title")}
							className={errors.title ? "error" : ""}
							placeholder="title"
						/>
					</div>

					<div>
						<label htmlFor="image">Image:</label>
						{errors.image && <p className="error">{errors.image.message}</p>}
						<input
							id="image"
							type="text"
							{...register("image")}
							className={errors.image ? "error" : ""}
							placeholder="image"
						/>
					</div>

					<div>
						<label htmlFor="description">Description:</label>
						{errors.description && <p className="error">{errors.description.message}</p>}
						<input
							id="description"
							type="text"
							{...register("description")}
							className={errors.description ? "error" : ""}
							placeholder="description"
						/>
					</div>
					<div className="button-wrapper">
						<button type="button" className="btn btn-cancel" onClick={() => redirectToHome()}>
							Cancel
						</button>

						<button type="submit" className="btn btn-success">
							Add City
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddPage;