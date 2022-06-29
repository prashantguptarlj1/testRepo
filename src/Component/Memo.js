import React, { memo } from 'react'

function Memo() {
    console.log('Memo file is called once because of React.memo fn')
  return (
    <div>Memo</div>
  )
}

export default memo(Memo)