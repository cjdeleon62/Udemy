import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 2c7c1aca87cf73755d3b3ebba238fed73ddbf51175813efe4c19dd082ca4e356',
	},
});
