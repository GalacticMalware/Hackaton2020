<!DOCTYPE html>
<html lang="en">
<head>
<title>SURE RED ALIADA</title>
    <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link rel="shortcut icon" href="{{ asset('img/logopdf.png') }}">
    <link rel="manifest" href="/manifest.json"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" >
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    
</head>
<body>
    <div id="app" >
        <v-app>
            
        </v-app>
    </div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
<script src="script.js"></script>
</html>