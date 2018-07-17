import React from "react";
import Hobbit from "./Hobbit";
import EditHobbit from "./EditHobbit";
import { connect } from "react-redux";

import { getHobbits } from "./actions/index"

class HobbitsContainer extends React.Component {

  componentDidMount () {
    this.props.getHobbits()
  }

  render () {
    console.log(this.props)
    const hobsWithJobs = this.props.hobbits.map((jobbit) => {
      return <Hobbit {...jobbit} />
    })
    return (
      <div>
        <div className="logo">Jobbit</div>
        <EditHobbit />
        {this.props.loading ? <div> Loading... </div> : (
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>)
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hobbits: state.hobbits
  }
}

export default connect(mapStateToProps, { getHobbits })(HobbitsContainer)
