 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 480px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 16px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        h1 {
            font-size: 22px;
            color: #1e293b;
            margin-bottom: 8px;
        }
        p {
            color: #64748b;
            font-size: 15px;
            margin-bottom: 24px;
        }
        .otp-box {
            display: inline-block;
            background: #f0fdf4;
            border: 2px dashed #10b981;
            border-radius: 12px;
            padding: 16px 40px;
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 12px;
            color: #059669;
            margin-bottom: 24px;
        }
        .note {
            font-size: 13px;
            color: #94a3b8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Verify your email address</h1>
        <p>Use the code below to complete your registration.<br>It expires in <strong>10 minutes</strong>.</p>

        <div class="otp-box">{{ $otp }}</div>

        <p class="note">If you didn't create an account, you can safely ignore this email.</p>
    </div>
</body>
</html>