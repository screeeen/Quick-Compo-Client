import React from 'react'

function TournamentLabels(props) {
  return (
    <div>
      <div className="tournament-cell no-background">
        <div>
          <p>{props.firstTitle}</p>
        </div>
        <div  >
          <p>{props.secondTitle}</p>
        </div>
        <div >
          <p>{props.thirdTitle}</p>
        </div>
        <div >
          <p>{props.fourthTitle}</p>
        </div>
        <div >
          <p>{props.fifthTitle}</p>
        </div>
        <div >
          <p>{props.sixthTitle}</p>
        </div>
        <div >
          <p>{props.seventhTitle}</p>
        </div>
      </div>
    </div>
  )
}
export default TournamentLabels

