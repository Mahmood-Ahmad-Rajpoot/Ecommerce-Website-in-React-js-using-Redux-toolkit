import React from 'react'
import Styles from './ShopPage.module.css'
import { Button } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LockIcon from '@mui/icons-material/Lock';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
const FourthComponent = () => {
  const btnStyles={
    border:'1px solid grey',
    color:' grey'

  }
  return (
    <div className='d-flex w-100 gap-2 mt-3'>
      <Button sx={btnStyles} variant='outlined' startIcon={<FmdGoodIcon/>}>Nearest Store</Button>
      <Button sx={btnStyles} startIcon={<LockIcon/>}>VIP</Button>
      <Button sx={btnStyles} startIcon={<SettingsBackupRestoreIcon/>}>Return Policy</Button>
    </div>
  )
}

export default FourthComponent