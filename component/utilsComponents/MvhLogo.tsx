import React, { FC } from 'react'
import { mvhLogo } from '../../src/assets/index'

const MvhLogo: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <img src={mvhLogo} alt={'MVH'} />
    </div>
  )
}
export default MvhLogo
