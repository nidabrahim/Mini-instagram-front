import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import API from '../api';
 
export default class MyUploader extends Component {

    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
      }
    
    _handleSubmit(e) {
        e.preventDefault();

        // const file = {
        //     file: this.state.file
        // };

        const fd = new FormData();
        fd.append('photo', this.state.file, this.state.file.name);

        // console.log('handle uploading-', this.state.file);
        // console.log('file :', file);

        API.post('post/photo', fd)
        .then(res => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file)

        reader.onload = (e) => {
            console.log(e.target.result);
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
    }
    
      render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    
        return (
          <div className="previewComponent">

            <div>
              <input className="fileInput" 
                type="file" name="file"
                onChange={(e)=>this._handleImageChange(e)} />

              <button className="submitButton" 
                type="submit" 
                onClick={(e)=>this._handleSubmit(e)} >Upload Image</button>
            </div>

            <div className="imgPreview">
              {$imagePreview}
            </div>

          </div>
        )
      }


//     render() {
//         return (
//             <ImagesUploader
//                 url="http://localhost:8080/api/post/photo"
//                 optimisticPreviews
//                 multiple={false}
//                 inputId="photo"
//                 onLoadEnd={(err) => {
//                     if (err) {
//                         console.error(err);
//                     }
//                 }}
//                 label="Upload a picture"
//                 />
//         );
//     }
 }