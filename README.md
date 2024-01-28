# ChitChat Project Readme

ChitChat is a Python-powered Social Network.

## Installation

### Backend

1. cd into backend folder
    ```cd backend```

2. Create virtual environment
    ### Creating virtual environment
    ```python -m venv venv```

    ### Activating the virtual environment
    ```source venv/bin/activate```

    ### Activating the virtual environment on windows
    ```venv\Scripts\activate```

3. Install dependencies from the requirements text file.<br>
    ```pip install -r requirements.txt```



## Usage
To run this project do the following:

1. Make migrations:<br>
    ```python manage.py makemigrations```

2. Run migrations:<br>
    ```python manage.py migrate```

3. Create super user:<br>
    ```python manage.py createsuperuser```

4. Run the server:<br>
    ```python manage.py runserver```


### FrontEnd
1. cd into the frontend folder
```cd frontend```

2. Install dependencies
```npm install```

3. Run the development server
```npm run dev```



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)