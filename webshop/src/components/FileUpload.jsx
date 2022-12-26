import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function FileUpload(props) {
  let fileToUpload;
 
  // Set the configuration for your app
  // TODO: Replace with your app's config object
  const firebaseConfig = {
    apiKey: 'AIzaSyAW3o4S3C5i4AVvx6piC1Zwat9cgWoqY5E', // login.jsx
    authDomain: 'react-11-2022.web.app', // firebase.json
    databaseURL: 'https://react-mihkel-webshop-11-2022-default-rtdb.europe-west1.firebasedatabase.app/',
    storageBucket: 'gs://react-mihkel-webshop-11-2022.appspot.com'
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);
  let metadata = {
      contentType: 'image/png'
    };
  function uploadPicture(file) {
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
              default:
                console.log('Default');
                break;
            }
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
              // ...
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
              default:
                // Unknown error that did not match any error
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              props.onSendPictureUrl(downloadURL);
            });
          }
        );
  }
  function handleFileInput(event) {
    fileToUpload = event.target.files[0];
    uploadPicture(fileToUpload);
  }
  return (<div>
    <input onChange={(e) => handleFileInput(e)} type="file" />
    {/* <button onClick={() => uploadPicture(fileToUpload)}>Lae üles</button> */}
  </div>)
}
export default FileUpload;