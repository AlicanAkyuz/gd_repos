import { FC } from 'react'
import { Button, Typography } from 'antd'

export const NoDataView: FC<{
  text?: string
  callback?: () => void
}> = ({ text, callback }) => {
  return (
    <>
      <Typography>{text ? text : 'No Data Found!'}</Typography>;
      {callback && (
        <Button data-testid="no_data_view_button" onClick={callback}>
          Try again
        </Button>
      )}
    </>
  )
}
