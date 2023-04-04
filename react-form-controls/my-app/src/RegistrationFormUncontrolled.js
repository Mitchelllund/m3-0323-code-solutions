export default function RegistrationFormUncontrolled(props) {
  const { text } = props

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input name="userName"></input>
      </label>
      <label>
        Password: <input name="password"></input>
      </label>
      <button> { text }</button>
    </form>
  )
}
