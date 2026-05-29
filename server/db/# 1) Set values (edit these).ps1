# 1) Set values (edit these)
$mongo = "mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dbname?retryWrites=true&w=majority"  # must start with mongodb:// or mongodb+srv://
$jwt = "your_jwt_secret_here"

# 2) Write .env
@"
MONGO_URI=$mongo
PORT=5015
JWT_SECRET=$jwt
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password_here
EMAIL_FROM=Your Name <your_email@gmail.com>
EMAIL_SUB=Password Reset - HealthSaviour
EMAIL_TEXT=http://localhost:3000/resetpassword/
"@ | Set-Content -Path "C:\Users\shiva\Downloads\DoctorAppointment-master\DoctorAppointment-master\server\.env" -Encoding UTF8

# 3) (Optional) Find & kill any process using port 5015
netstat -ano | findstr :5015
# If a PID is shown, run (replace 12345 with the PID):
# taskkill /PID 12345 /F

# 4) Restart backend
cd "C:\Users\shiva\Downloads\DoctorAppointment-master\DoctorAppointment-master\server"
npm start

# 5) Quick verification (in another shell)
# Check server responds
Invoke-WebRequest https://healthsaviour-backend.onrender.com -UseBasicParsing