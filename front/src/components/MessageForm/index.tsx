import Paper from '@mui/material/Paper'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

type Props = {
  onClickSendIcon?: (value: string) => Promise<void>
  onKeyDownInput?: (value: string) => Promise<void>
}

export const MessageForm = ({ onClickSendIcon, onKeyDownInput }: Props) => {
  const [messageValue, setMessageValue] = useState('')
  const handleChangeTextarea = (value: string) => {
    setMessageValue(value)
  }

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: '16px 4px 16px 16px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TextField
        value={messageValue}
        inputProps={{ autoFocus: true }}
        onChange={(e) => handleChangeTextarea(e.target.value)}
        multiline
        maxRows={4}
        sx={{ flex: 1, mr: { sm: 1, md: 2 } }}
        placeholder="Send Your Message"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            onKeyDownInput && onKeyDownInput(messageValue)
            setMessageValue('')
          }
        }}
      />
      <IconButton
        size="large"
        color="primary"
        disabled={messageValue === ''}
        onClick={() => {
          onClickSendIcon && onClickSendIcon(messageValue)
          setMessageValue('')
        }}
      >
        <SendIcon fontSize="large" />
      </IconButton>
    </Paper>
  )
}
