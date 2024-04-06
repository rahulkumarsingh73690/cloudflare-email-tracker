export default {
	async fetch(request) {
		// Extracting identifier from the URL
		const urlParts = request.url.split('/');

		const identifier = urlParts[urlParts.length - 1];

		// Constructing the geolocation data object
		const geolocationData = {
			colo: request.cf.colo,
			country: request.cf.country,
			city: request.cf.city,
			continent: request.cf.continent,
			latitude: request.cf.latitude,
			longitude: request.cf.longitude,
			postalCode: request.cf.postalCode,
			metroCode: request.cf.metroCode,
			region: request.cf.region,
			regionCode: request.cf.regionCode,
			timezone: request.cf.timezone,
		};

		// Get the current date and time based on the geolocation timezone
		const currentTime = new Date().toLocaleString('en-US', { timeZone: geolocationData.timezone });

		// Extracting title and email from request parameters
		const params = new URL(request.url).searchParams;
		const title = params.get('title') || 'No title provided';
		const email = params.get('email') || 'No email provided';

		// Constructing the API response object
		const apiResponse = {
			geolocation: geolocationData,
			title: title,
			email: email,
			identifier: identifier,
			currentTime: currentTime, // Include current time based on geolocation timezone
		};

		// Responding with the API response
		return new Response(JSON.stringify(apiResponse), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
