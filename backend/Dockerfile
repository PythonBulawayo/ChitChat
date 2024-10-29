FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt /app
# Installing gcc and libc6-dev beacuse docker removes them after building Python,
# so it's impossible to build C extensions afterwards, wcwidth==0.2.6 and cwcwidth==0.1.8 in this case
RUN apt-get update && apt-get install -y \
    gcc \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*
RUN pip install -r requirements.txt
COPY . /app

# Perform migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
