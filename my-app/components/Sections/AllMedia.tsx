import React, {FC} from 'react'
import CustomSection from '../CustomSection'

interface AllMediaProps {}

const AllMedia: FC<AllMediaProps> = ({}) => {
  return (
    <CustomSection title={'media'}>
        <div style={{paddingBottom: '80px'}}>Доп соц сети</div>
    </CustomSection>
  )
}

export default AllMedia