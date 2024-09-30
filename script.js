<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Calculator</title>
    <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" 
          rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <!-- Main HTML -->
    <div class="container">
        <h1>Student Grade Calculator</h1>

        <div class="screen-body-item">
            <div class="app">
                <!-- Input for number of subjects -->
                <div class="form-group">
                    <label for="numSubjects">Enter number of subjects:</label>
                    <input type="number" 
                           class="form-control" 
                           placeholder="Number of subjects" 
                           id="numSubjects" />
                </div>

                <!-- Button to generate subject and credit inputs -->
                <div>
                    <input type="button" 
                           value="Generate Fields" 
                           class="form-button" 
                           onclick="generateFields()" />
                </div>

                <!-- Container for dynamically generated subject inputs -->
                <div id="subjectContainer"></div>

                <!-- Button to calculate SGPA -->
                <div id="calculateButton" style="display: none;">
                    <input type="button" 
                           value="Calculate SGPA" 
                           class="form-button" 
                           onclick="calculateSGPA()" />
                </div>
            </div>
        </div>

        <!-- For showing the result -->
        <div class="form-group showdata">
            <p id="showdata"></p>
        </div>
    </div>

    <!-- Adding external JavaScript file -->
    <script src="script.js"></script>
</body>

</html>