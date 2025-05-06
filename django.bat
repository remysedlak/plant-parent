@echo off
cd /d "C:\Users\remysedlak\plant parent\backend"
call venv\Scripts\activate
python manage.py runserver
pause