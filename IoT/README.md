# Running IoT Code on SSH: 🚀

**Step 1:** Run the image capture script so in terminal run the following commands:

```bash
GOOGLE_APPLICATION_CREDENTIALS="/var/www/html/app/gcp-key.json" node image-capture.js
```

**Step 2:**

- Navigate to the `html/server` directory.
- Start the server using npm start.

Nodemon will automatically monitor and run the index.js file.

**Step 3:**

To access the admin panel:

1. Open the index.html file located in the html folder.
2. Go live with the page.

Your Admin panel is now ready to use! ✨

> Remember to restart nodemon with rs whenever the license_number.txt is updated.

Explore the full list of commands 👉 [here](../IoT/commands)
