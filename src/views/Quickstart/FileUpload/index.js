import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageUploading from 'react-images-uploading';
import { styled } from '@mui/material/styles';

export default function FileUpload() {
  const [images, setImages] = React.useState([]);
  const [upload, setUpload] = React.useState(false);
  const [anaylze, setAnaylze] = React.useState(false);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log('===', imageList[0].data_url);
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setUpload(true);
  };
  const onAnaylze = () => {
    console.log('Hello');
    setAnaylze(true);
  };
  const CenteredImageContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh'
  });

  return (
    <>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" acceptType={['jpg']}>
        {({ imageList, onImageUpload, dragProps }) => (
          <div className="upload__image-wrapper">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label" onClick={onImageUpload} {...dragProps} disabled={upload}>
                Upload Image
              </Button>
            </Stack>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <CenteredImageContainer>
                  <img src={image.data_url} alt="" width="50%" />
                </CenteredImageContainer>
                <div className="image-item__btn-wrapper"></div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {upload ? (
        <Button variant="contained" component="label" onClick={onAnaylze}>
          Disease Anaylze
        </Button>
      ) : (
        <Button variant="contained" component="label" style={{ display: 'none' }}>
          Disease Anaylze
        </Button>
      )}
      <CenteredImageContainer>{anaylze ? <img src={images[0].data_url} width="50%" alt="Analysis result" /> : null}</CenteredImageContainer>
    </>
  );
}
