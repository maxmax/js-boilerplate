// Ghibli api - ducks
// import {rqe} from '../../common/req';

// Templates
// https://morning-ridge-81350.herokuapp.com/api/pic/pictures
// const uploadUrl = "https://morning-ridge-81350.herokuapp.com/api/pic/upload";
const uploadUrl = "http://localhost:7070/api/pic/upload";

export const uploadForm = (props) => {
  // const { id, title, director, rt_score, release_date, description } = props;
  console.log("uploadForm props", props);
  const tpl = `<div>
    <form action="${uploadUrl}" method="POST" enctype="multipart/form-data">
      Select an image to upload:
      <input type="file" name="image">
      <br />
      <br />
      <input type="submit" value="Upload Image">
    </form>
  </div>`;
  return tpl;
}
