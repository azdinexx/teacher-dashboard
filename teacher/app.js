const addsection = document.querySelector('.addsection');
let count = 2;

addsection.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
  <div class="addcourse_wrapper">
      <span>COURSE &gt; SECTION ${count}</span>
      <form action="">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />

        <label for="description">Description</label>
        <textarea name="description" id="description"></textarea>

        <label for="file">Video File</label>
        <input type="file" name="file" id="file" />
      </form>
    </div>
  `;
  count = count + 1;
  document.querySelector('#mycourses').appendChild(newDiv);
});
