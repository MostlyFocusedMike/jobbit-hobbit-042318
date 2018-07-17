import React from "react";
import { connect } from "react-redux";
import { updateHobbit } from './actions/index'


class EditHobbit extends React.Component {

  state = {
    id: null,
    name: '',
    title: '',
    key_skill: ''
  }

  componentDidUpdate (prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        title: this.props.title,
        key_skill: this.props.key_skill
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateHobbit(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ textAlign: "center" }}>
        <div>{this.state.name}</div>
        <form onSubmit={this.handleSubmit}>
          <h5> {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.selectedHobbit.id,
    name: state.selectedHobbit.name,
    title: state.selectedHobbit.title,
    key_skill: state.selectedHobbit.key_skill
  }
}

export default connect(mapStateToProps, { updateHobbit })(EditHobbit)
