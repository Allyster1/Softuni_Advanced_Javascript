function solve() {
  const previewRef = document.getElementById("preview-activity");
  const tableActivityRef = document.getElementById("activities-table");

  const activityRef = document.getElementById("type");
  const intensityRef = document.getElementById("intensity");
  const caloriesRef = document.getElementById("calories");
  const durationRef = document.getElementById("duration");
  const dateRef = document.getElementById("date");

  const addBtn = document.getElementById("add-activity");

  addBtn.addEventListener("click", addActivity);

  function clearContent() {
    activityRef.selectedIndex = 0;
    intensityRef.selectedIndex = 0;
    caloriesRef.value = "";
    durationRef.value = "";
    dateRef.value = "";
  }

  function addActivity() {
    const activity = activityRef.value;
    const intensity = intensityRef.value;
    const calories = caloriesRef.value;
    const duration = durationRef.value;
    const date = dateRef.value;

    if (
      activity === "" ||
      intensity === "" ||
      !calories ||
      !duration ||
      !date
    ) {
      return;
    }

    const content = `
      <li>
        <article>
          <p>Activity: ${activity}</p>
          <p>Intensity: ${intensity}</p>
          <p>Duration: ${duration}</p>
          <p>Date: ${date}</p>
          <p>Calories: ${calories}</p>
        </article>
        <div class="btn-container">
            <button class="edit-btn">Edit</button>
            <button class="next-btn">Next</button>
        </div>
      </li>
    `;

    previewRef.innerHTML = content;
    addBtn.disabled = true;
    clearContent();

    document.querySelector(".edit-btn").addEventListener("click", () => {
      activityRef.value = activity;
      intensityRef.value = intensity;
      durationRef.value = duration;
      dateRef.value = date;
      caloriesRef.value = calories;

      previewRef.innerHTML = "";
      addBtn.disabled = false;
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
      previewRef.innerHTML = "";

      const tableRow = `
        <tr>
          <td class="type-cell">${activity}</td>
          <td class="duration-cell">${duration}</td>
          <td class="calories-cell">${calories}</td>
          <td class="date-cell">${date}</td>
          <td class="intensity-cell">${intensity}</td>
          <td class="btn-cell">
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
      `;

      tableActivityRef.innerHTML = tableRow;
      addBtn.disabled = false;

      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.target.closest("tr").remove();
        });
      });
    });
  }
}
