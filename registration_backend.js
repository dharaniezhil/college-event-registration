// Simple backend logic (mocked for local testing)
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const department = e.target.department.value;

  console.log(`Registered Student: ${name}, ${email}, ${department}`);
  alert("Registration Successful!");
});
