// Upload form (test nodeapp upload)

export const uploadForm = (props) => {
  return `<article>
    <br />
    <form action="${props}" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label class="fileContainer">
          Click here to trigger the file uploader!
          <input type="file" name="image">
        </label>
      </div>
      <input type="submit" value="Upload Image" class="btn">
    </form>
  </article>`;
}
