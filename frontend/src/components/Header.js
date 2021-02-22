import React from 'react'

export default function Header({children}) {
  return <div style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>
    {children}
    </div>
}
