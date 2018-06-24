// UI Forms

export const uiForms = () => {
  const tpl = `<section>
    <h4>Forms:</h4>
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="userName" class="form-control" placeholder="Wallet name">
      </div>
      <div class="form-group">
        <label>PubKey</label>
        <input type="text" name="userPubkey" class="form-control" placeholder="Wallet address">
        <small class="text-muted">
          Must be 20 characters long.
        </small>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="form-group">
        <label>Example select</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="form-group">
        <label>Example textarea</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label>Example file input</label>
        <input type="file" class="form-control-file">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
          <label class="form-check-label" for="exampleRadios2">
            Second default radio
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
    <form>
      <fieldset>
        <legend>Create contract:</legend>
        <div class="form-group">
          <label>Contract name</label>
          <input type="text" name="userName" class="form-control" placeholder="Wallet name">
        </div>
        <div class="form-group">
          <label>Contract description</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  </section>`;
  return tpl;
}
