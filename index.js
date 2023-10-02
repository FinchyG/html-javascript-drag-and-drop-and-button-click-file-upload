// variable to store and pass image BLOB data between upload and display functions
var uploadedFile;

// variable to store acceptable image file types
var validFileTypes = ["jpg", "jpeg", "bmp", "gif", "png"];

// function to process files dragged into drop zone
function dropHandler(ev) {
    
    // prevent default behavior of file being opened
    ev.preventDefault();

    // check for more than one file selected for upload - only one file is permitted
    if (Object.keys(ev.dataTransfer.items).length > 1) {
        alert("only one file can be uploaded");
    } else {
        // variable to store uploaded item as file
        let file = ev.dataTransfer.items[0].getAsFile();

        // check whether image file uploaded - only image files permitted
        let fileExtension = file.name.split('.')[1];
        if (validFileTypes.indexOf(fileExtension) > -1) {
            uploadedFileReader(file);
        } else {
            alert("only image files can be uploaded");
        }
    }
}

function dragOverHandler(ev) {
    // prevent default behavior of file being opened
    ev.preventDefault();
}

// upload image BLOB data from HTML file select button
function uploadFileData() {
    // variable to store uploaded item as file
    let file = document.getElementById('fileInput').files[0];
    // check whether image file uploaded - only image files permitted
    let fileExtension = file.name.split('.')[1];
    if (validFileTypes.indexOf(fileExtension) > -1) {
        uploadedFileReader(file);
    } else {
        alert("only image files can be uploaded");
    }
}

// code to read uploaded file
function uploadedFileReader(obj) {
    let reader = new FileReader();
    reader.readAsDataURL(obj);
    reader.onload = function () {
        uploadedFile = reader.result;
    };
    reader.onerror = function (error) {
        alert('Error: ', error);
    };
}


// display BLOB image data in HTML document
function viewImg() {
    const newImg = document.createElement("img");
    newImg.src = uploadedFile;
    newImg.alt = "alt text";
    document.getElementById("img1").appendChild(newImg);
}