import React from 'react'

function SectionTitle({title}: {title: string}) {
  return (
    <h2
      style={{
        color: '#F26522',
        textAlign: 'center',
        fontWeight: 'normal'
      }}
    > {title} </h2>
  )
}

export default SectionTitle