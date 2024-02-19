# Project Documentation

[![Open in GitPod](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/PythonBulawayo/ChitChat) 

ChitChat is a Python powered social media platform initiated by Buluwayo Python developers.

The project is built using [Django](https://www.djangoproject.com/) for the backend and [React JS](https://react.dev/) for the frontend. The backend is located in the `backend` folder while the frontend is in the `frontend` folder.


## Installation

Here's how to get yourself started with ChitChat on your machine.

### Backend Initialization

Move into the backend folder from your terminal with the following command

```sh
cd backend
```

Initialize the virtual environment 

```sh
python -m venv venv
```

Activate the virtual environment 

```sh
# Unix
source venv/bin/activate

# Windows
venv\Scripts\activate
```

Install dependencies from the **requirements.txt** text file

```sh
pip install -r requirements.txt
```

### Backend Server Startup

To start your server, run the following commands from the **backend** folder, on your terminal.

Create database migrations from codebase

```sh
python manage.py makemigrations
```

Install the database migration

```sh
python manage.py migrate
```

Create a project super user

```sh
python manage.py createsuperuser
```

Run the server

```sh
python manage.py runserver
```


### Frontend Initialization

Move into the **frontend** folder

```sh
cd frontend
```

Install npm modules

```sh
npm install
```

Run the development server

```sh
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License

[MIT](./LICENSE.md)