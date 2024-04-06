# Simple Email Tracking API

This is a simple email tracking API built using Cloudflare Worker. It returns all the necessary data required for tracking emails and utilizes a database to store the data.

## Usage

Send a GET request to the following endpoint:

http://127.0.0.1:8787/api?id=<Your_ID>&title=<Email_Title>&email=<Recipient_Email>


Replace `<Your_ID>`, `<Email_Title>`, and `<Recipient_Email>` with appropriate values.

### Parameters

- `id`: A unique identifier for the email tracking.
- `title`: The title of the email.
- `email`: The email address of the recipient.

## Example

http://127.0.0.1:8787/api?id=By41Laxoto&title=Update%20about%20our%20product&email=support@example.com

## Data Returned

Upon successful tracking, the API returns the following data:

- `ID`: Unique identifier for the tracked email.
- `Title`: Title of the email.
- `Email`: Email address of the recipient.

## Note

The API automatically tracks the sending time of the email using the local timezone. You only need to provide random values for `id`, `title`, and `email` parameters.
