FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /api
WORKDIR /api
COPY ./requirements.txt /api/

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg
RUN apt-get install -y aria2
RUN apt-get install -y cron
RUN apt-get install axel

RUN pip install -r requirements.txt

