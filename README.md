# StaticStorm

## Unleash the power of simple, fast and secure websites.

<hr>

<!--
Visit At <a href="http://staticstorm.repocraft.com" target="_blank">staticstorm.repocraft.com</a>
-->

## 🚀 Getting Started

To run the application locally for development purposes, please follow the instructions below:

- [Development Setup](#development): Deploy the application for local testing and development environment.

For running the application locally for production purposes, refer to the [Production Setup](#production).

### Development

To deploy both the frontend and backend for local, follow these steps:

> [!IMPORTANT]
> We are currently migrating from create-react-app to Nextjs in the frontend, if that's where you want to contribute, please check the following github issue here: [#3](https://github.com/devarshishimpi/staticstorm/issues/3)

#### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- Node.js v16 or above

##### Frontend Setup

1. Clone the project repository:

```bash
git clone https://github.com/devarshishimpi/staticstorm
cd staticstorm
```

2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the frontend development server:

```bash
npm start
```

The frontend should now be running locally, and you can access it in your web browser at `http://localhost:3000`.

##### Backend Setup

1. Navigate to the server directory in a new terminal window:

```bash
cd server
```

2. Install backend dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
node index.js
```

The backend should now be running locally, and you can access it in your web browser at `http://localhost:8181`.

### Production

To deploy both the frontend and backend to proudction, follow these steps:

#### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- Linux Machine (eg: Ubuntu)
- Nodejs v16 or above
- Nginx Server

#### Once you are done with that you may proceed to deploy the application:

1. Clone the project repository:

```bash
git clone https://github.com/devarshishimpi/staticstorm
cd staticstorm
```

2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Build the frontend:

```bash
npm run build
```

5. Copy the frontend files to the server's HTML directory:

```bash
sudo cp -rf build /var/www/html
```

6. Navigate to the server directory:

```bash
cd ../server
```

7. Install backend dependencies:

```bash
npm install
```

8. Copy the backend files to the server's HTML directory:

```bash
sudo cp -rf . /var/www/html
```

9. Edit the Nginx configuration file:

```bash
sudo vim /etc/nginx/sites-available/default
```

10. Update the Nginx configuration to include both frontend and backend as separate locations:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html/build;

    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:8181;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    autoindex off;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires 7d;  # Cache these static assets for 7 days (adjust as needed)
        add_header Cache-Control "public, max-age=604800, immutable";
    }
}

```

11. Restart Nginx to apply the configuration changes:

```bash
sudo service nginx restart
```

> [!NOTE]
> If you want to use your custom domain name and subdomain, replace the second `_` in `server_name _;` with your domain name and subdomain.

12. Access Your Application

You can now access your application in a web browser by navigating to `http://youripaddress`. The frontend will be served from the root, and the backend API will be available at `http://youripaddress/api`.
