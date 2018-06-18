// Upload form

export const uploadForm = (props) => {
  return `<article>
    <form action="${props}" method="POST" enctype="multipart/form-data">
      Select an image to upload:
      <input type="file" name="image">
      <br />
      <br />
      <input type="submit" value="Upload Image">
    </form>
  </article>`;
}
