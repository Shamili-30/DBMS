// Helper function to handle form submission
function handleFormSubmit(formId, resultId) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // For demo, just show the JSON below form
    result.textContent = `Submitted data: ${JSON.stringify(data)}`;

    form.reset();
  });
}

handleFormSubmit('student-form', 'student-result');
handleFormSubmit('course-form', 'course-result');
handleFormSubmit('department-form', 'department-result');
handleFormSubmit('subject-form', 'subject-result');
handleFormSubmit('faculty-form', 'faculty-result');
