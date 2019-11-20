import React from 'react'

export default function Ribbon(props) {
  return (
    <div className="ribbon-wrap">
              <h1 className="ribbon">
                <strong className="ribbon-content">{props.name}</strong>
              </h1>
            </div>
  )
}

