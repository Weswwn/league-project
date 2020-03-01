class Form extends React.Componet {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <label>
          Search for your account!
          <input type='text' onChange={this.handleChange} />
        </label>
        <input type='submit' onSubmit={this.handleSubmit}/>
      </form>
    )
  }
}