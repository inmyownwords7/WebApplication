import axios from 'axios';
//<iframe src="https://calendar.google.com/calendar/embed?src=614a2ea34661d92adb1dc733ae64446cd0efa9bc162ed47d366644be3f6ad023%40group.calendar.google.com&ctz=America%2FToronto" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> 
const calendarId = '614a2ea34661d92adb1dc733ae64446cd0efa9bc162ed47d366644be3f6ad023@group.calendar.google.com'; // Replace with your actual calendar ID
const apiUrl = `https://apidata.googleusercontent.com/caldav/v2/calendars/${calendarId}/user`;

const accessToken = 'your-access-token'; // Replace with your actual access token

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

const eventData = {
  // Your calendar event data
};

axios.post(apiUrl, eventData, { headers })
  .then(response => {
    console.log('Event created:', response.data);
  })
  .catch(error => {
    console.error('Error creating event:', error.response.data);
  });
