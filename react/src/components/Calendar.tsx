import React, { useEffect } from 'react';
import { google } from 'googleapis';

const GoogleCalendarComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      // Load the credentials from the environment or your secure storage
      const credentials = {
        // Your credentials here
        client_id: "493869205289-084nogbgd8dthlqjrt1umf56fbco51i5.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uris: undefined
      };

      // Create an OAuth2 client
      const oAuth2Client = new google.auth.OAuth2(
          credentials.client_id,
          credentials.client_secret,
          credentials.redirect_uris[0]
      );

      // Set the credentials
      oAuth2Client.setCredentials(credentials.token);

      // Create a Google Calendar API client
      const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

      // Fetch upcoming events
      try {
        const response = await calendar.events.list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        });

        const events = response.data.items;
        console.log('Upcoming events:', events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        <h1>Google Calendar Example</h1>
        {/* Render your calendar events or other components here */}
      </div>
  );
};

export default GoogleCalendarComponent;
