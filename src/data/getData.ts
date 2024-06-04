//#1 import the category and difficulty variables

import { Questions } from '../types';

//make a GET request to the API to retrieve data ( 10 questions filtered for Category and Difficulty)
export async function getData(category: string, difficulty: string) {
	try {
		const response = await fetch(
			`http://localhost:3000/filter/${category}/${difficulty}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application.json',
					'Content-Type': 'application/json',
				},
			}
		);

		const data = await response.json();
		console.log(`This is coming from the getData function${data}`);
		return data;
	} catch (error) {
		console.log(error);
	}
}

//#2 create a transfrom data function so you have as output and objecg with -> []questions, [][]answers, correctAnswer.
export function transformData(data: Questions) {
	const transformedData = data.map((item) => ({
		question: item.question,
		options: item.options,
	}));
	console.log(`Here is the output from transformData fn ${transformedData}`);
	return transformedData;
}
