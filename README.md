# StaticStorm

## Unleash the power of simple, fast and secure websites.

![Banner](images/StaticStormbanner2.png)

<hr>

<!--
Visit At <a href="http://staticstorm.coderush.tech" target="_blank">staticstorm.coderush.tech</a>
-->

## 🚀 Getting Started

### Deployment

To deploy both the frontend and backend, follow these steps:

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
6.

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

    root /var/www/html;

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
}
```

11. Restart Nginx to apply the configuration changes\*\*:

```bash
sudo service nginx restart
```

12. Access Your Application

You can now access your application in a web browser by navigating to `http://youripaddress`. The frontend will be served from the root, and the backend API will be available at `http://youripaddress/api`.
