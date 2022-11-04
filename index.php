<!--
  pages will have their own components
-->

<!--
  Necessary components for this page
-->


<!-- head section and header menu of the page -->
<!doctype html>
<html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="x-ua-compatible" content="IE=Edge">
    <meta name="theme-color" content="#000000">

    <meta name="description" content="SPH">

    <link rel="icon" type="image/png" href="./favicon.png">
    <link rel="apple-touch-icon" href="./favicon.png">

    <link rel="manifest" href="./manifest.json" />

    <title>SGX Coding Test</title>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Muli:wght@300;400;500;600;700&family=Poppins:wght@500;600;800&display=swap');
    </style>

    <link href="./assets/css/main.css" rel="stylesheet">

    <!-- components list must be same as foot ejs -->
    
    
    <link href="./components/header/header.css" rel="stylesheet">
    
    <link href="./components/footer/footer.css" rel="stylesheet">
    
    <link href="./components/form/form.css" rel="stylesheet">
    

  </head>

  <body>

    <!-- header component -->
    

<header class="navbar">
  <div class="d-flex flex-row flex-nowrap container-xl">
    <img src="./favicon.png"> SGX Coding Test
  </div>
</header>

    <!-- main content start -->
    <main>

<!-- Form -->
<form class="form">
    <div class="form-content">
        <h1>Simple Form</h1>
        <div class="row">
            <div class="col-lg-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
            </div>
            <div class="col-lg-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
            </div>
            <div class="col-12">
                <label for="description" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="description" placeholder="Description"></textarea>
            </div>
            <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
        </div>
    </div>
</form>
<!---------------------------------------------
  footer section of the page
-->


    </main>
    <!-- main content end -->

    <!-- footer component -->
    
<footer>
  <div class="footer-wrapper">
    <div class="footer-main">
      <div class="row">
        <div class="footer-main-content col-12">
          &copy; 2022 Alson Tan
        </div>
      </div>
    </div>
  </div>

</footer>

    <script src="./assets/js/index.js"></script>

    <!-- components list must be same as head ejs -->
    
    
    <script src="components/header/header.js"></script>
    
    <script src="components/footer/footer.js"></script>
    
    <script src="components/form/form.js"></script>
    
  </body>

</html>

